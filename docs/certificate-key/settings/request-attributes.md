---
sidebar_position: 12
---

# Request Attributes

Request attributes define what a requester fills in on a certificate request form and where each value lands in the issued certificate. If you are new to request attributes, read the [Request Attribute](../concept-design/core-components/request-attribute.md) concept first. This page covers the platform-level settings.

## Platform default request-attribute set

The platform holds one default request-attribute set. It is the terminal fallback: it applies only when the resolution for an [`RA Profile`](../concept-design/core-components/ra-profile.md#request-attributes) yields no definitions — the profile authored no static set.

To manage it, navigate to **Settings** → **Platform** → **Request Attributes** tab. The **Default Request Attributes** widget offers the same authoring editor as the `RA Profile` dialog. Changes are saved automatically.

When the default set has never been edited, a built-in seed applies. It consists of six subject attributes: Common Name, Organizational Unit, Organization, Locality, State, and Country.

## External CSR validation default

The platform also holds the default strictness for validating external CSRs:

- Every `RA Profile` that does not set its own validation mode inherits the platform default.
- The platform default is a **Strict**/**Lenient** control on the **Settings** → **Platform** → **Request Attributes** tab (saved automatically), and is also editable through the platform settings API.
- When the platform default is not set either, the final fallback is **lenient**.

Setting **strict** as the platform default is rarely appropriate: every profile without a deliberately authored request-attribute set would reject CSRs carrying SAN entries or extensions — see the [strict-mode warning](../concept-design/core-components/ra-profile.md#external-csr-validation).

See [External CSR validation](../concept-design/core-components/ra-profile.md#external-csr-validation) for what strict and lenient mean.
