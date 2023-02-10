"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6910],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52140:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={},s="Authorization",u={unversionedId:"concept-design/architecture/access-control/authorization",id:"concept-design/architecture/access-control/authorization",title:"Authorization",description:"Once user is properly authenticated and identified, internal authorization token is issued based on the roles and associated permissions that are assigned to the user.",source:"@site/docs/02-concept-design/02-architecture/05-access-control/07-authorization.md",sourceDirName:"02-concept-design/02-architecture/05-access-control",slug:"/concept-design/architecture/access-control/authorization",permalink:"/docs/concept-design/architecture/access-control/authorization",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Identification",permalink:"/docs/concept-design/architecture/access-control/identification"},next:{title:"Users",permalink:"/docs/concept-design/architecture/access-control/users"}},l={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"Once user is properly authenticated and identified, internal authorization token is issued based on the roles and associated permissions that are assigned to the user.\nThe authorization token is used by internal services to evaluate authorization of identified user."),(0,i.kt)("p",null,"The authorization is evaluated using ",(0,i.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/"},"Open Policy Agent")," policies (OPA)."),(0,i.kt)("p",null,"The following diagram shows the interaction with the OPA:"),(0,i.kt)("p",null,(0,i.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/RP31JiD034Jl-nLMxuW8EELGDGA4SYA2Bp29Mwnkl67NsoXyVRrGeLBrw9atziYRf1WrZzvXrY1v_A3e9fEuvmb5OTLqBRoWqepB2Z21pHT0razuftZWddu94vmhkPirF8P8DRpHLwQaCBEnF90eRxb7vI2WOK_Y2bVu4gwXlORy7Bf45iZ9Al_tcfHu9n23fmGe0qmKHpOnI3gXVzNA629_NolpsZKrF1_GPti0u3dfp3lVudsOuHQUI9PJlBJfsXhkgigCX-hUkGt9OBy-0W00"})),(0,i.kt)("p",null,"For more information about the authorization policies, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Auth-OPA-Policies"},"CZERTAINLY Auth OPA Policies"),"."))}d.isMDXComponent=!0}}]);