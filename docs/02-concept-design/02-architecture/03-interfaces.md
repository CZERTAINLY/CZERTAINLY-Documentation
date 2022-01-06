# Interfaces

The platform consists of a set of interfaces related to the platform APIs and communication with `Connector`.

These interfaces must be generally applied when extending the platform, in case you would like to develop custom `Connector` providing some specific functionality or implementing some proprietary protocols.

The platform consists of the following interfaces:

- Client Web Interfaces (Administrator and Operator)
- Client REST API
- Connector Interfaces
- Core Interfaces

To know more about the list of APIs refer to [Interfaces Repository](https://github.com/3KeyCompany/CZERTAINLY-Interfaces).

## `Client` Web Interfaces

`Client` web interfaces are graphical representation for the user. There are the following `Client` web interfaces:

| Interface     | Description                                                                                                                                                                                                                                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Administrator` | Management of the platform. This interface includes administrative components and administrative operations.                                                                                   |
| `Operator`      | Provides certificate and cryptographic key related operations. |

## `Client` REST API

Platform offers REST API to communicate with the platform. REST API can be split into two major categories:

| Interface         | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| `Administration`    | For administrative operations. |
| `Client Operations` | For certificate and cryptographic key related operations.          |

## `Connector` Interfaces

The `Connector` interface implements specific technology that can be connected with the platform. Depending on the technology and use-case, the `Connector` may be of different `Types` and `Functional Groups`.

Each `Connector` has to implement at least the following interfaces:

- Attributes
- Health
- Info

## `Core` Interfaces

`Core` interfaces are used by the platform to communicate with the `Connector` and the `Client`.

You can find the description of the `Core` interfaces in the following sections:
- [Core interfaces](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/tree/develop/src/main/java/com/czertainly/api/interfaces/core)