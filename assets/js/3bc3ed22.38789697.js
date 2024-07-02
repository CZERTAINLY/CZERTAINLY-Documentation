"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9178],{63891:function(e,i,n){n.r(i),n.d(i,{assets:function(){return o},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return a}});var t=n(85893),c=n(11151);const s={},r="Identification",d={id:"certificate-key/concept-design/architecture/access-control/identification",title:"Identification",description:"Each user is identified by one of the supported methods listed below:",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/05-identification.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture/05-access-control",slug:"/certificate-key/concept-design/architecture/access-control/identification",permalink:"/docs/certificate-key/concept-design/architecture/access-control/identification",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/05-identification.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Externalized Authentication",permalink:"/docs/certificate-key/concept-design/architecture/access-control/externalized-authentication"},next:{title:"Authorization",permalink:"/docs/certificate-key/concept-design/architecture/access-control/authorization"}},o={},a=[{value:"X.509 certificate",id:"x509-certificate",level:2},{value:"JSON ID",id:"json-id",level:2},{value:"Identification order",id:"identification-order",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"identification",children:"Identification"}),"\n",(0,t.jsx)(i.p,{children:"Each user is identified by one of the supported methods listed below:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"X.509 certificate"}),"\n",(0,t.jsx)(i.li,{children:"JSON ID"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Identification is performed by the ",(0,t.jsx)(i.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Auth",children:"CZERTAINLY Auth Service"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"x509-certificate",children:"X.509 certificate"}),"\n",(0,t.jsx)(i.p,{children:"User can be identified based on X.509 certificate representing the digital identity.\nTypically, the X.509 certificate of authenticated user is provided as Base64-encoded value in the header."}),"\n",(0,t.jsx)(i.p,{children:"An example of the user identity provided as X.509 certificate:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"X-APP-CERTIFICATE=MIIE/TCCAuWgAwIBAgIUPCqjU2t+JmCd9j/47eIc8DnaBJ0wDQYJKoZIhvcNAQENBQAwOzEbMBkGA1UEAwwSRGVtbyBTZXJ2ZXIgU3ViIENBMRwwGgYDVQQKDBMzS2V5IENvbXBhbnkgcy5yLm8uMB4XDTIyMTAxMjA5MTg0M1oXDTIyMTAxMjIxMTg0MlowDjEMMAoGA1UEAwwDeDExMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx3yEn1ivUp4etk3kdNrRXNP5PeIpTYobGj4lQrW57rsj9hhOhY/SwaeCu6sYPVvYIXPWnlc4tTafjcen/8Ikc7pY2NuzD0HaIAOujblcMKT2KAKA/OU+RrI2o/swU9UmEQ2wYveNYCGobimt/foURrB9opeDCx3pFXkddYsXAziaWu3AQIF5gIf/b+r7hYRIXh8V/u01t6FCnpBWCtdmYVrJ5e8KZw0yqptNpgDK1plu+8AR5tviP/vgrpBquwzNsVREsnRZJxOM6rXq9rG5scoqO+gxdsm6+EqfRiGiBvcaIr+Zpv81ryfiABLdixvyhoZ//3o8rAU0O7Pjm7HTxwIDAQABo4IBJDCCASAwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBQb/FXk1AOCzd40P27IA82xTCrutTBQBggrBgEFBQcBAQREMEIwQAYIKwYBBQUHMAKGNGh0dHA6Ly9wa2kuM2tleS5jb21wYW55L2Nhcy9kZW1vL2RlbW9zZXJ2ZXJzdWJjYS5jcnQwEQYDVR0gBAowCDAGBgRVHSAAMBMGA1UdJQQMMAoGCCsGAQUFBwMBMEYGA1UdHwQ/MD0wO6A5oDeGNWh0dHA6Ly9wa2kuM2tleS5jb21wYW55L2NybHMvZGVtby9kZW1vc2VydmVyc3ViY2EuY3JsMB0GA1UdDgQWBBQzGoVZucmxb0IrrAWE2oPxrcEOojAOBgNVHQ8BAf8EBAMCBaAwDQYJKoZIhvcNAQENBQADggIBAN+hsAdianf+76orB/KwNDLIE36XOai6Z5/9VHmgWKHmVqdBYf8RU/Pdd8NcCULIy8bDI67H7BhPbciRcFfHn7rkWNNz1LCvnxxEzfj20A0WGuPC4oQTnU7QpPJr6tru7d6rLsbJPCRYBhEw6soLRzmWWAy5P+RoONWJCw6fv+2o8xwsX7jGYkwYmmdu4sr8+f5hREyfLXt6z4CZCue1/gcOrS+fKzaXLAJ/2pVCqcKIKn+oUW8LtnB2R8jJe08KbXZwnlTTmaTCMT/k5tAWE34VnpCaMJPRR7gMeOTSiV73kfLpKGnSTFLaZr05hvaMBUzP1nZSmZOyMOFrZSZSH+tE8zK098UhXiNTKSFywbN5HfNV+YLMuG9sMU25xBB4pvx/iXcH3e3o6JmFBTjJeKVCgljhWgPalb52kA1YdN9sE0DLBBX+UVjT0W7+JkKOvEwo3VqLUZqavwfkfjHEx3Dlzx0Q4m8N2XCGkHe1tRz1McKbn2RCJk3sgZoe9fANK68L+d4CM3A31qbjgYkhJ0geDSS797CEpD8UK3NWYx/ssad45SU20Axq3BkSTpjS9eG1QPwR1YX0CywyTwbceNw6PvWNC28VLjverXi9beT1dbZ7HKHNap768cT5TTGViWEBFnuueIVNsBGSDNV3Qtba94HGKHuGNJpYvkMas4JZ\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"The user must exist and must be associated with the X.509 certificate to be successfully identified and authenticated."})}),"\n",(0,t.jsx)(i.h2,{id:"json-id",children:"JSON ID"}),"\n",(0,t.jsx)(i.p,{children:"User can be identified using JSON format."}),"\n",(0,t.jsx)(i.p,{children:"JSON ID has the following format of fields (other field will be ignored):"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Item"}),(0,t.jsx)(i.th,{children:"Data type"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Required"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"sub"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsx)(i.td,{children:"Unique identification of the user in the external system"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("span",{class:"badge badge--success",children:"YES"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"username"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsx)(i.td,{children:"Username of the user, username must be unique in the platform"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("span",{class:"badge badge--success",children:"YES"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"given_name"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsx)(i.td,{children:"Given name of the user"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"family_name"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsx)(i.td,{children:"Family name of the user"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"email"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsx)(i.td,{children:"Email associated with the user"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"roles"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"array of strings"})}),(0,t.jsx)(i.td,{children:"Roles associated with the user"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("span",{class:"badge badge--danger",children:"NO"})})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"The JSON ID is typically provided in the header as Base64-encoded data."}),"\n",(0,t.jsx)(i.p,{children:"An example of the user identity provided as JSON token:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "sub": "2d73cf2a-5339-421e-81cd-8fa0d25a100b",\n  "username": "test",\n  "roles": [\n    "test-role",\n    "new-role"\n  ],\n  "given_name": "Test",\n  "family_name": "Test",\n  "email": "test@test.com"\n}\n\n# Base64-encoded\nX-USERINFO=ewogICJzdWIiOiAiMmQ3M2NmMmEtNTMzOS00MjFlLTgxY2QtOGZhMGQyNWExMDBiIiwKICAidXNlcm5hbWUiOiAidGVzdCIsCiAgInJvbGVzIjogInRlc3Qtcm9sZSIsCiAgImdpdmVuX25hbWUiOiAiVGVzdCIsCiAgImZhbWlseV9uYW1lIjogIlRlc3QiLAogICJlbWFpbCI6ICJ0ZXN0QHRlc3QuY29tIgp9\n'})}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsxs)(i.p,{children:["External authentication servers is responsible to provide consistent JSON ID that is used for identification of the user. ",(0,t.jsx)(i.a,{href:"https://www.keycloak.org/",children:"Keycloak"})," is one of the tested authentication servers."]})}),"\n",(0,t.jsx)(i.h2,{id:"identification-order",children:"Identification order"}),"\n",(0,t.jsx)(i.p,{children:"When identifying user, the following order is applied:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"X.509 certificate"}),"\n",(0,t.jsx)(i.li,{children:"JSON token"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["When none of the identification data of user is provided, user is considered to be ",(0,t.jsx)(i.strong,{children:"anonymous"})," (unidentified)."]})]})}function h(e={}){const{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:function(e,i,n){n.d(i,{Z:function(){return d},a:function(){return r}});var t=n(67294);const c={},s=t.createContext(c);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);