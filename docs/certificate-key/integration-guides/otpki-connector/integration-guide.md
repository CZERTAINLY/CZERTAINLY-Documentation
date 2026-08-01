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
Installing and operating OTPKI is out of scope of this document. This guide assumes OTPKI is installed, running, and reachable from ILM. Refer to the OTPKI documentation for the exact administration steps referenced below.
:::

## What the connector needs from OTPKI

The connector authenticates to OTPKI with an OAuth2 access token and calls OTPKI to look up profiles and CAs, create end entities, enroll and issue certificates, download CA certificates and CRLs, and revoke certificates. For that to work, OTPKI must provide:

- an **OAuth2 client** the connector authenticates as,
- a **certificate authority**, a **certificate profile**, and an **end-entity profile** to issue from,
- **network reachability** from ILM.

The sections below describe what each of these must look like. The exact steps to create them depend on your OTPKI version — follow the OTPKI documentation; this guide describes what must exist and how the connector uses it.

## Configure an OAuth2 client for the connector

The connector authenticates using the OAuth2 **client credentials** grant against your OTPKI identity provider's token endpoint (a Keycloak realm in a typical deployment, for example `https://<otpki-idp>/realms/otpki/protocol/openid-connect/token`).

In the identity provider, configure a confidential client for the connector and:

- enable the **client credentials** grant,
- note the **client id** and **client secret** — you will store these in ILM,
- if your identity provider requires a **scope** or **audience** on the token, note them as well; otherwise leave them unset.

The client's account must be allowed to perform the operations the connector uses in OTPKI:

| OTPKI resource        | Access the connector needs |
|-----------------------|----------------------------|
| Certificate authority | Read                       |
| Certificate profile   | Read                       |
| End-entity profile    | Read                       |
| End entity            | Create                     |
| Enrollment request    | Create                     |
| Certificate           | Issue, revoke, read        |

The connector never deletes OTPKI objects and never manages OTPKI roles or users, so the client does not need delete or administration permissions.

## Configure a CA and certificate templates

The connector issues certificates using OTPKI **end-entity profiles**, **certificate profiles**, and **certificate authorities**. In OTPKI, make sure the following exist and are associated with each other:

- at least one **certificate authority** to sign the certificates,
- at least one **certificate profile** (the certificate template),
- at least one **end-entity profile** whose list of allowed certificate profiles and CAs includes the ones above.

When you create an RA profile in ILM you pick an end-entity profile first; ILM then offers only the certificate profiles and CAs that the selected end-entity profile allows.

The end-entity profile also has to:

- **permit API enrollment** for the connector's client — the connector always enrolls over OTPKI's API. If the profile does not allow programmatic enrollment, issuance fails with an `enrollment request data is invalid` error.
- **let the connector supply the login id** rather than auto-generating it — the connector derives each end entity's login id from the RA profile's Login ID strategy and creates the end entity under that name.
- **accept a supplied end-entity password** rather than forcing an auto-generated one — the connector sets a password for each end entity it creates.

## Allow network access

Allow the connector (running alongside ILM) to reach OTPKI:

- the OTPKI **base URL** used for the certificate services, for example `https://otpki.example.com:15580`,
- the identity provider's **token endpoint**.

If OTPKI or the identity provider is served by a private CA, make that CA trusted — either per authority through the **TLS trust** attribute (below), or for the whole connector through its trusted-certificates bundle.

## Connect OTPKI in ILM

With OTPKI prepared, connect it in ILM.

1. Create a **Basic Authentication** credential that holds the OAuth2 client — its **username** is the OAuth client id and its **password** is the OAuth client secret.
2. Create an **Authority** that uses the OTPKI Connector and fill in the connection attributes:

   | Attribute      | Required | Description                                                                    |
   |----------------|----------|--------------------------------------------------------------------------------|
   | **Base URL**   | Yes      | Address of the OTPKI server, for example `https://otpki.example.com:15580`.      |
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

If issuance fails with `enrollment request data is invalid`, the selected end-entity profile does not permit API enrollment for the connector's client — adjust the profile in OTPKI.

## Constraints

The following are known constraints of the OTPKI integration:

| Constraint                                                                        | Note                                                                                                                       |
|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Issuance, registration, and revocation cannot be cancelled                        | OTPKI has no cancel operation, so cancel requests are rejected.                                                           |
| CRMF requests require a **Custom login ID** or **Random login ID** strategy        | The subject cannot be read from an opaque CRMF body, so the login ID cannot be derived from the CN or a DN attribute.     |
| Renewal requires a CSR                                                            | CSR-less or key-reuse renewal is not supported.                                                                          |
| Derived login ID must be 3–64 characters                                          | The Username prefix, derived value, and postfix together must stay within OTPKI's login-ID length limits, or issuance fails. |
