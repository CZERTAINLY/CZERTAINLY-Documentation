# Location

A `Location` describes where the `Certificate` is stored on an [`Entity`](09-entity.md). A `Location` can be a Key Store, SSL Profile, File System Path, Firewall Rule, etc.

`Location` exists on top of an [`Entity`](09-entity.md) and each `Entity` can have multiple `Locations`. Each `Location` can have multiple `Certificates` associated with it based on the implementation of the `Entity Provider` `Function Group` of the `Connector`.

## Characteristics

Characteristics of `Location` are:

- `Location` is associated with an `Entity`.
- An `Entity` can hold multiple `Locations`.
- A `Location` can have multiple `Certificates` in it. This is determined by the `Connector` implementation. An `Entity Provider` supporting multiple certificates in the location will set `multipleEntries` to `true` in the [`Location` detail response](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/connector/entity/LocationDetailResponseDto.java#:~:text=private%20boolean-,multipleEntries,-%3B)
- A `Location` can provide support for Key Management. If an `Entity Provider` supports Key Management, it will set `supportKeyManagement` to `true` in the [`Location` detail response](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/connector/entity/LocationDetailResponseDto.java#:~:text=private%20boolean-,supportKeyManagement,-%3B)
- Operations on the `Location` includes
    - Issue Certificate
    - Push Certificate
    - Renew Certificate
    - Remove Certificate
