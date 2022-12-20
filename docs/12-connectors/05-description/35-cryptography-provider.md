# Cryptography Provider

## Overview

Cryptography Provider has capability of cryptographic token management and cryptographic key operations that is connected with specific technology like hardware security module, security vault, etc. Cryptographic keys that are created and used in the context of Cryptography Provider are managed by the implementation of Connector and can be used in the platform to execute cryptographic operation with the key.

:::note Entity Provider key management
The Entity Provider Connectors are also capable of key management operations that allow to create private key and sign CSR. These capabilities are available only for the entities managed by the Entity Provider Connector. The Crypto Provider brings key management capabilities for the entire platform.
:::

Using Cryptography Provider, the platform can generate new key pairs, sign the certification signing request, decrypt incoming requests to issue certificate, and many more. 

## How it works

Cryptography Provider implements specific technology capable of managing and using cryptographic keys. Independently of the connected technology, it provides interfaces to manage cryptographic tokens and cryptographic keys in a consistent way. The token is considered to be logical unit maintaining its cryptographic keys and there can be as many tokens as required with proper authentication or activation data.

When there is a need to use cryptographic key, platform can request operation on top of some specific key and the operation will be executed in the technology through the Cryptography Provider implementation. Supported operations are:
- Create / Destroy Key
- Encrypt / Decrypt
- Sign / Verify
- Generate random data

## Provider objects

### Token

Token represents the logical separation of cryptographic keys. One token can contain multiple cryptographic keys. Each Cryptography Provider connector can have multiple tokens. The token is identified by its name and it is unique within the Cryptography Provider connector. Tokens can be managed in the platform.

`Token` can have the following status:

| Status         | Description                                                                                                 |
|----------------|-------------------------------------------------------------------------------------------------------------|
| `ACTIVE`       | Token is active and can be used for key management cryptographic operations                                 |
| `INACTIVE`     | Token is inactive and should be activated before any key management or cryptographic operations is executed |
| `WARNING`      | Token seems to be connected and activated, however, something might be wrong, see more details              |
| `CONNECTED`    | Token is connected but cannot be activated                                                                  |
| `DISCONNECTED` | Token is disconnected from the technology and cannot be used                                                |
| `UNKNONW`      | Unknown state, see logs or details of the Connector                                                         |

### Token Profile

