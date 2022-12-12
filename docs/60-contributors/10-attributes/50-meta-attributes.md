# Metadata Attributes

`Metadata Attributes` contains the information provided by the `Connector` about the objects. They are created and managed by the `Connectors` and are sent to the core for storage and display purpose for the users. Unlike [`Custom Attributes`](60-custom-attributes) `Metadata Attributes` are not manageable by the users. Metadata in the platform uses `Metadata Attributes` to represent the data. There are two types:

- Global Metadata
- Connector Metadata

:::info
When the `visible` property of the metadata is set as true, then it will be sent as part of the response to the users.
:::

## Global Metadata

`Global Metadata` are defined by the administrators like the `Custom Attributes`. But they are not manageable by the users. Defining the global metadata means that any connector implementing this metadata should follow the same definition. For example, if the administrator defines a `Metadata Attribute` with the name `discoverySource` and the type `string`, then all the connectors should follow the same definition. By setting the property `global` as `true` core identifies the `attribute` as global and stores them for later use.

:::info

- If a `Metadata Attribute` is defined as global in the connector and if it is not created in the `Core` then it will not be stored.
- Global Metadata cannot be managed by the users
- If a Metadata defined as global, the UUID of the `attribute` defined by the connector may be overridden by the `Core` generated UUID.
:::

## Connector Metadata

Additional `Metadata Attributes` that are not defined as global metadata are considered as `Connector` metadata. These are stored by the `Core` when received and are sent back to the connector when requested. 


You can find specification of the `Metadata Attribute` in the [CZERTAINLY Interfaces repository](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/MetadataAttribute.java).

## `Metadata Attribute` structure

In addition to the common `Attribute` properties defined [here](overview#attributedefinition), the `Metadata Attribute` has the following additional properties:

| `Attribute` property | Short description                                                                                                                                                                                                                                                                                                       | Required                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `contentType`        | Content Type of the `Info Attribute`, various supported data types based on the [AttributeType](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/AttributeContentType.java). For example, `STRING`, `JSON`, `INTEGER`, `DATE`, etc. | <span class="badge badge--success">Yes</span> |
| `properties`         | List of properties for the attribute. These properties describe the behavior of attribute in the User Interface. For more information [see](#info-attribute-properties)                                                                                                                                                 | <span class="badge badge--success">Yes</span> |

## `Metadata Attribute` Properties

Following table includes the list of properties that can be used to define the behavior of the `Meta Attribute`. For more information, see [`Meta Attribute` Properties](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/properties/InfoAttributeProperties.java)

| `Attribute` property | Short description                                                                                                                                                                                      | Required                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| `label`              | Friendly name of the `Attribute` that can be used for human reading.                                                                                                                                   | <span class="badge badge--success">Yes</span> |
| `visible`            | Boolean determining if the `Attribute` is visible and can be displayed, otherwise it should be hidden, used as a helper.                                                                               | <span class="badge badge--success">Yes</span> |
| `group`              | Group of the `Attribute`, used for the logical grouping of multiple `Attributes`. The grouping is used for better orientation if many `Attributes` are used, it does not have impact on the `content`. | <span class="badge badge--danger">No</span>   |
| `global`             | Global property for the `Attribute`. If it is set as true, then `Core` recognizes it as a `Global Metadata` else this will be treated as `Connector Metadata`                                          | <span class="badge badge--danger">No</span>   |

### Sample `Metadata Attribute`

The following is a sample `Info Attribute` structure:

```json
{
  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",
  "name": "discoverySource",
  "label": "Discovery Source",
  "type": "meta",
  "contentType": "string",
  "content": [
    {
      "reference": "Internet",
      "data": "internet.com"
    }
  ],
  "properties": {
    "readOnly": false,
    "visible": true,
    "global": true,
    "group": "Discovery"
  },
  
  "description": "Source from where the certificate is discovered",
}
```