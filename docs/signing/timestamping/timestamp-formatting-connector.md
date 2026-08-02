---
sidebar_position: 7
---

# Timestamp Formatting Connector

The Timestamp Formatting Connector creates RFC 3161 timestamp token structures for Timestamping. Select it as the **Signature Formatting Connector** on a `Signing Profile` that uses the **Timestamping** workflow.

The connector formats the timestamp token; it does not hold the signing key or perform the cryptographic signing operation. The managed key associated with the `Signing Profile` remains in the configured cryptographic token.

## Configure the Signing Profile

The **Signature Formatting Connector** is required when the **Signing Workflow Type** is set to **Timestamping**. Select an available Timestamp Formatting Connector in the `Signing Profile` workflow properties.

For the other timestamping settings available on the profile, see [Timestamping configuration](./configuration.md).

## Connector attributes

The following optional attributes control content added to timestamp tokens. When an attribute is not set, the connector uses its default value.

| Attribute | Type | Required | Default | Effect |
|---|---|---|---|---|
| **Include TSA Name** (`includeTsaName`) | Boolean | No | `true` | Includes the TSA's distinguished name in the `tsaName` field of `TSTInfo`. |
| **Include CMS Algorithm Protection** (`includeCMSAlgorithmProtection`) | Boolean | No | `true` | Adds the `id-aa-CMSAlgorithmProtection` signed attribute defined by RFC 6211, binding the digest and signature algorithms. |
| **Include Signing Time Attribute** (`includeSigningTimeAttribute`) | Boolean | No | `true` | Adds the `signingTime` CMS signed attribute. |

Other timestamp properties—including qualified status, accuracy, policy identifier, serial number, and nonce—are determined by the `Signing Profile`, its related configurations, or the timestamp request. They are not Timestamp Formatting Connector attributes.

## Timestamp extensions

A timestamp token can contain extensions requested by the client and extensions added by the platform. When both sources provide an extension with the same object identifier (OID), the platform-provided extension takes precedence. A client therefore cannot override or suppress an extension controlled by the platform.

### Qualified timestamp

When **Qualified Timestamp** is enabled on the `Signing Profile`, the connector adds the `qcStatements` extension containing `esi4-qtstStatement-1` (OID `0.4.0.19422.1.1`), as required by ETSI EN 319 422 for a qualified electronic time-stamp.

When **Qualified Timestamp** is disabled, the token does not contain this qualified electronic time-stamp statement. See [Timestamping configuration](./configuration.md) for details about the profile setting and its time quality requirement.

## Related pages

- [Timestamping configuration](./configuration.md) — configure the Timestamping workflow on a Signing Profile
- [Timestamping overview](./overview.md) — understand how the connector participates in timestamping
- [Standards and compliance](./standards-and-compliance.md) — review the standards applied to timestamp tokens
