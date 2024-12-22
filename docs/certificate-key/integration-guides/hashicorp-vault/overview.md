---
sidebar_position: 1
---

# Overview

This document outlines the steps necessary to be taken to integrate the CZERTAINLY with the HashiCorp Vault PKI secrets engine to manage and automate certificate lifecycle.

This integration guide was tested on:
- Vault version 1.14.0+

## HashiCorp Vault

[HashiCorp Vault](https://www.vaultproject.io/) is a tool for securely accessing secrets. A secret is anything that you want to tightly control access to, such as API keys, passwords, certificates, and more. Vault provides a unified interface to any secret, while providing tight access control and recording a detailed audit log.

Vault provides a PKI secrets engine that generates X.509 certificates on demand. The PKI secrets engine generates dynamic X.509 certificates based on configured roles. The certificates are signed by the Vault's internal CA or an external CA.

:::info[Vault installation]
This guide assumes that you have already installed and configured HashiCorp Vault. If you haven't done so, refer to the [HashiCorp Vault documentation](https://learn.hashicorp.com/tutorials/vault/getting-started-install) for installation and configuration instructions.

For more information about the PKI secrets engine, refer to the [Vault PKI secrets engine documentation](https://www.vaultproject.io/docs/secrets/pki).
:::

## Integration

The following steps should be done to successfully integrate HashiCorp Vault with CZERTAINLY:

| #     | Reference                                                 | Short description                                 |
|-------|-----------------------------------------------------------|---------------------------------------------------|
| **1** | [Enable PKI Secrets Engine](./enable-pki-engine.md)       | Enable and configure the PKI secrets engine       |
| **2** | [Create ACL Policy](./create-acl-policy.md)               | Create ACL policy with permissions for CZERTAINLY |
| **3** | [Enable Authentication Methods](./enable-auth-methods.md) | Enable authentication methods that can be used    |
