# Overview

The platform implements the SCEP (Simple Certificate Enrolment Protocol) protocol to automate the process of certificate management. it offers simple integration with SCEP server with the help of SCEP objects that are easy to configure and to manage.

Implementation of SCEP provides a flexibility for the clients and administrators to choose between running SCEP endpoint that are bound to [RA Profile](../../concept-design/core-components/ra-profile).

:::info
SCEP implementation follows [RFC 8894 - Simple Certificate Enrolment Protocol](https://datatracker.ietf.org/doc/html/rfc8894).
See [SCEP protocol API](/api/protocol-scep/) for more information about implemented end points.
:::

## Platform SCEP management

In order to start with the SCEP protocol, the platform must be configured and act as the SCEP server.
For this purpose we define the following management objects:

| SCEP management object | Description |
| ----------------------- | ----------- |
| [`SCEP Profile`](scep-profile) | Contains configuration of the SCEP server |

You can manage `SCEP Profiles` through the web interface or through the [`Core SCEP API`](/api/core-scep/).

## SCEP Profile vs RA Profile SCEP API

You can configure `SCEP Profile` with or without `RA Profile`. And you can enable SCEP API for any particular `RA Profile` only.
There are 2 SCEP APIs that are implemented in the platform:

| SCEP API | Description |
| ------- | ----------- |
| `SCEP Profile`<br/>`https://<hostname>:<port>/api/v1/protocols/scep/{scepProfileName}/pkiclient.exe` | To use `SCEP Profile` directly from the client. In this case, the `SCEP Profile` must have configured a default `RA Profile`, otherwise the API won't be working |
| `RA Profile`<br/>`https://<hostname>:<port>/api/v1/protocols/scep/raProfile/{raProfileName}/pkiclient.exe` | Any `RA Profile` can have enabled with specific `SCEP Profile`. The SCEP API is in this case managed by the `RA Profile` and you do not have to configure it as a default for `SCEP Profile` |

**When to use `SCEP Profile` and when `RA Profile` SCEP API?**

Depends on what you would like to achieve:
- if you would like to allow SCEP clients to work only with one specific `RA Profile` then use `RA Profile` SCEP API
- if you would like to have the flexibility in changing the `RA Profile` which is used by the SCEP client, then use `SCEP Profile` SCEP API

:::info
`SCEP Profile` can be used with multiple `RA Profiles`.
:::

:::caution
The platform performs various validations on the end point including the following:
- Availability of the `SCEP Profile` or `RA Profile`
- Status of the `SCEP Profile` or `RA Profile`
- If both `SCEP Profile` and `RA Profile` are available and enabled
:::

The `SCEP Profile` that has no configuration of default `RA Profile` is usually bound to one or multiple `RA Profiles`. In this case the `SCEP Profile` configuration consist of consistent attributes that are used by SCEP clients. 

## Supported operations

The following operations are supported by the SCEP protocol implementation:

- GetCACaps - Get the list of capabilities of the SCEP Server
- GetCACert - Get the CA Certificate for signing the requests
- PKIOperation - PKI Operations like Issue Certificate and Renew Certificate
  
## SCEP CA Capabilities

The SCEP protocol implementation supports the following CA capabilities:
- POSTPKIOperation
- SHA-1
- SHA-256
- SHA-512
- DES3
- AES
- Renewal
- SCEPStandard