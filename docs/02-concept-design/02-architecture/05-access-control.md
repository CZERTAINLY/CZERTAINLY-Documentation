# Access Control

Access control is a fundamental for every platform.

CZERTAINLY decouples the authentication and authorization process and therefore provides flexibility in terms of configuration access control rules.

Platform accepts authenticated users and based on the identification assigns permissions defined by the role.

## Authentication

Authentication to the platform is externalized using the API gateway or other mechanisms.
Platform expects to get authenticated user data, meaning that the authentication was already performed by the authorization server (external IAM, or the identity can be terminated by the mTLS).

The identity of authenticated user can be provided in one of the following forms:

### X.509 certificate

In this case, the mTLS is terminated before accessing the platform and user's identity is provided in the header as Base64-encoded X.509 certificate.

An example of the user identity provided as X.509 certificate:
```
X-APP-CERTIFICATE=MIIE/TCCAuWgAwIBAgIUPCqjU2t+JmCd9j/47eIc8DnaBJ0wDQYJKoZIhvcNAQENBQAwOzEbMBkGA1UEAwwSRGVtbyBTZXJ2ZXIgU3ViIENBMRwwGgYDVQQKDBMzS2V5IENvbXBhbnkgcy5yLm8uMB4XDTIyMTAxMjA5MTg0M1oXDTIyMTAxMjIxMTg0MlowDjEMMAoGA1UEAwwDeDExMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx3yEn1ivUp4etk3kdNrRXNP5PeIpTYobGj4lQrW57rsj9hhOhY/SwaeCu6sYPVvYIXPWnlc4tTafjcen/8Ikc7pY2NuzD0HaIAOujblcMKT2KAKA/OU+RrI2o/swU9UmEQ2wYveNYCGobimt/foURrB9opeDCx3pFXkddYsXAziaWu3AQIF5gIf/b+r7hYRIXh8V/u01t6FCnpBWCtdmYVrJ5e8KZw0yqptNpgDK1plu+8AR5tviP/vgrpBquwzNsVREsnRZJxOM6rXq9rG5scoqO+gxdsm6+EqfRiGiBvcaIr+Zpv81ryfiABLdixvyhoZ//3o8rAU0O7Pjm7HTxwIDAQABo4IBJDCCASAwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBQb/FXk1AOCzd40P27IA82xTCrutTBQBggrBgEFBQcBAQREMEIwQAYIKwYBBQUHMAKGNGh0dHA6Ly9wa2kuM2tleS5jb21wYW55L2Nhcy9kZW1vL2RlbW9zZXJ2ZXJzdWJjYS5jcnQwEQYDVR0gBAowCDAGBgRVHSAAMBMGA1UdJQQMMAoGCCsGAQUFBwMBMEYGA1UdHwQ/MD0wO6A5oDeGNWh0dHA6Ly9wa2kuM2tleS5jb21wYW55L2NybHMvZGVtby9kZW1vc2VydmVyc3ViY2EuY3JsMB0GA1UdDgQWBBQzGoVZucmxb0IrrAWE2oPxrcEOojAOBgNVHQ8BAf8EBAMCBaAwDQYJKoZIhvcNAQENBQADggIBAN+hsAdianf+76orB/KwNDLIE36XOai6Z5/9VHmgWKHmVqdBYf8RU/Pdd8NcCULIy8bDI67H7BhPbciRcFfHn7rkWNNz1LCvnxxEzfj20A0WGuPC4oQTnU7QpPJr6tru7d6rLsbJPCRYBhEw6soLRzmWWAy5P+RoONWJCw6fv+2o8xwsX7jGYkwYmmdu4sr8+f5hREyfLXt6z4CZCue1/gcOrS+fKzaXLAJ/2pVCqcKIKn+oUW8LtnB2R8jJe08KbXZwnlTTmaTCMT/k5tAWE34VnpCaMJPRR7gMeOTSiV73kfLpKGnSTFLaZr05hvaMBUzP1nZSmZOyMOFrZSZSH+tE8zK098UhXiNTKSFywbN5HfNV+YLMuG9sMU25xBB4pvx/iXcH3e3o6JmFBTjJeKVCgljhWgPalb52kA1YdN9sE0DLBBX+UVjT0W7+JkKOvEwo3VqLUZqavwfkfjHEx3Dlzx0Q4m8N2XCGkHe1tRz1McKbn2RCJk3sgZoe9fANK68L+d4CM3A31qbjgYkhJ0geDSS797CEpD8UK3NWYx/ssad45SU20Axq3BkSTpjS9eG1QPwR1YX0CywyTwbceNw6PvWNC28VLjverXi9beT1dbZ7HKHNap768cT5TTGViWEBFnuueIVNsBGSDNV3Qtba94HGKHuGNJpYvkMas4JZ
```

:::caution
The user must exist and must be associated with the X.509 certificate to be successfully identified and authorized.
:::

### JSON token

User can be authenticated by external authorization server. In such case, the platform expects to get the JSON token of authenticated user.
JSON token should contain the following data:

| Item        | Data type | Description                                                   | Required                                      | 
|-------------|-----------|---------------------------------------------------------------|-----------------------------------------------|
| `sub`         | `string`    | Unique identification of the user in the external system      | <span class="badge badge--success">YES</span> |
| `username`    | `string`    | Username of the user, username must be unique in the platform | <span class="badge badge--success">YES</span> |
| `given_name`  | `string`    | Given name of the user                                        | <span class="badge badge--danger">NO</span>   |
| `family_name` | `string`    | Family name of the user                                       | <span class="badge badge--danger">NO</span>   |
| `email`       | `string`    | Email associated with the user                                | <span class="badge badge--danger">NO</span>   |
| `roles`       | `string`    | Roles associated with the user                                | <span class="badge badge--danger">NO</span>   |

The JSON toen is provided in the header as Base64-encoded data.

An example of the user identity provided as JSON token:
```json
{
  "sub": "2d73cf2a-5339-421e-81cd-8fa0d25a100b",
  "usernam": "test",
  "roles": "test-role",
  "given_name": "Test",
  "family_name": "Test",
  "email": "test@test.com"
}
```

:::info
External authorization servers can be connected with the platform through various protocols, including OIDC and SAML for SSO. The authorization server is responsible to provide consistent JSON token that is used for authorized identification of the user. [Keycloak](https://www.keycloak.org/) is one of the tested authorization server.
:::

### Identification order

When identifying user, the following order is applied:
1. X.509 certificate
2. JSON token

When none of the identification methods is successful, user is considered to be unauthenticated.

## Authorization

Once user is properly identified and authenticated, authorization is provided based on the roles that are assigned to the user.
Role defines set of permissions and actions user assigned to the role can execute. 

### Roles and permissions

Role consists of the set of actions on available resources that can be allowed. All actions are forbidden by default and all resources and objects inherits from this.

### Internal roles

| Role         | Description                                                                                                                                                |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `superadmin` | Highest level of privilege in the platform. `superadmin` has the full permission in the platform.                                                          |
| `acme`       | Internal role that is allowed to manage certificates and related operations that are needed as part of the [ACME](../../protocols/acme/overview) protocol. |

:::caution
`superadmin` has the full permission in the platform. Therefore, it is recommended to use the `superadmin` role only if needed, for example, as a break glass function.
:::
