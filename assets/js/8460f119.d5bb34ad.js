"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5206],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,h=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81672:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],c={},u="Externalized Authentication",l={unversionedId:"certificate-key/concept-design/architecture/access-control/externalized-authentication",id:"certificate-key/concept-design/architecture/access-control/externalized-authentication",title:"Externalized Authentication",description:"Platform relies on the externalized authentication of the users.",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/03-externalized-authentication.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture/05-access-control",slug:"/certificate-key/concept-design/architecture/access-control/externalized-authentication",permalink:"/docs/certificate-key/concept-design/architecture/access-control/externalized-authentication",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/certificate-key/concept-design/architecture/access-control/overview"},next:{title:"Identification",permalink:"/docs/certificate-key/concept-design/architecture/access-control/identification"}},s={},p=[],d={toc:p},f="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"externalized-authentication"},"Externalized Authentication"),(0,a.kt)("p",null,"Platform relies on the externalized authentication of the users."),(0,a.kt)("p",null,"Platform expects to get authenticated user data, meaning that the authentication was already performed by the external server."),(0,a.kt)("p",null,"External authentication can be performed using various mechanisms, including, but not limited to (depending on the technology):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"certificate-based authentication"),(0,a.kt)("li",{parentName:"ul"},"single-sign on using SAML 2.0 or OAuth 2.0"),(0,a.kt)("li",{parentName:"ul"},"OpenID Connect")),(0,a.kt)("p",null,"The identity of authenticated user is forwarded to the identification service."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Based on the technology being used for externalized authentication, multi-factor authentication (MFA) or risk-based authentication (RBA), and any other modern authentication methods may be applied.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"One of the tested authentication servers is ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak"),". Keycloak can integrate with the API gateway using OIDC and supports integration to various identity providers including various authentication flows.")))}h.isMDXComponent=!0}}]);