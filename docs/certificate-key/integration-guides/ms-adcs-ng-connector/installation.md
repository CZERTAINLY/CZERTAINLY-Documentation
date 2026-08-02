---
sidebar_position: 2
---

# Installation

## Host prerequisites

- **Domain-joined Windows Server**, on the same domain (or a trusted domain) as the CA(s) it will
  talk to.
- **RSAT AD CS management tools** installed (the "Active Directory Certificate Services Tools"
  Windows feature). These provide `certadm.dll`, which the connector needs for revoke, cancel, and
  identify. Without it, the MSI install is blocked with a clear message, and a host that is
  otherwise missing them reports not-ready on its readiness check so a load balancer stops routing
  to it.
- **Network reachability to the CA** over DCOM - see [Permissions](./permissions.md) for the
  exact ports and access group.
- No separate .NET runtime to install - the connector ships as a self-contained `win-x64`
  executable.

Domain membership also lets the connector read Active Directory for CA and certificate-template
*display* metadata (the "discovered CA" picker and template dropdown friendly names) - see
[Permissions](./permissions.md) for details. This is optional enrichment, not a hard dependency:
manual CA entry and un-enriched names keep working without it.

## Choose a service identity

The connector authenticates to the CA with whatever identity the Windows Service runs under. Any of
the identities below is accepted by both installers; whichever you choose, it must hold the CA
permissions described in [Permissions](./permissions.md).

| Identity | Password to manage? | Notes |
| --- | --- | --- |
| **gMSA** (recommended) | No - AD-managed, auto-rotated | One gMSA can be authorized to run on many hosts. Preferred for any multi-instance fleet. |
| **sMSA** | No - AD-managed | Same passwordless benefit as a gMSA, but tied to a single host. |
| **Domain user** | Yes - a stored password you must rotate | Fallback when your domain doesn't support (g/s)MSAs. |
| **Built-in** (`NetworkService` / `LocalSystem`) | No | Authenticates as the host's own computer account. Coarser-grained: the CA permissions end up granted to the whole computer account. `NetworkService` is the installer default. |

`LocalService` is not supported - it has no network identity and cannot authenticate to the CA.

## Install via MSI (primary)

