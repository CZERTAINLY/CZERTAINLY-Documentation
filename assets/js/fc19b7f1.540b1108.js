"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4715],{89700:(e,n,a)=>{a.r(n),a.d(n,{GenTable:()=>h,assets:()=>o,contentTitle:()=>r,data:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>g});var t=a(85893),i=a(11151),s=a(67294);const d={},r="Validation Data",l={id:"signing/ades-formats/validation-data",title:"Validation Data",description:"You can configure AdES Signers to return the validation data for the signature. In this case, the following validation data is collected for each signature and certificate in the signature:",source:"@site/docs/30-signing/05-ades-formats/33-validation-data.mdx",sourceDirName:"30-signing/05-ades-formats",slug:"/signing/ades-formats/validation-data",permalink:"/docs/signing/ades-formats/validation-data",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/05-ades-formats/33-validation-data.mdx",tags:[],version:"current",sidebarPosition:33,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Batch Signing",permalink:"/docs/signing/ades-formats/batch-signing"},next:{title:"Introduction",permalink:"/docs/signing/ades-validation/overview"}},o={},c=[{property:"WRAP_WITH_VALIDATION_INFO",description:(0,t.jsx)(t.Fragment,{children:"Enable the collection of validation data for the signature."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"INCLUDE_CRL_IN_VALIDATION_INFO",description:(0,t.jsx)(t.Fragment,{children:"Include CRLs in the validation data. If not enabled, the CRLs are not collected and included in the validation data."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"true"})}),mandatory:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"INCLUDE_OCSP_IN_VALIDATION_INFO",description:(0,t.jsx)(t.Fragment,{children:"Include OCSP responses in the validation data. If not enabled, the OCSP responses are not collected and included in the validation data."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"true"})}),mandatory:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"DOWNLOAD_VALIDATION_DATA_FOR_UNTRUSTED_CHAINS",description:(0,t.jsx)(t.Fragment,{children:"If enabled, the validation data is collected for all certificates in the chain. If not enabled, the validation data is only collected up to the configured trusted anchors."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],h=({data:e})=>{const n={b:"b",td:"td",tr:"tr",...(0,i.a)()};return(0,t.jsx)(s.Fragment,{children:e.map(((e,a)=>(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.b,{children:e.property})}),(0,t.jsx)(n.td,{children:e.description}),(0,t.jsx)(n.td,{children:e.default}),(0,t.jsx)(n.td,{children:e.mandatory})]},a)))})},g=[{value:"Structure of the Validation Data",id:"structure-of-the-validation-data",level:2},{value:"Batch signing",id:"batch-signing",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"validation-data",children:"Validation Data"}),"\n",(0,t.jsx)(n.p,{children:"You can configure AdES Signers to return the validation data for the signature. In this case, the following validation data is collected for each signature and certificate in the signature:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"all certificates in the certificate chain that is needed to validate the signature and timestamps"}),"\n",(0,t.jsx)(n.li,{children:"all CRLs that are needed to validate the signatures and timestamps"}),"\n",(0,t.jsx)(n.li,{children:"all OCSP responses that are needed to validate the signatures and timestamps"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To enable the validation data, you can set the following properties in Signer:"}),"\n","\n","\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("th",{children:"Property"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Default Value"}),(0,t.jsx)("th",{children:"Mandatory"}),(0,t.jsx)("tbody",{children:(0,t.jsx)(h,{data:c})})]}),"\n",(0,t.jsx)(n.admonition,{title:"External CMS Signer with Validation Data",type:"tip",children:(0,t.jsxs)(n.p,{children:["If you are using the ",(0,t.jsx)(n.a,{href:"./pades-signer/external-cms",children:"External CMS Signer"}),", you can get the validation data for the signature and embed it into the resulting PDF document without having to implement the validation data collection yourself, achieving the same result as with the PAdES Signer on Baseline signatures levels B-LT and B-LTA."]})}),"\n",(0,t.jsx)(n.h2,{id:"structure-of-the-validation-data",children:"Structure of the Validation Data"}),"\n",(0,t.jsxs)(n.p,{children:["When enabled, the signature response is returned as a JSON object containing the ",(0,t.jsx)(n.code,{children:"validationData"})," field:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"signatureData": "MIIdSQYJ...",\n"validationData": {\n    "crl": [],\n    "ocsp": [],\n    "certificates": []\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"crl"})})," is an array of Base64-encoded CRLs"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ocsp"})})," is an array of Base64-encoded OCSP responses"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"certificates"})})," is an array of Base64-encoded certificates"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"batch-signing",children:"Batch signing"}),"\n",(0,t.jsxs)(n.p,{children:["When using batch signatures, the ",(0,t.jsx)(n.code,{children:"validationData"})," field is returned as an array of objects, one for each signature."]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>d});var t=a(67294);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);