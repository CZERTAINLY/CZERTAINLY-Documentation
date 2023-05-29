"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7095],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58866:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={},s="Upgrading",u={unversionedId:"certificate-key/installation-guide/deployment/deployment-helm/upgrading",id:"certificate-key/installation-guide/deployment/deployment-helm/upgrading",title:"Upgrading",description:"Before upgrading, make sure you have backed up your configuration, trusted certificates and data to be able to restore the platform in case of any issues.",source:"@site/docs/10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm/upgrading.md",sourceDirName:"10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm",slug:"/certificate-key/installation-guide/deployment/deployment-helm/upgrading",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-helm/upgrading",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm/upgrading.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-helm/troubleshooting"},next:{title:"Deployment using Virtual Appliance",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/overview"}},c={},d=[{value:"To 2.7.1",id:"to-271",level:2},{value:"Enabling Utils Service",id:"enabling-utils-service",level:3},{value:"To 2.7.0",id:"to-270",level:2},{value:"Cleanup of the global parameters",id:"cleanup-of-the-global-parameters",level:3},{value:"Hardening of the deployment",id:"hardening-of-the-deployment",level:3},{value:"Optional services",id:"optional-services",level:3},{value:"To 2.6.0",id:"to-260",level:2},{value:"ACME endpoint and trusted IPs",id:"acme-endpoint-and-trusted-ips",level:3},{value:"Additional connector sub-charts",id:"additional-connector-sub-charts",level:3},{value:"To 2.5.2",id:"to-252",level:2},{value:"Container image configuration",id:"container-image-configuration",level:3},{value:"Additional connector sub-charts",id:"additional-connector-sub-charts-1",level:3}],p={toc:d},m="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrading"},"Upgrading"),(0,o.kt)("admonition",{title:"Before upgrading",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Before upgrading, make sure you have backed up your configuration, trusted certificates and data to be able to restore the platform in case of any issues."),(0,o.kt)("p",{parentName:"admonition"},"Never downgrade the platform version, as it may cause data loss or other issues. Be sure that you are upgrading to higher version of the Helm chart.")),(0,o.kt)("admonition",{title:"Upgrade vs Install",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Platform can be installed from scratch anytime when you have a backup of your database and configuration. New installation through the Helm chart will deploy new environment connecting to the same database. You can install multiple instances of the platform in different clusters and infrastructures with the same database.")),(0,o.kt)("p",null,"The following contains important information and instructions about upgrading Helm charts."),(0,o.kt)("p",null,"Upgrading Helm chart is done by running the ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade")," command. The command upgrades the platform to the specified version. The command can be used to upgrade the platform to the same version with changed parameters."),(0,o.kt)("h2",{id:"to-271"},"To 2.7.1"),(0,o.kt)("h3",{id:"enabling-utils-service"},"Enabling Utils Service"),(0,o.kt)("p",null,"Enabling parameter of Utils Service was moved from the ",(0,o.kt)("inlineCode",{parentName:"p"},"utilsService.enabled")," to global parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  utils:\n    enabled: false\n")),(0,o.kt)("h2",{id:"to-270"},"To 2.7.0"),(0,o.kt)("h3",{id:"cleanup-of-the-global-parameters"},"Cleanup of the global parameters"),(0,o.kt)("p",null,"The global parameters were cleaned up and reorganized."),(0,o.kt)("p",null,"The following default parameters were removed. They must be explicitly set now in the values, if you want to use them. Check your current configuration and update it accordingly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  database:\n    type: ""\n    host: ""\n    port: ""\n    name: ""\n    username: ""\n    password: ""\n  trusted:\n    certificates: ""\n')),(0,o.kt)("p",null,"Hostname was introduced as a global parameter that can be shared across the deployment. The main reason is optional implementation of the internal Keycloak service that requires to know the hostname of the platform to properly set URLs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  hostName: ""\n')),(0,o.kt)("p",null,"Administrator registration information is introduced as global parameters. This allows to share for example the same data with internal Keycloak, if enabled. If you want to keep the client certificate-based authentication for administrator, configure certificate in the ",(0,o.kt)("inlineCode",{parentName:"p"},"registerAdmin.admin.certificate")," parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  admin:\n    username: ""\n    password: ""\n    name: ""\n    surname: ""\n    email: ""\n')),(0,o.kt)("p",null,"Be aware that you can always enable auto-provisioning of the users with JSON ID using the following parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'authService:\n  createUnknownUsers: "true"\n  createUnknownRoles: "true"\n')),(0,o.kt)("h3",{id:"hardening-of-the-deployment"},"Hardening of the deployment"),(0,o.kt)("p",null,"The deployment was hardened to be more secure and stable. The following changes were made for every container:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"running as non-root user"),(0,o.kt)("li",{parentName:"ul"},"running with read-only root filesystem"),(0,o.kt)("li",{parentName:"ul"},"specified default ",(0,o.kt)("inlineCode",{parentName:"li"},"securityContext")),(0,o.kt)("li",{parentName:"ul"},"added configuration and default values for ",(0,o.kt)("inlineCode",{parentName:"li"},"livenessProbe"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"readinessProbe")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"startupProbe")),(0,o.kt)("li",{parentName:"ul"},"added configuration for resource limits and requests")),(0,o.kt)("h3",{id:"optional-services"},"Optional services"),(0,o.kt)("p",null,"New optional services were added to the umbrella chart:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Keycloak internal service"),(0,o.kt)("li",{parentName:"ul"},"Utils service")),(0,o.kt)("p",null,"Keycloak internal service is disabled by default and can be enabled by setting the following values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  keycloak:\n    enabled: true\n    # client secret must be set if keycloak is enabled\n    clientSecret: ""\n')),(0,o.kt)("p",null,"Utils service is disabled by default and can be enabled by setting the following values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"utilsService:\n  enabled: false\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/releases/tag/2.7.0"},"CZERTAINLY Helm chart 2.7.0 release note")," for more information."),(0,o.kt)("h2",{id:"to-260"},"To 2.6.0"),(0,o.kt)("h3",{id:"acme-endpoint-and-trusted-ips"},"ACME endpoint and trusted IPs"),(0,o.kt)("p",null,"The API gateway sub-chart was updated to support ACME endpoint and trusted IPs.\nTrusted IP addresses defines blocks that are known to send correct ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-*")," headers which is important to generate correct URLs for the clients communicating with the platform behind gateway and proxy."),(0,o.kt)("p",null,"Trusted IP addresses can be configured in the API gateway dependency for the umbrella:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiGateway:\n  trustedIps: ""\n')),(0,o.kt)("h3",{id:"additional-connector-sub-charts"},"Additional connector sub-charts"),(0,o.kt)("p",null,"The Software Cryptography Provider connector was added as sub-chart to the umbrella chart."),(0,o.kt)("p",null,"When you enable new connector during upgrade, you need to register the connector manually in the platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"softwareCryptographyProvider:\n  enabled: false\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/releases/tag/2.6.0"},"CZERTAINLY Helm chart 2.6.0 release note")," for more information."),(0,o.kt)("h2",{id:"to-252"},"To 2.5.2"),(0,o.kt)("h3",{id:"container-image-configuration"},"Container image configuration"),(0,o.kt)("p",null,"Configuration of container registry has changed. The new configuration is more flexible and allows to use multiple container registries, including configuration of registry globally."),(0,o.kt)("p",null,"Every image that is supported in the umbrella chart or sub-charts now has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'image:\n  # default registry name\n  registry: docker.io\n  # default repository name\n  repository: 3keycompany/czertainly-core\n  # default image tag\n  tag: "2.5.2"\n  # the digest to be used instead of the tag, will override tag if specified\n  digest: ""\n  # default image pull policy\n  pullPolicy: IfNotPresent\n  # array of image pull secrets\n  pullSecrets: []\n')),(0,o.kt)("p",null,"Container registry and image pull secrets can be also configured globally for the umbrella chart and all of its sub-charts using global parameters, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  image:\n    # registry name\n    registry: "harbor.czertainly.online"\n    # array of secret names\n    pullSecrets:\n      - harbor-registry-credentials\n      - dockerhub-registry-credentials\n')),(0,o.kt)("h3",{id:"additional-connector-sub-charts-1"},"Additional connector sub-charts"),(0,o.kt)("p",null,"The following sub-charts were added to support additional connectors as optional components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cryptosense Discovery Provider"),(0,o.kt)("li",{parentName:"ul"},"Network Discovery Provider"),(0,o.kt)("li",{parentName:"ul"},"Keystore Entity Provider")),(0,o.kt)("p",null,"When you enable new connector during upgrade, you need to register the connector manually in the platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"cryptosenseDiscoveryProvider:\n  enabled: false\n\nnetworkDiscoveryProvider:\n  enabled: false\n\nkeystoreEntityProvider:\n  enabled: false\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/releases/tag/2.5.2"},"CZERTAINLY Helm chart 2.5.2 release note")," for more information."))}g.isMDXComponent=!0}}]);