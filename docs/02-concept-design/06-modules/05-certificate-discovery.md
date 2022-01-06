# Certificate Discovery

One of the most important tasks in managing the PKI Infrastructure is to know where the certificates are deployed and what is their state. `Certificate Discovery` allows discovering the certificates in various sources.

The `Certificate Discovery` works with the help of the `Connector` that is implementing the `Discovery Provider` `Function Groups`.

:::info
The `Connector` implementing the `Discovery Provider` `Function Group` has its own `Attributes` for the inputs related to the discovery process.
:::

The logic of the `Certificate Discovery` is implemented by the `Core` and specific discovery process by the `Connector`.

## Discovery Process

The following steps explain the process of `Certificate Discovery`:

1. `Client` defines the `Connector` to initiate the `Certificate Discovery`
2. Get the list of `Attributes` for the selected `Connector` and `Kind`
3. Provide the proper values for the input `Attributes`
4. Initiate `Certificate Discovery`

Once the `Core` receives the discovery request, `Attributes` are forwarded to the `Connector`. The `Core` is checking the `Connector` for the status of the discovery process. when the discovery is completed, `Core` collects all `Certificates`.

## Operations

The `Certificate Discovery` allows you to perform the following operations:

| Operation | Description                                                                                                                                                                                                                                                                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create    | You can create a new discovery with any desired `Connector` that implements `Discovery Provider` `Function Group`.                                                                                                                                                                                                                                                                |
| List      | List of all discovery processes that has been initiated through the platform. The information includes the `Connector` and the `Kind`.                                                                                                                                                                                                           |
| Details   | Provides details about the `Certificate Discovery`. |

## Discovery Status

| Status | Description |
|--|--|
|In Progress| The process has not finished yet|
|Completed| The process has already finished|
|Failed| Some errors have occurred| 