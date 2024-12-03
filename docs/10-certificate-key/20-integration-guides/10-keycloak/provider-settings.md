# Set Keycloak as OAuth 2.0 Provider in Settings

In order to be able to use Keycloak for authentication, it must be configured in  [Authentication Settings](../../settings/authentication).

After creating Realm and Client as instructed in previous step, OpenID Endpoint Configuration can be found at `http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/.well-known/openid-configuration`. An excerpt from the configuration with relavant endpoints could look like this:

```json
{
    "issuer":"http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/",
    "authorization_endpoint":"http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/protocol/openid-connect/auth",
    "token_endpoint":"http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/protocol/openid-connect/token", ...,
    "end_session_endpoint":"http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/protocol/openid-connect/logout", ..., 
    "jwks_uri":"http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/protocol/openid-connect/certs",...
}
```

In the example, the name of provider will be set ``keycloak``, authentication with JWT token will be enabled, only tokens with audience ``czertainly`` will be accepted and the user will be logged out after 10 minutes. Since the client is of type OpenID Client, the scopes must include ``openid`` scope.

To create such provider, a request to the endpoint ``/v1/setting/authentication/oauth2Providers/keycloak`` with following JSON body:

```json
{
    "issuerUrl": "http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/",
    "clientId": "CZERTAINLY",
    "clientSecret": "CZERTAINLY-client-secret",
    "authorizationUrl": "http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/protocol/openid-connect/auth",
    "tokenUrl": "http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/protocol/openid-connect/token",
    "jwkSetUrl": "http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/protocol/openid-connect/certs",
    "scope": ["openid"],
    "logoutUrl": "http://<KEYCLOAK_DOMAIN>/realms/CZERTAINLY/protocol/openid-connect/logout",
    "postLogoutUrl": "https://<CZERTAINLY_DOMAIN>/administrator/",
    "audiences": ["czertainly"],
    "sessionMaxInactiveInterval": 600
}
```
