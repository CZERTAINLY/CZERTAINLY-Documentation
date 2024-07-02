"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1181],{80134:function(e,r,n){n.r(r),n.d(r,{GenTable:function(){return p},assets:function(){return c},contentTitle:function(){return o},data:function(){return l},default:function(){return g},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return h}});var t=n(85893),s=n(11151),i=n(67294);const a={},o="Basic Properties",d={id:"signing/ades-formats/common-properties/basic-properties",title:"Basic Properties",description:"The following properties are common for all AdES Signers. Each AdES Signer may have additional specific set of properties that are described in the subsequent sections.",source:"@site/docs/30-signing/05-ades-formats/07-common-properties/02-basic-properties.mdx",sourceDirName:"30-signing/05-ades-formats/07-common-properties",slug:"/signing/ades-formats/common-properties/basic-properties",permalink:"/docs/signing/ades-formats/common-properties/basic-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/05-ades-formats/07-common-properties/02-basic-properties.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Available Signature Formats",permalink:"/docs/signing/ades-formats/signature-formats"},next:{title:"TSA Properties",permalink:"/docs/signing/ades-formats/common-properties/tsa-properties"}},c={},l=[{property:"SIGNATURE_LEVEL",description:(0,t.jsx)(t.Fragment,{children:"The signature level property specified the desired baseline level of the signature."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("a",{href:"./tsa-properties",children:"Time Stamping Authority"})}),description:(0,t.jsx)(t.Fragment,{children:"Time stamping authority to include timestamp."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"EMBED_CRL",description:(0,t.jsx)(t.Fragment,{children:"Embed CRL revocation information from the CRL location defined in the certificate CRL distribution point."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,t.jsxs)(t.Fragment,{children:["Mandatory for the following profiles:",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"BASELINE-LT"})}),(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"BASELINE-LTA"})})]})]})},{property:"EMBED_OCSP_RESPONSE",description:(0,t.jsx)(t.Fragment,{children:"Embed OCSP response status information from the OCSP URI located in the certificate AIA extension."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,t.jsxs)(t.Fragment,{children:["Mandatory for the following profiles:",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"BASELINE-LT"})}),(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"BASELINE-LTA"})})]})]})},{property:"DIGESTALGORITHM",description:(0,t.jsx)(t.Fragment,{children:"Digest algorithm to use with the signature algorithm."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"SHA256"})}),mandatory:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"TRUSTED_CERTIFICATES",description:(0,t.jsx)(t.Fragment,{children:"Contains list of PEM certificates to use as a trusted sources, additionally to the LOTL and TLs. This is the place where you need to provide your trusted certificates that are not part of the public trust list."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"LOTL and TLs"})}),mandatory:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("a",{href:"./blevel-properties",children:"Signed Attributes"})}),description:(0,t.jsx)(t.Fragment,{children:"B-level parameters for a signature creation."}),default:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],p=({data:e})=>{const r={b:"b",td:"td",tr:"tr",...(0,s.a)()};return(0,t.jsx)(i.Fragment,{children:e.map(((e,n)=>(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.b,{children:e.property})}),(0,t.jsx)(r.td,{children:e.description}),(0,t.jsx)(r.td,{children:e.default}),(0,t.jsx)(r.td,{children:e.mandatory})]},n)))})},h=[];function m(e){const r={h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"basic-properties",children:"Basic Properties"}),"\n",(0,t.jsx)(r.p,{children:"The following properties are common for all AdES Signers. Each AdES Signer may have additional specific set of properties that are described in the subsequent sections."}),"\n","\n","\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("th",{children:"Property"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Default Value"}),(0,t.jsx)("th",{children:"Mandatory"}),(0,t.jsx)("tbody",{children:(0,t.jsx)(p,{data:l})})]})]})}function g(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return a}});var t=n(67294);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);