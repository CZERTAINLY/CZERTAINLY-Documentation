"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3583],{96510:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(85893),r=i(11151);const s={},c="Overview",o={id:"certificate-key/concept-design/architecture/access-control/overview",title:"Overview",description:"Access control is a fundamental for every platform.",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/01-overview.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture/05-access-control",slug:"/certificate-key/concept-design/architecture/access-control/overview",permalink:"/docs/certificate-key/concept-design/architecture/access-control/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Global Metadata",permalink:"/docs/certificate-key/concept-design/architecture/attributes/global-metadata"},next:{title:"Externalized Authentication",permalink:"/docs/certificate-key/concept-design/architecture/access-control/externalized-authentication"}},a={},d=[];function l(e){const t={a:"a",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Access control is a fundamental for every platform."})}),"\n",(0,n.jsx)(t.p,{children:"CZERTAINLY decouples the identification, authentication, and authorization process and therefore provides flexibility in terms of configuration access control rules."}),"\n",(0,n.jsx)(t.p,{children:"The following steps are generally applied when used should be identified, authenticated, and authorized:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"User is authenticated using external authentication system. The identification of authenticated user is forwarded to the platform."}),"\n",(0,n.jsx)(t.li,{children:"CZERTAINLY Auth Service validates the identification of the user and search for the user in the database."}),"\n",(0,n.jsx)(t.li,{children:"When user is found, internal authorization token is produced containing all permissions that are assigned to the user according the role definition."}),"\n",(0,n.jsxs)(t.li,{children:["The authorization token is used by internal services to evaluate authorization of the user to actions and related objects using ",(0,n.jsx)(t.a,{href:"https://www.openpolicyagent.org/",children:"OPA"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The access control consists of the following parts:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Access Control Part"}),(0,n.jsx)(t.th,{children:"Short description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"externalized-authentication",children:"Externalized Authentication"})}),(0,n.jsx)(t.td,{children:"External authentication system support"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"identification",children:"Identification"})}),(0,n.jsx)(t.td,{children:"Supported identification options"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"authorization",children:"Authorization"})}),(0,n.jsx)(t.td,{children:"Authorization policies and evaluation process"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"users",children:"Users"})}),(0,n.jsx)(t.td,{children:"User management"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"roles-permissions",children:"Roles and Permissions"})}),(0,n.jsx)(t.td,{children:"Management of roles and permissions"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{a:()=>c});var n=i(67294);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);