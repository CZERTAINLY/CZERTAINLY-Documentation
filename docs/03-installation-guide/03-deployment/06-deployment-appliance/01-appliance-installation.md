# CZERTAINLY Appliance
CZERTAINLY Appliance is image of virtual operating system packed in Open Virtual Appliance (OVA) format for running CZERTAINLY application in Kubernetes node. It is intended mainly for testing and evaluation purposes, but it may be used for production environment too.

CZERTAINLY Appliance consist of:
* [Deblian](https://www.debian.org/) Linux operating system with amd64 architecture
* [RKE2](https://rke2.io) , also known as RKE Government, is Rancher's next-generation Kubernetes distribution
* [Helm](https://helm.sh/) package manager for Kubernetes for CZERTAINLY application download, installation, upgrade and removal
* [PostgreSQL](https://www.postgresql.org/) database server for CZERTAINLY application data
* CZERTAINLY Appliance Tools - scripts to simplify CZERTAINLY application operation

Appliance does not contain CZERTAINLY application by default. It must be downloaded and installed after is the Appliance configuration personalized.

Appliance has configured SSH server and default system user that can use virtual console or SSH protocol to log in to appliance.


# Download and import image
To get the CZERTAINLY virtual appliance running in your environment for further  installation  and configuration, you must:
1. Download CZERTAINLY Appliance image [czertainly.ova](https://threekeycz-my.sharepoint.com/:f:/g/personal/jakub_moravek_3key_company/EtmV8Ww2_0ZHoYP7rZrXINgBq1ammuCsjpWlSTbgxbDH9g?e=uebBhd)
2. Import CZERTAINLY Appliance image to your virtual infrastructure. For testing purposes, you can use [Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads), [VMware Workstation Player](https://www.vmware.com/content/vmware/vmware-published-sites/us/products/workstation-player/workstation-player-evaluation.html.html), [Paralels Desktop](https://www.parallels.com/) or any other virtualization tools capable of importing virtual images in OVA format. Import of virtual appliance is not covered by this guide. Please, refer to instructions of your virtualization SW vendor.

# CZERTAINLY Appliance quick install and configuration

To make initial configuration of Appliance, you must log into virtual console or through SSH using the default credentials:
* **username**: czertainly
* **password**: newgenerationtrustcare

After logging into CZERTAINLY you need to do just few tasks.



And to initialize the appliance:
1. Change hostname and networking parameters, if needed.
2. Update the system
3. Prepare configuration and prepare server certificate sign request.
4. Install CZERTAINLY application.


## 1. Change hostname and networking parameters, if needed
By default, CZERTAINLY is configured to use dynamically assigned addresses from DHCP with  hostname **czertainly**, domain **local** and no proxy which may be useful for testing purposes, but not for production. To change anything of that, execute:
```bash
sudo -s czertainly-manager.sh changenet
```
The safest way is to reboot the system when asked before doing any other changes.

After the Appliance is rebooted, you have to login to CZERTAINLY again to continue with CZERTAINLY install process. 

## 2. Update the system
However CZERTAINLY Appliance should be up to date, it's always good to be sure that you have the latest patches installed. As CZERTAINLY Appliance is based on Debian, use apt command to update lust of Debian packages and all upgradable. 
```bash
sudo apt -y update && sudo apt -y upgrade
```

## 3. Prepare configuration and prepare server certificate sign request
Now it is needed to prepare CZERTAINLY configuration and create CSR.
### Configuration and preparation
There are few mandatory parameters that must be changed to be able install and start CZERTAINLY application. These are:
* Postgres server host IP (```global.database.host```) set value to IP of your appliance.
* Change Appliance hostname (```hostName```) value from ```localhost``` to your current hostname including domain name, for exampe ```czertainly.local```.
* Enable ingress bt setting (```ingress.enabled```) value to ```true```.
* Set proxy settings if needed:
	* ```httpProxy```
  * ```httpsProxy```
  * ```noProxy```
  * ```global.httpProxy```
  * ```global.httpsProxy```
  * ```global.noProxy```
  

There are much more parameters that can be changed and some of them should be changed in production, but only these three are needed to be updated to be able start CZERTAINLY and to connect to it.

Use your favorite editor, for example nano and edit default values file ```nano /home/czertainly/czertainly-values.yaml```.
```bash
nano /home/czertainly/czertainly-values.yaml
```
Find the parameters you need to change and update them. More information can be found in [Configurable parameters](https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/tree/develop/charts/czertainly#configurable-parameters) chapter of [CZERTAINLY Helm Chart](https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/tree/develop/charts/czertainly) repository, that also contains [sample values file](https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/develop/charts/czertainly/values.yaml).


### Certificate sign request
If needed, you can edit server certificate sign request parameters, but for testing purposes, it can be left with default values.

CSR preparation consists of:
1. Certificate CSR attributes configuration
2. Certificate sign request generation 
#### Certificate sign request attributes configuration 
```bash
nano /home/czertainly/openssl.cnf
```

#### Certificate sign request generation
To generate CSR, execute CZERTAINLY Manager.
```bash
sudo -s czertainly-manager.sh generatecsr
```
It will use openssl attributes from ```openssl.cnf``` file.


## 4. Install CZERTAINLY application
Install CZERTAINLY:
```bash
sudo -s czertainly-manager.sh install 
```
You will be asked to enter username and password for harbor repository. After you enter the credentials, init script will:
* Create kubernetes secret for harbor.
* Install CZERTAINLY application.

CZERTAINLY web admin interface should be then available on address:
```
http://hostname.domain/administrator/
```
Replace ```hostname``` and ```domain``` with information you entered in ```openssl.cnf```. If you used the default values, the address will be:
```
http://czertainly.local/administrator/
```

If you left the default name czertainly.local, or set name that is not in recorded in DNS servers you may probably need to change your local ```hosts``` file, to be able connect to web interface. Check Google, there are several guides for [Windows](https://pureinfotech.com/edit-hosts-file-windows-11/), [Mac](https://www.inmotionhosting.com/support/edu/software/how-to-edit-your-hosts-file-on-a-mac/) and [Linux](https://linuxhint.com/edit-hosts-file-on-linux/), how to do it.

You also must have installed client certificate that is used for authentication to CZERTAINLY web admin interface installed in your browser. For testing purposes, you may use the default sample, if you have not created own one.

# CZERTAINLY Operation
## Shut down and restart appliance
### Shut down appliance
To shut down CZERTAINLY Appliance execute:
```bash
sudo poweroff
```
### Restart appliance
To reboot CZERTAINLY Appliance execute:
```bash
sudo reboot
```

### Update the operating system
To update system:
1. Update list of packages
2. Upgrade packages

#### Update list of packages
To update list of Linux packages execute:
```bash
sudo apt update
```

#### Upgrade packages
To update Linux packages execute:
```bash
sudo apt upgrade
```

## User management
### Change password
To chnage your own password execute command ```passwd```.
To change password of another user execute:
```bash
sudo passwd john
```
Replace username ```john``` with the username of the youser that needs to change the password. 

### Create new user
To create new user:
1. Create new system user:
```bash
sudo adduser john
```
Then you will be requested to fill in user details.
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
Replace username ```john``` and the other parameters with the values cooresponding to the new user.

2. Grant user admin priviledges (Add user to group sudo.): 
```bash
sudo adduser john sudo
```

### Delete user
To delete user:
1. Delete user from sudo group:
```bash
sudo deluser john sudo
```
2. Delete user account:
```bash
sudo deluser john
```
Replace username ```john``` with the username you want to delete. 

## Reset RKE2 node
If you have another IP address or hostname from the default ones, which you probably have or if you were changing somerting duging executing ```czertainly-manager.sh changenet``` reset the RKE2 node. 
```bash
sudo -s czertainly-manager.sh resetnode
```
Choose to reset RKE2 node, enable and start RKE2 service when asked.

## Import signed server certificate
* During the server certificate import porcess CZERTAINLY Manager will ask you to enter file name of the signed server certificate.
* If you have signed previously created certificate sign request in external CA, you should copy it to CZERTAINLY Appliance, so the ```czertainly-manager.sh``` can use it to create RKE2 secret that is used to set CZERTAINLY web server TLS certificate.
* Default location for server certificate file is ```/home/czertainly/czertainly.crt```.
* If you decided to create self signed certificate, it is stored by application in the default file location.

Import signed certificate:
```bash
sudo -s czertainly-manager.sh importcert
```
Import certificate command will create new secret in czertainly namespace.


# Troubleshooting
```bash
export POD_NAME=$(kubectl get pods --namespace czertainly -l "app.kubernetes.io/name=api-gateway-haproxy,app.kubernetes.io/instance=czertainly-tlm" -o jsonpath="{.items[0].metadata.name}")
export CONTAINER_PORT=$(kubectl get pod --namespace czertainly $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
echo "Visit http://127.0.0.1:8080/administrator to use your application"
kubectl --namespace czertainly port-forward $POD_NAME 8080:$CONTAINER_PORT
```
