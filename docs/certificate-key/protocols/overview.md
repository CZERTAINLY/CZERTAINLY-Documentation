---
sidebar_position: 1
---

# Overview

Certificate management and automation of the certificate lifecycle is a key part to protect your environment from outages and security breaches.
Protocols play important role in this process, whether standardized or proprietary.

The platform implements protocols for consistent and secure certificate management. You can use protocols independently on technologies, which provides a higher flexibility and seamless migration if needed.

From a different perspective, platform works as a proxy between the clients that use protocols and technologies like certification authorities. The benefits of this approach and setup are:
- easy and convenient migration between technologies without impact on the clients consuming services
- agility in switching between different technologies in case of obsolete algorithm or revoked certificates
- consistent and compliant certificate management in hybrid environments
- control about the certificate lifecycle and its usage

The following protocols are implemented:

| Protocol                                                                | Description                                                                                                                                                                                                                                                                                                                                                              |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ACME](acme/overview.md) (Automatic Certificate Management Environment) | ACME protocol as defined by [RFC 8555 - Automatic Certificate Management Environment (ACME)](https://datatracker.ietf.org/doc/html/rfc8555). <br/> Protocol for automated requesting, validating, and issuing of certificates. Implementation supports issuing of certificates to not only web servers, but also clients, IoT devices, and many more.                    |
| [CMP](cmp/overview.md) (Certificate Management Protocol)                | CMP protocol as defined by [RFC 4210 - Internet X.509 Public Key Infrastructure Certificate Management Protocol (CMP)](https://datatracker.ietf.org/doc/html/rfc4210) with the [3GPP Specification](https://www.3gpp.org/specifications-technologies) support for certificate management in telecommunications. <br/> Protocol for comprehensive certificate management. |
| [SCEP](scep/overview.md) (Simple Certificate Enrollment Protocol)       | SCEP protocol as defined by [RFC 8894 - Simple Certificate Enrolment Protocol](https://datatracker.ietf.org/doc/html/rfc8894) with backward compatibility with [draft-nourse-scep-23](https://datatracker.ietf.org/doc/html/draft-nourse-scep-23). <br/> Protocol for certificate management and certificate and CRL queries.                                            |
