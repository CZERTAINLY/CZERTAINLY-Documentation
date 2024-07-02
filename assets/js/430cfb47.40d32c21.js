"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5190],{3082:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return l}});var s=t(85893),o=t(11151);const r={},i="Introduction",a={id:"signing/aws-kms-cryptotoken/overview",title:"Introduction",description:"AWS KMS CryptoToken implementation allows you to work with the keys generated and managed by the Amazon Web Services Key Management Service.",source:"@site/docs/30-signing/35-aws-kms-cryptotoken/01-overview.md",sourceDirName:"30-signing/35-aws-kms-cryptotoken",slug:"/signing/aws-kms-cryptotoken/overview",permalink:"/docs/signing/aws-kms-cryptotoken/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/35-aws-kms-cryptotoken/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"REST User Management SAP Provider",permalink:"/docs/signing/sam-integration/trident-sam/user-sap-providers/rest"},next:{title:"AWS KMS v1 CryptoToken Properties",permalink:"/docs/signing/aws-kms-cryptotoken/v1-properties"}},c={},l=[{value:"AWS KMS Implementations",id:"aws-kms-implementations",level:2},{value:"AWS KMS Permissions",id:"aws-kms-permissions",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["AWS KMS CryptoToken implementation allows you to work with the keys generated and managed by the ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/kms/",children:"Amazon Web Services Key Management Service"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Using the AWS KMS CryptoToken, you can achieve the same functionality with the keys stored and managed by the cloud, as with any other CryptoToken.\nFor more information about the CryptoTokens, see ",(0,s.jsx)(n.a,{href:"https://doc.primekey.com/signserver/signserver-reference/signserver-components/cryptotokens",children:"SignServer CryptoTokens"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"aws-kms-implementations",children:"AWS KMS Implementations"}),"\n",(0,s.jsx)(n.p,{children:"There are 2 implementation of the AWS KMS CryptoToken:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"./v1-properties",children:"v1 AWS KMS CryptoToken"})," - access for IAM role based on the Access Key ID and Secret Access Key provided"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"./v2-properties",children:"v2 AWS KMS CryptoToken"})," - access using the default credential provider chain"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"aws-kms-permissions",children:"AWS KMS Permissions"}),"\n",(0,s.jsx)(n.p,{children:"The following permissions must be set for the IAM role used to access AWS KMS keys:"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Use your own values fro ",(0,s.jsx)(n.code,{children:"region"})," and ",(0,s.jsx)(n.code,{children:"account"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"Action": [\n    "kms:GetPublicKey",\n    "kms:ScheduleKeyDeletion",\n    "kms:CreateAlias",\n    "kms:Sign"\n],\n"Resource": [\n    "arn:aws:kms:[region]:[account]:alias/*",\n    "arn:aws:kms:[region]:[account]:key/*"\n],\n"Action": [\n    "kms:ListAliases",\n    "kms:CreateKey"\n],\n"Resource": "*",\n"Action": "kms:DescribeKey",\n"Resource": "arn:aws:kms:[region]:[account]:key/*",\n"Action": "kms:DeleteAlias",\n"Resource": "arn:aws:kms:[region]:[account]:alias/*",\n"Action": "kms:DeleteAlias",\n"Resource": [\n    "arn:aws:kms:[region]:[account]:alias/*",\n    "arn:aws:kms:[region]:[account]:key/*"\n]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(67294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);