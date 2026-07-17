---
sidebar_position: 1.5
---

# Authority Provider v3

## Overview

Authority Provider v3 is the current interface between the platform and a certification authority connector. A connector implementing it manages `Authority` instances and performs the certificate operations against the upstream CA. It supplies the attribute definitions for issuing and registering certificates. It issues a certificate from a certificate signing request, renews it, and revokes it. It pre-registers a certificate's identity before any key exists, and identifies externally issued certificates at the CA. An operation the CA cannot complete synchronously is accepted for asynchronous completion — the platform then polls the connector for the result, or cancels the pending operation.

Compared to [v2](./authority-provider-v2.md), the v3 interface adds:

- **Typed request content** — the connector can receive the certificate identity as a structured `requestContent` object instead of only flat string fields. See [Structured Certificate Request Content](./request-attributes-structured.md).
- **Certificate pre-registration** — the platform can register a certificate's identity at the upstream CA before any CSR exists.
- **Identity override** — the platform can pass an authoritative identity alongside a forwarded CSR, for the connector to apply per its CA technology.
- **Capability flags** — every new behavior is gated by a feature flag the connector advertises. A connector that does not advertise a flag is never asked to perform the gated operation.

The platform-side model behind the typed content — request attributes, field mappings, and how the effective set is resolved — is described in [Request Attribute](../../concept-design/core-components/request-attribute.md).

## Capability flags

Connectors advertise feature flags. The flags are opt-in: a feature is supported only when the connector explicitly lists it. An absent flag means the feature is not supported. The platform enforces the gate — it never calls a flag-dependent operation on a connector that does not advertise the flag.

Four flags gate the v3 authority features:

- **`certificateRegistration`** — the connector can pre-register a certificate's identity (subject DN, SAN entries, extensions) at the upstream CA before a CSR exists.
- **`certificateStatusPolling`** — the platform may poll the connector for completion of asynchronous operations.
- **`certificateRequestStructured`** — the connector accepts the structured `requestContent` model (typed RDNs, SAN entries, extensions) on register, issue, and renew, instead of only the flat `subjectDn`, `subjectAltName`, and `extensions` fields.
- **`certificateIdentityOverride`** — the connector applies an authoritative platform-supplied identity to a forwarded CSR per its CA technology (for example an EJBCA end-entity override), without the platform stripping or re-signing the CSR.

## Specification and example

The Authority Provider v3 implements [Common Interfaces](../common-interfaces/overview.md). The wire contract for the typed request content, the identity override, and the registration responses is described in [Structured Certificate Request Content](./request-attributes-structured.md).

:::info[API reference]
The OpenAPI specification of the Authority Provider v3 will be published with the next platform release.
:::
