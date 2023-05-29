"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3963],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),g=o,y=l["".concat(s,".").concat(g)]||l[g]||f[g]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70302:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={},s="Crypto Token Configuration",p={unversionedId:"signing/qscd-integration/utimaco-cp5/cryptotoken",id:"signing/qscd-integration/utimaco-cp5/cryptotoken",title:"Crypto Token Configuration",description:"CryptoServer CP5 uses a standard PKCS#11 Crypto Token for the integration with the SignServer.",source:"@site/docs/30-signing/25-qscd-integration/07-utimaco-cp5/11-cryptotoken.md",sourceDirName:"30-signing/25-qscd-integration/07-utimaco-cp5",slug:"/signing/qscd-integration/utimaco-cp5/cryptotoken",permalink:"/docs/signing/qscd-integration/utimaco-cp5/cryptotoken",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CryptoServer CP5 PKCS#11 Installation",permalink:"/docs/signing/qscd-integration/utimaco-cp5/middleware"},next:{title:"Introduction",permalink:"/docs/signing/qscd-integration/nshield-xc-cc/overview"}},u={},l=[{value:"Sample configuration",id:"sample-configuration",level:2}],f={toc:l},g="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"crypto-token-configuration"},"Crypto Token Configuration"),(0,i.kt)("p",null,"CryptoServer CP5 uses a standard ",(0,i.kt)("a",{parentName:"p",href:"https://doc.primekey.com/signserver/signserver-reference/signserver-components/cryptotokens/pkcs11cryptotoken"},"PKCS#11 Crypto Token")," for the integration with the SignServer."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Due to initialization and authorization of the private keys functions, private key cannot be managed through the PKCS#11 Crypto Token. The PKCS#11 Crypto Token should always be configured as a last step with existing certificate and private key authorized for signing/sealing operations.")),(0,i.kt)("h2",{id:"sample-configuration"},"Sample configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WORKER6.CRYPTOTOKEN_IMPLEMENTATION_CLASS=org.signserver.server.cryptotokens.PKCS11CryptoToken\nWORKER6.SLOTLABELVALUE=TestSlot\nWORKER6.NAME=UtimacoCP5QSCDCryptoToken\nWORKER6.PIN=_MASKED_\nWORKER6.IMPLEMENTATION_CLASS=org.signserver.server.signers.CryptoWorker\nWORKER6.DEFAULTKEY=testkey01\nWORKER6.ATTRIBUTES=attributes(generate,CKO_PUBLIC_KEY,*) \\= {\\r\\n   CKA_TOKEN \\= false\\r\\n   CKA_ENCRYPT \\= false\\r\\n   CKA_VERIFY \\= true\\r\\n   CKA_WRAP \\= false\\r\\n}\\r\\nattributes(generate, CKO_PRIVATE_KEY,*) \\= {\\r\\n   CKA_TOKEN \\= true\\r\\n   CKA_PRIVATE \\= true\\r\\n   CKA_SENSITIVE \\= true\\r\\n   CKA_EXTRACTABLE \\= false\\r\\n   CKA_DECRYPT \\= false\\r\\n   CKA_SIGN \\= true\\r\\n   CKA_UNWRAP \\= false\\r\\n}\nWORKER6.SHAREDLIBRARYNAME=CryptoServerCP5\nWORKER6.DISABLED=FALSE\nWORKER6.TYPE=CRYPTO_WORKER\nWORKER6.SLOTLABELTYPE=SLOT_LABEL\n")))}y.isMDXComponent=!0}}]);