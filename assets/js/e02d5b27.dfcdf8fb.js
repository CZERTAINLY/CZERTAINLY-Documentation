"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[403],{64141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return k}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),c=n(99603),a=n(59417),s=["components"],l={},p="Register Connector",u={unversionedId:"certificate-key/quick-start/certificate-discovery/register-connector",id:"certificate-key/quick-start/certificate-discovery/register-connector",title:"Register Connector",description:"In order to start using the platform with any specific technology, we must register the Connector.",source:"@site/docs/10-certificate-key/05-quick-start/02-certificate-discovery/01-register-connector.mdx",sourceDirName:"10-certificate-key/05-quick-start/02-certificate-discovery",slug:"/certificate-key/quick-start/certificate-discovery/register-connector",permalink:"/docs/certificate-key/quick-start/certificate-discovery/register-connector",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/certificate-key/quick-start/overview"},next:{title:"Create Discovery",permalink:"/docs/certificate-key/quick-start/certificate-discovery/create-discovery"}},d={},k=[{value:"Register <code>Connector</code> using the API",id:"register-connector-using-the-api",level:2},{value:"Register <code>Connector</code> using the Web Interface",id:"register-connector-using-the-web-interface",level:2}],m={toc:k},h="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"register-connector"},"Register Connector"),(0,o.kt)("p",null,"In order to start using the platform with any specific technology, we must register the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector"),".\nWe would like to do the certificate discovery and such ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector")," must therefore implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Discovery Provider")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Function Group"),"."),(0,o.kt)("h2",{id:"register-connector-using-the-api"},"Register ",(0,o.kt)("inlineCode",{parentName:"h2"},"Connector")," using the API"),(0,o.kt)("p",null,"The connector can be registered using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "Network Discovery Provider",\n    "url", "https://network-discovery-provider-service:8080",\n    "authType": "none"\n  }\' \\\n  https://[domain]:[port]/api/v1/connectors\n')),(0,o.kt)("p",null,"When there is no error, ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector")," is successfully registered, and its ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "ef092b12-e181-4734-8e34-73152612a945"\n}\n')),(0,o.kt)("p",null,"We can use that to get details about the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector")," in the future API calls:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v1/connectors/ef092b12-e181-4734-8e34-73152612a945\n  #https://[domain]:[port]/api/v1/connectors/{uuid}\n')),(0,o.kt)("h2",{id:"register-connector-using-the-web-interface"},"Register ",(0,o.kt)("inlineCode",{parentName:"h2"},"Connector")," using the Web Interface"),(0,o.kt)("p",null,"Follow these steps for register new ",(0,o.kt)("inlineCode",{parentName:"p"},"Network Discovery Provider"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to the Administration Interface ",(0,o.kt)("inlineCode",{parentName:"li"},"https://[domain]:[port]/administrator")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connectors")," in the left menu"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add new connector")," (plus symbol ",(0,o.kt)("span",{style:{color:"#1473b5"}},(0,o.kt)(c.G,{icon:a.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,o.kt)("li",{parentName:"ol"},"Fill in the columns with the attributes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://network-discovery-provider-service:8080")),(0,o.kt)("li",{parentName:"ul"},"Authentication Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"No Auth")))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connect"),"  ")),(0,o.kt)("p",null,"Now you can see the details of the connected ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector"),". "),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Fill in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Connector")," name: ",(0,o.kt)("inlineCode",{parentName:"li"},"Network Discovery Provider")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create")," to make the ",(0,o.kt)("inlineCode",{parentName:"li"},"Connector")," available to other components")),(0,o.kt)("p",null,"You have registered ",(0,o.kt)("inlineCode",{parentName:"p"},"Network Discovery Provider")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector"),"."))}g.isMDXComponent=!0}}]);