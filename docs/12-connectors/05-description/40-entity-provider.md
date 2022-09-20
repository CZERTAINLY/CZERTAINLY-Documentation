# Entity Provider

## Overview

Entity Providers are the implementation of management of `Certificates` in the end entities. These end entity can be of any type of devices like key stores, servers, mobile devices, etc. `Entity Providers` provides the communication channel between the entity and the core.

`Entity Providers` provides the pathways to perform the following operations:
- Discover the `Certificates` in the entity
- Remove a `Certificate` from the entity
- Issue a new `Certificate` to the entity
- Push an existing `Certificate` to the entity

## How it works

Keystore Entity Provider `Connector` provides access to the keystore locations on the remote servers. Multiple locations on one server are supported. The Connector can create multiple Entities and automate the certificate lifecycle on associated locations.

## Provider objects

The table below contains the list of `Entity Provider` specific objects.

| Object | Purpose |
| -------- | --------- |
| `Entity` | The `Entity` that is managed by the `Entity Provider`. Entities are comprised of multiple locations|
| `Location` | The `location` of the `Entity` that is managed by the `Entity Provider`. Location is the object that contains the details of the certificates and information about where they are currently deployed. A Single location can have more than one certificates |

## Processes

This section of the document explains the list of processes involved in managing the certificates on the entities using the `Entity Providers`.

## Entity
Sections below represents the list of processes involved in managing the entities.

