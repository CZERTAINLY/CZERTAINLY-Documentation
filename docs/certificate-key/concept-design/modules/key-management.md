---
sidebar_position: 10
---

# Key Management

Platform offers cryptographic key management and cryptographic operations.

:::info
Every cryptographic key management and operation in the platform are achieved through the `Token Profile`. To perform any action on `Key`, the `Key` must be bound to `Token Profile`. See [`Token Profile`](../core-components/token-profile.md) for more information.
:::

Operations on `Key` includes:

- **Create / Destroy**
- **Encrypt / Decrypt**
- **Sign / Verify**
- **Generate random data**

## Experimental support for PQC algorithms

The platform implements experimental support for post-quantum cryptography algorithms. The following PQC signature schemes are supported:
- FALCON
- CRYSTALS-Dilithium
- SPHINCS+