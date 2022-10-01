# Compliance Profile

## What is `Compliance Profile`?

`Compliance Profile` is a representation of `Rules` and `Groups` that collectively provides a way to check if the `Certificates` follows the organizational standards. They describe if a `Certificate` is compliant with the organizational standards.

### Characteristics

Characteristics of `Compliance Profile` are:

- Contains the list of `Rules` and `Groups` that are used to check the compliance of the `Certificate`
- Contains `Rules` and `Groups` from multiple `Compliance Providers`
- Stores the attributes for the rules if any
- `Compliance Profiles` are tagged with `RA Profiles` to determine the compliance of the `Certificate`
- When a new certificate is added, if it has an `RA Profile` then the compliance check is automatically initiated.

### Objects 

Objects that are associated with the `Compliance Profile` are:

| Object  | Purpose                                                                                                                                                                                                                                                                 |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Rule`  | The `rule` that is used to check the compliance of the `Certificate`. `Rules` contains specific logic that will apply it to the certificate. If the rule is satisfied, then the certificate is marked as `Compliant`. Else the certificate is marked as `Non Compliant` |
| `Group` | The `group` of `rules` that are used to check the compliance of the certificate. The groups are the logical grouping of the `rules` provided by the `Compliance Provider`. A `rule` may or may not be a part of the `Group`                                             |