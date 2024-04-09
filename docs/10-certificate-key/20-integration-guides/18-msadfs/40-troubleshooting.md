# Troubleshooting

## Keycloak

To troubleshoot Keycloak you need to enable DEBUG for `org.keycloak.saml` and `org.keycloak.broker.saml`. To do so, set environment variable `KC_LOG_LEVEL` to value `INFO,org.keycloak.saml:DEBUG,org.keycloak.broker.saml:DEBUG` before Keycloak starts. With those settings, Keycloak will log complete Assertin which you are going to need in case MS AD FS is not sending some attributes.

## MS AD FS

AD FS is a standard Windows component, it's logs are available in `Even Viewer` under `Applications and Services Logs` -> `AD FS`.

## CZERAINLY

In CZERTAINLY you need to set `KONG_LOG_LEVEL` to `debug` value. With debug value Kong will log access tokens in JSON format:

```JSON
{
  "jti": "388439a9-72a1-4eb2-be37-0e0d89d71049",
  "auth_time": 1712665283,
  "given_name": "Jan",
  "family_name": "Tomasek",
  "email": "some.user@example.com",
  "acr": "1",
  "session_state": "cd740fda-dea5-4a91-8cc8-fbe4c4c957ec",
  "roles": [
    "admins",
    "users",
    "managers"
  ],
  "iss": "https://czertainly.example.com/kc/realms/CZERTAINLY",
  "aud": "kong",
  "iat": 1712665284,
  "azp": "kong",
  "at_hash": "5s3DYMIPAxf5-GIwRJGdtA",
  "sub": "eff98879-4e25-4255-abbf-b6c5d77cb6ad",
  "sid": "cd740fda-dea5-4a91-8cc8-fbe4c4c957ec",
  "email_verified": false,
  "exp": 1712665584,
  "typ": "ID",
  "nonce": "d51bca31432cb728afe3ac0924a4bfdd",
  "name": "Jan Tomasek",
  "preferred_username": "3key\\semik"
}
```

This way you can verify that CZERTAINLY is receiving all needed pieces of information from AD FS throughout Keycloak.