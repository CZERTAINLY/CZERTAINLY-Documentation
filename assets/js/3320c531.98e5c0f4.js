"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6750],{73661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var i=n(85893),o=n(11151);const c={},r="Condition",s={id:"certificate-key/concept-design/core-components/workflow/condition",title:"Condition",description:"Conditions are the foundational criteria used to evaluate whether specific operations should be executed within a workflow. They act as filters or checks that must be met for a workflow to proceed. Conditions ensure that actions are only triggered for objects that match the defined criteria.",source:"@site/docs/10-certificate-key/02-concept-design/04-core-components/24-workflow/02-condition.md",sourceDirName:"10-certificate-key/02-concept-design/04-core-components/24-workflow",slug:"/certificate-key/concept-design/core-components/workflow/condition",permalink:"/docs/certificate-key/concept-design/core-components/workflow/condition",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/04-core-components/24-workflow/02-condition.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Approval Profile",permalink:"/docs/certificate-key/concept-design/core-components/approval-profile"},next:{title:"Rule",permalink:"/docs/certificate-key/concept-design/core-components/workflow/rule"}},d={},l=[{value:"Condition attributes",id:"condition-attributes",level:2},{value:"Condition types",id:"condition-types",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"condition",children:"Condition"}),"\n",(0,i.jsx)(t.p,{children:"Conditions are the foundational criteria used to evaluate whether specific operations should be executed within a workflow. They act as filters or checks that must be met for a workflow to proceed. Conditions ensure that actions are only triggered for objects that match the defined criteria."}),"\n",(0,i.jsx)(t.h2,{id:"condition-attributes",children:"Condition attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Condition Name"})}),(0,i.jsx)(t.td,{children:"A unique name for the condition."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Description"})}),(0,i.jsx)(t.td,{children:"A brief explanation of the condition's purpose."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Condition Type"})}),(0,i.jsx)(t.td,{children:"The type of condition."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Resource"})}),(0,i.jsx)(t.td,{children:"The object or entity to which the condition applies."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"condition-types",children:"Condition types"}),"\n",(0,i.jsx)(t.p,{children:"Conditions can be classified into various types based on their evaluation mechanism. Each type has specific attributes and behaviors that determine how the condition is processed."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"We would like to illustrate the concept of conditions with a few examples:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Matching conditions based on the certificate common name and public key algorithm:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Condition Name:"})," Certificate CN contains example.com"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description:"}),' This condition checks if the common name of a certificate contains the string "example.com"']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Condition Type:"})," Check Field"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Resource:"})," Certificate"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Condition Items:"})," ",(0,i.jsx)(t.code,{children:"Property 'Common Name' contains 'example.com'"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Matching conditions based on the certificate public key algorithm:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Condition Name:"})," Certificate Public Key Algorithm is RSA"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description:"})," This condition checks if the public key algorithm of a certificate is RSA"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Condition Type:"})," Check Field"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Resource:"})," Certificate"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Condition Items:"})," ",(0,i.jsx)(t.code,{children:"Property 'Public Key Algorithm' equals 'RSA'"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var i=n(67294);const o={},c=i.createContext(o);function r(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);