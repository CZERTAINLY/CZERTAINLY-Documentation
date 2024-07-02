"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[469],{15150:function(e,t,i){i.r(t),i.d(t,{assets:function(){return o},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var r=i(85893),n=i(11151);const s={},c="SCEP Profile",d={id:"certificate-key/protocols/scep/scep-profile",title:"SCEP Profile",description:"SCEP Profile specifies the configurations of the SCEP server behaviour. It holds the configuration listed below:",source:"@site/docs/10-certificate-key/07-protocols/03-scep/03-scep-profile.md",sourceDirName:"10-certificate-key/07-protocols/03-scep",slug:"/certificate-key/protocols/scep/scep-profile",permalink:"/docs/certificate-key/protocols/scep/scep-profile",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/07-protocols/03-scep/03-scep-profile.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/certificate-key/protocols/scep/overview"},next:{title:"Enable SCEP for RA Profile",permalink:"/docs/certificate-key/protocols/scep/enable-scep-ra-profile"}},o={},l=[{value:"<code>SCEP Profile</code> certificate requirements",id:"scep-profile-certificate-requirements",level:2},{value:"Attributes for certificate management",id:"attributes-for-certificate-management",level:2},{value:"Operations on <code>SCEP Profile</code>",id:"operations-on-scep-profile",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"scep-profile",children:"SCEP Profile"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SCEP Profile"})," specifies the configurations of the SCEP server behaviour. It holds the configuration listed below:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Configuration"}),(0,r.jsx)(t.th,{children:"Purpose"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Mandatory"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Name"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"SCEP Profile"})," Name"]}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--success",children:"Yes"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Description"})}),(0,r.jsxs)(t.td,{children:["Description of the ",(0,r.jsx)(t.code,{children:"SCEP Profile"})]}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Challenge Password"})}),(0,r.jsx)(t.td,{children:"Challenge Password to authorize certificate request"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Renewal Threshold"})}),(0,r.jsx)(t.td,{children:"Number of days before the certificate expiration date to allow renewal request"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Half-time of the validity period of the Certificate"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Include CA Certificate"})}),(0,r.jsx)(t.td,{children:"Include certificate of the issuer in the certificate response"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Include CA Certificate Chain"})}),(0,r.jsx)(t.td,{children:"Include complete chain in the certificate response"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Enable Intune"})}),(0,r.jsx)(t.td,{children:"Enable Microsoft Intune integration for certificate request validation"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Intune Tenant"})}),(0,r.jsx)(t.td,{children:"Microsoft Intune Tenant to be used for request Validation"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Intune Application ID"})}),(0,r.jsx)(t.td,{children:"ID of the Microsoft Intune Application"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Intune Application Key"})}),(0,r.jsx)(t.td,{children:"Secret to authenticate with the Intune application"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"CA Certificate"})}),(0,r.jsx)(t.td,{children:"Certificate to be used as SCEP CA certificate (for decryption and signing)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--success",children:"Yes"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"RA Profile"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"RA Profile"})," that will be set as default for the ",(0,r.jsx)(t.code,{children:"SCEP Profile"})]}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"scep-profile-certificate-requirements",children:[(0,r.jsx)(t.code,{children:"SCEP Profile"})," certificate requirements"]}),"\n",(0,r.jsxs)(t.p,{children:["The certificate to be used for the ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," should meet the following criteria"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Certificate should have associated private key managed by the platform"}),"\n",(0,r.jsxs)(t.li,{children:["The key algorithm should be one of the supported ",(0,r.jsx)(t.code,{children:"RSA"})," or ",(0,r.jsx)(t.code,{children:"ECDSA"})]}),"\n",(0,r.jsx)(t.li,{children:"The key pair should have appropriate key set enabled (for encryption and signing)"}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Microsoft Intune certificate requirements",type:"warning",children:(0,r.jsxs)(t.p,{children:["For Microsoft Intune validation, there may be additional requirements for the certificate. See the ",(0,r.jsx)(t.a,{href:"../../integration-guides/intune/overview",children:"Intune Integration Guide"})," for more information."]})}),"\n",(0,r.jsx)(t.h2,{id:"attributes-for-certificate-management",children:"Attributes for certificate management"}),"\n",(0,r.jsxs)(t.p,{children:["If a default ",(0,r.jsx)(t.code,{children:"RA Profile"})," is selected then ",(0,r.jsx)(t.code,{children:"Attributes"})," to issue and revoke certificates must be configured, if needed."]}),"\n",(0,r.jsx)(t.admonition,{title:"Certificate operations",type:"warning",children:(0,r.jsxs)(t.p,{children:["Certificate management ",(0,r.jsx)(t.code,{children:"Attributes"})," for ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," are used during issuing process of the certificate and cannot be changed by the SCEP client."]})}),"\n",(0,r.jsxs)(t.h2,{id:"operations-on-scep-profile",children:["Operations on ",(0,r.jsx)(t.code,{children:"SCEP Profile"})]}),"\n",(0,r.jsxs)(t.p,{children:["The following operations can be performed on the ",(0,r.jsx)(t.code,{children:"SCEP Profile"}),":"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Operation"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Create"})}),(0,r.jsxs)(t.td,{children:["Create a new ",(0,r.jsx)(t.code,{children:"SCEP Profile"}),". New ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," is disabled by default"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Update"})}),(0,r.jsxs)(t.td,{children:["Update configuration of already existing ",(0,r.jsx)(t.code,{children:"SCEP Profile"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Delete"})}),(0,r.jsxs)(t.td,{children:["Delete existing ",(0,r.jsx)(t.code,{children:"SCEP Profile"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Disable"})}),(0,r.jsxs)(t.td,{children:["Disable existing ",(0,r.jsx)(t.code,{children:"SCEP Profile"}),". All request to disabled ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," will be rejected"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Enable"})}),(0,r.jsxs)(t.td,{children:["Enable existing ",(0,r.jsx)(t.code,{children:"SCEP Profile"})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return c}});var r=i(67294);const n={},s=r.createContext(n);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);