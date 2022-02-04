# ACME Profiles

This section of the document describes the `ACME Profile`. It holds the configuration listed below

| Configuration                                  | Purpose                                                                              | Default Value        | Mandatory                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------- | --------------------------------------------- |
| Name                                           | `ACME Profile` Name                                                                  |                      | <span class="badge badge--success">Yes</span> |
| Description                                    | Description of the `ACME Profile `                                                   | `None`               | <span class="badge badge--danger">No</span>   |
| Terms of Service URL                           | URL for the Terms of Service the client has to agree                                 | `None`               | <span class="badge badge--danger">No</span>   |
| Website URL                                    | Website URL containing additional information                                        | `None`               | <span class="badge badge--danger">No</span>   |
| DNS Resolver IP                                | IP of the DNS Resolver if a custom dns is required                                   | `System default DNS` | <span class="badge badge--danger">No</span>   |
| DNS Resolver Port                              | Port of the DNS Resolver                                                             | `53`                 | <span class="badge badge--danger">No</span>   |
| Retry Interval                                 | Retry Interval to set in the `Retry-After` header                                    | `30`                 | <span class="badge badge--danger">No</span>   |
| validity                                       | Order Validity                                                                       | `10 Hours`           | <span class="badge badge--danger">No</span>   |
| Disable new Order (Change in Terms of Service) | Disable new Order requests until the new terms are agreed                            | `false`              | <span class="badge badge--danger">No</span>   |
| Changes in Terms of Service URL                | New Terms of Service URL that will be set if the Disable new Order is set to true    | `None`               | <span class="badge badge--danger">No</span>   |
| Require Contacts for new Accounts              | Field representing if the contacts are required for registering a new account        | `false`              | <span class="badge badge--danger">No</span>   |
| Require agree to Terms of Service              | Field representing if the Terms of Service should be agreed for new account creation | `false`              | <span class="badge badge--danger">No</span>   |
| RA Profile                                     | RA Profile that will be set as default profile for this ACME Profile                 | `None`               | <span class="badge badge--danger">No</span>   |

By default `ACME Profiles` will be created without any default RA Profile, if not selected.

### Attributes

If a default `RA Profile` is selected then the server will fetch the list of attributes for

- New Certificate Issuance
- Certificate Revocation

These will then be stored and used when a new order for a certificate is placed.

### Operations

The following operations can be performed on the `ACME Profile`

- Enable
- Disable
- Create
- Update
- Delete

:::info
`ACME Profile` should be in enabled state for the clients to use ACME. If the profile is disabled, the server throws error that the profile is not enabled
:::
