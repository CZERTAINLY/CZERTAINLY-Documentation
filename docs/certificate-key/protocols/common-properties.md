---
sidebar_position: 1
---

# Common Protocol Properties

All supported protocol profiles share a set of common properties that behave consistently across all protocols.

## Default RA Profile

A default **RA Profile** can be assigned to each protocol profile.  
When a default **RA Profile** is selected, the corresponding **Attributes** for certificate issuance and revocation must also be configured, if required.

:::warning
Certificate management **Attributes** defined in a **Protocol Profile** are used during certificate operations and **cannot be modified** by the protocol client.
:::

## Default Certificate Associations

Default certificate associations can be configured within a protocol profile to define how ownership and access are assigned to certificates issued through the protocol.

These associations may include:
- **Owner** — The entity that owns the issued certificates.
- **Group** — The group under which the certificates are managed.
- **Custom attributes** — Additional metadata or policies applied to issued certificates.

Default associations can be set during **profile creation** or modified later when **editing** the protocol profile.

## Request attribute validation

When a client enrolls with a CSR over a protocol, the platform validates the CSR against the [request attributes](../concept-design/core-components/request-attribute.md) of the `RA Profile` that serves the request — its [resolved request-attribute set](../concept-design/core-components/ra-profile.md#request-attributes). The outcome depends on the profile's [validation mode](../concept-design/core-components/ra-profile.md#external-csr-validation):

- **Strict** — a non-compliant CSR is rejected with the protocol's native error.
- **Lenient** — the CSR is accepted and violations are logged as warnings.

The platform never rewrites the request. It either accepts or rejects it.

Validation checks that:

- every required mapped attribute is present in the CSR
- matched values satisfy the attribute's value constraints
- in strict mode additionally a whitelist pass: anything in the CSR that is not covered by the resolved set is a violation

Each protocol reports a rejection with its own native error:

| Protocol | Validated operation                       | Rejection error               |
|----------|-------------------------------------------|-------------------------------|
| ACME     | finalize                                  | problem type `badCSR`         |
| CMP      | `ir`, `cr`                                | failInfo `badCertTemplate`    |
| SCEP     | PKCSReq                                   | failInfo `badRequest`         |
| REST API | certificate issuance with an uploaded CSR | HTTP 422                      |

When the resolved set cannot be computed — for example, the `Authority`'s connector is unavailable — a strict profile fails the request as a server error, not as a policy violation. A lenient profile skips validation.
