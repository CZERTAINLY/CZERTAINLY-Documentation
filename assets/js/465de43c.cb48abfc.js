"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5369],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return E}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=a,E=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return r?t.createElement(E,o(o({ref:n},p),{},{components:r})):t.createElement(E,o({ref:n},p))}));function E(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82519:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return E},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var t=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],s={},c="XAdES Signer Sample Configuration",u={unversionedId:"signing/ades-formats/xades-signer/xades-sample",id:"signing/ades-formats/xades-signer/xades-sample",title:"XAdES Signer Sample Configuration",description:"",source:"@site/docs/30-signing/05-ades-formats/13-xades-signer/04-xades-sample.md",sourceDirName:"30-signing/05-ades-formats/13-xades-signer",slug:"/signing/ades-formats/xades-signer/xades-sample",permalink:"/docs/signing/ades-formats/xades-signer/xades-sample",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XAdES Signer Properties",permalink:"/docs/signing/ades-formats/xades-signer/xades"},next:{title:"CAdES Signer Properties",permalink:"/docs/signing/ades-formats/cades-signer/cades"}},p={},l=[],d={toc:l},f="wrapper";function E(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(f,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xades-signer-sample-configuration"},"XAdES Signer Sample Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WORKER1003.TYPE=PROCESSABLE\nWORKER1003.TSA_USERNAME=test\nWORKER1003.EMBED_CRL=true\nWORKER1003.CRYPTOTOKEN=CryptoTokenP11\nWORKER1003.DISABLEKEYUSAGECOUNTER=true\nWORKER1003.DIGESTALGORITHM=SHA256\nWORKER1003.AUTHTYPE=org.signserver.server.UsernameAuthorizer\nWORKER1003.NAME=XAdES-Baseline-LTA\nWORKER1003.TSA_PASSWORD=test\nWORKER1003.TSA_URL=https\\://freetsa.org/tsr\nWORKER1003.DEFAULTKEY=testKey\nWORKER1003.IMPLEMENTATION_CLASS=com.czertainly.signserver.module.xades.signer.XAdESSigner\nWORKER1003.SIGNATURE_LEVEL=XAdES-BASELINE-LTA\nWORKER1003.ACCEPT_ALL_USERNAMES=true\nWORKER1003.SIGNATURE_PACKAGING=ENVELOPING\nWORKER1003.EMBED_XML=true\n")))}E.isMDXComponent=!0}}]);