---
sidebar_position: 2
---

# Concepts

ILM signing is the platform's built-in digital signing capability — a self-contained solution with no external dependency such as SignServer. It builds on the same infrastructure and configuration you already have in place.

ILM supports standard signing workflows and, for EU deployments, **qualified electronic signatures and timestamps** under eIDAS and the **ETSI EN 319 42x** family. For a full breakdown of which standards apply and how each maps to an ILM mechanism, see the standards and compliance page for the relevant workflow.

:::tip
If you are already using the SignServer-based implementation, it continues to be supported throughout the transition. See [Digital Signing — SignServer](/docs/signserver/introduction).
:::

---

## Components

ILM signing is built around a small set of collaborating components. You send your request to ILM Core — Core takes care of the rest, coordinating with the connectors on your behalf.

```plantuml
@startuml
skinparam ArrowColor #1573B5
skinparam ComponentBorderColor #1573B5
skinparam CollectionsBorderColor #1573B5
skinparam NoteBackgroundColor #F7F7F7
skinparam defaultFontName sans-serif
skinparam componentStyle rectangle

actor "Client" as Client #F7F7F7
component "ILM Core" as Core #E1F5E0
component "Signature Formatting\nProvider" as Formatter #E1F5E0
component "Cryptography Provider" as Token #E1F5E0
component "TSP Profile" as TSP #F7F7F7
component "Time Quality\nConfiguration" as TQC #F7F7F7

Client -[#1573B5]-> Core : signing request
Core -[#1573B5]-> Formatter : format signature
Core -[#1573B5]-> Token : sign
Core -[#1573B5,dashed]-> TSP : workflow-specific
Core -[#1573B5,dashed]-> TQC : workflow-specific
@enduml
```

**ILM Core** receives the signing request, validates it, and coordinates with the supporting connectors to produce the response. All orchestration happens here.

**Cryptography Provider** holds and operates the signing key. This is the same connector concept you already know from key management — nothing new here.

**Signature Formatting Provider** assembles the correct data structures before and after ILM Core performs the cryptographic operation. The specific connector implementation depends on the workflow — see the workflow-specific section for details.

:::note
Each workflow may introduce additional components beyond the ones shown here. For example, timestamping adds a Time Quality Monitor that continuously verifies clock accuracy. See the workflow-specific documentation for the full picture.
:::

---

## Configuring signing

Signing in ILM is configured primarily through the [Signing Profile](./signing-profile.md). To configure it correctly, you need to understand two foundational concepts: **workflows** and **schemes**. A workflow defines *what* ILM signs; a scheme defines *how* it signs it. Together they determine which configuration options and connectors are required on the profile.

## Workflows

A **workflow** defines the type of signing operation ILM performs.

**Timestamping** — Issues RFC 3161 Time-Stamp Tokens. The input is a message imprint (hash) from the client; the output is a signed token that cryptographically binds that hash to a trusted point in time. Timestamping is the currently available workflow.

---

## Schemes

A **scheme** defines how the signing key is held and used within a workflow.

**Managed · Static Key** — ILM Core uses a long-lived [key](/docs/certificate-key/concept-design/core-components/key) for every signing operation on the profile. The key is managed centrally and never leaves the HSM or token. This is the currently available scheme.

---

## Signing Profile

A Signing Profile is the central configuration object for a signing operation. It binds the workflow, the scheme, and the supporting connectors and certificates into a single reusable unit. Each workflow may extend the Signing Profile with additional references specific to that operation type. See the [Signing Profile](./signing-profile.md) page for details.

---

## Available configuration

ILM currently supports the following workflow and scheme combination:

| Workflow | Scheme |
|---|---|
| **Timestamping** | **Managed · Static Key** |
