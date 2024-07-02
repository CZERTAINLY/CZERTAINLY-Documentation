"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1756],{78211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(74848),r=t(28453);const a={},i="From 1.0.13 To 1.14.0",s={id:"signing/upgrade-information/upgrade-1.0.13-1.14.0",title:"From 1.0.13 To 1.14.0",description:"In release version 1.14.0 the following changes were made as part of the integration efforts with the CZERTAINLY platform:",source:"@site/docs/30-signing/99-upgrade-information/03-upgrade-1.0.13-1.14.0.md",sourceDirName:"30-signing/99-upgrade-information",slug:"/signing/upgrade-information/upgrade-1.0.13-1.14.0",permalink:"/docs/signing/upgrade-information/upgrade-1.0.13-1.14.0",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/99-upgrade-information/03-upgrade-1.0.13-1.14.0.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"From 1.14.0 To 1.15.1",permalink:"/docs/signing/upgrade-information/upgrade-1.14.0-1.15.1"},next:{title:"From 1.0.12 To 1.0.13",permalink:"/docs/signing/upgrade-information/upgrade-1.0.12-1.0.13"}},c={},d=[{value:"Change of the base package",id:"change-of-the-base-package",level:2},{value:"Example of the change",id:"example-of-the-change",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"from-1013-to-1140",children:"From 1.0.13 To 1.14.0"}),"\n",(0,o.jsxs)(n.p,{children:["In release version ",(0,o.jsx)(n.code,{children:"1.14.0"})," the following changes were made as part of the integration efforts with the CZERTAINLY platform:"]}),"\n",(0,o.jsx)(n.h2,{id:"change-of-the-base-package",children:"Change of the base package"}),"\n",(0,o.jsxs)(n.p,{children:["The base package was changed from ",(0,o.jsx)(n.code,{children:"company.threekey"})," to ",(0,o.jsx)(n.code,{children:"com.czertainly"}),". This change was made in accordance with the roadmap and integration efforts of the CZERTAINLY Signing with the platform and to prepare for next major release."]}),"\n",(0,o.jsxs)(n.p,{children:["Each configuration consisting of the ",(0,o.jsx)(n.code,{children:"company.threekey"})," module needs to be updated to ",(0,o.jsx)(n.code,{children:"com.czertainly"})," in order to work with this new version."]}),"\n",(0,o.jsx)(n.h2,{id:"example-of-the-change",children:"Example of the change"}),"\n",(0,o.jsxs)(n.p,{children:["The following example shows the change of the base package from ",(0,o.jsx)(n.code,{children:"company.threekey"})," to ",(0,o.jsx)(n.code,{children:"com.czertainly"})," on the PAdES Signer sample configuration. See the change in the ",(0,o.jsx)(n.code,{children:"AUTHTYPE"})," and ",(0,o.jsx)(n.code,{children:"IMPLEMENTATION_CLASS"})," properties."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"WORKER1003.TYPE=PROCESSABLE\nWORKER1003.TSA_USERNAME=test\nWORKER1003.EMBED_CRL=true\nWORKER1003.CRYPTOTOKEN=EntrustSAMCryptoToken\nWORKER1003.DISABLEKEYUSAGECOUNTER=true\nWORKER1003.DIGESTALGORITHM=SHA256\nWORKER1003.AUTHTYPE=com.czertainly.signserver.module.extendedjws.ExtendedJwsAuthorizer <-- Change\nWORKER1003.NAME=PAdES-Baseline-LTA\nWORKER1003.TSA_PASSWORD=test\nWORKER1003.TSA_URL=https\\://freetsa.org/tsr\nWORKER1003.DEFAULTKEY=testKey\nWORKER1003.IMPLEMENTATION_CLASS=com.czertainly.signserver.module.pades.signer.PAdESSigner <-- Change\nWORKER1003.SIGNATURE_LEVEL=PAdES-BASELINE-LTA\nWORKER1003.ADD_VISIBLE_SIGNATURE=false\nWORKER1003.ACCEPT_ALL_USERNAMES=true\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(96540);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);