# Examples

This section of the document contains few examples for working with the `Attributes`.

## Example 1 - Simple Attribute Creation

This example shows how to create a simple `Attribute` with the `DataAttribute` type.

```java
// Create a new DataAttribute
DataAttribute dataAttribute = new DataAttribute();
dataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");
dataAttribute.setName("myAttribute");
dataAttribute.setContentType(AttributeContentType.STRING);
dataAttribute.setType(AttributeType.DATA);
dataAttribute.setDescription("This is my attribute");

// Create Data Attribute Properties
DataAttributeProperties dataAttributeProperties = new DataAttributeProperties();
dataAttributeProperties.setRequired(true);
dataAttributeProperties.setReadOnly(false);
dataAttributeProperties.setVisible(true);
dataAttributeProperties.setLabel("My Attribute");
dataAttributeProperties.setMultiSelect(false);
dataAttributeProperties.setGroup("My Group");
dataAttributeProperties.setList(false);

// Set Data Attribute Properties to Data Attribute
dataAttribute.setProperties(dataAttributeProperties);
```

## Example 2 - Attribute with Callback

This example shows how to create an `Attribute` with the `DataAttribute` type and a `Callback`.

```java
// Create a new DataAttribute
DataAttribute dataAttribute = new DataAttribute();
dataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");
dataAttribute.setName("myAttribute");
dataAttribute.setType(AttributeType.DATA);
dataAttribute.setContentType(AttributeContentType.STRING);
dataAttribute.setDescription("This is my attribute");

// Create Data Attribute Properties
DataAttributeProperties dataAttributeProperties = new DataAttributeProperties();
dataAttributeProperties.setRequired(true);
dataAttributeProperties.setReadOnly(false);
dataAttributeProperties.setVisible(true);
dataAttributeProperties.setLabel("My Attribute");
dataAttributeProperties.setMultiSelect(false);
dataAttributeProperties.setGroup("My Group");
dataAttributeProperties.setList(false);

// Set Data Attribute Properties to Data Attribute
dataAttribute.setProperties(dataAttributeProperties);

// Create Attribute Callback
AttributeCallback attributeCallback = new AttributeCallback();
attributeCallback.setCallbackContext("/api/test");
attributeCallback.setCallbackMethod("GET");
Set<AttributeCallbackMapping> mappings = new HashSet<>();
mappings.add(new AttributeCallbackMapping(
        "credentialKind",
        AttributeValueTarget.PATH_VARIABLE,
        "SoftKeyStore"));
listCredentialCallback.setMappings(mappings);

// Set Attribute Callback to Data Attribute
dataAttribute.setAttributeCallback(listCredentialCallback);
```

## Example 3 - Attribute with Content

This example shows how to create an `Attribute` with the `DataAttribute` type and a `Content` predefined.

```java
DataAttribute dataAttribute = new DataAttribute();
dataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");
dataAttribute.setName("myAttribute");
dataAttribute.setType(AttributeType.DATA);
dataAttribute.setContentType(AttributeContentType.STRING);
dataAttribute.setDescription("This is my attribute");

// Create Data Attribute Properties
DataAttributeProperties dataAttributeProperties = new DataAttributeProperties();
dataAttributeProperties.setRequired(true);
dataAttributeProperties.setReadOnly(false);
dataAttributeProperties.setVisible(true);
dataAttributeProperties.setLabel("My Attribute");
dataAttributeProperties.setMultiSelect(false);
dataAttributeProperties.setGroup("My Group");
dataAttributeProperties.setList(true);

// Set Data Attribute Properties to Data Attribute
dataAttribute.setProperties(dataAttributeProperties);

// Create Attribute Content
List<StringAttributeContent> content = new ArrayList<>();
content.add(new StringAttributeContent("sampleReference1", "sampleData1"));
content.add(new StringAttributeContent("sampleReference2", "sampleData2"));
content.add(new StringAttributeContent("sampleReference3", "sampleData3"));

// Set Attribute Content to Data Attribute
dataAttribute.setContent(content);
```

## Example 4 - Attribute with Validation

This example shows how to create an `Attribute` with the `DataAttribute` type and `Validation`.

```java
// Create a new DataAttribute
DataAttribute dataAttribute = new DataAttribute();
dataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");
dataAttribute.setName("myAttribute");
dataAttribute.setType(AttributeType.DATA);
dataAttribute.setContentType(AttributeContentType.STRING);
dataAttribute.setDescription("This is my attribute");

// Create Data Attribute Properties
DataAttributeProperties dataAttributeProperties = new DataAttributeProperties();
dataAttributeProperties.setRequired(true);
dataAttributeProperties.setReadOnly(false);
dataAttributeProperties.setVisible(true);
dataAttributeProperties.setLabel("My Attribute");
dataAttributeProperties.setMultiSelect(false);
dataAttributeProperties.setGroup("My Group");
dataAttributeProperties.setList(false);

// Set Data Attribute Properties to Data Attribute
dataAttribute.setProperties(dataAttributeProperties);

// Create Attribute Validation
RegExpAttributeConstraint regExpAttributeConstraint = new RegExpAttributeConstraint();
regExpAttributeConstraint.setDescription("This is a regular expression constraint");
regExpAttributeConstraint.setErrorMessage("This is a sample error message");
regExpAttributeConstraint.setType(AttributeConstraintType.REGEXP);
regExpAttributeConstraint.setData("^[a-zA-Z0-9]*$");

// Set Attribute Validation to Data Attribute
dataAttribute.setConstraint(List.of(regExpAttributeConstraint));
```

## Example 5 - Info Attribute Creation

This example shows how to create an `Attribute` with the `InfoAttribute` type.

