# Custom Attributes

## What is `Custom Attribute`?

`Custom Attributes` are the collection of user defined attributes that can be attached to any object in the system and are used to extend the functionality of the system and provide additional information about the object. These attributes are not part of the `Connectors` and are not sent to the `Connector` when the object is created or updated.

`Custom Attributes` can be associated with the following objects:

- `Certificates`
- `Keys`
- `Discoveries`
- `Connectors`
- `Users`
- `Roles`
- `RA Profiles`
- `Token Profiles`
- `Compliance Profiles`
- `ACME Profiles`
- `Credentials`
- `Authorities`
- `Tokens`
- `Groups`
- `Entities`
- `Locations`


### Properties

`Custom Attributes` have the following properties:

| Property       | Description                                                                                                       | Required                                           | 
|----------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| `Name`         | Name of the `Custom Attribute`                                                                                    | ![](https://img.shields.io/badge/-YES-success.svg) |
| `Description`  | Description of the `Custom Attribute`                                                                             | ![](https://img.shields.io/badge/-NO-red.svg) |
| `Content Type` | Content type of the `Custom Attribute`                                                                            | ![](https://img.shields.io/badge/-YES-success.svg) |
| `Content`      | Content of the `Custom Attribute`. It is used when the user is required to select an item from the provided value. | ![](https://img.shields.io/badge/-NO-red.svg) | 
| `Label`        | Friendly name to be displayed in the UI                                                                           | ![](https://img.shields.io/badge/-YES-success.svg) | 
| `Required`     | If `true`, the `Custom Attribute` will be required to be filled in the UI                                         | ![NO](https://img.shields.io/badge/-YES-success.svg)    | 
| `Visible`      | If `true`, the `Custom Attribute` will be visible in the UI                                                       | ![NO](https://img.shields.io/badge/-YES-success.svg)    | 
| `Read Only`    | If `true`, the `Custom Attribute` will be read only and the value cannot be modified                              | ![NO](https://img.shields.io/badge/-YES-success.svg)    | 
| `List`         | If `true`, the `Custom Attribute` will be a list of values                                                        | ![NO](https://img.shields.io/badge/-YES-success.svg)    | 
| `Multiselect`  | If `true`, the `Custom Attribute` will be a multiselect list of values                                            | ![NO](https://img.shields.io/badge/-YES-success.svg)    | 
| `Group`        | Group of attributes to which attribute belongs to                                                                 | ![NO](https://img.shields.io/badge/-NO-red.svg)    |

- `Resources` - List of object types to which the `Custom Attribute` can be associated.
  
In addition to the above defined properties, custom attributes contain set of resources that they can be applied to.

### Characteristics

Characteristics of `Custom Attributes` are:

- `Custom Attributes` are created and maintained by the user.
- `Custom Attributes` are `Core` defined attributes and are not sent to the connector.
- Single `Custom Attribute` can be associated with multiple object types.
- `Property` of `Custom Attribute` can be updated and maintained by the user.
- A `Custom Attribute` must be in `enabled` state to be used.


:::info
To know more about `attributes`, see [Attributes](../../../contributors/attributes/overview).
:::