# Info Attributes

`Info Attributes` carry the additional or display information from the connector that gives additional perspective on for some of the `attributes`. These are used only for the display purposes and will not be sent back to the connectors. In the User Interface, they are simply readonly fields that are displayed to the user. 


You can find specification of the `Info Attribute` in the [CZERTAINLY Interfaces repository](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/InfoAttribute.java).

## `Info Attribute` structure

In addition to the common `Attribute` properties defined [here](10-overview#attributedefinition), the `Info Attribute` has the following additional properties:

| `Attribute` property | Short description                                                                                                                                                                                                                                                                                                       | Required                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `contentType`        | Content Type of the `Info Attribute`, various supported data types based on the [AttributeType](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/AttributeContentType.java). For example, `STRING`, `JSON`, `INTEGER`, `DATE`, etc. | <span class="badge badge--success">Yes</span> |
| `properties`         | List of properties for the attribute. These properties describe the behavior of attribute in the User Interface. For more information [see](#info-attribute-properties)                                                                                                                                                 | <span class="badge badge--success">Yes</span> |

## `Info Attribute` Properties

Following table includes the list of properties that can be used to define the behavior of the `Info Attribute`. For more information, see [`Info Attribute` Properties](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/properties/InfoAttributeProperties.java)

| `Attribute` property | Short description                                                                                                                                                                                      | Required                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| `label`              | Friendly name of the `Attribute` that can be used for human reading.                                                                                                                                   | <span class="badge badge--success">Yes</span> |
| `visible`            | Boolean determining if the `Attribute` is visible and can be displayed, otherwise it should be hidden, used as a helper.                                                                               | <span class="badge badge--success">Yes</span> |
| `group`              | Group of the `Attribute`, used for the logical grouping of multiple `Attributes`. The grouping is used for better orientation if many `Attributes` are used, it does not have impact on the `content`. | <span class="badge badge--danger">No</span>   |

### Sample `Info Attribute`

The following is a sample `Info Attribute` structure:

```json
{
  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",
  "name": "certificateTemplate",
  "label": "Certificate Template",
  "type": "info",
  "contentType": "string",
  "content": [
    {
      "reference": "Template 1",
      "data": "template1"
    }
  ],
  "properties": {
    "readOnly": false,
    "visible": true,
    "group": "Certificate Configuration"
  },
  "description": "Available certificate templates that can be selected for the certificate request",
}
```