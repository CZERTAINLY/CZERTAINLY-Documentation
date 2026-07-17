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

Each `RA Profile` can author its own **static set** of request attributes. You author it on the **Request Attributes** tab of the `RA Profile` create or edit dialog; the tab becomes available once an `Authority` is selected.

The static set is combined with the set supplied by the `Authority`'s connector according to the profile's merge mode:

- **Static only** — only the request attributes configured on the profile are used; connector-supplied attributes are ignored.
- **Connector only** — only the connector-supplied request attributes are used; the attributes configured on the profile are ignored.
- **Merge** — the attributes configured on the profile are combined with the connector-supplied attributes into a single set; on a conflict the connector definition wins. This is the default.

When the combination yields no definitions, the [platform default set](../../settings/request-attributes.md) applies as the terminal fallback.

**Value-source bindings** attach a value source (free input, static list, or connector callback) onto a connector-supplied attribute by reference — attribute UUID, or name as a fallback. Bindings are applied after the sets are combined, and each binding may target an attribute at most once.

The outcome of this resolution is the profile's **resolved request-attribute set**. It is what certificate request forms render for the profile.

## External CSR validation

When a client supplies its own CSR (an external CSR), the `RA Profile` validates it against the resolved request-attribute set. Two modes exist:

- **Strict** — non-compliant external CSRs are rejected.
- **Lenient** — non-compliant external CSRs are accepted; violations become warnings.

Validation checks:

- every required mapped attribute has a matching subject component, SAN entry, or extension in the CSR
- matched values satisfy the attribute's value constraints
- in strict mode additionally a whitelist pass: anything present in the CSR — a subject component, SAN type, or extension — that is not covered by the resolved set is a violation

The mode is inherited along a chain: the profile's own setting, then the platform default, then **lenient** as the final fallback.

To configure it in the web interface, open the profile detail and switch to the **Validation** tab. The **Request Validation** widget shows the effective mode. Click **Edit Request Validation Settings**; the switch **Use Platform Request Validation Settings** controls whether the profile follows the platform default or sets its own mode.
