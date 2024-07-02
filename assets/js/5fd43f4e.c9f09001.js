"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1524],{92709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(74848),s=t(28453);const o={},r="Sole Control Assurance Level",a={id:"signing/sam-integration/scal",title:"Sole Control Assurance Level",description:"EN 419 241-1 identifies two levels of sole control assurance:",source:"@site/docs/30-signing/30-sam-integration/03-scal.md",sourceDirName:"30-signing/30-sam-integration",slug:"/signing/sam-integration/scal",permalink:"/docs/signing/sam-integration/scal",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/30-sam-integration/03-scal.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/signing/sam-integration/overview"},next:{title:"SAM Crypto Token",permalink:"/docs/signing/sam-integration/sam-cryptotoken"}},c={},l=[{value:"Sole Control Assurance Level 1 (SCAL1)",id:"sole-control-assurance-level-1-scal1",level:2},{value:"Sole Control Assurance Level 1 (SCAL2)",id:"sole-control-assurance-level-1-scal2",level:2}];function g(e){const n={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sole-control-assurance-level",children:"Sole Control Assurance Level"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"EN 419 241-1 identifies two levels of sole control assurance:"})}),"\n",(0,i.jsx)(n.h2,{id:"sole-control-assurance-level-1-scal1",children:"Sole Control Assurance Level 1 (SCAL1)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The signing keys are used, with a low level of confidence, under the sole control of the signer."}),"\n",(0,i.jsx)(n.li,{children:"The authorized signer\u2019s use of its key for signing is enforced by the Server Signing Application Service Component which authenticates the signer. The activation of the signing key can remain for a given period and/or for a given number of signatures."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In case of SCAL1, user relies on the server signing application to ensure that the appropriate signing key is selected. The functionality supporting signature activation and ensuring sole control is implemented as part of the server signing application."}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SCAL1",src:t(78895).A+"",title:"SCAL1",width:"754",height:"553"})})}),"\n",(0,i.jsx)(n.h2,{id:"sole-control-assurance-level-1-scal2",children:"Sole Control Assurance Level 1 (SCAL2)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The signing keys are used, with a high level of confidence, under the sole control of the signer."}),"\n",(0,i.jsx)(n.li,{children:"The authorized signer\u2019s use of its key for signing is enforced by the signature activation module by means of signature activation data provided, by the signer, using a signature activation protocol, in order to enable the use of the corresponding signing key to sign specific documents."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"SCAL2 provides greater assurance of sole control by requiring code within the HSM to implement signature activation, called signature activation module. This code is certified to the same security level as the HSM\u2019s general cryptographic functions. The signature activation data passes, in protected form using the signature activation protocol, from the signer\u2019s device to the HSM to ensure that the user\u2019s signing keys can\u2019t be abused, even if the TSP\u2019s server signing application were to be compromised."}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SCAL2",src:t(43636).A+"",title:"SCAL2",width:"804",height:"553"})})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},78895:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/SCAL1-e24dbe391a5c62c69bcbca363e5895c6.png"},43636:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/SCAL2-d23f24db94e1386f840f5f4464a1e01b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);