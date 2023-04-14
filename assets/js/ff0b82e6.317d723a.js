"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5968],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(b,o(o({ref:e},d),{},{components:n})):a.createElement(b,o({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78178:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={},s="Custom Attributes",u={unversionedId:"concept-design/architecture/attributes/custom-attributes",id:"concept-design/architecture/attributes/custom-attributes",title:"Custom Attributes",description:"Custom Attributes are the collection of user defined attributes that can be attached to any object in the system and are used to extend the functionality of the system and provide additional information about the object. These attributes are not part of the Connectors and are not sent to the Connector when the object is created or updated.",source:"@site/docs/02-concept-design/02-architecture/07-attributes/03-custom-attributes.md",sourceDirName:"02-concept-design/02-architecture/07-attributes",slug:"/concept-design/architecture/attributes/custom-attributes",permalink:"/docs/concept-design/architecture/attributes/custom-attributes",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview of A<sup>2</sup> engine",permalink:"/docs/concept-design/architecture/attributes/overview"},next:{title:"Global Metadata",permalink:"/docs/concept-design/architecture/attributes/global-metadata"}},d={},p=[{value:"Properties",id:"properties",level:3},{value:"Characteristics",id:"characteristics",level:3}],c={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-attributes"},"Custom Attributes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Custom Attributes")," are the collection of user defined attributes that can be attached to any object in the system and are used to extend the functionality of the system and provide additional information about the object. These attributes are not part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connectors")," and are not sent to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," when the object is created or updated."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Custom Attributes")," can be associated with resources."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Custom Attributes")," have the following properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Name")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Custom Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"YES"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"Description of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Custom Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"NO"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Content Type")),(0,i.kt)("td",{parentName:"tr",align:null},"Content type of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Custom Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"YES"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Content")),(0,i.kt)("td",{parentName:"tr",align:null},"Content of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Custom Attribute"),". It is used when the user is required to select an item from the provided value."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"NO"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Label")),(0,i.kt)("td",{parentName:"tr",align:null},"Friendly name to be displayed in the UI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"YES"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the ",(0,i.kt)("inlineCode",{parentName:"td"},"Custom Attribute")," will be required to be filled in the UI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"YES"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Visible")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the ",(0,i.kt)("inlineCode",{parentName:"td"},"Custom Attribute")," will be visible in the UI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"YES"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Read Only")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the ",(0,i.kt)("inlineCode",{parentName:"td"},"Custom Attribute")," will be read only and the value cannot be modified"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"YES"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"List")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the ",(0,i.kt)("inlineCode",{parentName:"td"},"Custom Attribute")," will be a list of values"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"YES"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Multiselect")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the ",(0,i.kt)("inlineCode",{parentName:"td"},"Custom Attribute")," will be a multiselect list of values"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"YES"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Group")),(0,i.kt)("td",{parentName:"tr",align:null},"Group of attributes to which attribute belongs to"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"NO"))))),(0,i.kt)("p",null,"In addition to the above defined properties, custom attributes contain set of resources that they can be applied to."),(0,i.kt)("h3",{id:"characteristics"},"Characteristics"),(0,i.kt)("p",null,"Characteristics of ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom Attributes")," are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Custom Attributes")," are created and maintained by the user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Custom Attributes")," are ",(0,i.kt)("inlineCode",{parentName:"li"},"Core")," defined attributes and are not sent to the connector."),(0,i.kt)("li",{parentName:"ul"},"Single ",(0,i.kt)("inlineCode",{parentName:"li"},"Custom Attribute")," can be associated with multiple object types / resources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Property")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"Custom Attribute")," can be updated and maintained by the user."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Custom Attribute")," must be in ",(0,i.kt)("span",{class:"badge badge--success"},"enabled")," state to be used.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To know more about how to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"Attributes"),", see ",(0,i.kt)("a",{parentName:"p",href:"../../../contributors/attributes/overview"},"Using Attributes"),".")))}m.isMDXComponent=!0}}]);