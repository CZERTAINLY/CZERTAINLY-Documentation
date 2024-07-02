"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4451],{83498:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(74848),a=i(28453);const o={},l="Troubleshooting",r={id:"certificate-key/installation-guide/deployment/deployment-helm/troubleshooting",title:"Troubleshooting",description:"Timed out waiting for the condition",source:"@site/docs/10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm/troubleshooting.md",sourceDirName:"10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm",slug:"/certificate-key/installation-guide/deployment/deployment-helm/troubleshooting",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-helm/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configurable parameters",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-helm/configurable-parameters"},next:{title:"Upgrading",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-helm/upgrading"}},s={},c=[{value:"Timed out waiting for the condition",id:"timed-out-waiting-for-the-condition",level:2},{value:"It seems that I cannot log in with my generated administrator certificate",id:"it-seems-that-i-cannot-log-in-with-my-generated-administrator-certificate",level:2},{value:"Upgrade failed - invalid: spec.selector",id:"upgrade-failed---invalid-specselector",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(t.h2,{id:"timed-out-waiting-for-the-condition",children:"Timed out waiting for the condition"}),"\n",(0,n.jsx)(t.p,{children:"When the installation or upgrade fails with the following reason:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"Error: INSTALLATION FAILED: failed post-install: timed out waiting for the condition\n"})}),"\n",(0,n.jsx)(t.p,{children:"It is most probably because of reaching the default Helm timeout during deployment when Helm is trying to download all missing container images. This should not happen when you have all required container images already present on the target cluster."}),"\n",(0,n.jsxs)(t.p,{children:["If you are facing timeout issues, increase the Helm timeout using ",(0,n.jsx)(t.code,{children:"--timeout"})," switch, for example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"helm install --namespace czertainly -f czertainly-values.yaml --set-file trusted.certificates=trusted-certificates.pem czertainly-tlm oci://harbor.3key.company/czertainly-helm/czertainly --timeout 1h\n"})}),"\n",(0,n.jsx)(t.h2,{id:"it-seems-that-i-cannot-log-in-with-my-generated-administrator-certificate",children:"It seems that I cannot log in with my generated administrator certificate"}),"\n",(0,n.jsxs)(t.p,{children:["When you have installed the CZERTAINLY usign the auto-generated internal admin CA and issued administrator certificate for your registered administrator, it may happen that you overrride the list of trusted certificates and miss the create internal admin CA certificate. In this case, read the admin CA certificate, include it in the list of trusted certificates, and upgrade the configuration of the CZERTAINLY. You can use the following command to get the admin CA certificate in PEM format in file ",(0,n.jsx)(t.code,{children:"admin-ca-certificate.pem"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl get secrets --namespace czertainly admin-ca-keypair -o jsonpath='{.data.tls\\.crt}' | base64 --decode > admin-ca-certificate.pem\n"})}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-failed---invalid-specselector",children:"Upgrade failed - invalid: spec.selector"}),"\n",(0,n.jsx)(t.p,{children:"When you are upgrading CZERTAINLY platform and you get similar error like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'UPGRADE FAILED: cannot patch \\"api-gateway-deployment\\" with kind Deployment: Deployment.apps \\"api-gateway-deployment\\" is invalid: spec.selector: Invalid value: v1.LabelSelector{MatchLabels:map[string]string{\\"app.kubernetes.io/instance\\":\\"czertainly-tlm\\", \\"app.kubernetes.io/name\\":\\"api-gateway\\"}, MatchExpressions:[]v1.LabelSelectorRequirement(nil)}: field is immutable && cannot patch \\"auth-opa-policies-deployment\\" with kind Deployment: Deployment.apps \\"auth-opa-policies-deployment\\" is invalid: spec.selector: Invalid value: v1.LabelSelector{MatchLabels:map[string]string{\\"app.kubernetes.io/instance\\":\\"czertainly-tlm\\", \\"app.kubernetes.io/name\\":\\"auth-opa-policies\\"}, MatchExpressions:[]v1.LabelSelectorRequirement(nil)}: field is immutable && ...\n'})}),"\n",(0,n.jsxs)(t.p,{children:["it means that we have updated selectors for the deployment which is an immutable field (see ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#selector",children:"Kubernetes Deployment - Selectors"})," for more details)."]}),"\n",(0,n.jsx)(t.p,{children:"In this case, it is recommended to uninstall the CZERTAINLY and install it again. CZERTAINLY is designed to be stateless, so you should not lose any data."})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>r});var n=i(96540);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);