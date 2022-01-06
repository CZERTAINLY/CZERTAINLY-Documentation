# Certificate

The `Certificate` holds the information about the certificate and its lifecycle. It represents the certificate in a human-readable format. `Certificate` holds the following information of any certificate,

- Human understandable parsed certificate content
- Base64 certificate content
- Certificate validation Status
- Metadata including discovery information

In addition to the above details, the following are mapped to the `Certificate` for the ease of management,

- Certificate owner
- Binding `RA Profile`
- `Entity`
- `Group` it belongs to

## Validation

### Validation steps

- Validation Step 1: Construct the Chain and Validate Signatures
Up to trusted certificates in the truststore.
The whole chain must be valid, otherwise the certificate is considered to be invalid.

- Validation Step 2: Check Validity Dates, Policy and Key Usage
Check the `notBefore` and `notAfter` dates (in the whole chain).

- Validation Step 3: Consult Revocation Authorities
If OCSP is available, then do the OCSP check.
Otherwise, fallback to CRL check.
If no revocation information source is available, show the status of certificate with the information that the revocation was not checked, was not available, or related reason.

### Validation types

Each `Certificate` is validated against various attributes and validation sources and its validation status is provided.

The following validation are performed for `Certificate`:

| #   | Validation            | Description                                                                    | Status                                                                                                                                                                                                             |
| --- | --------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Signature validation | Check the signature of `Certificate` using public key of the issuer certificate. | <span class="badge badge--success">VALID</span> if verification success.<br/><span class="badge badge--danger">INVALID</span> if verification fails.                                                                                                                                   |
| 2   | `notBefore` validation | Check for `notBefore` attribute of the certificate.                       | <span class="badge badge--secondary">INACTIVE</span> in case the `notBefore` >= current date.<br/><span class="badge badge--success">VALID</span> if `notBefore` < current date.                                                                                                           |
| 3   | `notAfter` validation | Check for `notAfter` attribute of the certificate.                        | <span class="badge badge--warning">EXPIRED</span> in case the `notAfter` <= current date.<br/><span class="badge badge--success">VALID</span> if `notAfter` > current date.                                                                                       |
| 4   | OCSP check      | Check status using OCSP URL available in the certificate extension `AuthorityInformationAccess`.                      | <span class="badge badge--success">VALID</span> if OCSP returns `good`.<br/><span class="badge badge--secondary">UNKNOWN</span> if the OCSP response is `unknown`.<br/><span class="badge badge--danger">REVOKED</span> if the OCSP return `revoked`.<br/><span class="badge badge--secondary">NOOCSP</span> in case there is no OCSP responder available for revocation checking.        |
| 5   | CRL check       | Check status using CRL USL available in the certificate attribute `CRLDistributionPoints`.                    | <span class="badge badge--success">VALID</span> in case CRL is available, valid, and the certificate is not on the list.<br/><span class="badge badge--danger">REVOKED</span> in case CRL is available, valid, and the certificate is on the list.<br/><span class="badge badge--secondary">NOCRL</span> in case there is no CRL available for revocation checking. |

The above is true for a single `Certificate`, but all certificates in the certificate chain are validated the same way.

### Validation algorithm

To get the overall validation result, the following algorithm is applied:

- If the `Certificate` signature validation outputs <span class="badge badge--danger">INVALID</span> then return <span class="badge badge--danger">INVALID</span>.
- Else if the validity time of the Certificate is <span class="badge badge--secondary">INACTIVE</span> or <span class="badge badge--warning">EXPIRED</span> then return this status.
- Else check OCSP and CRL status.
- If <span class="badge badge--secondary">NOOCSP</span> and <span class="badge badge--secondary">NOCRL</span> return <span class="badge badge--success">VALID</span>

### Certificate Path Validation rules

All the certificates in the certificate path must be validated.
Exception is a Root CA certificate, as it is self-signed, there is no trusted way how to validate it, it must be explicitly trusted.
The same validation rules applies for each certificate up to the Root CA certificate.
The overall result of validation is the result of validation from the bottom to top.

:::info Certificate chain
When a certificate chain is not available for a `Certificate`, the platform tries to download the certificate chain from the Authority Information Access (AIA) extension. If found, the chain is downloaded until the root is available and the validation will be performed. if the complete certificate chain is not available, the validation is performed only using available certificates.
:::

:::info Self-signed Certificate
For self-signed certificates, OCSP, CRL checks will not be performed.
:::

## Attributes

`Certificate` attributes hold information related to the platform. Once a certificate request is submitted platform creates the `Certificate` with a specific identification, defines certificate type, and assigns validity status. `Certificate` attributes also include connection to the other part of platform components.

## Metadata

Metadata provides any additional information about the `Certificate` that can be technology specific.
Metadata can be used for further processing of the `Certificate` by different components and modules of the platform.