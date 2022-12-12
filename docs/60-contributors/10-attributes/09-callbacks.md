# Callbacks

> General description for the callbacks

This section of the document describes `Attribute Callback`

## `AttributeCallback`

In some cases, the content of the `Attribute` depends on the content of some other `Attribute`. This is where we use `AttributeCallback` to define the callback that will be used to get the content of the `Attribute`. The callback will be triggered when the mapping rules will be satisfied.

Using this approach, `Connector` can use helper controllers and APIs to achieve loading of the data from the technology and communication with the technology without the need to define the `Attribute` content.

The `AttributeCallback` contains the following properties:

| `AttributeCallback` property | Short description                                                                                                                                                                                                                                                                                                                        | Required                                      |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| `callbackContext`            | Context part of callback URL that should be used.                                                                                                                                                                                                                                                                                        | <span class="badge badge--success">Yes</span> |
| `callbackMethod`             | HTTP method of the callback URL that should be used.                                                                                                                                                                                                                                                                                     | <span class="badge badge--success">Yes</span> |
| `mappings`                   | Mappings for the callback method, which defines how to use the data in context of the request path variables, query parameter, or body payload. See [AttributeCallbackMapping](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/callback/AttributeCallbackMapping.java). | <span class="badge badge--success">Yes</span> |

The complex structure, such as objects, arrays, etc., can be mapped only into the body payload of the callback. If the complex structure will be mapped as path variable or query parameter, only its `value` content property will be used.

