"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6790],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75047:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],c={},l="Overview",s={unversionedId:"certificate-key/protocols/overview",id:"certificate-key/protocols/overview",title:"Overview",description:"Certificate management and automation of the certificate lifecycle is a key part to protect your environment from outages and security breaches.",source:"@site/docs/10-certificate-key/07-protocols/01-overview.md",sourceDirName:"10-certificate-key/07-protocols",slug:"/certificate-key/protocols/overview",permalink:"/docs/certificate-key/protocols/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Revoke Certificate",permalink:"/docs/certificate-key/quick-start/certificate-management/revoke-certificate"},next:{title:"Overview",permalink:"/docs/certificate-key/protocols/acme/overview"}},p={},u=[],f={toc:u},m="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Certificate management and automation of the certificate lifecycle is a key part to protect your environment from outages and security breaches.\nProtocols play important role in this process, whether standardized or proprietary."),(0,i.kt)("p",null,"The platform implements protocols for consistent and secure certificate management. You can use protocols independently on technologies, which provides a higher flexibility and seamless migration if needed."),(0,i.kt)("p",null,"From a different perspective, platform works as a proxy between the clients that use protocols and technologies like certification authorities. The benefits of this approach and setup are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"easy and convenient migration between technologies without impact on the clients consuming services"),(0,i.kt)("li",{parentName:"ul"},"agility in switching between different technologies in case of obsolete algorithm or revoked certificates"),(0,i.kt)("li",{parentName:"ul"},"consistent and compliant certificate management in hybrid environments"),(0,i.kt)("li",{parentName:"ul"},"control about the certificate lifecycle and its usage")),(0,i.kt)("p",null,"The following protocols are implemented:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"acme/overview"},"ACME")," (Automatic Certificate Management Environment)"),(0,i.kt)("td",{parentName:"tr",align:null},"ACME protocol as defined by ",(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8555"},"RFC 8555 - Automatic Certificate Management Environment (ACME)"),". ",(0,i.kt)("br",null)," Protocol for automated requesting, validating, and issuing of certificates. Implementation supports issuing of certificates to not only web servers, but also clients, IoT devices, and many more.")))))}d.isMDXComponent=!0}}]);