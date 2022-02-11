# Enable ACME

Before the platform can be used as ACME server, it must be configured.

For the purpose of this guide. we will assume that the ACME protocol should be enabled for the `RA Profile` with name `czertainly` and know UUID `61c7d882-9336-4c9e-b380-8d2fd83f7c26`.

We need to follow simple steps to enable the ACME server:
- Configuration of `ACME Profile`
- Enable ACME protocol for `RA Profile`

The ACME server can be also enabled based on the `ACME Profile` configuration only if you select the default `RA Profile`.

## Configuration of `ACME Profile`

First step is to configure the [`ACME Profile`](acme-profile). It will create an instance of the ACME server with specific attributes that will be used to control the certificate management process and ACME clients will need to follow. You can create as many `ACME Profiles` as you need. Each of them can have a different configuration, validation limits, terms of service, etc.

We do not need to configure default `RA Profile`, we will enable ACME protocol for a specific `RA Profile` with name `czertainly`. Let's do this in `czertainly` `RA Profile` configuration.

We will create `ACME Profile` named `ACME CZERTAINLY Profile` using the [Core ACME API](/api/core-acme/#operation/createAcmeProfile):
```bash
curl -X POST \
  --cacert [ca-cert] \
  --cert [client-cert] \
  --cert-type [type] \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  --data '
  {
    "name": "ACME CZERTAINLY Profile",
    "description": "Sample ACME Profile",
    "termsOfServiceUrl": "https://www.example.com/termsOfService",
    "websiteUrl": "https://www.example.com",
    "dnsResolverIp": "8.8.8.8",
    "dnsResolverPort": "53",
    "retryInterval": 60,
    "validity": 3000,
    "requireContact": true,
    "requireTermsOfService": true
  }' \
  https://[domain]:[port]/api/v1/acmeProfiles
```

When the `ACME Profile` is successfully created, its `uuid` is sent back:
```json
{
  "uuid": "b6be5014-b8f8-4b4f-b96d-a54c38f54b48"
}
```

## Enable ACME protocol for `RA Profile`

Once the `ACME Profile` is ready, we can enable ACME protocol for the `RA Profile` with name `czertainly`. For that purpose, we will use the [`Core RA Profile API`](/api/core-raprofile/#operation/activateAcmeForRaProfile). We will need to configure `Attributes` to issue and revoke certificates, if there are any available and supported in the `RA Profile`. These `Attributes` will be statically attached to all ACME requests that are processed.

You can get the list of `Attributes` using the following APIs:
- [Get issue Attributes](/api/core-raprofile/#operation/listIssueCertificateAttributes)
- [Get revocation Attributes](/api/core-raprofile/#operation/listRevokeCertificateAttributes)

We will enable ACME for `czertainly` `RA Profile`:
```bash
curl -X POST \
  --cacert [ca-cert] \
  --cert [client-cert] \
  --cert-type [type] \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  --data '
  {
    "acmeProfileUuid": "b6be5014-b8f8-4b4f-b96d-a54c38f54b48",
    "issueCertificateAttributes": [],
    "revokeCertificateAttributes": []
  }' \
  https://[domain]:[port]/api/v1/raprofiles/61c7d882-9336-4c9e-b380-8d2fd83f7c26/activateAcme
  #https://[domain]:[port]/api/v1/raprofiles/{uuid}/activateAcme
```

When succeed, we will receive in the response ACME server directory endpoint to use:
```json
{
    "uuid": "b6be5014-b8f8-4b4f-b96d-a54c38f54b48",
    "name": "ACME CZERTAINLY Profile",
    "directoryUrl": "https://[domain]:[port]/api/acme/raProfile/czertainly/directory",
    "issueCertificateAttributes": [],
    "revokeCertificateAttributes": [],
    "acmeAvailable": true
}
```

Now we have the ACME protocol enabled for `RA Profile` with name `czertainly`, based on the `ACME Profile` with name `ACME CZERTAINLY Profile`.