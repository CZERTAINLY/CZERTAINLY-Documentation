---
sidebar_position: 6
---

# Authority

`Authority` holds the access information related to the certificate authority technology, i.e., it contains the information of which CA to use and the attributes of the CA.

The information held by the `Authority` is defined by the `Connector`.
`Authority Provider` uses `Attributes` to get the data needed to establish the connection to the CA.

`Authority` has the following parameters:

The version of the `Authority Provider` interface the `Authority` is created against determines its shape. A `Connector` can implement more than one version; the `Authority` is bound to one of them.

| Parameter            | Description                                                                                                                                                                            |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                 | Name of the `Authority`                                                                                                                                                                |
| `Authority Provider` | Identification of the `Connector` implementing the `Authority Provider` interface                                                                                                      |
| `Kind`               | `Kind` of the CA technology implemented by the `Connector`. Applies to v1 and v2 authorities; a v3 `Authority` is not scoped by `Kind`.                                                 |
| `Attributes`         | `Attributes` defined by the `Connector` implementation. For v1 and v2 authorities the definitions depend on the selected `Kind`; for a v3 `Authority` the `Connector` supplies one set of definitions. |

### `Authority Provider`

- One `Connector` can serve for more than one `Authority`.
- Inputs for the `Connector` to determine the CA are captured and stored in the `Authority`.
- A v3 `Authority` keeps no state on the `Connector` side — the platform stores the `Attributes` and sends them with every operation. A v1 or v2 `Authority` has a counterpart authority instance created in the `Connector` that the platform references.

For more information, refer to the [Authority Provider v2](../../connectors/provider-interfaces/authority-provider-v2.md) and [Authority Provider v3](../../connectors/provider-interfaces/authority-provider-v3.md) descriptions.

### `RA Profile`

`RA Profile` is created on top of the `Authority`. For more information, refer to [RA Profile](./ra-profile.md).
