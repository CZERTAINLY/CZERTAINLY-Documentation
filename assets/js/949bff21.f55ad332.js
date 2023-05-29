"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4399],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,f=p["".concat(s,".").concat(u)]||p[u]||v[u]||o;return r?i.createElement(f,c(c({ref:t},d),{},{components:r})):i.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7537:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var i=r(83117),n=r(80102),o=(r(67294),r(3905)),c=["components"],a={},s="Discovery Provider",l={unversionedId:"certificate-key/connectors/discovery-provider",id:"certificate-key/connectors/discovery-provider",title:"Discovery Provider",description:"Overview",source:"@site/docs/10-certificate-key/12-connectors/22-discovery-provider.md",sourceDirName:"10-certificate-key/12-connectors",slug:"/certificate-key/connectors/discovery-provider",permalink:"/docs/certificate-key/connectors/discovery-provider",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cryptography Provider",permalink:"/docs/certificate-key/connectors/cryptography-provider"},next:{title:"Entity Provider",permalink:"/docs/certificate-key/connectors/entity-provider"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Provider objects",id:"provider-objects",level:2},{value:"Processes",id:"processes",level:2},{value:"Create <code>Discovery</code>",id:"create-discovery",level:3},{value:"Get <code>Discovery</code> Details",id:"get-discovery-details",level:3},{value:"Delete <code>Discovery</code>",id:"delete-discovery",level:3},{value:"Specification and example",id:"specification-and-example",level:2}],v={toc:p},u="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)(u,(0,i.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discovery-provider"},"Discovery Provider"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Certificate discovery, in other words searching for certificates in various location and sources, is important part of the lifecycle management. It provides clear understanding and visibility on all certificates that are used in the infrastructure and therefore should be included in the inventory to start manage them. Discovery can also detect certificates that are not allowed or should not be deployed."),(0,o.kt)("p",null,"Discovery Providers implements the functionality to discover certificate. It is responsible for discovering the certificates from defined source and returning the list of certificates to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Core")," inventory and makes it available for various lifecycle management operations."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Discovery Provider triggers the discovery process using specific configuration. The trigger is managed from ",(0,o.kt)("inlineCode",{parentName:"p"},"Core"),". Once the certificate discovery process is initiated, platform periodically checks for the discovered certificates that are included in the certificate inventory."),(0,o.kt)("p",null,"The history of ",(0,o.kt)("inlineCode",{parentName:"p"},"Discovery")," is maintained in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Core")," for further reference."),(0,o.kt)("h2",{id:"provider-objects"},"Provider objects"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../concept-design/modules/certificate-discovery"},(0,o.kt)("inlineCode",{parentName:"a"},"Discovery"))," objects are managed in the platform through the Discovery Provider implementation.\nEach ",(0,o.kt)("inlineCode",{parentName:"p"},"Discovery")," provides an overview of the configuration and the discovery process, including discovered certificates."),(0,o.kt)("h2",{id:"processes"},"Processes"),(0,o.kt)("p",null,"The following processes are associated with the Discovery Provider and management of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Discovery")," objects."),(0,o.kt)("h3",{id:"create-discovery"},"Create ",(0,o.kt)("inlineCode",{parentName:"h3"},"Discovery")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/fLJDRjim3BxlAGZiMjTt7u8EoQN0TjdGNeeUM9bnXDgI9j7PCkJXHxcsB2VEgG7YH3B9xqUa000U0gFdlck_o0AmPslwxetyi0plsZZqs05Rr_iM3imkL6LPMnNkrJ_oZDgqftjbknATBeUi-DcscWn3iO6jzGGlBqf-Ybe7PO_aJ-LNngRSJSlY1nfig9EKqZhooDgQKdb2fXJq-bh1TjY2j9VmZ9Njk3KYNuV27yq728wKtci5tvYzVkkP0kozxOIcCQJO-bb2PBo9Jobs8FKEz5S79gC4QNyZOLAycZ9p6SbWHs3aiL9YB3uuD_wVxIkSjqTTa__mSTQIkNV4LjVYmFmo6lWyxcRwC_09j4WgVbBeMuxaSKg0iRA0fDJp-Vn93ScRJC8KkvK-YuSclAE6HwDPHmrgtbzfYNKvt7i3YGI8fgOXJpLWE1a5deAp9boUI2mmzjLLYQUdnzqQw0PsTDHA6gnAx22JCXi_nIrCgzPZ5m1fKS4lZaGdLg97hMLdOoBXTtc174ri46D83XhS0JCtMciTi6vRGFdc4802FwPHdHAM5dww8nhYnNtmNQPh6COb-Tyz1RxWSDqCYwHX81qssWn8K9DSRUti79dwng1_E7_ZiFB0rBTPxEKmFGYENCR_0G00"})),(0,o.kt)("h3",{id:"get-discovery-details"},"Get ",(0,o.kt)("inlineCode",{parentName:"h3"},"Discovery")," Details"),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/TP0z2y8m441tVyM1SvkzWmWMDnTNwN2cHmqckN2v2FNN6ujVYrcE1_TuHm00jbbHj0I_gW1Ob6C9Pv85yzN5X881b5CH3nVLb3jZHhQvjNSIHHVzt5eE1fCpY_LyE-yeAZGRsB4Gd4wsZcPqsVADP3PhnSdqRsmE676YK1N3YGJLSJGJwMTZ63hu0FHKkpv_Qy_6gzN1dYKKZqe_nlZFMExiu4XQ9FuHjXJ7-aCF"})),(0,o.kt)("h3",{id:"delete-discovery"},"Delete ",(0,o.kt)("inlineCode",{parentName:"h3"},"Discovery")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/XP6nRWCn28RtFWLIPyVx3LMaPEtIDSf0RP9QFOE5kKZfqzTd9JabYbely2FW0mm0iAw6QbCUNve0d4nuof-aNTRln0KLCvYKIKVuCYjry3vAgAlmGsgOU3olWcIF9VbUDR_Dc8WDt1jiH0bskz2CYwa6EP6U_QlXqM-lqhqZuv5oA_5IID6Ii8yqaj4jQRyVu8Doy-4MMtWpfTEOAPXeHrxyXUkAoYb5qeS1_gPkU-WfzKfpbqs79Gkq3nkVpDZilxlCYVs8zoqFfCI1xfglYMFxmLy0"})),(0,o.kt)("h2",{id:"specification-and-example"},"Specification and example"),(0,o.kt)("p",null,"The Discovery Provider implements ",(0,o.kt)("a",{parentName:"p",href:"common-interfaces/overview"},"Common Interfaces")," and the following additional interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/connector-discovery-provider/#tag/Discovery"},"Discovery"))),(0,o.kt)("p",null,"The OpenAPI specification of the Discovery Provider can be found here: ",(0,o.kt)("a",{parentName:"p",href:"/api/connector-discovery-provider/"},"Connector API - Discovery Provider"),"."))}f.isMDXComponent=!0}}]);