# Overview

Each `Connector` provides some specific functionality in the platform defined by its [Function Groups](../../../concept-design/architecture/connector#function-group).
There are the following interfaces that are mandatory to be implemented for each `Connector` independently of the `Function Group`:

| Name                               | Short description                                                                              |
|------------------------------------|------------------------------------------------------------------------------------------------|
| [Info](info-interface)             | Information about the `Connector`, its `Function Groups`, supported `Kinds`, list of endpoints |
| [Health](health-interface)         | Status information about the `Connector` and its services                                      |
| [Attributes](attributes-interface) | `Attributes` definition of the `Connector` specific technology and its validation              |