"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7095],{51652:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(85893),a=r(11151);const i={},o="Upgrading",s={id:"certificate-key/installation-guide/deployment/deployment-helm/upgrading",title:"Upgrading",description:"Before upgrading, make sure you have backed up your configuration, trusted certificates and data to be able to restore the platform in case of any issues.",source:"@site/docs/10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm/upgrading.md",sourceDirName:"10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm",slug:"/certificate-key/installation-guide/deployment/deployment-helm/upgrading",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-helm/upgrading",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm/upgrading.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-helm/troubleshooting"},next:{title:"Deployment using Virtual Appliance",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/overview"}},l={},c=[{value:"To 2.11.0-1",id:"to-2110-1",level:2},{value:"Additional connector sub-charts",id:"additional-connector-sub-charts",level:3},{value:"To 2.11.0",id:"to-2110",level:2},{value:"New PyADCS connector",id:"new-pyadcs-connector",level:3},{value:"To 2.9.0",id:"to-290",level:2},{value:"Persistent volume provisioner",id:"persistent-volume-provisioner",level:3},{value:"Container image configuration and repository",id:"container-image-configuration-and-repository",level:3},{value:"Customization of the deployment",id:"customization-of-the-deployment",level:3},{value:"To 2.8.0",id:"to-280",level:2},{value:"To 2.7.1",id:"to-271",level:2},{value:"Enabling Utils Service",id:"enabling-utils-service",level:3},{value:"To 2.7.0",id:"to-270",level:2},{value:"Cleanup of the global parameters",id:"cleanup-of-the-global-parameters",level:3},{value:"Hardening of the deployment",id:"hardening-of-the-deployment",level:3},{value:"Optional services",id:"optional-services",level:3},{value:"To 2.6.0",id:"to-260",level:2},{value:"ACME endpoint and trusted IPs",id:"acme-endpoint-and-trusted-ips",level:3},{value:"Additional connector sub-charts",id:"additional-connector-sub-charts-1",level:3},{value:"To 2.5.2",id:"to-252",level:2},{value:"Container image configuration",id:"container-image-configuration",level:3},{value:"Additional connector sub-charts",id:"additional-connector-sub-charts-2",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"upgrading",children:"Upgrading"}),"\n",(0,t.jsxs)(n.admonition,{title:"Before upgrading",type:"warning",children:[(0,t.jsx)(n.p,{children:"Before upgrading, make sure you have backed up your configuration, trusted certificates and data to be able to restore the platform in case of any issues."}),(0,t.jsx)(n.p,{children:"Never downgrade the platform version, as it may cause data loss or other issues. Be sure that you are upgrading to higher version of the Helm chart."})]}),"\n",(0,t.jsx)(n.admonition,{title:"Upgrade vs Install",type:"info",children:(0,t.jsx)(n.p,{children:"Platform can be installed from scratch anytime when you have a backup of your database and configuration. New installation through the Helm chart will deploy new environment connecting to the same database. You can install multiple instances of the platform in different clusters and infrastructures with the same database."})}),"\n",(0,t.jsx)(n.p,{children:"The following contains important information and instructions about upgrading Helm charts."}),"\n",(0,t.jsxs)(n.p,{children:["Upgrading Helm chart is done by running the ",(0,t.jsx)(n.code,{children:"helm upgrade"})," command. The command upgrades the platform to the specified version. The command can be used to upgrade the platform to the same version with changed parameters."]}),"\n",(0,t.jsx)(n.h2,{id:"to-2110-1",children:"To 2.11.0-1"}),"\n",(0,t.jsx)(n.h3,{id:"additional-connector-sub-charts",children:"Additional connector sub-charts"}),"\n",(0,t.jsx)(n.p,{children:"The following sub-charts were added to support additional connectors as optional components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"HashiCorp Vault Connector"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When you enable new connector during upgrade, you need to register the connector manually in the platform:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"hashicorpVaultConnector:\n  enabled: false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/releases/tag/2.11.0-1",children:"CZERTAINLY Helm chart 2.11.0-1 release notes"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"to-2110",children:"To 2.11.0"}),"\n",(0,t.jsx)(n.h3,{id:"new-pyadcs-connector",children:"New PyADCS connector"}),"\n",(0,t.jsx)(n.p,{children:"To resolve compatibility issues and improve performance of the ADCS certificate related operations and authentication, the new ADCS connector was introduced based on Python technology.\nMS ADCS connector is considered from this version as deprecated and will be removed in the future."}),"\n",(0,t.jsx)(n.p,{children:"When you enable PyADCS connector during upgrade, you need to register the connector manually in the platform:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"pyAdcsConnector:\n  enabled: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/releases/tag/2.11.0",children:"CZERTAINLY Helm chart 2.11.0 release notes"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"to-290",children:"To 2.9.0"}),"\n",(0,t.jsx)(n.h3,{id:"persistent-volume-provisioner",children:"Persistent volume provisioner"}),"\n",(0,t.jsxs)(n.p,{children:["This version introduced requirement for the persistent volume provisioner support in the underlying infrastructure. The ",(0,t.jsx)(n.code,{children:"StorageClass"})," is required to be available in the cluster. The volumes are dynamically provisioned by default, but it can be changed by setting existing persistent volume claim or disabling persistence (which will use ",(0,t.jsx)(n.code,{children:"emptyDir"})," volume)."]}),"\n",(0,t.jsxs)(n.p,{children:["The list of components that need persistence can be found in the ",(0,t.jsx)(n.a,{href:"/docs/certificate-key/installation-guide/deployment/deployment-helm/overview#persistence",children:"Overview - Persistence"})," section."]}),"\n",(0,t.jsx)(n.admonition,{title:"Persistent volume claim",type:"warning",children:(0,t.jsxs)(n.p,{children:["The provisioner of the persistent volume must be properly configured to upgrade the platform, in case the dynamic storage should be created. In case the dynamic provisioning is not enabled, the persistent volume claim must be created manually before upgrading the platform. Form more information see ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/",children:"Dynamic Volume Provisioning"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"container-image-configuration-and-repository",children:"Container image configuration and repository"}),"\n",(0,t.jsxs)(n.p,{children:["To support multiple container registries, including better support for privately managed registries, where there are different naming conventions and images are organized in projects, we have split image ",(0,t.jsx)(n.code,{children:"repository"})," property to ",(0,t.jsx)(n.code,{children:"repository"})," and ",(0,t.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This allows to control the repository name using the global configuration, providing better support for private repositories with different organization of images and repositories. For example the following values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"global:\n  image:\n    registry: myregistry.com\n    repository: czertainly/project\n\nimage:\n  # default registry name\n  registry: docker.io\n  repository: 3keycompany\n  name: czertainly-core\n  tag: 2.9.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["will result in the following image name: ",(0,t.jsx)(n.code,{children:"myregistry.com/czertainly/project/czertainly-core:2.9.0"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"customization-of-the-deployment",children:"Customization of the deployment"}),"\n",(0,t.jsx)(n.p,{children:"The deployment of the platform can be customized using the following parameters:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"initContainers: []\nsidecarContainers: []\nadditionalVolumes: []\nadditionalVolumeMounts: []\nadditionalPorts: []\nadditionalEnv:\n  variables: []\n  configMaps: []\n  secrets: []\n"})}),"\n",(0,t.jsx)(n.p,{children:"When the parameters are set globally, they are applied to all charts and sub-charts. When the parameters are set for specific chart or sub-chart, they are applied only to the sub-chart. If they global and local parameters are defined, they are merged together."}),"\n",(0,t.jsx)(n.h2,{id:"to-280",children:"To 2.8.0"}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"NodePort"})," to access the platform should be configured on API Gateway level, not for the Core service (as a service in ",(0,t.jsx)(n.code,{children:"czertainly"})," chart). The ",(0,t.jsx)(n.code,{children:"nodePort"})," parameter is included for both ",(0,t.jsx)(n.code,{children:"admin"})," and ",(0,t.jsx)(n.code,{children:"consumer"})," service in ",(0,t.jsx)(n.code,{children:"api-gateway-kong"})," sub-chart. The proper way to configure ",(0,t.jsx)(n.code,{children:"NodePort"})," is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'ingress:\n  # disable ingress as we are going to use direct access to the platform\n  enabled: false\n\napiGateway:\n  service:\n    # use NodePort to access the platform\n    type: "NodePort"\n    consumer:\n      port: 8000\n      nodePort: 30080\n    admin:\n      port: 8001\n      nodePort: 30081\n'})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/releases/tag/2.8.0",children:"CZERTAINLY Helm chart 2.8.0 release notes"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"to-271",children:"To 2.7.1"}),"\n",(0,t.jsx)(n.h3,{id:"enabling-utils-service",children:"Enabling Utils Service"}),"\n",(0,t.jsxs)(n.p,{children:["Enabling parameter of Utils Service was moved from the ",(0,t.jsx)(n.code,{children:"utilsService.enabled"})," to global parameters:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"global:\n  utils:\n    enabled: false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/releases/tag/2.7.1",children:"CZERTAINLY Helm chart 2.7.1 release notes"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"to-270",children:"To 2.7.0"}),"\n",(0,t.jsx)(n.h3,{id:"cleanup-of-the-global-parameters",children:"Cleanup of the global parameters"}),"\n",(0,t.jsx)(n.p,{children:"The global parameters were cleaned up and reorganized."}),"\n",(0,t.jsx)(n.p,{children:"The following default parameters were removed. They must be explicitly set now in the values, if you want to use them. Check your current configuration and update it accordingly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'global:\n  database:\n    type: ""\n    host: ""\n    port: ""\n    name: ""\n    username: ""\n    password: ""\n  trusted:\n    certificates: ""\n'})}),"\n",(0,t.jsx)(n.p,{children:"Hostname was introduced as a global parameter that can be shared across the deployment. The main reason is optional implementation of the internal Keycloak service that requires to know the hostname of the platform to properly set URLs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'global:\n  hostName: ""\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Administrator registration information is introduced as global parameters. This allows to share for example the same data with internal Keycloak, if enabled. If you want to keep the client certificate-based authentication for administrator, configure certificate in the ",(0,t.jsx)(n.code,{children:"registerAdmin.admin.certificate"})," parameter:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'global:\n  admin:\n    username: ""\n    password: ""\n    name: ""\n    surname: ""\n    email: ""\n'})}),"\n",(0,t.jsx)(n.p,{children:"Be aware that you can always enable auto-provisioning of the users with JSON ID using the following parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'authService:\n  createUnknownUsers: "true"\n  createUnknownRoles: "true"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"hardening-of-the-deployment",children:"Hardening of the deployment"}),"\n",(0,t.jsx)(n.p,{children:"The deployment was hardened to be more secure and stable. The following changes were made for every container:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"running as non-root user"}),"\n",(0,t.jsx)(n.li,{children:"running with read-only root filesystem"}),"\n",(0,t.jsxs)(n.li,{children:["specified default ",(0,t.jsx)(n.code,{children:"securityContext"})]}),"\n",(0,t.jsxs)(n.li,{children:["added configuration and default values for ",(0,t.jsx)(n.code,{children:"livenessProbe"}),", ",(0,t.jsx)(n.code,{children:"readinessProbe"})," and ",(0,t.jsx)(n.code,{children:"startupProbe"})]}),"\n",(0,t.jsx)(n.li,{children:"added configuration for resource limits and requests"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"optional-services",children:"Optional services"}),"\n",(0,t.jsx)(n.p,{children:"New optional services were added to the umbrella chart:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Keycloak internal service"}),"\n",(0,t.jsx)(n.li,{children:"Utils service"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Keycloak internal service is disabled by default and can be enabled by setting the following values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'global:\n  keycloak:\n    enabled: true\n    # client secret must be set if keycloak is enabled\n    clientSecret: ""\n'})}),"\n",(0,t.jsx)(n.p,{children:"Utils service is disabled by default and can be enabled by setting the following values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"utilsService:\n  enabled: false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/releases/tag/2.7.0",children:"CZERTAINLY Helm chart 2.7.0 release notes"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"to-260",children:"To 2.6.0"}),"\n",(0,t.jsx)(n.h3,{id:"acme-endpoint-and-trusted-ips",children:"ACME endpoint and trusted IPs"}),"\n",(0,t.jsxs)(n.p,{children:["The API gateway sub-chart was updated to support ACME endpoint and trusted IPs.\nTrusted IP addresses defines blocks that are known to send correct ",(0,t.jsx)(n.code,{children:"X-Forwarded-*"})," headers which is important to generate correct URLs for the clients communicating with the platform behind gateway and proxy."]}),"\n",(0,t.jsx)(n.p,{children:"Trusted IP addresses can be configured in the API gateway dependency for the umbrella:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiGateway:\n  trustedIps: ""\n'})}),"\n",(0,t.jsx)(n.h3,{id:"additional-connector-sub-charts-1",children:"Additional connector sub-charts"}),"\n",(0,t.jsx)(n.p,{children:"The Software Cryptography Provider connector was added as sub-chart to the umbrella chart."}),"\n",(0,t.jsx)(n.p,{children:"When you enable new connector during upgrade, you need to register the connector manually in the platform:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"softwareCryptographyProvider:\n  enabled: false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/releases/tag/2.6.0",children:"CZERTAINLY Helm chart 2.6.0 release notes"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"to-252",children:"To 2.5.2"}),"\n",(0,t.jsx)(n.h3,{id:"container-image-configuration",children:"Container image configuration"}),"\n",(0,t.jsx)(n.p,{children:"Configuration of container registry has changed. The new configuration is more flexible and allows to use multiple container registries, including configuration of registry globally."}),"\n",(0,t.jsx)(n.p,{children:"Every image that is supported in the umbrella chart or sub-charts now has the following structure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'image:\n  # default registry name\n  registry: docker.io\n  # default repository name\n  repository: 3keycompany/czertainly-core\n  # default image tag\n  tag: "2.5.2"\n  # the digest to be used instead of the tag, will override tag if specified\n  digest: ""\n  # default image pull policy\n  pullPolicy: IfNotPresent\n  # array of image pull secrets\n  pullSecrets: []\n'})}),"\n",(0,t.jsx)(n.p,{children:"Container registry and image pull secrets can be also configured globally for the umbrella chart and all of its sub-charts using global parameters, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'global:\n  image:\n    # registry name\n    registry: "harbor.czertainly.online"\n    # array of secret names\n    pullSecrets:\n      - harbor-registry-credentials\n      - dockerhub-registry-credentials\n'})}),"\n",(0,t.jsx)(n.h3,{id:"additional-connector-sub-charts-2",children:"Additional connector sub-charts"}),"\n",(0,t.jsx)(n.p,{children:"The following sub-charts were added to support additional connectors as optional components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cryptosense Discovery Provider"}),"\n",(0,t.jsx)(n.li,{children:"Network Discovery Provider"}),"\n",(0,t.jsx)(n.li,{children:"Keystore Entity Provider"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When you enable new connector during upgrade, you need to register the connector manually in the platform:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"cryptosenseDiscoveryProvider:\n  enabled: false\n\nnetworkDiscoveryProvider:\n  enabled: false\n\nkeystoreEntityProvider:\n  enabled: false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/releases/tag/2.5.2",children:"CZERTAINLY Helm chart 2.5.2 release notes"})," for more information."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(67294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);