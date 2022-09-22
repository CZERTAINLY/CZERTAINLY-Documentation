# Entity Provider

:::info Using Entity Provider
Entity Provider helps to integrate any technology (open and proprietary) that is not able, not capable, or you do not want to, use standard interface and protocols for management and automation of the certificate and cryptographic keys lifecycle.
:::

## Overview

The `Certificate` can be stored and managed in various locations in the infrastructure. Entity Provide gives you the capability of management entities that are the end user of `Certificates` and if supported, manage their location with associated `Certificate` and cryptographic key.

Entity Provider can implement literally any type of the certificate store.

## How it works

[//]: # (This is not a specific description of keystore entity provide, it should be general)
Keystore Entity Provider `Connector` provides access to the keystore locations on the remote servers. Multiple locations on one server are supported. The Connector can create multiple Entities and automate the certificate lifecycle on associated locations.

## Provider objects

[`Entity`](../../concept-design/core-components/entity) and [Location](../../concept-design/core-components/location) objects are managed in the platform through the Entity Provider implementation.
`Entity` represents end user of the `Certificate` and it can have access to multiple `Locations`.

[//]: # (This should be described in the components)
[//]: # (Description is brief, it should be extended with all features that locations and entities provide, for example there is no mention about the multiple entries or key management support, etc.)

| Object | Purpose |
| -------- | --------- |
| `Entity` | The `Entity` that is managed by the `Entity Provider`. Entities are comprised of multiple locations|
| `Location` | The `location` of the `Entity` that is managed by the `Entity Provider`. Location is the object that contains the details of the certificates and information about where they are currently deployed. A Single location can have more than one certificates |

## Processes related to `Entity`

The following processes are associated with the Entity Provider and management of the `Entity` objects.

### Create `Entity`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to create an `Entity`.

```plantuml
    @startuml
    autonumber
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
    autonumber
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
    autonumber
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
    autonumber
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

## Processes related to `Location`

The following processes are associated with the Entity Provider and management of the `Location` objects.

### Create `Location`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to create a `Location`.

```plantuml
    @startuml
    autonumber
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
    autonumber
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
    autonumber
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
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-location/#tag/Location-Management-API/operation/removeLocation]]: Remove Location
        note over Client,Core: Location with Attributes
        Core -> Core: Check and remove Location
        Core --> Client: Location details
    @enduml
```

### Change `Location` State

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to enable/disable a `Location`.

```plantuml
    @startuml
    autonumber
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
    autonumber
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
    autonumber
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
    autonumber
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
    autonumber
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

The Entity Provider implements [Common Interfaces](common-interfaces/overview) and the following additional interfaces:
- [Entity Management](/api/connector-entity-provider/#tag/Entity-Management-API)
- [Location Operations](/api/connector-entity-provider/#tag/Location-Operations-API)

The OpenAPI specification of the Entity Provider can be found here: [Connector API - Entity Provider](/api/connector-entity-provider/).
