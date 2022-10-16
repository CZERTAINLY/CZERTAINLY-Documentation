# Overview

The platform is carefully designed with the following goals in mind:

- easy management of the data
- extensibility and flexibility
- technology agnostic
- easy to use and maintain
- quick installation

## Concept of the platform

It is designed as a microservice architecture with the ability to be flexible in various occasions.

It is based on the principle that the `Core` is acting as a middleman between the `Client` and the `Connector` providing the logic of all operations. The `Connector` contains the full implementation of a particular technology. It accepts the request from the `Core`, processes it, and sends back the response in a format the `Core` can understand. `Connector` is also designed to be completely independent from other paltform components.

### Architecture

The architecture of the platform is based on the following parts:

| Part                                                         | Brief description                                                                                                               |
|--------------------------------------------------------------| ------------------------------------------------------------------------------------------------------------------------------- |
| **[Database](architecture/database)**                        | Stores the data. SQL Database is used by default.                                                                               |
| **[Core](architecture/core)**                                | This is the brain of the platform. It contains the full logic of request processing.                                               |
| **[Interfaces](architecture/interfaces)**                    | Interfaces provided and used by the platform.                                                                                       |
| **[Connector](architecture/connector)**                      | Technology implementations that interact with the `Core` to perform the designated operation on the technology.    |
| **[Access Control](architecture/access-control/overview)** | Roles and permissions in the platform.                                                                                      |

See the [Architecture Overview](architecture/overview) for more details about the architecture of the platform.

### Core Components

The platform consists of the following components:

| Components                                     | Brief description                                                                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **[Credential](core-components/credential)**   | Stores the credentials for the Connectors.                                                                                      |
| **[Authority](core-components/authority)**     | Authority instances representing access to specific certification authority technology.                                         |
| **[RA Profile](core-components/ra-profile)**   | RA Profile abstracts the configuration of certificate-related attributes and provides a service for the Clients to manage them. | |
| **[Compliance Profile](core-components/compliance-profile)**   | Collection of rules to be applied on a certificate to determine whether it satisfies the organizational compliance policy |
| **[Entity](core-components/entity)**           | Entity representing the end user of the certificates and cryptographic key.                                                     |
| **[Certificate](core-components/certificate)** | Certificate is an inventory object that contains all information about its lifecycle.                                           |
| **[Group](core-components/group)**             | Grouping allows to manage multiple certificates with the same characteristics.                                                  |

### Modules

Platform modules provides the following functionality:

| Module | Brief description |
| ------ | ----------------- |
| **[Certificate Management](modules/certificate-management)** | Provides certificate lifecycle management functions. |
| **[Certificate Inventory](modules/certificate-inventory)** | Inventory of all certificates that are consistently visible and managed. |
| **[Certificate Discovery](modules/certificate-discovery)** | Searching for certificates in various sources providing detailed results about discovered certificates. |
| **[Dashboards](modules/dashboards)** | Comprehensive visual dashboard providing quick information about the current certificate inventory state. |