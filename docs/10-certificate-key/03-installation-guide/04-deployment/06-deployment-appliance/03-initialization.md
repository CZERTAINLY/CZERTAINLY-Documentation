# Initialization

To make initial configuration of virtual appliance, you must log into it using default credentials:

* **username**: czertainly
* **password**: newgenerationtrustcare

When you are successfully logged in, you will see the Text-based User Interface ([**TUI**](./TUI/intro)) for management of the virtual appliance.

The following steps needs to be done to initialize the virtual appliance.

:::caution Mandatory steps
Bold items are mandatory even for testing purposes.
:::

1. [Change hostname and networking parameters](#change-hostname-and-networking-parameters)
1. [**Update the system**](#update-system-and-packages)
1. [Setup TLS certificate](#tls-certificate-for-czertainly-interface)
1. [Trusted certificate list](#trusted-certificates-list)
1. [Configure database](#database)
1. [Configure credentials to CZERTAINLY docker repository](#credentials-for-czertainly-docker-repository)
1. [**Configure CZERTAINLY**](#configure-czertainly)
4. [**Install CZERTAINLY**](#install-czertainly)

## Change hostname and networking parameters

By default, the virtual appliance is configured to use dynamically assigned IP address from a DHCP server.

Default hostname `czertainly` and domain `local` may be useful for development and testing purposes. You need add name `czertainly.local` and VM IP into your [hosts
file](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/). In production, you will need to set a hostname that will be configured in DNS. To do so, select **Main menu -> [Configure hostname](./TUI/main-menu#configure-hostname)**.

If your network policy requires using HTTP proxy, you can configure it by selecting **Main menu -> [Configure HTTP proxy](./TUI/main-menu#configure-http-proxy)**.

## Update system and packages

It is always good to have current version of `czertainly-appliance-tools` and Debian software. To update packages, select from the main menu **Advanced options -> Update Operating System**.

## TLS certificate for CZERTAINLY interface

CZERTAINLY is controlled via a web interface. For testing purposes, a self-signed certificate is automatically generated. If you aim to put CZERTAINLY into production, you want to upload a certificate from your internal CA. To do so, select **Main menu -> [Configure ingress TLS certificates](./TUI/main-menu#configure-ingress-tls-certificates)**.

## Trusted certificates list

Access to the web interface of CZERTAINLY is authenticated by a client certificate by default.

:::info Access control
There are various options how to configure access control for the platform. See [Access control](../../../concept-design/architecture/access-control/overview) for more information.
:::

For testing purposes, you can use preconfigured [Dummy CA certificate](https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/master/dummy-certificates/certs/root-ca.cert.pem). In production system, you will need to replace this list with your own trusted CA certificates. To do this, select **Main menu -> [Configure custom trusted certificates](./TUI/main-menu#configure-custom-trusted-certificates)**.

## Database

CZERTAINLY persists all its data in Postgres database. The server will be installed for you, but you might want to set your own password for the database. To do so choose **[Configure database](./TUI/main-menu#configure-database)** from the **Main menu**.

## Credentials for CZERTAINLY docker repository

Some parts of CZERTAINLY are private and can't be provided publicly. Those parts are [hosted in private Docker repository](../../../current-versions/) `harbor.3key.company`.

:::caution Obtain access to private Docker repository
Ask [support](../../../../feedback-support/) for credentials to access private repository.
:::

To enter obtained credentials, use option **Main Menu -> [Configure Docker repository access credentials](./TUI/main-menu#configure-docker-repository-access-credentials)**.

## Configure CZERTAINLY

Option **[Configure CZERTAINLY](./TUI/main-menu#configure-czertainly)** of the main menu opens dialog where you can choose version of CZERTAINLY and it's components you want to install.

## Install CZERTAINLY

When you select **[Install CZERTAINLY](./TUI/main-menu#install-czertainly)** from the main menu. The installation will begin after confirmation.

:::info Installation time
Complete installation takes about 10 minutes on a decent system with good internet access. The most time consuming part is downloading of docker images that are deployed in the cluster.
:::

After successful installation, administrator web interface is available on address:
```
https://[hostname]/administrator/
```
where `hostname` is the value configured in the previous step.

The [Dummy administrator certificate](https://github.om/3KeyCompany/CZERTAINLY-Helm-Charts/blob/master/dummy-certificates/private/admin.p12) is available for quick testing purposes with password `00000000`.

