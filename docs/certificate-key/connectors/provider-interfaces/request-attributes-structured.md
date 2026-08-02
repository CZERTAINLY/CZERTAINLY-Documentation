---
sidebar_position: 11
---

# Structured Certificate Request Content

This page describes the wire contract for the typed certificate request content in [Authority Provider v3](./authority-provider-v3.md). It is written for connector developers. For the platform-side model — request attributes, field mappings, and set resolution — see [Request Attribute](../../concept-design/core-components/request-attribute.md) and the contributor page [Request Attributes](../../../contributors/attributes/request-attributes.mdx).

## Two forms on the wire

The certificate identity travels to the connector in one of two forms:

- **Flat fields** — `subjectDn` (a DN string), `subjectAltName` (OpenSSL-convention textual form, e.g. `DNS:foo,IP:1.2.3.4,email:x@y`), and `extensions` (entries of OID, criticality, and a Base64 DER value). They exist on the **register** operation only — issue and renew carry the CSR instead. A v3 connector that does not advertise the `certificateRequestStructured` flag receives the registration identity this way.
- **Structured content** — the typed request content described below. A v3 connector advertising `certificateRequestStructured` receives this instead.

Both forms are rendered from the same content. For a non-structured connector, the platform renders the flat fields from the structured content — and **fails the request closed** when the content cannot be represented flat. When both forms are present on a request, the structured form is authoritative.

This is the v3 authority wire. v2 authority connectors have no structured form and no registration operation: their issue and renew requests carry a Base64 CSR (`request`, with a `format` such as `pkcs10`; renew also carries the existing certificate), and the identity comes from that CSR — never from flat subject fields.

## The Request Content

The request content is polymorphic on certificate type; the only type today is X.509. It carries three lists:

- **Subject** — ordered subject DN components. Each entry has a type — a short code (for example `CN`) or a dotted-decimal OID, resolved through the [OID registry](../../settings/oid.md) — and a value.
- **Subject Alternative Names** — typed SAN entries. Each entry has a type (`dns`, `email`, `ip`, `uri`, `otherName`, `directoryName`, or `registeredId`) and a value. An `otherName` entry additionally carries its OID and a value encoding, because different OtherName OIDs carry differently typed values.
- **Extensions** — requested X.509 extensions, excluding SAN. Each entry has an OID, a criticality flag, an encoding, and a value — a string whose interpretation is declared by the encoding.

Three invariants hold:

- SAN is never duplicated as an extension. SAN entries appear only in the subject alternative names list.
- At least one of the three lists is present.
- The raw CSR remains authoritative for the public key and the proof of possession. The structured content carries the decoded identity intent alongside it.

Example structured content on an issue request:

```json
{
  "requestContent": {
    "certificateType": "X.509",
    "subject": [
      { "type": "CN", "value": "web01.example.com" }
    ],
    "subjectAltNames": [
      { "type": "dns", "value": "web01.example.com" }
    ],
    "extensions": [
      {
        "oid": "1.3.6.1.4.1.99999.1",
        "critical": false,
        "encoding": "UTF8String",
        "value": "web-server-profile"
      }
    ]
  }
}
```

## Where it rides

The structured content is an optional part of three v3 operations:

- **Issue** — when present, it is the authoritative source of subject identity and extensions for the issuance. Otherwise the identity comes from the submitted CSR.
- **Renew** — when present, it is authoritative for the renewal. Otherwise the identity derives from the existing certificate (serial number and issuer DN).
- **Register** — no CSR exists at registration time. The flat fields are still populated for non-structured connectors and remain the validation anchor.

## Identity override

Some CA technologies can apply a platform-supplied identity when issuing from a forwarded CSR. The `certificateIdentityOverride` capability flag advertises this.

The platform never strips or re-signs a client CSR. The connector receives the CSR intact, plus the authoritative identity, and applies the identity per its CA technology — for example an EJBCA end-entity override.

This matters when completing a pre-registration. When the connector advertises both `certificateRequestStructured` and `certificateIdentityOverride`, the platform passes the registered identity alongside the operator's CSR — so the CA issues with the identity fixed at registration time, whatever the CSR says.

## Registration wire

The register operation pre-registers a certificate's identity at the upstream CA before any CSR exists. The request carries the identity — structured or flat, per the capability flag — plus the registration attributes. The connector responds in one of two ways:

- **`200`** — registered synchronously. The response carries an end-entity reference in `meta`. No certificate is produced.
- **`202`** — registration accepted, completion is asynchronous. The response carries a tracking handle in `meta`. The platform polls for completion when the connector advertises `certificateStatusPolling`.
