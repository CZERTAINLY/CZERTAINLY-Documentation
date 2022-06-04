# Win-acme


ACME protocol can be used for Windows web servers and other services as well. Since `certbot` supports only `Apache` and `Ngnix` servers, we need to use another available tool. For this purpose, we can use the `win-acme` - Windows ACMEv2 client, which enables to manage the certificates on IIS Windows web servers, Exchange servers or enables the use of custom scripts to automate certificiate issuance and renewal in Windows Server enviroments. 


For more information about `win-acme`, refer to the [win-acme documentation](https://www.win-acme.com/manual/getting-started).

## Prerequisites

Before configuring `win-acme` with CZERTAINLY, you need to have the following:
- `win-acme` installed in the host server. You can easily download the installation file from [win-acme installation](https://www.win-acme.com) download section. 
- Configured at least one `RA Profile` or `ACME profile` certificate service in CZERTAINLY
- Properly configured DNS records for the hostname you are trying to obtain the certificate for (for HTTP validation, the machine that `win-acme` is running on must have the correct common name configured in DNS)
- If you intend to use automated detection of certificate common name, the IIS server needs to have at least configured hostname for one binding (Port 80 for instance)
- Access to HTTP or DNS resources on your IIS Web server, that will be used to validate ACME challenges
- ACME protocol enabled according to the [Enable ACME](enable-acme)

## Configuration

`win-acme` client is designed to be primary used as ACMEv2 client for Let's Encrypt Certification Authority. It however allows to change the Base URI parameters to support compatible ACME enabled certification authorities. Before the first use we need to configure  `win-amce` client to connect to CZERTAINLY platform instead of Let's Encrypt CA. To archieve this, we need to set up correct endpoints in `win-acme` configuration file called *settings.json*. Edit the *settings.json* file located in the root of `win-acme` directory with your prefered text editor and change the following lines to these parameters: 

- DefaultBaseUri : "https://[domain]:[port]/api/acme/raProfile/czertainly/directory"
- DefaultBaseUriTest : "https://[domain]:[port]/api/acme/raProfile/czertainly/directory"
- DefaultBaseUriImport : "https://[domain]:[port]/api/acme/raProfile/czertainly/directory"

With these parameters, we are directly connecting to the already configured `RA Profile` czertainly. 
For more information follow [win-acme settings](https://www.win-acme.com/reference/settings#acme). 


## Using win-acme with Internet Information Services with selfhosted HTTP challenge
Once every prerequisities and configurations are set up, you can simply run `win-acme` executable file callesd *wascs.exe* as administrator (to enable automatic detection of IIS services) and follow these steps:
- Please choose from the menu: **N** (Create certificate, default settings)
- Depending on your setup, we can either input the hostname of the certificate manually or detect it from the IIS configuration.
- If IIS bindings are configured correctly, you will be asked to point `win-acme` to the site you want to issue SSL certificate for
- In case your IIS bindings are not configured you will have to follow up with Full Options from the menu: **M**
- When finalizing the selection of the certificate name `win-acme` will automaticaly try the HTTP challenge. In this step `win-acme` will try to bind port 80 of your server and will download the challenge from the ACME server, this challenge will be posted on the port 80 of your server (make sure, your server is reachable on the port with the domain name you selected for the certificate from CZERTAINLY)
- Upon sucesfull HTTP challenge, 'win-acme' will create the HTTPS bindings in the IIS automatically
- In Manual mode you need to specify what do you want to do with the certificate and enter email for notifications about problems and abuse

![image](https://user-images.githubusercontent.com/97409110/171993733-c1c17007-50ff-46f8-8a80-9faeef73b2bd.png)

## Creating automated renewal
`win-acme` can automatically renew any certificate that it obrained from ACME using Windows Scheduler task. Please follow these steps:
- run `win-acme` executable file callesd *wascs.exe* as administrator
- Please choose from the menu: **O** (More Options)
- Please chose from the menu> **T** ((Re)Create Scheduled Task
- Please specify the User you want the task to be runned under (Administrator recommended to allow automatic binding configuration)
- The scheduled task for automatic renewal of all SSL certificates downloade by `win-acme` is now created.

![image](https://user-images.githubusercontent.com/97409110/171994019-a0a38c24-4605-46fb-b13b-7e9bbc94f5e0.png)

:::note
- `win-acme` might have issues running properly on older versions of Windows Server (2012 and older) due to compatilbility with TLS 1.2 CipherSuite
- `win-acme` supports lots of plugins for Sources (IIS, Exchange etc.) and validation methods (HTTP, WebDAV, DNS etc.), for details how to use them, please visit: https://www.win-acme.com/reference/plugins/
:::

