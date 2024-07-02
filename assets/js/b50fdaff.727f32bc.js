"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6227],{46584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=t(74848),r=t(28453);const o={},l="Firewall Configuration",a={id:"certificate-key/integration-guides/adcs/firewall-configuration",title:"Firewall Configuration",description:"The following firewall rules need to be configured on the machine for remoting to work properly:",source:"@site/docs/10-certificate-key/20-integration-guides/14-adcs/09-firewall-configuration.md",sourceDirName:"10-certificate-key/20-integration-guides/14-adcs",slug:"/certificate-key/integration-guides/adcs/firewall-configuration",permalink:"/docs/certificate-key/integration-guides/adcs/firewall-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/20-integration-guides/14-adcs/09-firewall-configuration.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSH Configuration",permalink:"/docs/certificate-key/integration-guides/adcs/ssh-configuration"},next:{title:"Create User",permalink:"/docs/certificate-key/integration-guides/adcs/create-user"}},c={},s=[{value:"Testing firewall configuration",id:"testing-firewall-configuration",level:2},{value:"WinRM",id:"winrm",level:3},{value:"SSH",id:"ssh",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"firewall-configuration",children:"Firewall Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The following firewall rules need to be configured on the machine for remoting to work properly:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Protocol"}),(0,i.jsx)(n.th,{children:"Port"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TCP"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"5985"})}),(0,i.jsx)(n.td,{children:"WinRM"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TCP"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"5986"})}),(0,i.jsx)(n.td,{children:"WinRM with HTTPS"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TCP"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"22"})}),(0,i.jsx)(n.td,{children:"SSH"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"testing-firewall-configuration",children:"Testing firewall configuration"}),"\n",(0,i.jsx)(n.h3,{id:"winrm",children:"WinRM"}),"\n",(0,i.jsx)(n.p,{children:"To check the firewall configuration for WinRM, run the following command from an elevated PowerShell console:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"# Confirm the Firewall rule is configured. It should be created automatically by setup. Run the following to verify\n# WinRM over HTTP\nif (!(Get-NetFirewallRule -Name \"Windows Remote Management (HTTP-In)\" -ErrorAction SilentlyContinue | Select-Object Name, Enabled)) {\n    Write-Output \"Firewall Rule 'Windows Remote Management (HTTP-In)' does not exist, creating it...\"\n    New-NetFirewallRule -Name 'Windows Remote Management (HTTP-In)' -DisplayName 'Windows Remote Management (HTTP-In)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 5985\n} else {\n    Write-Output \"Firewall rule 'Windows Remote Management (HTTP-In)' has been created and exists.\"\n}\n\n# Test that the port is open\nTest-NetConnection -ComputerName \"Machine IP or Name\" -Port 5985\n\n# WinRM over HTTPS\nif (!(Get-NetFirewallRule -Name \"Windows Remote Management (HTTPS-In)\" -ErrorAction SilentlyContinue | Select-Object Name, Enabled)) {\n    Write-Output \"Firewall Rule 'Windows Remote Management (HTTPS-In)' does not exist, creating it...\"\n    New-NetFirewallRule -Name 'Windows Remote Management (HTTPS-In)' -DisplayName 'Windows Remote Management (HTTPS-In)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 5986\n} else {\n    Write-Output \"Firewall rule 'Windows Remote Management (HTTPS-In)' has been created and exists.\"\n}\n\n# Test that the port is open\nTest-NetConnection -ComputerName \"Machine IP or Name\" -Port 5986\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ssh",children:"SSH"}),"\n",(0,i.jsx)(n.p,{children:"Check that the SSH port is open by running the following command from an elevated PowerShell console:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"# Confirm the Firewall rule is configured. It should be created automatically by setup. Run the following to verify\nif (!(Get-NetFirewallRule -Name \"OpenSSH-Server-In-TCP\" -ErrorAction SilentlyContinue | Select-Object Name, Enabled)) {\n    Write-Output \"Firewall Rule 'OpenSSH-Server-In-TCP' does not exist, creating it...\"\n    New-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22\n} else {\n    Write-Output \"Firewall rule 'OpenSSH-Server-In-TCP' has been created and exists.\"\n}\n\n# Test that the port is open\nTest-NetConnection -ComputerName \"Machine IP or Name\" -Port 22\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(96540);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);