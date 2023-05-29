"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8911],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(n),s=i,k=m["".concat(l,".").concat(s)]||m[s]||u[s]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},19833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],c={},l="Connector",p={unversionedId:"certificate-key/concept-design/architecture/connector",id:"certificate-key/concept-design/architecture/connector",title:"Connector",description:"Connector is the component that is used to communicate with the specific technology. In other words, Connector can be described as the service that translates actions and messages from other technologies to the platform.",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/04-connector.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture",slug:"/certificate-key/concept-design/architecture/connector",permalink:"/docs/certificate-key/concept-design/architecture/connector",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/02-architecture/04-connector.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interfaces",permalink:"/docs/certificate-key/concept-design/architecture/interfaces"},next:{title:"Overview of A<sup>2</sup> engine",permalink:"/docs/certificate-key/concept-design/architecture/attributes/overview"}},d={},m=[{value:"<code>Connector</code> building blocks",id:"connector-building-blocks",level:2},{value:"<code>Function Group</code>",id:"function-group",level:3},{value:"<code>Kind</code>",id:"kind",level:3},{value:"<code>Attribute</code>",id:"attribute",level:3},{value:"<code>End Point</code>",id:"end-point",level:3},{value:"<code>Callback</code>",id:"callback",level:3},{value:"<code>Connector</code> Authentication",id:"connector-authentication",level:3},{value:"Interfaces implemented by the <code>Connector</code>",id:"interfaces-implemented-by-the-connector",level:3},{value:"How it works together?",id:"how-it-works-together",level:2}],u={toc:m},s="wrapper";function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connector"},"Connector"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," is the component that is used to communicate with the specific technology. In other words, ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," can be described as the service that translates actions and messages from other technologies to the platform."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," is technology independent and can be developed with any programming language. Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," implements specific ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Groups")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Kinds")," and must be registered and approved within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Core"),"."),(0,a.kt)("p",null,"For more information about the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," interfaces, refer to ",(0,a.kt)("a",{parentName:"p",href:"interfaces"},"Interfaces"),"."),(0,a.kt)("h2",{id:"connector-building-blocks"},(0,a.kt)("inlineCode",{parentName:"h2"},"Connector")," building blocks"),(0,a.kt)("h3",{id:"function-group"},(0,a.kt)("inlineCode",{parentName:"h3"},"Function Group")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Group")," of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," describes the functions it can perform. It represents its capabilities."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Function Group")," can be combined, for example, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," can implement both ",(0,a.kt)("inlineCode",{parentName:"p"},"Credential Provider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Authority Provider")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Group"),", however, ",(0,a.kt)("inlineCode",{parentName:"p"},"Kinds")," cannot be mixed."),(0,a.kt)("p",null,"The platform supports the following ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Groups"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function Group"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Interfaces needed to implement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../../connectors/credential-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"Credential Provider"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Connector")," that provides a specific type of the ",(0,a.kt)("inlineCode",{parentName:"td"},"Credential")," to the platform. ",(0,a.kt)("inlineCode",{parentName:"td"},"Credential")," can be further used by the objects and other ",(0,a.kt)("inlineCode",{parentName:"td"},"Connector")," of the platform"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/connector-credential-provider"},"Credential Provider API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../../connectors/discovery-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"Discovery Provider"))),(0,a.kt)("td",{parentName:"tr",align:null},"Provides an interface to search for a certificates within a specific technology and sources"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/connector-discovery-provider"},"Discovery Provider API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../../connectors/authority-provider-legacy"},(0,a.kt)("inlineCode",{parentName:"a"},"Legacy Authority Provider"))),(0,a.kt)("td",{parentName:"tr",align:null},"Provides a connection with the certification authority and certificate management functions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/connector-authority-provider-legacy"},"Legacy Authority Provider API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../../connectors/authority-provider-v2"},(0,a.kt)("inlineCode",{parentName:"a"},"Authority Provider"))),(0,a.kt)("td",{parentName:"tr",align:null},"Provides a connection with the certification authority and certificate management functions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/connector-authority-provider-v2"},"Authority Provider API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../../connectors/entity-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity Provider"))),(0,a.kt)("td",{parentName:"tr",align:null},"Provides access to end entities and their locations to automate certificate and key lifecycle operations"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/connector-entity-provider"},"Entity Provider API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../../connectors/compliance-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"Compliance Provider"))),(0,a.kt)("td",{parentName:"tr",align:null},"Defines compliance rules that can be applied to certificates and validate against"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/connector-compliance-provider"},"Compliance Provider API"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../../connectors/cryptography-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"Cryptography Provider"))),(0,a.kt)("td",{parentName:"tr",align:null},"Provides cryptographic key management and operations using specific technology"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/connector-cryptography-provider"},"Cryptography Provider API"))))),(0,a.kt)("h3",{id:"kind"},(0,a.kt)("inlineCode",{parentName:"h3"},"Kind")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Kind")," represents the technology that single ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Group")," implements."),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," can implement multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Groups")," and each ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Group")," can implement multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"Kinds"),". The platform combines the power of ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Group")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Kind")," to achieve multiple implementations in a single ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," if needed. But we always recommend creating a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," for different technology for easy maintenance."),(0,a.kt)("h3",{id:"attribute"},(0,a.kt)("inlineCode",{parentName:"h3"},"Attribute")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Attribute")," is the input the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," may require for the request processing.\nWhen the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," is requested to perform the operation, it uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Attributes")," to get the list of required inputs with the format definition."),(0,a.kt)("h3",{id:"end-point"},(0,a.kt)("inlineCode",{parentName:"h3"},"End Point")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"End Point")," is the API that is implemented by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),". A ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," must include a few mandatory ",(0,a.kt)("inlineCode",{parentName:"p"},"End Points"),". These pre-defined, standard endpoints are used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Core")," to determine if the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," is compliant with the platform."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"interfaces#connector-interfaces"},(0,a.kt)("inlineCode",{parentName:"a"},"Connector")," Interfaces")," for more information about the required ",(0,a.kt)("inlineCode",{parentName:"p"},"End Points"),"."),(0,a.kt)("h3",{id:"callback"},(0,a.kt)("inlineCode",{parentName:"h3"},"Callback")),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," can implement ",(0,a.kt)("inlineCode",{parentName:"p"},"Callback")," for any ",(0,a.kt)("inlineCode",{parentName:"p"},"Attribute"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Callback")," is the ways to fetch the values that are dependent on the input from other ",(0,a.kt)("inlineCode",{parentName:"p"},"Attribute"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Callback")," is implemented as specific ",(0,a.kt)("inlineCode",{parentName:"p"},"End Point"),"."),(0,a.kt)("h3",{id:"connector-authentication"},(0,a.kt)("inlineCode",{parentName:"h3"},"Connector")," Authentication"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," can be implemented without authentication, but when needed, authentication can be included. The platform implements the following authentication types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basic (username/password)"),(0,a.kt)("li",{parentName:"ul"},"Client certificate"),(0,a.kt)("li",{parentName:"ul"},"API Key")),(0,a.kt)("h3",{id:"interfaces-implemented-by-the-connector"},"Interfaces implemented by the ",(0,a.kt)("inlineCode",{parentName:"h3"},"Connector")),(0,a.kt)("p",null,"All Connectors must implement their respective interfaces. For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"interfaces"},"Interfaces"),"."),(0,a.kt)("h2",{id:"how-it-works-together"},"How it works together?"),(0,a.kt)("p",null,"The following steps explain how the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," works:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Connector")," will be registered with the ",(0,a.kt)("inlineCode",{parentName:"li"},"Core")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Core")," validates the compliance of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Connector")," and its ",(0,a.kt)("inlineCode",{parentName:"li"},"Function Groups")," together with ",(0,a.kt)("inlineCode",{parentName:"li"},"Kinds")),(0,a.kt)("li",{parentName:"ul"},"Once the registration is complete, the ",(0,a.kt)("inlineCode",{parentName:"li"},"Connector")," can provide its functionality to the platform")),(0,a.kt)("p",null,"To perform any operations with ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Requests the ",(0,a.kt)("inlineCode",{parentName:"li"},"Core")," for the operation"),(0,a.kt)("li",{parentName:"ul"},"Provides necessary attributes related to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Connector")," implementation")))}k.isMDXComponent=!0}}]);