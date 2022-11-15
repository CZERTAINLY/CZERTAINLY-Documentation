# Current Versions

The CZERTAINLY platform consists of several services. This allows you to enable the functionality and integrate with the technology you need.

:::info
If you do not need to discover certificates, you should not deploy `Discovery Provider` connectors. The same applies for other connectors that are available. You will use only the connectors that integrates with your technology.
:::

The following is a list of current versions of the CZERTAINLY platform and connectors.

## Core

| Service           | Version | Docker Image                               |
|-------------------|---------|--------------------------------------------|
| Core              | `2.5.2` | `3keycompany/czertainly-core`              |
| Auth              | `1.0.0` | `3keycompany/czertainly-auth`              |
| Auth OPA policies | `1.0.0` | `3keycompany/czertainly-auth-opa-policies` |

## Front Ends

:::info
The Operator Web was merged with the Administrator Web in the version `2.2.0`.
:::

| Front End     | Version | Docker Image                                    |
|---------------|---------|-------------------------------------------------|
| Administrator | `2.4.0` | `3keycompany/czertainly-frontend-administrator` |

## Connectors

| Connector                      | Version | Docker Image                                                               |
|--------------------------------|---------|----------------------------------------------------------------------------|
| Common Credential Provider     | `1.1.0` | `3keycompany/czertainly-common-credential-provider`                        |
| EJBCA NG Connector             | `1.2.0` | `3keycompany/czertainly-ejbca-ng-connector`                                |
| Network Discovery Provider     | `1.1.0` | `harbor.3key.company/czertainly/czertainly-ip-discovery-provider`          |
| Cryptosense Discovery Provider | `1.1.0` | `harbor.3key.company/czertainly/czertainly-cryptosense-discovery-provider` |
| MS ADCS Connector              | `1.2.0` | `harbor.3key.company/czertainly/czertainly-ms-adcs-connector`              |
| EJBCA Legacy Connector         | `1.1.0` | `harbor.3key.company/czertainly/czertainly-ejbca-legacy-ca-connector`      |
| Keystore Entity Provider       | `1.1.0` | `harbor.3key.company/czertainly/czertainly-keystore-entity-provider`       |
| X509 Compliance Provider       | `1.0.0` | `harbor.3key.company/czertainly/czertainly-x509-compliance-provider`       |

## Private repository

Non-public connectors are hosted on internal `harbor.3key.company` which serves as a repository of container images and Helm charts.
Access to `harbor.3key.company` is provided based on request.