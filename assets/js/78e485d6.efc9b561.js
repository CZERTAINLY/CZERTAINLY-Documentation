"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4390],{9425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var c=n(74848),i=n(28453);const s={},o="Location",r={id:"certificate-key/concept-design/core-components/location",title:"Location",description:"Location is a specific storage for certificates and cryptographic keys that can be accessed through the Entity.",source:"@site/docs/10-certificate-key/02-concept-design/04-core-components/10-location.md",sourceDirName:"10-certificate-key/02-concept-design/04-core-components",slug:"/certificate-key/concept-design/core-components/location",permalink:"/docs/certificate-key/concept-design/core-components/location",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/04-core-components/10-location.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity",permalink:"/docs/certificate-key/concept-design/core-components/entity"},next:{title:"Certificate",permalink:"/docs/certificate-key/concept-design/core-components/certificate"}},d={},a=[{value:"Characteristics",id:"characteristics",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"location",children:"Location"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"Location"})," is a specific storage for certificates and cryptographic keys that can be accessed through the ",(0,c.jsx)(t.a,{href:"entity",children:(0,c.jsx)(t.code,{children:"Entity"})}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["As an example, ",(0,c.jsx)(t.code,{children:"Location"})," can be:"]}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"Software Key Store"}),"\n",(0,c.jsx)(t.li,{children:"SSL Profile"}),"\n",(0,c.jsx)(t.li,{children:"File System PEM"}),"\n",(0,c.jsx)(t.li,{children:"Active Directory account"}),"\n"]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"Location"})," cannot exists without ",(0,c.jsx)(t.a,{href:"entity",children:(0,c.jsx)(t.code,{children:"Entity"})})," and each ",(0,c.jsx)(t.code,{children:"Entity"})," can have multiple ",(0,c.jsx)(t.code,{children:"Locations"})," (if supported by the implementation of ",(0,c.jsx)(t.code,{children:"Entity Provider"}),")."]}),"\n",(0,c.jsx)(t.h2,{id:"characteristics",children:"Characteristics"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"Location"})," capabilities are defined by:"]}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Item"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"Entity"})}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:"Location"})," can be accessed only through ",(0,c.jsx)(t.code,{children:"Entity"})," that holds it"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Multiple entries support"}),(0,c.jsxs)(t.td,{children:["If the ",(0,c.jsx)(t.code,{children:"Location"})," can store only one or multiple entries, typically certificates"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Key management support"}),(0,c.jsxs)(t.td,{children:["If the ",(0,c.jsx)(t.code,{children:"Location"})," is capable to store and manage cryptographic keys"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Status"}),(0,c.jsxs)(t.td,{children:["Status of the ",(0,c.jsx)(t.code,{children:"Location"}),", which can be ",(0,c.jsx)("span",{class:"badge badge--success",children:"enabled"})," or ",(0,c.jsx)("span",{class:"badge badge--danger",children:"disabled"})]})]})]})]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"Location"})," support the following operations:"]}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"Sync content with the inventory"}),"\n",(0,c.jsxs)(t.li,{children:["Push ",(0,c.jsx)(t.code,{children:"Certificate"})," from inventory"]}),"\n",(0,c.jsxs)(t.li,{children:["Remove ",(0,c.jsx)(t.code,{children:"Certificate"})]}),"\n"]}),"\n",(0,c.jsxs)(t.p,{children:["When the ",(0,c.jsx)(t.code,{children:"Location"})," supports key management, additional operations can be performed:"]}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["Issue new ",(0,c.jsx)(t.code,{children:"Certificate"})]}),"\n",(0,c.jsxs)(t.li,{children:["Renew ",(0,c.jsx)(t.code,{children:"Certificate"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var c=n(96540);const i={},s=c.createContext(i);function o(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);