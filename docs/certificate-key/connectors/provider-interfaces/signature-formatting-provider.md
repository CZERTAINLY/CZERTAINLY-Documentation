---
sidebar_position: 26
---

# Signature Formatting Provider

The Signature Formatting Provider is a connector interface responsible for assembling the data structures involved in a signing operation — building the exact bytes that `Core` must sign, and reconstituting the finished signed object once the signature is available. It holds no keys and performs no cryptographic signing itself; that stays with `Core`.

## Overview

A connector implementing this interface is referenced by a [`Signing Profile`](../../../signing/signing-profile.md) as its **Signature Formatting Connector**. `Core` calls it around the cryptographic operation: once to prepare what must be signed, and once to assemble the signed result. The concrete structures produced depend on the implementation and the signing workflow.

## How it works

`Core` calls a Signature Formatting Provider at two points in a signing operation:

1. **`formatDtbs`** — given the values `Core` has gathered for the operation, build the data to be signed (DTBS) and return the byte sequence that must be signed.
2. **`formatSigningResponse`** — after `Core` has signed the DTBS with the profile's managed key, assemble the signature and the formatted structures into the finished signed object.

Each call is independent — the connector receives everything it needs as request input and returns the result of that single step, with nothing carried over from the other call.

## Attributes

An implementation may expose configurable attributes that control optional content in the formatted output. Attributes are set when configuring the connector on the `Signing Profile` and validated through the connector's [Attributes interface](../common-interfaces/attributes-interface.md); an unrecognized attribute name is rejected. The specific attributes depend on the implementation.

## Implementations

| Connector | Workflow | Output |
|---|---|---|
| [Timestamp Formatting Connector](../../../signing/timestamping/timestamp-formatting-connector.md) | Timestamping | RFC 3161 timestamp tokens |

## Specification

A Signature Formatting Provider implements the [Common Interfaces](../common-interfaces/overview.md) in addition to the two formatting operations above.
