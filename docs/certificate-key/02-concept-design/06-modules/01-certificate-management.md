# Certificate Management

Platform offers the certificate management operations.

:::info
All the certificate management operations in the platform are achieved through the `RA Profile`. To perform any action on a `Certificate`, the `Certificate` must be bound to an `RA Profile`. See [`RA Profile`](../core-components/ra-profile) for more information.
:::

Operations on `Certificate` includes:

- [Issuing](#issueCert)
- [Revocation](#revokeCert)
- [Renewal](#renewCert)
- [Rekey](#rekeyCert)

### Issuing \{#issueCert}

Any new `Certificate` can be issued through the `RA Profile`. Since `RA Profile` binds the `Certificate` with `Authority`, it has the information on which `Connector` to use. In addition to that, `RA Profile` also holds the `Attributes` required by the CA technology to issue `Certificate`.

With defined `RA Profile`, the `Client` will need only the following data to request `Certificate`:

- `RA Profile` Name
- based on key source
  - *external* - CSR (Certificate Signing Request)
  - *existing key* - token profile, its key and belonging request and signature attributes
- `Attributes` for issuing, if needed by the `Connector` implementation

Upon successful issuing of the `Certificate`, it will be parsed, validated, and stored in the `Certificate Inventory`.

### Revocation \{#revokeCert}

The `Certificate` can be revoked through its binding with `RA Profile`. The following information is needed to revoke the `Certificate`:

- Revocation reason

Once the reason for the revocation is specified, the platform communicates with the CA through `RA Profile` and revokes the `Certificate`. Information is update in the `Certificate Inventory`.

### Renewal \{#renewCert}

To renew `Certificate`, information currently available in the `Certificate Inventory` is used. Therefore, the `Client` need to provide only new certification signing request or otherwise information about key belonging to certificate will be used.

:::note
Only the `Certificate` that is bound to `RA Profile` can be renewed.
:::

### Rekey \{#rekeyCert}

This operation is used in case it is necessary to change key that was used for issuance of original certificate because of various reasons.

Data that need to be provided are same as for issuing certificate with a condition that different key needs to be used.
