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
