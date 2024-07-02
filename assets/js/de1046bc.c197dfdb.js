"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9578],{81781:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>r});var n=t(74848),a=t(28453);const c={},o="Create ACL Policy",s={id:"certificate-key/integration-guides/hashicorp-vault/create-acl-policy",title:"Create ACL Policy",description:"Vault policies are used to define a set of permissions for a path in the secrets engine. Policies are written in HashiCorp Configuration Language (HCL) and define a set of capabilities that are allowed on a given path.",source:"@site/docs/10-certificate-key/20-integration-guides/26-hashicorp-vault/05-create-acl-policy.md",sourceDirName:"10-certificate-key/20-integration-guides/26-hashicorp-vault",slug:"/certificate-key/integration-guides/hashicorp-vault/create-acl-policy",permalink:"/docs/certificate-key/integration-guides/hashicorp-vault/create-acl-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/20-integration-guides/26-hashicorp-vault/05-create-acl-policy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enable PKI Secrets Engine",permalink:"/docs/certificate-key/integration-guides/hashicorp-vault/enable-pki-engine"},next:{title:"Enable Authentication Methods",permalink:"/docs/certificate-key/integration-guides/hashicorp-vault/enable-auth-methods"}},l={},r=[{value:"PKI secrets engine ACL policy",id:"pki-secrets-engine-acl-policy",level:2},{value:"Create <code>czertainly</code> policy",id:"create-czertainly-policy",level:2}];function p(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"create-acl-policy",children:"Create ACL Policy"}),"\n",(0,n.jsx)(i.p,{children:"Vault policies are used to define a set of permissions for a path in the secrets engine. Policies are written in HashiCorp Configuration Language (HCL) and define a set of capabilities that are allowed on a given path."}),"\n",(0,n.jsxs)(i.p,{children:["For more information about the Vault policies, refer to the ",(0,n.jsx)(i.a,{href:"https://www.vaultproject.io/docs/concepts/policies",children:"Vault policies documentation"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"pki-secrets-engine-acl-policy",children:"PKI secrets engine ACL policy"}),"\n",(0,n.jsxs)(i.p,{children:["This following policy assumes the PKI secrets engine is enabled at the ",(0,n.jsx)(i.code,{children:"/pki"})," path in Vault. Since it is possible to enable secrets engines at any location, the policy should be adjusted accordingly:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",metastring:'title="czertainly-policy.hcl"',children:'# Allow to list pki issuers\npath "pki/issuers" {\n  \tcapabilities = ["list"]\n}\n\n# Allow to list available pki roles\npath "pki/roles" {\n  \tcapabilities = ["list"]\n}\n\n# Allow to read configuration of pki roles\npath "pki/roles/*" {\n  \tcapabilities = ["read"]\n}\n\n# Allow to list certificates issued\npath "pki/certs" {\n  \tcapabilities = ["list"]\n}\n\n# Allow signing of certificates for all roles\npath "pki/sign/*" {\n  \tcapabilities = ["create", "update"]\n}\n\n# Allow to revoke certificate\npath "pki/revoke" {\n  \tcapabilities = ["update"]\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"This policy assumes access to all roles that are configured in the PKI secrets engine. If you want to restrict access to specific roles, adjust the policy accordingly."}),"\n",(0,n.jsxs)(i.h2,{id:"create-czertainly-policy",children:["Create ",(0,n.jsx)(i.code,{children:"czertainly"})," policy"]}),"\n",(0,n.jsxs)(i.p,{children:["Create a new policy named ",(0,n.jsx)(i.code,{children:"czertainly"})," with the permissions defined in the ",(0,n.jsx)(i.a,{href:"#pki-secrets-engine-acl-policy",children:(0,n.jsx)(i.code,{children:"czertainly-policy.hcl"})}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"$ vault policy write czertainly czertainly-policy.hcl\nSuccess! Uploaded policy: admin\n"})}),"\n",(0,n.jsxs)(i.p,{children:["For more information on how to create and manage policies, refer to the ",(0,n.jsx)(i.a,{href:"https://developer.hashicorp.com/vault/tutorials/policies/policies",children:"Vault policies"}),"."]})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>s});var n=t(96540);const a={},c=n.createContext(a);function o(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);