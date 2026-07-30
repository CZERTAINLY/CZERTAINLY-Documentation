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

Build (or obtain) `OmniTrust.Ilm.MsAdcs.Connector.msi`, then install from an elevated prompt.

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
| `ADDFIREWALLRULE` | *(off)* | Set to exactly `1` to add an inbound TCP firewall rule for `LISTENPORT`, scoped to the domain network profile only. |

The install registers a Windows Service named **`msadcs-ng-connector`**, started automatically and
configured to restart on crash. The MSI install is blocked with a clear message if the RSAT AD CS
management tools are absent (see [Host prerequisites](#host-prerequisites) above).

Full operator-facing configuration (listen URL/TLS, timeouts, inbound authentication, and the
other operational settings under `Adcs:*`) is out of scope for this guide - see the connector's own
operator deployment guide for that detail.

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

## Verify

```powershell
Invoke-WebRequest http://localhost:8443/v2/health
```

Expect HTTP 200. If it isn't, confirm the RSAT AD CS management tools are installed and that the
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
