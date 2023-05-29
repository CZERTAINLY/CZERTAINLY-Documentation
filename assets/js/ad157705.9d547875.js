"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[822],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32870:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],c={},s="Introduction",l={unversionedId:"signing/qscd-integration/overview",id:"signing/qscd-integration/overview",title:"Introduction",description:"QSCD stands for Qualified electronic Signature/Seal Creation Device. It may be referred also as QSigCD used to create electronic signature of QSealCD used to create electronic seal.",source:"@site/docs/30-signing/25-qscd-integration/01-overview.md",sourceDirName:"30-signing/25-qscd-integration",slug:"/signing/qscd-integration/overview",permalink:"/docs/signing/qscd-integration/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sample Properties",permalink:"/docs/signing/extended-jws-authorizer/properties-sample"},next:{title:"QSCD Types",permalink:"/docs/signing/qscd-integration/types"}},u={},p=[{value:"Which QSCD is supported?",id:"which-qscd-is-supported",level:2},{value:'<a name="eIDAS"></a>eIDAS requirements for the QSCD',id:"eidas-requirements-for-the-qscd",level:2}],d={toc:p},f="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"QSCD")," stands for ",(0,i.kt)("strong",{parentName:"p"},"Qualified electronic Signature/Seal Creation Device"),". It may be referred also as ",(0,i.kt)("strong",{parentName:"p"},"QSigCD")," used to create electronic signature of ",(0,i.kt)("strong",{parentName:"p"},"QSealCD")," used to create electronic seal."),(0,i.kt)("p",null,"QSCDs based on crypto modules are used specifically for server signing purposes. QSCD makes use of various technical procedures and means in order to ensure, among other things, that signature keys remain confidential and are generated by means of established cryptographic procedures."),(0,i.kt)("p",null,"QSCD must satisfy the requirements of Annex II of ",(0,i.kt)("a",{parentName:"p",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.257.01.0073.01.ENG"},"eIDAS")," regulation, also see ",(0,i.kt)("a",{parentName:"p",href:"#eIDAS"},"eIDAS requirements for the QSCD")," below."),(0,i.kt)("p",null,"It is typically a hardware security module that meets the requirements of the ",(0,i.kt)("a",{parentName:"p",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.257.01.0073.01.ENG"},"eIDAS")," regulation and is certified according the Common Criteria Protection Profile ",(0,i.kt)("strong",{parentName:"p"},"EN 419 221-5 \u201cCryptographic Module for Trust Services\u201d"),"."),(0,i.kt)("p",null,"Such QSCD can be used in conjunction with the qualified certificate to produce qualified signature/seal."),(0,i.kt)("h2",{id:"which-qscd-is-supported"},"Which QSCD is supported?"),(0,i.kt)("p",null,"The following QSCDs are currently tested and supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./trident-hsm/overview"},"Trident HSM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./utimaco-cp5/overview"},"CryptoServer CP5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./nshield-xc-cc/overview"},"nShield XC CC"))),(0,i.kt)("h2",{id:"eidas-requirements-for-the-qscd"},(0,i.kt)("a",{name:"eIDAS"}),"eIDAS requirements for the QSCD"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"According the ",(0,i.kt)("a",{parentName:"p",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.257.01.0073.01.ENG"},"eIDAS")," regulation, the QSCD is configured software or hardware used to create an electronic signature/seal that meets the following requirements:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Qualified electronic signature creation devices shall ensure, by appropriate technical and procedural means, that at least:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the confidentiality of the electronic signature creation data used for electronic signature creation is reasonably assured;"),(0,i.kt)("li",{parentName:"ul"},"the electronic signature creation data used for electronic signature creation can practically occur only once;"),(0,i.kt)("li",{parentName:"ul"},"the electronic signature creation data used for electronic signature creation cannot, with reasonable assurance, be derived and the electronic signature is reliably protected against forgery using currently available technology;"),(0,i.kt)("li",{parentName:"ul"},"the electronic signature creation data used for electronic signature creation can be reliably protected by the legitimate signatory against use by others."))),(0,i.kt)("li",{parentName:"ol"},"Qualified electronic signature creation devices shall not alter the data to be signed or prevent such data from being presented to the signatory prior to signing."),(0,i.kt)("li",{parentName:"ol"},"Generating or managing electronic signature creation data on behalf of the signatory may only be done by a qualified trust service provider."),(0,i.kt)("li",{parentName:"ol"},"Without prejudice to point 1, qualified trust service providers managing electronic signature creation data on behalf of the signatory may duplicate the electronic signature creation data only for back-up purposes provided the following requirements are met:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the security of the duplicated datasets must be at the same level as for the original datasets;"),(0,i.kt)("li",{parentName:"ul"},"the number of duplicated datasets shall not exceed the minimum needed to ensure continuity of the service."))))))}g.isMDXComponent=!0}}]);