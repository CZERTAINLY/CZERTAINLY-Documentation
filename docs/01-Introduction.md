---
slug: /
---

# Introduction

CZERTAINLY is a platform for effective and efficient certificate and cryptographic key lifecycle management for companies of any size and individuals. One of its goals is to provide an easy and affordable way to secure digital communication and support information security in more and more connected world.

The platform is released as a commercial open source project under the [MIT License](https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md). Additional features and services are available under subscription plans.

It is designed and developed by a team of PKI and information security enthusiasts with practical point of view on the certificate and cryptographic key management in hybrid environments. PKI is the backbone of security in our daily communication and its security and easy management should be available to everyone.

## Features

The platform aims to provide easy, secure, and extensible features for certificate and cryptographic key management. Among the features are:

- certificate management (issuing, revocation, renewal) through RA Profile
- extensible Connectors to support many technologies and implementations of Certification Authorities, Credentials, Discovery Providers
- certificate searching in various sources
- consistent inventory of certificates (owners, groups, entities, profiles)
- dashboard for monitoring and reporting

## Architecture

The platform is split into several components:

- interfaces
- authentication and authorization
- core services provided by the platform
- grouping and entity automation
- data storage
- Connectors and Functional Groups and Types

Components in the platform acts as micro-services and the main approach is to keep each service as a simple container.

![Platform ingredients](assets/platform-ingredients.png)

## Contribution

Anyone can contribute to the platform and we would be happy to support you in that. See [Contribution Guide](https://github.com/3KeyCompany/CZERTAINLY/blob/develop/CONTRIBUTING.md) for more information.
