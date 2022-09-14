# Credential Provider

## Overview

Typically, when we need to access some service, we need to be properly authenticated and authorized. For this purpose we need to provide information to the service that can be used for this purpose. This is the purpose of the Credential Provider that defines the credential and its properties that are needed to securely access required service.

## How it works

The Credential Provider defines specific configuration of the credentials that can be used across the platform for authentication and authorization. 

## Provider objects

The Credential Provider is managing `Credential` objects.
For more information, refer to [`Credential Component`](../../concept-design/core-components/credential).

## Processes

The following processes are associated with the Credential Provider and management of the `Credential` objects.

### Add `Credential`

```mermaid
sequenceDiagram
    autonumber
    
    Client->>Core: POST /v1/credentials
    Note over Client,Core: Add Credential with Attributes
    Core->>Core: Check existence of Connector and Credential
    Core->>Connector: POST /v1/{functionalGroup}/{kind}/attributes/validate
    Note over Core,Connector: Validate Attributes
    Connector-->>Core: Return validation result
    Core->>Core: Store Credential
    Core-->>Client: Return Credential UUID
```

### Get `Credential` details

```mermaid
sequenceDiagram
    autonumber
    
    Client->>Core: GET /v1/credentials/{uuid}
    Note over Client,Core: Request Credential details
    Core->>Core: Process secrets
    Core-->>Client: Return Credential details
```

### Update `Credential`

```mermaid
sequenceDiagram
    autonumber
    
    Client->>Core: POST /v1/credentials/{uuid}
    Note over Client,Core: Update Credential
    Core->>Core: Check existence of Connector and Credential
    Core->>Connector: POST /v1/{functionalGroup}/{kind}/attributes/validate
    Note over Core,Connector: Validate Attributes
    Connector-->>Core: Return validation result
    Core->>Core: Update Credential
    Core-->>Client: Return updated Credential
```

### Remove `Credential`

```mermaid
sequenceDiagram
    autonumber
    
    Client->>Core: DELETE /v1/credentials/{uuid}
    Note over Client,Core: Remvoe Credential
    Core->>Core: Check and remove Credential
    Core-->>Client: Return result
```

### Change state of the `Credential`

```mermaid
sequenceDiagram
    autonumber
    
    alt enable/disable
        Client->>Core: PUT /v1/credentials/{uuid}/enable
        Note over Client,Core: Enable Credential
        Client->>Core: PUT /v1/credentials/{uuid}/disable
        Note over Client,Core: Disable Credential
    end
    Core->>Core: Change Credential state
    Core-->>Client: Return result
```

## Specification and example

The Credential Provider implements [Common Interfaces](common-interfaces/overview).
There are no additional interfaces needed for the Credential Provider.

The OpenAPI specification of the Credential Provider can be found here: [Connector API - Credential Provider](/api/connector-credential-provider/).