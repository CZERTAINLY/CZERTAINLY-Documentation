# Operations

The following document describes advanced operations for the management of virtual appliance:
- [Virtual appliance management](#virtual-appliance-management)
- [User management](#user-management)
- [Advanced tasks](#advanced-tasks)

## Virtual appliance management

### Shut down

To shut down the virtual appliance use ACPI shutdown call of your virtualization platform or select **Advanced options -> Shutdown system**.

### Restart

To restart the virtual appliance, select **Advanced options -> Reboot system**. Do not use cold reboot function on your virtualization platform, as it could lead to file-system corruption.

### Update system

Updating of the virtual appliance system consists of updating and upgrading included packages, it can be easily done by selecting **Advanced options -> Update Operating System** from the menu.

## User management

### Create new user

To create user with username `john`, execute the following commands:
```bash
sudo adduser john
```

Then you will be requested to fill in user details:
```bash
czertainly@czertainly:~$ sudo adduser john
[sudo] password for czertainly:
Adding user `john' ...
Adding new group `john' (1001) ...
Adding new user `john' (1001) with group `john' ...
Creating home directory `/home/john' ...
Copying files from `/etc/skel' ...
New password:
Retype new password:
passwd: password updated successfully
Changing the user information for john
Enter the new value, or press ENTER for the default
        Full Name []: John Doe
        Room Number []:
        Work Phone []:
        Home Phone []:
        Other []:
Is the information correct? [Y/n]
```

### Grant user admin privileges

To grant user admin privileges, execute the following command:
```bash
sudo adduser john sudo
```

### Change user password

To change password of another user `john`, execute the following command:
```bash
sudo passwd john
```

### Delete user

To delete user, execute the following command:
```bash
sudo deluser john
```

### Remove user admin privileges

To remove admin privileges for user, execute the following command:
```bash
sudo deluser john sudo
```

## Advanced tasks

### Custom Helm chart values

The installation/upgrade process of CZERTAINLY is managed by the [Helm](https://helm.sh/).

Default values are stored in file `/root/install/czertainly-values.yaml`. This file gets updated during installation/upgrade when there is newer version of CZERTAINLY chart.

If you need to provide your own custom Helm chart values that are not available through the [TUI](./TUI/intro), you need to access the shell of the appliance, create file `/home/czertainly/czertainly-values.custom.yaml`, and put it there.

The custom values overwrite the default values during the installation/upgrade process.

### Upgrading

:::warning
Before any upgrade process make sure you have recent snapshot first!
:::

#### OS packages upgrades

CZERTAINLY Virtual Appliance is based on Debian GNU/Linux. To upgrade it [enter system shell](./TUI/advanced-menu#enter-system-shell), and execute command `sudo apt update && sudo apt upgrade`. This command also upgrades `czertainly-appliance-tools` package, this package provides [TUI](./TUI/intro), it is necessary to close the open shell connection and login back to start using the new version of the TUI.

The above command first updates information about package versions and the second upgrades them. This way is safe from major upgrades and should be done periodically.

#### OS upgrades

The upgrade of the OS can cause downtime and can introduce dependency problems with the CZERTAINLY platform. Always check our site first before trying to do the OS upgrade.

The new major version of the Debian system is released every 2 years and has [LTS support](https://wiki.debian.org/LTS) lasting typically 5 years in total. It is perfectly safe to operate the CZERTAINLY platform on an older version of the Debian OS until the end of its LTS support.

The Debian Operating System is designed to support upgrades between major versions by `apt dist-upgrade`, however, we recommend to rather use a new version of CZERTAINLY Virtual Appliance.

The following table shows which versions of Virtual Appliance are based on which version of Debian OS.

| Appliance version | Debian version |
|-------------------|----------------|
| upto 2.10 | Bullseye (11) |
| from 2.11 | Bookworm (12) |


In case you decide to upgrade your Virtual appliance based on Debian Bullseye, you need to resolve the PostgreSQL version issue. Bullseye is using version 13 and Bookworm version 15. The suggested way how to proceed is to:
 * [backup](#backup) database,
 * delete the Postgres 13 version and purge database files from the drive,
 * install the Postgres 15,
 * [restore](#restore) database,
 * re-run CZERTAINLY installation from the main menu.

#### Kubernetes upgrades

CZERTAINLY Virtual Appliance is using [RKE2](https://docs.rke2.io/) as Kubernetes distribution, latest version can be checked in their [Relase Notes](https://docs.rke2.io/release-notes/v1.31.X). The actual running version on Appliance can be checked by the shell command `kubectl version`. Example output:
```bash
$ kubectl version
Client Version: v1.28.11+rke2r1
Kustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3
Server Version: v1.28.11+rke2r1
```

To upgrade exec "Install CZERTAINLY" from the main menu. This will download the a version of the RKE2 installer, which you can see in the Ansible output:
```
TASK [rke2 : download rke2 installer] ******************************************
changed: [localhost]
```
Exec installer from shell command `sudo /usr/local/bin/rke2-install.sh`, example output:
```bash
$ sudo /usr/local/bin/rke2-install.sh
[sudo] password for czertainly:
[INFO]  finding release for channel stable
[INFO]  using v1.30.4+rke2r1 as release
[INFO]  downloading checksums at https://github.com/rancher/rke2/releases/download/v1.30.4+rke2r1/sha256sum-amd64.txt
[INFO]  downloading tarball at https://github.com/rancher/rke2/releases/download/v1.30.4+rke2r1/rke2.linux-amd64.tar.gz
[INFO]  verifying tarball
[INFO]  unpacking tarball file to /usr/local
```
This downloads and deploys a new version of RKE2. Next, you need to restart RKE2. Exec `sudo systemctl restart rke2-server.service` and finally verify that Kubernetes was upgraded:

```bash
$ kubectl version
Client Version: v1.30.4+rke2r1
Kustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3
Server Version: v1.30.4+rke2r1
```


#### CZERTAINLY upgrade

It is possible to upgrade CZERTAINLY just by raising the version number in [CZERTAINLY configuration](./TUI/main-menu#configure-czertainly) and executing [CZERTAINLY Instalation](./TUI/main-menu#install-czertainly). It should work for upgrades from version 2.8.0 upwards, but you have to raise the minor version number by 1.

We recommend removing all CZERTAINLY components and installing them back, database with all configurations and all your certificates is untouched during this task. This process involves downtime. Follow the tasks:

Perform [OS upgrade](#os-upgrades). Log out and re-login to open a new session of the TUI.

From the Advanced menu select [Remove RKE2 & CZERTAINLY](./TUI/advanced-menu#remove-rke2--czertainly) this task will remove the Kubernetes cluster together with CZERTAINLY. The database is installed on the OS so it will remain untouched together with CZERTAINLY settings stored in `/etc/czertainly-ansible/vars/`. It is quite quick.

[Configure parameters of email server](./TUI/main-menu#configure-email-server-parameters), this is a new feature of 2.9.0. If you are sure that you do not need notification services, you can disable it in [CZERTAINLY configuration](./TUI/main-menu#configure-czertainly). If you leave the default settings with `hostname` = `mail.example.com` the installation will hang and later timeout.

From version 2.9.0 is it possible to install KeyCloak to allow logging by using username/password. Installing KeyCloak takes some more time, if you are not planning to use it and continue to use certificates, disable KeyCloak inside [CZERTAINLY configuration](./TUI/main-menu#configure-czertainly).

Execute [Install CZETAINLY](TUI/main-menu#install-czertainly) from the main menu. This task will execute Ansible to install the Kubernetes cluster and later to install CZERTAINLY.

### Backup

We suggest to setup periodical snapshoting/backup task of complete appliance on your virtual server platform.

Minimum backup consist:
* `/home/czertainly`
* `/etc/czertainly-ansible/vars/`
* database dump:
 ```
 (sudo -u postgres -- pg_dump czertainlydb) > czertainlydb-`date +"%Y-%m-%d-%H:%M:%S"`.dump.sql
 ```

### Restore

This method is intended mainly for migrating CZERTAINLY from one Appliance to another Appliance, for example when changing a major version of Debian.

First, do a Backup on the old CZERTAINLY Appliance as described above.

Start a brand new instance of Appliance, [upgrade OS](#os-upgrades).

Extract backups of `/home/czertainly` and `/etc/czertainly-ansible/vars/`.

Execute [Install CZETAINLY](TUI/main-menu#install-czertainly) from the main menu. This will install a completely new CZERTAINLY based on your settings.

Stop Kubernetes:
```
sudo systemctl stop rke2-server.service
sudo systemctl stop kubepods.slice
```

Delete new empty Postgres database:
```
echo "DROP DATABASE czertainlydb;" | sudo -u postgres psql
```

Restore the CZERTAINLY database and populate it with data from your backup:
```
export ANSIBLE_CONFIG=/etc/czertainly-ansible/ansible.cfg
sudo /usr/bin/ansible-playbook /etc/czertainly-ansible/playbooks/czertainly.yml -t postgress
cat /home/czertainly/czertainlydb-<YYYY-DD-MM-HH:MM:SS>.dump.sql | sudo -u postgres psql czertainlydb
```

Start Kubernetes:
```
sudo systemctl start kubepods.slice
sudo systemctl start rke2-server.service
```

Give it several minutes to start and examine the status of CZERTAINLY by command `czertainly-status`.