### Create `Entity`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to create an `Entity`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-Entity/#tag/Entity-Management-API/operation/createEntityInstance]]: Add Entity Instance
        note over Client,Core: Add New Entity with Attributes
        Core->Core: Check existence of Connector and Entity
        Core -> Connector [[core-Entity/#tag/Entity-Management-API/operation/validateLocationAttributes]]: Validate Attributes
        note over Core,Connector: Validation of Attributes
        Connector --> Core: Result of attribute validation
        |||
        Core -> Connector [[core-Entity/#tag/Entity-Management-API/operation/createEntityInstance]]: Add new Entity
        note over Core,Connector: Entity addition
        Connector --> Connector: Check Connection to the Entity
        Connector --> Connector: Resister Entity
        Connector --> Core: Entity Details
        Core -> Core: Store Entity Reference
        Core -> Client: Return Entity UUID
    @enduml
```

### Get `Entity` Details

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to get the details an `Entity`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-Entity/#tag/Entity-Management-API/operation/getEntityInstance]]: Get Entity details
        Core -> Connector [[core-Entity/#tag/Entity-Management-API/operation/getEntityInstance]]: Get Entity details
        Connector --> Core: Entity details
        Core -> Client: Return Entity details
    @enduml
```

### Update `Entity`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to update an `Entity`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-Entity/#tag/Entity-Management-API/operation/updateEntityInstance]]: Update Entity Instance
        note over Client,Core: Update Existing Entity with Attributes
        Core -> Connector [[core-Entity/#tag/Entity-Management-API/operation/validateLocationAttributes]]: Validate Attributes
        note over Core,Connector: Validation of Attributes
        Connector --> Core: Result of attribute validation
        |||
        Core -> Connector [[connector-entity-provider/#tag/Entity-Management-API/operation/updateEntityInstance]]: Update Entity
        note over Core,Connector: Entity addition
        Connector -> Connector: Check Connection to the Entity
        Connector -> Connector: Update Entity details and attributes
        Connector --> Core: Entity Details
        Core -> Core: Update Entity Reference
        Core --> Client: Return Entity details
    @enduml
```


### Remove `Entity`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to delete an `Entity`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-Entity/#tag/Entity-Management-API/operation/removeEntityInstance]]: Remove Entity Instance
        note over Client,Core: Remove an Entity
        Core -> Core: Check for dependent objects
        Core -> Connector [[core-Entity/#tag/Entity-Management-API/operation/removeEntityInstance]]: Remove Entity Instance
        note over Core,Connector: Remove Entity
        Connector --> Core: Entity Instance removed
        Connector -> Connector: Remove Entity Instance reference
        Core --> Client: Entity Instance removed
    @enduml
```

## Location
Sections below represents the list of processes involved in managing the locations on an `Entity`.

### Create `Location`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to create a `Location`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core: List Entities
        note over Client,Core: List Available Entities
        Core --> Client: List Entities
        |||
        Client -> Core [[core-location/#tag/Location-Management-API/operation/addLocation]]: Add Location
        note over Client,Core: Add New Location with Attributes
        Core->Core: Check existence of Connector, Entity and Location
        Core -> Connector [[connector-entity-provider/#tag/Entity-Management-API/operation/validateLocationAttributes]]: Validate Attributes
        note over Core,Connector: Validation of Attributes
        Connector --> Core: Result of attribute validation
        |||
        Core -> Core: Create Location
        note over Core: Location addition with Attributes
        |||
        Core --> Client: Location UUID
    @enduml
```

### `Location` Details

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to remove a `Location`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-location/#tag/Location-Management-API/operation/getLocation]]: Get Location Details
        note over Client,Core: Location Details
        Core --> Client: Location details
    @enduml
```

### Update `Location`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to update a `Location`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-location/#tag/Location-Management-API/operation/editLocation]]: Edit Location
        note over Client,Core: Location with Attributes
        Core -> Connector [[connector-entity-provider/#tag/Entity-Management-API/operation/validateLocationAttributes]]: Validate Attributes
        note over Core,Connector: Validation of Attributes
        Connector --> Core: Result of attribute validation
        |||
        Core -> Core: Update Location
        note over Core: Update addition with Attributes
        |||
        Core --> Client: Location details
    @enduml
```

### Remove `Location`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to remove a `Location`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-location/#tag/Location-Management-API/operation/editLocation]]: Edit Location
        note over Client,Core: Location with Attributes
        Core -> Connector [[connector-entity-provider/#tag/Entity-Management-API/operation/validateLocationAttributes]]: Validate Attributes
        note over Core,Connector: Validation of Attributes
        Connector --> Core: Result of attribute validation
        |||
        Core -> Core: Update Location
        note over Core: Update addition with Attributes
        |||
        Core --> Client: Location details
    @enduml
```

### Change `Location` State

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to enable/disable a `Location`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        alt enable/disable
            Client -> Core [[core-location/#tag/Location-Management-API/operation/enableLocation]]: Enable
            note over Client,Core: Enable Location
            Client -> Core [[core-location/#tag/Location-Management-API/operation/disableLocation]]: Disable
            note over Client,Core: Disable Location
            end
        Core --> Client: Location State Changed
    @enduml
```

### Issue `Certificate` in `Location`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to issue a certificate in the `Location`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-location/#tag/Location-Management-API/operation/issueCertificate]]: Issue Certificate
        note over Client,Core: Issue Certificate with Attributes
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/validateGenerateCsrAttributes]]: Validate CSR Attributes
        note over Core,Connector: Validation of CSR Attributes
        Connector --> Core: Result of CSR Attribute validation
        |||
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/generateCsrLocation]]: Generate CSR
        note over Core,Connector: CSR Generation
        Connector --> Core: CSR Data
        |||
        Core -> Authority [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/issueCertificate]]: Issue Certificate
        note over Core,Authority: Issue New Certificate
        Authority --> Core: Base64 Certificate
        |||
        Core -> Core: Store Certificate
        |||
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/validatePushCertificateAttributes]]: Validate Push Attributes
        note over Core,Connector: Validation of Push Attributes
        Connector --> Core: Result of Push Attribute validation
        |||
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/pushCertificateToLocation]]: Push Certificate
        note over Core,Connector: Push Certificate to the Entity
        Connector --> Core: Certificate Pushed
        Core --> Client: Certificate Issued
    @enduml
```


### Renew `Certificate` in `Location`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to renew a certificate in the `Location`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-location/#tag/Location-Management-API/operation/renewCertificateInLocation]]: Renew Certificate
        note over Client,Core: Renew Certificate
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/removeCertificateFromLocation]]: Remove Certificate
        note over Core,Connector: Remove Certificate in Location
        Connector --> Core: Result of Certificate deletion
        |||
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/validateGenerateCsrAttributes]]: Validate CSR Attributes
        note over Core,Connector: Validation of CSR Attributes
        Connector --> Core: Result of CSR Attribute validation
        |||
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/generateCsrLocation]]: Generate CSR
        note over Core,Connector: CSR Generation
        Connector --> Core: CSR Data
        |||
        Core -> Authority [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/renewCertificate]]: Renew Certificate
        note over Core,Authority: Renew Certificate
        Authority --> Core: Base64 Certificate
        |||
        Core -> Core: Store Certificate
        |||
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/validatePushCertificateAttributes]]: Validate Push Attributes
        note over Core,Connector: Validation of Push Attributes
        Connector --> Core: Result of Push Attribute validation
        |||
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/pushCertificateToLocation]]: Push Certificate
        note over Core,Connector: Push Certificate to the Entity
        Connector --> Core: Certificate Pushed
        Core --> Client: Certificate Renewed
    @enduml
```


### Push `Certificate` to `Location`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to push a certificate to the `Location`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-location/#tag/Location-Management-API/operation/pushCertificate]]: Push Certificate
        note over Client,Core: Push Certificate with Attributes
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/validatePushCertificateAttributes]]: Validate Push Attributes
        note over Core,Connector: Validation of Push Attributes
        Connector --> Core: Result of Push Attribute validation
        |||
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/pushCertificateToLocation]]: Push Certificate
        note over Core,Connector: Push Certificate to the Entity
        Connector --> Core: Certificate Pushed
        Core --> Client: Certificate Pushed to Location
    @enduml
```


### Delete `Certificate` from `Location`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to revoke and delete a certificate from the `Location`.

```plantuml
    @startuml
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-location/#tag/Location-Management-API/operation/removeCertificate]]: Delete Certificate
        note over Client,Core: Delete Certificate
        Core -> Connector [[connector-entity-provider/#tag/Location-Operations-API/operation/removeCertificateFromLocation]]: Remove Certificate
        note over Core,Connector: Remove Certificate in Location
        Connector --> Core: Result of Certificate deletion
        Core --> Client: Certificate deleted
    @enduml
```

## Specification and example

`Entity Providers` implement the following `Function Groups`:

- [Entity Interface](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/entity/EntityController.java)
- [Location Interface](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/entity/LocationController.java)
- [Health Interface](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/HealthController.java)
- [Info](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/InfoController.java)
- [Attributes](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/AttributesController.java)

:::info
API specification can be found in the [API Specification](https://docs.czertainly.com/api/connector-entity-provider/)
