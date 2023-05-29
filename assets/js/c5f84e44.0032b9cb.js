"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5034],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={},s="Create User and Login",c={unversionedId:"certificate-key/integration-guides/keycloak/create-user-login",id:"certificate-key/integration-guides/keycloak/create-user-login",title:"Create User and Login",description:"Create user in the CZERTAINLY realm following steps described in the Creating users section of the Keycloak documentation, with these attributes:",source:"@site/docs/10-certificate-key/20-integration-guides/10-keycloak/07-create-user-login.md",sourceDirName:"10-certificate-key/20-integration-guides/10-keycloak",slug:"/certificate-key/integration-guides/keycloak/create-user-login",permalink:"/docs/certificate-key/integration-guides/keycloak/create-user-login",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure OIDC",permalink:"/docs/certificate-key/integration-guides/keycloak/configure-oidc"},next:{title:"Add CZERTAINLY Theme",permalink:"/docs/certificate-key/integration-guides/keycloak/czertainly-theme"}},u={},p=[{value:"Login",id:"login",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-user-and-login"},"Create User and Login"),(0,a.kt)("p",null,"Create user in the CZERTAINLY realm following steps described in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#proc-creating-user_server_administration_guide"},"Creating users")," section of the Keycloak documentation, with these attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Username: ",(0,a.kt)("strong",{parentName:"li"},"admin")),(0,a.kt)("li",{parentName:"ul"},"Email: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"mailto:admin@czertainly.local"},"admin@czertainly.local"))),(0,a.kt)("li",{parentName:"ul"},"First name: ",(0,a.kt)("strong",{parentName:"li"},"CZERTAINLY")),(0,a.kt)("li",{parentName:"ul"},"Last name: ",(0,a.kt)("strong",{parentName:"li"},"Administrator"))),(0,a.kt)("p",null,"You can use the attributes mapping to define roles for the user. For that purpose, set the user attributes according to ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#proc-configuring-user-attributes_server_administration_guide"},"Configuring user attributes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"groups: ",(0,a.kt)("strong",{parentName:"li"},"superadmin"))),(0,a.kt)("p",null,"This will map the ",(0,a.kt)("inlineCode",{parentName:"p"},"groups")," attribute to the ",(0,a.kt)("inlineCode",{parentName:"p"},"roles")," attribute in the JSON ID of the user and the resulting JSON ID will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email_verified": true,\n  "roles": [\n    "superadmin"\n  ],\n  "username": "admin",\n  "sub": "5560f639-8067-415d-85ae-809b06e48d19",\n  "given_name": "CZERTAINLY",\n  "family_name": "Administrator",\n  "email": "admin@czertainly.local",\n  "id": "5560f639-8067-415d-85ae-809b06e48d19",\n  "preferred_username": "admin",\n  "name": "CZERTAINLY Administrator"\n}\n')),(0,a.kt)("admonition",{title:"JSON ID",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"JSON ID will be forwarder by the API gateway to CZERTAINLY. The JSON ID contains the payload from the Userinfo Endpoint of the Keycloak OpenID Connect provider. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"../../concept-design/architecture/access-control/identification#json-id"},"JSON ID")," in the access control section.")),(0,a.kt)("admonition",{title:"Automatic registration of user and roles",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By default the users and roles that do not exists are rejected. However, in some cases, it is desirable to automatically register the user and roles. This is required for example when single sign-on (SSO) and user federation is allowed. The behavior of the user and roles registration is controlled by the values ",(0,a.kt)("inlineCode",{parentName:"p"},"createUnknownUsers")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"createUnknownRoles")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Auth")," service. If you want to enable automatic registration of users and roles, set the following values when installing or upgrading Helm chart:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'authService:\n  createUnknownUsers: "true"\n  createUnknownRoles: "true"\n'))),(0,a.kt)("h2",{id:"login"},"Login"),(0,a.kt)("p",null,"You can login to CZERTAINLY with configured user:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the CZERTAINLY login page: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://<CZERTAINLY_DOMAIN>/login")),(0,a.kt)("li",{parentName:"ul"},"Login with username ",(0,a.kt)("inlineCode",{parentName:"li"},"admin"))))}f.isMDXComponent=!0}}]);