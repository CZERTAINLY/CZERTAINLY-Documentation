"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6453],{74345:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return l}});var i=t(85893),o=t(11151);const r={},s="Generate and Authorize Private Key",a={id:"signing/qscd-integration/utimaco-cp5/genkey",title:"Generate and Authorize Private Key",description:"This is a sample steps in orde to generate and authorize new RSA private key using the cxitool and p11tool2.",source:"@site/docs/30-signing/25-qscd-integration/07-utimaco-cp5/05-genkey.md",sourceDirName:"30-signing/25-qscd-integration/07-utimaco-cp5",slug:"/signing/qscd-integration/utimaco-cp5/genkey",permalink:"/docs/signing/qscd-integration/utimaco-cp5/genkey",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/25-qscd-integration/07-utimaco-cp5/05-genkey.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Key Authorization Key",permalink:"/docs/signing/qscd-integration/utimaco-cp5/kak"},next:{title:"Issue and Import Certificate",permalink:"/docs/signing/qscd-integration/utimaco-cp5/issuecert"}},c={},l=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"generate-and-authorize-private-key",children:"Generate and Authorize Private Key"}),"\n",(0,i.jsxs)(n.p,{children:["This is a sample steps in orde to generate and authorize new RSA private key using the ",(0,i.jsx)(n.code,{children:"cxitool"})," and ",(0,i.jsx)(n.code,{children:"p11tool2"}),".\nYou need to have your KAK available and stored in a file in order to initialize and authorize the private key."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Generate RSA key pair using the ",(0,i.jsx)(n.code,{children:"p11tool2"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'p11tool2 Slot=0 LoginUser=user1 PubKeyAttr=CKA_LABEL="testkey01",CKA_ID=0x525342 PrvKeyAttr=CKA_LABEL="testkey01",CKA_ID=0x525342 GenerateKeyPair=RSA\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Identify the ",(0,i.jsx)(n.code,{children:"specifier"})," of the generated RSA private key using the ",(0,i.jsx)(n.code,{children:"cxitool"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cxitool logonpass=USR_0000,user1 group=SLOT_0000 listkeys\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Initialize the generated RSA private key with the KAK:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cxitool logonpass=USR_0000,user1 group=SLOT_0000 spec=10 keyfile=/opt/utimaco/KAK.key,00000000 InitializeKey\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Authorize the generated RSA private key with the KAK:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cxitool logonpass=USR_0000,user1 group=SLOT_0000 spec=10 keyfile=/opt/utimaco/DemoCompany.key,00000000 AuthorizeKey\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For more information on how to use ",(0,i.jsx)(n.code,{children:"cxitool"}),", refer to the ",(0,i.jsx)(n.strong,{children:"cxitool Manual"}),".\nFor more information on how to use ",(0,i.jsx)(n.code,{children:"p11tool2"}),", refer to the ",(0,i.jsx)(n.strong,{children:"PKCS#11 p11tool2 Reference Manual"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);