"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[966],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95369:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={},s="Initialization",c={unversionedId:"certificate-key/installation-guide/deployment/deployment-appliance/initialization",id:"certificate-key/installation-guide/deployment/deployment-appliance/initialization",title:"Initialization",description:"To make initial configuration of virtual appliance, you must log into it using default credentials:",source:"@site/docs/10-certificate-key/03-installation-guide/04-deployment/06-deployment-appliance/03-initialization.md",sourceDirName:"10-certificate-key/03-installation-guide/04-deployment/06-deployment-appliance",slug:"/certificate-key/installation-guide/deployment/deployment-appliance/initialization",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/initialization",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment using Virtual Appliance",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/overview"},next:{title:"Text-based user interface",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/TUI/intro"}},p={},u=[{value:"Change hostname and networking parameters",id:"change-hostname-and-networking-parameters",level:2},{value:"Update system and packages",id:"update-system-and-packages",level:2},{value:"TLS certificate for CZERTAINLY interface",id:"tls-certificate-for-czertainly-interface",level:2},{value:"Trusted certificates list",id:"trusted-certificates-list",level:2},{value:"Database",id:"database",level:2},{value:"Credentials for CZERTAINLY docker repository",id:"credentials-for-czertainly-docker-repository",level:2},{value:"Configure CZERTAINLY",id:"configure-czertainly",level:2},{value:"Install CZERTAINLY",id:"install-czertainly",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"To make initial configuration of virtual appliance, you must log into it using default credentials:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"username"),": czertainly"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"password"),": newgenerationtrustcare")),(0,i.kt)("p",null,"When you are successfully logged in, you will see the Text-based User Interface (",(0,i.kt)("a",{parentName:"p",href:"./TUI/intro"},(0,i.kt)("strong",{parentName:"a"},"TUI")),") for management of the virtual appliance."),(0,i.kt)("p",null,"The following steps needs to be done to initialize the virtual appliance."),(0,i.kt)("admonition",{title:"Mandatory steps",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Bold items are mandatory even for testing purposes.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#change-hostname-and-networking-parameters"},"Change hostname and networking parameters")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#update-system-and-packages"},(0,i.kt)("strong",{parentName:"a"},"Update the system"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#tls-certificate-for-czertainly-interface"},"Setup TLS certificate")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#trusted-certificates-list"},"Trusted certificate list")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#database"},"Configure database")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#credentials-for-czertainly-docker-repository"},"Configure credentials to CZERTAINLY docker repository")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#configure-czertainly"},(0,i.kt)("strong",{parentName:"a"},"Configure CZERTAINLY"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#install-czertainly"},(0,i.kt)("strong",{parentName:"a"},"Install CZERTAINLY")))),(0,i.kt)("h2",{id:"change-hostname-and-networking-parameters"},"Change hostname and networking parameters"),(0,i.kt)("p",null,"By default, the virtual appliance is configured to use dynamically assigned IP address from a DHCP server."),(0,i.kt)("p",null,"Default hostname ",(0,i.kt)("inlineCode",{parentName:"p"},"czertainly")," and domain ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," may be useful for development and testing purposes. You need add name ",(0,i.kt)("inlineCode",{parentName:"p"},"czertainly.local")," and VM IP into your ",(0,i.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/"},"hosts\nfile"),". In production, you will need to set a hostname that will be configured in DNS. To do so, select ",(0,i.kt)("strong",{parentName:"p"},"Main menu -> ",(0,i.kt)("a",{parentName:"strong",href:"./TUI/main-menu#configure-hostname"},"Configure hostname")),"."),(0,i.kt)("p",null,"If your network policy requires using HTTP proxy, you can configure it by selecting ",(0,i.kt)("strong",{parentName:"p"},"Main menu -> ",(0,i.kt)("a",{parentName:"strong",href:"./TUI/main-menu#configure-http-proxy"},"Configure HTTP proxy")),"."),(0,i.kt)("h2",{id:"update-system-and-packages"},"Update system and packages"),(0,i.kt)("p",null,"It is always good to have current version of ",(0,i.kt)("inlineCode",{parentName:"p"},"czertainly-appliance-tools")," and Debian software. To update packages, select from the main menu ",(0,i.kt)("strong",{parentName:"p"},"Advanced options -> Update Operating System"),"."),(0,i.kt)("h2",{id:"tls-certificate-for-czertainly-interface"},"TLS certificate for CZERTAINLY interface"),(0,i.kt)("p",null,"CZERTAINLY is controlled via a web interface. For testing purposes, a self-signed certificate is automatically generated. If you aim to put CZERTAINLY into production, you want to upload a certificate from your internal CA. To do so, select ",(0,i.kt)("strong",{parentName:"p"},"Main menu -> ",(0,i.kt)("a",{parentName:"strong",href:"./TUI/main-menu#configure-ingress-tls-certificates"},"Configure ingress TLS certificates")),"."),(0,i.kt)("h2",{id:"trusted-certificates-list"},"Trusted certificates list"),(0,i.kt)("p",null,"Access to the web interface of CZERTAINLY is authenticated by a client certificate by default."),(0,i.kt)("admonition",{title:"Access control",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are various options how to configure access control for the platform. See ",(0,i.kt)("a",{parentName:"p",href:"../../../concept-design/architecture/access-control/overview"},"Access control")," for more information.")),(0,i.kt)("p",null,"For testing purposes, you can use preconfigured ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/master/dummy-certificates/certs/root-ca.cert.pem"},"Dummy CA certificate"),". In production system, you will need to replace this list with your own trusted CA certificates. To do this, select ",(0,i.kt)("strong",{parentName:"p"},"Main menu -> ",(0,i.kt)("a",{parentName:"strong",href:"./TUI/main-menu#configure-custom-trusted-certificates"},"Configure custom trusted certificates")),"."),(0,i.kt)("h2",{id:"database"},"Database"),(0,i.kt)("p",null,"CZERTAINLY persists all its data in Postgres database. The server will be installed for you, but you might want to set your own password for the database. To do so choose ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./TUI/main-menu#configure-database"},"Configure database"))," from the ",(0,i.kt)("strong",{parentName:"p"},"Main menu"),"."),(0,i.kt)("h2",{id:"credentials-for-czertainly-docker-repository"},"Credentials for CZERTAINLY docker repository"),(0,i.kt)("p",null,"Some parts of CZERTAINLY are private and can't be provided publicly. Those parts are ",(0,i.kt)("a",{parentName:"p",href:"../../../current-versions/"},"hosted in private Docker repository")," ",(0,i.kt)("inlineCode",{parentName:"p"},"harbor.3key.company"),"."),(0,i.kt)("admonition",{title:"Obtain access to private Docker repository",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Ask ",(0,i.kt)("a",{parentName:"p",href:"../../../../feedback-support/"},"support")," for credentials to access private repository.")),(0,i.kt)("p",null,"To enter obtained credentials, use option ",(0,i.kt)("strong",{parentName:"p"},"Main Menu -> ",(0,i.kt)("a",{parentName:"strong",href:"./TUI/main-menu#configure-docker-repository-access-credentials"},"Configure Docker repository access credentials")),"."),(0,i.kt)("h2",{id:"configure-czertainly"},"Configure CZERTAINLY"),(0,i.kt)("p",null,"Option ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./TUI/main-menu#configure-czertainly"},"Configure CZERTAINLY"))," of the main menu opens dialog where you can choose version of CZERTAINLY and it's components you want to install."),(0,i.kt)("h2",{id:"install-czertainly"},"Install CZERTAINLY"),(0,i.kt)("p",null,"When you select ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./TUI/main-menu#install-czertainly"},"Install CZERTAINLY"))," from the main menu. The installation will begin after confirmation."),(0,i.kt)("admonition",{title:"Installation time",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Complete installation takes about 10 minutes on a decent system with good internet access. The most time consuming part is downloading of docker images that are deployed in the cluster.")),(0,i.kt)("p",null,"After successful installation, administrator web interface is available on address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://[hostname]/administrator/\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname")," is the value configured in the previous step."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/master/dummy-certificates/private/admin.p12"},"Dummy administrator certificate")," is available for quick testing purposes with password ",(0,i.kt)("inlineCode",{parentName:"p"},"00000000"),"."))}f.isMDXComponent=!0}}]);