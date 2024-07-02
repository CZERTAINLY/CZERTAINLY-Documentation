"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4481],{33509:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(85893),o=t(11151),i=t(69268);const s={},a="Upgrade Information Overview",c={id:"signing/upgrade-information/overview",title:"Upgrade Information Overview",description:"Upgrade information represents important notes that should be followed and applied when upgrading to new releases of eIDAS SignServer.",source:"@site/docs/30-signing/99-upgrade-information/01-overview.mdx",sourceDirName:"30-signing/99-upgrade-information",slug:"/signing/upgrade-information/overview",permalink:"/docs/signing/upgrade-information/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/99-upgrade-information/01-overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sample Properties",permalink:"/docs/signing/timed-services/generate-assigned-keys/sample-properties"},next:{title:"From 1.14.0 To 1.15.1",permalink:"/docs/signing/upgrade-information/upgrade-1.14.0-1.15.1"}},l={},u=[];function d(e){const n={admonition:"admonition",h1:"h1",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"upgrade-information-overview",children:"Upgrade Information Overview"}),"\n",(0,r.jsx)(n.p,{children:"Upgrade information represents important notes that should be followed and applied when upgrading to new releases of eIDAS SignServer."}),"\n",(0,r.jsx)(n.p,{children:"Breaking changes that are introduced can make your environment and setup to stop working properly."}),"\n",(0,r.jsx)(n.p,{children:"Upgrade information is organized in the sections that describe the process of upgrading / migration. It is recommended to do incremental upgrades of the solution instead of upgrading to the latest version without applying step-by-step approach."}),"\n",(0,r.jsx)(n.p,{children:"Some changed may require incremental upgrade."}),"\n",(0,r.jsx)(n.admonition,{title:"Step-by-step upgrading",type:"warning",children:(0,r.jsx)(n.p,{children:"Try to avoid upgrading of the solution from more than one previous version to the latest. For example, try to avoid upgrading from 1.0.10 to 1.0.13. Instead, apply step-by-step upgrading process from 1.0.10 to 1.0.11, from 1.0.11 to 1.0.12, and finally from 1.0.12 to 1.0.13. You can avoid issues that are connected with breaking changes implemented and released over the time."})}),"\n",(0,r.jsx)(i.Z,{})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},61564:function(e,n,t){t.d(n,{Z:function(){return h}});t(67294);var r=t(90512),o=t(33692),i=t(53438),s=t(88824),a=t(13919),c=t(95999),l=t(92503),u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"},d=t(85893);function p(e){let{href:n,children:t}=e;return(0,d.jsx)(o.Z,{href:n,className:(0,r.Z)("card padding--lg",u.cardContainer),children:t})}function m(e){let{href:n,icon:t,title:o,description:i}=e;return(0,d.jsxs)(p,{href:n,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:o,children:[t," ",o]}),i&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function f(e){let{item:n}=e;const t=(0,i.LM)(n),r=function(){const{selectMessage:e}=(0,s.c)();return n=>e(n,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,d.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function g(e){let{item:n}=e;const t=(0,a.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(n.docId??void 0);return(0,d.jsx)(m,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function h(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(g,{item:n});case"category":return(0,d.jsx)(f,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}},69268:function(e,n,t){t.d(n,{Z:function(){return c}});t(67294);var r=t(90512),o=t(53438),i=t(61564),s=t(85893);function a(e){let{className:n}=e;const t=(0,o.jA)();return(0,s.jsx)(c,{items:t.items,className:n})}function c(e){const{items:n,className:t}=e;if(!n)return(0,s.jsx)(a,{...e});const c=(0,o.MN)(n);return(0,s.jsx)("section",{className:(0,r.Z)("row",t),children:c.map(((e,n)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(i.Z,{item:e})},n)))})}},88824:function(e,n,t){t.d(n,{c:function(){return l}});var r=t(67294),o=t(52263);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((n=>e.includes(n)))}const a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:s(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=t.select(n),i=t.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(t,n,e)}}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);