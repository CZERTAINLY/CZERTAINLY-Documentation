"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3746],{88846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var i=t(74848),s=t(28453);const c={},o="Issue and Import Certificate",r={id:"signing/qscd-integration/nshield-xc-cc/issuecert",title:"Issue and Import Certificate",description:"Once the assigned private key is generate, the Certificate Signing Request can be generated and send to Certification Authority to issue Certificate.",source:"@site/docs/30-signing/25-qscd-integration/09-nshield-xc-cc/07-issuecert.md",sourceDirName:"30-signing/25-qscd-integration/09-nshield-xc-cc",slug:"/signing/qscd-integration/nshield-xc-cc/issuecert",permalink:"/docs/signing/qscd-integration/nshield-xc-cc/issuecert",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/25-qscd-integration/09-nshield-xc-cc/07-issuecert.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generate Assigned Key",permalink:"/docs/signing/qscd-integration/nshield-xc-cc/genkey"},next:{title:"nCipher PKCS#11 Installation",permalink:"/docs/signing/qscd-integration/nshield-xc-cc/middleware"}},a={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"issue-and-import-certificate",children:"Issue and Import Certificate"}),"\n",(0,i.jsx)(n.p,{children:"Once the assigned private key is generate, the Certificate Signing Request can be generated and send to Certification Authority to issue Certificate."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Generate CSR:"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Use your favorite PKCS#11 tool to sign the CSR. For example, you can use the OpenSC ",(0,i.jsx)(n.code,{children:"pkcs11-tool"})," to sign the CSR with assigned key:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pkcs11-tool --module /opt/nfast/toolkits/pkcs11/libcknfast.so --slot-index 1 --login --sign --mechanism SHA512_RSA_PKCS --id f826a841a8cd007975ccad83de96fac3b5995cf9 --input-file csr_to_be_signed --output-file signature\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Issue certificate according the procedure defined by the TSP."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once the certificate is issued, you can import it using your favorite PKCS#11 tool."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Example using the ",(0,i.jsx)(n.code,{children:"pkcs11-tool"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pkcs11-tool --module /opt/nfast/toolkits/pkcs11/libcknfast.so --slot-index 1 --login --write-object test-nshield-cmts-demo.der --type cert --id f826a841a8cd007975ccad83de96fac3b5995cf9 --label testassignedkey01\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For more information on how to use ",(0,i.jsx)(n.code,{children:"pkcs11-tool"}),", refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/OpenSC/OpenSC/wiki",children:"OpenSC Wiki"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},c=i.createContext(s);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);