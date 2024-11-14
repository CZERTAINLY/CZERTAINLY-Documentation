# Overview

This document outlines the steps necessary to be taken to integrate the CZERTAINLY with the [cert-manager](https://cert-manager.io/) `czertainly-issuer`.

This integration guide was tested with:
- Kubernetes 1.19+
- cert-manager 1.7.0+

## cert-manager

cert-manager is a Kubernetes add-on to automate the management and issuance of TLS certificates from various issuing sources. It will ensure certificates are valid and up to date periodically, and attempt to renew certificates at an appropriate time before expiry.

## CZERTAINLY Issuer

The CZERTAINLY issuer is a custom resource definition (CRD) that allows you to issue certificates from the CZERTAINLY platform using cert-manager interface.

## Integration

The following steps should be done to successfully integrate the CZERTAINLY with the cert-manager:

| #     | Reference                                        | Short description                                              |
|-------|--------------------------------------------------|----------------------------------------------------------------|
| **1** | [install CZERTAINLY Issuer](./enable-pki-engine) | Enable and configure the PKI secrets engine  |
| **2** | [Create CZERTAINLY Issuer](./create-acl-policy)  | Create ACL policy with permissions for CZERTAINLY              |
| **3** | [Create Certificate](./enable-auth-methods)      | Enable authentication methods that can be used                 |
