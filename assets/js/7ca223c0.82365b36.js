"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4799],{36627:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),c=n(99603),l=n(59417),s=["components"],o={},d="Create Credential",u={unversionedId:"certificate-key/quick-start/certificate-management/create-credential",id:"certificate-key/quick-start/certificate-management/create-credential",title:"Create Credential",description:"We need to create a username/password Credential to access the MS Windows server.",source:"@site/docs/10-certificate-key/05-quick-start/03-certificate-management/03-create-credential.mdx",sourceDirName:"10-certificate-key/05-quick-start/03-certificate-management",slug:"/certificate-key/quick-start/certificate-management/create-credential",permalink:"/docs/certificate-key/quick-start/certificate-management/create-credential",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/05-quick-start/03-certificate-management/03-create-credential.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Register Connectors",permalink:"/docs/certificate-key/quick-start/certificate-management/register-connectors"},next:{title:"Create Authority",permalink:"/docs/certificate-key/quick-start/certificate-management/create-authority"}},p={},m=[{value:"Create <code>Credential</code> using the API",id:"create-credential-using-the-api",level:2},{value:"Create <code>Credential</code> using the Web Interface",id:"create-credential-using-the-web-interface",level:2}],k={toc:m},C="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)(C,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-credential"},"Create Credential"),(0,r.kt)("p",null,"We need to create a username/password ",(0,r.kt)("inlineCode",{parentName:"p"},"Credential")," to access the MS Windows server.\nThis ",(0,r.kt)("inlineCode",{parentName:"p"},"Credential")," is needed in order to establish authorized connection with the MS CA. "),(0,r.kt)("h2",{id:"create-credential-using-the-api"},"Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"Credential")," using the API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Credential")," can be created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Credential")," API. However, before creating it, we need know the required ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Credential"),".\nWe can get that using the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v1/connectors/93f74f2d-1bc7-4c15-a33e-0bf773b3955a/credentialProvider/Basic/attributes\n  #https://[domain]:[port]/api/v1/connectors/{uuid}/{functionGroup}/{kind}/attributes\n')),(0,r.kt)("p",null,"This returns the list of applicable attributes for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Credential")," kind, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "uuid": "fe2d6d35-fb3d-4ea0-9f0b-7e39be93beeb",\n        "name": "username",\n        "label": "Username",\n        "type": "STRING",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Username",\n        "multiSelect": false,\n        "group": "Basic"\n    },\n    {\n        "uuid": "04506d45-c865-4ddc-b6fc-117ee5d5c8e7",\n        "name": "password",\n        "label": "Password",\n        "type": "SECRET",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Password",\n        "multiSelect": false,\n        "group": "Basic"\n    }\n]\n')),(0,r.kt)("p",null,"Knowing the attributes, we can create the ",(0,r.kt)("inlineCode",{parentName:"p"},"Credential")," using the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "MS ADCS Basic Credential",\n    "connectorUuid": "93f74f2d-1bc7-4c15-a33e-0bf773b3955a",\n    "kind": "Basic",\n    "attributes": [\n      {\n        "name": "username",\n        "content": {\n          "value": "username"\n        }\n      },\n      {\n        "name": "password",\n        "content": {\n          "value": "password"\n        }\n      }\n    ]\n  }\' \\\n  https://[domain]:[port]/api/v1/credentials\n')),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"Credential")," is successfully created, its ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "4c59aecd-1edc-47ea-b3cb-96a2468315bc"\n}\n')),(0,r.kt)("h2",{id:"create-credential-using-the-web-interface"},"Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"Credential")," using the Web Interface"),(0,r.kt)("p",null,"You can create the ",(0,r.kt)("inlineCode",{parentName:"p"},"Credential")," required for MS ADCS Connector using the following steps: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to the Administration Interface ",(0,r.kt)("inlineCode",{parentName:"li"},"https://[domain]:[port]/administrator")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Credentails")," in the left menu "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add new Credential")," (plus symbol ",(0,r.kt)("span",{style:{color:"#1473b5"}},(0,r.kt)(c.G,{icon:l.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,r.kt)("li",{parentName:"ol"},"Fill the columns with the attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Credential name: ",(0,r.kt)("inlineCode",{parentName:"li"},"MS ADCS Basic Credential")),(0,r.kt)("li",{parentName:"ul"},"Credential Provider: ",(0,r.kt)("inlineCode",{parentName:"li"},"Common Credential Provider")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Basic")),(0,r.kt)("li",{parentName:"ul"},"Username: ",(0,r.kt)("em",{parentName:"li"},"your system user name")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("em",{parentName:"li"},"your system password")))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create")," ")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MS ADCS Basic Credential")," is created."))}f.isMDXComponent=!0}}]);