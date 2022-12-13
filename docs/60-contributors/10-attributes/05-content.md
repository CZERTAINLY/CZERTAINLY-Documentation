# Content

This section of the document describes the content of the `Attributes` and their types. 

## `Attribute` Content Types

All `AttributeContent` extends from [`BaseAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/BaseAttributeContent.java) which is abstracted from [`AttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/AttributeContent.java). `AttributeContent` is a generic type with the following properties:


Properties of Attribute Content are following:

| Property    | Short description                                                                                                                                                                                                                                                                                                          | Required                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `reference` | Reference for the value. Meaningful, user readable string for the value                                                                                                                                                                                                                                                    | <span class="badge badge--success">Yes</span> |
| `data`      | Actual value of the content. This property uses a generic type and is a typed class accepting the data from the classes extending [`BaseAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/BaseAttributeContent.java) | <span class="badge badge--success">Yes</span> |


Based on the usage and the functionality, `AttributeContent` can be of any of the following types:

:::info
An `Attribute` can contain only one type of the content. Mixture of different type of `AttributeContent` is not supported.
:::

| `AttributeContentType` | Short Description                                                                                                                                                                                                                                                                                                                                                                                     | Class                                                                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `STRING`               | String value `content`                                                                                                                                                                                                                                                                                                                                                                                | [`StringAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/StringAttributeContent.java)         |
| `INTEGER`              | Integer value `content`                                                                                                                                                                                                                                                                                                                                                                               | [`IntegerAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/IntegerAttributeContent.java)       |
| `SECRET`               | `AttributeContent` for password or secrets, `data` field is defined by [`SecretAttributeContentData`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/data/SecretAttributeContentData.java). `SECRET` is handled by the platform in a secure way and its value will never be presented to `Client` once defined. | [`SecretAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/SecretAttributeContent.java)         |
| `FILE`                 | `AttributeContent` for `Attributes` requiring files. `data` field is described by [`FileAttributeContentData`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/data/FileAttributeContentData.java)                                                                                                               | [`FileAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/FileAttributeContent.java)             |
| `BOOLEAN`              | Boolean value `content`                                                                                                                                                                                                                                                                                                                                                                               | [`BooleanAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/BooleanAttributeContent.java)       |
| `TEXT`                 | Text value `content`. Use this type when the input required is a long text.                                                                                                                                                                                                                                                                                                                           | [`TextAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/TextAttributeContent.java)             |
| `FLOAT`                | Decimal value `content`                                                                                                                                                                                                                                                                                                                                                                               | [`FloatAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/FloatAttributeContent.java)           |
| `DATE`                 | Date value `content`. `DATE` should be in the format `yyyy-MM-dd`.                                                                                                                                                                                                                                                                                                                                    | [`DateAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/DateAttributeContent.java)             |
| `DATETIME`             | Date and time value `content`. `DATETIME` should be in the format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX`, which is ISO-8601 extended offset date-time format.                                                                                                                                                                                                                                                 | [`DateTimeAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/DatetimeAttributeContent.java)     |
| `TIME`                 | Time value `content`. `TIME` should be in the format `HH:mm:ss`.                                                                                                                                                                                                                                                                                                                                      | [`TimeAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/TimeAttributeContent.java)             |
| `CREDENTIAL`           | `AttributeContent` for credentials. Use this type with the [callback](callbacks) when you need `Credential` stored in the platform. `CREDENTIAL` is a special purpose type that is handled by the platform for `Connectors` that needs to use the credential for authentication and authorization to technology, for example API Key, username/password, and any other `Credential`.                  | [`CredentialAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/CredentialAttributeContent.java) |
| `OBJECT`               | `AttributeContent` for objects. Use this when you need to require any custom JSON value to be the content. `OBJECT` type provides a flexible way how to work with the custom objects within the `Attributes` and `Callbacks`.                                                                                                                                                                         | [`ObjectAttributeContent`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content/ObjectAttributeContent.java)         |

:::info
Content are always List of `AttributeContent` objects. For more information about the content, see [Content](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/tree/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/content)
:::

### Samples

The table below shows the `AttributeContentType` and the sample for each type.

<table>

<tr>
<th> 

`AttributeContentType`

</th>
<th>

Associated `content` field

</th>
</tr>

<tr>
<td>

`STRING`

</td>
<td>

```json
{  
  "content": [
    {
      "reference": "string",
      "data": "string"
    }
  ]
}
```

</td>
</tr>

<tr>
<td>

`INTEGER`

</td>
<td>

```json
{  
  "content": [
    {
      "reference": "string",
      "value": 12345
    }
  ]
}
```

</td>
</tr>

<tr>
<td>

`SECRET`

</td>
<td>

```json
{  
  "content": [
    {
      "reference": "string",
      "data": {
        "secret": "secret"
    }
  ]
}
```

</td>
</tr>

<tr>
<td>

`FILE`

</td>
<td>

```json
{  
  "content": [
    {
      "reference": "string",
      "data": {
        "value": "base64-encoded content of the file",
        "fileName": "name of the file",
        "mimeType": "type of the file"
      }
    }
  ]
}
```

</td>
</tr>

<tr>
<td>

`BOOLEAN`

</td>
<td>

```json
{  
  "content": [
    {
      "reference": "string",
      "value": true
    }
  ]
}
```

</td>
</tr>

<tr>
<td>

`CREDENTIAL`

</td>
<td>

```json
{
  "content": [
    {
      "reference": "identification of Credential",
      "data": {
        "name": "string",
        "uuid": "UUID of the Credential",
        "kind": "kind of the Credential",
        "attributes": [
          ...list of Credential Attributes
        ]
        "enabled": true,
        "connectorUuid": "UUID of the Credential Provider Connector",
        "connectorName": "name of the Credential Provider Connector"
      }
    }
  ]
}
```

</td>
</tr>

<tr>
<td>

`DATE`

</td>
<td>

```json
{
  "content": [
    {
      "reference": "string",
      "value": "2022-11-30"
    }
  ]
}
```

</td>
</tr>

<tr>
<td>

`FLOAT`

</td>
<td>

```json
{
  "content": [
    {
      "reference": "string",
      "value": 12.4487211
    }
  ]
}
```

</td>
</tr>

<tr>
<td>

`OBJECT`

</td>
<td>

```json
{
  "content": [
    {
      "reference": "identification of Object",
      "data": {
        ... any JSON object
      }
    }
  ]
}
```

</td>
</tr>

<tr>
<td>

`TEXT`

</td>
<td>

```json
{
  "content": [
    {
      "reference": "string",
      "value": "long text"
    }
  ]
}
```


</td>
</tr>

<tr>
<td>

`TIME`

</td>
<td>

```json
{
  "content": [
    {
      "reference": "string",
      "value": "11:45:32"
    }
  ]
}
```

</td>
</tr>

<tr>
<td>

`DATETIME`

</td>
<td>

```json
{
  "content": [
    {
      "reference": "string",
      "value": "2011-12-03T10:15:30+01:00"
    }
  ]
}
```

</td>
</tr>

</table>