"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4966],{96625:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),c=n(99603),l=n(59417),o=["components"],s={},u="Create Authority",p={unversionedId:"certificate-key/quick-start/certificate-management/create-authority",id:"certificate-key/quick-start/certificate-management/create-authority",title:"Create Authority",description:"In order to establish a connection with MS ADCS, we need to setup the Authority instance.",source:"@site/docs/10-certificate-key/05-quick-start/03-certificate-management/05-create-authority.mdx",sourceDirName:"10-certificate-key/05-quick-start/03-certificate-management",slug:"/certificate-key/quick-start/certificate-management/create-authority",permalink:"/docs/certificate-key/quick-start/certificate-management/create-authority",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Credential",permalink:"/docs/certificate-key/quick-start/certificate-management/create-credential"},next:{title:"Create RA Profile",permalink:"/docs/certificate-key/quick-start/certificate-management/create-ra-profile"}},d={},m=[{value:"Create <code>Authority</code> instance using the API",id:"create-authority-instance-using-the-api",level:2},{value:"Create <code>Authority</code> instance using the Web Interface",id:"create-authority-instance-using-the-web-interface",level:2}],h={toc:m},k="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(k,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-authority"},"Create Authority"),(0,r.kt)("p",null,"In order to establish a connection with MS ADCS, we need to setup the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," instance."),(0,r.kt)("h2",{id:"create-authority-instance-using-the-api"},"Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"Authority")," instance using the API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," can be created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," API. However, before creating it, we need know the required ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority"),".\nWe can get that using the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v1/connectors/04cb011f-4497-4e45-b4b9-4975db9df0a0/authorityProvider/ADCS/attributes\n  #https://[domain]:[port]/api/v1/connectors/{uuid}/{functionGroup}/{kind}/attributes\n')),(0,r.kt)("p",null,"This returns the list of applicable attributes for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority"),", such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "uuid": "93ca0ba2-3863-4ffa-a469-fd14ab3992bf",\n        "name": "address",\n        "label": "MS-ADCS Address",\n        "type": "STRING",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Address of ADCS server.",\n        "validationRegex": "^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])|(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\\\-]*[a-zA-Z0-9])\\\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\\\-]*[A-Za-z0-9]))$",\n        "multiSelect": false\n    },\n    {\n        "uuid": "d9f79ba6-47e5-437b-a7bc-82dbafa9cf01",\n        "name": "https",\n        "content": {\n            "value": false\n        },\n        "label": "HTTPS Enabled",\n        "type": "BOOLEAN",\n        "required": false,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Use https for connection with ADCS server.",\n        "multiSelect": false\n    },\n    {\n        "uuid": "9587a320-a487-4084-9645-0b6c24636fa6",\n        "name": "port",\n        "content": {\n            "value": 5985\n        },\n        "label": "Port",\n        "type": "INTEGER",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Define WinRM port, default port for http is 5985 and for https 5986.",\n        "multiSelect": false\n    },\n    {\n        "uuid": "d9f79ba6-47e5-437b-a7bc-82dbafa9cf03",\n        "name": "credential",\n        "label": "Credential",\n        "type": "CREDENTIAL",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": true,\n        "description": "Credential for the communication",\n        "attributeCallback": {\n            "callbackContext": "core/getCredentials",\n            "callbackMethod": "GET",\n            "mappings": [\n                {\n                    "to": "credentialKind",\n                    "targets": [\n                        "pathVariable"\n                    ],\n                    "value": "Basic"\n                }\n            ]\n        },\n        "multiSelect": false\n    }\n]\n')),(0,r.kt)("p",null,"Knowing the attributes, we can create the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," using the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "MS ADCS Authority",\n    "connectorUuid": "04cb011f-4497-4e45-b4b9-4975db9df0a0",\n    "kind": "ADCS",\n    "attributes": [\n      {\n        "name": "https",\n        "content": {\n          "value": false\n        }\n      },\n      {\n        "name": "port",\n        "content": {\n          "value": 5985\n        }\n      },\n      {\n        "name": "address",\n        "content": {\n          "value": "lab02.3key.company"\n        }\n      },\n      {\n        "name": "credential",\n        "content": {\n          "value": "MS ADCS Basic Credential",\n          "data": {\n            "uuid": "4c59aecd-1edc-47ea-b3cb-96a2468315bc",\n            "name": "MS ADCS Basic Credential"\n          }\n        }\n      }\n    ]\n  }\' \\\n  https://[domain]:[port]/api/v1/authorities\n')),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," is successfully created, its ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "83265efb-35a1-4b48-ae6f-1269b7c41668"\n}\n')),(0,r.kt)("h2",{id:"create-authority-instance-using-the-web-interface"},"Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"Authority")," instance using the Web Interface"),(0,r.kt)("p",null,"Follow these steps to create ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," to establish ",(0,r.kt)("inlineCode",{parentName:"p"},"ADCS")," instance connection with provided authentication."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to the Administration Interface ",(0,r.kt)("inlineCode",{parentName:"li"},"https://[domain]:[port]/administrator")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Authorities")," in the left menu "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add New Authority")," (plus symbol ",(0,r.kt)("span",{style:{color:"#1473b5"}},(0,r.kt)(c.G,{icon:l.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,r.kt)("li",{parentName:"ol"},"Fill the columns with the attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Authority name: ",(0,r.kt)("inlineCode",{parentName:"li"},"MS ADCS Authority")),(0,r.kt)("li",{parentName:"ul"},"Authority Provider: ",(0,r.kt)("inlineCode",{parentName:"li"},"MS ADCS Connector")),(0,r.kt)("li",{parentName:"ul"},"Kind: ",(0,r.kt)("inlineCode",{parentName:"li"},"ADCS")),(0,r.kt)("li",{parentName:"ul"},"MS-ADCS Address: ",(0,r.kt)("em",{parentName:"li"},"your MS server address")),(0,r.kt)("li",{parentName:"ul"},"Port: ",(0,r.kt)("inlineCode",{parentName:"li"},"5985")),(0,r.kt)("li",{parentName:"ul"},"Credential: ",(0,r.kt)("inlineCode",{parentName:"li"},"MS ADCS Credential")))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create")," ")),(0,r.kt)("p",null,"You have successfully created ",(0,r.kt)("inlineCode",{parentName:"p"},"MS ADCS Authority"),"."))}f.isMDXComponent=!0}}]);