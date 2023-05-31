# Create Intune Profiles

For successfully enrolling certificate to device, it is necessary to configure Intune configuration profiles.

### Trusted certificate configuration profiles

Trusted certificate profile is used to deploy the trusted certificates to devices that will be enrolled with certificate through Intune. Trusted root certificates establish a trust from the device to your root or intermediate (issuing) CA from which the other certificates are issued.

Following the guide, [create a trusted certificate profile](https://learn.microsoft.com/en-us/mem/intune/protect/certificates-trusted-root#to-create-a-trusted-certificate-profile) for CA root certificate and issuing CA certificate and select corresponding destination store.

:::caution
Selected CA certificate in [SCEP profile](../../protocols/scep/scep-profile#scep-profile-certificate-requirements) has to be issued by same CA as certificates that will be enrolled through SCEP to target devices.
:::

### SCEP certificate configuration profile

For devices to use a SCEP certificate profile, they must trust your Trusted Root Certification Authority (CA) by deploying a trusted certificate profile to the same group that receives the SCEP certificate profile.

Following the guide, [create a SCEP certificate profile](https://learn.microsoft.com/en-us/mem/intune/protect/certificates-profile-scep#create-a-scep-certificate-profile) where its configuration depends on platform and specific needs.

:::caution
1. As **Root certificate** for SCEP certificate profile select trusted certificate profile representing issuing CA certificate.
2. For **SCEP Server URLs** specify URL found in detail page of CZERTAINLY SCEP profile without last segment. Format of SCEP server URL is as following ***https://{Domain name}/api/v1/protocols/scep/{SCEP profile name}***. For example, ***https://czertainly.example.com/api/v1/protocols/scep/TestScepProfile***
:::

After SCEP certificate profile is created, assign it to corresponding group.

:::info
In case you need more information how to create group to manage your users, please refer to [Step 3](https://learn.microsoft.com/en-us/mem/intune/fundamentals/quickstart-create-group) of Try Intune tasks documentation. 
:::