"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2366],{81053:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),l=n(99603),c=n(59417),o=["components"],u={},s="Create RA Profile",p={unversionedId:"certificate-key/quick-start/certificate-management/create-ra-profile",id:"certificate-key/quick-start/certificate-management/create-ra-profile",title:"Create RA Profile",description:"When the connection with the Authority is successfully established, we can create a service for certificate management. We call it RA Profile.",source:"@site/docs/10-certificate-key/05-quick-start/03-certificate-management/07-create-ra-profile.mdx",sourceDirName:"10-certificate-key/05-quick-start/03-certificate-management",slug:"/certificate-key/quick-start/certificate-management/create-ra-profile",permalink:"/docs/certificate-key/quick-start/certificate-management/create-ra-profile",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Authority",permalink:"/docs/certificate-key/quick-start/certificate-management/create-authority"},next:{title:"Issue Certificate",permalink:"/docs/certificate-key/quick-start/certificate-management/issue-certificate"}},f={},m=[{value:"Create <code>RA Profile</code> using the API",id:"create-ra-profile-using-the-api",level:2},{value:"Create <code>RA Profile</code> using the Web Interface",id:"create-ra-profile-using-the-web-interface",level:2}],k={toc:m},d="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(d,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-ra-profile"},"Create RA Profile"),(0,r.kt)("p",null,"When the connection with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," is successfully established, we can create a service for certificate management. We call it ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile"),"."),(0,r.kt)("h2",{id:"create-ra-profile-using-the-api"},"Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"RA Profile")," using the API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," can be created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," API. However, before creating it, we need know the required ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile"),".\nWe can get that using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," API and the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v1/authorities/83265efb-35a1-4b48-ae6f-1269b7c41668/raProfiles/attributes\n  #https://[domain]:[port]/api/v1/authorities/{uuid}/raProfiles/attributes\n')),(0,r.kt)("p",null,"This returns the list of applicable attributes for the ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile"),", such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "uuid": "87a94421-c5d8-4a23-bb2c-bbee76cb4ea9",\n        "name": "template",\n        "content": [\n            {\n                "value": "CodeSigning"\n            },\n            {\n                "value": "EnrollmentAgent"\n            },\n            ...\n            {\n                "value": "SubCA"\n            },\n            {\n                "value": "Administrator"\n            }\n        ],\n        "label": "Template",\n        "type": "STRING",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": true,\n        "multiSelect": false\n    },\n    {\n        "uuid": "1467ffaa-445c-11ec-81d3-0242ac130003",\n        "name": "caAdcs",\n        "content": [\n            {\n                "value": "vmi307469.3key.local\\\\Demo MS Sub CA"\n            }\n        ],\n        "label": "Certification Authority",\n        "type": "STRING",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": true,\n        "multiSelect": false\n    }\n]\n')),(0,r.kt)("p",null,"Knowing the attributes, we can create the ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," using the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "Web Server RA Profile",\n    "authorityInstanceUuid": "83265efb-35a1-4b48-ae6f-1269b7c41668",\n    "description": "Quick start",\n    "enabled": true,\n    "attributes": [\n      {\n        "name": "template",\n        "content": {\n          "value": "WebServer"\n        }\n      },\n      {\n        "name": "caAdcs",\n        "content": {\n          "value": "vmi307469.3key.local\\\\Demo MS Sub CA"\n        }\n      }\n    ]\n  }\' \\\n  https://[domain]:[port]/api/v1/authorities/83265efb-35a1-4b48-ae6f-1269b7c41668/raProfiles\n  #https://[domain]:[port]/api/v1/authorities/{uuid}/raProfiles\n')),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," is successfully created, its ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "e045a12a-e114-45ed-90b8-bac7e750e803"\n}\n')),(0,r.kt)("h2",{id:"create-ra-profile-using-the-web-interface"},"Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"RA Profile")," using the Web Interface"),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," to manage certificates with the specific certificate template."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"RA Profiles")," in the left menu "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add new RA Profile")," (plus symbol ",(0,r.kt)("span",{style:{color:"#1473b5"}},(0,r.kt)(l.G,{icon:c.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,r.kt)("li",{parentName:"ol"},"Fill the columns with the attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RA Profile Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"ADCS-WebServer")),(0,r.kt)("li",{parentName:"ul"},"Description: ",(0,r.kt)("inlineCode",{parentName:"li"},"RA profile for webserver certificates")),(0,r.kt)("li",{parentName:"ul"},"Select Authority: ",(0,r.kt)("inlineCode",{parentName:"li"},"MS ADCS authority")),(0,r.kt)("li",{parentName:"ul"},"Template: ",(0,r.kt)("inlineCode",{parentName:"li"},"WebServer")),(0,r.kt)("li",{parentName:"ul"},"Certification Authority: ",(0,r.kt)("em",{parentName:"li"},"your system certificate authority")))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create")," "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Enable"),"  to make RA Profile ready for using, the RA Profile Status would be changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"Enabled"),".")))}h.isMDXComponent=!0}}]);