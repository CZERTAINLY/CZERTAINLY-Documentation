---
sidebar_position: 2
---

# Deployment

The connector runs as a Windows Service on a domain-joined Windows Server host. This page covers only
what the platform integration depends on - host prerequisites, the service identity, and confirming
the connector is reachable. Installing, upgrading, and TLS/operational configuration are the
connector's own concern and are documented in its
[operator deployment guide](https://github.com/OmniTrustILM/ms-adcs-ng-connector/blob/main/docs/deployment.md).

## Host prerequisites

- **Domain-joined Windows Server**, on the same domain (or a trusted domain) as the CA(s) it will
  talk to.
- **RSAT AD CS management tools** installed (the "Active Directory Certificate Services Tools"
  Windows feature) - these provide `certadm.dll`, which the connector needs for revoke, cancel, and
  identify.
- **Network reachability to the CA** over DCOM - see [Permissions](./permissions.md) for the exact
  ports and access group.
- No separate .NET runtime to install - the connector ships as a self-contained `win-x64`
  executable.

Domain membership also lets the connector read Active Directory for CA and certificate-template
*display* metadata (the "discovered CA" picker and template dropdown friendly names) - optional
enrichment, not a hard dependency. Manual CA entry and un-enriched names keep working without it; see
[Permissions](./permissions.md) for details.

## Service identity

The connector authenticates to the CA with whatever identity its Windows Service runs under.
Whichever you choose, it must hold the CA permissions described in [Permissions](./permissions.md).

| Identity | Password to manage? | Notes |
| --- | --- | --- |
| **gMSA** (recommended) | No - AD-managed, auto-rotated | One gMSA can be authorized to run on many hosts. Preferred for any multi-instance fleet. |
| **sMSA** | No - AD-managed | Same passwordless benefit as a gMSA, but tied to a single host. |
| **Domain user** | Yes - a stored password you must rotate | Fallback when your domain doesn't support (g/s)MSAs. |
| **Built-in** (`NetworkService` / `LocalSystem`) | No | Authenticates as the host's own computer account. Coarser-grained: the CA permissions end up granted to the whole computer account. |

`LocalService` is not supported - it has no network identity and cannot authenticate to the CA.

## Getting the connector

The connector is distributed as a Windows Installer package (`.msi`). Download it from the connector's
[GitHub release](https://github.com/OmniTrustILM/ms-adcs-ng-connector/releases) - each release also
publishes a `SHA256SUMS` file to verify the download - or build it from source. Installation,
service-identity setup, upgrades, and HTTPS/TLS are all covered in the connector's
[operator deployment guide](https://github.com/OmniTrustILM/ms-adcs-ng-connector/blob/main/docs/deployment.md).

## Verify

Once the connector is deployed, confirm it answers its health endpoint before registering it in Core:

```powershell
Invoke-WebRequest http://localhost:8443/v2/health
```

Expect HTTP 200 (use the `https://` URL and port if the connector terminates TLS itself). If it isn't
200, confirm the RSAT AD CS management tools are installed and that the service identity holds the
permissions in [Permissions](./permissions.md).
