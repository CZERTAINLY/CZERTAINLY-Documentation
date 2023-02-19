"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3755],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},23411:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],c={},l="Info Interface",p={unversionedId:"connectors/common-interfaces/info-interface",id:"connectors/common-interfaces/info-interface",title:"Info Interface",description:"Overview",source:"@site/docs/12-connectors/10-common-interfaces/03-info-interface.md",sourceDirName:"12-connectors/10-common-interfaces",slug:"/connectors/common-interfaces/info-interface",permalink:"/docs/connectors/common-interfaces/info-interface",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/connectors/common-interfaces/overview"},next:{title:"Health Interface",permalink:"/docs/connectors/common-interfaces/health-interface"}},s={},f=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Processes",id:"processes",level:2},{value:"Client operations",id:"client-operations",level:3},{value:"Connector self-registration",id:"connector-self-registration",level:3},{value:"Specification and example",id:"specification-and-example",level:2}],u={toc:f};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"info-interface"},"Info Interface"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," has to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Info")," interface. This interface provides information about the list of supported functions and endpoints of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),".\nThe data is validated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Core")," to check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," is compliant with the definition of interfaces based on its function group."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Info")," interface is used during the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," registration and reconnecting to update the information if necessary."),(0,i.kt)("h2",{id:"processes"},"Processes"),(0,i.kt)("h3",{id:"client-operations"},"Client operations"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," with proper permissions can manage the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connectors")," and invoke API that works with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Info")," interface of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),".\nThe following diagrams represents the requests and communication flow."),(0,i.kt)("p",null,(0,i.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/jLF1QW8n4BttAmPwLNFVWrZ4bb9RHF0a7c8owuRkPj9aKcY_libsrLsA1w7c4YRCcpVpvWK0O1POUevDVPS2a979ncQFlWt3kx5EUja0auk-XehPXK88JIfCr3TwbiRMNnD5ZP3EY1RL5gePF7v431nEZ_dCQuEMnzFfd3p2TglIDLPaBIecB-vP7iJy68vVfPK7R3BYOVKioA6NRCYA3h7R5T1bfnP1mWaw87qZHg1Fz1tzA9CFa5pX6Gja8JXKfZIeORDUWhGwQrCbh55j1z0WLwHlCTi1-PIL1tn21er9wJe0bHU7_2Tsr6P8lqWFrogxSLeothPHZpqJh8_19HkWFUygyxRqNL81InCOGdIEFAULbz6gpD7gdQsX_jJh3PwgZNgryhgCBSatlqQHUueyD5Yla-EOdHm5F7RSyEGfkZ225sDrkh855rQloDZUbsf7oTXMqslGiwH8-lO_"})),(0,i.kt)("h3",{id:"connector-self-registration"},"Connector self-registration"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," is allowed to self-register in the platform. In this case the information about the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," is stored and waiting for approval by the user or administrator.\nThe registration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," may be executed by any external entity."),(0,i.kt)("p",null,(0,i.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/RL5DQyCm3BtlLmXsRUfx3gMZsqhP6ANGK-d1TTJMD96CB0-sNpydIqZ3velyBFbzs000owXMD3NrGmPWapAbveJImNZp5ApO1fH3aXgkgY6MnbJiujnzewZrL7_D7JV61c-wM-rQCH4wPIaMYnKBmk7WSYdSS6uUrLxCEBR3YuygLZrJyRJT60xuYunqBPJZiOHTlmSxIjo9PeLMhs-Ky9w78QOGM1GhE2ToBMK4FeDU4TmVZWzM1FxC2YtRx8vhZGgUpYnDPmliYPDsBFyv6NBr-NihMNPqyzgxWRLm2d46RvwgN2nLy4BLbZrfd8QRfXiU8tFjzvld8TJKpXAfoj_x0m00"})),(0,i.kt)("h2",{id:"specification-and-example"},"Specification and example"),(0,i.kt)("p",null,"You can find specification and information about the ",(0,i.kt)("inlineCode",{parentName:"p"},"Info")," interface on the following locations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/core-connector/"},"Core Connector API")),(0,i.kt)("li",{parentName:"ul"},"Connector API specifications, see for example ",(0,i.kt)("a",{parentName:"li",href:"/api/connector-authority-provider-v2/"},"Authority Provider"))))}m.isMDXComponent=!0}}]);