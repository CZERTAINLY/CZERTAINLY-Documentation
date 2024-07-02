"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5677],{56296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),o=t(28453);const i={},s="Crypto Token Configuration",c={id:"signing/qscd-integration/trident-hsm/cryptotoken",title:"Crypto Token Configuration",description:"Trident HSM uses a standard PKCS#11 Crypto Token for the integration with the SignServer.",source:"@site/docs/30-signing/25-qscd-integration/05-trident-hsm/05-cryptotoken.md",sourceDirName:"30-signing/25-qscd-integration/05-trident-hsm",slug:"/signing/qscd-integration/trident-hsm/cryptotoken",permalink:"/docs/signing/qscd-integration/trident-hsm/cryptotoken",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/25-qscd-integration/05-trident-hsm/05-cryptotoken.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Trident PKCS#11 Installation",permalink:"/docs/signing/qscd-integration/trident-hsm/middleware"},next:{title:"Key Management Operations",permalink:"/docs/signing/qscd-integration/trident-hsm/km"}},a={},d=[{value:"Sample configuration",id:"sample-configuration",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"crypto-token-configuration",children:"Crypto Token Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Trident HSM uses a standard ",(0,r.jsx)(n.a,{href:"https://doc.primekey.com/signserver/signserver-reference/signserver-components/cryptotokens/pkcs11cryptotoken",children:"PKCS#11 Crypto Token"})," for the integration with the SignServer."]}),"\n",(0,r.jsx)(n.p,{children:"The following rules must be applied for a proper configuration of the PKCS#11 Crypto Token:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"SLOTLABELTYPE = SLOT_NUMBER"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SLOTLABELVALUE"})," must be the same number as the number of configured ",(0,r.jsx)(n.code,{children:"slot1...n"})," property in the ",(0,r.jsx)(n.code,{children:"mpcm-pkcs11.conf"})," (there may be multiple slots configured, the number is used to connect with one particular slot)"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["When the Trident HSM slot is empty or does not have a proper configuration of ",(0,r.jsx)(n.code,{children:"DEFAULTKEY"})," property, the configured PKCS#11 Crypto Token will be considered as ",(0,r.jsx)(n.code,{children:"Offline - Crypto Token is disconnected"}),". Nevertheless, the private key can be generated on the Crypto Token and assigned as ",(0,r.jsx)(n.code,{children:"DEFAULTKEY"}),". After that, the PKCS#11 Crypto Token will have ",(0,r.jsx)(n.code,{children:"Online"})," status."]})}),"\n",(0,r.jsx)(n.h2,{id:"sample-configuration",children:"Sample configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"WORKER6.CRYPTOTOKEN_IMPLEMENTATION_CLASS=org.signserver.server.cryptotokens.PKCS11CryptoToken\nWORKER6.SLOTLABELVALUE=15\nWORKER6.NAME=TridentQSCDCryptoToken\nWORKER6.PIN=_MASKED_\nWORKER6.IMPLEMENTATION_CLASS=org.signserver.server.signers.CryptoWorker\nWORKER6.DEFAULTKEY=defaultkey01\nWORKER6.ATTRIBUTES=attributes(generate,CKO_PUBLIC_KEY,*) \\= {\\r\\n   CKA_TOKEN \\= false\\r\\n   CKA_ENCRYPT \\= false\\r\\n   CKA_VERIFY \\= true\\r\\n   CKA_WRAP \\= false\\r\\n}\\r\\nattributes(generate, CKO_PRIVATE_KEY,*) \\= {\\r\\n   CKA_TOKEN \\= true\\r\\n   CKA_PRIVATE \\= true\\r\\n   CKA_SENSITIVE \\= true\\r\\n   CKA_EXTRACTABLE \\= false\\r\\n   CKA_DECRYPT \\= false\\r\\n   CKA_SIGN \\= true\\r\\n   CKA_UNWRAP \\= false\\r\\n}\nWORKER6.SHAREDLIBRARYNAME=TridentHSM\nWORKER6.DISABLED=FALSE\nWORKER6.TYPE=CRYPTO_WORKER\nWORKER6.SLOTLABELTYPE=SLOT_NUMBER\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);