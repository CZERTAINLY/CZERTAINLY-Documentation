---
title: Attributes and Callbacks
hide_table_of_contents: false
---
# Attributes and Callbacks

Although the CZERTAINLY platform is technology independent, each technology have its own specifics that the users should be able to use properly.

CZERTAINLY is using `AttributeDefinition` objects to control such specific behaviour of different technologies, like certification authorities, credential providers, discovery of certificates, etc. So called `Attributes` are used in almost every `Connector` and develop must understand them in order to implement custom behaviour or extend the functionality of the platform.

:::info
For more information about the concept behind the `Connector`, `Attributes`, `Callbacks`, etc, see the [CZERTAINLY platform overview](/docs/concept-design/overview).
:::

Now let's take a look on what exactly is an `AttributeDefinition` and how it can be used.

## It is all about the `Attributes`

The concept works on the principle of exchanging and validation of `Attributes` between the `Client`, `Connector` and CZERTAINLY platform.
Implementation of some specific `Connector` must be able to define and properly handle its specific `Attributes`. The definition is then exchanged with the `Client` and the platform validates it consistency and mediate the flow and logic between them:

```
Client                        CZERTAINLY                      Connector             Technology
  |                               |                               |                     |
  | list avaialable Attributes    |                               |                     |
  | ----------------------------> | check and validate request    |                     |
  |                               | get Attributes for the Client |                     |
  |                               | ----------------------------> | Get technology data |
  |                               |                               | <-----------------> |
  |                               |           AttributeDefinition |                     |  
  |           validate Attributes | <---------------------------- |                     |
  |           AttributeDefinition |                               |                     |
  | <---------------------------- |                               |                     |
  |                               |                               |                     |
  | RequestAttribute with content |                               |                     |
  | ----------------------------> | validate and merge Attributes |                     |
  |                               | Request with the content      |                     |
  |                               | ----------------------------> | Use the Attributes  |
  |                               |                               | <-----------------> |
```

Because the communication is controlled by the platform, it ensures the consistency and security of the `Attributes` that are exchanged between the `Client` and the `Connector`. and eventually applied in the target technology.

## `AttributeDefinition`

`AttributeDefinition` contains set of properties that are defined for a specific parameter required for the `Connector` to work and process requests properly.

A typical example may be the `Connector` that implements `Authority Provider` interface. `Authority Provider` serves as a certification authority, and it needs to know how to issue, renew, and revoke certificates. To issue the certificate, we probably need something like certificate signing request, however each technology may required additional data based on which the certificate will be issued.

For example, in case of MS ADCS, you need to know at least the certificate template that should be used to issue the certificate. And this is the place where you can use the `AttributeDefinition` to define the `Attribute` that will contain information about the certificate templates.

