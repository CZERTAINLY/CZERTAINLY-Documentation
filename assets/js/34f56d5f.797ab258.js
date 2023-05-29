"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2392],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6394:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],l={},s="Trident PKCS#11 Installation",p={unversionedId:"signing/qscd-integration/trident-hsm/middleware",id:"signing/qscd-integration/trident-hsm/middleware",title:"Trident PKCS#11 Installation",description:"11 Installation",source:"@site/docs/30-signing/25-qscd-integration/05-trident-hsm/03-middleware.md",sourceDirName:"30-signing/25-qscd-integration/05-trident-hsm",slug:"/signing/qscd-integration/trident-hsm/middleware",permalink:"/docs/signing/qscd-integration/trident-hsm/middleware",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/signing/qscd-integration/trident-hsm/overview"},next:{title:"Crypto Token Configuration",permalink:"/docs/signing/qscd-integration/trident-hsm/cryptotoken"}},c={},d=[{value:"Install Trident PKCS#11 libraries",id:"install-trident-pkcs11-libraries",level:2},{value:"Configuration of Trident PKCS#11 middleware",id:"configuration-of-trident-pkcs11-middleware",level:2},{value:"<code>MPCM_PKCS11_CONFIG_PATH</code>",id:"mpcm_pkcs11_config_path",level:2},{value:"Configure Trident PKCS#11 for SignServer",id:"configure-trident-pkcs11-for-signserver",level:2}],u={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trident-pkcs11-installation"},"Trident PKCS#11 Installation"),(0,o.kt)("p",null,"Triden HSM comes with the Trident PKCS#11 middleware that is used in order to integrate with the PKCS#11 Crypto Token of the SignServer. You can use the following instructions in order to install the Trident HSM PKCS#11 middleware to be used with the SignServer."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The following document assumes installation on the Linux system, however, the steps can be reproduced on other OS with different libraries.")),(0,o.kt)("h2",{id:"install-trident-pkcs11-libraries"},"Install Trident PKCS#11 libraries"),(0,o.kt)("p",null,"Extract the ",(0,o.kt)("inlineCode",{parentName:"p"},"mpcm-pkcs11")," package and copy ",(0,o.kt)("inlineCode",{parentName:"p"},"libmpcm-pkcs11.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libcmapi.so")," files into directory where applications and user can find and use them, for example into ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp libmpcm-pkcs11.so /usr/lib\ncp libcmapi.so /usr/lib\n")),(0,o.kt)("p",null,"It is important, that the user that runs the SignServer (and the application server) has proper permission to use both ",(0,o.kt)("inlineCode",{parentName:"p"},"libmpcm-pkcs11.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libcmapi.so"),"."),(0,o.kt)("h2",{id:"configuration-of-trident-pkcs11-middleware"},"Configuration of Trident PKCS#11 middleware"),(0,o.kt)("p",null,"Create a copy of the sample configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"mpcm-pkcs11.conf.sample")," and save it into location where the user running the SignServer has proper permissions to read its content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp mpcm-pkcs11.conf.sample /etc/trident/mpcm-pkcs11.conf\n")),(0,o.kt)("p",null,"Configure the properties of the ",(0,o.kt)("inlineCode",{parentName:"p"},"mpcm-pkcs11.conf")," according to your environment setup. For the list of all available properties and description, refer to ",(0,o.kt)("strong",{parentName:"p"},"MPCM PKCS#11 Configuration Guide")),(0,o.kt)("p",null,"For the documentation purposes, let's assume the following Trident PKCS#11 configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"url=https://*****.trident-online.info:2000\nlog_level=4\nlog_to_std_output=0\nlog_to_file=/opt/mpcm-pkcs11/mpcm-pkcs11.log\nkeytec=5\nslot15=user-p11\n#slot2=User2\n#keytec.slot2=4\n#block_seconds=15\ntimeout=30\n")),(0,o.kt)("h2",{id:"mpcm_pkcs11_config_path"},(0,o.kt)("inlineCode",{parentName:"h2"},"MPCM_PKCS11_CONFIG_PATH")),(0,o.kt)("p",null,"Export the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"MPCM_PKCS11_CONFIG_PATH")," with the value of the path to the ",(0,o.kt)("inlineCode",{parentName:"p"},"mpcm-pkcs11.conf")," configuration file."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MPCM_PKCS11_CONFIG_PATH")," environment variable must be available to user running the SignServer application. (through the environment settings or running scripts)"),(0,o.kt)("h2",{id:"configure-trident-pkcs11-for-signserver"},"Configure Trident PKCS#11 for SignServer"),(0,o.kt)("p",null,"In order SignServer get access to the Trident HSM, it needs to be configured and available for the SignServer. This is configured as ",(0,o.kt)("inlineCode",{parentName:"p"},"cryptotoken")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"signserver_deploy.properties")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cryptotoken.p11.lib.110.name = TridentHSM\ncryptotoken.p11.lib.110.file = /usr/lib/libmpcm-pkcs11.so\n")),(0,o.kt)("p",null,"Once the Trident PKCS#11 is configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"signserver_deploy.properties"),", SignServer must be redeployed to reflect changes and access the Trident HSM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/ant deploy\n")),(0,o.kt)("p",null,"Make sure the application server is running and verify that SignServer was deployed correctly."))}f.isMDXComponent=!0}}]);