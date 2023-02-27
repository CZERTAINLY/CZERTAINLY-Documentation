# Operations

The following document describes operations for the management of virtual appliance:
- Virtual appliance management
- User management
- Advanced tasks

## Virtual appliance management

### Shut down

To shut down the virtual appliance, select **Advanced options -> Shutdown system** or use the ACPI shutdown call of your virtualization platform.

### Restart

To restart the virtual appliance, select **Advanced options -> Reboot system**. Do not use cold reboot function on your virtualization platform, as it could lead to filesystem corruption.

### Update system

Updating of the virtual appliance system consists of updating and upgrading included packages:
```bash
sudo apt -y update && sudo apt -y upgrade
```

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

### Reset RKE2 node

FIXME: czertainly-manager.sh executes `rke2 server --cluster-reset` do we needed this.

Whenever the IP address or hostname is changed for the virtual appliance, the RKE2 node must be reset.
To reset RKE2 node, execute the following command:
```bash
sudo -s czertainly-manager.sh resetnode
```

When asked, choose to reset RKE2 node, enable and start RKE2 service.

### Custom helm chart values

If you need provide custom helm chart values, put them into file `/home/czertacinly/czertainly-values.custom.yaml` and re-run instalation.
