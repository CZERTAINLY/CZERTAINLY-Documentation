"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5119],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),f=r,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},21370:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={},s="Available Report Types",d={unversionedId:"signing/ades-validation/available-reports",id:"signing/ades-validation/available-reports",title:"Available Report Types",description:"AdES module for the SignServer seamlessly integrates the DSS framework libraries within the standard interfaces of the Validation Workers. Therefore, it is possible to achieve the same signature formats and compliance level.",source:"@site/docs/30-signing/10-ades-validation/05-available-reports.md",sourceDirName:"30-signing/10-ades-validation",slug:"/signing/ades-validation/available-reports",permalink:"/docs/signing/ades-validation/available-reports",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Supported Signature Formats",permalink:"/docs/signing/ades-validation/supported-formats"},next:{title:"Default Validation Policy",permalink:"/docs/signing/ades-validation/default-policy"}},p={},u=[{value:"Validation reports",id:"validation-reports",level:2}],c={toc:u},f="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(f,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"available-report-types"},"Available Report Types"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AdES module")," for the SignServer seamlessly integrates the DSS framework libraries within the standard interfaces of the Validation Workers. Therefore, it is possible to achieve the same signature formats and compliance level."),(0,i.kt)("h2",{id:"validation-reports"},"Validation reports"),(0,i.kt)("p",null,"The following reports are available as output from the validation of the signature:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Simple Report"),(0,i.kt)("li",{parentName:"ul"},"Detailed Report"),(0,i.kt)("li",{parentName:"ul"},"Diagnostic Data Report"),(0,i.kt)("li",{parentName:"ul"},"ETSI Validation Report")),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Simple Report")),(0,i.kt)("td",null,"The purpose of this report is to make as simple as possible the information while keeping the most important elements. Thus the end user can, at a glance, have a synthetic view of the validation.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Detailed Report")),(0,i.kt)("td",null,"The structure of detailed report is based on the ETSI EN 319 102-1 and is built around Basic Building Blocks, Basic Validation Data, Timestamp Validation Data, AdES-T Validation Data and Long Term Validation Data.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Diagnostic Data Report")),(0,i.kt)("td",null,"This is a data set constructed from the information contained in the signature itself, but also from information retrieved dynamically as revocation data and information extrapolated as the mathematical validity of a signature. All this information is independent of the applied validation policy. Two different validation policies applied to the same diagnostic data can lead to different results.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"ETSI Validation Report")),(0,i.kt)("td",null,"The ETSI Validation Report represents an implementation of TS 119 102-2. The report contains a standardized result of an ASiC digital signature validation. It includes the original validation input data, the applied validation policy, as well as the validation result of one or more signature(s) and its(their) constraints.")))),(0,i.kt)("p",null,"For more information about the DSS framework implementation visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/esig/dss/blob/master/dss-cookbook/src/main/asciidoc/dss-documentation.adoc"},"official documentation"),"."))}m.isMDXComponent=!0}}]);