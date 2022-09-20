# V2 Authority Provider

## Overview

Authority Providers are the implementations of the `Authority Provider` interface. The Authority Provider interface is used to manage the certificate authority. The Authority Provider acts as an interface between CZERTAINLY `Core` and the certificate authority providing the following functionalities:

1. Issue certificates
2. Revoke certificates
3. Renew certificates 

## How it works

Authority Provider `Connector` provides the ability to communicate with the certificate authorities. Based on the CA the `Connector` connects with, it communicates with the CA using the appropriate protocol and enables the certificate management.

## Provider objects

The `Authority Provider` is managing `Authority` objects.
For more information, refer to [`Authority`](../../concept-design/core-components/authority).

## Processes

This section of the document explains the list of processes involved in managing the certificates on the platform using the `Authority Providers`.

## `Authority` Instance Management

### Create `Authority` Instance

The below diagram shows the sequence of messages that are exchanged between the client, core, and provider for creating a new Authority instance.

```plantuml
    @startuml
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

`Authority Providers` implement the following `Function Groups`:

- [Authority Management Interface](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/AuthorityInstanceController.java)
- [V2 Certificate Management Interface](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/v2/CertificateController.java)
- [Health Interface](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/HealthController.java)
- [Info](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/InfoController.java)
- [Attributes](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/interfaces/connector/AttributesController.java)

:::info
API specification can be found in the [API Specification](https://docs.czertainly.com/api/connector-authority-provider-v2/)