You can find specification of the `AttributeDefinition` in the [CZERTAINLY Interfaces repository](https://github.com/3KeyCompany/CZERTAINLY-Interfaces). Some important `Attribute` properties are following:

| `Attribute` property | Short description                                                                                                                                                                                                                |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `uuid`               | UUID of the `Attribute`, ensures the uniques across `Connectors`                                                                                                                                                                 |
| `name`               | Name of the `Attribute`                                                                                                                                                                                                          |
| `type`               | Type of the `Attribute`, various supported data types based on the [AttributeType](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/AttributeType.java) |
| `content`            | Content of the `Attribute` defined based on its `type`, see [Appendix A](#appendix-a---supported-attributetype)                                                                                                                                                      |
| `validationRegex`    | Optional regular expression used for validating the `Attribute` content                                                                                                                                                          |
| `attributeCallback`  | Optional definition of callback for helper methods, see [AttributeCallback](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/AttributeCallback.java)    |

## `AttributeCallback`

In some cases, the content of the `Attribute` depends on the content of some other `Attribute`. This is where we use `AttributeCallback` to define the callback that will be used to get the content of the `Attribute`. The callback will be triggered when the mapping rules will be satisfied.

Using this approach, `Connector` can use helper controllers and APIs to achieve loading of the data from the technology and communication with the technology without the need to define the `Attribute` content.

The `AttributeCallback` contains the following properties:

| `AttributeCallback` property | Short description                                                                                                                                                                                                                                                                                                                |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `callbackContext`            | Context part of callback URL that should be used                                                                                                                                                                                                                                                                                 |
| `callbackMethod`             | HTTP method of the callback URL that should be used                                                                                                                                                                                                                                                                              |
| `mappings`                   | Mappings for the callback method, which defines how to use the data in context of the request path variables, query parameter, or body payload. See [AttributeCallbackMapping](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/AttributeCallbackMapping.java) |

The complex structure, such as objects, arrays, etc., can be mapped only into the body payload of the callback. If the complex structure will be mapped as path variable or query parameter, only its `value` content property will be used.

See samples in [Appendix C - Code samples](#appendix-c---code-samples).

:::info
Mappings have various options how to include the data from other `Attributes` and request additional action based on them. See the available options in [AttributeCallbackMapping](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/AttributeCallbackMapping.java).
:::

### Special purpose callbacks

CZERTAINLY defines special purpose callbacks that are used for specific treatment of the `Attributes` content.

A typical example is `Attribute` of type `CREDENTIAL`. Working with the credentials, we would like to push the credentials to the `Connector` that should be authenticated and authorized based on selected credential to technology. However, we do not want to reveal the secret and sensitive value of the credential to the `Client`.

For that purpose we have a special callback interface that will give the `Client` credentials with the specific kind, however not the content. The content is protected by the platform.


## Appendix A - Supported `AttributeType`

| `AttributeType` | Associated content field |
|-----------------|--------------------------|
| `STRING`        | <pre>{<br/>  "content": {<br/>    "value": "string"<br/>  }<br/>}</pre> |
| `INTEGER`       | <pre>{<br/>  "content": {<br/>    "value": 12345<br/>  }<br/>}</pre>  |
| `SECRET`        | <pre>{<br/>  "content": {<br/>    "value": "secret"<br/>  }<br/>}</pre> `SECRET` is handled by the platform in a secure way and its value will never be presented to `Client` once defined. |
| `FILE`          | <pre>{<br/>  "content": {<br/>    "value": "base64-encoded content of the file",<br/>    "fileName": "name of the file",<br/>    "contentType": "tyoe if the file"<br/>  }<br/>}</pre> `FILE` type can be specifically handled based on the content and its purpose. | 
| `BOOLEAN`       | <pre>{<br/>  "content": {<br/>    "value": true<br/>  }<br/>}</pre> |
| `CREDENTIAL`    | <pre>{<br/>  "content": {<br/>    "value": "identification of Credential",<br/>    "data": {<br/>      "name": "string",<br/>      "uuid": "UUID of the Credential",<br/>      "kind": "kind of the Credential",<br/>      "attributes": [<br/>        ...list of Credential Attributes<br/>      ]<br/>      "enabled": true,<br/>      "connectorUuid": "UUID of the Credential Provider Connector",<br/>      "connectorName": "name of the Credential Provider Connector"<br/>    }<br/>  }<br/>}</pre> `CREDENTIAL` is a special purpose type that is handled by the platform for `Connectors` that needs to use the credential for authentication and authorization to technology, for example API Key, username/password, and any other `Credential`. |
| `DATE`          | <pre>{<br/>  "content": {<br/>    "value": "2022-11-30"<br/>  }<br/>}</pre> `DATE` should be in the format `yyyy-MM-dd`. |
| `FLOAT`         | <pre>{<br/>  "content": {<br/>    "value": 12.4487211<br/>  }<br/>}</pre> |
| `JSON`          | <pre>{<br/>  "content": {<br/>    "value": "identification of Object",<br/>    "data": {<br/>      ... any JSON object<br/>    }<br/>  }<br/>}</pre> `JSON` type provides a flexible way how to work with the custom objects within the `Attributes` and `Callbacks`. |
| `TEXT`          | <pre>{<br/>  "content": {<br/>    "value": "long text"<br/>  }<br/>}</pre> `TEXT` supports long string/text data to be processed. |
| `TIME`          | <pre>{<br/>  "content": {<br/>    "value": "11:45:32"<br/>  }<br/>}</pre> `TIME` should be in the format `HH:mm:ss`. |
| `DATETIME`      | <pre>{<br/>  "content": {<br/>    "value": "2011-12-03T10:15:30+01:00"<br/>  }<br/>}</pre> `DATETIME` should be in the format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX`, which is ISO-8601 extended offset date-time format. |

## Appendix B - Special purpose callbacks

| Callback | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `coreGetCredentials` | <pre>{<br/>  "callbackContext": "core/getCredentials",{<br/>  "callbackMethod": "GET",<br/>  "mappings": [<br/>    {<br/>      "to": "credentialKind",<br/>      "targets": [<br/>        "pathVariable"<br/>      ],<br/>      "value": "Basic"<br/>    }<br/>  ]<br/>}</pre>This callback allows to get the list of `Credentials` protecting its sensitive data. The list will contain only UUDI and name of the `Credentials` that have the required `kind`. |

## Appendix C - Code samples

### `AttributeDefinition` object

This sample show how to create an `AttributeDefinition` object in Java and set the required properties:

```java
// porperties of the AttributeDefinition
AttributeDefinition credential = new AttributeDefinition();
credential.setUuid("9379ca2c-aa51-42c8-8afd-2a2d16c99c57");
credential.setName("credential");
credential.setLabel("Credential");
credential.setDescription("SoftKeyStore Credential representing administrator for the communication");
credential.setType(AttributeType.CREDENTIAL);
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