Token Profile represents key management and cryptographic operations service that can be consumed by clients and users. Each Token Profile can be associated with only one Token, but multiple Token Profiles can be assigned with the same Token. Token Profile consists of additional management, compliance, and security rules that apply for the service, like key management interface (PKCS#11, KMIP), or key usage policy (signing, encryption, etc.). Token Profile is identified by its name and it is unique within the platform.

### Inventory of Keys

Every Key that is created is stored in the inventory of cryptographic keys. Inventory of cryptographic keys is a list of all keys that are created in the platform. The inventory is used to track the keys and their usage. Attributes of the Keys are managed consistently in the platform and each Key is associated with the Token Profile that is used to manage it.

The following diagram shows the relationship between Token, Token Profile, and Keys in the inventory.

```plantuml
map "Cryptography Provider" as cp {
}

package "Tokens" {
    map "Token 1" as t1 {
    }
    map "Token 2" as t2 {
    }
    map "Token 3" as t3 {
    }
}


package "Token Profiles" as tps {
    map "Token Profile 1" as tp1 {
    }
    map "Token Profile 2" as tp2 {
    }
    map "Token Profile 3" as tp3 {
    }
    map "Token Profile 4" as tp4 {
    }
}

package "Inventory of keys" {
    map "Key 1" as k1 {
    }
    map "Key 2" as k2 {
    }
    map "Key 3" as k3 {
    }
    map "Key 4" as k4 {
    }
}

cp --> t1
cp --> t2
cp --> t3
tp1 <-> t1
tp2 <--> t1
tp3 <--> t3
tp4 <--> t2
k1 <--> tp1
k2 <--> tp1
k3 <--> tp2
k4 <--> tp3
```

## Processes

The following processes are associated with the Cryptography Provider and management of the `Token` and `Key` objects.

## `Token` instance management

### Create `Token` instance

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-cryptography/#tag/Token-Management-API/operation/createTokenInstance]]: Add Token instance
        Core->Core: Check existence of Connector and Token
        Core -> Connector : Validate Attributes
        Connector --> Core: Result of Attribute validation
        Core -> Connector [[connector-cryptography-provider/#tag/Token-Management-API/operation/createTokenInstance]]: Create Token instance
        Connector -> Connector: Validation of connection to cryptographic technology
        note right of Connector: Connection to the device / module with the Attributes is validated
        Connector --> Core: Return Token instance response
        Core -> Core : Store Token instance reference
        Core --> Client: Return Token instance UUID
    @enduml
```

### Get `Token` instance details

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-cryptography/#tag/Token-Management-API/operation/getTokenInstance]]: Details of Token instance
        Core -> Connector [[connector-cryptography-provider/#tag/Token-Management-API/operation/getTokenInstance]]: Get Token instance
        Connector --> Core: Return Token instance details
        note right of Core: Details of the Token instance is processed and combined with Token instance reference from Core
        Core -> Client: Return Token instance details
    @enduml
```

### Update `Token` instance

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-cryptography/#tag/Token-Management-API/operation/updateTokenInstance]]: Update Token instance
        Core -> Connector : Validate Attributes
        Connector --> Core: Result of Attribute validation
        Core -> Connector [[connector-cryptography-provider/#tag/Token-Management-API/operation/updateTokenInstance]]: Update Token instance
        Connector -> Connector: Validation of connection to cryptographic technology
        note right of Connector: Connection to the device / module with the Attributes is validated
        Connector --> Core: Return Token instance response
        Core -> Core : Update Token instance reference in the database
        Core --> Client: Return Token instance UUID
    @enduml
```

### Remove `Token` instance

When the `Token` is removed, it does not necessarily mean that it was removed from the Connector and all Keys were destroyed.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-cryptography/#tag/Token-Management-API/operation/removeTokenInstance]]: Remove Token instance
        Core -> Core : Check dependencies
        Core -> Connector [[connector-cryptography-provider/#tag/Token-Management-API/operation/removeTokenInstance]]: Remove Token instance
        Connector --> Core: Return Token instance removal result
        Core -> Core : Delete Token instance reference data
        Core --> Client: Return removal result
    @enduml
```

### Get `Token` instance status

Status of the `Token` can be regularly checked by the platform. See the [list of possible states](#token) of the `Token`.

### Activate `Token` instance

`Token` can be activated when is in the `CONNECTED` or `INACTIVE` state. Activation of the `Token` is required before any key management and cryptographic operations can be performed.

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-cryptography/#tag/Token-Management-API/operation/activateTokenInstance]]: Activate Token instance
        Core->Core: Check existence of the Token instance
        Core -> Connector : Validate activation Attributes
        Connector --> Core: Result of activation Attributes validation
        Core -> Connector [[connector-cryptography-provider/#tag/Token-Management-API/operation/activateTokenInstance]]: Activate Token instance
        Connector --> Core: Return Token instance activation result
        Core -> Core : Update Token instance status
        Core --> Client: Return activation result
    @enduml
```

### Deactivate `Token` instance

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-cryptography/#tag/Token-Management-API/operation/deactivateTokenInstance]]: Deactivate Token instance
        Core->Core: Check existence of the Token instance
        Core -> Connector : Validate deactivation Attributes
        Connector --> Core: Result of deactivation Attributes validation
        Core -> Connector [[connector-cryptography-provider/#tag/Token-Management-API/operation/deactivateTokenInstance]]: Deactivate Token instance
        Connector --> Core: Return Token instance deactivation result
        Core -> Core : Update Token instance status
        Core --> Client: Return deactivation result
    @enduml
```


## `Certificate` Management
Sections below represents the list of processes involved in managing the certificates.

### Issue `Certificate`

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations-API/operation/issueCertificate]]: Issue Certificate
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/validateIssueCertificateAttributes]]: Validate Attributes
        Connector --> Core: Result of Attribute validation
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/issueCertificate]]: Issue Certificate
        Connector -> CA: Issue Certificate
        CA --> Connector: Return Certificate
        Connector --> Core: Return Certificate response
        Core -> Core : Perform Certificate validation
        Core -> Core : Store Certificate
        Core --> Client: Return Certificate UUID
    @enduml
```

### Renew `Certificate`

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations-API/operation/renewCertificate]]: Renew Certificate
        Core -> Core: Get Attributes from parent Certificate
        note right Core: Attributes for renewal are taken from parent Certificate
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/renewCertificate]]: Renew Certificate
        Connector -> CA: Issue Certificate
        CA --> Connector: Return Certificate
        Connector --> Core: Return Certificate response
        Core -> Core : Perform Certificate validation
        Core -> Core : Store Certificate to the database
        Core --> Client: Return Certificate UUID
    @enduml
```

### Revoke `Certificate`

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations-API/operation/revokeCertificate]]: Revoke Certificate
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/validateRevokeCertificateAttributes]]: Validate Attributes
        Connector --> Core: Result of Attribute validation
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management-API/operation/revokeCertificate]]: Revoke Certificate
        Connector -> CA: Revoke Certificate
        CA --> Connector: Return Certificate revocation status
        Connector --> Core: Return Certificate revocation response
        Core -> Core : Set Certificate status as revoked
        Core --> Client: Return revocation status
    @enduml
```

## Specification and example

The Authority Provider v2 implements [Common Interfaces](common-interfaces/overview) and the following additional interfaces:
- [Authority Management](/api/connector-authority-provider-v2/#tag/Authority-Management-API)
- [Certificate Management](/api/connector-authority-provider-v2/#tag/Certificate-Management-API)

The OpenAPI specification of the Authority Provider v2 can be found here: [Connector API - Authority Provider v2](/api/connector-authority-provider-v2/).

