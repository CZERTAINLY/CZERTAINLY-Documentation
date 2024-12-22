---
sidebar_position: 1
---

# Overview

Each `Connector` provides some specific functionality in the platform defined by its [Function Groups](../../concept-design/architecture/connector.md#function-group).
There are the following interfaces that are mandatory to be implemented for each `Connector` independently of the `Function Group`:

| Name                                  | Short description                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------|
| [Info](info-interface.md)             | Information about the `Connector`, its `Function Groups`, supported `Kinds`, list of endpoints |
| [Health](health-interface.md)         | Status information about the `Connector` and its services                                      |
| [Attributes](attributes-interface.md) | `Attributes` definition of the `Connector` specific technology and its validation              |
