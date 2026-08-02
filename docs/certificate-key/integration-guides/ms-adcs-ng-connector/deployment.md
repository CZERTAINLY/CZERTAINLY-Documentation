---
sidebar_position: 2
---

# Deployment

The connector runs as a Windows Service on a domain-joined Windows Server host. This page covers only
what the platform integration depends on — host prerequisites, the service identity, and confirming
the connector is reachable, plus configuring it to serve over HTTPS. Installing, upgrading, and the
remaining operational configuration are the connector's own concern and are documented in its
[operator deployment guide](https://github.com/OmniTrustILM/ms-adcs-ng-connector/blob/main/docs/deployment.md).

## Host prerequisites

- **Domain-joined Windows Server**, on the same domain (or a trusted domain) as the CA(s) it will
  talk to.
- **RSAT AD CS management tools** installed (the "Active Directory Certificate Services Tools"
  Windows feature) — these provide `certadm.dll`, which the connector needs for revoke, cancel, and
  identify.
- **Network reachability to the CA** over DCOM — see [Permissions](./permissions.md) for the exact
  ports and access group.
- No separate .NET runtime to install — the connector ships as a self-contained `win-x64`
  executable.

Domain membership also lets the connector read Active Directory for CA and certificate-template
*display* metadata (the "discovered CA" picker and template dropdown friendly names) — optional
enrichment, not a hard dependency. Manual CA entry and un-enriched names keep working without it; see
[Permissions](./permissions.md) for details.

## Service identity

The connector authenticates to the CA with whatever identity its Windows Service runs under.
Whichever you choose, it must hold the CA permissions described in [Permissions](./permissions.md).

| Identity | Password to manage? | Notes |
| --- | --- | --- |
| **gMSA** (recommended) | No — AD-managed, auto-rotated | One gMSA can be authorized to run on many hosts. Preferred for any multi-instance fleet. |
| **sMSA** | No — AD-managed | Same passwordless benefit as a gMSA, but tied to a single host. |
| **Domain user** | Yes — a stored password you must rotate | Fallback when your domain doesn't support (g/s)MSAs. |
| **Built-in** (`NetworkService` / `LocalSystem`) | No | Authenticates as the host's own computer account. Coarser-grained: the CA permissions end up granted to the whole computer account. |

`LocalService` is not supported — it has no network identity and cannot authenticate to the CA.

## Serving over HTTPS

By default the connector listens on plain **HTTP** (`LISTENPORT`), which is the normal topology: TLS
terminates at the load balancer or reverse proxy in front of the fleet, and each instance speaks
plain HTTP behind it. When a host must terminate TLS itself — the platform reaching it directly, or no
TLS-terminating proxy available — the connector does so with native ASP.NET Core Kestrel: bind an
`https://` URL and supply a certificate through standard Kestrel configuration; there is no
connector-specific TLS mechanism. The exact steps, options, and caveats are covered in the
connector's [operator deployment guide](https://github.com/OmniTrustILM/ms-adcs-ng-connector/blob/main/docs/deployment.md#kestrel--tls-binding).

## Verify

Once the connector is deployed, confirm it answers its health endpoint before registering it in the platform:

```powershell
Invoke-WebRequest http://localhost:8443/v2/health
```

Expect HTTP 200 (use the [`https://` URL](#serving-over-https) and port if the connector terminates
TLS itself). If it isn't 200, confirm the RSAT AD CS management tools are installed and that the
service identity holds the permissions in [Permissions](./permissions.md).
