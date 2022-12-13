# Properties

This section of the document describes the list of all available properties for the `Attributes` and their applicability.


| Property name | Short description                                                                                                                                                                                      | Required |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`       | Friendly name of the `Attribute` that can be used for human reading.                                                                                                                                   |
| `required`    | Boolean determining if the `Attribute` is required. If true, the `Attribute` must provide its value in the `content` property.                                                                         |
| `readOnly`    | Boolean determining if the `Attribute` is read only and its `content` value cannot be changed.                                                                                                         |
| `visible`     | Boolean determining if the `Attribute` is visible and can be displayed, otherwise it should be hidden, used as a helper.                                                                               |
| `list`        | Boolean determining if the `Attribute` contains list of values in the `content`.                                                                                                                       |
| `multiSelect` | Boolean determining if the `Attribute` can have multiple values in the `content` property which is represented as a list.                                                                              |
| `group`       | Group of the `Attribute`, used for the logical grouping of multiple `Attributes`. The grouping is used for better orientation if many `Attributes` are used, it does not have impact on the `content`. |
| `global`      | Boolean determining if the `Attribute` is a global metadata.                                                                                                                                           |


## Properties and Attributes

> Here should be simple applicability matrix for properties and attributes

- <span class="badge badge--success" size="s"></span> - the property is required for the `Attribute` type
- <span class="badge badge--danger"></span> - the property is optional for the `Attribute` type
- <span class="badge badge--secondary"></span> - the property is not applicable for the `Attribute` type

| Property name / Attribute type | `DataAttribute`                            | `InfoAttribute`                           | `GroupAttribute`                             | `MetaAttribute`                              | `CustomAttribute`                            |
| ------------------------------ | ------------------------------------------ | ----------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `label`                        | <span class="badge badge--success" size="s"></span> | <span class="badge badge--success"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--success"></span> | <span class="badge badge--success"></span> |
| `visible`                     | <span class="badge badge--success"></span> | <span class="badge badge--success"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--success"></span> | <span class="badge badge--success"></span> |
| `group`                     | <span class="badge badge--danger"></span> | <span class="badge badge--danger"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--danger"></span> | <span class="badge badge--danger"></span> |
| `required`                     | <span class="badge badge--success"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--success"></span> |
| `readOnly`                     | <span class="badge badge--success"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--success"></span> |
| `list`                     | <span class="badge badge--success"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--success"></span> |
| `multiSelect`                     | <span class="badge badge--success"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--success"></span> |
| `global`                     | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> | <span class="badge badge--secondary"></span> |