# Global Metadata

## What is `Global Metadata`?

`Global Metadata` is an abstraction layer to control and unite definition of specific metadata with same purpose. It allows the administrators to use already defined metadata marked as global and group all various content for different objects under one precise definition.

`Global Metadata` can be created in 2 ways:

- Define in the `Core` and use in the `Connector`.
- Promote the existing `Connector` metadata to `Global Metadata`.

:::warning
When a metadata from the connector is set as global, it should be defined in the core. If not, then the value of the metadata will not be stored in the core.
:::

### Characteristics

The characteristics of `Global Metadata` are:

- `Global Metadata` are not available for the user to create or update.
- Any metadata from the connector can be made as `Global Metadata` by enabling the property `global` in the attribute property configuration.
- Name of the `Global Metadata` should match the name of the attribute in the `Connector`.
- If a `Global Metadata` is defined and not enabled in the connector, it will be stored as a connector metadata.

---
**NOTE**

Global metadata are currently supported only in Core through API interface. 'Administrator' application does not support them yet.

---