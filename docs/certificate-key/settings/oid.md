---
sidebar_position: 35
---

# Object Identifiers (OIDs)

Object Identifiers (`OIDs`) are a standardized mechanism for uniquely naming any object, concept, or entity using a globally unambiguous and persistent identifier. OIDs follow a hierarchical tree structure, where each node is represented by a numerical value separated by dots (for example, `1.2.840.113549`).

In **X.509 certificates**, OIDs are widely used to identify various objects and attributes. Since OIDs are numerical, they often need to be translated into human-readable names for easier interpretation.

The commonly used RDN attribute types, extended-key-usage purposes, and certificate extensions are predefined as **System OIDs** (see [System OIDs](#system-oids)). To extend the repository, additional **Custom OIDs** can be registered to define new identifiers beyond the default set. These custom definitions allow the translation of OIDs into human-readable names outside of the predefined System OIDs.

Custom OIDs can be managed using the [Custom OID Management API](/api/core-other#tag/custom-oid-management).

## Categories

Every OID entry belongs to one of four categories:

- **RDN Attribute Type** — an attribute type that can appear in a Distinguished Name. Each entry defines a short code (for example `CN`) and optional alternative codes. System and custom RDN entries together form the list that [certificate request attributes](../concept-design/core-components/request-attribute.md) offer in their RDN dropdown.
- **Extended Key Usage** — a key purpose that can appear in the Extended Key Usage extension of a certificate.
- **Certificate Extension** — an X.509 certificate extension with a default criticality and a typed value encoding. The common standards-track extensions are [built in](#built-in-certificate-extensions); anything beyond them is registered as a [custom certificate extension](#custom-certificate-extensions).
- **Generic** — a general-purpose identifier that does not fit any other category.

## Custom certificate extensions

Registering an OID in the `Certificate Extension` category makes that extension available as a mapping target for [certificate request attributes](../concept-design/core-components/request-attribute.md). When a request attribute maps to the extension, the registry entry tells the platform how the attribute's value is placed into the certificate request.

A `Certificate Extension` entry has two properties:

- **Default Critical** — whether the extension is marked critical by default when placed in a certificate.
- **Value Encoding** — how the attribute's string value is encoded into the extension's DER value.

The following encodings are available:

- `UTF8String`, `IA5String`, `PrintableString`, `OctetString` — you supply a plain string. The platform wraps it in the matching ASN.1 type and DER-encodes it.
- `DER` — you supply the complete DER value, Base64-encoded. The platform embeds it as-is.
- `BitString` — see the warning below.

:::warning[BitString encoding]
`BitString` is currently not supported for certificate building. A certificate request that uses an extension with this encoding fails. Supply the value as `DER` instead.
:::

Keep the following rules in mind:

- Each extension OID may appear only once in a certificate request.
- The Subject Alternative Name cannot be mapped as extension OID `2.5.29.17`. A definition that tries is rejected when saved, pointing at the dedicated SAN mapping target instead.
- Registration is required for mapping: a request attribute definition that references an unregistered extension OID is rejected when saved. The [built-in certificate extensions](#built-in-certificate-extensions) already count as registered — they need no Custom OID entry, and one cannot be created for them. Should a custom registry entry be deleted afterwards, requests still work — the extension then falls back to non-critical and its value is treated as Base64-encoded DER.

### Windows / ADCS enrolment

Windows autoenrolment and NDES/SCEP clients emit the Microsoft certificate-template extensions `1.3.6.1.4.1.311.20.2` (Certificate Template Name) and `1.3.6.1.4.1.311.21.7` (Certificate Template Information). Being vendor extensions, they are not built in — register them as Custom OIDs (non-critical, `DER` encoding) so requests carrying them pass strict validation.

Note the value is advisory in this setup: the ADCS connector injects the certificate template itself, as a request attribute derived from the RA profile — so a request-attribute mapping to these OIDs *admits* the extension rather than controlling which template is used.

To register a certificate extension in the UI:

1. Go to `Settings` → `Custom OIDs` and open `Create Custom OID`.
2. Enter the `OID` in dot-separated numeric format, starting with 0, 1, or 2.
3. Enter the `Display Name` and, optionally, a `Description`.
4. Set `Select Category` to `Certificate Extension`.
5. Choose the `Default Critical` and `Value Encoding` properties.

The `OID` and category cannot be changed after creation.

## System OIDs

The built-in **System OIDs** cover the common RDN attribute types (such as `CN`, `O`, `OU`, or `C`), the common extended-key-usage purposes (such as server authentication, client authentication, or code signing), and the common standards-track [certificate extensions](#built-in-certificate-extensions).

The set is defined by the [`SystemOid`](https://github.com/OmniTrustILM/interfaces/blob/main/src/main/java/com/otilm/api/model/core/oid/SystemOid.java) enum. For a running platform, retrieve it with the [Custom OID Management API](/api/core-other#tag/custom-oid-management): `GET /v1/oids/system`, optionally filtered by category — for example `?category=certificateExtension` or `?category=rdnAttributeType`. RDN entries come back with their code and alternative codes, certificate extensions with their default criticality and value encoding.

System OIDs are reserved: creating a Custom OID with one of these values is rejected. A custom entry that already existed before the built-in was introduced (for example, registered before a platform upgrade) **shadows** the built-in — the custom entry wins and the built-in defaults do not apply; the platform logs a recurring warning for such entries. Delete the custom entry to fall back to the built-in definition.

Extensions that appear only in *issued* certificates (set by the CA, never requested) and vendor-specific extensions are deliberately not built in; the latter remain registrable as [Custom certificate extensions](#custom-certificate-extensions).

### Built-in certificate extensions

The extensions a requester plausibly places in a CSR are built in — Extended Key Usage, Key Usage, and Basic Constraints among them. They are available as request-attribute mapping targets straight away: no Custom OID entry is needed, and none can be created for them. Each carries the `DER` value encoding, so a platform-side value must be supplied as Base64-encoded DER.

Subject Alternative Name (`2.5.29.17`) is deliberately absent — it is reached through its own mapping target, never as a certificate extension.

Mapping one of these does not make the platform set the extension. For a client-supplied CSR it *admits* the requester's extension, which is what lets a CSR carrying, say, Extended Key Usage or Basic Constraints pass [strict validation](../concept-design/core-components/ra-profile.md#external-csr-validation).

### RDN codes

Every RDN entry defines one code and, optionally, alternative codes. Codes and alternative codes are matched **case-insensitively** everywhere they are consumed — in a request-attribute mapping and when parsing a Distinguished Name — so `postalcode` and `PostalCode` reach the same entry. The registry's own spelling of the code is what the platform emits when it renders a Distinguished Name for display. The normalized form of a DN uses dotted OIDs instead of codes, so comparison and search are unaffected by codes and their casing.

:::warning[`SN` is Surname, not Serial Number]
Following RFC 4519, `SN` is the code for Surname (`2.5.4.4`). The subject serial number is `2.5.4.5`, whose code is `SERIALNUMBER`. Mapping a request attribute to `SN` when you meant a device serial number silently places the value in the wrong RDN.
:::

### RDN code collisions

Codes and alternative codes share a single flat namespace across the whole RDN category — one token may be claimed by only one OID:

- Creating or editing a Custom OID whose code or alternative code is already in use — by a built-in entry or by another custom entry — is rejected (`Code X is already used`). The check is case-insensitive.
- A collision that predates the built-in — a custom entry registered before the platform introduced the same code — resolves deterministically in favour of the **custom** entry, so the built-in loses its code. The platform logs a recurring warning naming every claimant OID and the one it resolved to. Rename the custom entry's code or alternative code to remove the ambiguity.
