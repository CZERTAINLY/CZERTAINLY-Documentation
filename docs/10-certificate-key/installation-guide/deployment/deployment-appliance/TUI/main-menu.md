---
sidebar_position: 3
---

# Main menu

The main menu allows you to select and execute basic tasks on the CZERTAINLY appliance; it offers the following options.

| Short&nbsp;name | Main&nbsp;menu&nbsp;item                                                                          | Description                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| **n**etwork     | [Configure network parameters](./network-menu.md)                                                 | It opens another menu which allows the setting of different networking parameters.  |
| **i**ngressTLS  | [Configure ingress TLS certificates](#configure-ingress-tls-certificates)                         | Custom HTTPS certificates for CZERTAINLY web interface can be configured here.      |
| **t**rustedCA   | [Configure custom trusted certificates](#configure-custom-trusted-certificates)                   | Use this option to change the default list of trusted certificates of CZERTAINLY.   |
| **p**ostgres    | [Configure database](#configure-database)                                                         | You can change the default configuration of the Postgres database with this option. |
| **d**ockerRepo  | [Configure Docker repository access credentials](#configure-docker-repository-access-credentials) | Configure credentials for Licensed parts of CZERTAINLY here.                        |
| **m**ail        | [Configure email server parameters](#configure-email-server-parameters)                           | Parameters of email server are needed for sending notifications.                    |
| **c**zertainly  | [Configure CZERTAINLY](#configure-czertainly)                                                     | Use this option to select the version and components of CZERTAINLY to install.      |
| **i**nstall     | [Install CZERTAINLY](#install-czertainly)                                                         | Execute CZERTAINLY installation.                                                    |
| **s**tatus      | [Show CZERTAINLY status](#show-czertainly-status)                                                 | This option will show the status of CZERTAINLY and Kubernetes subsystem.            |
| **a**dvanced    | [Advanced options](./advanced-menu.md)                                                            | Opens another menu with advanced options of CZERTAINLY appliance.                   |
| **e**xit        | Exit CZERTAINLY manager                                                                           | Closes TUI and disconnects from CZERTAINLY appliance.                               |


## Configure ingress TLS certificates

This option provides an interface for setting your own certificates for the CZERTAINLY web interface. After selecting it, TUI will open a dialog with two input fields, the first for a filename containing a certificate and the second one for a private key.

Use `scp` command, or any other favourite tool, to copy the certificate and the key to the appliance:

```
scp certificate.crt czertainly@czertainly.local:
scp key.pem czertainly@czertainly.local:
```

Both files are copied into the home directory of `czertainly` user. Please provide full paths into the input fields of the dialog. In the example above, full paths are `/home/czertainly/certificate.crt` and `/home/czertainly/key.pem`.

Values you provided in this dialog are stored on the file system in:
`/etc/czertainly-ansible/vars/ingress.yml`.

## Configure custom trusted certificates

To replace the default list of trusted certificates of CZERTAINLY, please upload a file containing a list of trusted certificates to the appliance by `scp` command or any other favourite tool:

```
scp trusted-list.pem czertainly@czertainly.local:
```

Provide the full path to the uploaded file in the input field in dialog; in the above example, it is `/home/czertainly/trusted-list.pem`.

Values you provided in this dialog are stored on the file system in: `/etc/czertainly-ansible/vars/trustedCA.yml`.

## Configure database

You can change the default parameters for the Postgres database here. The password is the field you definitely should change.

By default, CZERTAINLY uses the Debian repository, where there is always only one version of PostgreSQL available; we recommend leaving repository settings on value `debian`. In special cases, setting it to `official` allows you to choose more than a single version. For more details, see [official PostgreSQL wiki](https://wiki.postgresql.org/wiki/Apt).

Values you provided in this dialog are stored on the file system in: `/etc/czertainly-ansible/vars/database.yml`.

## Configure Docker repository access credentials

Licensed parts of CZERTAINLY are hosted on a private Docker repository named `harbor.3key.company`. Use this dialog to provide your *username* and *password* you have received from [support](/docs/feedback-support/).

Values you provided in this dialog are stored on the file system in: `/etc/czertainly-ansible/vars/docker.yml`.

## Configure email server parameters

You have to provide the parameters of the email server. Depending on your company policy, the hostname of a mail server and a port number might be sufficient. Dialog also offers you the chance to configure username, password, and TLS usage to authenticate the email server if needed.

## Configure CZERTAINLY

In this dialog window, you can select which version and which components of CZERTAINLY you want to install.

#### Version

List [available versions](https://harbor.3key.company/harbor/projects/8/repositories/czertainly/artifacts-tab). The latest stable version is typically the best choice, and it is pre-selected in the appliance.

#### Components

List of CZERTAINLY components to be installed. By default, all parts are marked for installation. If you have not provided credentials for the docker private repository, the installation of private components **will fail**. For a successful installation, uncheck them (remove the 'X' character in the small input box next to the component name) or [configure credentials to CZERTAINLY docker repository](#configure-docker-repository-access-credentials).

Values you provided in this dialog are stored on the file system in: `/etc/czertainly-ansible/vars/czertainly.yml`.

## Install CZERTAINLY

This option executes CZERTAINLY installation. During the process, output from installation steps is displayed. In case something fails, the content of `/var/log/ansible.log` will be useful for debugging and sharing with [support](/docs/feedback-support/).

## Show CZERTAINLY status

This option printout simple status information about CZERTAINLY and the underlying Kubernetes cluster, for example:

```
kube-system     11 PODs OK
cert-manager     3 PODs OK
czertainly      13 PODs OK


Everything is OK, administrative interface is available at:

https://czertainly.local/administrator/


press enter to return into menu
```