```java
// Create a new InfoAttribute
InfoAttribute infoAttribute = new InfoAttribute();
infoAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");
infoAttribute.setName("myAttribute");
infoAttribute.setType(AttributeType.INFO);
infoAttribute.setContentType(AttributeContentType.STRING);
infoAttribute.setDescription("This is my attribute");

// Create Info Attribute Properties
InfoAttributeProperties infoAttributeProperties = new InfoAttributeProperties();
infoAttributeProperties.setLabel("My Attribute");
infoAttributeProperties.setGroup("My Group");
infoAttributeProperties.setVisible(true);

// Set Info Attribute Properties to Info Attribute
infoAttribute.setProperties(infoAttributeProperties);

// Create Info Attribute Content
TextAttributeContent textAttributeContent = new TextAttributeContent();
textAttributeContent.setReference("Sample Reference Data");
textAttributeContent.setData("This is a sample text that has to be displayed in the user interface. This attribute data contains additional information that helps the user to understand the context of the request.");

// Set Info Attribute Content to Info Attribute
infoAttribute.setContent(List.of(textAttributeContent));
```

## Example 6 - Group Attribute Creation

This example shows how to create an `Attribute` with the `GroupAttribute` type.

```java
//Data Attribute Creation

DataAttribute dataAttribute = new DataAttribute();
dataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");
dataAttribute.setName("myAttribute");
dataAttribute.setType(AttributeType.DATA);
dataAttribute.setContentType(AttributeContentType.STRING);
dataAttribute.setDescription("This is my attribute");

// Create Data Attribute Properties
DataAttributeProperties dataAttributeProperties = new DataAttributeProperties();
dataAttributeProperties.setRequired(true);
dataAttributeProperties.setReadOnly(false);
dataAttributeProperties.setVisible(true);
dataAttributeProperties.setLabel("My Attribute");
dataAttributeProperties.setMultiSelect(false);
dataAttributeProperties.setGroup("My Group");
dataAttributeProperties.setList(false);

// Set Data Attribute Properties to Data Attribute
dataAttribute.setProperties(dataAttributeProperties);


//Info Attribute Creation
InfoAttribute infoAttribute = new InfoAttribute();
infoAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120003");
infoAttribute.setName("myAttribute1");
infoAttribute.setType(AttributeType.INFO);
infoAttribute.setContentType(AttributeContentType.STRING);
infoAttribute.setDescription("This is my attribute 1");

// Create Info Attribute Properties
InfoAttributeProperties infoAttributeProperties = new InfoAttributeProperties();
infoAttributeProperties.setLabel("My Attribute");
infoAttributeProperties.setGroup("My Group");
infoAttributeProperties.setVisible(true);

// Set Info Attribute Properties to Info Attribute
infoAttribute.setProperties(infoAttributeProperties);

// Create Info Attribute Content
TextAttributeContent textAttributeContent = new TextAttributeContent();
textAttributeContent.setReference("Sample Reference Data");
textAttributeContent.setData("Reference data for info attribute");

// Set Info Attribute Content to Info Attribute
infoAttribute.setContent(List.of(textAttributeContent));


// Create a new GroupAttribute
GroupAttribute groupAttribute = new GroupAttribute();
groupAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120004");
groupAttribute.setName("groupAttribute");
groupAttribute.setType(AttributeType.GROUP);
groupAttribute.setContentType(AttributeContentType.STRING);
groupAttribute.setDescription("Sample Group Attribute");

// Set Attribute Content to Group Attribute
groupAttribute.setContent(List.of(dataAttribute, infoAttribute));
```

## Example 7 - Metadata Attribute Creation

This example shows how to create an `Attribute` with the `MetadataAttribute` type.

```java
// Create a new MetadataAttribute
MetadataAttribute metadataAttribute = new MetadataAttribute();
metadataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");
metadataAttribute.setName("discoverySource");
metadataAttribute.setType(AttributeType.METADATA);
metadataAttribute.setContentType(AttributeContentType.STRING);
metadataAttribute.setDescription("Metadata describing the source of the certificate discovered");

// Create Metadata Attribute Properties
MetadataAttributeProperties metadataAttributeProperties = new MetadataAttributeProperties();
metadataAttributeProperties.setLabel("Discovery Source");
metadataAttributeProperties.setGroup("Discovery");
metadataAttributeProperties.setVisible(true);
//Setting the metadata as global metadata
metadataAttributeProperties.setGlobal(true);

// Set Metadata Attribute Properties to Metadata Attribute
metadataAttribute.setProperties(metadataAttributeProperties);

// Create Metadata Attribute Content
StringAttributeContent stringAttributeContent = new StringAttributeContent();
stringAttributeContent.setReference("google.com");
stringAttributeContent.setData("google.com");

// Set Metadata Attribute Content to Metadata Attribute
metadataAttribute.setContent(List.of(stringAttributeContent));
```

## Example 8 - Custom Attribute Creation

This example shows how to create an `Attribute` with the `CustomAttribute` type.

```java
CustomAttribute customAttribute = new CustomAttribute();
customAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");
customAttribute.setName("myAttribute");
customAttribute.setType(AttributeType.DATA);
customAttribute.setContentType(AttributeContentType.STRING);
customAttribute.setDescription("This is my attribute");

// Create Data Attribute Properties
CustomAttributeProperties customAttributeProperties = new CustomAttributeProperties();
customAttributeProperties.setRequired(true);
customAttributeProperties.setReadOnly(false);
customAttributeProperties.setVisible(true);
customAttributeProperties.setLabel("My Attribute");
customAttributeProperties.setMultiSelect(false);
customAttributeProperties.setGroup("My Group");
customAttributeProperties.setList(false);

// Set Data Attribute Properties to Data Attribute
customAttribute.setProperties(customAttributeProperties);
```