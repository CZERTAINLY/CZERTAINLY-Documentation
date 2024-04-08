"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4400],{89058:(e,n,t)=>{t.r(n),t.d(n,{GenMetaTable:()=>p,GenTable:()=>l,assets:()=>c,contentTitle:()=>d,data:()=>o,default:()=>j,frontMatter:()=>r,metadata:()=>h,requestdata:()=>g,toc:()=>u});var s=t(85893),i=t(11151),a=t(67294);const r={},d="Batch Signing",h={id:"signing/ades-formats/batch-signing",title:"Batch Signing",description:"Batch signing allows to sign multiple data in one batch (one signing request). Multiple data can be specified in the signing request and multiple signed data will be provided in response.",source:"@site/docs/30-signing/05-ades-formats/31-batch-signing.mdx",sourceDirName:"30-signing/05-ades-formats",slug:"/signing/ades-formats/batch-signing",permalink:"/docs/signing/ades-formats/batch-signing",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/05-ades-formats/31-batch-signing.mdx",tags:[],version:"current",sidebarPosition:31,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hash Signing",permalink:"/docs/signing/ades-formats/hash-signing"},next:{title:"Validation Data",permalink:"/docs/signing/ades-formats/validation-data"}},c={},o=[{property:"BATCHSIGNING",description:(0,s.jsx)(s.Fragment,{children:"Batch signing request is expected to be provided as input for the signing process."}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"ALLOW_BATCHSIGNING_OVERRIDE",description:(0,s.jsxs)(s.Fragment,{children:["Allow client to specify in the ",(0,s.jsx)("a",{href:"#request-metadata-properties",children:"request metadata"})," if the input data is in the form of batch request and batch signing is requested."]}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"ACCEPTED_HASH_DIGEST_ALGORITHMS",description:(0,s.jsx)(s.Fragment,{children:"Comma-separated list of allowed digest algorithms for batch signing."}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory if:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("b",{children:"BATCH_SIGNING"})}),(0,s.jsx)("li",{children:(0,s.jsx)("b",{children:"ALLOW_BATCH_SIGNING_OVERRIDE"})})]})]})}],l=({data:e})=>{const n={b:"b",td:"td",tr:"tr",...(0,i.a)()};return(0,s.jsx)(a.Fragment,{children:e.map(((e,t)=>(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.b,{children:e.property})}),(0,s.jsx)(n.td,{children:e.description}),(0,s.jsx)(n.td,{children:e.default}),(0,s.jsx)(n.td,{children:e.mandatory})]},t)))})},g=[{property:"USING_BATCHSIGNING",description:(0,s.jsx)(s.Fragment,{children:"Specifies if the request should be handled as batch signing or not."}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory when ",(0,s.jsx)("b",{children:"ALLOW_BATCH_SIGNING_OVERRIDE=true"})]})}],p=({data:e})=>{const n={b:"b",td:"td",tr:"tr",...(0,i.a)()};return(0,s.jsx)(a.Fragment,{children:e.map(((e,t)=>(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.b,{children:e.property})}),(0,s.jsx)(n.td,{children:e.description}),(0,s.jsx)(n.td,{children:e.mandatory})]},t)))})},u=[{value:"Crypto Token support",id:"crypto-token-support",level:2},{value:"Activating batch signing",id:"activating-batch-signing",level:2},{value:"Request metadata properties",id:"request-metadata-properties",level:2},{value:"Batch signing request format",id:"batch-signing-request-format",level:2},{value:"Batch signing response format",id:"batch-signing-response-format",level:2},{value:"Hash signing support",id:"hash-signing-support",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"batch-signing",children:"Batch Signing"}),"\n",(0,s.jsx)(n.p,{children:"Batch signing allows to sign multiple data in one batch (one signing request). Multiple data can be specified in the signing request and multiple signed data will be provided in response."}),"\n",(0,s.jsx)(n.p,{children:"It is useful when you do not want to sign and approve each data individually, but rather collect all data that should be signed and digitally sign them all with one request. It can save time and effort especially when the workflow cannot support, from whatever reason, simultaneous signing of single data."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Batch signing is supported for the signers that are part of the ",(0,s.jsx)(n.a,{href:"./overview",children:"AdES Signature Formats"}),". Other signer does not support batch signing."]})}),"\n",(0,s.jsx)(n.h2,{id:"crypto-token-support",children:"Crypto Token support"}),"\n",(0,s.jsx)(n.p,{children:"Batch signing supports all implementations of the Crypto Token. When the Crypto Token implementation does not support batch signing, the signing process will sign each data individually, thus effectively simulating the batch signing transparently from the client."}),"\n",(0,s.jsx)(n.h2,{id:"activating-batch-signing",children:"Activating batch signing"}),"\n",(0,s.jsx)(n.p,{children:"To activate the batch signing, you need to configure the following properties:"}),"\n","\n","\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Default Value"}),(0,s.jsx)("th",{children:"Mandatory"}),(0,s.jsx)("tbody",{children:(0,s.jsx)(l,{data:o})})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["When you configure both ",(0,s.jsx)(n.code,{children:"BATCHSIGNING=true"})," and ",(0,s.jsx)(n.code,{children:"ALLOW_BATCHSIGNING_OVERRIDE=true"}),", the ",(0,s.jsx)(n.code,{children:"BATCHSIGNING"})," takes precedence and all requests will be considered as batch requests for batch signing. If you want to keep the decision on the client, use only ",(0,s.jsx)(n.code,{children:"ALLOW_BATCHSIGNING_OVERRIDE=true"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"request-metadata-properties",children:"Request metadata properties"}),"\n",(0,s.jsx)(n.p,{children:"The following metadata should be provided by the client in the signing request when batch signing is activated:"}),"\n","\n","\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Mandatory"}),(0,s.jsx)("tbody",{children:(0,s.jsx)(p,{data:g})})]}),"\n",(0,s.jsx)(n.admonition,{title:"Hash and Batch",type:"info",children:(0,s.jsxs)(n.p,{children:["Hash signing and batch signing can be combined. See ",(0,s.jsx)(n.a,{href:"#hash-signing-support",children:"Hash signing support"})," for more information."]})}),"\n",(0,s.jsx)(n.h2,{id:"batch-signing-request-format",children:"Batch signing request format"}),"\n",(0,s.jsxs)(n.p,{children:["Request for batch signing requires to have ",(0,s.jsx)(n.code,{children:"JSON"})," formatted data in the body of the request.\nThe data structure contains array of signature requests with the following fields:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"data"})}),(0,s.jsx)(n.td,{children:"Base64-encoded data that should be processed and signed"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("span",{class:"badge badge--success",children:"YES"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"hashingAlgorithm"})}),(0,s.jsx)(n.td,{children:"Specifies the digest algorithm that should be used to digest the data provided for the batch signing or used to digest the data provided for the hash signing (if the hash signing is activated)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("span",{class:"badge badge--danger",children:"NO"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"customIdentifier"})}),(0,s.jsx)(n.td,{children:"Identifies the signature request. Will be included in the response to map signature with the data"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("span",{class:"badge badge--danger",children:"NO"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"The following is a sample batch signing request data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "signatureRequests": [\n    {\n      "data": "ibi45IZCFGPX4PXK9g+5yzXOFpt25lerIfxNHWsJNgM=",\n      "hashingAlgorithm": "SHA-256",\n      "customIdentifier": "data 1"\n    },\n    {\n      "data": "N2I1Mzg1YWJiNDZmOTIwMzRlOWY5Y2U4NmMwYjIyN2E3MDk0NzNjNGU4YTQ5MDEyMzFlNGJmOTM2MjAxNGRlZjA2N2RiZGVjM2QwODVhMWM4OWRjNzZlYWIwNDFmMTY1",\n      "hashingAlgorithm": "SHA-384",\n      "customIdentifier": "data 2"\n    },\n    ...\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"batch-signing-response-format",children:"Batch signing response format"}),"\n",(0,s.jsxs)(n.p,{children:["Response from batch signing contains ",(0,s.jsx)(n.code,{children:"JSON"})," formatted data:\nThe data structure contains array of signatures with the following fields:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"signature"})}),(0,s.jsx)(n.td,{children:"Base64-encoded signature of the data, formatted according the signature format configured"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("span",{class:"badge badge--success",children:"YES"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"hash"})}),(0,s.jsx)(n.td,{children:"Digest of the data requested for signature"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("span",{class:"badge badge--success",children:"YES"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"customIdentifier"})}),(0,s.jsx)(n.td,{children:"Maps the signature request"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("span",{class:"badge badge--danger",children:"NO"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"The following is a sample batch signing response data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "signatures": [\n    {\n      "signature": "MIIIjwYJKoZIhvcNAQcCoIIIgDCCCHwCAQExDTALBglghkgBZQMEAgEwCwYJKoZI...",\n      "hash": "s0aux6AH+d1GWI+9ZkqqjGRO4WQfdlzV05szuY4jyxY=",\n      "customIdentifier": "signature 1"\n    },\n    {\n      "signature": "MIII8QYJKoZIhvcNAQcCoIII4jCCCN4CAQExDTALBglghkgBZQMEAgIwCwYJKoZIhvcNAQcBoIIF...",\n      "hash": "GQCAd8CWoSyHAelGDq+lZPtFLzaefBP5V8sW6qTJYu3UDP8IcFeN5h9NqIKpfkSv",\n      "customIdentifier": "signature 2",\n    },\n    ...\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"hash-signing-support",children:"Hash signing support"}),"\n",(0,s.jsxs)(n.p,{children:["Batch signing supports hash signing, meaning that the pre-computed digests of the data can be provided in the batch signing request. In that case the ",(0,s.jsx)(n.code,{children:"data"})," field for each requested hash signing contains Base64-encoded digests (see input for the ",(0,s.jsx)(n.a,{href:"./hash-signing",children:"Hash Signing"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"The digest algorithm used to digest the data provided for the hash signing is taken from the properties in the following order:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hashingAlgorithm"})," in the ",(0,s.jsx)(n.code,{children:"JSON"})," signature request"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CLIENTSIDE_HASHDIGESTALGORITHM"})," request metadata property"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["The ",(0,s.jsx)(n.code,{children:"hash"})," of the data provided in the batch signing response equals the ",(0,s.jsx)(n.code,{children:"data"})," provided in batch signing request."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"./hash-signing",children:"Hash Signing"})," for more information about hash signing."]})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(67294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);