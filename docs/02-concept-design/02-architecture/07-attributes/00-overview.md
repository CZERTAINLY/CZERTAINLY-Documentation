# Overview

Although the CZERTAINLY platform is technology independent, each technology have its own specifics that the users should be able to use properly. Due to the dynamic nature of CZERTAINLY, required input data should be represented generally, in concise and accurate structure.
CZERTAINLY uses `Attribute` to require input and/or store import information identified by attribute name, type and content type.

From the standpoint of attribute definition source, we can split attributes to two separate groups.

### Connector attributes

Connector attributes, as name tells, are defined in connectors and are used to require input from user for some operation, provide additional non-mandatory data or display information to the user.
There are 4 types of connector attributes:
- `Data` - their content represent some input parameter
- `Info` - their content is used to display some additional formatted information to the user (e.g. hint, tip, guide, etc.)
- `Meta` - additional non-mandatory  structured data that can provide additional information. Connector can provide metadata as part of the operation result.
- `Group` - logical grouping of `Data` and `Info` attributes, that can be requested conditionally based on previous user input.

### Custom attributes

Custom attributes are defined and managed by the users of CZERTAINLY platform. It allows user to add custom information to individual objects that are part of platform.

This way, user can individually categorize, mark objects or create hierarchy and relationships between objects.

:::info
For more information about the concept behind the `Connector`, `Attributes`, `Callbacks`, etc, see the [CZERTAINLY platform overview](../../../concept-design/overview).
:::