"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2764],{46318:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var c=n(85893),i=n(11151);const t={},d="Current Versions",o={id:"certificate-key/current-versions",title:"Current Versions",description:"The CZERTAINLY platform consists of several services. This allows you to enable the functionality and integrate with the technology you need.",source:"@site/docs/10-certificate-key/30-current-versions.md",sourceDirName:"10-certificate-key",slug:"/certificate-key/current-versions",permalink:"/docs/certificate-key/current-versions",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/30-current-versions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integration Guide",permalink:"/docs/certificate-key/integration-guides/ejbca-ng-connector/integration-guide"},next:{title:"Introduction",permalink:"/docs/signing/introduction"}},s={},l=[{value:"Core",id:"core",level:2},{value:"Front Ends",id:"front-ends",level:2},{value:"Connectors",id:"connectors",level:2},{value:"Other",id:"other",level:2},{value:"Private repository",id:"private-repository",level:2}];function h(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h1,{id:"current-versions",children:"Current Versions"}),"\n",(0,c.jsx)(r.p,{children:"The CZERTAINLY platform consists of several services. This allows you to enable the functionality and integrate with the technology you need."}),"\n",(0,c.jsx)(r.admonition,{type:"info",children:(0,c.jsxs)(r.p,{children:["If you do not need to discover certificates, you should not deploy ",(0,c.jsx)(r.code,{children:"Discovery Provider"})," connectors. The same applies for other connectors that are available. You will use only the connectors that integrates with your technology."]})}),"\n",(0,c.jsx)(r.p,{children:"The following is a list of current versions of the CZERTAINLY platform and connectors."}),"\n",(0,c.jsx)(r.h2,{id:"core",children:"Core"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:"Service"}),(0,c.jsx)(r.th,{children:"Version"}),(0,c.jsx)(r.th,{children:"Docker Image"})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Core"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"2.11.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-core"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Auth"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.3.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-auth"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Auth OPA policies"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.1.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-auth-opa-policies"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Scheduler"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.0.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-scheduler"})})]})]})]}),"\n",(0,c.jsx)(r.h2,{id:"front-ends",children:"Front Ends"}),"\n",(0,c.jsx)(r.admonition,{type:"info",children:(0,c.jsxs)(r.p,{children:["The Operator Web was merged with the Administrator Web in the version ",(0,c.jsx)(r.code,{children:"2.2.0"}),"."]})}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:"Front End"}),(0,c.jsx)(r.th,{children:"Version"}),(0,c.jsx)(r.th,{children:"Docker Image"})]})}),(0,c.jsx)(r.tbody,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Administrator"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"2.11.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-frontend-administrator"})})]})})]}),"\n",(0,c.jsx)(r.h2,{id:"connectors",children:"Connectors"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:"Connector"}),(0,c.jsx)(r.th,{children:"Version"}),(0,c.jsx)(r.th,{children:"Docker Image"})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Common Credential Provider"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.3.2"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-common-credential-provider"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"EJBCA NG Connector"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.8.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-ejbca-ng-connector"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Network Discovery Provider"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.4.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-ip-discovery-provider"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Cryptosense Discovery Provider"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.4.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"harbor.3key.company/czertainly/czertainly-cryptosense-discovery-provider"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"MS ADCS Connector"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.6.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"harbor.3key.company/czertainly/czertainly-ms-adcs-connector"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"PyADCS Connector"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.0.1"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"harbor.3key.company/czertainly/czertainly-pyadcs-connector"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"HashiCorp Vault Connector"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.0.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-hashicorp-vault-connector"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"EJBCA Legacy Connector"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.4.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"harbor.3key.company/czertainly/czertainly-ejbca-legacy-ca-connector"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Keystore Entity Provider"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.4.1"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-keystore-entity-provider"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"X.509 Compliance Provider"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.3.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-x509-compliance-provider"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Software Cryptography Provider"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.2.1"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-software-cryptography-provider"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Email Notification Provider"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.0.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-email-notification-provider"})})]})]})]}),"\n",(0,c.jsx)(r.h2,{id:"other",children:"Other"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:"Service"}),(0,c.jsx)(r.th,{children:"Version"}),(0,c.jsx)(r.th,{children:"Docker Image"})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Keycloak Internal"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"24.0.2-0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"docker.io/3keycompany/czertainly-keycloak-optimized"})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Utils Service"}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"1.0.0"})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"harbor.3key.company/czertainly/czertainly-utils-service"})})]})]})]}),"\n",(0,c.jsx)(r.h2,{id:"private-repository",children:"Private repository"}),"\n",(0,c.jsxs)(r.p,{children:["Non-public connectors are hosted on internal ",(0,c.jsx)(r.code,{children:"harbor.3key.company"})," which serves as a repository of container images and Helm charts.\nAccess to ",(0,c.jsx)(r.code,{children:"harbor.3key.company"})," is provided based on request."]})]})}function a(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>d});var c=n(67294);const i={},t=c.createContext(i);function d(e){const r=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),c.createElement(t.Provider,{value:r},e.children)}}}]);