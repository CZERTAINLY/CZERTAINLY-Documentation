# Main menu

| Short name  | Main menu item                                | Description                                                                                                                                                                                                                                                               |
|-------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **h**ostname | [Configure hostname](#configure-hostname)     | Option serves for changing hostname of the appliance. If change is needed please provide fully qualified name - the name with domain, like *czertainly.example.com*.                                                                                                      |
| **n**etwork | [Configure HTTP proxy](#configure-http-proxy) | If your network policy requires using HTTP proxy you can configure it under this option. You will be prompted for `HTTP_PROXY`, `HTTPS_PROXY`, `FTP_PROXY`, `FTPS_PROXY` and `NOPROXY` settings. After confirmation changes will be immediately propagated to the system. |


## Configure hostname

Option serves for changing hostname of the appliance. If change is
needed please provide fully qualified name - the name with domain,
like *czertainly.example.com*.

After entering new hostname, files `/etc/hosts` and `/etc/hostname`
are overwriten with new values and the **appliance is rebooted** to
propagate the new hostname.

## Configure HTTP proxy

If your network policy requires using HTTP proxy you can configure it
under this option. You will be prompted for `HTTP_PROXY`,
`HTTPS_PROXY`, `FTP_PROXY`, `FTPS_PROXY` and `NOPROXY` settings. After
confirmation changes will be immediately propagated to the system.

Files `/etc/profile.d/proxy.sh`, `/etc/apt/apt.conf.d/80proxy`,
`/etc/default/rke2-server` and `/etc/default/rke2-agent` are modified
by this action.

Values you provided in this dialog are stored in file:
`/etc/czertainly-ansible/vars/proxy.yml`.

## Configure ingress TLS certificates

This option provides interface for setting your own certificates for
CZERTAINLY web interface. After selecting it, TUI will open dialog
with two input fields. First for filename containing certificate and
the second one for private key.

Use `scp` command to copy the certificate and the key to the appliance:

```
scp certificate.crt czertainly@czertainly.local:
scp key.pem czertainly@czertainly.local:
```

Both files are copied into home directory of czertainly user. Please
provide full paths into input fields of the dialog. In example above,
full paths are `/home/czertainly/certificate.crt` and
`/home/czertainly/key.pem`.

Values you provided in this dialog are stored in file:
`/etc/czertainly-ansible/vars/ingress.yml`.

## Configure custom trusted certificates

To replace default list of trusted certificates of CZERTAINLY, please
upload file containing list of trusted certificates to the appliance
by `scp` command:

```
scp trusted-list.pem czertainly@czertainly.local:
```

And into input file provide full path, in above example it is
`/home/czertainly/trusted-list.pem`.

Values you provided in this dialog are stored in file:
`/etc/czertainly-ansible/vars/trustedCA.yml`.

## Configure database

You can change default parameters for Postgress database here. The
password is field you definetly should change.

Values you provided in this dialog are stored in file:
`/etc/czertainly-ansible/vars/database.yml`.

## Configure Docker repository access credentials

Licensed parts of CZERTAINLY are hosted on private Docker repository
named `harbor.3key.company`, use this dialog to provide your
*username* and *password* you have received from [support](/docs/feedback-support/).

Values you provided in this dialog are stored in file:
`/etc/czertainly-ansible/vars/docker.yml`.

## Configure CZERTAINLY

In this dialog window you can select which version and which
components of CZERTAINLY you want to install.

#### Version

List of available versions is
[available](https://harbor.3key.company/harbor/projects/8/repositories/czertainly/artifacts-tab). Latest
stable version is typically the best choice and it is pre-selected in
appliance.

#### Components

List of CZERTAINLY components to be installed. By default, all parts
are marked for installation. If you have not provided credentials for
the docker private repository, the installation of:
  * Cryptosense Discovery Provider,
  * MS ADCS Connector

**will fail**. For successful installation uncheck them (remove 'X' character in small input box next to component name) or [configure credentials to CZERTAINLY docker repository](#czertainly-docker-repository).

##

Values you provided in this dialog are stored in file:
`/etc/czertainly-ansible/vars/czertainly.yml`.

## Install CZERTAINLY

This option executes CZERTAINLY instalation. During the process, output from Ansible is being displayed. In case something fails, content of `/var/log/ansible.log` will be usefull for [support](/docs/feedback-support/).

## Show CZERTAINLY status

This option printout simple status informations about CZERTAINLY and
underlying kurnetes cluster. S-TODO, pridat příklad.

## Advanced options

Opens another menu with [advanced options](advanced-menu) of CZERTAINLY appliance.

## Exit CZERTAINLY manager