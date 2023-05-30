# Configure Intune SCEP Profile

To integrate CZERTAINLY with registered application in previous step, you need to create SCEP profile in CZERTAINLY that will be used to validate and process Intune requests.
Please refer to [SCEP profile](../../protocols/scep/enable-scep-ra-profile#configuration-of-scep-profile) documentation for more information and [create SCEP profile](../../protocols/scep/enable-scep-ra-profile#configuration-of-scep-profile).

To be able to integrate SCEP profile with Intune you need to set following values obtained in previous step of this guide:
- **Enable Intune** -> `true`
- **Intune Tenant** -> Directory (tenant) ID of application
- **Intune Application ID** -> Application (client) ID
- **Intune Application Key** -> Application client secret value

:::caution
To use SCEP profile with Intune, selected CA certificate key algorithm needs to be `RSA`.
:::