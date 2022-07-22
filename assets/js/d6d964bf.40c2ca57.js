"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5061],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="Integration Guide",c={unversionedId:"connectors/ms-adcs-connector/integration-guide",id:"connectors/ms-adcs-connector/integration-guide",title:"Integration Guide",description:"This document outlines the steps necessary to be taken on the Windows Server before the connector can be configured.",source:"@site/docs/12-connectors/10-ms-adcs-connector/04-integration-guide.md",sourceDirName:"12-connectors/10-ms-adcs-connector",slug:"/connectors/ms-adcs-connector/integration-guide",permalink:"/docs/connectors/ms-adcs-connector/integration-guide",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/connectors/overview"},next:{title:"Integration Guide",permalink:"/docs/connectors/ejbca-ng-connector/integration-guide"}},u={},d=[{value:"Active Directory Presence",id:"active-directory-presence",level:2},{value:"Active Directory Certificate Services Presence",id:"active-directory-certificate-services-presence",level:2},{value:"Windows Remote Management Configuration",id:"windows-remote-management-configuration",level:2},{value:"Create a user used for WinRM",id:"create-a-user-used-for-winrm",level:2},{value:"Firewall and Testing",id:"firewall-and-testing",level:2},{value:"Install PSPKI module",id:"install-pspki-module",level:2},{value:"Installation steps",id:"installation-steps",level:3}],m={toc:d};function p(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration-guide"},"Integration Guide"),(0,i.kt)("p",null,"This document outlines the steps necessary to be taken on the Windows Server before the connector can be configured."),(0,i.kt)("p",null,"This integration guide was tested on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows Server 2012 R2"),(0,i.kt)("li",{parentName:"ul"},"Windows Server 2016"),(0,i.kt)("li",{parentName:"ul"},"Windows Server 2019")),(0,i.kt)("h2",{id:"active-directory-presence"},"Active Directory Presence"),(0,i.kt)("p",null,"Depending on your environment, install the Active Directory Server Role according to the instructions from Microsoft and promote the Domain. Omit the step if you already have an onsite Active Directory structure. Make sure, the machine you are connecting is a member of the AD Domain."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use as example the following guide:\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/deploy/install-a-new-windows-server-2012-active-directory-forest--level-200-"},"Install a New Windows Server 2012 Active Directory Forest (Level 200) | Microsoft Docs")))),(0,i.kt)("h2",{id:"active-directory-certificate-services-presence"},"Active Directory Certificate Services Presence"),(0,i.kt)("p",null,"Depending on your environment, install the Active Directory Certificate Services Server Role according to the instructions from Microsoft. Omit the step if you already have Microsoft Certification Authority Running."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use as example the following guide:\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/jj717285(v=ws.11)"},"Install Active Directory Certificate Services | Microsoft Docs")))),(0,i.kt)("h2",{id:"windows-remote-management-configuration"},"Windows Remote Management Configuration"),(0,i.kt)("p",null,"Windows Remote Management is used to facilitate client-less integration with Microsoft Certification Authority. To configure Windows Remote Management (WinRM), run the following command from an elevated PowerShell console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"winrm quickconfig\n")),(0,i.kt)("p",null,"Check that the WinRM Service is listening on port 5985 by running the following command from an elevated PowerShell console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"winrm e winrm/config/listener\n")),(0,i.kt)("p",null,"Validate the default configuration of WinRM service by running the following command from the elevated PowerShell console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"winrm get winrm/config\n")),(0,i.kt)("p",null,"Under the service configuration, negotiation authentication needs to be enabled. Check the output of the previous command to verify that ",(0,i.kt)("inlineCode",{parentName:"p"},"Negotiate = true"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Negotiate = true",src:n(6412).Z,width:"300",height:"181"})),(0,i.kt)("h2",{id:"create-a-user-used-for-winrm"},"Create a user used for WinRM"),(0,i.kt)("p",null,"To enable the WinRM connection, create a user in Active Directory and assign the user with necessary permissions by adding the user to the respective groups as per your use case.\nTo enable the user to connect through WinRM, the user needs to be in Remote Management Users user group.\nSince WinRM connection requires escalation of permission, the user needs to be either a Domain Admin, or needs to be a local administrator on the machine where the connector is going to connect to. To add the user to local administrators group run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"net localgroup Administrators /add \u201cUser Name\u201d\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use the full domain login domain\\username."))),(0,i.kt)("h2",{id:"firewall-and-testing"},"Firewall and Testing"),(0,i.kt)("p",null,"To connect to the machine that has WinRM enabled, the firewall needs to allow inbound connections from the connector on TCP/IP port 5985.\nTo test the correct setup of WinRM, the machine can be accessed over WinRM from any Windows Machine with PowerShell using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Enter-PSSession \u201cMachine IP or Name\u201d -Credential \u201cUser Name\u201d\n")),(0,i.kt)("p",null,"Be aware, that by default WinRM client configuration only allows Kerberos authentication to not known hosts (not in domain). To add your server to the trusted hosts on the client Windows machine run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-Item WSMan:localhost\\client\\trustedhosts -value \u201cMachine IP or Name\u201d\n")),(0,i.kt)("h2",{id:"install-pspki-module"},"Install PSPKI module"),(0,i.kt)("p",null,"To provide the rich functions, the Microsoft Windows set of PowerShell commands for managing Certification Authorities needs to be expanded. To do this, connector makes use of the ",(0,i.kt)("strong",{parentName:"p"},"PSPKI module for PowerShell")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PKISolutions/PSPKI"},"GitHub - PKISolutions/PSPKI: PowerShell PKI Module"),"."),(0,i.kt)("p",null,"To install the PSPKI module, first make sure you are using the newest version of PowerShell from Microsoft. At least version 5 is required."),(0,i.kt)("h3",{id:"installation-steps"},"Installation steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable TLSv1.2 Protocol for PowerShell by running the following in an elevated PowerShell console on the server:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Register a PSRepository for installation of modules to PowerShell by running the following in an elevated PowerShell console on the server:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Register-PSRepository -Default\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Finally, install the PSPKI module by running the following in an elevated PowerShell console on the server:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Module -Name PSPKI\n")))}p.isMDXComponent=!0},6412:function(e,t,n){t.Z=n.p+"assets/images/negotiate-e019c1db129025aa3f5e08e2c2e2cc16.png"}}]);