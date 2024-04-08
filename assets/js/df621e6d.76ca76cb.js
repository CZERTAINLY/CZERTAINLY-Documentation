"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5552],{6540:(e,t,r)=>{r.r(t),r.d(t,{GenTable:()=>p,assets:()=>d,contentTitle:()=>a,data:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=r(85893),s=r(11151),o=r(67294);const i={},a="AWS KMS v2 CryptoToken Properties",c={id:"signing/aws-kms-cryptotoken/v2-properties",title:"AWS KMS v2 CryptoToken Properties",description:"For the version 2 AWS KMS CryptoToken implementation, use the following class:",source:"@site/docs/30-signing/35-aws-kms-cryptotoken/05-v2-properties.mdx",sourceDirName:"30-signing/35-aws-kms-cryptotoken",slug:"/signing/aws-kms-cryptotoken/v2-properties",permalink:"/docs/signing/aws-kms-cryptotoken/v2-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/35-aws-kms-cryptotoken/05-v2-properties.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS KMS v1 CryptoToken Properties",permalink:"/docs/signing/aws-kms-cryptotoken/v1-properties"},next:{title:"Introduction",permalink:"/docs/signing/cert-storage-providers/overview"}},d={},l=[{property:"AWSKMS_REGION",description:(0,n.jsxs)(n.Fragment,{children:["AWM KMS region name, where the keys should reside. The proper authorization to the region and KMS must be set for the IAM user. For the list of all available regions, see the ",(0,n.jsx)("a",{href:"https://docs.aws.amazon.com/general/latest/gr/kms.html",target:"_blank",children:"AWS KMS documentation"}),"."]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"CERT_STORAGE_IMPLEMENTATION_CLASS",description:(0,n.jsx)(n.Fragment,{children:"Implementation class for certificate storage. Certificates issued for assigned signing keys will be stored according the implementation provided. Each implementation may have additional properties that needs to be configured."}),default:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"}),(0,n.jsx)("br",{}),"See ",(0,n.jsx)("a",{href:"../cert-storage-providers/overview",children:"Certificate Storage Providers"})," for more information."]}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--success",children:"YES"})})}],p=({data:e})=>{const t={b:"b",td:"td",tr:"tr",...(0,s.a)()};return(0,n.jsx)(o.Fragment,{children:e.map(((e,r)=>(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.b,{children:e.property})}),(0,n.jsx)(t.td,{children:e.description}),(0,n.jsx)(t.td,{children:e.default}),(0,n.jsx)(t.td,{children:e.mandatory})]},r)))})},h=[];function m(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"aws-kms-v2-cryptotoken-properties",children:"AWS KMS v2 CryptoToken Properties"}),"\n",(0,n.jsx)(t.p,{children:"For the version 2 AWS KMS CryptoToken implementation, use the following class:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"CRYPTOTOKEN_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.awskms.v2.AWSKMSCryptoToken\n"})}),"\n",(0,n.jsx)(t.p,{children:"The following properties are available to be configured:"}),"\n","\n","\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("th",{children:"Property"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsx)("th",{children:"Default Value"}),(0,n.jsx)("th",{children:"Mandatory"}),(0,n.jsx)("tbody",{children:(0,n.jsx)(p,{data:l})})]})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(67294);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);