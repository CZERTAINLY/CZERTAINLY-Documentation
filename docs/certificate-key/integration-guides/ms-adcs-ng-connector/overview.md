---
sidebar_position: 1
---

# Overview

The **Microsoft ADCS NG Connector** is a native connector for Active Directory Certificate Services
(AD CS). It drives the Certificate Authority directly over **MS-WCCE (COM/DCOM)** — the same
protocol Microsoft's own `certreq`/`certutil` tools use — and runs as a **Windows Service**,
installed on the host via a **WiX MSI** (or a PowerShell fallback script).

## How it differs from the legacy connector

The platform's existing [Active Directory Certificate Services](../adcs/overview.md) integration
guide covers the legacy `ms-adcs-connector`, which reaches the CA host through **WinRM** and the
**PSPKI** PowerShell module, using PowerShell remoting.

The NG connector removes that remoting layer entirely:

| Aspect | Legacy `ms-adcs-connector` | NG connector |
| --- | --- | --- |
| Transport to the CA | WinRM + PSPKI remoting | MS-WCCE over COM/DCOM |
| Remote PowerShell required | Yes | No |
| PSPKI module required | Yes | No |
| Runs as | Scheduled/remote PowerShell session | Windows Service |
| Installed via | Module install + WinRM/firewall setup | WiX MSI (or install script) |

If your environment already has WinRM and PSPKI configured for the legacy connector, both can
coexist; there is no requirement to migrate. For new deployments — or where WinRM/PSPKI remoting is
undesirable or locked down — the NG connector is the preferred option, since it needs no WinRM
listener, no PSPKI module, and no remote PowerShell session between the connector host and the CA.

## Host prerequisites

The NG connector needs a **domain-joined Windows Server** host, on the same domain (or a trusted
domain) as the CA(s) it talks to, with the **RSAT AD CS management tools** ("Active Directory
Certificate Services Tools" Windows feature) installed. It ships as a self-contained `win-x64`
executable, so no separate .NET runtime install is required. See
[Deployment](./deployment.md) for the exact host checklist.

## How it fits

The platform talks to the connector's HTTP surface over the network (directly, or through a load balancer
in front of a fleet of stateless instances); the connector in turn talks to the CA over MS-WCCE
COM/DCOM:

```
Platform  -->  MS ADCS NG connector (Windows Service)  -->  MS-WCCE (COM/DCOM)  -->  Certificate Authority
```

## Scope of this guide

This guide covers only what is specific to the NG connector:

| # | Reference | Short description |
| --- | --- | --- |
| 1 | [Deployment](./deployment.md) | Host prerequisites, the service identity, and confirming the connector is reachable. Install/upgrade mechanics live in the connector's operator deployment guide. |
| 2 | [Permissions](./permissions.md) | The service logon right, CA permissions, and the DCOM/RPC firewall access the connector's identity needs to run. |

Everything else is common to any ADCS integration and is already covered elsewhere — follow the
existing [Active Directory Certificate Services](../adcs/overview.md) guide for the service-account
and CA-side setup (specifically [Active Directory permissions](../adcs/create-user.md#active-directory-permissions)
and [ADCS permissions](../adcs/create-user.md#adcs-permissions) — the WinRM section of that page does
not apply to the NG connector), and the
[quick start](../../quick-start/overview.md) for creating the `Authority` and `RA Profile` and
registering the connector.
