"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9012],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},61564:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(67294),i=r(86010),a=r(39960),c=r(24575),o=r(13919),u=r(95999),l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function d(e){var t=e.href,r=e.icon,a=e.title,c=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:a},r," ",a),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:c},c))}function f(e){var t,r=e.item,i=(0,c.Wl)(r);return i?n.createElement(d,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function p(e){var t,r,i=e.item,a=(0,o.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",u=(0,c.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(d,{href:i.href,icon:a,title:i.label,description:null!=(r=i.description)?r:null==u?void 0:u.description})}function m(e){var t=e.item;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}},69268:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),i=r(86010),a=r(24575),c=r(61564);function o(e){var t=e.className,r=(0,a.jA)();return n.createElement(u,{items:r.items,className:t})}function u(e){var t=e.items,r=e.className;if(!t)return n.createElement(o,e);var u=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},u.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(c.Z,{item:e}))})))}},19069:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),c=r(69268),o=["components"],u={},l="Introduction",s={unversionedId:"certificate-key/introduction",id:"certificate-key/introduction",title:"Introduction",description:"Cryptographic keys and digital certificates are the foundation of security in our digital world. They are used to secure communication, authentication, and digital signatures. The platform CZERTAINLY is designed to help you manage and automate your cryptographic keys and digital certificates in a secure and efficient way.",source:"@site/docs/10-certificate-key/01-introduction.mdx",sourceDirName:"10-certificate-key",slug:"/certificate-key/introduction",permalink:"/docs/certificate-key/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Overview",permalink:"/docs/certificate-key/concept-design/overview"}},d={},f=[],p={toc:f},m="wrapper";function y(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Cryptographic keys and digital certificates are the foundation of security in our digital world. They are used to secure communication, authentication, and digital signatures. The platform CZERTAINLY is designed to help you manage and automate your cryptographic keys and digital certificates in a secure and efficient way."),(0,a.kt)("p",null,"The core of the platform is released as a commercial open source project under the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"MIT License"),". Additional features and services can be developed according to the OpenAPI specification by anyone. Additional services and features are available under subscription plans, especially for the proprietary technologies."),(0,a.kt)(c.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);