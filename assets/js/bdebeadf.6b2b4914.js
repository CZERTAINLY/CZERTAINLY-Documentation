"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7964],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40212:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={},p="Entity",l={unversionedId:"concept-design/core-components/entity",id:"concept-design/core-components/entity",title:"Entity",description:"An Entity represents the end-user that actually uses the certificate and associated private key.",source:"@site/docs/02-concept-design/04-core-components/09-entity.md",sourceDirName:"02-concept-design/04-core-components",slug:"/concept-design/core-components/entity",permalink:"/docs/concept-design/core-components/entity",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compliance Profile",permalink:"/docs/concept-design/core-components/compliance-profile"},next:{title:"Location",permalink:"/docs/concept-design/core-components/location"}},s={},u=[{value:"Characteristics",id:"characteristics",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entity"},"Entity"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," represents the end-user that actually uses the certificate and associated private key."),(0,a.kt)("p",null,"As an example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server"),(0,a.kt)("li",{parentName:"ul"},"Network appliance, like router, load balancer"),(0,a.kt)("li",{parentName:"ul"},"Active Directory"),(0,a.kt)("li",{parentName:"ul"},"IoT device")),(0,a.kt)("h2",{id:"characteristics"},"Characteristics"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," provides access to the end-user that can be further managed by its ",(0,a.kt)("a",{parentName:"p",href:"location"},(0,a.kt)("inlineCode",{parentName:"a"},"Locations")),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," is always managed by specific implementation of ",(0,a.kt)("a",{parentName:"p",href:"../../connectors/entity-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity Provider"))," that is connected with the platform.\nBased on that, we can perform operations with ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),", such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add, edit, or remove ",(0,a.kt)("inlineCode",{parentName:"li"},"Entities")),(0,a.kt)("li",{parentName:"ul"},"Manage state and ",(0,a.kt)("a",{parentName:"li",href:"location"},(0,a.kt)("inlineCode",{parentName:"a"},"Locations")))))}m.isMDXComponent=!0}}]);