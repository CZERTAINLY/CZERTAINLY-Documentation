# Current Versions

The CZERTAINLY platform consists of several services. This allows you to enable the functionality and integrate with the technology you need.

:::info
If you do not need to discover certificates, you should not deploy `Discovery Provider` connectors. The same applies for other connectors that are available. You will use only the connectors that integrates with your technology.
:::

The following is a list of current versions of the CZERTAINLY platform and connectors.

## Core

| Service           | Version  | Docker Image                                         |
|-------------------|----------|------------------------------------------------------|
| Core              | `2.11.0` | `docker.io/3keycompany/czertainly-core`              |
| Auth              | `1.3.0`  | `docker.io/3keycompany/czertainly-auth`              |
| Auth OPA policies | `1.1.0`  | `docker.io/3keycompany/czertainly-auth-opa-policies` |
| Scheduler         | `1.0.0`  | `docker.io/3keycompany/czertainly-scheduler`         |

## Front Ends

:::info
The Operator Web was merged with the Administrator Web in the version `2.2.0`.
:::

| Front End     | Version  | Docker Image                                              |
|---------------|----------|-----------------------------------------------------------|
| Administrator | `2.11.0` | `docker.io/3keycompany/czertainly-frontend-administrator` |

## Connectors

| Connector                      | Version | Docker Image                                                               |
|--------------------------------|---------|----------------------------------------------------------------------------|
| Common Credential Provider     | `1.3.2` | `docker.io/3keycompany/czertainly-common-credential-provider`              |
| EJBCA NG Connector             | `1.8.0` | `docker.io/3keycompany/czertainly-ejbca-ng-connector`                      |
| Network Discovery Provider     | `1.4.0` | `docker.io/3keycompany/czertainly-ip-discovery-provider`                   |
| Cryptosense Discovery Provider | `1.4.0` | `harbor.3key.company/czertainly/czertainly-cryptosense-discovery-provider` |
| MS ADCS Connector              | `1.6.0` | `harbor.3key.company/czertainly/czertainly-ms-adcs-connector`              |
| PyADCS Connector               | `1.0.0` | `harbor.3key.company/czertainly/czertainly-pyadcs-connector`               |
| EJBCA Legacy Connector         | `1.4.0` | `harbor.3key.company/czertainly/czertainly-ejbca-legacy-ca-connector`      |
| Keystore Entity Provider       | `1.4.1` | `docker.io/3keycompany/czertainly-keystore-entity-provider`                |
| X.509 Compliance Provider      | `1.3.0` | `docker.io/3keycompany/czertainly-x509-compliance-provider`                |
| Software Cryptography Provider | `1.2.1` | `docker.io/3keycompany/czertainly-software-cryptography-provider`          |
| Email Notification Provider    | `1.0.0` | `docker.io/3keycompany/czertainly-email-notification-provider`             |

## Other

| Service           | Version | Docker Image                                              |
|-------------------|---------|-----------------------------------------------------------|
| Keycloak Internal | `1.0.0` | `docker.io/3keycompany/czertainly-keycloak-optimized`     |
| Utils Service     | `1.0.0` | `harbor.3key.company/czertainly/czertainly-utils-service` |

## Private repository

Non-public connectors are hosted on internal `harbor.3key.company` which serves as a repository of container images and Helm charts.
Access to `harbor.3key.company` is provided based on request.