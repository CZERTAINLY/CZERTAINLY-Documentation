"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4852],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52820:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={},s="Operations",u={unversionedId:"certificate-key/installation-guide/deployment/deployment-appliance/operations",id:"certificate-key/installation-guide/deployment/deployment-appliance/operations",title:"Operations",description:"The following document describes advanced operations for the management of virtual appliance:",source:"@site/docs/10-certificate-key/03-installation-guide/04-deployment/06-deployment-appliance/05-operations.md",sourceDirName:"10-certificate-key/03-installation-guide/04-deployment/06-deployment-appliance",slug:"/certificate-key/installation-guide/deployment/deployment-appliance/operations",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/operations",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced menu",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/TUI/advanced-menu"},next:{title:"Create Super Administrator",permalink:"/docs/certificate-key/installation-guide/create-super-administrator"}},p={},d=[{value:"Virtual appliance management",id:"virtual-appliance-management",level:2},{value:"Shut down",id:"shut-down",level:3},{value:"Restart",id:"restart",level:3},{value:"Update system",id:"update-system",level:3},{value:"User management",id:"user-management",level:2},{value:"Create new user",id:"create-new-user",level:3},{value:"Grant user admin privileges",id:"grant-user-admin-privileges",level:3},{value:"Change user password",id:"change-user-password",level:3},{value:"Delete user",id:"delete-user",level:3},{value:"Remove user admin privileges",id:"remove-user-admin-privileges",level:3},{value:"Advanced tasks",id:"advanced-tasks",level:2},{value:"Custom Helm chart values",id:"custom-helm-chart-values",level:3}],c={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"operations"},"Operations"),(0,o.kt)("p",null,"The following document describes advanced operations for the management of virtual appliance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#virtual-appliance-management"},"Virtual appliance management")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#user-management"},"User management")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#advanced-tasks"},"Advanced tasks"))),(0,o.kt)("h2",{id:"virtual-appliance-management"},"Virtual appliance management"),(0,o.kt)("h3",{id:"shut-down"},"Shut down"),(0,o.kt)("p",null,"To shut down the virtual appliance use ACPI shutdown call of your virtualization platform or select ",(0,o.kt)("strong",{parentName:"p"},"Advanced options -> ",(0,o.kt)("a",{parentName:"strong",href:"./TUI/advanced-menu#shutdown-system"},"Shutdown system")),"."),(0,o.kt)("h3",{id:"restart"},"Restart"),(0,o.kt)("p",null,"To restart the virtual appliance, select ",(0,o.kt)("strong",{parentName:"p"},"Advanced options -> Reboot system"),". Do not use cold reboot function on your virtualization platform, as it could lead to file-system corruption."),(0,o.kt)("h3",{id:"update-system"},"Update system"),(0,o.kt)("p",null,"Updating of the virtual appliance system consists of updating and upgrading included packages, it can be easily done by selecting ",(0,o.kt)("strong",{parentName:"p"},"Advanced options -> Update Operating System")," from the menu."),(0,o.kt)("h2",{id:"user-management"},"User management"),(0,o.kt)("h3",{id:"create-new-user"},"Create new user"),(0,o.kt)("p",null,"To create user with username ",(0,o.kt)("inlineCode",{parentName:"p"},"john"),", execute the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser john\n")),(0,o.kt)("p",null,"Then you will be requested to fill in user details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"czertainly@czertainly:~$ sudo adduser john\n[sudo] password for czertainly:\nAdding user `john' ...\nAdding new group `john' (1001) ...\nAdding new user `john' (1001) with group `john' ...\nCreating home directory `/home/john' ...\nCopying files from `/etc/skel' ...\nNew password:\nRetype new password:\npasswd: password updated successfully\nChanging the user information for john\nEnter the new value, or press ENTER for the default\n        Full Name []: John Doe\n        Room Number []:\n        Work Phone []:\n        Home Phone []:\n        Other []:\nIs the information correct? [Y/n]\n")),(0,o.kt)("h3",{id:"grant-user-admin-privileges"},"Grant user admin privileges"),(0,o.kt)("p",null,"To grant user admin privileges, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser john sudo\n")),(0,o.kt)("h3",{id:"change-user-password"},"Change user password"),(0,o.kt)("p",null,"To change password of another user ",(0,o.kt)("inlineCode",{parentName:"p"},"john"),", execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo passwd john\n")),(0,o.kt)("h3",{id:"delete-user"},"Delete user"),(0,o.kt)("p",null,"To delete user, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo deluser john\n")),(0,o.kt)("h3",{id:"remove-user-admin-privileges"},"Remove user admin privileges"),(0,o.kt)("p",null,"To remove admin privileges for user, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo deluser john sudo\n")),(0,o.kt)("h2",{id:"advanced-tasks"},"Advanced tasks"),(0,o.kt)("h3",{id:"custom-helm-chart-values"},"Custom Helm chart values"),(0,o.kt)("p",null,"The installation/upgrade process of CZERTAINLY is managed by the ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),"."),(0,o.kt)("p",null,"Default values are stored in file ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/install/czertainly-values.yaml"),". This file gets updated during installation/upgrade when there is newer version of CZERTAINLY chart."),(0,o.kt)("p",null,"If you need to provide your own custom Helm chart values that are not available through the ",(0,o.kt)("a",{parentName:"p",href:"./TUI/intro"},"TUI"),", you need to access the shell of the appliance, create file ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/czertainly/czertainly-values.custom.yaml"),", and put it there."),(0,o.kt)("p",null,"The custom values overwrite the default values during the installation/upgrade process."))}h.isMDXComponent=!0}}]);