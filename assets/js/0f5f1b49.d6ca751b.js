"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4852],{71406:function(e,n,s){s.r(n),s.d(n,{assets:function(){return o},contentTitle:function(){return t},default:function(){return h},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=s(85893),i=s(11151);const r={},t="Operations",l={id:"certificate-key/installation-guide/deployment/deployment-appliance/operations",title:"Operations",description:"The following document describes advanced operations for the management of virtual appliance:",source:"@site/docs/10-certificate-key/03-installation-guide/04-deployment/06-deployment-appliance/05-operations.md",sourceDirName:"10-certificate-key/03-installation-guide/04-deployment/06-deployment-appliance",slug:"/certificate-key/installation-guide/deployment/deployment-appliance/operations",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/operations",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/03-installation-guide/04-deployment/06-deployment-appliance/05-operations.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced menu",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/TUI/advanced-menu"},next:{title:"Create Super Administrator",permalink:"/docs/certificate-key/installation-guide/create-super-administrator"}},o={},d=[{value:"Virtual appliance management",id:"virtual-appliance-management",level:2},{value:"Shut down",id:"shut-down",level:3},{value:"Restart",id:"restart",level:3},{value:"Update system",id:"update-system",level:3},{value:"User management",id:"user-management",level:2},{value:"Create new user",id:"create-new-user",level:3},{value:"Grant user admin privileges",id:"grant-user-admin-privileges",level:3},{value:"Change user password",id:"change-user-password",level:3},{value:"Delete user",id:"delete-user",level:3},{value:"Remove user admin privileges",id:"remove-user-admin-privileges",level:3},{value:"Advanced tasks",id:"advanced-tasks",level:2},{value:"Custom Helm chart values",id:"custom-helm-chart-values",level:3},{value:"Upgrading",id:"upgrading",level:3},{value:"OS packages upgrades",id:"os-packages-upgrades",level:4},{value:"OS upgrades",id:"os-upgrades",level:4},{value:"CZERTAINLY upgrade",id:"czertainly-upgrade",level:4},{value:"Backup",id:"backup",level:3},{value:"Restore",id:"restore",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"operations",children:"Operations"}),"\n",(0,a.jsx)(n.p,{children:"The following document describes advanced operations for the management of virtual appliance:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#virtual-appliance-management",children:"Virtual appliance management"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#user-management",children:"User management"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#advanced-tasks",children:"Advanced tasks"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"virtual-appliance-management",children:"Virtual appliance management"}),"\n",(0,a.jsx)(n.h3,{id:"shut-down",children:"Shut down"}),"\n",(0,a.jsxs)(n.p,{children:["To shut down the virtual appliance use ACPI shutdown call of your virtualization platform or select ",(0,a.jsx)(n.strong,{children:"Advanced options -> Shutdown system"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"restart",children:"Restart"}),"\n",(0,a.jsxs)(n.p,{children:["To restart the virtual appliance, select ",(0,a.jsx)(n.strong,{children:"Advanced options -> Reboot system"}),". Do not use cold reboot function on your virtualization platform, as it could lead to file-system corruption."]}),"\n",(0,a.jsx)(n.h3,{id:"update-system",children:"Update system"}),"\n",(0,a.jsxs)(n.p,{children:["Updating of the virtual appliance system consists of updating and upgrading included packages, it can be easily done by selecting ",(0,a.jsx)(n.strong,{children:"Advanced options -> Update Operating System"})," from the menu."]}),"\n",(0,a.jsx)(n.h2,{id:"user-management",children:"User management"}),"\n",(0,a.jsx)(n.h3,{id:"create-new-user",children:"Create new user"}),"\n",(0,a.jsxs)(n.p,{children:["To create user with username ",(0,a.jsx)(n.code,{children:"john"}),", execute the following commands:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo adduser john\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then you will be requested to fill in user details:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"czertainly@czertainly:~$ sudo adduser john\n[sudo] password for czertainly:\nAdding user `john' ...\nAdding new group `john' (1001) ...\nAdding new user `john' (1001) with group `john' ...\nCreating home directory `/home/john' ...\nCopying files from `/etc/skel' ...\nNew password:\nRetype new password:\npasswd: password updated successfully\nChanging the user information for john\nEnter the new value, or press ENTER for the default\n        Full Name []: John Doe\n        Room Number []:\n        Work Phone []:\n        Home Phone []:\n        Other []:\nIs the information correct? [Y/n]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"grant-user-admin-privileges",children:"Grant user admin privileges"}),"\n",(0,a.jsx)(n.p,{children:"To grant user admin privileges, execute the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo adduser john sudo\n"})}),"\n",(0,a.jsx)(n.h3,{id:"change-user-password",children:"Change user password"}),"\n",(0,a.jsxs)(n.p,{children:["To change password of another user ",(0,a.jsx)(n.code,{children:"john"}),", execute the following command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo passwd john\n"})}),"\n",(0,a.jsx)(n.h3,{id:"delete-user",children:"Delete user"}),"\n",(0,a.jsx)(n.p,{children:"To delete user, execute the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo deluser john\n"})}),"\n",(0,a.jsx)(n.h3,{id:"remove-user-admin-privileges",children:"Remove user admin privileges"}),"\n",(0,a.jsx)(n.p,{children:"To remove admin privileges for user, execute the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo deluser john sudo\n"})}),"\n",(0,a.jsx)(n.h2,{id:"advanced-tasks",children:"Advanced tasks"}),"\n",(0,a.jsx)(n.h3,{id:"custom-helm-chart-values",children:"Custom Helm chart values"}),"\n",(0,a.jsxs)(n.p,{children:["The installation/upgrade process of CZERTAINLY is managed by the ",(0,a.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Default values are stored in file ",(0,a.jsx)(n.code,{children:"/root/install/czertainly-values.yaml"}),". This file gets updated during installation/upgrade when there is newer version of CZERTAINLY chart."]}),"\n",(0,a.jsxs)(n.p,{children:["If you need to provide your own custom Helm chart values that are not available through the ",(0,a.jsx)(n.a,{href:"./TUI/intro",children:"TUI"}),", you need to access the shell of the appliance, create file ",(0,a.jsx)(n.code,{children:"/home/czertainly/czertainly-values.custom.yaml"}),", and put it there."]}),"\n",(0,a.jsx)(n.p,{children:"The custom values overwrite the default values during the installation/upgrade process."}),"\n",(0,a.jsx)(n.h3,{id:"upgrading",children:"Upgrading"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Before any upgrade process make sure you have recent snapshot first!"})}),"\n",(0,a.jsx)(n.h4,{id:"os-packages-upgrades",children:"OS packages upgrades"}),"\n",(0,a.jsxs)(n.p,{children:["CZERTAINLY Virtual Appliance is based on Debian GNU/Linux. To upgrade it ",(0,a.jsx)(n.a,{href:"./TUI/advanced-menu#enter-system-shell",children:"enter system shell"}),", and execute command ",(0,a.jsx)(n.code,{children:"sudo apt update && sudo apt upgrade"}),". This command also upgrades ",(0,a.jsx)(n.code,{children:"czertainly-appliance-tools"})," package, this package provides ",(0,a.jsx)(n.a,{href:"./TUI/intro",children:"TUI"}),", it is necessary to close the open shell connection and login back to start using the new version of the TUI."]}),"\n",(0,a.jsx)(n.p,{children:"The above command first updates information about package versions and the second upgrades them. This way is safe from major upgrades and should be done periodically."}),"\n",(0,a.jsx)(n.h4,{id:"os-upgrades",children:"OS upgrades"}),"\n",(0,a.jsx)(n.p,{children:"The upgrade of the OS can cause downtime and can introduce dependency problems with the CZERTAINLY platform. Always check our site first before trying to do the OS upgrade."}),"\n",(0,a.jsxs)(n.p,{children:["The new major version of the Debian system is released every 2 years and has ",(0,a.jsx)(n.a,{href:"https://wiki.debian.org/LTS",children:"LTS support"})," lasting typically 5 years in total. It is perfectly safe to operate the CZERTAINLY platform on an older version of the Debian OS until the end of its LTS support."]}),"\n",(0,a.jsxs)(n.p,{children:["The Debian Operating System is designed to support upgrades between major versions by ",(0,a.jsx)(n.code,{children:"apt dist-upgrade"}),", however, we recommend to rather use a new version of CZERTAINLY Virtual Appliance."]}),"\n",(0,a.jsx)(n.p,{children:"The following table shows which versions of Virtual Appliance are based on which version of Debian OS."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Appliance version"}),(0,a.jsx)(n.th,{children:"Debian version"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"upto 2.10"}),(0,a.jsx)(n.td,{children:"Bullseye (11)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"from 2.11"}),(0,a.jsx)(n.td,{children:"Bookworm (12)"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"In case you decide to upgrade your Virtual appliance based on Debian Bullseye, you need to resolve the PostgreSQL version issue. Bullseye is using version 13 and Bookworm version 15. The suggested way how to proceed is to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#backup",children:"backup"})," database,"]}),"\n",(0,a.jsx)(n.li,{children:"delete the Postgres 13 version and purge database files from the drive,"}),"\n",(0,a.jsx)(n.li,{children:"install the Postgres 15,"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#restore",children:"restore"})," database,"]}),"\n",(0,a.jsx)(n.li,{children:"re-run CZERTAINLY installation from the main menu."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"czertainly-upgrade",children:"CZERTAINLY upgrade"}),"\n",(0,a.jsxs)(n.p,{children:["It is possible to upgrade CZERTAINLY just by raising the version number in ",(0,a.jsx)(n.a,{href:"./TUI/main-menu#configure-czertainly",children:"CZERTAINLY configuration"})," and executing ",(0,a.jsx)(n.a,{href:"./TUI/main-menu#install-czertainly",children:"CZERTAINLY Instalation"}),". It should work for upgrades from version 2.8.0 upwards, but you have to raise the minor version number by 1."]}),"\n",(0,a.jsx)(n.p,{children:"We recommend removing all CZERTAINLY components and installing them back, database with all configurations and all your certificates is untouched during this task. This process involves downtime. Follow the tasks:"}),"\n",(0,a.jsxs)(n.p,{children:["Perform ",(0,a.jsx)(n.a,{href:"#os-upgrades",children:"OS upgrade"}),". Log out and re-login to open a new session of the TUI."]}),"\n",(0,a.jsxs)(n.p,{children:["From the Advanced menu select ",(0,a.jsx)(n.a,{href:"./TUI/advanced-menu#remove-rke2--czertainly",children:"Remove RKE2 & CZERTAINLY"})," this task will remove the Kubernetes cluster together with CZERTAINLY. The database is installed on the OS so it will remain untouched together with CZERTAINLY settings stored in ",(0,a.jsx)(n.code,{children:"/etc/czertainly-ansible/vars/"}),". It is quite quick."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"./TUI/main-menu#configure-email-server-parameters",children:"Configure parameters of email server"}),", this is a new feature of 2.9.0. If you are sure that you do not need notification services, you can disable it in ",(0,a.jsx)(n.a,{href:"./TUI/main-menu#configure-czertainly",children:"CZERTAINLY configuration"}),". If you leave the default settings with ",(0,a.jsx)(n.code,{children:"hostname"})," = ",(0,a.jsx)(n.code,{children:"mail.example.com"})," the installation will hang and later timeout."]}),"\n",(0,a.jsxs)(n.p,{children:["From version 2.9.0 is it possible to install KeyCloak to allow logging by using username/password. Installing KeyCloak takes some more time, if you are not planning to use it and continue to use certificates, disable KeyCloak inside ",(0,a.jsx)(n.a,{href:"./TUI/main-menu#configure-czertainly",children:"CZERTAINLY configuration"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Execute ",(0,a.jsx)(n.a,{href:"TUI/main-menu#install-czertainly",children:"Install CZETAINLY"})," from the main menu. This task will execute Ansible to install the Kubernetes cluster and later to install CZERTAINLY."]}),"\n",(0,a.jsx)(n.h3,{id:"backup",children:"Backup"}),"\n",(0,a.jsx)(n.p,{children:"We suggest to setup periodical snapshoting/backup task of complete appliance on your virtual server platform."}),"\n",(0,a.jsx)(n.p,{children:"Minimum backup consist:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"/home/czertainly"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"/etc/czertainly-ansible/vars/"})}),"\n",(0,a.jsx)(n.li,{children:"database dump:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'(sudo -u postgres -- pg_dump czertainlydb) > czertainlydb-`date +"%Y-%m-%d-%H:%M:%S"`.dump.sql\n'})}),"\n",(0,a.jsx)(n.h3,{id:"restore",children:"Restore"}),"\n",(0,a.jsx)(n.p,{children:"This method is intended mainly for migrating CZERTAINLY from one Appliance to another Appliance, for example when changing a major version of Debian."}),"\n",(0,a.jsx)(n.p,{children:"First, do a Backup on the old CZERTAINLY Appliance as described above."}),"\n",(0,a.jsxs)(n.p,{children:["Start a brand new instance of Appliance, ",(0,a.jsx)(n.a,{href:"#os-upgrades",children:"upgrade OS"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Extract backups of ",(0,a.jsx)(n.code,{children:"/home/czertainly"})," and ",(0,a.jsx)(n.code,{children:"/etc/czertainly-ansible/vars/"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Execute ",(0,a.jsx)(n.a,{href:"TUI/main-menu#install-czertainly",children:"Install CZETAINLY"})," from the main menu. This will install a completely new CZERTAINLY based on your settings."]}),"\n",(0,a.jsx)(n.p,{children:"Stop Kubernetes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"sudo systemctl stop rke2-server.service\nsudo systemctl stop kubepods.slice\n"})}),"\n",(0,a.jsx)(n.p,{children:"Delete new empty Postgres database:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'echo "DROP DATABASE czertainlydb;" | sudo -u postgres psql\n'})}),"\n",(0,a.jsx)(n.p,{children:"Restore the CZERTAINLY database and populate it with data from your backup:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"export ANSIBLE_CONFIG=/etc/czertainly-ansible/ansible.cfg\nsudo /usr/bin/ansible-playbook /etc/czertainly-ansible/playbooks/czertainly.yml -t postgress\ncat /home/czertainly/czertainlydb-<YYYY-DD-MM-HH:MM:SS>.dump.sql | sudo -u postgres psql czertainlydb\n"})}),"\n",(0,a.jsx)(n.p,{children:"Start Kubernetes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"sudo systemctl start kubepods.slice\nsudo systemctl start rke2-server.service\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Give it several minutes to start and examine the status of CZERTAINLY by command ",(0,a.jsx)(n.code,{children:"czertainly-status"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var a=s(67294);const i={},r=a.createContext(i);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);