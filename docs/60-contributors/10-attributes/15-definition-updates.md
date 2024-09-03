# Attribute definition consistency
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

### FAQ

This FAQ section serves as reference and information source for occasions when attribute definition that is used in some operation needs to be updated. 

#### What if I need to change Attribute UUID and/or name?
#### What if I need to change Attribute Name or other properties?
#### What is the impact on existing data in platform?
#### What I should do when the Attribute definition is changed?
#### Will be updates automatically applied to all existing data and changed accordingly?
#### Are there any restriction when I cannot change the Attribute definition?
#### What is the best practice for Attribute definition?