# Identification

Each user is identified by one of the supported methods listed below:
- X.509 certificate
- JSON ID

Identification is performed by the [CZERTAINLY Authorization Service](https://github.com/3KeyCompany/CZERTAINLY-Auth).

## X.509 certificate

User can be identified based on X.509 certificate representing the digital identity.
Typically, the X.509 certificate of authenticated user is provided as Base64-encoded value in the header.

An example of the user identity provided as X.509 certificate:
```
X-APP-CERTIFICATE=MIIE/TCCAuWgAwIBAgIUPCqjU2t+JmCd9j/47eIc8DnaBJ0wDQYJKoZIhvcNAQENBQAwOzEbMBkGA1UEAwwSRGVtbyBTZXJ2ZXIgU3ViIENBMRwwGgYDVQQKDBMzS2V5IENvbXBhbnkgcy5yLm8uMB4XDTIyMTAxMjA5MTg0M1oXDTIyMTAxMjIxMTg0MlowDjEMMAoGA1UEAwwDeDExMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx3yEn1ivUp4etk3kdNrRXNP5PeIpTYobGj4lQrW57rsj9hhOhY/SwaeCu6sYPVvYIXPWnlc4tTafjcen/8Ikc7pY2NuzD0HaIAOujblcMKT2KAKA/OU+RrI2o/swU9UmEQ2wYveNYCGobimt/foURrB9opeDCx3pFXkddYsXAziaWu3AQIF5gIf/b+r7hYRIXh8V/u01t6FCnpBWCtdmYVrJ5e8KZw0yqptNpgDK1plu+8AR5tviP/vgrpBquwzNsVREsnRZJxOM6rXq9rG5scoqO+gxdsm6+EqfRiGiBvcaIr+Zpv81ryfiABLdixvyhoZ//3o8rAU0O7Pjm7HTxwIDAQABo4IBJDCCASAwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBQb/FXk1AOCzd40P27IA82xTCrutTBQBggrBgEFBQcBAQREMEIwQAYIKwYBBQUHMAKGNGh0dHA6Ly9wa2kuM2tleS5jb21wYW55L2Nhcy9kZW1vL2RlbW9zZXJ2ZXJzdWJjYS5jcnQwEQYDVR0gBAowCDAGBgRVHSAAMBMGA1UdJQQMMAoGCCsGAQUFBwMBMEYGA1UdHwQ/MD0wO6A5oDeGNWh0dHA6Ly9wa2kuM2tleS5jb21wYW55L2NybHMvZGVtby9kZW1vc2VydmVyc3ViY2EuY3JsMB0GA1UdDgQWBBQzGoVZucmxb0IrrAWE2oPxrcEOojAOBgNVHQ8BAf8EBAMCBaAwDQYJKoZIhvcNAQENBQADggIBAN+hsAdianf+76orB/KwNDLIE36XOai6Z5/9VHmgWKHmVqdBYf8RU/Pdd8NcCULIy8bDI67H7BhPbciRcFfHn7rkWNNz1LCvnxxEzfj20A0WGuPC4oQTnU7QpPJr6tru7d6rLsbJPCRYBhEw6soLRzmWWAy5P+RoONWJCw6fv+2o8xwsX7jGYkwYmmdu4sr8+f5hREyfLXt6z4CZCue1/gcOrS+fKzaXLAJ/2pVCqcKIKn+oUW8LtnB2R8jJe08KbXZwnlTTmaTCMT/k5tAWE34VnpCaMJPRR7gMeOTSiV73kfLpKGnSTFLaZr05hvaMBUzP1nZSmZOyMOFrZSZSH+tE8zK098UhXiNTKSFywbN5HfNV+YLMuG9sMU25xBB4pvx/iXcH3e3o6JmFBTjJeKVCgljhWgPalb52kA1YdN9sE0DLBBX+UVjT0W7+JkKOvEwo3VqLUZqavwfkfjHEx3Dlzx0Q4m8N2XCGkHe1tRz1McKbn2RCJk3sgZoe9fANK68L+d4CM3A31qbjgYkhJ0geDSS797CEpD8UK3NWYx/ssad45SU20Axq3BkSTpjS9eG1QPwR1YX0CywyTwbceNw6PvWNC28VLjverXi9beT1dbZ7HKHNap768cT5TTGViWEBFnuueIVNsBGSDNV3Qtba94HGKHuGNJpYvkMas4JZ
```

:::caution
The user must exist and must be associated with the X.509 certificate to be successfully identified and authenticated.
:::

## JSON ID

User can be identified using JSON format.

JSON ID has the following format of fields:

| Item          | Data type | Description                                                   | Required                                      | 
|---------------|-----------|---------------------------------------------------------------|-----------------------------------------------|
| `sub`         | `string`  | Unique identification of the user in the external system      | <span class="badge badge--success">YES</span> |
| `username`    | `string`  | Username of the user, username must be unique in the platform | <span class="badge badge--success">YES</span> |
| `given_name`  | `string`  | Given name of the user                                        | <span class="badge badge--danger">NO</span>   |
| `family_name` | `string`  | Family name of the user                                       | <span class="badge badge--danger">NO</span>   |
| `email`       | `string`  | Email associated with the user                                | <span class="badge badge--danger">NO</span>   |
| `roles`       | `string`  | Roles associated with the user                                | <span class="badge badge--danger">NO</span>   |

The JSON ID is typically provided in the header as Base64-encoded data.

An example of the user identity provided as JSON token:
```json
{
  "sub": "2d73cf2a-5339-421e-81cd-8fa0d25a100b",
  "username": "test",
  "roles": "test-role",
  "given_name": "Test",
  "family_name": "Test",
  "email": "test@test.com"
}

# Base64-encoded
X-USERINFO=ewogICJzdWIiOiAiMmQ3M2NmMmEtNTMzOS00MjFlLTgxY2QtOGZhMGQyNWExMDBiIiwKICAidXNlcm5hbWUiOiAidGVzdCIsCiAgInJvbGVzIjogInRlc3Qtcm9sZSIsCiAgImdpdmVuX25hbWUiOiAiVGVzdCIsCiAgImZhbWlseV9uYW1lIjogIlRlc3QiLAogICJlbWFpbCI6ICJ0ZXN0QHRlc3QuY29tIgp9
```

:::caution
External authentication servers is responsible to provide consistent JSON ID that is used for identification of the user. [Keycloak](https://www.keycloak.org/) is one of the tested authentication servers.
:::

## Identification order

When identifying user, the following order is applied:
1. X.509 certificate
2. JSON token

When none of the identification methods is successful, user is considered to be **anonymous** (unidentified).