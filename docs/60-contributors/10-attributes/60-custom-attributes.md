# Custom Attributes

`Custom Attributes` are user defined `attributes` that are created and maintained by the users of the platform. `Custom `Attributes` are associated with resources like `Ra Profile`, `Authority` etc. that accepts additional information when creating them. These are then stored in the core and retrieved when requested.

:::info
`Custom Attributes` are not communicated to the connectors, they are only used for the information purposes in the `Core`
:::


You can find specification of the `Custom Attribute` in the [CZERTAINLY Interfaces repository](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/CustomAttribute.java).

## `Custom Attribute` structure

In addition to the common `Attribute` properties defined [here](overview#attributedefinition), the `Custom Attribute` has the following additional properties:

| `Attribute` property | Short description                                                                                                                                                                                                                                                                                                       | Required                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `contentType`        | Content Type of the `Custom Attribute`, various supported data types based on the [AttributeType](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/AttributeContentType.java). For example, `STRING`, `JSON`, `INTEGER`, `DATE`, etc. | <span class="badge badge--success">Yes</span> |
| `properties`         | List of properties for the attribute. These properties describe the behavior of attribute in the User Interface. For more information [see](#custom-attribute-properties)                                                                                                                                                 | <span class="badge badge--success">Yes</span> |

## `Custom Attribute` Properties

Following table includes the list of properties that can be used to define the behavior of the `Custom Attribute`. For more information, see [`Custom Attribute` Properties](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/properties/CustomAttributeProperties.java)

| `Attribute` property | Short description                                                                                                                                                                                      | Required                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| `label`              | Friendly name of the `Attribute` that can be used for human reading.                                                                                                                                   | <span class="badge badge--success">Yes</span> |
| `required`           | Boolean determining if the `Attribute` is required. If true, the `Attribute` must provide its value in the `content` property.                                                                         | <span class="badge badge--success">Yes</span> |
| `readOnly`           | Boolean determining if the `Attribute` is read only and its `content` value cannot be changed.                                                                                                         | <span class="badge badge--success">Yes</span> |
| `visible`            | Boolean determining if the `Attribute` is visible and can be displayed, otherwise it should be hidden, used as a helper.                                                                               | <span class="badge badge--success">Yes</span> |
| `list`               | Boolean determining if the `Attribute` contains list of values in the `content`.                                                                                                                       | <span class="badge badge--success">Yes</span> |
| `multiSelect`        | Boolean determining if the `Attribute` can have multiple values in the `content` property which is represented as a list.                                                                              | <span class="badge badge--success">Yes</span> |
| `group`              | Group of the `Attribute`, used for the logical grouping of multiple `Attributes`. The grouping is used for better orientation if many `Attributes` are used, it does not have impact on the `content`. | <span class="badge badge--danger">No</span>   |

### Sample `Custom Attribute`

The following is a sample `Custom Attribute` structure:

```json
{
  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",
  "name": "purpose",
  "label": "Purpose",
  "type": "custom",
  "contentType": "string",
  "content": [
    {
      "reference": "",
      "data": "Created to test the custom attribute"
    }
  ],
  "properties": {
    "required": true,
    "readOnly": false,
    "visible": true,
    "list": true,
    "multiSelect": true,
    "group": "Certificate Configuration"
  },
  "description": "Sample description for the custom attribute"
}
```