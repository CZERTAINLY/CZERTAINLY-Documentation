# Discovery Provider

## Overview

Discovery Providers are the implementation of the functionality to discover certificate from various sources. A Discovery Provider is responsible for discovering the certificates from the source and returning the list of certificates to the `Core`. The `Core` then stores the certificates in the database and makes it available for the users to perform various operations.

## How it works

This section of the document describes the process of working with the Discovery Provider.

The step by step process of working of `Discovery Provider` is as follows:
1. Each `Discovery Providers` has their own list of `attributes` based on their integration with the technology.
2. `Core` sends the request to the `Discovery Provider` with the list of `attributes`.
3. `Discovery Provider` uses the list of `attributes` to discover the certificates from the source.
4. `Discovery Provider` returns the list of certificates to the `Core`.
5. `Core` stores the certificates in the database.

## Provider objects

The Discovery Provider is managing `Discovery` Module.
For more information, refer to [`Discovery`](../../concept-design/modules/certificate-discovery).

## Processes

This section of the document describes the list of processes involved in discovering the certificates using the Discovery Providers.

### Create `Discovery`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to create a `Discovery`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-discovery/#tag/Discovery-Management-API/operation/createDiscovery]]: Create Discovery
        note over Client,Core: Create Discovery with Attributes
        Core->Core: Check existence of Connector and Discovery
        Core -> Connector [[connector-discovery-provider/#tag/Attributes-API/operation/validateAttributes]]: Validate Attributes
        note over Core,Connector: Validation of Attributes
        Connector --> Core: Result of attribute validation
        |||
        Core -> Connector [[connector-discovery-provider/#tag/Discovery-API/operation/discoverCertificate]]: Create Discovery
        note over Core,Connector: Discovery of Certificates
        Connector --> Core: Return discovery triggered async response
        Core --> Client: Return discovery UUID
        |||
        Connector -> Devices : Discover Certificates from the devices
        Devices -> Connector : Certificates
        |||
        Connector -> Connector: Store discovered certificates
        note over Core, Connector: Certificates retrieval phase
        loop till all certificates are retrieved
            Core --> Connector [[connector-discovery-provider/#tag/Discovery-API/operation/getDiscovery]]: List of Certificates request
            Connector --> Core: Certificates with pagination details
        end
        |||
        Core -> Core: Store Certificates in the database
    @enduml
```

### Get `Discovery` Details

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to get the details of a `Discovery`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-discovery/#tag/Discovery-Management-API/operation/getDiscovery]]: Get Discovery details
        Core -> Core: Formulate Discovery details
        Core -> Client: Return Discovery details
    @enduml
```


### Delete Discovery

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to delete a `Discovery`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-discovery/#tag/Entity-Management-API/operation/removeDiscovery]]: Remove Discovery
        note over Client,Core: Remove Discovery
        Core -> Connector [[connector-discovery-provider/#tag/Discovery-API/operation/deleteDiscovery]]: Remove Discovery
        note over Core,Connector: Remove Discovery
        Connector --> Core: discovery removed
        Core -> Core : Remove Discovery from the database
        Core --> Client: Discovery reference removed
    @enduml
```

To know more about the `Certificate Discovery`, [click here](../../concept-design/modules/certificate-discovery)


## Specifications

`Discovery Providers` implement the following interfaces:

- [Discovery Interface](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/DiscoveryController.java)
- [Health Interface](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/HealthController.java)
- [Info](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/InfoController.java)
- [Attributes](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/AttributesController.java)

:::info
API specification can be found in the [API Specification](https://docs.czertainly.com/api/connector-discovery-provider/)