See code samples on how to prepare `Attribute` with `AttributeCallback` in [Appendix C - Code samples](#appendix-B---code-samples).

### Sample `AttributeCallback`

The following is the sample `AttributeCallback` structure:

```json
{
  "callbackContext": "/v1/authorityProvider/{authorityUuid}/certificateTemplate",
  "callbackMethod": "GET",
  "mappings": [
    {
      "from": "authority.uuid", <-- this is the value of the Attribute 'authority' and its property 'uuid'
      "to": "authorityUuid",    <-- we want to put the value 'from' to the 'authorityUuid' as the path variable
      "targets": [
        "pathVariable"          <-- the name of the path variable should match the 'to' property
      ]
    }
  ]
}
```

:::info
Mappings have various options how to include the data from other `Attributes` and request additional action based on them. See the available options in [AttributeCallbackMapping](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/callback/AttributeCallbackMapping.java).
:::

### Special purpose callbacks

CZERTAINLY defines special purpose callbacks that are used for specific treatment of the `Attributes` content.

A typical example is `Attribute` of type `CREDENTIAL`. Working with the credentials, we would like to push the credentials to the `Connector` that should be authenticated and authorized based on selected credential to technology. However, we do not want to reveal the secret and sensitive value of the credential to the `Client`.

For that purpose we have a special callback interface that will give the `Client` credentials with the specific kind, however not the content. The content is protected by the platform.


<table>

<tr>
<th> 

`AttributeType`

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
  "content": {
    "value": "string"
  }
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
  "content": {
    "value": 12345
  }
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
  "content": {
    "value": "secret"
  }
}
```
`SECRET` is handled by the platform in a secure way and its value will never be presented to `Client` once defined.

</td>
</tr>

<tr>
<td>

`FILE`

</td>
<td>

```json
{  
  "content": {
    "value": "base64-encoded content of the file",
    "fileName": "name of the file",
    "contentType": "type of the file"
  }
}
```
`FILE` type can be specifically handled based on the content and its purpose.

</td>
</tr>

<tr>
<td>

`BOOLEAN`

</td>
<td>

```json
{  
  "content": {
    "value": true
  }
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
  "content": {
    "value": "identification of Credential",
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
}
```
`CREDENTIAL` is a special purpose type that is handled by the platform for `Connectors` that needs to use the credential for authentication and authorization to technology, for example API Key, username/password, and any other `Credential`.

</td>
</tr>

<tr>
<td>

`DATE`

</td>
<td>

```json
{
  "content": {
    "value": "2022-11-30"
  }
}
```
`DATE` should be in the format `yyyy-MM-dd`.

</td>
</tr>

<tr>
<td>

`FLOAT`

</td>
<td>

```json
{
  "content": {
    "value": 12.4487211
  }
}
```

</td>
</tr>

<tr>
<td>

`JSON`

</td>
<td>

```json
{
  "content": {
    "value": "identification of Object",
    "data": {
      ... any JSON object
    }
  }
}
```
`JSON` type provides a flexible way how to work with the custom objects within the `Attributes` and `Callbacks`.

</td>
</tr>

<tr>
<td>

`TEXT`

</td>
<td>

```json
{
  "content": {
    "value": "long text"
  }
}
```
`TEXT` supports long string/text data to be processed.

</td>
</tr>

<tr>
<td>

`TIME`

</td>
<td>

```json
{
  "content": {
    "value": "11:45:32"
  }
}
```
`TIME` should be in the format `HH:mm:ss`.

</td>
</tr>

<tr>
<td>

`DATETIME`

</td>
<td>

```json
{
  "content": {
    "value": "2011-12-03T10:15:30+01:00"
  }
}
```
`DATETIME` should be in the format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX`, which is ISO-8601 extended offset date-time format.

</td>
</tr>

</table>

## Appendix A - Special purpose callbacks

<table>

<tr>
<th>Callback</th>
<th>Description</th>
</tr>

<tr>
<td>

`coreGetCredentials`

</td>
<td>

```json
{
  "callbackContext": "core/getCredentials",
  "callbackMethod": "GET",
  "mappings": [
    {
      "to": "credentialKind",
      "targets": [
        "pathVariable"
      ],
      "value": "Basic"
    }
  ]
}
```
This callback allows to get the list of `Credentials` protecting its sensitive data. The list will contain only UUID and name of the `Credentials` that have the required `kind`.

</td>
</tr>

</table>

## Appendix B - Code samples

### `AttributeDefinition` object

This sample show how to create an `AttributeDefinition` object in Java and set the required properties:

```java
// porperties of the AttributeDefinition
AttributeDefinition credential = new AttributeDefinition();
credential.setUuid("9379ca2c-aa51-42c8-8afd-2a2d16c99c57");
credential.setName("credential");
credential.setLabel("Credential");
credential.setDescription("SoftKeyStore Credential representing administrator for the communication");
credential.setType(AttributeType.DATA);
credential.setContentType(AttributeContentType.CREDENTIAL);
credential.setRequired(true);
credential.setReadOnly(false);
credential.setVisible(true);
// definition of the AttributeCallback
AttributeCallback listCredentialCallback = new AttributeCallback();
listCredentialCallback.setCallbackContext("core/getCredentials");
listCredentialCallback.setCallbackMethod("GET");
// how to map the data from Attributes to callback
Set<AttributeCallbackMapping> mappings = new HashSet<>();
mappings.add(new AttributeCallbackMapping(
        "credentialKind",
        AttributeValueTarget.PATH_VARIABLE,
        "SoftKeyStore"));
listCredentialCallback.setMappings(mappings);
credential.setAttributeCallback(listCredentialCallback);
```

### Mapping of the JSON object to the `AttributeCallback`

```java
// definition of the AttributeCallback
AttributeCallback listValuesForAttributeTwoCallback = new AttributeCallback();
listValuesForAttributeTwoCallback.setCallbackContext("/v1/support/values");
listValuesForAttributeTwoCallback.setCallbackMethod("POST");
// map the selected object from attributeOne to callback and put it into body payload into the field with name selectedObject
Set<AttributeCallbackMapping> mappings = new HashSet<>();
mappings.add(new AttributeCallbackMapping(
        "attributeOne",
        "selectedObject"
        AttributeValueTarget.BODY));
listValuesForAttributeTwoCallback.setMappings(mappings);
attributeTwo.setAttributeCallback(listCredentialCallback);
```

### Mapping of the JSON object field into the `AttributeCallback` path variables

```java
// definition of the AttributeCallback
AttributeCallback listValuesForAttributeTwoCallback = new AttributeCallback();
listValuesForAttributeTwoCallback.setCallbackContext("/v1/support/{authorityId}/{customField}");
listValuesForAttributeTwoCallback.setCallbackMethod("GET");
// map the selected object value from attributeOne to callback and put it into path variable with name authorityId
// when the name of the Attribute only is specified, the value of the content is taken
Set<AttributeCallbackMapping> mappings = new HashSet<>();
mappings.add(new AttributeCallbackMapping(
        "attributeOne",
        "authorityId"
        AttributeValueTarget.PATH_VARIABLE));
        
// map the field custom from the selected object to callback and put it into path variable variable with name customField
mappings.add(new AttributeCallbackMapping(
        "attributeOne.data.custom",
        "customField"
        AttributeValueTarget.PATH_VARIABLE));
listValuesForAttributeTwoCallback.setMappings(mappings);
attributeTwo.setAttributeCallback(listCredentialCallback);
```