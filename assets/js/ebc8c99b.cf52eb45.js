"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8267],{52517:function(n,t,e){e.r(t),e.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return u}});var i=e(85893),o=e(11151);const r={},s="Entrust SAM Sample OneTime Configuration",a={id:"signing/sam-integration/entrust-sam/samples/sample-onetime-configuration",title:"Entrust SAM Sample OneTime Configuration",description:"The following is a sample configuration of the EntrustSAMOneTimeCryptoToken that authenticates to EJBCA to issue a certificate:",source:"@site/docs/30-signing/30-sam-integration/07-entrust-sam/11-samples/04-sample-onetime-configuration.md",sourceDirName:"30-signing/30-sam-integration/07-entrust-sam/11-samples",slug:"/signing/sam-integration/entrust-sam/samples/sample-onetime-configuration",permalink:"/docs/signing/sam-integration/entrust-sam/samples/sample-onetime-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/30-sam-integration/07-entrust-sam/11-samples/04-sample-onetime-configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entrust SAM Sample Configuration",permalink:"/docs/signing/sam-integration/entrust-sam/samples/sample-configuration"},next:{title:"Dynamic Configuration Signer Sample Configuration",permalink:"/docs/signing/sam-integration/entrust-sam/samples/sample-dynamic-config-signer"}},c={},u=[];function E(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"entrust-sam-sample-onetime-configuration",children:"Entrust SAM Sample OneTime Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["The following is a sample configuration of the ",(0,i.jsx)(t.code,{children:"EntrustSAMOneTimeCryptoToken"})," that authenticates to EJBCA to issue a certificate:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"# Type of worker\nWORKERGENID1.TYPE=PROCESSABLE\n\n# Name for other workers to reference this worker\nWORKERGENID1.NAME=EntrustSAMOneTimeCryptoTokenWithEJBCA\n\n# EntrustSAMOneTimeCryptoToken need already configured EntrustSAMCryptoToken\nWORKERGENID1.IMPLEMENTATION_CLASS=com.czertainly.signserver.module.sam.onetime.entrust.EntrustSAMOneTimeCryptoWorker\nWORKERGENID1.CRYPTOTOKEN=EntrustSAMCryptoToken\n\n# Configuration to access EJBCA and issue certificates\nWORKERGENID1.OTHER_SIGNERS=EJBCAClientKeyStore\nWORKERGENID1.TLSCLIENTKEY=ra_signserver_02\nWORKERGENID1.CA_CONNECTOR_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.sam.onetime.caconnector.EjbcaWSSAMCAConnector\nWORKERGENID1.EJBCAWSURL=https://lab01.czertainly.com:8453/ejbca\nWORKERGENID1.KEYGEN_ALGORITHM=RSA\nWORKERGENID1.KEYGEN_SPECIFICATION=2048\nWORKERGENID1.ENDENTITYPROFILE=DemoDocumentSigningEndEntityProfile\nWORKERGENID1.CANAME=DemoClientSubCA\nWORKERGENID1.CERTSIGNATUREALGORITHM=SHA256WithRSA\nWORKERGENID1.USERNAME_PATTERN=onetime-${TRANSACTION_ID}\nWORKERGENID1.SUBJECTDN_PATTERN=CN=${AUTHORIZED_USERNAME},UID=${TRANSACTION_ID}\n\n# Truststore for the connection with the EJBCA\nWORKERGENID1.TRUSTSTOREPATH=/opt/primekey/truststore.jks\nWORKERGENID1.TRUSTSTORETYPE=JKS\nWORKERGENID1.TRUSTSTOREPASSWORD=******\n"})})]})}function m(n={}){const{wrapper:t}={...(0,o.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(E,{...n})}):E(n)}},11151:function(n,t,e){e.d(t,{Z:function(){return a},a:function(){return s}});var i=e(67294);const o={},r=i.createContext(o);function s(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);