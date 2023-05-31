# Enroll Device

Last step is the devices enrollment to Intune to ensure that device trying to access data within your organization are secure and compliant with your policies and requirements.

For information how to enroll your device, please refer to [Microsoft guide](https://learn.microsoft.com/en-us/mem/intune/enrollment/quickstart-enroll-windows-device).

To confirm successful device enrollment, you can open Computer Certificate store and check
- device certificate installed under **Local Computer >> Personal >> Certificates**
- trusted Root CA certificate installed under **Local Computer >> Trusted Root Certification Authorities >> Certificates**
- issuing CA certificate installed under **Local Computer >> Intermediate Certification Authorities >> Certificates**