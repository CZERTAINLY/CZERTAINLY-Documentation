---
sidebar_position: 3
---

# Info Interface

## Overview

Each `Connector` has to implement the `Info` interface. This interface provides information about the list of supported functions and endpoints of the `Connector`.
The data is validated by the `Core` to check if the `Connector` is compliant with the definition of interfaces based on its function group.

## How it works

The `Info` interface is used during the `Connector` registration and reconnecting to update the information if necessary.

## Processes

### Client operations

The `Client` with proper permissions can manage the `Connectors` and invoke API that works with the `Info` interface of the `Connector`.
The following diagrams represents the requests and communication flow.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        alt requests
            Client->>Core [[core-connector/#tag/Connector-Management-API/operation/connect]]: Connect to a Connector
            Note over Client,Core: Connect to the Connector on specified URL and authentication method
            Client->>Core [[core-connector/#tag/Connector-Management-API/operation/getConnector]]: Get details of a Connector
            Client->>Core [[core-connector/#tag/Connector-Management-API/operation/editConnector]]: Edit a Connector
            Note over Client,Core: Update Connector
            Client->>Core [[core-connector/#tag/Connector-Management-API/operation/reconnect]]: Reconnect to a Connector
        end
        Core->>Connector: List supported functions of the connector
        Note over Core,Connector: Get information about the Connector
        Connector-->>Core: Function Groups, Kinds, and EndPoints
        Core-->>Client: Function Groups, Kinds, and EndPoints
    @enduml
```

### Connector self-registration

The `Connector` is allowed to self-register in the platform. In this case the information about the `Connector` is stored and waiting for approval by the user or administrator.
The registration of the `Connector` may be executed by any external entity.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Connector->>Core [[core-connector/#tag/Connector-Registration-API/operation/register]]: Register a Connector
        Core->>Connector: List supported functions of the connector
        Note over Core,Connector: Get information about the Connector
        Connector-->>Core: List of supported Function Groups, Kinds, and EndPoints
        Core-->>Connector: Registered UUID of the Connector
    @enduml
```

## Specification and example

You can find specification and information about the `Info` interface on the following locations:
- [Core Connector API](/api/core-connector/)
- Connector API specifications, see for example [Authority Provider](/api/connector-authority-provider-v2/)
