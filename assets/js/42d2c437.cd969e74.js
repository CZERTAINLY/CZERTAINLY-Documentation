"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9348],{43064:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=t(74848),c=t(28453);const n={},o="Overview",s={id:"certificate-key/protocols/acme/overview",title:"Overview",description:"The platform implements the ACME (Automatic Certificate Management Environment) protocol to automate the process of certificate management. It offers simple integration with ACME server with the help of ACME objects that are easy to configure and to manage.",source:"@site/docs/10-certificate-key/07-protocols/02-acme/01-overview.md",sourceDirName:"10-certificate-key/07-protocols/02-acme",slug:"/certificate-key/protocols/acme/overview",permalink:"/docs/certificate-key/protocols/acme/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/07-protocols/02-acme/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/certificate-key/protocols/overview"},next:{title:"ACME Profile",permalink:"/docs/certificate-key/protocols/acme/acme-profile"}},d={},l=[{value:"Platform ACME management",id:"platform-acme-management",level:2},{value:"ACME Profile vs RA Profile ACME API",id:"acme-profile-vs-ra-profile-acme-api",level:2},{value:"Supported operations",id:"supported-operations",level:2}];function a(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(r.p,{children:"The platform implements the ACME (Automatic Certificate Management Environment) protocol to automate the process of certificate management. It offers simple integration with ACME server with the help of ACME objects that are easy to configure and to manage."}),"\n",(0,i.jsxs)(r.p,{children:["Implementation of ACME provides a flexibility for the clients and administrators to choose between running ACME endpoint that are bound to ",(0,i.jsx)(r.a,{href:"../../concept-design/core-components/ra-profile",children:"RA Profile"}),"."]}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsxs)(r.p,{children:["ACME implementation follows ",(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555",children:"RFC 8555 - Automatic Certificate Management Environment (ACME)"}),".\nSee ",(0,i.jsx)(r.a,{href:"/api/protocol-acme/",children:"ACME protocol API"})," for more information about implemented end points."]})}),"\n",(0,i.jsx)(r.h2,{id:"platform-acme-management",children:"Platform ACME management"}),"\n",(0,i.jsx)(r.p,{children:"In order to start with the ACME protocol, the platform must be configured and act as the ACME server.\nFor this purpose we define the following management objects:"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"ACME management object"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"acme-profile",children:(0,i.jsx)(r.code,{children:"ACME Profile"})})}),(0,i.jsx)(r.td,{children:"Contains configuration of the ACME server"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"acme-account",children:(0,i.jsx)(r.code,{children:"ACME Account"})})}),(0,i.jsx)(r.td,{children:"Registered ACME account that consumes the ACME operations"})]})]})]}),"\n",(0,i.jsxs)(r.p,{children:["You can manage ",(0,i.jsx)(r.code,{children:"ACME Profiles"})," and ",(0,i.jsx)(r.code,{children:"ACME Accounts"})," through the web interface or through the ",(0,i.jsx)(r.a,{href:"/api/core-acme/",children:(0,i.jsx)(r.code,{children:"Core ACME API"})}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"acme-profile-vs-ra-profile-acme-api",children:"ACME Profile vs RA Profile ACME API"}),"\n",(0,i.jsxs)(r.p,{children:["You can configure ",(0,i.jsx)(r.code,{children:"ACME Profile"})," with or without ",(0,i.jsx)(r.code,{children:"RA Profile"}),". And you can enable ACME API for any particular ",(0,i.jsx)(r.code,{children:"RA Profile"})," only.\nThere are 2 ACME APIs that are implemented in the platform:"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"ACME API"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"ACME Profile"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.code,{children:"https://<hostname>:<port>/acme/{acmeProfileName}/directory"})]}),(0,i.jsxs)(r.td,{children:["To use ",(0,i.jsx)(r.code,{children:"ACME Profile"})," directly from the client. In this case, the ",(0,i.jsx)(r.code,{children:"ACME Profile"})," must have configure default ",(0,i.jsx)(r.code,{children:"RA Profile"}),", otherwise the API won't be working"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"RA Profile"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.code,{children:"https://<hostname>:<port>/acme/raProfile/{raProfileName}/directory"})]}),(0,i.jsxs)(r.td,{children:["Any ",(0,i.jsx)(r.code,{children:"RA Profile"})," can have enabled specific ",(0,i.jsx)(r.code,{children:"ACME Profile"}),". The ACME API is in this case managed by the ",(0,i.jsx)(r.code,{children:"RA Profile"})," and you do not have to configure it as a default for ",(0,i.jsx)(r.code,{children:"ACME Profile"})]})]})]})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsxs)(r.strong,{children:["When to use ",(0,i.jsx)(r.code,{children:"ACME Profile"})," and when ",(0,i.jsx)(r.code,{children:"RA Profile"})," ACME API?"]})}),"\n",(0,i.jsx)(r.p,{children:"Depends on what you would like to achieve:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["if you would like to allow ACME clients to work only with one specific ",(0,i.jsx)(r.code,{children:"RA Profile"})," then use ",(0,i.jsx)(r.code,{children:"RA Profile"})," ACME API"]}),"\n",(0,i.jsxs)(r.li,{children:["if you would like to have the flexibility in changing the ",(0,i.jsx)(r.code,{children:"RA Profile"})," which is used by the ACME client, then use ",(0,i.jsx)(r.code,{children:"ACME Profile"})," ACME API"]}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"ACME Profile"})," can be used with multiple ",(0,i.jsx)(r.code,{children:"RA Profiles"}),"."]})}),"\n",(0,i.jsxs)(r.admonition,{type:"warning",children:[(0,i.jsx)(r.p,{children:"The platform performs various validations on the end point including the following:"}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Availability of the ",(0,i.jsx)(r.code,{children:"ACME Profile"})," or ",(0,i.jsx)(r.code,{children:"RA Profile"})]}),"\n",(0,i.jsxs)(r.li,{children:["Status of the ",(0,i.jsx)(r.code,{children:"ACME Profile"})," or ",(0,i.jsx)(r.code,{children:"RA Profile"})]}),"\n",(0,i.jsxs)(r.li,{children:["If both ",(0,i.jsx)(r.code,{children:"ACME Profile"})," and ",(0,i.jsx)(r.code,{children:"RA Profile"})," are available and enabled"]}),"\n"]})]}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"ACME Profile"})," that has no configuration of default ",(0,i.jsx)(r.code,{children:"RA Profile"})," is usually bound to one or multiple ",(0,i.jsx)(r.code,{children:"RA Profiles"}),". In this case the ",(0,i.jsx)(r.code,{children:"ACME Profile"})," configuration consist of consistent attributes that are used by ACME clients."]}),"\n",(0,i.jsx)(r.h2,{id:"supported-operations",children:"Supported operations"}),"\n",(0,i.jsx)(r.p,{children:"Supported operations are listed below:"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Operation"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"End Points"}),(0,i.jsx)(r.th,{children:"RFC Reference"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"Directory"})}),(0,i.jsx)(r.td,{children:"Get the directory object containing the URL for operations and other details including Terms of Service"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"/acme/{acmeProfileName}/directory"})," ",(0,i.jsx)("br",{})," (or) ",(0,i.jsx)("br",{})," ",(0,i.jsx)(r.code,{children:"/acme/raProfile/{raProfileName}/directory"})]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.1.1",children:"RFC 8555, section 7.1.1"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"New Nonce"})}),(0,i.jsx)(r.td,{children:"Create a new Anti-Replay Nonce that should be used in the following requests in the header field by the client"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"/acme/{acmeProfileName}/new-nonce"})," ",(0,i.jsx)("br",{})," (or) ",(0,i.jsx)("br",{})," ",(0,i.jsx)(r.code,{children:"/acme/raProfile/{raProfileName}/new-nonce"})]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.2",children:"RFC 8555, section 7.2"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"New Account"})}),(0,i.jsx)(r.td,{children:"Create a new account using the key pair generated by the client, get the existing account using the public key"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"/acme/{acmeProfileName}/new-account"})," ",(0,i.jsx)("br",{})," (or) ",(0,i.jsx)("br",{})," ",(0,i.jsx)(r.code,{children:"/acme/raProfile/{raProfileName}/new-account"})]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.3",children:"RFC 8555, section 7.3"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"Update Account"})}),(0,i.jsx)(r.td,{children:"Update the account including the Terms of Service and External account binding"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"/acme/{acmeProfileName}/acct/{accountId}"})," ",(0,i.jsx)("br",{})," (or) ",(0,i.jsx)("br",{})," ",(0,i.jsx)(r.code,{children:"/acme/raProfile/{raProfileName}/acct/{accountId}"})]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.3.2",children:"RFC 8555, section 7.3.2"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"New Order"})}),(0,i.jsx)(r.td,{children:"Place a new order for a certificate. The order will contain the identifiers to which the certificate is being issued. New Order marks the first step in issuing a certificate"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"/acme/{acmeProfileName}/new-order"})," ",(0,i.jsx)("br",{})," (or) ",(0,i.jsx)("br",{})," ",(0,i.jsx)(r.code,{children:"/acme/raProfile/{raProfileName}/new-order"})]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.4",children:"RFC 8555, section 7.4"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"Challenge"})}),(0,i.jsx)(r.td,{children:"Initiate the challenge validation from the server side once the client has satisfied the challenges"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"/acme/{acmeProfileName}/chall/{challengeId}"})," ",(0,i.jsx)("br",{})," (or) ",(0,i.jsx)("br",{})," ",(0,i.jsx)(r.code,{children:"/acme/raProfile/{raProfileName}/chall/{challengeId}"})]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.5",children:"RFC 8555, section 7.5"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"Finalize"})}),(0,i.jsx)(r.td,{children:"Finalize the order for new certificate by providing the CSR"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"/acme/{acmeProfileName}/order/{orderId}/finalize"})," ",(0,i.jsx)("br",{})," (or) ",(0,i.jsx)("br",{})," ",(0,i.jsx)(r.code,{children:"/acme/raProfile/{raProfileName}/order/{orderId}/finalize"})]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.4.2",children:"RFC 8555, section 7.4.2"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"Download Certificate"})}),(0,i.jsx)(r.td,{children:"Download the certificate once the certificate issuance is completed"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"/acme/{acmeProfileName}/cert/{certificateId}"})," ",(0,i.jsx)("br",{})," (or) ",(0,i.jsx)("br",{})," ",(0,i.jsx)(r.code,{children:"/acme/raProfile/{raProfileName}/cert/{certificateId}"})]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.3.2",children:"RFC 8555, section 7.3.2"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"Revoke Certificate"})}),(0,i.jsx)(r.td,{children:"Revoke a certificate if it is no longer viable. Revocation operation uses the certificate content for the server to identify"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"/acme/{acmeProfileName}/revoke-cert"})," ",(0,i.jsx)("br",{})," (or) ",(0,i.jsx)("br",{})," ",(0,i.jsx)(r.code,{children:"/acme/raProfile/{raProfileName}/order/revoke-cert"})]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.6",children:"RFC 8555, section 7.6"})})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>s});var i=t(96540);const c={},n=i.createContext(c);function o(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);