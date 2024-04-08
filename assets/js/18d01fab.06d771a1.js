"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8234],{94614:(e,r,s)=>{s.r(r),s.d(r,{GenTable:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>d,metadata:()=>l,signedAttributes:()=>o,signedAttributesLocation:()=>g,signedAttributesPolicy:()=>h,toc:()=>x});var n=s(85893),a=s(11151),t=s(67294);const d={},i="B-level Properties",l={id:"signing/ades-formats/common-properties/blevel-properties",title:"B-level Properties",description:"The following B-level properties as part of signed attributes during signature creation and are common for all AdES Signers. Each AdES Signer may have additional specific set of properties that are described in the subsequent sections.",source:"@site/docs/30-signing/05-ades-formats/07-common-properties/06-blevel-properties.mdx",sourceDirName:"30-signing/05-ades-formats/07-common-properties",slug:"/signing/ades-formats/common-properties/blevel-properties",permalink:"/docs/signing/ades-formats/common-properties/blevel-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/05-ades-formats/07-common-properties/06-blevel-properties.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TSA Properties",permalink:"/docs/signing/ades-formats/common-properties/tsa-properties"},next:{title:"PAdES Signer Properties",permalink:"/docs/signing/ades-formats/pades-signer/pades"}},c={},o=[{property:"TRUST_ANCHOR_BP_POLICY_ENABLED",description:(0,n.jsx)(n.Fragment,{children:"If the certificate related to the trust anchor should be included to the signature or not."}),default:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{class:"badge badge--secondary",children:"false"})," when B-level is constructed.",(0,n.jsx)("br",{}),(0,n.jsx)("span",{class:"badge badge--secondary",children:"true"})," when LT-level is constructed."]}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNING_DATE",description:(0,n.jsx)(n.Fragment,{children:"The claimed signing time in format of unix timestamp in milliseconds."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"CLAIMED_SIGNER_ROLES",description:(0,n.jsxs)(n.Fragment,{children:["Claimed signer roles.",(0,n.jsx)("br",{}),"In case of multiple signer roles, the value should be a comma separated list of roles."]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNED_ASSERTIONS",description:(0,n.jsxs)(n.Fragment,{children:["Signed assertions.",(0,n.jsx)("br",{}),"In case of multiple assertions, the value should be a comma separated list of assertions."]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"COMMITMENT_TYPES",description:(0,n.jsxs)(n.Fragment,{children:["Commitment type indications.",(0,n.jsx)("br",{}),"If multiple commitment types, the values should be a comma separated list of commitment types. The following commitment types are supported:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("b",{children:"ProofOfOrigin"})}),(0,n.jsx)("li",{children:(0,n.jsx)("b",{children:"ProofOfReceipt"})}),(0,n.jsx)("li",{children:(0,n.jsx)("b",{children:"ProofOfDelivery"})}),(0,n.jsx)("li",{children:(0,n.jsx)("b",{children:"ProofOfSender"})}),(0,n.jsx)("li",{children:(0,n.jsx)("b",{children:"ProofOfApproval"})}),(0,n.jsx)("li",{children:(0,n.jsx)("b",{children:"ProofOfCreation"})})]})]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],h=[{property:"SIGNATURE_POLICY_ID",description:(0,n.jsx)(n.Fragment,{children:"The Id of the Signature Policy."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNATURE_POLICY_QUALIFIER",description:(0,n.jsxs)(n.Fragment,{children:["Qualifier attribute. Supported values are:",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"OID-AS-URI"})," - identifies object Identifier encoded as URI"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"OID-AS-URN"})," - identifies object Identifier encoded as URN"]})]})]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNATURE_POLICY_DESCRIPTION",description:(0,n.jsx)(n.Fragment,{children:"The Signature Policy description."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNATURE_POLICY_REFERENCE.N",description:(0,n.jsxs)(n.Fragment,{children:["The Signature Policy documentation references.",(0,n.jsx)("br",{}),"You can defined multiple values that will be included as a documentation reference based on the number ",(0,n.jsx)("b",{children:"N"})," at the end of the property, for example:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:".1 = Documentation Reference 1"}),(0,n.jsx)("li",{children:".2 = Documentation Reference 2"})]})]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNATURE_POLICY_DIGEST_ALGORITHM",description:(0,n.jsx)(n.Fragment,{children:"The digest algorithm used to compute the digest."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNATURE_POLICY_DIGEST_VALUE",description:(0,n.jsxs)(n.Fragment,{children:["The computed digest value.",(0,n.jsx)("br",{}),"The value must be in the hexadecimal format."]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNATURE_POLICY_SPURI",description:(0,n.jsx)(n.Fragment,{children:"The Signature Policy URI."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],g=[{property:"SIGNER_LOCATION_LOCALITY",description:(0,n.jsx)(n.Fragment,{children:"The locality (city) in which the street address is, and which is in the region."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNER_LOCATION_COUNTRY",description:(0,n.jsx)(n.Fragment,{children:"The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNER_LOCATION_POSTAL_ADDRESS.N",description:(0,n.jsxs)(n.Fragment,{children:["A sequence defined a Postal Address.",(0,n.jsx)("br",{}),"You can defined multiple values that will be included as a postal address based on the number ",(0,n.jsx)("b",{children:"N"})," at the end of the property, for example:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:".1 = Postal Address 1"}),(0,n.jsx)("li",{children:".2 = Postal Address 2"})]})]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNER_LOCATION_POSTAL_CODE",description:(0,n.jsx)(n.Fragment,{children:"The postal code (ZIP-code)."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNER_LOCATION_POST_OFFICE_BOX_NUMBER",description:(0,n.jsx)(n.Fragment,{children:"The post office box number for PO box addresses."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNER_LOCATION_STATE_OR_PROVINCE",description:(0,n.jsx)(n.Fragment,{children:"State or province. The region in which the locality is, and which is in the country."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNER_LOCATION_STREET_ADDRESS",description:(0,n.jsx)(n.Fragment,{children:"The street address."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],p=({data:e})=>{const r={b:"b",td:"td",tr:"tr",...(0,a.a)()};return(0,n.jsx)(t.Fragment,{children:e.map(((e,s)=>(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.b,{children:e.property})}),(0,n.jsx)(r.td,{children:e.description}),(0,n.jsx)(r.td,{children:e.default}),(0,n.jsx)(r.td,{children:e.mandatory})]},s)))})},x=[{value:"Signed Attributes",id:"signed-attributes",level:2},{value:"Signature policy attributes",id:"signature-policy-attributes",level:2},{value:"Signer location attributes",id:"signer-location-attributes",level:2}];function m(e){const r={h1:"h1",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"b-level-properties",children:"B-level Properties"}),"\n",(0,n.jsx)(r.p,{children:"The following B-level properties as part of signed attributes during signature creation and are common for all AdES Signers. Each AdES Signer may have additional specific set of properties that are described in the subsequent sections."}),"\n","\n","\n","\n","\n",(0,n.jsx)(r.h2,{id:"signed-attributes",children:"Signed Attributes"}),"\n",(0,n.jsx)(r.p,{children:"The following properties can be used to set the common attributes as part of the B-level signed attributes:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("th",{children:"Property"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsx)("th",{children:"Default Value"}),(0,n.jsx)("th",{children:"Mandatory"}),(0,n.jsx)("tbody",{children:(0,n.jsx)(p,{data:o})})]}),"\n",(0,n.jsx)(r.h2,{id:"signature-policy-attributes",children:"Signature policy attributes"}),"\n",(0,n.jsx)(r.p,{children:"The following properties can be used to set the signature policy as part of the B-level signed attributes:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("th",{children:"Property"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsx)("th",{children:"Default Value"}),(0,n.jsx)("th",{children:"Mandatory"}),(0,n.jsx)("tbody",{children:(0,n.jsx)(p,{data:h})})]}),"\n",(0,n.jsx)(r.h2,{id:"signer-location-attributes",children:"Signer location attributes"}),"\n",(0,n.jsx)(r.p,{children:"The following properties can be used to set the signer location as part of the B-level signed attributes:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("th",{children:"Property"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsx)("th",{children:"Default Value"}),(0,n.jsx)("th",{children:"Mandatory"}),(0,n.jsx)("tbody",{children:(0,n.jsx)(p,{data:g})})]})]})}function j(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>i,a:()=>d});var n=s(67294);const a={},t=n.createContext(a);function d(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);