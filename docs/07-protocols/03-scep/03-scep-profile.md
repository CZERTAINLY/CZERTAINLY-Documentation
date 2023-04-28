# SCEP Profile

`SCEP Profile` specifies the configurations of the SCEP server behaviour. 
 It holds the configuration listed below:

| Configuration                                  | Purpose                                                                              | Default Value        | Mandatory                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------- | --------------------------------------------- |
| **Name**                                           | `SCEP Profile` Name                                                                  |                      | <span class="badge badge--success">Yes</span> |
| **Description**                                    | Description of the `SCEP Profile`                                                   | `None`               | <span class="badge badge--danger">No</span>   |
| **Challenge Password**                           | Challenge Password to be presented by the SCEP Client                                 | `None`               | <span class="badge badge--danger">No</span>   |
| **Renewal Threshold**                                    | No.Of days before the certificate expiry to allow for renewal                                        | `Half Life of Certificate`               | <span class="badge badge--danger">No</span>   |
| **Require Manual Approval**                                | Manual Approval is required before issuing the certificate                                   | `false` | <span class="badge badge--danger">No</span>   |
| **Include CA Certificate**                              | Include CA Certificate in the SCEP Response                                               | `false`                 | <span class="badge badge--danger">No</span>   |
| **Include CA Certificate Chain**                                 | Include CA Certificate chain in the SCEP response                                    | `false`                 | <span class="badge badge--danger">No</span>   |
| **CA Certificate**                                       | Certificate to be used as SCEP CA Certificate                                                                       | `None`           | <span class="badge badge--danger">Yes</span>   |
| **RA Profile**                                     | `RA Profile` that will be set as default for this `SCEP Profile`                | `None`               | <span class="badge badge--danger">No</span>   |
| **Intune Tenant**                                     | Microsoft Intune Tenant to be used for CSR Validation             | `None`               | <span class="badge badge--danger">No</span>   |
| **Intune Application ID**                                 | ID of the Microsoft Intune Application                | `None`               | <span class="badge badge--danger">No</span>   |
| **Intune Application Key**                                     | Secret to authenticate with the Intune application                | `None`               | <span class="badge badge--danger">No</span>   |

By default `SCEP Profiles` will be created without any default `RA Profile`, if not selected any.

:::info
The CA Certificate to be used for the SCEP Profile should meet the following criteria

1. Certificate should have associated private key in CZERTAINLY
2. The key algorithm should be RSA or ECDSA
3. Incase of RSA
   1. The Private key should have Decrypt and Sign assigned in key usages
   2. The Public Key should have Encrypt and Verify assigned in key usages
4. Incase of ECDSA
   1. The Private Key should have Sign assigned in key usages
   2. The Public Key should have Verify assigned in key usages
:::

### Attributes for certificate management

If a default `RA Profile` is selected then `Attributes` to issue certificates and revoke certificates must be configured, if needed.

:::caution
Certificate management `Attributes` for `SCEP Profile` are used during certificate issuance and cannot be changed by the SCEP client.
:::

### Operations on `SCEP Profile`

The following operations can be performed on the `SCEP Profile`:

| Operation | Description |
| --------- | ----------- |
| **Create** | Create a new `SCEP Profile`. Create `SCEP Profile` is disabled by default |
| **Update**   | Update configuration of already created `SCEP Profile` |
| **Delete**   | Delete existing `SCEP Profile` |
| **Disable**   | Disable `SCEP Profile`. All request to disabled `SCEP Profile` will be rejected |
| **Enable**   | Enable `SCEP Profile`|

:::info
`SCEP Profile` should be in enabled state for the clients to use it. If the `SCEP Profile` is disabled, the server throws error that the profile is not enabled and cannot process any requests.
:::
