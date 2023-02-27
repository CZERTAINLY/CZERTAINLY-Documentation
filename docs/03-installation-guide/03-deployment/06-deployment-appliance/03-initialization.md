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

By default, virtual appliance is configured to use dynamically assigned IP addresses from DHCP server. If you need change network configuration, select from menu **Advanced options -> Enter system shell** and follow offical [Debian documentation](https://wiki.debian.org/NetworkConfiguration#Configuring_the_interface_manually)

Default hostname `czertainly` and domain `local` may be useful for development and testing purposes. You need just add name ''czertainly.local'' and VM IP into your [hosts file](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/).

In production you will need to set other name, to do so. Please select from main menu **Configure hostname**. Enter fully qualitifed name. After confirmation virtuall appliance will be rebooted.

## Update system and packages

If you are going to production, ensure that you have the latest packages installed. Use `apt` to update list of Debian packages and upgrade. Select from menu **Advanced options -> Enter system shell** and type:
```bash
sudo apt -y update && sudo apt -y upgrade
```

## Obtain credentials to CZERTAINLY docker repository

Some parts of CZERTAINLY are licensed and can't provided publicaly.

:::caution Obtain access to private Docker repository
HowTo???
:::


## Prepare configuration values

The configuration values are the values that are applied for the Helm chart installation and upgrade operations.
For all available parameters, see [Helm chart configurable parameters](../deployment-helm/configurable-parameters).

There are few mandatory parameters that must be configured before installation. These are:

| Parameter              | Value                                                                                       |
|------------------------|---------------------------------------------------------------------------------------------|
| `global.database.host` | PostgreSQL server host IP address that should be set to IP address of the virtual appliance |
| `hostName`             | Current hostname including domain name, for example `czertainly.local`                      |
| `ingress.enabled`      | Set to `true` to enable authenticated access to platform from outside the virtual appliance |

Optionally, configure proxy settings:

| Parameter           | Value                               |
|---------------------|-------------------------------------|
| `global.httpProxy`  | `http` proxy                        |
| `global.httpsProxy` | `https` proxy                       |
| `global.noProxy`    | Resources that should not use proxy |

Use your favorite editor to edit default values file:
```bash
nano /home/czertainly/czertainly-values-default.yaml
```

:::info CZERTAINLY Helm chart
You can also find parameters to update in [Configurable parameters](https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/tree/develop/charts/czertainly#configurable-parameters), part of [CZERTAINLY Helm Chart](https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/tree/develop/charts/czertainly) git repository, that also contains [sample values file](https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/develop/charts/czertainly/values.yaml).
:::

## Prepare TLS configuration

The server certificate needs to be issued and configured to access the platform. It should be issued by trusted certification authority. 
Certificate signing request is prepared and should be submitted to CA. The certification authority is out of scope of this document.

To prepare the certificate signing request, edit the OpenSSL configuration:
```bash
nano /home/czertainly/openssl.cnf
```

Generate the CSR using the following command:
```bash
sudo -s czertainly-manager.sh generatecsr
```

The CSR and the private key will be stored in the following locations:
```
/home/czertainly/czertainly.csr
/home/czertainly/czertainly.key
```

Once the server certificate is issued by the CA of your choice, it should be uploaded into the following location:
```
/home/czertainly/czertainly.crt
```

:::info Certificate installation
The server certificate will be installed during the first deployment of the CZERTAINLY. Certificate can be changed later. For more information about how to change the certificate in already deployed platform, see [Import TLS server certificate](operations#import-tls-server-certificate).
:::

## Deploy CZERTAINLY

Once the initial configuration is prepared, CZERTAINLY can be deployed:
```bash
sudo -s czertainly-manager.sh install 
```

During the installation process, all configured containers and images are downloaded.
You will be asked to enter username and password for private container repository. Enter the credential when you need to access private containers.

After successful installation, administrator web interface is available on address:
```
https://[hostName]/administrator/
```
where `hostName` is the value configured in the previous step.

## Postinstall 

:::caution Change default credentials
The default credentials for the virtual appliance should be [changed](https://docs.czertainly.com/docs/installation-guide/deployment/deployment-appliance/operations/#change-user-password) by the user.
:::
