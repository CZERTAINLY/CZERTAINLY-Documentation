---
sidebar_position: 13
---

# Request Attribute

A request attribute defines one value the requester supplies when asking for a certificate. It is a regular platform Data Attribute whose definition carries a **field mapping** — a declaration of which certificate request field the value lands in. The presence of the mapping is the sole marker: an attribute without a mapping behaves exactly like any other attribute, so existing attribute definitions elsewhere in the platform keep working unchanged.

Request attributes build on the platform attribute engine — see the [attributes overview](../architecture/attributes/overview.md). They are unrelated to [Custom Attributes](../../settings/custom-attributes.md): a custom attribute attaches extra information to a platform object, while a request attribute defines the content of the certificate itself.

## Why request attributes

Certificate requests are technical. They speak in subject components, SAN entries, and extension OIDs. Request attributes let you offer a friendly, policy-controlled request form instead — the requester fills in "Server FQDN" rather than composing a Common Name, and the platform places the value where it belongs.

The same definitions apply everywhere. They work the same whether the platform builds the request, a client supplies its own CSR, or the certificate is pre-registered before any key exists.

## Mapping targets

A field mapping declares one or more target fields in the certificate. Only definitions with string or text content can carry a mapping — the mapping projects the attribute's textual value into the certificate field:

- **RDN (subject)** — a component of the certificate subject name. The RDN is identified by its code (for example `CN`, matched case-insensitively) or its dotted-decimal OID, resolved through the [OID registry](../../settings/oid.md). A definition whose RDN code is not known to the registry is rejected when saved; a well-formed dotted-decimal OID is accepted without any registry lookup. Subject components render in the order their definitions appear in the set, and the same RDN type can appear more than once (multivalued subjects).
- **Subject Alternative Name** — a typed SAN entry, such as a DNS name or an email address. Although SAN is technically an X.509 extension, it is mapped only through this dedicated target — never as a certificate-extension mapping. The platform composes the SAN extension from the typed entries, so a request cannot carry conflicting SAN values.
- **Certificate extension** — an X.509 extension identified by its OID from the [OID registry](../../settings/oid.md). The OID must be known to the `Certificate Extension` category before an attribute can map to it — a definition referencing an unknown OID is rejected when saved. The [common standards-track extensions](../../settings/oid.md#built-in-certificate-extensions) are built in and need no registration; anything else must be registered as a Custom OID first. The registry entry provides the default criticality and the value encoding used to turn the string value into the extension value. For a client-supplied CSR, mapping an extension means the requester's extension is *accepted* — not that the platform sets its value. Supplying a platform-side value for a structured extension (such as Extended Key Usage) requires the value as Base64-encoded DER, and extension values are not constraint-checked — the value is opaque DER. Whether a requested extension is honoured in the issued certificate is ultimately the certification authority's decision.

One attribute can map to several fields at once. A single "Server FQDN" value can land in both the subject `CN` and a `dNSName` SAN entry. Within a single definition, a given certificate extension may be mapped only once — X.509 permits each extension to appear at most once in a certificate. Whether two *different* definitions collide on the same field is checked at request time, not when the definition is saved.

## Value sources

Orthogonal to the mapping, a definition can declare how the requester's value is obtained:

- **Free input** — the requester types any value.
- **Static list** — the requester picks from a fixed list of values defined with the attribute.

## Where request-attribute sets come from

Request-attribute definitions have two sources:

- the **static set** authored on an [`RA Profile`](./ra-profile.md)
- the **platform default set** managed in [platform settings](../../settings/request-attributes.md)

For a given `RA Profile`, the effective set is the profile's static set, or the platform default set when the profile authored none.

Both sources are authored in the platform, and the platform validates them on save: every definition must declare a field mapping with at least one target field. An unmapped definition would never contribute to the certificate request, so it is rejected at authoring time rather than carried as dead weight.

## Where the resolved set is used

- **Building a platform-side request** — when a certificate is issued with an existing platform key, the attribute values are projected into the subject, SAN entries, and extensions of the request the platform builds and signs.
- **Validating an external CSR** — a client-supplied CSR is checked against the resolved set, in strict or lenient mode. See [External CSR validation](./ra-profile.md#external-csr-validation).
- **Pre-registering a certificate** — the identity of a certificate registered before any key exists can be given as request-attribute values.
- **Protocol enrollment** — CSRs enrolled over protocols such as ACME, CMP, and SCEP are validated against the resolved set of the protocol's `RA Profile`.
