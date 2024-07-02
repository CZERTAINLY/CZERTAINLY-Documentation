"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2470],{67617:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var s=n(85893),r=n(11151);const i={},o="Users",c={id:"certificate-key/concept-design/architecture/access-control/users",title:"Users",description:"User represents person or third-party system that should be allowed to work with the platform (in the context of assigned roles and permissions).",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/09-users.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture/05-access-control",slug:"/certificate-key/concept-design/architecture/access-control/users",permalink:"/docs/certificate-key/concept-design/architecture/access-control/users",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/09-users.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authorization",permalink:"/docs/certificate-key/concept-design/architecture/access-control/authorization"},next:{title:"Roles and Permissions",permalink:"/docs/certificate-key/concept-design/architecture/access-control/roles-permissions"}},a={},d=[{value:"System user",id:"system-user",level:2},{value:"Anonymous user",id:"anonymous-user",level:2}];function u(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"users",children:"Users"}),"\n",(0,s.jsx)(t.p,{children:"User represents person or third-party system that should be allowed to work with the platform (in the context of assigned roles and permissions)."}),"\n",(0,s.jsx)(t.p,{children:"User can be associated with the X.509 certificate. In such case, the user can be identified based on this X.509 certificate. This is useful for system integrations where you do not need to issue access tokens and authenticate through external authentication server every time action should be executed"}),"\n",(0,s.jsx)(t.p,{children:"User can be assigned with multiple roles. In this case, permissions from all assigner roles will be merged to form authorization token for the user."}),"\n",(0,s.jsx)(t.h2,{id:"system-user",children:"System user"}),"\n",(0,s.jsx)(t.p,{children:"System user is used only for internal purposes. System users can elevate permissions and perform actions that are otherwise subject to authorization. These users are not exposed to external authentication system, nor they can be edited and changed."}),"\n",(0,s.jsx)(t.p,{children:"The following system users are defined:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Short description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"acme"})}),(0,s.jsx)(t.td,{children:"System user for ACME client operations"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"scep"})}),(0,s.jsx)(t.td,{children:"System user for SCEP client operations"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"anonymous-user",children:"Anonymous user"}),"\n",(0,s.jsxs)(t.p,{children:["When user cannot be identified in any way, it will be considered as ",(0,s.jsx)(t.em,{children:"anonymous"}),".\nAnonymous user has limited permissions and can execute only the following actions:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Register connector"}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return o}});var s=n(67294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);