"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1388],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21076:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={},c="IIS win-acme",s={unversionedId:"protocols/acme/win-acme",id:"protocols/acme/win-acme",title:"IIS win-acme",description:"ACME protocol can be used for Windows web servers and other services as well. Since certbot supports binding only to Apache and Ngnix servers, we will use another available tool win-acme - Windows ACMEv2 client, which enables to manage the certificates on IIS Windows web servers, Exchange servers or enables the use of custom scripts to automate certificate issuance and renewal in Windows server environments.",source:"@site/docs/07-protocols/02-acme/14-win-acme.md",sourceDirName:"07-protocols/02-acme",slug:"/protocols/acme/win-acme",permalink:"/docs/protocols/acme/win-acme",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Certbot",permalink:"/docs/protocols/acme/certbot"},next:{title:"Terraform acme provider",permalink:"/docs/protocols/acme/terraform"}},m={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration of <code>win-acme</code>",id:"configuration-of-win-acme",level:2},{value:"Using <code>win-acme</code> with <code>IIS</code> and self-hosted HTTP challenge",id:"using-win-acme-with-iis-and-self-hosted-http-challenge",level:2},{value:"Interactive mode",id:"interactive-mode",level:3},{value:"Unattended mode",id:"unattended-mode",level:3},{value:"Automation of certificate renewal",id:"automation-of-certificate-renewal",level:2},{value:"Interactive mode",id:"interactive-mode-1",level:3},{value:"Unattended mode",id:"unattended-mode-1",level:3}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iis-win-acme"},"IIS win-acme"),(0,r.kt)("p",null,"ACME protocol can be used for Windows web servers and other services as well. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"certbot")," supports binding only to ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ngnix")," servers, we will use another available tool ",(0,r.kt)("inlineCode",{parentName:"p"},"win-acme")," - Windows ACMEv2 client, which enables to manage the certificates on ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," Windows web servers, Exchange servers or enables the use of custom scripts to automate certificate issuance and renewal in Windows server environments. "),(0,r.kt)("p",null,"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"win-acme"),", refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.win-acme.com/manual/getting-started"},"win-acme documentation"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"certbot")," can be used to manually manage certificates for Windows server. You need to create your own automation scripts in order to achieve automated binding with the ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS"),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"win-acme")," with CZERTAINLY, you need to have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"win-acme")," installed in the host server. You can download the installation file from ",(0,r.kt)("a",{parentName:"li",href:"https://www.win-acme.com"},"win-acme installation")," download section"),(0,r.kt)("li",{parentName:"ul"},"Configured at least one ",(0,r.kt)("inlineCode",{parentName:"li"},"RA Profile")),(0,r.kt)("li",{parentName:"ul"},"Properly configured DNS records for the hostname you are trying to obtain the certificate for (for HTTP validation, the machine that ",(0,r.kt)("inlineCode",{parentName:"li"},"win-acme")," is running on must have the correct common name configured in DNS)"),(0,r.kt)("li",{parentName:"ul"},"If you intend to use automated detection of certificate common name, the IIS server needs to have at least configured hostname for one binding (port 80 for instance)"),(0,r.kt)("li",{parentName:"ul"},"Access to HTTP or DNS resources on your ",(0,r.kt)("inlineCode",{parentName:"li"},"IIS")," Web server, that will be used to validate ACME challenges"),(0,r.kt)("li",{parentName:"ul"},"ACME protocol enabled according to the ",(0,r.kt)("a",{parentName:"li",href:"enable-acme"},"Enable ACME"))),(0,r.kt)("p",null,"For this guide, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"http-01")," challenge validation, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"dns-01")," can be also configured and the process is similar."),(0,r.kt)("h2",{id:"configuration-of-win-acme"},"Configuration of ",(0,r.kt)("inlineCode",{parentName:"h2"},"win-acme")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"win-acme")," client is designed to be primary used as ACMEv2 client for Let's Encrypt Certification Authority and other ACME compliant servers. Before the first use we need to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"win-amce")," client to connect to CZERTAINLY platform instead of Let's Encrypt CA that is the default server. To achieve this, we need to set up correct endpoints in ",(0,r.kt)("inlineCode",{parentName:"p"},"win-acme")," configuration file ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"settings.json")),". Edit the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"settings.json"))," file located in the root of ",(0,r.kt)("inlineCode",{parentName:"p"},"win-acme")," directory with your preferred text editor and change the following lines:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Line"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"DefaultBaseUri")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://[domain]:[port]/api/acme/raProfile/czertainly/directory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"DefaultBaseUriTest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://[domain]:[port]/api/acme/raProfile/czertainly/directory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"DefaultBaseUriImport")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://[domain]:[port]/api/acme/raProfile/czertainly/directory"))))),(0,r.kt)("p",null,"With these parameters, we are directly connecting to the already configured ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," with name ",(0,r.kt)("inlineCode",{parentName:"p"},"czertainly")," that has ACME enabled.\nFor more information follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.win-acme.com/reference/settings#acme"},"win-acme settings"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"win-acme")," Plugin support"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"win-acme")," supports various sources plugins for binding (",(0,r.kt)("inlineCode",{parentName:"p"},"IIS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Exchange")," etc.) and validation plugins to prove the identity (HTTP, WebDAV, DNS etc.). For details how to use them, please visit: ",(0,r.kt)("a",{parentName:"p",href:"https://www.win-acme.com/reference/plugins/source/"},"win-acme source plugins")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.win-acme.com/reference/plugins/validation/"},"win-acme validation plugins"),".")),(0,r.kt)("h2",{id:"using-win-acme-with-iis-and-self-hosted-http-challenge"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"win-acme")," with ",(0,r.kt)("inlineCode",{parentName:"h2"},"IIS")," and self-hosted HTTP challenge"),(0,r.kt)("p",null,"Once each pre-requisite and configuration are set up, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"win-acme")," executable file ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"wascs.exe"))," with administrator privileges (to enable automatic detection of ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," services) and follow these steps:"),(0,r.kt)("h3",{id:"interactive-mode"},"Interactive mode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please choose from the menu: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"N"))," (",(0,r.kt)("em",{parentName:"li"},"Create certificate, default settings"),")"),(0,r.kt)("li",{parentName:"ul"},"Depending on your setup, we can either input the hostname of the certificate manually or detect it from the ",(0,r.kt)("inlineCode",{parentName:"li"},"IIS")," configuration"),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"IIS")," bindings are configured correctly, you will be asked to point ",(0,r.kt)("inlineCode",{parentName:"li"},"win-acme")," to the site you want to issue certificate for"),(0,r.kt)("li",{parentName:"ul"},"In case your ",(0,r.kt)("inlineCode",{parentName:"li"},"IIS")," bindings are not configured you will have to follow up with Full Options from the menu: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"M"))),(0,r.kt)("li",{parentName:"ul"},"When finalizing the selection of the certificate name ",(0,r.kt)("inlineCode",{parentName:"li"},"win-acme")," will automatically use ",(0,r.kt)("inlineCode",{parentName:"li"},"http-01")," challenge. In this step ",(0,r.kt)("inlineCode",{parentName:"li"},"win-acme")," will try to bind port 80 of the server and publish the challenge received from the ACME server; this challenge will be posted on the port 80 of your server"),(0,r.kt)("li",{parentName:"ul"},"Upon successfully challenge validation, ",(0,r.kt)("inlineCode",{parentName:"li"},"win-acme")," will create the HTTPS bindings in the ",(0,r.kt)("inlineCode",{parentName:"li"},"IIS")," automatically")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure that the web server is reachable on the specified port number with the domain name you selected for the certificate from CZERTAINLY platform to validate the challenge. If the server is not accessible for the CZERTAINLY, it will not be able to validate the challenge and the process will fail.")),(0,r.kt)("h3",{id:"unattended-mode"},"Unattended mode"),(0,r.kt)("p",null,"The following represents a sample process of issuing certificate for self-hosted ",(0,r.kt)("inlineCode",{parentName:"p"},"IIS")," with binding to the host ",(0,r.kt)("inlineCode",{parentName:"p"},"www.example.com"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"wacs.exe `\n  --source iis `\n  --host www.example.com `\n  --webroot C:\\sites\\wwwroot\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For all ",(0,r.kt)("inlineCode",{parentName:"p"},"win-acme")," command line arguments, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.win-acme.com/reference/cli"},"win-acme documentation"),".")),(0,r.kt)("h2",{id:"automation-of-certificate-renewal"},"Automation of certificate renewal"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"win-acme")," can automatically renew any certificate that it obtained from ACME server using Windows Scheduler task. To configure automated renewal, follow these steps:"),(0,r.kt)("h3",{id:"interactive-mode-1"},"Interactive mode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"win-acme")," executable file ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"wascs.exe"))," with administrator privileges"),(0,r.kt)("li",{parentName:"ul"},"Please choose from the menu: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"O"))," (",(0,r.kt)("em",{parentName:"li"},"More Options"),")"),(0,r.kt)("li",{parentName:"ul"},"Please choose from the menu> ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"T"))," (",(0,r.kt)("em",{parentName:"li"},"(Re)Create Scheduled Task"),")"),(0,r.kt)("li",{parentName:"ul"},"Please specify the user you want the task to be run under (user with administrator privileges is recommended to allow automatic binding configuration on the ",(0,r.kt)("inlineCode",{parentName:"li"},"IIS")," server)"),(0,r.kt)("li",{parentName:"ul"},"The scheduled task for automatic renewal of all certificates managed by ",(0,r.kt)("inlineCode",{parentName:"li"},"win-acme")," is now created")),(0,r.kt)("h3",{id:"unattended-mode-1"},"Unattended mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"wacs.exe `\n  --setuptaskscheduler\n")),(0,r.kt)("admonition",{title:"Compatibility issues in older versions of Windows server",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"win-acme")," might have issues running properly on older versions of Windows Server (2012 and older) due to compatibility with TLS 1.2 cipher suite. If you are struggling to establish the connection with the ACME server, try to consult your SSL and TLS settings with administrators of your system.")))}u.isMDXComponent=!0}}]);