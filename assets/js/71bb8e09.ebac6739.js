"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3363],{2152:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(74848),o=n(28453),i=n(72550);const c={},s="Contributing to CZERTAINLY",a={id:"contributors/overview",title:"Contributing to CZERTAINLY",description:"Join CZERTAINLY Community! CZERTAINLY, community matters. Join us in building innovative trust lifecycle management tools that can be freely used by anyone. Any contribution counts.",source:"@site/docs/60-contributors/01-overview.mdx",sourceDirName:"60-contributors",slug:"/contributors/overview",permalink:"/docs/contributors/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/60-contributors/01-overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Feedback and Support",permalink:"/docs/feedback-support"},next:{title:"Overview",permalink:"/docs/contributors/attributes/overview"}},l={},u=[];function d(t){const e={a:"a",admonition:"admonition",h1:"h1",p:"p",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"contributing-to-czertainly",children:"Contributing to CZERTAINLY"}),"\n",(0,r.jsx)(e.admonition,{title:"CZERTAINLY community",type:"success",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://www.czertainly.com/community/",children:"Join CZERTAINLY Community! CZERTAINLY"}),", community matters. Join us in building innovative trust lifecycle management tools that can be freely used by anyone. Any contribution counts."]})}),"\n",(0,r.jsx)(e.p,{children:"We encourage everyone to make contributions to CZERTAINLY platform. You can be a part of the community and improving the security of the internet. Your contribution is important to enhance the platform and make it more affordable and available for all of us using digital certificate."}),"\n",(0,r.jsx)(i.A,{})]})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},65965:(t,e,n)=>{n.d(e,{A:()=>b});n(96540);var r=n(34164),o=n(28774),i=n(84142),c=n(53465),s=n(16654),a=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(t){let{href:e,children:n}=t;return(0,d.jsx)(o.A,{href:e,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function f(t){let{href:e,icon:n,title:o,description:i}=t;return(0,d.jsxs)(m,{href:e,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function p(t){let{item:e}=t;const n=(0,i.Nr)(e),r=function(){const{selectMessage:t}=(0,c.W)();return e=>t(e,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??r(e.items.length)}):null}function h(t){let{item:e}=t;const n=(0,s.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(e.docId??void 0);return(0,d.jsx)(f,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function b(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(h,{item:e});case"category":return(0,d.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}},72550:(t,e,n)=>{n.d(e,{A:()=>a});n(96540);var r=n(34164),o=n(84142),i=n(65965),c=n(74848);function s(t){let{className:e}=t;const n=(0,o.$S)();return(0,c.jsx)(a,{items:n.items,className:e})}function a(t){const{items:e,className:n}=t;if(!e)return(0,c.jsx)(s,{...t});const a=(0,o.d1)(e);return(0,c.jsx)("section",{className:(0,r.A)("row",n),children:a.map(((t,e)=>(0,c.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,c.jsx)(i.A,{item:t})},e)))})}},53465:(t,e,n)=>{n.d(e,{W:()=>l});var r=n(96540),o=n(44586);const i=["zero","one","two","few","many","other"];function c(t){return i.filter((e=>t.includes(e)))}const s={locale:"en",pluralForms:c(["one","other"]),select:t=>1===t?"one":"other"};function a(){const{i18n:{currentLocale:t}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:c(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),s}}),[t])}function l(){const t=a();return{selectMessage:(e,n)=>function(t,e,n){const r=t.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${t}`);const o=n.select(e),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,e,t)}}},28453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>s});var r=n(96540);const o={},i=r.createContext(o);function c(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);