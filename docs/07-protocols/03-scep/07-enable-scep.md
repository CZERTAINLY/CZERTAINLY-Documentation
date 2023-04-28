# Enable SCEP

Before the platform can be used as SCEP server, it must be configured.

For the purpose of this guide. we will assume that the SCEP protocol should be enabled for the `RA Profile` with name `czertainly` and know UUID `61c7d882-9336-4c9e-b380-8d2fd83f7c26`.

We need to follow simple steps to enable the SCEP server:
- Configuration of `SCEP Profile`
- Enable SCEP protocol for `RA Profile`

The SCEP server can be also enabled based on the `SCEP Profile` configuration only if you select the default `RA Profile`.

## Configuration of `SCEP Profile`

First step is to configure the [`SCEP Profile`](scep-profile). It will create an instance of the SCEP server with specific attributes that will be used to control the certificate management process and SCEP clients will need to follow. You can create as many `SCEP Profiles` as you need. Each of them can have a different configuration, validation limits, terms of service, etc.

We do not need to configure default `RA Profile`, we will enable SCEP protocol for a specific `RA Profile` with name `czertainly`. Let's do this in `czertainly` `RA Profile` configuration.

We will create `SCEP Profile` named `SCEP CZERTAINLY Profile` using the [Core SCEP API](/api/core-scep/#operation/createScep Profile):
```bash
curl -X POST \
  --cacert [ca-cert] \
  --cert [client-cert] \
  --cert-type [type] \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  --data '
  {
    "name": "SCEP CZERTAINLY Profile",
    "description": "Sample SCEP Profile",
    "requireManualApproval": false,
    "caCertificateUuid": "72d7d882-9336-8a77-aa54-8d2fd83f7c37",
    "renewalThreshold": 10,
    "includeCaCertificate": true,
    "includeCaCertificateChain": false,
    "challengePassword": "test123",
  }' \
  https://[domain]:[port]/api/v1/scepProfiles
```

When the `SCEP Profile` is successfully created, its `uuid` is sent back:
```json
{
  "uuid": "b6be5014-b8f8-4b4f-b96d-a54c38f54b48"
}
```

## Enable SCEP protocol for `RA Profile`

Once the `SCEP Profile` is ready, we can enable SCEP protocol for the `RA Profile` with name `czertainly`. For that purpose, we will use the [`Core RA Profile API`](/api/core-ra-profile/#operation/activateScepForRaProfile). We will need to configure `Attributes` to issue and revoke certificates, if there are any available and supported in the `RA Profile`. These `Attributes` will be statically attached to all SCEP requests that are processed.

You can get the list of `Attributes` using the following APIs:
- [Get issue Attributes](/api/core-ra-profile/#operation/listIssueCertificateAttributes)
- [Get revocation Attributes](/api/core-ra-profile/#operation/listRevokeCertificateAttributes)

We will enable SCEP for `czertainly` `RA Profile`:
```bash
curl -X POST \
  --cacert [ca-cert] \
  --cert [client-cert] \
  --cert-type [type] \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  --data '
  {
    "issueCertificateAttributes": [],
  }' \
  https://[domain]:[port]/api/v1/authorities/61c7d882-9336-4c9e-b380-8d2fd83f7c26/raProfiles/d1a95ebc-4d73-11ed-bdc3-0242ac120002/scep/activate/b6be5014-b8f8-4b4f-b96d-a54c38f54b48
  #https://[domain]:[port]v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/scep/activate/{scepProfileUuid}
```

When succeed, we will receive in the response SCEP server directory endpoint to use:
```json
{
    "uuid": "b6be5014-b8f8-4b4f-b96d-a54c38f54b48",
    "name": "SCEP CZERTAINLY Profile",
    "url": "https://[domain]:[port]/api/v1/protocols/scep/raProfile/czertainly/pkiclient.exe",
    "issueCertificateAttributes": [],
    "scepAvailable": true
}
```

Now we have the SCEP protocol enabled for `RA Profile` with name `czertainly`, based on the `SCEP Profile` with name `SCEP CZERTAINLY Profile`.