Download `msadcs-ng-connector-<version>.msi` from the connector's
[GitHub release](https://github.com/OmniTrustILM/ms-adcs-ng-connector/releases) - each release also
publishes a `SHA256SUMS` file to verify the download, and the MSI is Authenticode-signed once release
signing is configured - or build it from source. Then install from an elevated prompt. The
`msiexec` commands below use the generic name `OmniTrust.Ilm.MsAdcs.Connector.msi`; substitute the
filename you actually downloaded.

gMSA/sMSA (recommended):

```powershell
msiexec /i OmniTrust.Ilm.MsAdcs.Connector.msi SERVICEACCOUNT="CORP\svc-adcs$" LISTENPORT=8443 /qn /l*v install.log
```

Domain user:

```powershell
msiexec /i OmniTrust.Ilm.MsAdcs.Connector.msi SERVICEACCOUNT="CORP\svc-adcs" SERVICEPASSWORD="..." LISTENPORT=8443 /qn
```

:::warning[Domain-user password visibility]
`SERVICEPASSWORD` is marked hidden and is never written to the MSI log, even with `/l*v`. It is
still visible in the process list / command history for the duration of the install, since it is
passed on the command line. Prefer a gMSA/sMSA (passwordless) identity where policy allows it.
:::

Built-in identity (`LocalSystem` shown; omitting `SERVICEACCOUNT` defaults to
`NT AUTHORITY\NetworkService`):

```powershell
msiexec /i OmniTrust.Ilm.MsAdcs.Connector.msi SERVICEACCOUNT="LocalSystem" LISTENPORT=8443 /qn
```

Public MSI properties used above:

| Property | Default | Purpose |
| --- | --- | --- |
| `SERVICEACCOUNT` | `NT AUTHORITY\NetworkService` | Service identity - see [Choose a service identity](#choose-a-service-identity) above. |
| `SERVICEPASSWORD` | *(empty)* | Only for the domain-user case; leave empty for gMSA/sMSA and built-in accounts. |
| `LISTENPORT` | `8443` | Listen port. |
| `LISTENURL` | `http://+:[LISTENPORT]` | Full bind URL. Defaults to plain HTTP on `LISTENPORT`; set an `https://…` URL to terminate TLS directly - see [Serving over HTTPS](#serving-over-https). |
| `ADDFIREWALLRULE` | *(off)* | Set to exactly `1` to add an inbound TCP firewall rule for `LISTENPORT`, scoped to the domain network profile only. |

The install registers a Windows Service named **`msadcs-ng-connector`**, started automatically and
configured to restart on crash. The MSI install is blocked with a clear message if the RSAT AD CS
management tools are absent (see [Host prerequisites](#host-prerequisites) above).

Serving the connector over HTTPS is covered in [Serving over HTTPS](#serving-over-https) below. The
remaining operator-facing configuration (timeouts, inbound authentication, and the other operational
settings under `Adcs:*`) is out of scope for this guide - see the connector's own operator deployment
guide for that detail.

Uninstall via Add/Remove Programs, or:

```powershell
msiexec /x OmniTrust.Ilm.MsAdcs.Connector.msi /qn
```

## Install via `Install-Service.ps1` (fallback)

For environments that can't run the MSI:

```powershell
.\Install-Service.ps1 `
    -ServiceAccount 'CORP\svc-adcs$' `
    -ListenUrl 'http://+:8443' `
    -BinaryPath 'C:\path\to\OmniTrust.Ilm.MsAdcs.Api.exe'
```

Add `-ServicePassword` only for a domain-user account. The value itself never reaches a
child-process command line (the script hands it to `New-Service -Credential` as a `SecureString`),
but it is still visible in *this* command's own process list / shell history for the duration of the
install, so prefer a gMSA/sMSA (passwordless) identity where policy allows it. `-ServiceName`
defaults to `msadcs-ng-connector`, the same name the MSI registers. `Uninstall-Service.ps1` removes
it.

## Serving over HTTPS

By default the connector listens on plain **HTTP** (`LISTENPORT`), which is the normal topology: TLS
terminates at the load balancer or reverse proxy in front of the fleet, and each instance speaks
plain HTTP behind it. When a host must terminate TLS itself - Core reaching it directly, or no
TLS-terminating proxy available - the connector does so with native ASP.NET Core Kestrel. There is
no connector-specific TLS key; it is standard Kestrel configuration.

**1. Bind an `https://` URL at install time** with `LISTENURL`:

```powershell
# MSI:
msiexec /i OmniTrust.Ilm.MsAdcs.Connector.msi LISTENURL="https://+:8443" LISTENPORT=8443 SERVICEACCOUNT="CORP\svc-adcs$" /qn

# Install-Service.ps1:
.\Install-Service.ps1 -ServiceAccount 'CORP\svc-adcs$' -ListenUrl 'https://+:8443' -BinaryPath 'C:\path\to\OmniTrust.Ilm.MsAdcs.Api.exe'
```

**2. Supply the certificate** via native Kestrel config in the upgrade-safe
`%ProgramData%\OmniTrust\MsAdcsNgConnector\appsettings.json` - either the machine store (recommended,
passwordless) or a PFX file.

(a) Machine store (certificate already imported into `LocalMachine\My`):

```json
{ "Kestrel": { "Certificates": { "Default": {
  "Subject": "connector.example.com", "Store": "My", "Location": "LocalMachine", "AllowInvalid": false
} } } }
```

(b) PFX file + password:

```json
{ "Kestrel": { "Certificates": { "Default": {
  "Path": "C:\\ProgramData\\OmniTrust\\MsAdcsNgConnector\\connector.pfx", "Password": "..."
} } } }
```

Key points:

- The service **account must be able to read the certificate's private key** (store route:
  `certlm.msc` → the certificate → *All Tasks* → *Manage Private Keys* → grant *Read* to the service
  account; PFX route: grant read access on the `.pfx` file).
- Kestrel selects the store certificate by `Subject` - there is no thumbprint selector - so keep the
  subject unambiguous in `LocalMachine\My`.
- The PFX route stores a password in `appsettings.json`; restrict that file's ACL and prefer the
  store route where possible.
- If you enable the optional firewall rule, set `LISTENPORT` to the same port as the `https`
  `LISTENURL` so the rule opens the port Kestrel is actually bound to.

For the full operator reference (every TLS option and caveat), see the connector's
[operator deployment guide](https://github.com/OmniTrustILM/ms-adcs-ng-connector/blob/main/docs/deployment.md#kestrel--tls-binding).

## Verify

```powershell
Invoke-WebRequest http://localhost:8443/v2/health
```

Expect HTTP 200. If you configured [direct HTTPS](#serving-over-https), use the `https://` URL and
port instead. If it isn't 200, confirm the RSAT AD CS management tools are installed and that the
service identity holds the permissions in [Permissions](./permissions.md).

## Upgrade

Installing a newer MSI over an existing install is an **in-place upgrade** - use `msiexec /i` for
both the first install and every subsequent upgrade:

```powershell
msiexec /i OmniTrust.Ilm.MsAdcs.Connector.msi SERVICEACCOUNT="CORP\svc-adcs$" LISTENPORT=8443 /qn
```

The upgrade remembers the prior `SERVICEACCOUNT`, `LISTENPORT`, and `ADDFIREWALLRULE` - you don't
need to re-specify them for the upgrade to keep the same values. The one exception is
`SERVICEPASSWORD`: it is never persisted, so a domain-user install must re-supply it on the upgrade
command line. Do **not** use `REINSTALL=`/`REINSTALLMODE=` switches - they target an
already-installed product by its `ProductCode`, and a rebuilt package can have a new `ProductCode`,
so they may leave a broken or partial install. No manual uninstall is needed between installs.
