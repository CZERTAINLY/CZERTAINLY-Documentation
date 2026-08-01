---
sidebar_position: 1
---

# Integration Guide

:::info
This integration guide assumes basic knowledge of ILM [`Connectors`](../../concept-design/architecture/connector.md), [`Authorities`](../../concept-design/core-components/authority.md), and [`RA Profiles`](../../concept-design/core-components/ra-profile.md), and that you already have a running OTPKI installation. It focuses on what has to be configured in OTPKI so that ILM can manage certificates through it, and on how to test the integration.
:::

ILM manages certificates in OTPKI through the **OTPKI Connector**, an Authority Provider connector. The connector is deployed together with ILM (through the ILM Helm chart or operator), so deploying it is not part of this guide. What you do need to prepare is the OTPKI side: an OAuth2 client the connector can authenticate as, and the certificate authority and templates it issues from.

This document outlines the steps to take in OTPKI before the connector can be configured, how to connect an OTPKI authority in ILM, and how to test the integration.

:::info[OTPKI installation]
Installing and operating OTPKI is out of scope of this document. This guide assumes OTPKI is installed, running, and reachable from ILM. Refer to the [OTPKI documentation](https://docs.otpki.com/) for the exact administration steps referenced below.
:::

## What the connector needs from OTPKI

The connector authenticates to OTPKI with an OAuth2 access token and calls OTPKI to look up profiles and CAs, create end entities, enroll and issue certificates, download CA certificates and CRLs, and revoke certificates. Before the connector can be configured, prepare the following in OTPKI:

- an **OAuth2 client** the connector authenticates as, mapped to an OTPKI identity that holds the right permissions,
- a **certificate authority**, a **certificate profile**, and an **end-entity profile** to issue from,
- **network reachability** from ILM.

The sections below give the OTPKI-side steps. They follow the OTPKI administration console; for background on each screen, see the [OTPKI documentation](https://docs.otpki.com/).

## Create the OAuth2 client and map it to an OTPKI identity

The connector authenticates using the OAuth2 **client credentials** grant against the token endpoint of the identity provider OTPKI uses — a Keycloak realm in the standard deployment, for example `https://<otpki-host>/kc/realms/otpki/protocol/openid-connect/token`.

1. In that identity provider, create a **confidential client** for the connector with the **client credentials** grant enabled. Note its **client id** and **client secret** — you store these in ILM. If the provider requires a **scope** or **audience** on the token, note them too; otherwise leave them unset.
2. Make sure the client's token maps to an **OTPKI identity** (a user) that OTPKI can resolve from the token. OTPKI links a token to a user through its `sub`/`iss` claims and can assign roles from a `roles` claim — see [Identity Providers](https://docs.otpki.com/docs/operations/administration/identity/identity-providers/) and [Users](https://docs.otpki.com/docs/operations/administration/identity/users/). That identity must hold the role created in the next step (either let OTPKI create it from the token's claims, or pre-create the user and assign the role).

## Grant the connector's identity the required permissions

Create a role for the connector and grant it exactly the resource/action permissions it uses — nothing more.

1. Go to **Operations > Administration > Identity > Roles**, click **Create**, and name the role (for example `ilm-connector`). See [Roles](https://docs.otpki.com/docs/operations/administration/identity/roles/).
2. Go to **Operations > Administration > Permissions**, select the role, and set these cells to **Allow** (click a cell to cycle Allow / Deny / Unset, then **Save**). See [Permissions](https://docs.otpki.com/docs/operations/administration/permissions/).

   | Resource              | Actions             |
   |-----------------------|---------------------|
   | Certificate authority | Read                |
   | Certificate profile   | Read                |
   | End-entity profile    | Read                |
   | End entity            | Create, Read        |
   | Enrollment request    | Create              |
   | Certificate           | Issue, Revoke, Read |

3. Assign the role to the connector's identity — through the user form, or the Permissions screen's **User Assignments** tab.

The connector never deletes OTPKI objects and never manages roles or users, so grant it no **Delete** or administration permissions.

## Configure a CA, certificate profile, and end-entity profile

The connector issues through an OTPKI **end-entity profile**, which ties a **certificate profile** (the template) to a **certificate authority**. Make sure all three exist and are linked:

1. A **certificate authority** to sign the certificates — see [Certificate Authorities](https://docs.otpki.com/docs/operations/issuance-and-revocation/certificate-authorities/).
2. A **certificate profile** for the certificates you issue — see [Certificate Profiles](https://docs.otpki.com/docs/operations/issuance-and-revocation/certificate-profiles/).
3. An **end-entity profile** (**Operations > Enrollment > End Entity Profiles**) configured so the connector can enroll through it:
   - under **Certificate & CA binding**, include the certificate profile and CA above in the available lists and set a default for each,
   - set **Login ID** so the connector supplies it rather than OTPKI auto-generating it — the connector names each end entity from the RA profile's Login ID strategy,
   - set **Password** to accept a supplied password rather than auto-generating one — the connector sets a password for each end entity it creates.

   See [End Entity Profiles](https://docs.otpki.com/docs/operations/enrollment/end-entity-profiles/).

When you create an RA profile in ILM you pick an end-entity profile first; ILM then offers only the certificate profiles and CAs that the selected end-entity profile allows.

If issuance later fails with an `enrollment request data is invalid` error, the end-entity profile is rejecting the connector's request — most often because it forces an auto-generated login id or password, or does not allow the selected CA or certificate profile. Adjust the profile in OTPKI.

## Allow network access

Allow the connector (running alongside ILM) to reach OTPKI:

- the OTPKI **base URL** used for the certificate services, for example `https://otpki.example.com`,
- the identity provider's **token endpoint**.

If OTPKI or the identity provider is served by a private CA, make that CA trusted — either per authority through the **TLS trust** attribute (below), or for the whole connector through its trusted-certificates bundle.

## Connect OTPKI in ILM

With OTPKI prepared, connect it in ILM.

1. Create a **Basic Authentication** credential that holds the OAuth2 client — its **username** is the OAuth client id and its **password** is the OAuth client secret.
2. Create an **Authority** that uses the OTPKI Connector and fill in the connection attributes:

   | Attribute      | Required | Description                                                                    |
   |----------------|----------|--------------------------------------------------------------------------------|
   | **Base URL**   | Yes      | Address of the OTPKI server, for example `https://otpki.example.com`.            |
   | **Token URL**  | Yes      | OAuth2 token endpoint that issues access tokens for OTPKI.                       |
   | **OAuth client** | Yes    | The Basic Authentication credential created above.                              |
   | **OAuth scope** | No      | Only if your identity provider requires a specific scope.                        |
   | **OAuth audience** | No   | Only if your identity provider requires a specific audience.                     |
   | **TLS trust**  | No       | Root or Intermediate CA certificate(s) to trust a private OTPKI endpoint.        |

   The connector authenticates to OTPKI with the OAuth2 bearer token only; there is no mutual TLS. The remaining authority attributes (call deadline and retry settings) can be left at their defaults.

3. Create one or more **RA Profiles** against the authority. Select the **End Entity Profile** first, then the **Certificate Profile** and **Certificate Authority** (ILM populates these from the selected end-entity profile), and choose a **Login ID strategy** that decides how each OTPKI end entity is named:

   | Login ID strategy          | Meaning                                                                                    |
   |----------------------------|--------------------------------------------------------------------------------------------|
   | Login ID from CN           | Use the CN from the certificate request.                                                   |
   | Login ID from DN attribute | Use a specific subject DN attribute; picking it reveals a **Login ID DN attribute** field. |
   | Custom login ID            | Always use the same configured value; picking it reveals a **Login ID custom value** field. |
   | Random login ID            | Generate a unique value for each certificate.                                              |

   Optionally set a **Username prefix** and **Username postfix** — they wrap whichever login id the strategy produces. The resulting login id must be 3–64 characters long.

For the general authority and RA-profile flow in ILM, see [Create an authority](../../quick-start/certificate-management/create-authority.mdx) and [Create an RA profile](../../quick-start/certificate-management/create-ra-profile.mdx).

## Test the integration

1. Creating or updating the authority runs a **connect** check that lists the OTPKI certificate authorities. A successful result confirms the connector can reach OTPKI and authenticate with the OAuth2 client.
2. Through an RA profile, **issue a test certificate** from a CSR. A successful issuance exercises the whole path — creating the end entity, enrolling, and issuing.
3. Optionally confirm that **revocation** works and that the **CRL** and **CA certificate** downloads succeed for the selected CA.

If issuance fails with `enrollment request data is invalid`, the selected end-entity profile is rejecting the connector's enrollment — see [Configure a CA, certificate profile, and end-entity profile](#configure-a-ca-certificate-profile-and-end-entity-profile) and adjust the profile in OTPKI.

## Constraints

The following are known constraints of the OTPKI integration:

| Constraint                                                                        | Note                                                                                                                       |
|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Issuance, registration, and revocation cannot be cancelled                        | OTPKI has no cancel operation, so cancel requests are rejected.                                                           |
| CRMF requests require a **Custom login ID** or **Random login ID** strategy        | The subject cannot be read from an opaque CRMF body, so the login ID cannot be derived from the CN or a DN attribute.     |
| Renewal requires a CSR                                                            | CSR-less or key-reuse renewal is not supported.                                                                          |
| Derived login ID must be 3–64 characters                                          | The Username prefix, derived value, and postfix together must stay within OTPKI's login-ID length limits, or issuance fails. |
