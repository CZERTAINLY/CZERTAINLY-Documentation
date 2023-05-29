"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7269],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92912:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var i=t(83117),a=t(80102),r=(t(67294),t(3905)),o=["components"],s={},l="AdES Validator Sample Request",d={unversionedId:"signing/ades-validation/ades-validator/ades-sample-request",id:"signing/ades-validation/ades-validator/ades-sample-request",title:"AdES Validator Sample Request",description:"The following is a sample Postman request to validate the PDF document:",source:"@site/docs/30-signing/10-ades-validation/10-ades-validator/05-ades-sample-request.md",sourceDirName:"30-signing/10-ades-validation/10-ades-validator",slug:"/signing/ades-validation/ades-validator/ades-sample-request",permalink:"/docs/signing/ades-validation/ades-validator/ades-sample-request",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AdES Validator Sample Configuration",permalink:"/docs/signing/ades-validation/ades-validator/ades-sample"},next:{title:"Introduction",permalink:"/docs/signing/saml-authorizer/overview"}},c={},u=[],p={toc:u},m="wrapper";function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)(m,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ades-validator-sample-request"},"AdES Validator Sample Request"),(0,r.kt)("p",null,"The following is a sample Postman request to validate the PDF document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "PAdES Validate",\n  "event": [\n    {\n      "listen": "test",\n      "script": {\n        "exec": [\n          ""\n        ],\n        "type": "text/javascript"\n      }\n    }\n  ],\n  "protocolProfileBehavior": {\n    "disabledSystemHeaders": {\n      "connection": true,\n      "accept-encoding": true,\n      "accept": true,\n      "user-agent": true,\n      "host": true\n    }\n  },\n  "request": {\n    "auth": {\n      "type": "noauth"\n    },\n    "method": "POST",\n    "header": [],\n    "body": {\n      "mode": "formdata",\n      "formdata": [\n        {\n          "key": "file",\n          "type": "file",\n          "src": "signed.pdf"\n        },\n        {\n          "key": "workerName",\n          "value": "AdESValidator",\n          "type": "text"\n        }\n      ]\n    },\n    "url": {\n      "raw": "http://signing.czertainly.com:8080/signserver/process",\n      "protocol": "http",\n      "host": [\n        "signing",\n        "czertainly",\n        "com"\n      ],\n      "port": "8080",\n      "path": [\n        "signserver",\n        "process"\n      ]\n    }\n  },\n  "response": []\n}\n')),(0,r.kt)("p",null,"The following is a XML Simple Report as output from the validation request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<SimpleReport ValidationTime="2021-07-03T14:48:02" xmlns="http://dss.esig.europa.eu/validation/simple-report">\n    <ValidationPolicy>\n        <PolicyName>QES AdESQC TL based</PolicyName>\n        <PolicyDescription>Validate electronic signatures and indicates whether they are Advanced electronic Signatures (AdES), AdES supported by a Qualified Certificate (AdES/QC) or a\n        Qualified electronic Signature (QES). All certificates and their related chains supporting the signatures are validated against the EU Member State Trusted Lists (this includes\n        signer\'s certificate and certificates used to validate certificate validity status services - CRLs, OCSP, and time-stamps).\n    </PolicyDescription>\n    </ValidationPolicy>\n    <DocumentName></DocumentName>\n    <ValidSignaturesCount>1</ValidSignaturesCount>\n    <SignaturesCount>1</SignaturesCount>\n    <Signature SignatureFormat="PKCS7-B" ExtensionPeriodMin="2021-07-03T14:48:03" ExtensionPeriodMax="2024-01-18T08:49:41" Id="S-82AB17C58FD78D31836E755408B850C1B7295C3F91A73AAF0AB22060684197B1">\n        <CertificateChain>\n            <Certificate>\n                <id>C-BABE2B45CF21D2BF5DE4C32AFAE3D585945B73674FC41A1C704C593C9F6DEB98</id>\n                <qualifiedName>TEST HUMAN</qualifiedName>\n            </Certificate>\n            <Certificate>\n                <id>C-5779BA66C768FE7E5A5BB74A225FA8B69CD6942AF481355630E5AD78B34DFF2B</id>\n                <qualifiedName>Qualified SubCA</qualifiedName>\n            </Certificate>\n            <Certificate>\n                <id>C-BC7F7862E685C7A7D9826A58EA32D183D4893FCC8F8FD6D900C9769A987E77F0</id>\n                <qualifiedName>Qualified RootCA</qualifiedName>\n            </Certificate>\n        </CertificateChain>\n        <Indication>TOTAL_PASSED</Indication>\n        <Errors>Unable to build a certificate chain until a trusted list!</Errors>\n        <Warnings>There is no Next Update defined for the revocation data!</Warnings>\n        <SigningTime>2021-01-05T17:59:23</SigningTime>\n        <BestSignatureTime>2021-07-03T14:48:02</BestSignatureTime>\n        <SignedBy>TEST HUMAN</SignedBy>\n        <SignatureLevel description="Not applicable">N/A</SignatureLevel>\n        <SignatureScope name="Full PDF" scope="FULL">Full document</SignatureScope>\n    </Signature>\n</SimpleReport>\n')))}f.isMDXComponent=!0}}]);