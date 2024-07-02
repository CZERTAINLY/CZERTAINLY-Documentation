"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1533],{52514:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return a}});var i=n(85893),r=n(11151),s=n(69268);const c={},o="Overview",d={id:"contributors/attributes/overview",title:"Overview",description:"Although the CZERTAINLY platform is technology independent, each technology have its own specifics that the users should be able to use properly.",source:"@site/docs/60-contributors/10-attributes/01-overview.md",sourceDirName:"60-contributors/10-attributes",slug:"/contributors/attributes/overview",permalink:"/docs/contributors/attributes/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/60-contributors/10-attributes/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing to CZERTAINLY",permalink:"/docs/contributors/overview"},next:{title:"Properties",permalink:"/docs/contributors/attributes/properties"}},l={},a=[{value:"It is all about the <code>Attributes</code>",id:"it-is-all-about-the-attributes",level:2},{value:"<code>BaseAttribute</code>",id:"baseattribute",level:2},{value:"<code>Attribute</code> building blocks:",id:"attribute-building-blocks",level:2},{value:"Building blocks description and examples",id:"building-blocks-description-and-examples",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",object:"object",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Although the CZERTAINLY platform is technology independent, each technology have its own specifics that the users should be able to use properly."}),"\n",(0,i.jsxs)(t.p,{children:["CZERTAINLY uses ",(0,i.jsx)(t.code,{children:"Attribute"})," to control such specific behaviour of different technologies, like certification authorities, credential providers, discovery of certificates, etc. So called ",(0,i.jsx)(t.code,{children:"Attributes"})," are used in almost every ",(0,i.jsx)(t.code,{children:"Connector"})," and developer must understand them in order to implement custom behaviour or extend the functionality of the platform."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["For more information about the concept behind the ",(0,i.jsx)(t.code,{children:"Connector"}),", ",(0,i.jsx)(t.code,{children:"Attributes"}),", ",(0,i.jsx)(t.code,{children:"Callbacks"}),", etc, see the ",(0,i.jsx)(t.a,{href:"../../certificate-key/concept-design/overview",children:"CZERTAINLY platform overview"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["Now let's take a look on what exactly is an ",(0,i.jsx)(t.code,{children:"Attribute"})," and how it can be used."]}),"\n",(0,i.jsxs)(t.h2,{id:"it-is-all-about-the-attributes",children:["It is all about the ",(0,i.jsx)(t.code,{children:"Attributes"})]}),"\n",(0,i.jsxs)(t.p,{children:["The concept works on the principle of exchanging and validation of ",(0,i.jsx)(t.code,{children:"Attributes"})," between the ",(0,i.jsx)(t.code,{children:"Client"}),", ",(0,i.jsx)(t.code,{children:"Connector"})," and CZERTAINLY platform.\nImplementation of some specific ",(0,i.jsx)(t.code,{children:"Connector"})," must be able to define and properly handle its specific ",(0,i.jsx)(t.code,{children:"Attributes"}),". The definition is then exchanged with the ",(0,i.jsx)(t.code,{children:"Client"})," and the platform validates it consistency and mediate the flow and logic between them:"]}),"\n",(0,i.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/bPB1JiCm44JlVCNy03zGLLMhYWCIue1wWTlMtYGhd3NOwoB-7gM4f840hM-MFBCp-mm0wsoKhBJX2ltP1c4rNAzMs3xTFEmsj_TtZmi4oGOwa0JQ1yR6BCc-6ETHEBp-8NODksUGUXmeY2TZ97ujdErNTLHbPp4jKBETZ4CL4wpXFkUe_n9WkUmCTkmQZI7MxvyEDjpXoMX6zptqoKpFbQYOH3sdxT3nCeTZdt_7pjF9anrT5BAZqdAgps8wKkdvuKsiEV9mKQsB5gjPep_mb3nPLHVe9KN7EKz-oPhLbpPy0000"}),"\n",(0,i.jsxs)(t.p,{children:["Because the communication is controlled by the platform, it ensures the consistency and security of the ",(0,i.jsx)(t.code,{children:"Attributes"})," that are exchanged between the ",(0,i.jsx)(t.code,{children:"Client"})," and the ",(0,i.jsx)(t.code,{children:"Connector"}),". and eventually applied in the target technology."]}),"\n",(0,i.jsx)(t.h2,{id:"baseattribute",children:(0,i.jsx)(t.code,{children:"BaseAttribute"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"BaseAttribute"})," is the base class for all ",(0,i.jsx)(t.code,{children:"Attributes"}),". It contains the basic properties that are common for all ",(0,i.jsx)(t.code,{children:"Attributes"})," and uses the generic type ",(0,i.jsx)(t.code,{children:"T"})," to define the 'content`. Tab                                                                                                  |"]}),"\n",(0,i.jsxs)(t.p,{children:["You can find specification of the ",(0,i.jsx)(t.code,{children:"BaseAttribute"})," in the ",(0,i.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces",children:"CZERTAINLY Interfaces repository"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Table below describes the properties of the ",(0,i.jsx)(t.code,{children:"BaseAttribute"}),":"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Short description"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"uuid"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{children:["UUID of the defined ",(0,i.jsx)(t.code,{children:"Attribute"}),". The combination of the ",(0,i.jsx)(t.code,{children:"Connector"})," UUID and the ",(0,i.jsx)(t.code,{children:"Attribute"})," UUID must be unique"]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{class:"badge badge--success",children:"Yes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"name"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{children:["Name of the ",(0,i.jsx)(t.code,{children:"Attribute"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{class:"badge badge--success",children:"Yes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"description"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{children:["Description of the ",(0,i.jsx)(t.code,{children:"Attribute"})," for better understanding of the ",(0,i.jsx)(t.code,{children:"Attribute"})," purpose. This should contain descriptive explanation of the ",(0,i.jsx)(t.code,{children:"Attribtue"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"type"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"./attributes#attribute-types",children:(0,i.jsx)(t.code,{children:"AttributeType"})})}),(0,i.jsxs)(t.td,{children:["Type of the ",(0,i.jsx)(t.code,{children:"Attribute"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{class:"badge badge--success",children:"Yes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"content"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"./content",children:(0,i.jsx)(t.code,{children:"AttributeContent"})})}),(0,i.jsxs)(t.td,{children:["Content of the ",(0,i.jsx)(t.code,{children:"Attribute"})," based on the ",(0,i.jsx)(t.a,{href:"./content#supported-content-types",children:(0,i.jsx)(t.code,{children:"AttributeContentType"})})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{class:"badge badge--danger",children:"No"})})]})]})]}),"\n",(0,i.jsxs)(t.h2,{id:"attribute-building-blocks",children:[(0,i.jsx)(t.code,{children:"Attribute"})," building blocks:"]}),"\n",(0,i.jsxs)(t.p,{children:["Each implementation of ",(0,i.jsx)(t.code,{children:"Attribute"})," type consists of the following building blocks:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"AttributeProperties"})," - properties defines the behaviour of the ",(0,i.jsx)(t.code,{children:"Attribute"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"AttributeContent"})," - specific content of the ",(0,i.jsx)(t.code,{children:"Attribute"})," that is defined based on the ",(0,i.jsx)(t.code,{children:"content"})," type"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"AttributeConstraint"})," - constraint that defines the validation of the ",(0,i.jsx)(t.code,{children:"Attribute"})," content"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"AttributeCallback"})," - callback that is used to get the ",(0,i.jsx)(t.code,{children:"Attribute"})," content when it depends on other factors"]}),"\n"]}),"\n",(0,i.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/AqXCpavCJrLmB2afoamgBKbLgEPIK51Go4_AIaqkGGW75EKNf1QLPAOMOvLspiyhISqhmILNN5AKc8bBEZ4d9oanEPkh5W00"}),"\n",(0,i.jsxs)(t.p,{children:["The building blocks for each particular ",(0,i.jsx)(t.code,{children:"Attribute"})," type are described in ",(0,i.jsx)(t.a,{href:"./attributes",children:"Attributes"})," section."]}),"\n",(0,i.jsx)(t.h2,{id:"building-blocks-description-and-examples",children:"Building blocks description and examples"}),"\n",(0,i.jsxs)(t.p,{children:["The following section describes in detail each building block of the ",(0,i.jsx)(t.code,{children:"Attribute"})," and provides examples of the ",(0,i.jsx)(t.code,{children:"Attributes"}),"."]}),"\n",(0,i.jsx)(s.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},61564:function(e,t,n){n.d(t,{Z:function(){return j}});n(67294);var i=n(90512),r=n(33692),s=n(53438),c=n(88824),o=n(13919),d=n(95999),l=n(92503),a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"},h=n(85893);function u(e){let{href:t,children:n}=e;return(0,h.jsx)(r.Z,{href:t,className:(0,i.Z)("card padding--lg",a.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:r,description:s}=e;return(0,h.jsxs)(u,{href:t,children:[(0,h.jsxs)(l.Z,{as:"h2",className:(0,i.Z)("text--truncate",a.cardTitle),title:r,children:[n," ",r]}),s&&(0,h.jsx)("p",{className:(0,i.Z)("text--truncate",a.cardDescription),title:s,children:s})]})}function x(e){let{item:t}=e;const n=(0,s.LM)(t),i=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,d.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function b(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.xz)(t.docId??void 0);return(0,h.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function j(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(b,{item:t});case"category":return(0,h.jsx)(x,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},69268:function(e,t,n){n.d(t,{Z:function(){return d}});n(67294);var i=n(90512),r=n(53438),s=n(61564),c=n(85893);function o(e){let{className:t}=e;const n=(0,r.jA)();return(0,c.jsx)(d,{items:n.items,className:t})}function d(e){const{items:t,className:n}=e;if(!t)return(0,c.jsx)(o,{...e});const d=(0,r.MN)(t);return(0,c.jsx)("section",{className:(0,i.Z)("row",n),children:d.map(((e,t)=>(0,c.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,c.jsx)(s.Z,{item:e})},t)))})}},88824:function(e,t,n){n.d(t,{c:function(){return l}});var i=n(67294),r=n(52263);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const r=n.select(t),s=n.pluralForms.indexOf(r);return i[Math.min(s,i.length-1)]}(n,t,e)}}},11151:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return c}});var i=n(67294);const r={},s=i.createContext(r);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);