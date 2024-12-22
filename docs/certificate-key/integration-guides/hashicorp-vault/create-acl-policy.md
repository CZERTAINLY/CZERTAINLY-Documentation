---
sidebar_position: 5
---

# Create ACL Policy

Vault policies are used to define a set of permissions for a path in the secrets engine. Policies are written in HashiCorp Configuration Language (HCL) and define a set of capabilities that are allowed on a given path.

For more information about the Vault policies, refer to the [Vault policies documentation](https://www.vaultproject.io/docs/concepts/policies).

## PKI secrets engine ACL policy

This following policy assumes the PKI secrets engine is enabled at the `/pki` path in Vault. Since it is possible to enable secrets engines at any location, the policy should be adjusted accordingly:

```hcl title="czertainly-policy.hcl"
# Allow to list pki issuers
path "pki/issuers" {
  	capabilities = ["list"]
}

# Allow to list available pki roles
path "pki/roles" {
  	capabilities = ["list"]
}

# Allow to read configuration of pki roles
path "pki/roles/*" {
  	capabilities = ["read"]
}

# Allow to list certificates issued
path "pki/certs" {
  	capabilities = ["list"]
}

# Allow signing of certificates for all roles
path "pki/sign/*" {
  	capabilities = ["create", "update"]
}

# Allow to revoke certificate
path "pki/revoke" {
  	capabilities = ["update"]
}
```

This policy assumes access to all roles that are configured in the PKI secrets engine. If you want to restrict access to specific roles, adjust the policy accordingly.

## Create `czertainly` policy

Create a new policy named `czertainly` with the permissions defined in the [`czertainly-policy.hcl`](#pki-secrets-engine-acl-policy):

```shell
$ vault policy write czertainly czertainly-policy.hcl
Success! Uploaded policy: admin
```

For more information on how to create and manage policies, refer to the [Vault policies](https://developer.hashicorp.com/vault/tutorials/policies/policies).
