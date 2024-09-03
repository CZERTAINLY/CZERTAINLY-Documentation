# Changing attribute definition
Since attributes play integral role in exchanging parameters and values needed for various operations, it is crucial to keep its definition anc content consistency. This holds true especially for `Data` and `Metadata` attributes which definition is defined in connectors and not managed by `Core`.

## Attributes unique, permanent and changeable properties
When `Core` requests for attributes needed to perform some operation, retrieved attribute definitions are validated and then stored in `Core` DB for filtering purposes. Each attribute is uniquely identified by combination of following properties:
- `UUID`
- `Name`
- `Connector UUID` (not applicable for global metadata)

When attribute is not found, definition is stored. For already existing definitions in `Core`, there is check if permanent property `contentType` is not changed. In case there is mismatch, exception is thrown because `Core` cannot process and handle incoming content data due to incompatibility with already existing content for that attribute.

Otherwise, definition is updated based on definition coming from connector. it means that its serialized definition is updated together with following `Core` managed changeable properties are up and its changeable managed properties:
- `Label`
- `Required` (not applicable for metadata)
- `ReadOnly` (not applicable for metadata)

This validation and updating mechanism keeps attribute definitions and their content consistent. This is necessary to keep operations needing attributes working correctly and be able to filter objects based on its content according to `contentType`.

## FAQ

This FAQ section serves as reference and information source for occasions when attribute definition that is used in some operation needs to be updated. 

### What if I need to change Attribute UUID and/or name?
UUID and name are unique attribute properties. If they are changed, attribute will be by `Core` considered as new attribute for that operation and content will be retained linked to original definition. That could cause issue in some operations like renew certificate where metadata are sent as part of request. Content will be sent by `Core` but with UUID / name of original attribute definition and it depends on connector and change if content could be properly linked to new definition.

### What if I need to change Attribute Name and what is the impact on existing data in platform?
As mentioned above, attribute name is unique property and when changed it leads to loose link of existing content. In some cases, it is possible to retrieve content with new definitions from connector (e.g. certificate `identify` operation of `authority` provider interface and location `sync` operation of `entity` provider interface).

Currently, there is no attribute migration setting and only option is to sync (identify) / recreate object.

### What about other properties?
In case, if there is need to change `contentType` property, it is necessary to update definition with new UUID and name. That way there will be no collision in structure with existing content.
For other properties, `Core` will handle update of that properties in its stored definition automatically.

When label is updated, user can see change immediately in API responses and in UI in corresponding form or attribute viewers.

When property `Required` is changed to `True`, keep in mind that operation for already existing object can fail because content for that attribute was not previously required

When property `ReadOnly` is changed to `True`, keep in mind that operation for already existing object can fail because existing content could be different from that specified in definition and thus breaking validation rule of read-only attribute.

### What is the best practice for Attribute definition?
When specifying attribute definition, it is important to generate unique set of UUID and name. Good practice is to keep in mind that name itself should be descriptive enough, and in case attributes represents very generic input (e.g. name, URL, type), use some prefix specifying it more accurately by its purpose. That way we can prevent potential collision or necessity to rename attribute when adding other ones with similar purpose. 
