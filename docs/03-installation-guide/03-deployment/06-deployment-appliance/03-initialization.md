# Initialization

To make initial configuration of virtual appliance, you must log into virtual console using SSH and default credentials:
* **username**: czertainly
* **password**: newgenerationtrustcare

:::caution Change default credentials
The default credentials for the virtual appliance should be changed by the user.
:::

The following steps need to be done to initialize the virtual appliance:
1. Change hostname and networking parameters (if needed)
2. Update the system
3. Prepare configuration and prepare server certificate sign request
4. Deploy CZERTAINLY

## Change hostname and networking parameters

By default, virtual appliance is configured to use dynamically assigned IP addresses from DHCP server with hostname `czertainly`, domain `local` and no proxy applied. To change the networking configuration, execute the following command:
```bash
sudo -s czertainly-manager.sh changenet
```

:::info Default networking configuration
The default configuration may be useful for development and testing purposes. For production, it is recommended to adjust the setting and proxy configuration.
:::

**Reboot the virtual appliance when asked before doing any other changes.**

## Update system and packages

Ensure that you have the latest patches installed. Use `apt` to update list of Debian packages and upgrade:
```bash
sudo apt -y update && sudo apt -y upgrade
```

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
nano /home/czertainly/czertainly-values.yaml
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

:::warning TODO
The CSR file is store as ???
Where to put the key and issued certificate?
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