# Initialization

To make initial configuration of virtual appliance, you must log into virtual console using SSH and default credentials:
* **username**: czertainly
* **password**: newgenerationtrustcare

The following steps need to be done to initialize the virtual appliance:
1. Change hostname and networking parameters (if needed)
2. Update the system
3. Obtain credentials to CZERTAINLY docker repository
3. Prepare configuration
   1. prepare & upload certificate for CZERTAINLY HTTPS administrative interface
   1. upload your trusted certificate lists
   3. update password for postgress database
   4. configure version and components of CZERTAINLY to install
4. Install CZERTAINLY

Most configuration and operational tasks can be done via text user interface:

![CZERTAINLY TUI](../../../assets/CZERTAINLY-TUI.png)

## Change hostname and networking parameters

By default, the virtual appliance is configured to use dynamically assigned IP addresses from a DHCP server. If you need change network configuration, select from menu **Advanced options -> Enter system shell** and follow official [Debian documentation](https://wiki.debian.org/NetworkConfiguration#Configuring_the_interface_manually)

Default hostname `czertainly` and domain `local` may be useful for development and testing purposes. You need add name ''czertainly.local'' and VM IP into your [hosts file](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/).

In production, you will need to set a better hostname. To do so, select from the main menu **Configure hostname**. Enter a fully qualified name, and after confirmation, the virtual appliance will be rebooted.

If your network policy requres using HTTP proxy, configure it's parameters in the main menu, under option **Configure HTTP proxy**.

## Update system and packages

If you are going to production, ensure that you have the latest packages installed. Select from the main menu **Advanced options -> Enter system shell** and type:
```bash
sudo apt -y update && sudo apt -y upgrade
```

## HTTPS certificate for CZERTAINLY interface

CZERTAINLY is controlled via a web interface. For testing purposes, a self-signed certificate is automatically generated. If you aim to put CZERTAINLY into production, you definitely want to upload a certificate from your internal CA. For this purpose, use scp to copy the certificate, and it's the private key to the appliance. Put them into the home directory of czertainly user.

In CZERTAINLY TUI, from the main menu, select **Configure ingress TLS certificates**. Remember to provide full path to files with certificate and kery.

## Trusted certificate list

Access to the web interface of CZERTAINLY is authenticated by a client certificate. For testing purposes, you can use preinstalled trusted CA list and provided [admin certificate](https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/develop/dummy-certificates/private/admin.p12) with password ??-FIXME-??.

In production, upload a list of your trusted certificates with scp to the appliance, and in CZERTAINLY TUI from the main menu, select **Configure custom trusted certificates** and provide the full path to the list.

## Database

CZERTAINLY stores all it's data in postgres database. The server will be installed for you, but you might want to set your own password for the database. To do so choose **Configure database** from the main menu.

## Obtain credentials to CZERTAINLY docker repository

Some parts of CZERTAINLY are licensed and can't be provided publicly. Those parts are [hosted on private Docker repository](https://docs.czertainly.com/docs/current-versions/) harbor.3key.company.

:::caution Obtain access to private Docker repository
Ask [support](https://docs.czertainly.com/docs/feedback-support/) for credentials to access private repository.
:::

To enter obtained credentials, use option **Configure Docker repository access credentials** of the main menu. 

## Configure CZERTAINLY

Option **Configure CZERTAINLY** of the main menu allows you to select which parts of CZERTAINLY you want to install. By default, all parts are marked for installation. If you have not provided credentials for the docker private repository, the instalation of some parts will fail.

## Install CZERTAINLY

When you select **Install CZERTAINLY** from the main menu. The installation will begin after confirmation.

Complete installation takes about 10 minutes on a decent system with fast internet access.

After successful installation, administrator web interface is available on address:
```
https://[hostName]/administrator/
```
where `hostName` is the value configured in the previous step.

## Postinstall 

The default credentials for the virtual appliance should be [changed](https://docs.czertainly.com/docs/installation-guide/deployment/deployment-appliance/operations/#change-user-password) before production use.

Revide file `/home/czertainly/.ssh/authorized_keys` and delete any key you don't know.

Postgres database is listening on the public interface. This is needed for Kubernetes to work. You might want to protect it with a firewall.
