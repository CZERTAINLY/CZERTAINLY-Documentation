"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2899],{35001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(74848),o=n(28453);const r={},s="Issue and Import Certificate",c={id:"signing/qscd-integration/utimaco-cp5/issuecert",title:"Issue and Import Certificate",description:"Once the private key is generate an authorized, the Certificate Signing Request can be generated and send to Certification Authority to issue Certificate.",source:"@site/docs/30-signing/25-qscd-integration/07-utimaco-cp5/07-issuecert.md",sourceDirName:"30-signing/25-qscd-integration/07-utimaco-cp5",slug:"/signing/qscd-integration/utimaco-cp5/issuecert",permalink:"/docs/signing/qscd-integration/utimaco-cp5/issuecert",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/25-qscd-integration/07-utimaco-cp5/07-issuecert.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generate and Authorize Private Key",permalink:"/docs/signing/qscd-integration/utimaco-cp5/genkey"},next:{title:"CryptoServer CP5 PKCS#11 Installation",permalink:"/docs/signing/qscd-integration/utimaco-cp5/middleware"}},a={},d=[];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"issue-and-import-certificate",children:"Issue and Import Certificate"}),"\n",(0,i.jsx)(t.p,{children:"Once the private key is generate an authorized, the Certificate Signing Request can be generated and send to Certification Authority to issue Certificate."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Generate CSR:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cxitool logonpass=USR_0000,user1 group=SLOT_0000 spec=10 exportp10=requestCert-testkey01.p10\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Issue certificate according the procedure defined by the TSP."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Once the certificate is issued, you can import it using the ",(0,i.jsx)(t.code,{children:"p11tool2"}),":"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'p11tool2 Slot=0 LoginUser=user1 CertAttr=CKA_LABEL="testkey01",CKA_ID=0x525342 PubKeyAttr=CKA_LABEL="testkey01",CKA_ID=0x525342 ImportCert=/opt/utimaco/testkey01.crt\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["For more information on how to use ",(0,i.jsx)(t.code,{children:"cxitool"}),", refer to the ",(0,i.jsx)(t.strong,{children:"cxitool Manual"}),".\nFor more information on how to use ",(0,i.jsx)(t.code,{children:"p11tool2"}),", refer to the ",(0,i.jsx)(t.strong,{children:"PKCS#11 p11tool2 Reference Manual"}),"."]})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);