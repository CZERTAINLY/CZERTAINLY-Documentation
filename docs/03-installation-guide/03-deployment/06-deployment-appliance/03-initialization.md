# Initialization

To make initial configuration of virtual appliance, you must log into
it using default credentials:

* **username**: czertainly
* **password**: newgenerationtrustcare

When you are successfully logged in, you will see the Text-based User Interface ([**TUI**](./TUI/intro)) for management of the virtual appliance.

The following steps needs to be done to initialize the virtual
appliance.

:::caution Mandatory steps
Bold items are mandatory even for testing purposes.
:::

1. [Change hostname and networking parameters](#change-hostname-and-networking-parameters)
1. [**Update the system**](#update-system-and-packages)
1. [Setup TLS certificate](#tls-certificate-for-czertainly-interface)
1. [Trusted certificate list](#trusted-certificate-list)
1. [Configure database](#database)
1. [Configure credentials to CZERTAINLY docker repository](#credentials-for-czertainly-docker-repository)
1. [**Configure CZERTAINLY**](#configure-czertainly)
4. [**Install CZERTAINLY**](#install-czertainly)

## Change hostname and networking parameters

By default, the virtual appliance is configured to use dynamically
assigned IP address from a DHCP server.

Default hostname `czertainly` and domain `local` may be useful for
development and testing purposes. You need add name
`czertainly.local` and VM IP into your [hosts
file](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/). In
production, you will need to set a better hostname. To do so, select
**Main menu -> [Configure hostname](TUI/main-menu#configure-hostname)**.

If your network policy requires using HTTP proxy, you can configure it
by selecting **Main menu -> [Configure HTTP
proxy](TUI/main-menu#configure-http-proxy)**.

## Update system and packages

It is always good to have actual version of czertainly-appliance-tools
and Debian software. To update packages, select from the main menu
**Advanced options -> Update Operating System**. S-TODO LINK

## TLS certificate for CZERTAINLY interface

CZERTAINLY is controlled via a web interface. For testing purposes, a
self-signed certificate is automatically generated. If you aim to put
CZERTAINLY into production, you definitely want to upload a
certificate from your internal CA. To do so, select **Main menu ->
[Configure ingress TLS certificates](TUI/main-menu#configure-ingress-tls-certificates)**.

## Trusted certificate list

Access to the web interface of CZERTAINLY is authenticated by a client
certificate.

For testing purposes, you can use preinstalled trusted CA list and
provided [admin
certificate](https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/develop/dummy-certificates/private/admin.p12)
with password `00000000`. In production you will need to replace this list, select **Main menu -> [Configure custom trusted certificates](TUI/main-menu#configure-custom-trusted-certificates)**.

## Database

CZERTAINLY stores all it's data in Postgres database. The server will
be installed for you, but you might want to set your own password for
the database. To do so choose **[Configure
database](TUI/main-menu#configure-database)** from the **Main menu**.

## Credentials for CZERTAINLY docker repository

Some parts of CZERTAINLY are licensed and can't be provided publicly. Those parts are [hosted in private Docker repository](/docs/current-versions/) harbor.3key.company.

:::caution Obtain access to private Docker repository
Ask [support](/docs/feedback-support/) for credentials to access private repository.
:::

To enter obtained credentials, use option **Main Menu -> [Configure Docker repository access credentials](TUI/main-menu#configure-docker-repository-access-credentials)**.

## Configure CZERTAINLY

Option **[Configure CZERTAINLY](TUI/main-menu#configure-czertainly)** of the main menu opens dialog where you
can choose version of CZERTAINLY and it's components you want to
install.

## Install CZERTAINLY

When you select **[Install
CZERTAINLY](TUI/main-menu#install-czertainly)** from the main
menu. The installation will begin after confirmation.

Complete installation takes about 10 minutes on a decent system with fast internet access.

After successful installation, administrator web interface is available on address:
```
https://[hostname]/administrator/
```
where `hostname` is the value configured in the previous step. If you didn't provided your own trusted CA list, you are going to need testing admin certificate. Please see section [trusted CA list](#trusted-certificate-list).

