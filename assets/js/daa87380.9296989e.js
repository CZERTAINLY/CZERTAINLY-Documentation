"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[683],{5225:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>n,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var s=t(74848),r=t(28453);const c={},n="Certificate Discovery",o={id:"certificate-key/concept-design/modules/certificate-discovery",title:"Certificate Discovery",description:"One of the most important tasks in managing the PKI Infrastructure is to know where the certificates are deployed and what is their state. Certificate Discovery allows discovering the certificates in various sources.",source:"@site/docs/10-certificate-key/02-concept-design/06-modules/05-certificate-discovery.md",sourceDirName:"10-certificate-key/02-concept-design/06-modules",slug:"/certificate-key/concept-design/modules/certificate-discovery",permalink:"/docs/certificate-key/concept-design/modules/certificate-discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/06-modules/05-certificate-discovery.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Certificate Inventory",permalink:"/docs/certificate-key/concept-design/modules/certificate-inventory"},next:{title:"Dashboards",permalink:"/docs/certificate-key/concept-design/modules/dashboards"}},d={},h=[{value:"Discovery Process",id:"discovery-process",level:2},{value:"Operations",id:"operations",level:2},{value:"Discovery Status",id:"discovery-status",level:2}];function l(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"certificate-discovery",children:"Certificate Discovery"}),"\n",(0,s.jsxs)(i.p,{children:["One of the most important tasks in managing the PKI Infrastructure is to know where the certificates are deployed and what is their state. ",(0,s.jsx)(i.code,{children:"Certificate Discovery"})," allows discovering the certificates in various sources."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Certificate Discovery"})," works with the help of the ",(0,s.jsx)(i.code,{children:"Connector"})," that is implementing the ",(0,s.jsx)(i.code,{children:"Discovery Provider"})," ",(0,s.jsx)(i.code,{children:"Function Groups"}),"."]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Connector"})," implementing the ",(0,s.jsx)(i.code,{children:"Discovery Provider"})," ",(0,s.jsx)(i.code,{children:"Function Group"})," has its own ",(0,s.jsx)(i.code,{children:"Attributes"})," for the inputs related to the discovery process."]})}),"\n",(0,s.jsxs)(i.p,{children:["The logic of the ",(0,s.jsx)(i.code,{children:"Certificate Discovery"})," is implemented by the ",(0,s.jsx)(i.code,{children:"Core"})," and specific discovery process by the ",(0,s.jsx)(i.code,{children:"Connector"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"discovery-process",children:"Discovery Process"}),"\n",(0,s.jsxs)(i.p,{children:["The following steps explain the process of ",(0,s.jsx)(i.code,{children:"Certificate Discovery"}),":"]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Client"})," defines the ",(0,s.jsx)(i.code,{children:"Connector"})," to initiate the ",(0,s.jsx)(i.code,{children:"Certificate Discovery"})]}),"\n",(0,s.jsxs)(i.li,{children:["Get the list of ",(0,s.jsx)(i.code,{children:"Attributes"})," for the selected ",(0,s.jsx)(i.code,{children:"Connector"})," and ",(0,s.jsx)(i.code,{children:"Kind"})]}),"\n",(0,s.jsxs)(i.li,{children:["Provide the proper values for the input ",(0,s.jsx)(i.code,{children:"Attributes"})]}),"\n",(0,s.jsxs)(i.li,{children:["Initiate ",(0,s.jsx)(i.code,{children:"Certificate Discovery"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Once the ",(0,s.jsx)(i.code,{children:"Core"})," receives the discovery request, ",(0,s.jsx)(i.code,{children:"Attributes"})," are forwarded to the ",(0,s.jsx)(i.code,{children:"Connector"}),". The ",(0,s.jsx)(i.code,{children:"Core"})," is checking the ",(0,s.jsx)(i.code,{children:"Connector"})," for the status of the discovery process. When the discovery is completed, ",(0,s.jsx)(i.code,{children:"Core"})," collects all ",(0,s.jsx)(i.code,{children:"Certificates"}),".\nAfterwards, discovery is switched to ",(0,s.jsx)(i.code,{children:"Processing"})," state. In this phase, assigned triggers during discovery creation are evaluated on newly discovered certificates. For any matched ignore trigger, certificate is ignored from processing and not added to the certificate inventory. For all other matched triggers, its corresponding actions are performed. Currently, triggers can be assigned for discovery event ",(0,s.jsx)(i.code,{children:"Finished"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"operations",children:"Operations"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Certificate Discovery"})," allows you to perform the following operations:"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Operation"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Create"}),(0,s.jsxs)(i.td,{children:["You can create a new discovery with any desired ",(0,s.jsx)(i.code,{children:"Connector"})," that implements ",(0,s.jsx)(i.code,{children:"Discovery Provider"})," ",(0,s.jsx)(i.code,{children:"Function Group"}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"List"}),(0,s.jsxs)(i.td,{children:["List of all discovery processes that has been initiated through the platform. The information includes the ",(0,s.jsx)(i.code,{children:"Connector"})," and the ",(0,s.jsx)(i.code,{children:"Kind"}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Details"}),(0,s.jsxs)(i.td,{children:["Provides details about the ",(0,s.jsx)(i.code,{children:"Certificate Discovery"}),"."]})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"discovery-status",children:"Discovery Status"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Status"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"In Progress"}),(0,s.jsx)(i.td,{children:"The discovery process has not finished yet"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Processing"}),(0,s.jsx)(i.td,{children:"The discovery process has finished and found certificates are processed"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Completed"}),(0,s.jsx)(i.td,{children:"The process has already finished and certificates are processed"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Failed"}),(0,s.jsx)(i.td,{children:"Some errors have occurred"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Warning"}),(0,s.jsx)(i.td,{children:"The discovery process did not finish in maximum time of 6 hours"})]})]})]})]})}function a(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>o});var s=t(96540);const r={},c=s.createContext(r);function n(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);