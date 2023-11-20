"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3613],{22013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(85893),i=t(11151);const s={},o="Signing with Onetime Crypto Worker",a={id:"signing/sam-integration/entrust-sam/crypto-workers/signing-with-onetime-crypto-worker",title:"Signing with Onetime Crypto Worker",description:"The following chapters describe the signing flow using the EntrustSAMOneTimeCryptoWorker. The same process is applicable for any type of the Signer configured.",source:"@site/docs/30-signing/30-sam-integration/07-entrust-sam/05-crypto-workers/06-signing-with-onetime-crypto-worker.md",sourceDirName:"30-signing/30-sam-integration/07-entrust-sam/05-crypto-workers",slug:"/signing/sam-integration/entrust-sam/crypto-workers/signing-with-onetime-crypto-worker",permalink:"/docs/signing/sam-integration/entrust-sam/crypto-workers/signing-with-onetime-crypto-worker",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/30-sam-integration/07-entrust-sam/05-crypto-workers/06-signing-with-onetime-crypto-worker.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OneTime Crypto Worker",permalink:"/docs/signing/sam-integration/entrust-sam/crypto-workers/onetime-crypto-worker"},next:{title:"Introduction",permalink:"/docs/signing/sam-integration/entrust-sam/sad-providers/overview"}},c={},d=[{value:"Signing process",id:"signing-process",level:2},{value:"Prepare SAM key data",id:"prepare-sam-key-data",level:3},{value:"Activate SAM key and sign",id:"activate-sam-key-and-sign",level:3},{value:"Typical setup of onetime signing",id:"typical-setup-of-onetime-signing",level:2},{value:"EntrustSAMCryptoToken",id:"entrustsamcryptotoken",level:3},{value:"EntrustSAMOneTimeCryptoWorker",id:"entrustsamonetimecryptoworker",level:3},{value:"Signer",id:"signer",level:3},{value:"Signing process execution",id:"signing-process-execution",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",object:"object",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"signing-with-onetime-crypto-worker",children:"Signing with Onetime Crypto Worker"}),"\n",(0,r.jsxs)(n.p,{children:["The following chapters describe the signing flow using the ",(0,r.jsx)(n.code,{children:"EntrustSAMOneTimeCryptoWorker"}),". The same process is applicable for any type of the Signer configured."]}),"\n",(0,r.jsx)(n.h2,{id:"signing-process",children:"Signing process"}),"\n",(0,r.jsx)(n.p,{children:"The signing process starts with the request coming to Signer to process and return the signature. It can be any of the supported signature formats."}),"\n",(0,r.jsx)(n.p,{children:"The user must be properly identified and authorized to generate unique onetime SAM key. The signing process is synchronous. If some step during the signing process fails, the SAM private key is destroyed and the operation is reported as failed."}),"\n",(0,r.jsx)(n.p,{children:"The signing process has 2 subprocesses that are described in more detail below:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#prepare-sam-key-data",children:(0,r.jsx)(n.strong,{children:"Prepare SAM key data"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#activate-sam-key-and-sign",children:(0,r.jsx)(n.strong,{children:"Activate SAM key and sign"})})}),"\n"]}),"\n",(0,r.jsx)(n.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/dLDDImD13BtxAm9UAgWeKWGFObjRyE07jE1vt8bjsDrCpMGK5V-xcQskbMh5xiBEBdbvILxU0W2SHNMYgQwsx0DYIJntucg8-92G2uJN9f2ldaXu6eGg26mVTe-F-jslKA51-a4yoi-0zkN6gb51SyUw3hyCSqKvbP3OVq27XwFky62L-Yeehe17n_bkC6_DqoKDdEexb3PnK16omjufZ6dAA2VDIJm5oIf4_LO2XAOpXN3VeYSpX1HHW2AGDogw9_JWsETgio3qWhxbM6JbQaDMIL77lSjhnWdLE93dkORR86McxHKFYGH1ZNuHWKaeaN_fvW-s6q7RB8B5eSHdy4vToxGs5_QMb5bk12xOt6Cc-M6sJ_meIEsqgGQMTuSGSyH3vtpI7-_yNvKCX9oxcGpcL7fq-gL3tb9kQGCjykaqoThvYLrb-s-s-35w8qQ7kAYIju2LC1dhUTmrlps6mYa5Ra2xW5hihufa_0lFBZirfcfXr3DaRp_qEm00"}),"\n",(0,r.jsx)(n.h3,{id:"prepare-sam-key-data",children:"Prepare SAM key data"}),"\n",(0,r.jsx)(n.p,{children:"This process consists of generating, assigning, and certifying the SAM key that is should be authorized to be used on behalf of the user."}),"\n",(0,r.jsxs)(n.p,{children:["When the SAM key is generated, it must be certified. This consists of providing the proof of possession in the form of the CSR to certification authority. How is the certificate requested and issued depends on the implementation of CA Connector identified by ",(0,r.jsx)(n.code,{children:"CA_CONNECTOR_IMPLEMENTATION_CLASS"})," property of the ",(0,r.jsx)(n.code,{children:"EntrustSAMOneTimeCryptoWorker"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Out-of-the-box implementation of the EJBCA connector using Web Services can be used with the SAM crypto worker. The implementation class for this CA connector is ",(0,r.jsx)(n.code,{children:"CA_CONNECTOR_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.sam.onetime.caconnector.EjbcaWSSAMCAConnector"}),". It is expected that this implementation will be moved to generic package in the future release. The configuration properties are same as in case ",(0,r.jsx)(n.a,{href:"https://doc.primekey.com/signserver/signserver-operations/setting-up-one-time-keys#SettingupOnetimeKeys-EJBCAWSCAConnector",children:"EJBCA WS CA Connector"})]})}),"\n",(0,r.jsx)(n.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/fPDDJy9048Rl_ee9NZIHH6882GT3gM0y-14nyRos0svAPzRPBOGO_xkpG4024j2swTS--yuxCxi001qVZ8Ig79_e1_Z2aZDYIl3uKI5b29_pWNWa8ZnDUSm2furcwwhRN0zbWQNBagFi1bOlJnhDPjOP2lludvZ9Yf5mHVaIxJNwpTxbjlG31zo2-wrupfcl-TrKWQagtr1M4tiKfF9XaDm_4hxO4bEPkS2lB0KArA-XjYH0aLeRRf5GJ40mb8Fnteu82ATGu0oSiMlXZNbGLwMzeTgHcwla9fW_snj4F-dWMQs10IVCGz3BiVUePfd-uK-bJQW43pUN9csuyxv2o51xEhIPLcwZPy0JHVSANKIL6tH8kGSc2Ey8jdHZB9622PfJp31D86KYZ8jn5K5_7f1OkiFRiNNNJM0dSLauMJnZ9yyMMS_EVolwyMkYerNG3ViD"}),"\n",(0,r.jsx)(n.p,{children:"As a result of this process, the SAM key data are ready to be activated and used to generate a digital signature on behalf of the user that owns the SAM key."}),"\n",(0,r.jsx)(n.h3,{id:"activate-sam-key-and-sign",children:"Activate SAM key and sign"}),"\n",(0,r.jsx)(n.p,{children:"Once the data to be signed (DTBS) and SAM key is ready, the process of activation the SAM key and signing on behalf of the user can be executed."}),"\n",(0,r.jsxs)(n.p,{children:["For that we need to get Signature Activation Data (SAD) which represents the explicit authorization from the user to sign the DTBS and can be used to generate the digital signature. How is the SAD obtained depends on the implementation of the SAD Provider and it can be configured using the ",(0,r.jsx)(n.code,{children:"SAD_PROVIDER_IMPLEMENTATION_CLASS"})," of the underlying ",(0,r.jsx)(n.code,{children:"CRYPTOTOKEN"})," of the ",(0,r.jsx)(n.code,{children:"EntrustSAMOneTimeCryptoWorker"}),". See ",(0,r.jsx)(n.a,{href:"../sad-providers/overview",children:"SAD Providers"})," for more information."]}),"\n",(0,r.jsx)(n.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/ZL9DImCn4BtxAuPwKR1WaLBeGVhjgLgiu3dTdMv3TpFhP58HyRyxMSksjLARG4YOD-_DUmG0eEV5i8GYlz07-BLrfM5JWCUtW2v1-AmASVMPwNr8EJ5SjjgTkq5xLqg4U42S8lyDg2ypLRE9BOsJK_Xzc4dM6LDmwHOwRatQuzjZwaSIF09FEd5NcA_gD478XMA1N3UEdN3mCkzFdno-s0A7_54AlHAlaQ5v3urvVmGpfetLWHjTU8xXU86vpPoHm1W3i1iZbXoCZ1YuqexhWyc0DafsKkhcjyu8ItIf1sML5O8joXmBTF8ZH4lOnzTgXopGL0CdPRjd-_W_g2r21vlg_0_ea8rwJsrcnUJWQo4LME3AvCje8tXj3zwwB3hQ6TbdYpxEDr9nz3Gy_TdV"}),"\n",(0,r.jsx)(n.p,{children:"The digital signature is eventually obtained from Entrust SAM and returned back to the Signer."}),"\n",(0,r.jsx)(n.h2,{id:"typical-setup-of-onetime-signing",children:"Typical setup of onetime signing"}),"\n",(0,r.jsx)(n.p,{children:"To make the onetime signing work, we typically need the following component workers to be properly configured and activated:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"EntrustSAMCryptoToken - source crypto token for managing SAM keys"}),"\n",(0,r.jsx)(n.li,{children:"EntrustSAMOneTimeCryptoWorker - managing the onetime SAM keys lifecycle"}),"\n",(0,r.jsx)(n.li,{children:"Signer - format of DTBS and execution of the signing process"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"External components like certification authority and SAD provider should be available and are not further discussed in this document. Refer to the installation and configuration guide of these components for details."})}),"\n",(0,r.jsx)(n.h3,{id:"entrustsamcryptotoken",children:"EntrustSAMCryptoToken"}),"\n",(0,r.jsxs)(n.p,{children:["For more information about the ",(0,r.jsx)(n.code,{children:"EntrustSAMCryptoToken"}),", refer to ",(0,r.jsx)(n.a,{href:"../properties",children:"Entrust SAM Crypto Token Properties"})," and ",(0,r.jsx)(n.a,{href:"./basic-crypto-worker",children:"Basic Crypto Worker"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The following is a sample configuration of the ",(0,r.jsx)(n.code,{children:"EntrustSAMCryptoToken"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ENTRUST_CONNECTION_POOL_SIZE=20\nSAD_PROVIDER_PASSWORD=password\nSAD_PROVIDER_URL=http://host.docker.internal:8080\nOTHER_SIGNERS=EntrustSSPUP12\nSAD_PROVIDER_AUTH_TYPE=BASIC\nNAME=EntrustSAMCryptoToken\nENTRUST_TRUST_SELF_SIGNED=true\nKEY_ALIAS_SEPARATOR=_____\nDISABLED=FALSE\nIMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.EntrustSAMCryptoWorker\nSAD_PROVIDER_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.sad.RestSAMSadProvider\nENTRUST_CLIENT_AUTHENTICATION_KEY_ALIAS=sspu1\nENTRUST_SAM_SERVER=https://127.0.0.1:9572\nTYPE=PROCESSABLE\nCRYPTOTOKEN_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.EntrustSAMCryptoToken\nSAD_PROVIDER_USERNAME=admin\n"})}),"\n",(0,r.jsx)(n.h3,{id:"entrustsamonetimecryptoworker",children:"EntrustSAMOneTimeCryptoWorker"}),"\n",(0,r.jsxs)(n.p,{children:["For more information about the ",(0,r.jsx)(n.code,{children:"EntrustSAMOneTimeCryptoWorker"}),", refer to ",(0,r.jsx)(n.a,{href:"./onetime-crypto-worker",children:"OneTime Crypto Worker"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The following is a sample configuration of the ",(0,r.jsx)(n.code,{children:"EntrustSAMOneTimeCryptoWorker"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"TLSCLIENTKEY=ra_signserver_02\nCANAME=DemoClientSubCA\nSUBJECTALTNAME_PATTERN=uri=TID://${TRANSACTION_ID},uri=keyId://${entrustsam.keyid}\nEJBCAWSURL=https://host.docker.internal:8453/ejbca\nUSERNAME_PATTERN=onetime-${TRANSACTION_ID}\nKEYGEN_ALGORITHM=RSA\nOTHER_SIGNERS=RA02CryptoTokenP12\nNAME=EntrustSAMOneTimeCryptoTokenWithEJBCA\nCA_CONNECTOR_IMPLEMENTATION_CLASS=com.czertainly.signserver.trident.EjbcaWSSAMCAConnector\nCRYPTOTOKEN=EntrustSAMCryptoToken\nDISABLED=FALSE\nIMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.EntrustSAMOneTimeCryptoWorker\nENDENTITYPROFILE=DemoDocumentSigningEndEntityProfile\nTRUSTSTOREPATH=/opt/primekey/truststore.jks\nTRUSTSTORETYPE=JKS\nCERTIFICATEPROFILE=DemoDocumentSigningEECertificateProfile\nTRUSTSTOREPASSWORD=changeit\nTYPE=PROCESSABLE\nKEYGEN_SPECIFICATION=2048\nCERTSIGNATUREALGORITHM=SHA256WithRSA\nSUBJECTDN_PATTERN=CN=${AUTHORIZED_USERNAME},UID=${TRANSACTION_ID}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"signer",children:"Signer"}),"\n",(0,r.jsx)(n.p,{children:"The Signer is responsible for the formatting of the signature. Based on your needs, configure available Signer with the following properties:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CRYPTOTOKEN=EntrustSAMOneTimeCryptoTokenWithEJBCA\nAUTHTYPE=org.signserver.server.UsernameAuthorizer\nPROCESSINTRANSACTION=true\nALIASSELECTOR=org.signserver.server.aliasselectors.AuthorizedUsernameAliasSelector\nACCEPT_ALL_USERNAMES=true\nPROCESSINTRANSACTION=true\n"})}),"\n",(0,r.jsx)(n.p,{children:"Because the onetime signing process must run in transaction to secure correct behaviour of the SAM key lifecycle, the Signer must configure the following property:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"PROCESSINTRANSACTION=true\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["The onetime signing operation using the Entrust SAM fails without providing the ",(0,r.jsx)(n.code,{children:"PROCESSINTRANSACTION=true"})," in the metadata of the signing request. This metadata is used to properly handle the state of the SAM key in the database of the SignServer during the transaction."]})}),"\n",(0,r.jsx)(n.p,{children:"The following is a sample configuration of PAdES Signer:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CRYPTOTOKEN=EntrustSAMOneTimeCryptoTokenWithEJBCA\nAUTHTYPE=org.signserver.server.UsernameAuthorizer\nIMPLEMENTATION_CLASS=com.czertainly.signserver.module.pades.signer.PAdESSigner\nPROCESSINTRANSACTION=true\nALIASSELECTOR=org.signserver.server.aliasselectors.AuthorizedUsernameAliasSelector\nACCEPT_ALL_USERNAMES=true\nSIGNATURE_LEVEL=PAdES-BASELINE-B\nTYPE=PROCESSABLE\nDIGESTALGORITHM=SHA256\nDISABLEKEYUSAGECOUNTER=true\nNAME=PAdES-Baseline-B-EntrustSAM-OneTime\n"})}),"\n",(0,r.jsx)(n.h2,{id:"signing-process-execution",children:"Signing process execution"}),"\n",(0,r.jsx)(n.p,{children:"When the configuration is ready, you can request signing through any of the supported interfaces of the SignServer."}),"\n",(0,r.jsxs)(n.p,{children:["The signing request must contain ",(0,r.jsx)(n.code,{children:"IS_SIGNING_OPERATION"})," metadata:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"REQUEST_METADATA.IS_SIGNING_OPERATION=true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Otherwise only dummy onetime crypto instance of the ",(0,r.jsx)(n.code,{children:"EntrustSAMOneTimeCryptoWorker"})," will be provided."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);