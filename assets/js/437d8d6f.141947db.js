"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3886],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6682:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],l={},c="Create Realm and Client",s={unversionedId:"certificate-key/integration-guides/keycloak/create-realm",id:"certificate-key/integration-guides/keycloak/create-realm",title:"Create Realm and Client",description:"Based on your Keycloak version, steps to create realm and OIDC client may differ. Refer to the Keycloak documentation specific for your Keycloak version.",source:"@site/docs/10-certificate-key/20-integration-guides/10-keycloak/03-create-realm.md",sourceDirName:"10-certificate-key/20-integration-guides/10-keycloak",slug:"/certificate-key/integration-guides/keycloak/create-realm",permalink:"/docs/certificate-key/integration-guides/keycloak/create-realm",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/20-integration-guides/10-keycloak/03-create-realm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/certificate-key/integration-guides/keycloak/overview"},next:{title:"Configure OIDC",permalink:"/docs/certificate-key/integration-guides/keycloak/configure-oidc"}},p={},u=[{value:"Create Realm",id:"create-realm",level:2},{value:"Create OIDC Client",id:"create-oidc-client",level:2},{value:"Configure CZERTAINLY dedicated scope",id:"configure-czertainly-dedicated-scope",level:3}],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-realm-and-client"},"Create Realm and Client"),(0,i.kt)("admonition",{title:"Keycloak version",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Based on your Keycloak version, steps to create realm and OIDC client may differ. Refer to the Keycloak documentation specific for your Keycloak version.")),(0,i.kt)("p",null,"Keycloak realm provides a management space where you can create users and give them permissions to use CZERTAINLY.\nCZERTAINLY realm can be considered as a kind of isolation you want to have for your users and applications using the platform."),(0,i.kt)("p",null,"You can create multiple realms in Keycloak for more granular isolation of use-cases related to the platform. For the purpose of this guide, we will create one new realm for CZERTAINLY."),(0,i.kt)("p",null,"To protect using OpenID connect protocol, we will need to create an OIDC client in the respective realm."),(0,i.kt)("h2",{id:"create-realm"},"Create Realm"),(0,i.kt)("p",null,"To create a new realm, follow steps in ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#proc-creating-a-realm_server_administration_guide"},"Creating a realm")," with the following attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Realm name: ",(0,i.kt)("strong",{parentName:"li"},"CZERTAINLY"))),(0,i.kt)("h2",{id:"create-oidc-client"},"Create OIDC Client"),(0,i.kt)("p",null,"To create new OIDC client, follow steps described in ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#proc-creating-oidc-client_server_administration_guide"},"Creating an OpenID Connect client")," with the following attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Client type: ",(0,i.kt)("strong",{parentName:"li"},"OpenID Connect")),(0,i.kt)("li",{parentName:"ul"},"Client ID: ",(0,i.kt)("strong",{parentName:"li"},"CZERTAINLY")),(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("strong",{parentName:"li"},"CZERTAINLY")),(0,i.kt)("li",{parentName:"ul"},"Client suthentication: ",(0,i.kt)("strong",{parentName:"li"},"On")),(0,i.kt)("li",{parentName:"ul"},"Root URL: ",(0,i.kt)("strong",{parentName:"li"},"https://<CZERTAINLY_DOMAIN>"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"<CZERTAINLY_DOMAIN>")," is the domain of your CZERTAINLY instance. This serves as an access point to your deployment"),(0,i.kt)("li",{parentName:"ul"},"Valid redirect URIs: list of valid redirect URIs, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<CZERTAINLY_DOMAIN>*")),(0,i.kt)("li",{parentName:"ul"},"Valid post logout redirect URIs: list of valid post logout redirect URIs, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<CZERTAINLY_DOMAIN>/administrator/")),(0,i.kt)("li",{parentName:"ul"},"Web origins: list of valid web origins, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<CZERTAINLY_DOMAIN>"))),(0,i.kt)("admonition",{title:"URIs and origins",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Valid URIs and web origins should be properly configured to avoid any security related issues, for example Cross-origin resource sharing (CORS) issues.")),(0,i.kt)("h3",{id:"configure-czertainly-dedicated-scope"},"Configure CZERTAINLY dedicated scope"),(0,i.kt)("p",null,"The user in the platform is identified using JSON ID as described in the ",(0,i.kt)("a",{parentName:"p",href:"../../concept-design/architecture/access-control/identification#json-id"},"Identification")," part of the access control."),(0,i.kt)("p",null,"Based on the attributes coming from the configuration of the identity provider, proper mappers for the dedicated scope should be created.\nFor more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#_protocol-mappers"},"OIDC token and SAML assertion mappings")," in the Keycloak documentation."),(0,i.kt)("p",null,"As an example, if you want to create mapper that will map ",(0,i.kt)("inlineCode",{parentName:"p"},"groups")," attributes (that are sent from Active Directory) to array of ",(0,i.kt)("inlineCode",{parentName:"p"},"roles")," in the JSON ID, you can use the following configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mapper type: ",(0,i.kt)("strong",{parentName:"li"},"User Attribute")),(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("strong",{parentName:"li"},"Groups")),(0,i.kt)("li",{parentName:"ul"},"User Attribute: ",(0,i.kt)("strong",{parentName:"li"},"groups")),(0,i.kt)("li",{parentName:"ul"},"Token Claim Name: ",(0,i.kt)("strong",{parentName:"li"},"roles")),(0,i.kt)("li",{parentName:"ul"},"Claim JSON Type: ",(0,i.kt)("strong",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"Add to ID token: ",(0,i.kt)("strong",{parentName:"li"},"On")),(0,i.kt)("li",{parentName:"ul"},"Add to access token: ",(0,i.kt)("strong",{parentName:"li"},"On")),(0,i.kt)("li",{parentName:"ul"},"Add to userinfo: ",(0,i.kt)("strong",{parentName:"li"},"On")),(0,i.kt)("li",{parentName:"ul"},"Multivalued: ",(0,i.kt)("strong",{parentName:"li"},"On")),(0,i.kt)("li",{parentName:"ul"},"Aggregate attribute values: ",(0,i.kt)("strong",{parentName:"li"},"Off"))))}f.isMDXComponent=!0}}]);