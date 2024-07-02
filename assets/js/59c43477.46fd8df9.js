"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5349],{29100:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u}});var r=n(85893),o=n(11151),c=n(69268);const i={},s="Overview",a={id:"certificate-key/connectors/overview",title:"Overview",description:"Connector plays an important role in the platform, providing the functionality for a specific technology, even when proprietary. For more information, see Connector.",source:"@site/docs/10-certificate-key/12-connectors/01-overview.md",sourceDirName:"10-certificate-key/12-connectors",slug:"/certificate-key/connectors/overview",permalink:"/docs/certificate-key/connectors/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/12-connectors/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/docs/certificate-key/settings/notifications"},next:{title:"Overview",permalink:"/docs/certificate-key/connectors/common-interfaces/overview"}},l={},u=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Connector"})," plays an important role in the platform, providing the functionality for a specific technology, even when proprietary. For more information, see ",(0,r.jsx)(t.a,{href:"../concept-design/architecture/connector",children:(0,r.jsx)(t.code,{children:"Connector"})}),".\nYou can also find more information in the ",(0,r.jsx)(t.a,{href:"../concept-design/architecture/connector",children:"Architecture"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The following sections provides detail information about the interfaces and processes associated with the ",(0,r.jsx)(t.code,{children:"Connector"}),":"]}),"\n",(0,r.jsx)(c.Z,{})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},61564:function(e,t,n){n.d(t,{Z:function(){return v}});n(67294);var r=n(90512),o=n(33692),c=n(53438),i=n(88824),s=n(13919),a=n(95999),l=n(92503),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"},d=n(85893);function f(e){let{href:t,children:n}=e;return(0,d.jsx)(o.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:o,description:c}=e;return(0,d.jsxs)(f,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),c&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:c,children:c})]})}function h(e){let{item:t}=e;const n=(0,c.LM)(t),r=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},69268:function(e,t,n){n.d(t,{Z:function(){return a}});n(67294);var r=n(90512),o=n(53438),c=n(61564),i=n(85893);function s(e){let{className:t}=e;const n=(0,o.jA)();return(0,i.jsx)(a,{items:n.items,className:t})}function a(e){const{items:t,className:n}=e;if(!t)return(0,i.jsx)(s,{...e});const a=(0,o.MN)(t);return(0,i.jsx)("section",{className:(0,r.Z)("row",n),children:a.map(((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(c.Z,{item:e})},t)))})}},88824:function(e,t,n){n.d(t,{c:function(){return l}});var r=n(67294),o=n(52263);const c=["zero","one","two","few","many","other"];function i(e){return c.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),c=n.pluralForms.indexOf(o);return r[Math.min(c,r.length-1)]}(n,t,e)}}},11151:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var r=n(67294);const o={},c=r.createContext(o);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);