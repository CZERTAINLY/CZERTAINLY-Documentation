# Current Versions

The CZERTAINLY platform consists of several services. This allows you to enable the functionality and integrate with the technology you need.

:::info
If you do not need to discover certificates, you should not deploy `Discovery Provider` connectors. The same applies for other connectors that are available. You will use only the connectors that integrates with your technology.
:::

The following is a list of current versions of the CZERTAINLY platform and connectors.

## Core

| Service | Version | Docker Image                                           |
|---------|---------|--------------------------------------------------------|
| Core    | `2.3.0` | `harbor.3key.company/czertainly/czertainly-core:2.3.0` |

## Front Ends

:::info
The Operator Web was merged with the Administrator Web in the version `2.2.0`.
:::

| Front End     | Version | Docker Image                                                             |
|---------------|---------|--------------------------------------------------------------------------|
| Administrator | `2.2.0` | `harbor.3key.company/czertainly/czertainly-frontend-administrator:2.2.1` |

## Connectors

| Connector                      | Version | Docker Image                                                                     |
|--------------------------------|---------|----------------------------------------------------------------------------------|
| Common Credential Provider     | `1.1.0` | `harbor.3key.company/czertainly/czertainly-common-credential-provider:1.1.0`     |
| Network Discovery Provider     | `1.1.0` | `harbor.3key.company/czertainly/czertainly-ip-discovery-provider:1.1.0`          |
| Cryptosense Discovery Provider | `1.1.0` | `harbor.3key.company/czertainly/czertainly-cryptosense-discovery-provider:1.1.0` |
| MS ADCS Connector              | `1.1.0` | `harbor.3key.company/czertainly/czertainly-ms-adcs-connector:1.1.0`              |
| EJBCA NG Connector             | `1.1.0` | `harbor.3key.company/czertainly/czertainly-ejbca-ng-connector:1.1.0`             |
| EJBCA Legacy Connector         | `1.1.0` | `harbor.3key.company/czertainly/czertainly-ejbca-legacy-ca-connector:1.1.1`      |
