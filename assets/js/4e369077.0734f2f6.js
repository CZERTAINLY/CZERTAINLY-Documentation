"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4964],{70133:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>s});var t=i(85893),c=i(11151);const n={},o="Enable ACME",a={id:"certificate-key/protocols/acme/enable-acme",title:"Enable ACME",description:"Before the platform can be used as ACME server, it must be configured.",source:"@site/docs/10-certificate-key/07-protocols/02-acme/07-enable-acme.md",sourceDirName:"10-certificate-key/07-protocols/02-acme",slug:"/certificate-key/protocols/acme/enable-acme",permalink:"/docs/certificate-key/protocols/acme/enable-acme",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/07-protocols/02-acme/07-enable-acme.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ACME Accounts",permalink:"/docs/certificate-key/protocols/acme/acme-account"},next:{title:"Kubernetes cert-manager",permalink:"/docs/certificate-key/protocols/acme/cert-manager"}},l={},s=[{value:"Configuration of <code>ACME Profile</code>",id:"configuration-of-acme-profile",level:2},{value:"Enable ACME protocol for <code>RA Profile</code>",id:"enable-acme-protocol-for-ra-profile",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"enable-acme",children:"Enable ACME"}),"\n",(0,t.jsx)(r.p,{children:"Before the platform can be used as ACME server, it must be configured."}),"\n",(0,t.jsxs)(r.p,{children:["For the purpose of this guide. we will assume that the ACME protocol should be enabled for the ",(0,t.jsx)(r.code,{children:"RA Profile"})," with name ",(0,t.jsx)(r.code,{children:"czertainly"})," and know UUID ",(0,t.jsx)(r.code,{children:"61c7d882-9336-4c9e-b380-8d2fd83f7c26"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"We need to follow simple steps to enable the ACME server:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Configuration of ",(0,t.jsx)(r.code,{children:"ACME Profile"})]}),"\n",(0,t.jsxs)(r.li,{children:["Enable ACME protocol for ",(0,t.jsx)(r.code,{children:"RA Profile"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The ACME server can be also enabled based on the ",(0,t.jsx)(r.code,{children:"ACME Profile"})," configuration only if you select the default ",(0,t.jsx)(r.code,{children:"RA Profile"}),"."]}),"\n",(0,t.jsxs)(r.h2,{id:"configuration-of-acme-profile",children:["Configuration of ",(0,t.jsx)(r.code,{children:"ACME Profile"})]}),"\n",(0,t.jsxs)(r.p,{children:["First step is to configure the ",(0,t.jsx)(r.a,{href:"acme-profile",children:(0,t.jsx)(r.code,{children:"ACME Profile"})}),". It will create an instance of the ACME server with specific attributes that will be used to control the certificate management process and ACME clients will need to follow. You can create as many ",(0,t.jsx)(r.code,{children:"ACME Profiles"})," as you need. Each of them can have a different configuration, validation limits, terms of service, etc."]}),"\n",(0,t.jsxs)(r.p,{children:["We do not need to configure default ",(0,t.jsx)(r.code,{children:"RA Profile"}),", we will enable ACME protocol for a specific ",(0,t.jsx)(r.code,{children:"RA Profile"})," with name ",(0,t.jsx)(r.code,{children:"czertainly"}),". Let's do this in ",(0,t.jsx)(r.code,{children:"czertainly"})," ",(0,t.jsx)(r.code,{children:"RA Profile"})," configuration."]}),"\n",(0,t.jsxs)(r.p,{children:["We will create ",(0,t.jsx)(r.code,{children:"ACME Profile"})," named ",(0,t.jsx)(r.code,{children:"ACME CZERTAINLY Profile"})," using the ",(0,t.jsx)(r.a,{href:"/api/core-acme/#operation/createAcmeProfile",children:"Core ACME API"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "ACME CZERTAINLY Profile",\n    "description": "Sample ACME Profile",\n    "termsOfServiceUrl": "https://www.example.com/termsOfService",\n    "websiteUrl": "https://www.example.com",\n    "dnsResolverIp": "8.8.8.8",\n    "dnsResolverPort": "53",\n    "retryInterval": 60,\n    "validity": 3000,\n    "requireContact": true,\n    "requireTermsOfService": true\n  }\' \\\n  https://[domain]:[port]/api/v1/acmeProfiles\n'})}),"\n",(0,t.jsxs)(r.p,{children:["When the ",(0,t.jsx)(r.code,{children:"ACME Profile"})," is successfully created, its ",(0,t.jsx)(r.code,{children:"uuid"})," is sent back:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "uuid": "b6be5014-b8f8-4b4f-b96d-a54c38f54b48"\n}\n'})}),"\n",(0,t.jsxs)(r.h2,{id:"enable-acme-protocol-for-ra-profile",children:["Enable ACME protocol for ",(0,t.jsx)(r.code,{children:"RA Profile"})]}),"\n",(0,t.jsxs)(r.p,{children:["Once the ",(0,t.jsx)(r.code,{children:"ACME Profile"})," is ready, we can enable ACME protocol for the ",(0,t.jsx)(r.code,{children:"RA Profile"})," with name ",(0,t.jsx)(r.code,{children:"czertainly"}),". For that purpose, we will use the ",(0,t.jsx)(r.a,{href:"/api/core-ra-profile/#operation/activateAcmeForRaProfile",children:(0,t.jsx)(r.code,{children:"Core RA Profile API"})}),". We will need to configure ",(0,t.jsx)(r.code,{children:"Attributes"})," to issue and revoke certificates, if there are any available and supported in the ",(0,t.jsx)(r.code,{children:"RA Profile"}),". These ",(0,t.jsx)(r.code,{children:"Attributes"})," will be statically attached to all ACME requests that are processed."]}),"\n",(0,t.jsxs)(r.p,{children:["You can get the list of ",(0,t.jsx)(r.code,{children:"Attributes"})," using the following APIs:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/api/core-ra-profile/#operation/listIssueCertificateAttributes",children:"Get issue Attributes"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/api/core-ra-profile/#operation/listRevokeCertificateAttributes",children:"Get revocation Attributes"})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["We will enable ACME for ",(0,t.jsx)(r.code,{children:"czertainly"})," ",(0,t.jsx)(r.code,{children:"RA Profile"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "issueCertificateAttributes": [],\n    "revokeCertificateAttributes": []\n  }\' \\\n  https://[domain]:[port]/api/v1/authorities/61c7d882-9336-4c9e-b380-8d2fd83f7c26/raProfiles/d1a95ebc-4d73-11ed-bdc3-0242ac120002/acme/activate/b6be5014-b8f8-4b4f-b96d-a54c38f54b48\n  #https://[domain]:[port]v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/acme/activate/{acmeProfileUuid}\n'})}),"\n",(0,t.jsx)(r.p,{children:"When succeed, we will receive in the response ACME server directory endpoint to use:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n    "uuid": "b6be5014-b8f8-4b4f-b96d-a54c38f54b48",\n    "name": "ACME CZERTAINLY Profile",\n    "directoryUrl": "https://[domain]:[port]/api/v1/protocols/acme/raProfile/czertainly/directory",\n    "issueCertificateAttributes": [],\n    "revokeCertificateAttributes": [],\n    "acmeAvailable": true\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Now we have the ACME protocol enabled for ",(0,t.jsx)(r.code,{children:"RA Profile"})," with name ",(0,t.jsx)(r.code,{children:"czertainly"}),", based on the ",(0,t.jsx)(r.code,{children:"ACME Profile"})," with name ",(0,t.jsx)(r.code,{children:"ACME CZERTAINLY Profile"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,r,i)=>{i.d(r,{a:()=>o});var t=i(67294);const c={},n=t.createContext(c);function o(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}}}]);