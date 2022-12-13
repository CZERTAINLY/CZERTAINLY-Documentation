# Constraints

This section of the document describes about the usages of `Constraints` for the `Attributes`. `Constraints` are the validators or conditional rules that can be applied to the `AttributesContent` to control and validate the user inputs.

All `Constraints` are extended from the base class of [`BaseAttributeConstraint`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/BaseAttributeConstraint.java) which is abstracted from [`AttributeConstraint`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/AttributeConstraint.java)

## `BaseAttributeConstraint` Properties

The table below describes the properties of the `BaseAttributeConstraint` class.

| Property Name | Description                                                   | Type                                                                                                                                                                                              | Required                                      |
| ------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| description   | Description of the constraint                                 | String                                                                                                                                                                                            | <span class="badge badge--danger">No</span>   |
| errorMessage  | Error message to be displayed when the constraint is violated | String                                                                                                                                                                                            | <span class="badge badge--danger">No</span>   |
| type          | Type of the constraint                                        | [`AttributeConstraintType`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/AttributeConstraintType.java) | <span class="badge badge--success">Yes</span> |
| data          | Data to be used for the constraint                            | [`AttributeConstraint`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/AttributeConstraint.java)         | <span class="badge badge--success">Yes</span> |
## `Constraints` Types

Based on the type of the `AttributeContent` to which the validation can be applied, the `Constraints` are of the following types:

| Constraint type | Description                                                                                                                                                                                                                                                          | Class                                                                                                                                                                                                     |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `REGEXP`        | Regular expression validation. Accepts String data for the `data` field                                                                                                                                                                                              | [`RegexpAttributeConstraint`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/RegexpAttributeConstraint.java)     |
| `RANGE`         | Range validation. Accepts [`RangeAttributeConstraintData`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/data/RangeAttributeConstraintData.java) data for the `data` field | [`RangeAttributeConstraint`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/RangeAttributeConstraint.java)       |
| `DATETIME`      | Date time validation. Accepts [`DateTimeAttributeConstraintData`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/data/DateTimeAttributeConstraintData.java)                 | [`DateTimeAttributeConstraint`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/DateTimeAttributeConstraint.java) |

:::note
See [`AttributeConstraintType`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/AttributeConstraintType.java) for more information about the interface.
:::

## `RegExpAttributeConstraint`

Use this constraint when the when the value needs to be validated against a regular expression. The `data` field of the `RegexpAttributeConstraint` should be a `String` value.

### Example

```json
{
    "description": "Alphanumeric Regex Constraint",
    "errorMessage": "Only alphanumeric characters are allowed",
    "type": "RegExp",
    "data": "^[a-zA-Z0-9]*$"
}
```

### Sample Code
    
```java
AttributeConstraint constraint = new RegexpAttributeConstraint()
constraint.setDescription("Alphanumeric Regex Constraint")
constraint.setErrorMessage("Only alphanumeric characters are allowed")
constraint.setData("^[a-zA-Z0-9]*$");
constraint.setType(AttributeConstraintType.REGEXP);
```

## `RangeAttributeConstraint`

Use this constraint when the when the value needs to be validated against a range. The constraint validates if the value is within the range provided and throws error when it is not.

:::warning
The `RangeAttributeConstraint` is applicable only for the `AttributeContentType` of type `INTEGER`.
:::

### `RangeAttributeConstraintData` Properties

The table below describes the properties of the `RangeAttributeConstraintData` class.

| Property Name | Description                | Type    | Required                                    |
| ------------- | -------------------------- | ------- | ------------------------------------------- |
| from          | Minimum value of the range | Integer | <span class="badge badge--danger">No</span> |
| to            | Maximum value of the range | Integer | <span class="badge badge--danger">No</span> |

### Example

```json
{
    "description": "Range Constraint",
    "errorMessage": "Value should be between 1 and 10",
    "type": "range",
    "data": {
        "from": 1,
        "to": 10
    }
}
```

### Sample Code
    
```java

RangeAttributeConstraintData data = new RangeAttributeConstraintData();
data.setFrom(1);
data.setTo(10);

RangeAttributeConstraint constraint = new RangeAttributeConstraint();
constraint.setDescription("Range Constraint");
constraint.setErrorMessage("Value should be between 1 and 10");
constraint.setData(data);
constraint.setType(AttributeConstraintType.RANGE);
```

## `DateTimeAttributeConstraint`

`DateTimeAttributeConstraint` is used to validate the date time values. The `data` field of the `DateTimeAttributeConstraint` should be a [`DateTimeAttributeConstraintData`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/develop/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/DateTimeAttributeConstraint.java) object.

### `DateTimeAttributeConstraintData` Properties

The table below describes the properties of the `DateTimeAttributeConstraintData` class.

| Property Name | Description                          | Type     | Required                                    |
| ------------- | ------------------------------------ | -------- | ------------------------------------------- |
| from          | Start of the datetime for validation | DateTime | <span class="badge badge--danger">No</span> |
| to            | End of the datetime for validation   | DateTime | <span class="badge badge--danger">No</span> |


### Example

```json
{
    "description": "Date Time Constraint",
    "errorMessage": "Value should be between 1 and 10",
    "type": "datetime",
    "data": {
        "from": "2020-01-01T00:00:00.000Z",
        "to": "2020-12-31T00:00:00.000Z"
    }
}
```

### Sample Code
    
```java

DateTimeAttributeConstraintData data = new DateTimeAttributeConstraintData();
data.setFrom(LocalDateTime.now());
data.setTo(LocalDateTime.of(2023, Month.JULY, 29, 19, 30, 40));

DateTimeAttributeConstraint constraint = new DateTimeAttributeConstraint();
constraint.setDescription("Date Time Constraint");
constraint.setErrorMessage("Value should be between the provided range");
constraint.setData(data);
constraint.setType(AttributeConstraintType.DATETIME);
```

