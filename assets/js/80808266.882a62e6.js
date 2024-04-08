"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2695],{46691:(e,n,s)=>{s.r(n),s.d(n,{GenTable:()=>h,assets:()=>l,contentTitle:()=>i,data:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>g});var r=s(85893),d=s(11151),a=s(67294);const t={},i="XAdES Signer Properties",c={id:"signing/ades-formats/xades-signer/xades",title:"XAdES Signer Properties",description:"See the Common Properties for configuration options of the AdES Signer.",source:"@site/docs/30-signing/05-ades-formats/13-xades-signer/02-xades.mdx",sourceDirName:"30-signing/05-ades-formats/13-xades-signer",slug:"/signing/ades-formats/xades-signer/xades",permalink:"/docs/signing/ades-formats/xades-signer/xades",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/05-ades-formats/13-xades-signer/02-xades.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"External CMS Signer Sample Configuration",permalink:"/docs/signing/ades-formats/pades-signer/external-cms-sample"},next:{title:"XAdES Signer Sample Configuration",permalink:"/docs/signing/ades-formats/xades-signer/xades-sample"}},l={},o=[{property:"SIGNATURE_PACKAGING",description:(0,r.jsxs)(r.Fragment,{children:["Sets the signature packaging. Allowed values are:",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"ENVELOPED"}),(0,r.jsx)("li",{children:"ENVELOPING"}),(0,r.jsx)("li",{children:"DETACHED"}),(0,r.jsx)("li",{children:"INTERNALLY-DETACHED"})]})]}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"EMBED_XML",description:(0,r.jsxs)(r.Fragment,{children:["Sets if the signed content shall be incorporated as XML (used only for ",(0,r.jsx)("b",{children:"ENVELOPING"})," signature packaging)."]}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"XADES_NAMESPACE_PREFIX",description:(0,r.jsx)(r.Fragment,{children:"Sets the XAdES namespace prefix."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"xades"})}),mandatory:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})},{property:"XADES_NAMESPACE_URI",description:(0,r.jsx)(r.Fragment,{children:"Sets the XAdES namespace uri."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"http://uri.etsi.org/01903/v1.3.2#"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"XMLDSIG_NAMESPACE_PREFIX",description:(0,r.jsx)(r.Fragment,{children:"Sets the XMLDSIG namespace prefix."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"ds"})}),mandatory:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})},{property:"XMLDSIG_NAMESPACE_URI",description:(0,r.jsx)(r.Fragment,{children:"Sets the XMLDSIG namespace uri."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"http://www.w3.org/2000/09/xmldsig#"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"XADES141_NAMESPACE_PREFIX",description:(0,r.jsx)(r.Fragment,{children:"Sets the XAdES 1.4.1 namespace prefix."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"xades141"})}),mandatory:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})},{property:"XADES141_NAMESPACE_URI",description:(0,r.jsx)(r.Fragment,{children:"Sets the XAdES 1.4.1 namespace uri."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"http://uri.etsi.org/01903/v1.4.1#"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"PRETTY_PRINT",description:(0,r.jsx)(r.Fragment,{children:"Sets if the signature shall be pretty-printed."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNED_PROPS_CANONICALIZATION_METHOD",description:(0,r.jsxs)(r.Fragment,{children:["Set the canonicalization algorithm to be used when dealing with ",(0,r.jsx)("b",{children:"SignedProperties"}),"."]}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNED_INFO_CANONICALIZATION_METHOD",description:(0,r.jsxs)(r.Fragment,{children:["Set the canonicalization algorithm to be used when dealing with ",(0,r.jsx)("b",{children:"SignedInfo"}),"."]}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"KEY_INFO_CANONICALIZATION_METHOD",description:(0,r.jsxs)(r.Fragment,{children:["Set the canonicalization algorithm used for dealing with ",(0,r.jsx)("b",{children:"KeyInfo"}),". When used, the ",(0,r.jsx)("b",{children:"KeyInfo"})," element will be signed with its reference included to ",(0,r.jsx)("b",{children:"SignedInfo"})," element."]}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],h=({data:e})=>{const n={b:"b",td:"td",tr:"tr",...(0,d.a)()};return(0,r.jsx)(a.Fragment,{children:e.map(((e,s)=>(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.b,{children:e.property})}),(0,r.jsx)(n.td,{children:e.description}),(0,r.jsx)(n.td,{children:e.default}),(0,r.jsx)(n.td,{children:e.mandatory})]},s)))})},g=[{value:"Canonicalization methods",id:"canonicalization-methods",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"xades-signer-properties",children:"XAdES Signer Properties"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"../common-properties/basic-properties",children:"Common Properties"})," for configuration options of the AdES Signer."]})}),"\n",(0,r.jsx)(n.p,{children:"The implementation class of the XAdES Signer is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"com.czertainly.signserver.module.xades.signer.XAdESSigner\n"})}),"\n",(0,r.jsx)(n.p,{children:"It contains the integration with the DSS framework and extends the Worker interface of the SignServer. If you want to use the XAdES Signer, you must specify this property. The XAdES Signer will check the following configuration properties."}),"\n","\n","\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Default Value"}),(0,r.jsx)("th",{children:"Mandatory"}),(0,r.jsx)("tbody",{children:(0,r.jsx)(h,{data:o})})]}),"\n",(0,r.jsx)(n.h2,{id:"canonicalization-methods",children:"Canonicalization methods"}),"\n",(0,r.jsx)(n.p,{children:"The following canonicalization methods are supported:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method name"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"INCLUSIVE"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"http://www.w3.org/TR/2001/REC-xml-c14n-20010315"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"EXCLUSIVE"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"http://www.w3.org/2001/10/xml-exc-c14n#"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"INCLUSIVE-WITH-COMMENTS"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"http://www.w3.org/TR/2001/REC-xml-c14n-20010315#WithComments"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"EXCLUSIVE-WITH-COMMENTS"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"http://www.w3.org/2001/10/xml-exc-c14n#WithComments"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ENVELOPED"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"http://www.w3.org/2000/09/xmldsig#enveloped-signature"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"BASE64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"http://www.w3.org/2000/09/xmldsig#base64"})})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>t});var r=s(67294);const d={},a=r.createContext(d);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);