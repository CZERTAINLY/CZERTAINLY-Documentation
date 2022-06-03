# Win-acme


ACME protocol could be used for Windows web servers as well. Since `certbot` supports only `Apache` and `Ngnix` servers, we need to use another available tool. For this purpose, we could use the `win-acme` - Windows ACMEv2 client, which enables to manage the certificates on IIS Windows web servers. 


For more information about `win-acme`, refer to the [win-acme documentation](https://www.win-acme.com/manual/getting-started).

## Prerequisites

Before configuring `win-acme` with CZERTAINLY, you need to have the following:
- `win-acme` installed in the host server. You can easily download the installation file from [win-acme installation](https://www.win-acme.com) download section. 
- Configured at least one `RA Profile` or `ACME profile` certificate service in CZERTAINLY
- Access to HTTP or DNS resources on your IIS Web server, that will be used to validate ACME challenges
- ACME protocol enabled according to the [Enable ACME](enable-acme)


:::note
`win-acme` client is supposed to be used for Let's Encrypt Certification Authority by default. In our case, we need to connect `win-amce` client instead of Let's Encrypt CA to CZERTAINLY platform. To manage this, we need to set up correct endpoints in `win-acme` configuration file called *settings.json*.

- DefaultBaseUri : "https://[domain]:[port]/api/acme/raProfile/czertainly/directory"
- DefaultBaseUriTest : "https://[domain]:[port]/api/acme/raProfile/czertainly/directory"
- DefaultBaseUriImport : "https://[domain]:[port]/api/acme/raProfile/czertainly/directory"

In this case, we are directly connecting to the already configured `RA Profile` czertainly. 
For more information follow [win-acme settings](https://www.win-acme.com/reference/settings#acme). 
:::


## HTTP-01
Once every prerequisities are set up, you can simply run `win-acme` executable file callesd *wascs.exe* and follow these steps:
- Please choose from the menu: **N** (Create certificate, default settings)
- How shall we determine the domain to include in the certificate: **2** (manual input)
- host: **www.example.com** (a host name to get certificate for)
- Which installation step should run first?: **3** (no additional installation steps)
- Enter email(s) for notifications about problems and abuse (comma-separated): **test@example.com**

Now the ACME server CZERTAINLY launches the authorization process with `win-acme` client. 

`win-acme` client picks the *http validation*, handled by self-hosting plugin, as the default mode during the authorization. 

- [www.example.com] Authorizing...
- [www.example.com] Authorizing using **http-01 validation** (SelfHosting)
- [www.example.com] Authorization result: **valid**

If the authorization has passed successfully, the Authorization result displays **valid**, and the `win-acme` client receives the certificate. 


If there are any problems with the authorization check out [common issues](https://www.win-acme.com/manual/validation-problems). 


## DNS-01
To swith the authorization to *DNS validation* you need to use *full option mode*. 

- Please choose from the menu: **M (Create certificate - full options)**
- How shall we determine the domain(s) to include in the certificate?: **2 (Manual input)**
- Host: **www.example.com**
- Friendly name (Manual) www.example.com. Enter to accept or type desired name: 
- How would you like prove ownership for the domain(s)?: **6 (dns-01 Create verification records manually (auto-renew not possible))**
- What kind of private key should be used for the certificate?: **2 (RSA key)**
- How would you like to store the certificate?: **4 (Windows Certificate Store)**
- Choose store to use, or type the name of another unlisted store: **2 (- Use global default, currently My)**
- Would you like to store it in another way too?: **5 (No (additional) store steps)**
- Which installation step should run first?: **3 (No (additional) installation steps)**

Now the ACME server CZERTAINLY launches the authorization process and sends DNS challenge to `win-acme` client. 
- [www.example.com] Authorizing...
- [www.example.com] Authorizing using dns-01 validation (Manual)

DNS challenge includes: 
- Domain:             www.example.com
- Record:             _acme-challenge.www.example.com
- Type:               TXT
- Content:            < string >
- Note:               Some DNS managers add quotes automatically. A single set
                     is needed.


            




