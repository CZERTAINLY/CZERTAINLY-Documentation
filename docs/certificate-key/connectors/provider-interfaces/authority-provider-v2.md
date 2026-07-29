---
sidebar_position: 2
---

# Authority Provider v2

:::info[Current interface]
[Authority Provider v3](./authority-provider-v3.md) is the current version of this interface. New connectors should implement v3. Authority Provider v2 remains supported.
:::

## Overview

Authority Provider v2 interface is used to manage operations with certificates issued by certification authority. The Authority Provider v2 acts as an interface between the `Core` and the certification authority providing the following management functions:
1. Issue
2. Renew
3. Revoke
4. Cancel a parked issue or revoke (asynchronous flows)
5. Poll the status of a parked issue or revoke (asynchronous flows)

## How it works

Authority Provider v2 provides the ability to communicate with different types and technologies of certification authorities. The platform supports both **synchronous** authorities (the connector returns the issued or revoked certificate immediately) and **asynchronous** authorities (the connector parks the operation and reports back later, or hands the operation off to an operator). The signal between Core and the connector for the asynchronous case is the HTTP response code on the issue, renew, and revoke calls.

## Provider objects

[`Authority`](../../concept-design/core-components/authority.md) objects are managed in the platform through the Authority Provider v2 implementation.

## Processes

The processes are the same as in Authority Provider v3 — only the version of the connector endpoints differs. See the v3 page for the sequence diagrams and semantics:

- [`Authority` instance management](./authority-provider-v3.md#authority-instance-management)
- [`Certificate` management](./authority-provider-v3.md#certificate-management)
- [Asynchronous certificate operations](./authority-provider-v3.md#asynchronous-certificate-operations)

Compared to v3, the v2 interface:

- receives the certificate identity only as the flat fields — `subjectDn`, `subjectAltName`, and `extensions` — never the structured `requestContent`. See [Two forms on the wire](./request-attributes-structured.md#two-forms-on-the-wire).
- does not support certificate pre-registration or identity override.
- has no capability flags. Asynchronous parking is still signalled by the `202` response, and the dedicated v2 cancel endpoints work — but the platform never polls a v2 connector for completion; status polling exists only in v3. A parked v2 operation is finalised by the operator: Finalise Issue, Confirm Revoke, or Cancel Pending.

## Specification and example

The Authority Provider v2 implements [Common Interfaces](../common-interfaces/overview.md) and the following additional interfaces:
- [Authority Management](/api/connector-authority-provider-v2/#tag/Authority-Management)
- [Certificate Management](/api/connector-authority-provider-v2/#tag/Certificate-Management)

The OpenAPI specification of the Authority Provider v2 can be found here: [Connector API - Authority Provider v2](/api/connector-authority-provider-v2/).
