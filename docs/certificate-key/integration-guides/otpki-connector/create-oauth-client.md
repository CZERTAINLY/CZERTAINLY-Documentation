---
sidebar_position: 3
---

# Create OAuth Client

The OTPKI Connector authenticates to OTPKI with an OAuth 2.0 access token that it obtains through the **client credentials** grant. This step creates the client the connector uses, and makes sure that OTPKI resolves its token to a user holding the role created in [Create Role and Permissions](./create-role.md).

:::warning[The client must belong to an identity provider registered in OTPKI]
OTPKI accepts an access token only if one of the identity providers registered in it can introspect the token successfully. It looks for the provider whose issuer URL matches the `iss` claim of the token, and falls back to trying the remaining registered providers. A client created in a provider that OTPKI does not know is therefore rejected, regardless of whether the token itself is valid.
:::

## Create the client

In the identity provider that OTPKI is registered with, create a confidential client for the connector and enable the client credentials grant for it. OTPKI supports any compliant OpenID Connect provider, so the exact steps depend on the product you use.

Note the following values, they are needed when the `Authority` is created in the platform:

- the **client ID** and the **client secret**,
- the **token endpoint** of the provider, for example `https://<otpki-host>/kc/realms/otpki/protocol/openid-connect/token` for a Keycloak realm,
- the **scope** and the **audience**, if the provider requires them.

## Configure the token claims

OTPKI builds the identity of the caller from the claims of the introspected token:

| Claim                                | Required | Used as                                                                       |
|--------------------------------------|----------|---------------------------------------------------------------------------------|
| `sub`                                | Yes      | The stable identifier of the OTPKI user                                        |
| `iss`                                | Yes      | The issuer, which must match a registered identity provider                    |
| `username`, or `preferred_username`  | Yes      | The username of the OTPKI user                                                 |
| `roles`                              | Yes (for permissions) | The names of the OTPKI roles assigned to the user. Unlike the claims above, a missing `roles` claim does not fail authentication — it clears the user's roles instead, see the warning below. |

:::warning[The `roles` claim is not optional]
OTPKI refreshes the roles of the user from the `roles` claim on every authentication. A role that is assigned by hand to the user is therefore removed again the next time the connector calls OTPKI, and the integration starts failing with permission errors.

Configure the identity provider to include the name of the role created in [Create Role and Permissions](./create-role.md) in the `roles` claim of the token issued to the connector.
:::

Make sure the claims are present in the **token introspection** response, not only in the access token. OTPKI reads them from the introspection result. In Keycloak, this is the **Add to token introspection** option of each protocol mapper.

## Allow the user to be created

The OTPKI user of the connector is created on the first successful call, provided that **Create Unknown Users** is enabled on the identity provider. If it is disabled, create the user in OTPKI beforehand with an OIDC subject and issuer that match the claims of the token.

Leave **Create Unknown Roles** disabled, so that OTPKI does not create empty roles from whatever the token happens to carry. With the setting disabled, a role name in the `roles` claim that does not exist in OTPKI is ignored without an error, so check the spelling against the role you created if the connector ends up with no permissions.

For more information, refer to [Identity Providers](https://docs.otpki.com/docs/operations/administration/identity/identity-providers/) and [Users](https://docs.otpki.com/docs/operations/administration/identity/users/).

## Allow network access

The OTPKI Connector opens outbound connections to both of the following, so both must be reachable from wherever the connector runs:

- the **OTPKI base URL**, for example `https://otpki.example.com`,
- the **token endpoint** of the identity provider.

OTPKI must in turn be able to reach the introspection endpoint of the identity provider.

If either the OTPKI server or the identity provider is served by a private certification authority, its CA certificates are supplied through the **TLS trust** attribute of the `Authority`, see [Create Authority](./create-authority.md).

:::info
Firewall configuration depends on the infrastructure setup. Test the communication and confirm that the required access is working to avoid issues during the configuration of the `Authority`.
:::
