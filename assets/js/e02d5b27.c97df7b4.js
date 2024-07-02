"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6366],{21345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=n(74848),c=n(28453),i=n(83914),s=n(66188);const o={},d="Register Connector",l={id:"certificate-key/quick-start/certificate-discovery/register-connector",title:"Register Connector",description:"In order to start using the platform with any specific technology, we must register the Connector.",source:"@site/docs/10-certificate-key/05-quick-start/02-certificate-discovery/01-register-connector.mdx",sourceDirName:"10-certificate-key/05-quick-start/02-certificate-discovery",slug:"/certificate-key/quick-start/certificate-discovery/register-connector",permalink:"/docs/certificate-key/quick-start/certificate-discovery/register-connector",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/05-quick-start/02-certificate-discovery/01-register-connector.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/certificate-key/quick-start/overview"},next:{title:"Create Discovery",permalink:"/docs/certificate-key/quick-start/certificate-discovery/create-discovery"}},a={},h=[{value:"Register <code>Connector</code> using the API",id:"register-connector-using-the-api",level:2},{value:"Register <code>Connector</code> using the Web Interface",id:"register-connector-using-the-web-interface",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"register-connector",children:"Register Connector"}),"\n","\n",(0,r.jsxs)(t.p,{children:["In order to start using the platform with any specific technology, we must register the ",(0,r.jsx)(t.code,{children:"Connector"}),".\nWe would like to do the certificate discovery and such ",(0,r.jsx)(t.code,{children:"Connector"})," must therefore implement the ",(0,r.jsx)(t.code,{children:"Discovery Provider"})," ",(0,r.jsx)(t.code,{children:"Function Group"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"register-connector-using-the-api",children:["Register ",(0,r.jsx)(t.code,{children:"Connector"})," using the API"]}),"\n",(0,r.jsxs)(t.p,{children:["The connector can be registered using the ",(0,r.jsx)(t.code,{children:"Connector"})," API:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "Network Discovery Provider",\n    "url", "https://network-discovery-provider-service:8080",\n    "authType": "none"\n  }\' \\\n  https://[domain]:[port]/api/v1/connectors\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When there is no error, ",(0,r.jsx)(t.code,{children:"Connector"})," is successfully registered, and its ",(0,r.jsx)(t.code,{children:"uuid"})," is sent back:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "uuid": "ef092b12-e181-4734-8e34-73152612a945"\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["We can use that to get details about the ",(0,r.jsx)(t.code,{children:"Connector"})," in the future API calls:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v1/connectors/ef092b12-e181-4734-8e34-73152612a945\n  #https://[domain]:[port]/api/v1/connectors/{uuid}\n'})}),"\n",(0,r.jsxs)(t.h2,{id:"register-connector-using-the-web-interface",children:["Register ",(0,r.jsx)(t.code,{children:"Connector"})," using the Web Interface"]}),"\n",(0,r.jsxs)(t.p,{children:["Follow these steps for register new ",(0,r.jsx)(t.code,{children:"Network Discovery Provider"}),"."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Log in to the Administration Interface ",(0,r.jsx)(t.code,{children:"https://[domain]:[port]/administrator"})]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Connectors"})," in the left menu"]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Add new connector"})," (plus symbol ",(0,r.jsx)("span",{style:{color:"#1473b5"},children:(0,r.jsx)(i.g,{icon:s.QLR})}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["Fill in the columns with the attributes:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["URL: ",(0,r.jsx)(t.code,{children:"https://network-discovery-provider-service:8080"})]}),"\n",(0,r.jsxs)(t.li,{children:["Authentication Type: ",(0,r.jsx)(t.code,{children:"No Auth"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Connect"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Now you can see the details of the connected ",(0,r.jsx)(t.code,{children:"Connector"}),"."]}),"\n",(0,r.jsxs)(t.ol,{start:"6",children:["\n",(0,r.jsxs)(t.li,{children:["Fill in the ",(0,r.jsx)(t.code,{children:"Connector"})," name: ",(0,r.jsx)(t.code,{children:"Network Discovery Provider"})]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Create"})," to make the ",(0,r.jsx)(t.code,{children:"Connector"})," available to other components"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You have registered ",(0,r.jsx)(t.code,{children:"Network Discovery Provider"})," ",(0,r.jsx)(t.code,{children:"Connector"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);