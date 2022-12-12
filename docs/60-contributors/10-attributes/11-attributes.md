# Attributes

## Attribute Types

Based on the usage and specific behaviour you want to provide, `Attribute` can be one of 5 the following defined types:

| `BaseAttribute` type                    | Short description                                                                                                                                                                                                                                                                                   |
|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`DataAttribute`](data-attributes)      | `DataAttributes` that are used by the connectors to gather the required information from the client. They are full fledged data carriers used by the `Connectors` for information exchange                                                                                                          |
| [`InfoAttributes`](info-attributes)     | `InfoAttributes` are information carriers whose primary responsibility to carry information that will assist the client with additional data to be displayed to the user.                                                                                                                           |
| [`GroupAttributes`](group-attributes)   | `GroupAttributes` are advanced type of attributes that carry a group of `BaseAttributes` that are logically connected. They compose list of `DataAttributes` and `InfoAttributes`. They are implemented as callback responses and are handy when the attributes are dependent on the value selected |
| [`MetaAttributes`](meta-attributes)     | Attributes used by the connector to pass the extended information about the objects created. The metadata are stored in the core and sent to the connector when needed.                                                                                                                             |
| [`CustomAttributes`](custom-attributes) | `CustomAttributes` are used defined attributes for storing additional information about the objects created in the platform. These are local to core and are not sent to the `connectors`.                                                                                                          |

# Data Attributes

`Data Attributes` are the primary type of `attributes` who are the data carriers from and to the `Connectors`. They are defined by the `Connectors` to get the necessary information from the client for any operation.


You can find specification of the `Data Attribute` in the [CZERTAINLY Interfaces repository](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/DataAttribute.java).

## `Data Attribute` structure

In addition to the common `Attribute` properties defined [here](overview#attributedefinition), the `Data Attribute` has the following additional properties:

| `Attribute` property | Short description                                                                                                                                                                                                                                                                                                       | Required                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `contentType`        | Content Type of the `Data Attribute`, various supported data types based on the [AttributeType](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/AttributeContentType.java). For example, `STRING`, `JSON`, `INTEGER`, `DATE`, etc. | <span class="badge badge--success">Yes</span> |
| `constraints`        | List of `Constraints` applicable to the value. various constraints include "REGEXP", "RANGE" and "DATETIME". [more](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/AttributeConstraintType.java)                               | <span class="badge badge--danger">No</span>   |
| `properties`         | List of properties for the attribute. These properties describe the behavior of attribute in the User Interface. For more information [see](#data-attribute-properties)                                                                                                                                                 | <span class="badge badge--success">Yes</span> |
| `attributeCallback`  | Optional definition of callback for helper methods, see [AttributeCallback](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/callback/AttributeCallback.java)                                                                               | <span class="badge badge--danger">No</span>   |

## `Data Attribute` Properties

Following table includes the list of properties that can be used to define the behavior of the `Data Attribute`. For more information, see [`Data Attribute` Properties](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/properties/DataAttributeProperties.java)

| `Attribute` property | Short description                                                                                                                                                                                      | Required                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| `label`              | Friendly name of the `Attribute` that can be used for human reading.                                                                                                                                   | <span class="badge badge--success">Yes</span> |
| `required`           | Boolean determining if the `Attribute` is required. If true, the `Attribute` must provide its value in the `content` property.                                                                         | <span class="badge badge--success">Yes</span> |
| `readOnly`           | Boolean determining if the `Attribute` is read only and its `content` value cannot be changed.                                                                                                         | <span class="badge badge--success">Yes</span> |
| `visible`            | Boolean determining if the `Attribute` is visible and can be displayed, otherwise it should be hidden, used as a helper.                                                                               | <span class="badge badge--success">Yes</span> |
| `list`               | Boolean determining if the `Attribute` contains list of values in the `content`.                                                                                                                       | <span class="badge badge--success">Yes</span> |
| `multiSelect`        | Boolean determining if the `Attribute` can have multiple values in the `content` property which is represented as a list.                                                                              | <span class="badge badge--success">Yes</span> |
| `group`              | Group of the `Attribute`, used for the logical grouping of multiple `Attributes`. The grouping is used for better orientation if many `Attributes` are used, it does not have impact on the `content`. | <span class="badge badge--danger">No</span>   |

### Sample `Data Attribute`

The following is a sample `Data Attribute` structure:

```json
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
```

# Info Attributes

`Info Attributes` carry the additional or display information from the connector that gives additional perspective on for some of the `attributes`. These are used only for the display purposes and will not be sent back to the connectors. In the User Interface, they are simply readonly fields that are displayed to the user.


You can find specification of the `Info Attribute` in the [CZERTAINLY Interfaces repository](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/InfoAttribute.java).

## `Info Attribute` structure

In addition to the common `Attribute` properties defined [here](overview#attributedefinition), the `Info Attribute` has the following additional properties:

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

# Group Attributes

`Group Attributes` contains Group of `Attributes` that are dynamically sent by the `Connector` as a response for any `Attribute Callbacks`. These are used to dynamically change the list of `Attributes` based on the previous values selected by the user. For example, the `Connector` an send a different set of attributes if the user selects Option A or it can send a different set of attributes if the user selects Option B. By dynamically changing the list of `Attributes`, the `Connector` can get only the necessary information from the user rather than providing the unrelated items in a single call.

:::info
`Group Attributes` are only mostly used as a response for `Attribute Callbacks`
:::


You can find specification of the `Group Attribute` in the [CZERTAINLY Interfaces repository](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/GroupAttribute.java).

## `Group Attribute` structure

In addition to the common `Attribute` properties defined [here](overview#attributedefinition), the `Info Attribute` has the following additional properties:

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

# Metadata Attributes

`Metadata Attributes` contains the information provided by the `Connector` about the objects. They are created and managed by the `Connectors` and are sent to the core for storage and display purpose for the users. Unlike [`Custom Attributes`](custom-attributes) `Metadata Attributes` are not manageable by the users. Metadata in the platform uses `Metadata Attributes` to represent the data. There are two types:

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