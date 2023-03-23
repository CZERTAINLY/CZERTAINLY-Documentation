# Operations

The following document describes advanced operations for the management of virtual appliance:
- [Virtual appliance management](#virtual-appliance-management)
- [User management](#user-management)
- [Advanced tasks](#advanced-tasks)

## Virtual appliance management

### Shut down

To shut down the virtual appliance use ACPI shutdown call of your
virtualization platform or select **Advanced options -> [Shutdown
system](TUI/advanced-menu#shutdown-system)**.

### Restart

To restart the virtual appliance, select **Advanced options -> Reboot
system**. Do not use cold reboot function on your virtualization
platform, as it could lead to file-system corruption.

### Update system

Updating of the virtual appliance system consists of updating and
upgrading included packages, it can be easily done by selecting
**Advanced options -> Update Operating System** from the menu.

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

The installation/upgrade process of CZERTAINLY is using Helm. Default
installation values are stored in file
`/root/install/czertainly-values.yaml` this file get upgraded during
installation/upgrade process any time when official values
distributed with Helm charts get updated.

Custom values set through TUI are stored in files in
`/etc/czertainly-ansible/vars/` directory and during the
installation/upgrade process they are compiled into file
`/root/install/czertainly-values.local.yaml`. This file get
overwritten every time installation/upgrade process is executed.

Do not modify previously mentioned files. If you need to provide
custom Helm chart values, put them into file
`/home/czertacinly/czertainly-values.custom.yaml`, the file doesn't
exist by default in CZERTAINLY appliance, you need to create if from
the scratch.

