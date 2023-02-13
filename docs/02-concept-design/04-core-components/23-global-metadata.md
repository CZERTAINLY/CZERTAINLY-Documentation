# Global Metadata

## What is `Global Metadata`?

`Global Metadata` is an abstraction layer to control the list of metadata sent by the `Connector` to the `Core`. It allows the administrators to control the metadata per `Connectors`. It gives more control to the administrators to control the metadata on the `Connector` level.

`Global Metadata` can be created in 2 ways:

- Defining from the `Core` and adapting in the `Connectors`.
- Promote the existing the `Connector` metadata to `Global Metadata`.

:::warning
When a metadata from the connector is set as global, it should be defined in the core. If not, then the value of the metadata will not be stored in the core.
:::

### Characteristics

The characteristics of `Global Metadata` are:

- `Global Metadata` are not available for the user to create or update.
- Any metdata from the connector can be made as `Global Metadata` by enabling the property `global` in the attribute property configuration.
- Name of the `Global Metadata` should match the name of the attribute in the `Connector`.
- If a `Global Metadata` is defined and not enabled in the connector, it will be stored as a connector metadata.
