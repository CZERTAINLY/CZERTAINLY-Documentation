"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4715],{17034:function(e,n,t){t.r(n),t.d(n,{GenTable:function(){return h},assets:function(){return c},contentTitle:function(){return d},data:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var a=t(85893),i=t(11151),r=t(67294);const s={},d="Validation Data",o={id:"signing/ades-formats/validation-data",title:"Validation Data",description:"You can configure AdES Signers to return the validation data for the signature. In this case, the following validation data is collected for each signature and certificate in the signature:",source:"@site/docs/30-signing/05-ades-formats/33-validation-data.mdx",sourceDirName:"30-signing/05-ades-formats",slug:"/signing/ades-formats/validation-data",permalink:"/docs/signing/ades-formats/validation-data",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/05-ades-formats/33-validation-data.mdx",tags:[],version:"current",sidebarPosition:33,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Batch Signing",permalink:"/docs/signing/ades-formats/batch-signing"},next:{title:"Introduction",permalink:"/docs/signing/ades-validation/overview"}},c={},l=[{property:"WRAP_WITH_VALIDATION_INFO",description:(0,a.jsx)(a.Fragment,{children:"Enable the collection of validation data for the signature."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"INCLUDE_CRL_IN_VALIDATION_INFO",description:(0,a.jsx)(a.Fragment,{children:"Include CRLs in the validation data. If not enabled, the CRLs are not collected and included in the validation data."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"true"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"INCLUDE_OCSP_IN_VALIDATION_INFO",description:(0,a.jsx)(a.Fragment,{children:"Include OCSP responses in the validation data. If not enabled, the OCSP responses are not collected and included in the validation data."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"true"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"DOWNLOAD_VALIDATION_DATA_FOR_UNTRUSTED_CHAINS",description:(0,a.jsx)(a.Fragment,{children:"If enabled, the validation data is collected for all certificates in the chain. If not enabled, the validation data is only collected up to the configured trusted anchors."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],h=({data:e})=>{const n={b:"b",td:"td",tr:"tr",...(0,i.a)()};return(0,a.jsx)(r.Fragment,{children:e.map(((e,t)=>(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.b,{children:e.property})}),(0,a.jsx)(n.td,{children:e.description}),(0,a.jsx)(n.td,{children:e.default}),(0,a.jsx)(n.td,{children:e.mandatory})]},t)))})},u=[{value:"Structure of the Validation Data",id:"structure-of-the-validation-data",level:2},{value:"Batch signing",id:"batch-signing",level:3}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"validation-data",children:"Validation Data"}),"\n",(0,a.jsx)(n.p,{children:"You can configure AdES Signers to return the validation data for the signature. In this case, the following validation data is collected for each signature and certificate in the signature:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"all certificates in the certificate chain that is needed to validate the signature and timestamps"}),"\n",(0,a.jsx)(n.li,{children:"all CRLs that are needed to validate the signatures and timestamps"}),"\n",(0,a.jsx)(n.li,{children:"all OCSP responses that are needed to validate the signatures and timestamps"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To enable the validation data, you can set the following properties in Signer:"}),"\n","\n","\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("th",{children:"Property"}),(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("th",{children:"Default Value"}),(0,a.jsx)("th",{children:"Mandatory"}),(0,a.jsx)("tbody",{children:(0,a.jsx)(h,{data:l})})]}),"\n",(0,a.jsx)(n.admonition,{title:"External CMS Signer with Validation Data",type:"tip",children:(0,a.jsxs)(n.p,{children:["If you are using the ",(0,a.jsx)(n.a,{href:"./pades-signer/external-cms",children:"External CMS Signer"}),", you can get the validation data for the signature and embed it into the resulting PDF document without having to implement the validation data collection yourself, achieving the same result as with the PAdES Signer on Baseline signatures levels B-LT and B-LTA."]})}),"\n",(0,a.jsx)(n.h2,{id:"structure-of-the-validation-data",children:"Structure of the Validation Data"}),"\n",(0,a.jsxs)(n.p,{children:["When enabled, the signature response is returned as a JSON object containing the ",(0,a.jsx)(n.code,{children:"validationData"})," field:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"signatureData": "MIIdSQYJ...",\n"validationData": {\n    "crl": [],\n    "ocsp": [],\n    "certificates": []\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Where:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"crl"})})," is an array of Base64-encoded CRLs"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"ocsp"})})," is an array of Base64-encoded OCSP responses"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"certificates"})})," is an array of Base64-encoded certificates"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"batch-signing",children:"Batch signing"}),"\n",(0,a.jsxs)(n.p,{children:["When using batch signatures, the ",(0,a.jsx)(n.code,{children:"signatureData"})," has a form of JSON object representing the batch signature response as defined in ",(0,a.jsx)(n.a,{href:"./batch-signing",children:"Batch Signing"}),". The ",(0,a.jsx)(n.code,{children:"validationData"})," is common to all signatures as the signatures were created by the same key."]})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var a=t(67294);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);