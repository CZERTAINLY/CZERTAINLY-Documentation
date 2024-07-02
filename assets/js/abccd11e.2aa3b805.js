"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4966],{36348:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var i=t(85893),r=t(11151),a=t(99603),c=t(59417);const s={},l="Create Authority",o={id:"certificate-key/quick-start/certificate-management/create-authority",title:"Create Authority",description:"In order to establish a connection with MS ADCS, we need to setup the Authority instance.",source:"@site/docs/10-certificate-key/05-quick-start/03-certificate-management/05-create-authority.mdx",sourceDirName:"10-certificate-key/05-quick-start/03-certificate-management",slug:"/certificate-key/quick-start/certificate-management/create-authority",permalink:"/docs/certificate-key/quick-start/certificate-management/create-authority",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/05-quick-start/03-certificate-management/05-create-authority.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Credential",permalink:"/docs/certificate-key/quick-start/certificate-management/create-credential"},next:{title:"Create RA Profile",permalink:"/docs/certificate-key/quick-start/certificate-management/create-ra-profile"}},d={},u=[{value:"Create <code>Authority</code> instance using the API",id:"create-authority-instance-using-the-api",level:2},{value:"Create <code>Authority</code> instance using the Web Interface",id:"create-authority-instance-using-the-web-interface",level:2}];function h(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-authority",children:"Create Authority"}),"\n","\n",(0,i.jsxs)(n.p,{children:["In order to establish a connection with MS ADCS, we need to setup the ",(0,i.jsx)(n.code,{children:"Authority"})," instance."]}),"\n",(0,i.jsxs)(n.h2,{id:"create-authority-instance-using-the-api",children:["Create ",(0,i.jsx)(n.code,{children:"Authority"})," instance using the API"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Authority"})," can be created using the ",(0,i.jsx)(n.code,{children:"Authority"})," API. However, before creating it, we need know the required ",(0,i.jsx)(n.code,{children:"Attributes"})," for the ",(0,i.jsx)(n.code,{children:"Authority"}),".\nWe can get that using the following request:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v1/connectors/04cb011f-4497-4e45-b4b9-4975db9df0a0/authorityProvider/ADCS/attributes\n  #https://[domain]:[port]/api/v1/connectors/{uuid}/{functionGroup}/{kind}/attributes\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This returns the list of applicable attributes for the ",(0,i.jsx)(n.code,{children:"Authority"}),", such as:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "uuid": "93ca0ba2-3863-4ffa-a469-fd14ab3992bf",\n        "name": "address",\n        "label": "MS-ADCS Address",\n        "type": "STRING",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Address of ADCS server.",\n        "validationRegex": "^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])|(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\\\-]*[a-zA-Z0-9])\\\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\\\-]*[A-Za-z0-9]))$",\n        "multiSelect": false\n    },\n    {\n        "uuid": "d9f79ba6-47e5-437b-a7bc-82dbafa9cf01",\n        "name": "https",\n        "content": {\n            "value": false\n        },\n        "label": "HTTPS Enabled",\n        "type": "BOOLEAN",\n        "required": false,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Use https for connection with ADCS server.",\n        "multiSelect": false\n    },\n    {\n        "uuid": "9587a320-a487-4084-9645-0b6c24636fa6",\n        "name": "port",\n        "content": {\n            "value": 5985\n        },\n        "label": "Port",\n        "type": "INTEGER",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Define WinRM port, default port for http is 5985 and for https 5986.",\n        "multiSelect": false\n    },\n    {\n        "uuid": "d9f79ba6-47e5-437b-a7bc-82dbafa9cf03",\n        "name": "credential",\n        "label": "Credential",\n        "type": "CREDENTIAL",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": true,\n        "description": "Credential for the communication",\n        "attributeCallback": {\n            "callbackContext": "core/getCredentials",\n            "callbackMethod": "GET",\n            "mappings": [\n                {\n                    "to": "credentialKind",\n                    "targets": [\n                        "pathVariable"\n                    ],\n                    "value": "Basic"\n                }\n            ]\n        },\n        "multiSelect": false\n    }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Knowing the attributes, we can create the ",(0,i.jsx)(n.code,{children:"Authority"})," using the following request:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "MS ADCS Authority",\n    "connectorUuid": "04cb011f-4497-4e45-b4b9-4975db9df0a0",\n    "kind": "ADCS",\n    "attributes": [\n      {\n        "name": "https",\n        "content": {\n          "value": false\n        }\n      },\n      {\n        "name": "port",\n        "content": {\n          "value": 5985\n        }\n      },\n      {\n        "name": "address",\n        "content": {\n          "value": "lab02.3key.company"\n        }\n      },\n      {\n        "name": "credential",\n        "content": {\n          "value": "MS ADCS Basic Credential",\n          "data": {\n            "uuid": "4c59aecd-1edc-47ea-b3cb-96a2468315bc",\n            "name": "MS ADCS Basic Credential"\n          }\n        }\n      }\n    ]\n  }\' \\\n  https://[domain]:[port]/api/v1/authorities\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"Authority"})," is successfully created, its ",(0,i.jsx)(n.code,{children:"uuid"})," is sent back:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "uuid": "83265efb-35a1-4b48-ae6f-1269b7c41668"\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"create-authority-instance-using-the-web-interface",children:["Create ",(0,i.jsx)(n.code,{children:"Authority"})," instance using the Web Interface"]}),"\n",(0,i.jsxs)(n.p,{children:["Follow these steps to create ",(0,i.jsx)(n.code,{children:"Authority"})," to establish ",(0,i.jsx)(n.code,{children:"ADCS"})," instance connection with provided authentication."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to the Administration Interface ",(0,i.jsx)(n.code,{children:"https://[domain]:[port]/administrator"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Authorities"})," in the left menu"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add New Authority"})," (plus symbol ",(0,i.jsx)("span",{style:{color:"#1473b5"},children:(0,i.jsx)(a.G,{icon:c.r8p})}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Fill the columns with the attributes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Authority name: ",(0,i.jsx)(n.code,{children:"MS ADCS Authority"})]}),"\n",(0,i.jsxs)(n.li,{children:["Authority Provider: ",(0,i.jsx)(n.code,{children:"MS ADCS Connector"})]}),"\n",(0,i.jsxs)(n.li,{children:["Kind: ",(0,i.jsx)(n.code,{children:"ADCS"})]}),"\n",(0,i.jsxs)(n.li,{children:["MS-ADCS Address: ",(0,i.jsx)(n.em,{children:"your MS server address"})]}),"\n",(0,i.jsxs)(n.li,{children:["Port: ",(0,i.jsx)(n.code,{children:"5985"})]}),"\n",(0,i.jsxs)(n.li,{children:["Credential: ",(0,i.jsx)(n.code,{children:"MS ADCS Credential"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You have successfully created ",(0,i.jsx)(n.code,{children:"MS ADCS Authority"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);