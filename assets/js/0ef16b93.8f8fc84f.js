"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3897],{90654:(e,n,t)=>{t.r(n),t.d(n,{GenTable:()=>l,assets:()=>c,basic:()=>h,contentTitle:()=>o,data:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>m});var r=t(74848),s=t(28453),i=t(96540);const a={},o="REST User Management SAP Provider",d={id:"signing/sam-integration/trident-sam/user-sap-providers/rest",title:"REST User Management SAP Provider",description:"The implementation class of the REST User Management SAP Provider is:",source:"@site/docs/30-signing/30-sam-integration/09-trident-sam/11-user-sap-providers/03-rest.mdx",sourceDirName:"30-signing/30-sam-integration/09-trident-sam/11-user-sap-providers",slug:"/signing/sam-integration/trident-sam/user-sap-providers/rest",permalink:"/docs/signing/sam-integration/trident-sam/user-sap-providers/rest",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/30-sam-integration/09-trident-sam/11-user-sap-providers/03-rest.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/signing/sam-integration/trident-sam/user-sap-providers/overview"},next:{title:"Introduction",permalink:"/docs/signing/aws-kms-cryptotoken/overview"}},c={},p=[{property:"UM_SAP_PROVIDER_URL",description:(0,r.jsx)(r.Fragment,{children:"URL where is the REST interface implemented for user management operations by the SIC. The URL should implement REST interface of this provider."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"UM_SAP_PROVIDER_AUTH_TYPE",description:(0,r.jsxs)(r.Fragment,{children:["Authorization type for the REST API. Supported values are:",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"NONE"}),(0,r.jsx)("li",{children:"BASIC"})]}),"See information about the authentication properties below."]}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--success",children:"YES"})})}],l=({data:e})=>{const n={b:"b",td:"td",tr:"tr",...(0,s.R)()};return(0,r.jsx)(i.Fragment,{children:e.map(((e,t)=>(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.b,{children:e.property})}),(0,r.jsx)(n.td,{children:e.description}),(0,r.jsx)(n.td,{children:e.default}),(0,r.jsx)(n.td,{children:e.mandatory})]},t)))})},h=[{property:"UM_SAP_PROVIDER_USERNAME",description:(0,r.jsx)(r.Fragment,{children:"Identification of the user."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsxs)(r.Fragment,{children:["Mandatory for ",(0,r.jsx)("b",{children:"UM_SAP_PROVIDER_AUTH_TYPE = BASIC"})]})},{property:"UM_SAP_PROVIDER_PASSWORD",description:(0,r.jsx)(r.Fragment,{children:"Password for the username."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsxs)(r.Fragment,{children:["Mandatory for ",(0,r.jsx)("b",{children:"UM_SAP_PROVIDER_AUTH_TYPE = BASIC"})]})}],m=[{value:"Authorization types",id:"authorization-types",level:2},{value:"BASIC",id:"basic",level:3},{value:"OpenAPI Definition",id:"openapi-definition",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"rest-user-management-sap-provider",children:"REST User Management SAP Provider"}),"\n",(0,r.jsx)(n.p,{children:"The implementation class of the REST User Management SAP Provider is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"com.czertainly.trident.sam.sap.RestUserManagementSapProvider\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following properties can be configured for the REST User Management SAP Provider:"}),"\n","\n","\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Default Value"}),(0,r.jsx)("th",{children:"Mandatory"}),(0,r.jsx)("tbody",{children:(0,r.jsx)(l,{data:p})})]}),"\n",(0,r.jsx)(n.h2,{id:"authorization-types",children:"Authorization types"}),"\n",(0,r.jsx)(n.h3,{id:"basic",children:"BASIC"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"UM_SAP_PROVIDER_AUTH_TYPE = BASIC"})," needs additional properties to be configured, in particular:"]}),"\n","\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Default Value"}),(0,r.jsx)("th",{children:"Mandatory"}),(0,r.jsx)("tbody",{children:(0,r.jsx)(l,{data:h})})]}),"\n",(0,r.jsx)(n.h2,{id:"openapi-definition",children:"OpenAPI Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.3\ninfo:\n  title: REST User Management SAP Provider\n  version: v1\npaths:\n  /changePassword:\n    post:\n      operationId: buildChangePassword\n      requestBody:\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/BuildChangePasswordRequestDTO'\n        required: true\n      responses:\n        \"200\":\n          description: OK\n          content:\n            '*/*':\n              schema:\n                $ref: '#/components/schemas/BuildChangePasswordResponseDTO'\ncomponents:\n  schemas:\n    BuildResponseDTO:\n      type: object\n      properties:\n        body:\n          type: array\n          items:\n            type: string\n            format: byte\n        nonce:\n          type: array\n          items:\n            type: string\n            format: byte\n    BuildChangePasswordRequestDTO:\n      type: object\n      properties:\n        userId:\n          type: string\n        initPwd:\n          type: string\n        totpSeed:\n          type: string\n    BuildChangePasswordResponseDTO:\n      type: object\n      properties:\n        changePasswordRequest:\n          $ref: '#/components/schemas/BuildResponseDTO'\n"})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);