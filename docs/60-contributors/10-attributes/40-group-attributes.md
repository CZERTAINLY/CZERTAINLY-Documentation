# Group Attributes

`Group Attributes` contains Group of `Attributes` that are dynamically sent by the `Connector` as a response for any `Attribute Callbacks`. These are used to dynamically change the list of `Attributes` based on the previous values selected by the user. For example, the `Connector` an send a different set of attributes if the user selects Option A or it can send a different set of attributes if the user selects Option B. By dynamically changing the list of `Attributes`, the `Connector` can get only the necessary information from the user rather than providing the unrelated items in a single call.

:::info
`Group Attributes` are only mostly used as a response for `Attribute Callbacks`
:::


You can find specification of the `Group Attribute` in the [CZERTAINLY Interfaces repository](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/GroupAttribute.java).

## `Group Attribute` structure

In addition to the common `Attribute` properties defined [here](10-overview#attributedefinition), the `Info Attribute` has the following additional properties:

| `Attribute` property | Short description                                                                                                                                                                                                                         | Required                                    |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `attributeCallback`  | Optional definition of callback for helper methods, see [AttributeCallback](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/callback/AttributeCallback.java) | <span class="badge badge--danger">No</span> |

### Sample `Group Attribute`

The following is a sample `Group Attribute` structure:

```json
{
  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",
  "name": "group1",
  "label": "Option A Attributes",
  "type": "group",
  "content": [
    {
      "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",
      "name": "certificateTemplate",
      "label": "Certificate Template",
      "type": "data",
      "contentType": "string",
      "content": [
        {
          "reference": "Template 1",
          "data": "template1"
        },
        {
          "reference": "Template 2",
          "data": "template2"
        },
        {
          "reference": "Template 3",
          "data": "template3"
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
      "description": "Available certificate templates that can be selected for the certificate request",
      "constraints": [
        {
          "description": "Certificate Template Regex",
          "errorMessage": "Certificate Template must be a valid string",
          "type": "regexp",
          "data": "^[a-z\\s]{0,255}"
        }
      ]
    }
  ],
  "description": "Available certificate templates that can be selected for the certificate request",
}
```