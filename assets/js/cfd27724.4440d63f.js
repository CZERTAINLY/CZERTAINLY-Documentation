"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2341],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||s[u]||o;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[m]="string"==typeof t?t:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3299:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],c={},l="ACME Accounts",p={unversionedId:"certificate-key/protocols/acme/acme-account",id:"certificate-key/protocols/acme/acme-account",title:"ACME Accounts",description:"The ACME Account is defined by the RFC 8555, section 7.1.2. Using the platform, you can manage registered ACME Accounts. This allows administrators to have more control about the access to ACME API.",source:"@site/docs/10-certificate-key/07-protocols/02-acme/05-acme-account.md",sourceDirName:"10-certificate-key/07-protocols/02-acme",slug:"/certificate-key/protocols/acme/acme-account",permalink:"/docs/certificate-key/protocols/acme/acme-account",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/07-protocols/02-acme/05-acme-account.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ACME Profile",permalink:"/docs/certificate-key/protocols/acme/acme-profile"},next:{title:"Enable ACME",permalink:"/docs/certificate-key/protocols/acme/enable-acme"}},d={},m=[{value:"Operations on <code>ACME Account</code>",id:"operations-on-acme-account",level:3}],s={toc:m},u="wrapper";function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)(u,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"acme-accounts"},"ACME Accounts"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Account")," is defined by the ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.1.2"},"RFC 8555, section 7.1.2"),". Using the platform, you can manage registered ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Accounts"),". This allows administrators to have more control about the access to ACME API."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Account")," holds the information about the registered ACME client. ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Account")," information cannot be updated by the administrator. Administrator can manage only the state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Account")," by either enabling or disabling them. Administrator can also revoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Account")," so that new requests are rejected.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ACME Account")," contains the following information:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"UUID")),(0,o.kt)("td",{parentName:"tr",align:null},"The unique identifier of the ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account")," in the platform")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Account Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The unique identifier of the ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account")," according RFC generated by the platform")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"RA Profile")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the ",(0,o.kt)("inlineCode",{parentName:"td"},"RA Profile")," associated with the ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ACME Profile")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Profile")," associated with the ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Internal State")),(0,o.kt)("td",{parentName:"tr",align:null},"Internal state of the ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account"),", ",(0,o.kt)("strong",{parentName:"td"},"enabled")," or ",(0,o.kt)("strong",{parentName:"td"},"disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Account Status")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account")," status as defined in RFC, ",(0,o.kt)("strong",{parentName:"td"},"valid"),", ",(0,o.kt)("strong",{parentName:"td"},"deactivated"),", or ",(0,o.kt)("strong",{parentName:"td"},"revoked"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Terms of Service Agreed")),(0,o.kt)("td",{parentName:"tr",align:null},"Specifies whether the Terms of Service were agreed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Contacts")),(0,o.kt)("td",{parentName:"tr",align:null},"The list of contacts associated with the ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Orders Summary")),(0,o.kt)("td",{parentName:"tr",align:null},"The summary of the numbers of Orders associated with the ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account"))))),(0,o.kt)("p",null,"New registered ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Account")," is by default ",(0,o.kt)("strong",{parentName:"p"},"enabled")," and ",(0,o.kt)("strong",{parentName:"p"},"valid"),"."),(0,o.kt)("h3",{id:"operations-on-acme-account"},"Operations on ",(0,o.kt)("inlineCode",{parentName:"h3"},"ACME Account")),(0,o.kt)("p",null,"The following operations can be performed on ",(0,o.kt)("inlineCode",{parentName:"p"},"ACME Account"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Operation"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Disable")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account")," is disabled and cannot process orders. However, it is not revoked and still can be enabled to continue in its operations")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Enable")),(0,o.kt)("td",{parentName:"tr",align:null},"Enable ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account")," to continue processing Orders")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Revoke")),(0,o.kt)("td",{parentName:"tr",align:null},"Revoke ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account")," by the platform. Revoked ",(0,o.kt)("inlineCode",{parentName:"td"},"ACME Account")," is the final state and cannot be activated again")))))}k.isMDXComponent=!0}}]);