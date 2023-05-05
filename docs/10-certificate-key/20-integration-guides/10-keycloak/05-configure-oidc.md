# Configure OIDC

CZERTAINLY supports the configuration of the OIDC through the configuration of Helm chart values.
Apply the following settings to enable OIDC and CORS.

## Configure OIDC Client

To enable OIDC client, set the `oidc.enabled` value to `true` and configure the following values:
```yaml
apiGateway:
  # kong-oidc plugin: https://github.com/revomatico/kong-oidc
  # this plugin inserts user data into X-USERINFO header
  oidc:
    # if oidc is enabled, all client values must be present
    enabled: false
    client:
      # oidc client id
      id: czertainly
      # oidc client secret
      secret: s0qKH5qItTWoxpBt7Zrj348ZhZ7woAbk
      # realm used in www-authenticate response header
      realm: czertainly
      # oidc discovery endpoint
      discovery: https://<KEYCLOKA_SERVER>/.well-known/openid-configuration
```

## Configure CORS

To enable CORS, set the `cors.enabled` value to `true` and configure the following values:
```yaml
apiGateway:
  # kong cors plugin: https://docs.konghq.com/hub/kong-inc/cors
  cors:
    enabled: false
    # list of allowed domains for the Access-Control-Allow-Origin header
    origins:
      - '*'
    # list of values for the Access-Control-Expose-Headers header
    exposedHeaders:
      - X-Auth-Token
```