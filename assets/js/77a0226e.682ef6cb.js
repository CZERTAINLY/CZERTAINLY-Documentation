"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5598],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},24177:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={},l="Overview",p={unversionedId:"connectors/common-interfaces/overview",id:"connectors/common-interfaces/overview",title:"Overview",description:"Each Connector provides some specific functionality in the platform defined by its Function Groups.",source:"@site/docs/12-connectors/10-common-interfaces/01-overview.md",sourceDirName:"12-connectors/10-common-interfaces",slug:"/connectors/common-interfaces/overview",permalink:"/docs/connectors/common-interfaces/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/connectors/overview"},next:{title:"Info Interface",permalink:"/docs/connectors/common-interfaces/info-interface"}},u={},f=[],s={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," provides some specific functionality in the platform defined by its ",(0,a.kt)("a",{parentName:"p",href:"../../concept-design/architecture/connector#function-group"},"Function Groups"),".\nThere are the following interfaces that are mandatory to be implemented for each ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," independently of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Group"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Short description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"info-interface"},"Info")),(0,a.kt)("td",{parentName:"tr",align:null},"Information about the ",(0,a.kt)("inlineCode",{parentName:"td"},"Connector"),", its ",(0,a.kt)("inlineCode",{parentName:"td"},"Function Groups"),", supported ",(0,a.kt)("inlineCode",{parentName:"td"},"Kinds"),", list of endpoints")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"health-interface"},"Health")),(0,a.kt)("td",{parentName:"tr",align:null},"Status information about the ",(0,a.kt)("inlineCode",{parentName:"td"},"Connector")," and its services")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"attributes-interface"},"Attributes")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Attributes")," definition of the ",(0,a.kt)("inlineCode",{parentName:"td"},"Connector")," specific technology and its validation")))))}m.isMDXComponent=!0}}]);