"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1296],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Enable ACME",p={unversionedId:"protocols/acme/enable-acme",id:"protocols/acme/enable-acme",title:"Enable ACME",description:"Before the platform can be used as ACME server, it must be configured.",source:"@site/docs/07-protocols/02-acme/07-enable-acme.md",sourceDirName:"07-protocols/02-acme",slug:"/protocols/acme/enable-acme",permalink:"/docs/protocols/acme/enable-acme",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ACME Accounts",permalink:"/docs/protocols/acme/acme-account"},next:{title:"Kubernetes cert-manager",permalink:"/docs/protocols/acme/cert-manager"}},s=[{value:"Configuration of <code>ACME Profile</code>",id:"configuration-of-acme-profile",children:[],level:2},{value:"Enable ACME protocol for <code>RA Profile</code>",id:"enable-acme-protocol-for-ra-profile",children:[],level:2}],u={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enable-acme"},"Enable ACME"),(0,o.kt)("p",null,"Before the platform can be used as ACME server, it must be configured."),(0,o.kt)("p",null,"For the purpose of this guide. we will assume that the ACME protocol should be enabled for the ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," with name ",(0,o.kt)("inlineCode",{parentName:"p"},"czertainly")," and know UUID ",(0,o.kt)("inlineCode",{parentName:"p"},"61c7d882-9336-4c9e-b380-8d2fd83f7c26"),"."),(0,o.kt)("p",null,"We need to follow simple steps to enable the ACME server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configuration of ",(0,o.kt)("inlineCode",{parentName:"li"},"ACME Profile")),(0,o.kt)("li",{parentName:"ul"},"Enable ACME protocol for ",(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile"))),(0,o.kt)("p",null,"The ACME server can be also enabled based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Profile")," configuration only if you select the default ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile"),"."),(0,o.kt)("h2",{id:"configuration-of-acme-profile"},"Configuration of ",(0,o.kt)("inlineCode",{parentName:"h2"},"ACME Profile")),(0,o.kt)("p",null,"First step is to configure the ",(0,o.kt)("a",{parentName:"p",href:"acme-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"ACME Profile")),". It will create an instance of the ACME server with specific attributes that will be used to control the certificate management process and ACME clients will need to follow. You can create as many ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Profiles")," as you need. Each of them can have a different configuration, validation limits, terms of service, etc."),(0,o.kt)("p",null,"We do not need to configure default ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile"),", we will enable ACME protocol for a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," with name ",(0,o.kt)("inlineCode",{parentName:"p"},"czertainly"),". Let's do this in ",(0,o.kt)("inlineCode",{parentName:"p"},"czertainly")," ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," configuration."),(0,o.kt)("p",null,"We will create ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Profile")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME CZERTAINLY Profile")," using the ",(0,o.kt)("a",{parentName:"p",href:"/api/core-acme/#operation/createAcmeProfile"},"Core ACME API"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "ACME CZERTAINLY Profile",\n    "description": "Sample ACME Profile",\n    "termsOfServiceUrl": "https://www.example.com/termsOfService",\n    "websiteUrl": "https://www.example.com",\n    "dnsResolverIp": "8.8.8.8",\n    "dnsResolverPort": "53",\n    "retryInterval": 60,\n    "validity": 3000,\n    "requireContact": true,\n    "requireTermsOfService": true\n  }\' \\\n  https://[domain]:[port]/api/v1/acmeProfiles\n')),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Profile")," is successfully created, its ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "b6be5014-b8f8-4b4f-b96d-a54c38f54b48"\n}\n')),(0,o.kt)("h2",{id:"enable-acme-protocol-for-ra-profile"},"Enable ACME protocol for ",(0,o.kt)("inlineCode",{parentName:"h2"},"RA Profile")),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Profile")," is ready, we can enable ACME protocol for the ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," with name ",(0,o.kt)("inlineCode",{parentName:"p"},"czertainly"),". For that purpose, we will use the ",(0,o.kt)("a",{parentName:"p",href:"/api/core-raprofile/#operation/activateAcmeForRaProfile"},(0,o.kt)("inlineCode",{parentName:"a"},"Core RA Profile API")),". We will need to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"Attributes")," to issue and revoke certificates, if there are any available and supported in the ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile"),". These ",(0,o.kt)("inlineCode",{parentName:"p"},"Attributes")," will be statically attached to all ACME requests that are processed."),(0,o.kt)("p",null,"You can get the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Attributes")," using the following APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/core-raprofile/#operation/listIssueCertificateAttributes"},"Get issue Attributes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/core-raprofile/#operation/listRevokeCertificateAttributes"},"Get revocation Attributes"))),(0,o.kt)("p",null,"We will enable ACME for ",(0,o.kt)("inlineCode",{parentName:"p"},"czertainly")," ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "acmeProfileUuid": "b6be5014-b8f8-4b4f-b96d-a54c38f54b48",\n    "issueCertificateAttributes": [],\n    "revokeCertificateAttributes": []\n  }\' \\\n  https://[domain]:[port]/api/v1/raprofiles/61c7d882-9336-4c9e-b380-8d2fd83f7c26/activateAcme\n  #https://[domain]:[port]/api/v1/raprofiles/{uuid}/activateAcme\n')),(0,o.kt)("p",null,"When succeed, we will receive in the response ACME server directory endpoint to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uuid": "b6be5014-b8f8-4b4f-b96d-a54c38f54b48",\n    "name": "ACME CZERTAINLY Profile",\n    "directoryUrl": "https://[domain]:[port]/api/acme/raProfile/czertainly/directory",\n    "issueCertificateAttributes": [],\n    "revokeCertificateAttributes": [],\n    "acmeAvailable": true\n}\n')),(0,o.kt)("p",null,"Now we have the ACME protocol enabled for ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," with name ",(0,o.kt)("inlineCode",{parentName:"p"},"czertainly"),", based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Profile")," with name ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME CZERTAINLY Profile"),"."))}f.isMDXComponent=!0}}]);