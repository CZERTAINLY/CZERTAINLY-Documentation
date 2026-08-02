---
sidebar_position: 6
---

# Create RA Profile

An [`RA Profile`](../../concept-design/core-components/ra-profile.md) selects the OTPKI profiles that certificates are issued from, and decides how the end entity created for each certificate is named.

Create the `RA Profile` and select the `Authority` from the previous step on it, see [Create RA Profile](../../quick-start/certificate-management/create-ra-profile.mdx) for the general procedure. Creating the `RA Profile` does not put it into service, it has to be enabled before certificates can be issued through it.

## Select the OTPKI profiles

| Attribute             | Required | Description                                                                     |
|-----------------------|----------|-----------------------------------------------------------------------------------|
| End Entity Profile    | Yes      | The OTPKI end entity profile that certificates are enrolled through              |
| Certificate Profile   | Yes      | The OTPKI certificate profile used as the template for the certificates          |
| Certificate Authority | Yes      | The OTPKI certification authority that signs the certificates                    |

Select the end entity profile first. The certificate profile and the certification authority are then offered only with the values that the selected end entity profile allows, as configured in [Configure CA and Profiles](./configure-profiles.md).

## Configure the login ID

Every certificate issued through the `RA Profile` gets an end entity in OTPKI, identified by its **login ID**. The login ID is derived for each issuance from the settings below.

| Attribute         | Required | Description                                                     |
|-------------------|----------|-------------------------------------------------------------------|
| Login ID strategy | Yes      | How the login ID is derived                                      |
| Username prefix   | No       | Text inserted before the derived value                           |
| Username postfix  | No       | Text inserted after the derived value                            |

The available strategies are:

| Strategy                   | Login ID                                             | Additional input        |
|----------------------------|------------------------------------------------------|-------------------------|
| Login ID from CN           | The `CN` of the certificate request subject          | —                       |
| Login ID from DN attribute | A named attribute of the certificate request subject | Login ID DN attribute   |
| Custom login ID            | A fixed value used for every certificate             | Login ID custom value   |
| Random login ID            | A random 16 character value                          | —                       |

Selecting a strategy reveals the additional input it needs, if any.

The final login ID is the username prefix, the derived value, and the username postfix joined together, and it must be between 3 and 64 bytes long. A value outside that range is rejected before the request reaches OTPKI. Characters outside the ASCII range count as more than one byte.

:::warning[Login IDs are unique in OTPKI]
A login ID identifies one end entity across the whole OTPKI installation, and issuing a certificate creates a new end entity. A login ID that is already taken therefore fails.

Each strategy allows as many certificates as it produces distinct login IDs:

- **Random login ID** produces a new value every time, so it suits any `RA Profile`, including one that issues in volume.
- **Login ID from CN** and **Login ID from DN attribute** allow one certificate per distinct value in the certificate request, so they suit profiles where each subject is certified once.
- **Custom login ID** produces one value in total, so it suits a profile that issues a single certificate, or one that renews the certificate of an end entity it registered earlier.
:::

:::info[Certificate requests in CRMF format]
The subject cannot be read from a certificate request in CRMF format, so an `RA Profile` used for CRMF enrollment must use **Custom login ID** or **Random login ID**. The strategies that derive the login ID from the subject reject a CRMF request.
:::

The login ID and the end entity are recorded on the certificate when it is issued, and are reused when the certificate is later renewed or revoked through the platform.

## Certificate operations

The `RA Profile` needs no further configuration for issuing, renewing, revoking, or registering certificates. Those operations take the certificate request, the revocation reason, or the subject from the request itself, together with the settings above.
