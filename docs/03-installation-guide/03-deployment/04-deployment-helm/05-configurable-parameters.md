# Configurable Parameters

You can also Specify each parameter using the `--set` or `--set-file` argument to `helm install`.

## Global parameters

Global values are used to define common parameters for the chart and all its sub-charts by exactly the same name.

| Parameter                   | Default value                | Description                                                                       |
|-----------------------------|------------------------------|-----------------------------------------------------------------------------------|
| global.imagePullSecrets     | `[]`                         | Name of the registered credential as a secret to access private CZERTAINLY images |
| global.database.type        | `"postgresql"`               | Type of the database, currently only `postgresql` is supported                    |
| global.database.host        | `"host.docker.internal"`     | Host where is the database located                                                |
| global.database.port        | `5432`                       | Port on which is the database listening                                           |
| global.database.name        | `"czertainlydb"`             | Database name                                                                     |
| global.database.username    | `"czertainlyuser"`           | Username to access the database                                                   |
| global.database.password    | `"your-strong-password"`     | Password to access the database                                                   |
| global.trusted.certificates | `"CZERTAINLY Dummy Root CA"` | List of additional CA certificates that should be trusted                         |
| global.httpProxy            | `""`                         | Proxy to be used to access external resources through http                        |
| global.httpsProxy           | `""`                         | Proxy to be used to access external resources through https                       |
| global.noProxy              | `""`                         | Defines list of external resources that should not use proxy settings             |

## Core parameters

The following values may be configured for the CZERTAINLY core service:

| Parameter                        | Default value                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                              |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| registerAdmin.enabled            | `true`                                                                                                                                                                                                                                                                                                                                       | Whether the administrator should be registered                                                                                                                                                                                           |
| registerAdmin.source             | `external`                                                                                                                                                                                                                                                                                                                                   | Source of the administrator certificate: <ul> <li>`external` means that the certificate is provided in `registerAdmin.admin.certificate`</li> <li>`internal` will generate internal CA and generate administrator certificate</li> </ul> |
| registerAdmin.admin.certificate  | `"CZERTAINLY Administrator"`                                                                                                                                                                                                                                                                                                                 | Administrator certificate in PEM format                                                                                                                                                                                                  |
| registerAdmin.admin.username     | `"czertainly-admin"`                                                                                                                                                                                                                                                                                                                         | Username of the administrator                                                                                                                                                                                                            |
| registerAdmin.admin.name         | `"admin"`                                                                                                                                                                                                                                                                                                                                    | Name of the administrator                                                                                                                                                                                                                |
| registerAdmin.admin.surname      | `"admin"`                                                                                                                                                                                                                                                                                                                                    | Surname of the administrator                                                                                                                                                                                                             |
| registerAdmin.admin.email        | `"admin@czertainly.local"`                                                                                                                                                                                                                                                                                                                   | Email of the administrator                                                                                                                                                                                                               |
| registerAdmin.admin.description  | `"First Administrator"`                                                                                                                                                                                                                                                                                                                      | Description for the administrator                                                                                                                                                                                                        |
| logging.level                    | `"INFO"`                                                                                                                                                                                                                                                                                                                                     | Allowed values are `"INFO"`, `"DEBUG"`, `"WARN"`, `"TRACE"`                                                                                                                                                                              |
| logging.audit.enabled            | `"false"`                                                                                                                                                                                                                                                                                                                                    | Whether audit log is enabled                                                                                                                                                                                                             |
| hostname                         | `localhost`                                                                                                                                                                                                                                                                                                                                  | Hostname (FQDN) for the platform                                                                                                                                                                                                         |
| ingress.enabled                  | `false`                                                                                                                                                                                                                                                                                                                                      | Install ingress resource                                                                                                                                                                                                                 |
| ingress.certificate.source       | `internal`                                                                                                                                                                                                                                                                                                                                   | Source for the ingress TLS certifiacate: <ul> <li>`external` for certificate provided as secret defined in `ingress.tls.secretName`</li> <li>`internal` will generate internal CA and TLS certificate to be used</li> </ul>              |
| ingress.class                    | `nginx`                                                                                                                                                                                                                                                                                                                                      | Class name of ingress                                                                                                                                                                                                                    |
| ingress.annotations              | `{ nginx.ingress.kubernetes.io/backend-protocol: "HTTP", nginx.ingress.kubernetes.io/auth-tls-verify-client: "optional",nginx.ingress.kubernetes.io/auth-tls-secret: "czertainly/trusted-certificates", nginx.ingress.kubernetes.io/auth-tls-verify-depth: "3", nginx.ingress.kubernetes.io/auth-tls-pass-certificate-to-upstream: "true" }` | Additional annotations to customize the ingress                                                                                                                                                                                          |
| ingress.tls.secretName           | `czertainly-ingress-tls`                                                                                                                                                                                                                                                                                                                     | Ingress TLS certificate and private key secret name                                                                                                                                                                                      |
| registerConnectors               | `true`                                                                                                                                                                                                                                                                                                                                       | Whether the connector should be auto-registered in the platform                                                                                                                                                                          |
| commonCredentialProvider.enabled | `true`                                                                                                                                                                                                                                                                                                                                       | Whether the Common Credential Provider should be enabled                                                                                                                                                                                 |
| ejbcaNgConnector.enabled         | `true`                                                                                                                                                                                                                                                                                                                                       | Whether the EJBCA NG Connector should be enabled                                                                                                                                                                                         |
| msAdcsConnector.enabled          | `true`                                                                                                                                                                                                                                                                                                                                       | Whether the MS ADCS Connector should be enabled                                                                                                                                                                                          |
| msAdcsConnector.enabled          | `true`                                                                                                                                                                                                                                                                                                                                       | Whether the MS ADCS Connector should be enabled                                                                                                                                                                                          |
| auth.header.token                | `"X-USERINFO"`                                                                                                                                                                                                                                                                                                                               | Name of the header containing JSON ID                                                                                                                                                                                                    |
| auth.header.certificate          | `"X-APP-CERTIFICATE"`                                                                                                                                                                                                                                                                                                                        | Name of the header containing client certificate                                                                                                                                                                                         |

## Additional parameters

Additional parameters may be found in the [values.yaml](values.yaml) and dependencies.
See dependent charts for the description of available parameters.