---
sidebar_position: 1
---

# Integration Guide

:::info
This integration guide assumes basic knowledge of ILM [`Connectors`](../../concept-design/architecture/connector.md), [`Authorities`](../../concept-design/core-components/authority.md), and [`RA Profiles`](../../concept-design/core-components/ra-profile.md), and that you already have a running OTPKI installation. It focuses on what has to be configured in OTPKI so that ILM can manage certificates through it, and on how to test the integration.
:::

[OTPKI](https://docs.otpki.com/) (OmniTrust PKI) is a modern, cloud-native PKI service for operating certificate authorities and managing the full certificate lifecycle through an API-first interface. For installing and operating OTPKI itself, see the [OTPKI documentation](https://docs.otpki.com/).

The **OTPKI Connector** that ILM uses to manage certificates in OTPKI ships with ILM (through the Helm chart or operator), so deploying it is not part of this guide. This document outlines the steps to take in OTPKI before the connector can be configured, and how to test the integration. For connecting the prepared OTPKI as an authority in ILM, create an [`Authority`](../../concept-design/core-components/authority.md) and an [`RA Profile`](../../concept-design/core-components/ra-profile.md) that use the OTPKI Connector.

:::warning[Production hardening]
The connector derives each end entity's OTPKI password from an HMAC key supplied through `OTPKI_LOGIN_PASSWORD_KEY` (Helm value `otpki.loginPasswordKey`). Left unset — the default — the connector falls back to using the login ID itself as the password, which is predictable. Set this key for any production deployment.
:::

:::info[OTPKI installation]
Installing and operating OTPKI is out of scope of this document. This guide assumes OTPKI is installed, running, and reachable from ILM. Refer to the [OTPKI documentation](https://docs.otpki.com/) for the exact administration steps referenced below.
:::

## OTPKI prerequisites

The connector authenticates to OTPKI with an OAuth2 access token and calls OTPKI to look up profiles and CAs, create end entities, enroll and issue certificates, download CA certificates and CRLs, and revoke certificates. Before the connector can be configured, prepare the following in OTPKI:

- an **OAuth2 client** the connector authenticates as, mapped to an OTPKI identity that holds the right permissions,
- a **certificate authority**, a **certificate profile**, and an **end-entity profile** to issue from,
- **network reachability** from ILM.

The sections below give the OTPKI-side steps. They follow the OTPKI administration console; for background on each screen, see the [OTPKI documentation](https://docs.otpki.com/).

## Set up the OAuth2 client

The connector authenticates using the OAuth2 **client credentials** grant against the token endpoint of the identity provider OTPKI uses — a Keycloak realm in the standard deployment, for example `https://<otpki-host>/kc/realms/otpki/protocol/openid-connect/token`.

1. In that identity provider, create a **confidential client** for the connector and enable the **client credentials** (service-account) grant. Note its **client id** and **client secret** — in ILM you store them as a **Basic Authentication** secret (username = client id, password = client secret) and select it as the authority's **OAuth client**. If the provider requires a **scope** or **audience** on the token, note them too; otherwise leave them unset. The client-creation mechanics match ILM's own Keycloak setup — see [Create Realm and Client](../keycloak/create-realm.md#create-oidc-client) (for the connector, turn on the client credentials grant rather than the login redirect flow, and add an audience mapper as in [Configure the dedicated scope](../keycloak/create-realm.md#configure-the-dedicated-scope) if OTPKI expects an audience).
2. Make sure the client's token maps to an **OTPKI identity** (a user) that OTPKI can resolve from the token. OTPKI links a token to a user through its `sub`/`iss` claims and can assign roles from a `roles` claim — see [Identity Providers](https://docs.otpki.com/docs/operations/administration/identity/identity-providers/) and [Users](https://docs.otpki.com/docs/operations/administration/identity/users/). That identity must hold the role created in the next step (either let OTPKI create it from the token's claims, or pre-create the user and assign the role).

## Grant permissions

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

3. Assign the role to the connector's identity — through the user form, or the Permissions screen's [**User Assignments**](https://docs.otpki.com/docs/operations/administration/permissions/#user-assignments) tab.

The connector never deletes OTPKI objects and never manages roles or users, so grant it no **Delete** or administration permissions.

## Configure the CA and profiles

The connector issues through an OTPKI **end-entity profile**, which ties a **certificate profile** (the template) to a **certificate authority**. Make sure all three exist and are linked:

1. A **certificate authority** to sign the certificates — see [Certificate Authorities](https://docs.otpki.com/docs/operations/issuance-and-revocation/certificate-authorities/).
2. A **certificate profile** for the certificates you issue — see [Certificate Profiles](https://docs.otpki.com/docs/operations/issuance-and-revocation/certificate-profiles/).
3. An **end-entity profile** (**Operations > Enrollment > End Entity Profiles**) configured so the connector can enroll through it:
   - under **Certificate & CA binding**, include the certificate profile and CA above in the available lists and set a default for each,
   - set **Login ID** so the connector supplies it rather than OTPKI auto-generating it — the connector names each end entity from the RA profile's Login ID strategy,
   - set **Password** to accept a supplied password rather than auto-generating one — the connector sets a password for each end entity it creates.

   See [End Entity Profiles](https://docs.otpki.com/docs/operations/enrollment/end-entity-profiles/).

When you create an RA profile in ILM you pick an end-entity profile first; ILM then offers only the certificate profiles and CAs that the selected end-entity profile allows.

## Allow network access

Allow the connector (running alongside ILM) to reach OTPKI:

- the OTPKI **base URL** used for the certificate services, for example `https://otpki.example.com`,
- the identity provider's **token endpoint**.

If OTPKI or the identity provider is served by a private CA, make that CA trusted — either per authority through the **TLS trust** attribute (below), or for the whole connector through its trusted-certificates bundle.

## Test the integration

1. Creating or updating the authority runs a **connect** check that lists the OTPKI certificate authorities. A successful result confirms the connector can reach OTPKI and authenticate with the OAuth2 client.
2. Through an RA profile, **issue a test certificate** from a CSR. A successful issuance exercises the whole path — creating the end entity, enrolling, and issuing.
3. Optionally confirm that **revocation** works and that the **CRL** and **CA certificate** downloads succeed for the selected CA.

If issuance fails with `enrollment request data is invalid`, the selected end-entity profile is rejecting the connector's enrollment — most often because it forces an auto-generated login ID or password, or does not allow the selected CA or certificate profile. Adjust the profile in OTPKI.

## Constraints

The following are known constraints of the OTPKI integration:

| Constraint                                                                        | Note                                                                                                                       |
|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Issuance, registration, and revocation cannot be cancelled                        | OTPKI has no cancel operation, so cancel requests are rejected.                                                           |
| CRMF requests need a fixed or random login ID                                     | The subject cannot be read from an opaque CRMF body, so the login ID cannot be derived from the certificate's CN or a DN attribute — configure the RA profile to use a custom or random login ID instead. |
| Renewal requires a CSR                                                            | CSR-less or key-reuse renewal is not supported.                                                                          |
| Derived login ID must be 3–64 characters                                          | The login ID the RA profile derives for each end entity (including any prefix or suffix) must stay within OTPKI's 3–64 character limit, or issuance fails. |
