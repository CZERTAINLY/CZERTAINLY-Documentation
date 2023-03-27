"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4941],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7072:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={},l="RA Profile",s={unversionedId:"concept-design/core-components/ra-profile",id:"concept-design/core-components/ra-profile",title:"RA Profile",description:"What is RA Profile?",source:"@site/docs/02-concept-design/04-core-components/07-ra-profile.md",sourceDirName:"02-concept-design/04-core-components",slug:"/concept-design/core-components/ra-profile",permalink:"/docs/concept-design/core-components/ra-profile",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authority",permalink:"/docs/concept-design/core-components/authority"},next:{title:"Compliance Profile",permalink:"/docs/concept-design/core-components/compliance-profile"}},p={},u=[{value:"What is <code>RA Profile</code>?",id:"what-is-ra-profile",level:2},{value:"Characteristics",id:"characteristics",level:3},{value:"Process Flow",id:"process-flow",level:3}],f={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ra-profile"},"RA Profile"),(0,o.kt)("h2",{id:"what-is-ra-profile"},"What is ",(0,o.kt)("inlineCode",{parentName:"h2"},"RA Profile"),"?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," is a representation of attributes that collectively provides a complete configuration of the certificate service which can be used by users and applications in a consistent and convenient way."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," provides an abstraction of the certificate management service configuration attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Certification Authority and its related information"),(0,o.kt)("li",{parentName:"ul"},"Certificate management technology-specific attributes"),(0,o.kt)("li",{parentName:"ul"},"Service-related configuration"),(0,o.kt)("li",{parentName:"ul"},"Access control configuration")),(0,o.kt)("p",null,"Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," uses the following attributes to identify the service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile")," Name"),(0,o.kt)("li",{parentName:"ul"},"Description")),(0,o.kt)("h3",{id:"characteristics"},"Characteristics"),(0,o.kt)("p",null,"Characteristics of ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Binds the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authority")," and act as a specific certificate management service"),(0,o.kt)("li",{parentName:"ul"},"Configures the certificate specific attributes and defines the compliance rules and behavior"),(0,o.kt)("li",{parentName:"ul"},"Provide rules for issuing, renewing, and revocation of the certificate")),(0,o.kt)("h3",{id:"process-flow"},"Process Flow"),(0,o.kt)("p",null,"The following steps illustrate the process of requesting the certificate through the ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Client")," requests the ",(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile")," to issue certificate providing the certificate signing request"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile")," validates the certificate signing request against its configuration"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile")," forwards the certificate signing request and related attributes to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authority Provider")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Authority Provider")," validates the certificate signing request and issues the certificate"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile")," forwards the certificate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Client"))))}d.isMDXComponent=!0}}]);