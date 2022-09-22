# Authority Provider v2

## Overview

Authority Provider v2 interface is used to manage operations with certificates issued by certification authority. The Authority Provider v2 acts as an interface between the `Core` and the certification authority providing the following management functions:
1. Issue
2. Renew
3. Revoke 

## How it works

Authority Provider v2 provides the ability to communicate with different types and technologies of certification authorities.

## Provider objects

[`Authority`](../../concept-design/core-components/authority) objects are managed in the platform through the Authority Provider v2 implementation.

## Processes

The following processes are associated with the Authority Provider v2 and management of the `Authority` objects.

## `Authority` Instance Management

### Create `Authority` Instance

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider for creating a new Authority instance.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-authority/#tag/Authority-Management-API/operation/createAuthorityInstance]]: Create Authority
        note over Client,Core: Create Authority with Attributes
        Core->Core: Check existence of Connector and Authority
        Core -> Connector : Validate Attributes
        note over Core,Connector: Validation of Attributes
        Connector --> Core: Result of Attribute validation
        |||
        Core -> Connector [[connector-authority-provider-v2/#tag/Authority-Management-API/operation/createAuthorityInstance]]: Create Authority
        note over Core,Connector: Creation of Authority
        Connector -> Connector: Validation of connection to CA
        Connector --> Core: Return Authority Instance response
        |||
        Core -> Core : Store Authority Instance Reference in the database
        Core --> Client: Return Authority UUID
    @enduml
```

### Get `Authority` Instance Details

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to get the details of an Authority instance.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-authority/#tag/Authority-Management-API/operation/getAuthorityInstance]]: Get Authority details
        note over Client,Core: Get Authority details
        Core -> Connector [[connector-authority-provider-v2/#tag/Authority-Management-API/operation/getAuthorityInstance]]: Get Authority details
        Connector --> Core: Return Authority details
        Core -> Client: Return Authority details
    @enduml
```

### Update `Authority` Instance

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to update an Authority instance.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-authority/#tag/Authority-Management-API/operation/updateAuthorityInstance]]: Update Authority
        note over Client,Core: Update Authority with Attributes
        Core -> Connector : Validate Attributes
        note over Core,Connector: Validation of Attributes
        Connector --> Core: Result of Attribute validation
        |||
        Core -> Connector [[connector-authority-provider-v2/#tag/Authority-Management-API/operation/updateAuthorityInstance]]: Update Authority
        note over Core,Connector: Update of Authority
        Connector -> Connector: Validation of connection to CA and update
        Connector --> Core: Return Authority Instance response
        |||
        Core -> Core : Update Authority Instance Reference in the database
        Core --> Client: Return Authority UUID
    @enduml
```

### Delete `Authority` Instance

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to delete an Authority instance.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-authority/#tag/Authority-Management-API/operation/removeAuthorityInstance]]: Delete Authority
        note over Client,Core: Delete Authority
        Core -> Core : Check dependencies
        Core -> Connector [[connector-authority-provider-v2/#tag/Authority-Management-API/operation/removeAuthorityInstance]]: Delete Authority
        note over Core,Connector: Delete of Authority
        Connector --> Core: Return Authority Instance response
        |||
        Core -> Core : Delete Authority Instance Reference in the database
        Core --> Client: Return deletion status
    @enduml
```

## `Certificate` Management
Sections below represents the list of processes involved in managing the certificates.

### Issue `Certificate`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to issue a Certificate.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations-API/operation/issueCertificate]]: Issue Certificate
        note over Client,Core: Issue Certificate with Attributes
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/validateIssueCertificateAttributes]]: Validate Attributes
        note over Core,Connector: Validation of Attributes
        Connector --> Core: Result of Attribute validation
        |||
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/issueCertificate]]: Issue Certificate
        note over Core,Connector: Issue of Certificate
        Connector -> CA: Issue Certificate
        note over Connector,CA: Certificate Issuance
        CA --> Connector: Return Certificate
        Connector --> Core: Return Certificate response
        |||
        Core -> Core : Store Certificate to the database
        Core --> Client: Return Certificate UUID
    @enduml
```

### Renew `Certificate`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to renew a Certificate.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations-API/operation/renewCertificate]]: Renew Certificate
        note over Client,Core: Renew Certificate with Attributes
        Core -> Core: Get Attributes from parent Certificate
        |||
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/renewCertificate]]: Renew Certificate
        note over Core,Connector: Renew of Certificate
        Connector -> CA: Issue Certificate
        note over Connector,CA: Certificate Renewal
        CA --> Connector: Return Certificate
        Connector --> Core: Return Certificate response
        |||
        Core -> Core : Store Certificate to the database
        Core --> Client: Return Certificate UUID
    @enduml
```

### Revoke `Certificate`

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to revoke a Certificate.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations-API/operation/revokeCertificate]]: Revoke Certificate
        note over Client,Core: Revoke Certificate with Attributes and reason
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/validateRevokeCertificateAttributes]]: Validate Attributes
        note over Core,Connector: Validation of Attributes
        Connector --> Core: Result of Attribute validation
        |||
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/revokeCertificate]]: Revoke Certificate
        note over Core,Connector: Revoke of Certificate
        Connector -> CA: Revoke Certificate
        CA --> Connector: Return Certificate Revocation status
        note over Connector,CA: Certificate Revocation
        Connector --> Core: Return Certificate revocation response
        |||
        Core -> Core : Update Certificate status
        Core --> Client: Return revocation status
    @enduml
```

## Specification and example

The Authority Provider v2 implements [Common Interfaces](common-interfaces/overview) and the following additional interfaces:
- [Authority Management](/api/connector-authority-provider-v2/#tag/Authority-Management-API)
- [Certificate Management](/api/connector-authority-provider-v2/#tag/Certificate-Management-API)

The OpenAPI specification of the Authority Provider v2 can be found here: [Connector API - Authority Provider v2](/api/connector-authority-provider-v2/).

