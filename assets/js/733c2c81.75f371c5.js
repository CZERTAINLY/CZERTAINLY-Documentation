"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5059],{27232:function(e,t,i){i.r(t),i.d(t,{assets:function(){return r},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return d}});var n=i(85893),o=i(11151);const s={},c="Authorization",a={id:"certificate-key/concept-design/architecture/access-control/authorization",title:"Authorization",description:"Once user is properly authenticated and identified, internal authorization token is issued based on the roles and associated permissions that are assigned to the user.",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/07-authorization.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture/05-access-control",slug:"/certificate-key/concept-design/architecture/access-control/authorization",permalink:"/docs/certificate-key/concept-design/architecture/access-control/authorization",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/07-authorization.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Identification",permalink:"/docs/certificate-key/concept-design/architecture/access-control/identification"},next:{title:"Users",permalink:"/docs/certificate-key/concept-design/architecture/access-control/users"}},r={},d=[{value:"Object access level based on its associations",id:"object-access-level-based-on-its-associations",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",object:"object",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"authorization",children:"Authorization"}),"\n",(0,n.jsx)(t.p,{children:"Once user is properly authenticated and identified, internal authorization token is issued based on the roles and associated permissions that are assigned to the user.\nThe authorization token is used by internal services to evaluate authorization of identified user."}),"\n",(0,n.jsxs)(t.p,{children:["The authorization is evaluated using ",(0,n.jsx)(t.a,{href:"https://www.openpolicyagent.org/",children:"Open Policy Agent"})," policies (OPA)."]}),"\n",(0,n.jsx)(t.p,{children:"The following diagram shows the interaction with the OPA:"}),"\n",(0,n.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/RSx1JiCm30RWUvxYr-xJAjYf1xG84Eff5Jo1QGsrbYObSLQLfqU12KtLZfQ_t_uFIIbg7fsXhC7dyPsZcIYgT3AHLsnis-25b6TQDg04spOha7N06yUpTFmdiWx6bDps0OyXSerN_igS5BFe0EdPgtn8Hoh1GyE9lIck-1AkqTmYlu_MP45E75Sxcv9yUiJWE85yZudZA2b9yEb2_wkLCKJvlbNcsDeQpsTocPH1rz8SMtjznRamOuSdziibNjgqJOsxgi8E--hUc0FxFe_k1m00"}),"\n",(0,n.jsxs)(t.p,{children:["For more information about the authorization policies, refer to ",(0,n.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Auth-OPA-Policies",children:"CZERTAINLY Auth OPA Policies"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"object-access-level-based-on-its-associations",children:"Object access level based on its associations"}),"\n",(0,n.jsx)(t.p,{children:"In addition to evaluation of object access based on individual assigned permissions for resource actions, user can be granted access to some object by its owner and group associations."}),"\n",(0,n.jsx)(t.p,{children:"In case of owner association, if authorized user is the owner of accessed object, it has granted access for all actions on that object."}),"\n",(0,n.jsxs)(t.p,{children:["In case of group associations, user permissions for action ",(0,n.jsx)(t.code,{children:"Members"})," for resource ",(0,n.jsx)(t.code,{children:"Group"})," is evaluated and checked if it is allowed for any group associated to accessed object. If it is true, user has granted access for ",(0,n.jsx)(t.code,{children:"List"})," and ",(0,n.jsx)(t.code,{children:"Detail"})," action on that object."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return c}});var n=i(67294);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);