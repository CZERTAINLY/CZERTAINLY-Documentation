---
sidebar_position: 30
---

# Authentication

`Authentication` settings include options for customizing how authentication is handled, with a focus on managing `OAuth 2.0 Providers`.

## Creating OAuth 2.0 Provider

:::danger[TODO]
- link to API
- configuration of OAuth2 provider for session cookies and JWT authentication
:::

An OAuth 2.0 Provider can be set by calling `/v1/settings/authentication/oauth2providers/{providerName}`. Provider name is an arbitrary value which uniquely identifies the provider among other providers.

Following table says how the properties should be set. When applicable, a property should value equal to the value of corresponding OpenID Endpoint. Values of these endpoints can be found in OpenID Endpoint Configuration.

| Property Name              | Description                                                                                                                                    | Endpoint Name          | Required                                    |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|---------------------------------------------|
| issuerUrl                  | URL of issuer, this must be configured to enable authentication with JWT token.                                                                | issuer                 | <span class="badge badge--danger">NO</span> |
| clientId                   | The name of OIDC client configured for Keycloak authentication.                                                                                | N/A                    | <span class="badge badge--danger">NO</span> |
| clientSecret               | Client secret for accessing the client during proccess of authentication.                                                                      | N/A                    | <span class="badge badge--danger">NO</span> |
| authorizationUrl           | The URL where the authorization server redirects the user for login and authorization.                                                         | authorization_endpoint | <span class="badge badge--danger">NO</span> |
| tokenUrl                   | The URL used to exchange the authorization code or credentials for an access token.                                                            | token_endpoint         | <span class="badge badge--danger">NO</span> |
| jwkSetUrl                  | The URL where the JSON Web Key Set (JWKS) containing the public keys used to verify JWT tokens can be retrieved.                               | jwks_uri               | <span class="badge badge--danger">NO</span> |
| logoutUrl                  | The URL to end session on provider side.                                                                                                       | end_session_endpoint   | <span class="badge badge--danger">NO</span> |
| postLogoutUrl              | The URL that user will be redirected after logout from application. This URL must be included in the client's Valid post logout redirect URIs. | N/A                    | <span class="badge badge--danger">NO</span> |
| userInfoUrl                | The URL containing information about user.                                                                                                     | userinfo_endpoint      | <span class="badge badge--danger">NO</span> |
| scope                      | List of scopes that define the access levels and permissions requested by the client application.                                              | N/A                    | <span class="badge badge--danger">NO</span> |
| audiences                  | List of expected audiences for validating the issued tokens, used to match the intended recipients of the tokens.                              | N/A                    | <span class="badge badge--danger">NO</span> |
| skew                       | The allowed time skew, in seconds, for token validation. This accounts for clock differences between systems. Default value is 30 seconds.     | N/A                    | <span class="badge badge--danger">NO</span> |
| sessionMaxInactiveInterval | Duration in seconds after which will inactive user's session be terminated on CZERTAINLY side. Default value is 15 minutes.                    | N/A                    | <span class="badge badge--danger">NO</span> |

Example of how to set a provider can be found in [Keycloak Integration Guide](../integration-guides/keycloak/provider-settings).
