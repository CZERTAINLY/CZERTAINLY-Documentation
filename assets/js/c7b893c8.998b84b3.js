"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8166],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),h=o,m=f["".concat(l,".").concat(h)]||f[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={},l="Health Interface",s={unversionedId:"connectors/common-interfaces/health-interface",id:"connectors/common-interfaces/health-interface",title:"Health Interface",description:"Overview",source:"@site/docs/12-connectors/10-common-interfaces/06-health-interface.md",sourceDirName:"12-connectors/10-common-interfaces",slug:"/connectors/common-interfaces/health-interface",permalink:"/docs/connectors/common-interfaces/health-interface",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Info Interface",permalink:"/docs/connectors/common-interfaces/info-interface"},next:{title:"Attributes Interface",permalink:"/docs/connectors/common-interfaces/attributes-interface"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Health-check information",id:"health-check-information",level:2},{value:"Processes",id:"processes",level:2},{value:"Health-check",id:"health-check",level:3},{value:"Specification and example",id:"specification-and-example",level:2}],f={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"health-interface"},"Health Interface"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," has to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Health")," interface. This interface provides information about the status of services on which the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," depends like database, HSM and so on. Although it is mandatory to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"Health")," interface, it is fully up to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," implementation what information will be provided."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Health")," interface provides current information about the status of the services provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," whenever it is requested.\nTypically, when you would like to access details of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),", you can request information about its status."),(0,a.kt)("h2",{id:"health-check-information"},"Health-check information"),(0,a.kt)("p",null,"The status information contains the following structure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"overall status of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Connector")),(0,a.kt)("li",{parentName:"ul"},"partial information about the service (which can contain any information and status)")),(0,a.kt)("p",null,"The status can be one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"badge badge--success"},"ok")," - service is running as expected"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"badge badge--danger"},"nok")," - there is a problem with the service, you should check the `Connector`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"badge badge--secondary"},"unknown")," - status information not available")),(0,a.kt)("h2",{id:"processes"},"Processes"),(0,a.kt)("h3",{id:"health-check"},"Health-check"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," with proper permissions can request health-check of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connectors")," and invoke API that works with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Health")," interface of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),".\nThe following diagrams represents the requests and communication flow."),(0,a.kt)("p",null,(0,a.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/RL4zJyCm4Dtv5IUnadhFK1Lb00OGOgqw7EwriHhVHUTp9VZrn2PfYuGNwydlwyu009jag9RZS3S1m6p2ENwILfXEWKTKZ60oPXsWDnjJwznUV5hvRrB3mCFNoajqE0PNLULqGo2sPhtkH0csMpzTZHTcyYRgxWsFhbjWyugCHuf5yVZ-ucGaHGl2plVaJy-4W_MxNGjTWV2BGGw0SF6u9fUaaZi_j0k_UbreRs84SYQjWeSR-XCPJ4knd23mGJJMAYNEUhe60l8UWYL8fEVWATqqMEQQvs_XWomhpxP_gnPENTP_h0tnVlgR7m00"})),(0,a.kt)("h2",{id:"specification-and-example"},"Specification and example"),(0,a.kt)("p",null,"You can find specification and information about the ",(0,a.kt)("inlineCode",{parentName:"p"},"Health")," interface on the following locations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/core-connector/"},"Core Connector API")),(0,a.kt)("li",{parentName:"ul"},"Connector API specifications, see for example ",(0,a.kt)("a",{parentName:"li",href:"/api/connector-authority-provider-v2/"},"Authority Provider"))))}h.isMDXComponent=!0}}]);