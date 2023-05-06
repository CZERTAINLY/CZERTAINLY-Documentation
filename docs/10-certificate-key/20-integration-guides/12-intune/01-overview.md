# Overview

This integration guide describes how to integrate platform with [Microsoft Intune](https://learn.microsoft.com/mem/intune/fundamentals/what-is-intune) endpoint management solution.

Intune supports use of the Simple Certificate Enrollment Protocol (SCEP) to authenticate connections to your apps and corporate resources. SCEP uses the Certification Authority (CA) certificate to secure the message exchange for the Certificate Signing Request (CSR).

CZERTAINLY supports SCEP, you can use Intune SCEP certificate profiles (a type of device profile in Intune) to deploy the certificates to your devices using the SCEP protocol and the CZERTAINLY SCEP service. For more information about SCEP support in the CZERTAINLY, see the [SCEP overview](../../protocols/scep/overview).

## Microsoft Intune

Microsoft Intune is a cloud-based endpoint management solution. It manages user access and simplifies app and device management across your many devices, including mobile devices, desktop computers, and virtual endpoints using Zero Trust principles.

:::caution Intune installation
This integration guide assumes at least basic knowledge about the Intune and does not provide guidance on how to install Intune. It focuses on the steps necessary to do to make the integration working with CZERTAINLY SCEP service. For more information about the Intune installation, refer to Intune documentation.
:::

In order to use CZERTAINLY as a SCEP service for Intune, you need to follow these steps:

| #   | Step                                                  | Description                                                                                                            |
|-----|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| 1   | [Authorize CZERTAINLY](#create-device-profile)        | Setup integration and authorization between Intune and CZERTAINLY by creating an application in Azure Active Directory |
| 2   | [Configure Intune SCEP Profile](#create-scep-profile) | Create SCEP profile with enabled Intune request validation support                                                     |
| 3   | [Create Intune Profiles](#assign-device-profile)      | Create Intune configuration profiles holding the trusted CA certificates and SCEP configuration                        |
| 4   | [Enroll Device](#assign-device-profile)               | Enroll device with Intune                                                                                              |

:::tip Evaluate Microsoft Intune
[Evaluate Microsoft Intune](https://learn.microsoft.com/en-us/mem/intune/fundamentals/try-intune-overview) provides a good starting point to understand the proper configuration of the Intune.
:::