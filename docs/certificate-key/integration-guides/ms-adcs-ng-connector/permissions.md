---
sidebar_position: 3
---

# Permissions

This page covers the permissions the connector's **service identity** needs to run — logging on as
a service, talking to the CA over DCOM, and acting against the CA and its certificate templates.
For creating the identity itself and the general click-path for granting CA rights through the
Certification Authority MMC, follow the existing
[Active Directory Certificate Services](../adcs/overview.md) guide's
[Active Directory permissions](../adcs/create-user.md#active-directory-permissions) and
[ADCS permissions](../adcs/create-user.md#adcs-permissions) sections — the WinRM section of that
page does not apply to the NG connector. This page adds only the deltas specific to the NG
connector's COM/DCOM transport.

## Service logon right

Whichever identity you chose in [Deployment](./deployment.md#service-identity), it
must hold the **"Log on as a service"** right (`SeServiceLogonRight`) on the connector host.

- For a gMSA, sMSA, or domain user, the connector's installer grants this right automatically — no
  manual `secpol.msc` step is needed.
- The built-in `NetworkService` and `LocalSystem` accounts already hold it.
- If a **domain GPO** manages this right for the host, the local grant made by the installer is
  reverted at the next policy refresh. In that case, add the identity to the GPO's "Log on as a
  service" list, or use a gMSA.

### Example: creating a gMSA

```powershell
# Once per domain, if no KDS root key exists yet:
Add-KdsRootKey -EffectiveTime (Get-Date).AddHours(-10)

# Create the gMSA and authorize the connector hosts to use it:
New-ADServiceAccount -Name svc-adcs `
    -DNSHostName svc-adcs.corp.example `
    -PrincipalsAllowedToRetrieveManagedPassword connector-hosts-group

# On each connector host (as an administrator):
Install-ADServiceAccount -Identity svc-adcs
Test-ADServiceAccount -Identity svc-adcs   # expect True
```

Then grant `CORP\svc-adcs$` the CA permissions below, on each CA the connector will serve.

## CA permissions

Grant these to the service identity, **on each CA** the connector will serve, via the
Certification Authority MMC (CA properties → Security tab):

1. **Enroll** on the certificate templates the connector will issue against.
2. **Request Certificates** on the CA — together with (1), this covers issue and renew.
3. **Issue and Manage Certificates** (the CA's "Certificate Manager"/"Officer" right) — needed for
   revoke, cancel/deny, and the CA-database queries behind identify.

Use [Create User](../adcs/create-user.md#adcs-permissions) for the general click-path of granting
CA rights to an identity; the rights listed above are the ones this connector specifically needs.

## DCOM and RPC access

MS-WCCE is a DCOM protocol, so the service identity additionally needs:

- Membership in the **"Certificate Service DCOM Access"** local group on the CA host. Without it,
  every call fails with `E_ACCESSDENIED` (surfaced by the connector as a `FORBIDDEN`/403 error).
- A firewall path from the connector host to the CA for:
  - **TCP 135** — the RPC endpoint mapper.
  - The **dynamic RPC port range**, unless the CA is configured with a **pinned RPC port** — in
    which case only that single port needs to be open. Pinning the port is a CA-side/firewall
    setting; the connector only consumes the configured value, it does not configure the CA.

This is the connector's one network-level requirement that the legacy WinRM-based connector does
not have — the legacy connector reaches the CA host over WinRM (TCP 5985/5986), not DCOM.

## AD read (optional)

Domain membership lets the connector read Active Directory for CA and certificate-template
*display* metadata — the data behind the "discovered CA" picker in authority setup and the
certificate-template dropdown's friendly names. It reads the **Enrollment Services** and
**Certificate Templates** containers under the AD configuration naming context
(`CN=Public Key Services,CN=Services,<configurationNamingContext>`), which are readable by
**Authenticated Users** under AD's default ACLs — no dedicated grant is normally needed beyond the
service identity's own domain membership.

This is enrichment, not a dependency: if the host is not domain-joined, or AD is unreachable at
call time, the connector degrades gracefully instead of failing. Manual CA entry and raw,
un-enriched CA/template names keep working either way — only the "discovered CA" list and the
AD display-name enrichment are affected, coming back empty or with COM-only labels instead of an
error.
