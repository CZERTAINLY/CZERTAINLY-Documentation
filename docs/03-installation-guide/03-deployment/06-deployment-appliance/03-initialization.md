# Initialization

To make initial configuration of virtual appliance, you must log into
it using default credentials:

* **username**: czertainly
* **password**: newgenerationtrustcare

In case you want to use SSH, IP address is displayed on virtual
console above login prompt. After sucessfull login menu based text
interface is shown:

![CZERTAINLY TUI](../../../assets/CZERTAINLY-TUI.png)

The following steps need to be done to initialize the virtual
appliance. Bold items are mandatory even for testing purposes.

1. [Change hostname and networking parameters](#change-hostname-and-networking-parameters)
1. [**Update the system**](#update-system-and-packages)
1. [Setup TLS certificate](#tls-certificate-for-czertainly-interface)
1. [Trusted certificate list](#trusted-certificate-list)
1. [Configure database](#database)
1. [Configure credentials to CZERTAINLY docker repository](#czertainly-docker-repository)
1. [**Configure CZERTAINLY**](#configure-czeratinly)
4. [**Install CZERTAINLY**](#install-czertainly)

## Change hostname and networking parameters

By default, the virtual appliance is configured to use dynamically
assigned IP addresse from a DHCP server. If you need to change network
configuration, select from menu **Advanced options -> Enter system
shell** and follow official [Debian
documentation](https://wiki.debian.org/NetworkConfiguration#Configuring_the_interface_manually).

Default hostname `czertainly` and domain `local` may be useful for
development and testing purposes. You need add name
`czertainly.local` and VM IP into your [hosts
file](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/). In
production, you will need to set a better hostname. To do so, select
option **Configure hostname** from the main menu. Enter a fully
qualified name, and after confirmation, the virtual **appliance will
be rebooted**.

If your network policy requires using HTTP proxy, configure it's
parameters in the main menu, under option **Configure HTTP
proxy**. You will be promted for `HTTP_PROXY`, `HTTPS_PROXY`, `FTP_PROXY`,
`FTPS_PROXY` and `NOPROXY` settings. After confirmation changes will be
imediately propagated to the system.

## Update system and packages

It is always good to have actual version of czertainly-appliance-tools
and Debian software. To update packages, select from the main menu
**Advanced options -> Update Operating System**.

## TLS certificate for CZERTAINLY interface

CZERTAINLY is controlled via a web interface. For testing purposes, a
self-signed certificate is automatically generated. If you aim to put
CZERTAINLY into production, you definitely want to upload a
certificate from your internal CA. For this purpose, use `scp` to copy
the certificate file, and the private key file to the appliance. Put
them into the home directory of czertainly user (`/home/czertainly`).

In CZERTAINLY TUI, from the main menu, select **Configure ingress TLS
certificates**. Remember to provide full path to files with
certificate and key.

## Trusted certificate list

Access to the web interface of CZERTAINLY is authenticated by a client
certificate.

For testing purposes, you can use preinstalled trusted CA list and
provided [admin
certificate](https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/develop/dummy-certificates/private/admin.p12)
with password `00000000`. In production, upload a list of your trusted
certificates with `scp` to the appliance, and in CZERTAINLY TUI from the
main menu, select **Configure custom trusted certificates** and
provide the full path to the list.

## Database

CZERTAINLY stores all it's data in postgres database. The server will be installed for you, but you might want to set your own password for the database. To do so choose **Configure database** from the main menu.

## Credentials for CZERTAINLY docker repository

Some parts of CZERTAINLY are licensed and can't be provided publicly. Those parts are [hosted in private Docker repository](/docs/current-versions/) harbor.3key.company.

:::caution Obtain access to private Docker repository
Ask [support](/docs/feedback-support/) for credentials to access private repository.
:::

To enter obtained credentials, use option **Configure Docker repository access credentials** of the main menu.

## Configure CZERTAINLY

Option **Configure CZERTAINLY** of the main menu opens dialog where you
can choose version of CZERTAINLY and it's components you want to
install.

#### Version

List of available versions is
[available](https://harbor.3key.company/harbor/projects/8/repositories/czertainly/artifacts-tab). Latest
stable version is typicaly the best choice and it is preselected in
appliance.

#### Components

List of CZERTAINLY components to be installed. By default, all parts
are marked for installation. If you have not provided credentials for
the docker private repository, the instalation of:
  * Cryptosense Discovery Provider,
  * MS ADCS Connector

**will fail**. For sucessfull installation uncheck them (remove 'X' character in small inputbox next to component name) or [configure credentials to CZERTAINLY docker repository](#czertainly-docker-repository).

## Install CZERTAINLY

When you select **Install CZERTAINLY** from the main menu. The installation will begin after confirmation.

Complete installation takes about 10 minutes on a decent system with fast internet access.

After successful installation, administrator web interface is available on address:
```
https://[hostName]/administrator/
```
where `hostName` is the value configured in the previous step. If you didn't provided your own trusted CA list, you are going to need testing admin certificate. Please see section [trusted CA list](#trusted-certificate-list).

## Postinstall 

The default credentials for the virtual appliance should be [changed](https://docs.czertainly.com/docs/installation-guide/deployment/deployment-appliance/operations/#change-user-password) before production use.

Revide file `/home/czertainly/.ssh/authorized_keys` and delete any key you don't know.

Postgres database is listening on the public interface. This is needed for Kubernetes PODS to reach the database. You might want to protect it with a firewall.
