# Overview

CZERTAINLY virtual appliance is pre-built image of virtual operating system packed in Open Virtual Appliance (OVA) format for running CZERTAINLY platform.
It is intended for the environments where no Kubernetes cluster is available or the Kubernetes cluster cannot be used for various reasons.

## Virtual appliance content

Virtual Appliance consist of:
* **[Deblian](https://www.debian.org/)** Linux operating system with amd64 architecture
* **[RKE2](https://rke2.io)**, also known as RKE Government, which is Rancher's next-generation Kubernetes distribution
* **[Helm](https://helm.sh/)** package manager for Kubernetes to install and upgrade CZERTAINLY Helm charts
* **[PostgreSQL](https://www.postgresql.org/)** database server to persist platform data
* **CZERTAINLY Virtual Appliance Tools** as a set of scripts to simplify operations with the virtual appliance
* **SSH server** and default system user that can be used to access console and login into virtual appliance

Virtual appliance does not contain CZERTAINLY platform containers by default. Containers are downloaded and deployed after the configuration of the virtual appliance is applied.

:::info CZERTAINLY container access
Because of different availability and public/private access to containers, the virtual appliance by default does not contain pre-downloaded containers and images. All required and available containers and images are downloaded once the virtual appliance is configured with the repository and access credentials.
:::

## Download and import image

To get the virtual appliance running in your environment for further  installation  and configuration, you must:
1. Download virtual appliance image: [czertainly.ova](https://threekeycz-my.sharepoint.com/:f:/g/personal/jakub_moravek_3key_company/EtmV8Ww2_0ZHoYP7rZrXINgBq1ammuCsjpWlSTbgxbDH9g?e=uebBhd).
2. Import virtual appliance image to your virtual infrastructure.

For testing purposes, you can use:
- [Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [VMware Workstation Player](https://www.vmware.com/content/vmware/vmware-published-sites/us/products/workstation-player/workstation-player-evaluation.html.html)
- [Paralels Desktop](https://www.parallels.com/)
- or any other virtualization tools capable of importing virtual images in **OVA** format

:::caution Importing virtual appliance
Import of virtual appliance is not covered by this documentation. Please refer to instructions of your virtualization SW vendor.
:::

:::success
Access to pre-built CZERTAINLY virtual appliance is provided based on request.
:::