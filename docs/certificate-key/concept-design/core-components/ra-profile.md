---
sidebar_position: 7
---

# RA Profile

## What is `RA Profile`?

`RA Profile` is a representation of attributes that collectively provides a complete configuration of the certificate service which can be used by users and applications in a consistent and convenient way.

`RA Profile` provides an abstraction of the certificate management service configuration attributes:

- Certification Authority and its related information
- Certificate management technology-specific attributes
- Service-related configuration
- Access control configuration

Additionally, `RA Profile` uses the following attributes to identify the service:

- `RA Profile` Name
- Description

### Characteristics

Characteristics of `RA Profile` are:

- Binds the `Authority` and act as a specific certificate management service
- Configures the certificate specific attributes and defines the compliance rules and behavior
- Provide rules for issuing, renewing, and revocation of the certificate

### Process Flow

The following steps illustrate the process of requesting the certificate through the `RA Profile`:

1. `Client` requests the `RA Profile` to issue certificate providing the certificate signing request
2. `RA Profile` validates the certificate signing request against its configuration
3. `RA Profile` forwards the certificate signing request and related attributes to the `Authority Provider`
4. `Authority Provider` validates the certificate signing request and issues the certificate
5. `RA Profile` forwards the certificate to the `Client`

### Certificate Validation Settings

`RA Profile` can override platform certificate validation settings for certificates that are assigned to it. The following attributes are used to configure the certificate validation for the `RA Profile`:

| Name                                  | Description                                                                                                                                                         | Default Value |
|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| **Platform Validation Settings Used** | If enabled, platform settings will be used for validation of certificates associated with the RA Profile, otherwise RA Profile settings will be used for validation | `enabled`     |
| **Validation Enabled**                | Enable or disable validation of certificates associated with the RA Profile                                                                                         | `disabled`    |
| **Validation Frequency**              | Validation frequency of certificates associated with the RA Profile specified in days                                                                               | Everyday      |
| **Expiring Threshold**                | How many days before expiration should validation status of certificates associated with the RA Profile change to `Expiring`                                        | 30 days       |

## Request attributes

`RA Profile` defines the request attributes of its certificate service — what the requester fills in on the request form and where each value lands in the issued certificate. If you are new to request attributes, read the [Request Attribute](./request-attribute.md) concept first.

Each `RA Profile` can author its own **static set** of request attributes — see [Configure request attributes](../../quick-start/certificate-management/create-ra-profile.mdx#configure-request-attributes) for the authoring walkthrough.

## External CSR validation

When a client supplies its own CSR (an external CSR), the `RA Profile` validates it against the resolved request-attribute set. Two modes exist:

- **Strict** — non-compliant external CSRs are rejected.
- **Lenient** — non-compliant external CSRs are accepted; violations become warnings.

Validation checks:

- every mapped field of a required attribute has a matching subject component, SAN entry, or extension in the CSR
- matched values satisfy the attribute's value constraints
- in strict mode additionally a whitelist pass: anything present in the CSR — a subject component, SAN type, or extension — that is not covered by the resolved set is a violation

:::warning[Strict mode needs a deliberately authored set]
The whitelist runs against the resolved request-attribute set. With no authored set, the platform default applies — six subject (RDN) attributes that map no SAN types and no extensions — so **Strict** rejects any CSR carrying a SAN entry or an extension. In particular, ACME enrollment always fails, because ACME CSRs carry a `dNSName` SAN. Enable strict mode only on profiles whose authored set covers the SAN types and extensions your clients send; otherwise use **Lenient**.

Extensions that clients commonly place in a CSR — Extended Key Usage, Key Usage, Basic Constraints — are [built in to the OID registry](../../settings/oid.md#built-in-certificate-extensions), so admitting them is a matter of mapping an attribute to them; no Custom OID entry is needed. Vendor-specific extensions, such as the [Microsoft certificate-template OIDs](../../settings/oid.md#windows--adcs-enrolment) sent by Windows autoenrolment, must be registered first.
:::

The mode is inherited along a chain: the profile's own setting, then the platform default, then **lenient** as the final fallback.

Configuration is per profile, in the web interface or API — see [Configure external CSR validation](../../quick-start/certificate-management/create-ra-profile.mdx#configure-external-csr-validation).
