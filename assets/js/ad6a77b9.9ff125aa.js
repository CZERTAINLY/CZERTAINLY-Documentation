"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1585],{60430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>E,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(85893),r=t(11151);const i={},o="Sample Properties",a={id:"signing/timed-services/generate-assigned-keys/sample-properties",title:"Sample Properties",description:"The following are sample properties that configures timed service for generating assigned keys:",source:"@site/docs/30-signing/50-timed-services/03-generate-assigned-keys/03-sample-properties.md",sourceDirName:"30-signing/50-timed-services/03-generate-assigned-keys",slug:"/signing/timed-services/generate-assigned-keys/sample-properties",permalink:"/docs/signing/timed-services/generate-assigned-keys/sample-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/50-timed-services/03-generate-assigned-keys/03-sample-properties.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generate Assigned Keys",permalink:"/docs/signing/timed-services/generate-assigned-keys/overview"},next:{title:"Upgrade Information Overview",permalink:"/docs/signing/upgrade-information/overview"}},c={},d=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sample-properties",children:"Sample Properties"}),"\n",(0,s.jsx)(n.p,{children:"The following are sample properties that configures timed service for generating assigned keys:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"WORKERGENID1.TYPE=TIMED_SERVICE\nWORKERGENID1.IMPLEMENTATION_CLASS=com.czertainly.signserver.module.timedservices.keygeneration.GenerateAssignedKeys\nWORKERGENID1.NAME=Key-Generation-Worker\n\n# this is the CryptoToken that will be used for checking and generating the keys\nWORKERGENID1.CRYPTOTOKEN=EntrustSAMCryptoToken\n\n# service will be triggered every 600 seconds = 10 minutes\nWORKERGENID1.INTERVAL=600\n\n# number of keys that should be available\n# service will try to generate number of keys that up to this value during each execution\nWORKERGENID1.TARGET_NUMBER_OF_PRE_GENERATED_KEYS=500\n\n# the limit of number of keys that can be generated during one execution of the service\n# keep it reasonable to not hit the technology limits\nWORKERGENID1.MAXIMAL_NUMBER_OF_KEYS_TO_GENERATE_PER_RUN=100\n\n# entry info property name that should be used to filter affected keys\nWORKERGENID1.FILTER_PROPERTY_NAME=Key specification\n\n# value of the filter that will match affected keys\nWORKERGENID1.FILTER_VALUE={assigned=true, certified=false, enabled=false}\n\n# prefix of generate keys\nWORKERGENID1.KEYALIAS_PREFIX=pregenerated\n\n# cryptographic algorithm for the generated keys\nWORKERGENID1.KEYGEN_ALGORITHM=RSA\n\n# specification of the generated key attributes\nWORKERGENID1.KEYGEN_SPECIFICATION=4096\n\n# requires transaction for the service\nWORKERGENID1.REQUIRES_TRANSACTION=true\n\nWORKERGENID1.ACTIVE=true\nWORKERGENID1.SINGLETON=true\n"})})]})}function E(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);