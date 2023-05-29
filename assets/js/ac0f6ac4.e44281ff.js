"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9250],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62674:function(e,t,n){n.r(t),n.d(t,{GenTable:function(){return y},assets:function(){return c},basic:function(){return f},contentTitle:function(){return p},data:function(){return m},default:function(){return b},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(83117),a=n(80102),i=n(67294),o=n(3905),s=["components"],l={},p="REST Key Management SAP Provider",u={unversionedId:"signing/sam-integration/trident-sam/km-sap-providers/rest",id:"signing/sam-integration/trident-sam/km-sap-providers/rest",title:"REST Key Management SAP Provider",description:"The implementation class of the REST Key Management SAP Provider is:",source:"@site/docs/30-signing/30-sam-integration/09-trident-sam/09-km-sap-providers/03-rest.mdx",sourceDirName:"30-signing/30-sam-integration/09-trident-sam/09-km-sap-providers",slug:"/signing/sam-integration/trident-sam/km-sap-providers/rest",permalink:"/docs/signing/sam-integration/trident-sam/km-sap-providers/rest",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/signing/sam-integration/trident-sam/km-sap-providers/overview"},next:{title:"Introduction",permalink:"/docs/signing/sam-integration/trident-sam/user-sap-providers/overview"}},c={},d=[{value:"Authorization types",id:"authorization-types",level:2},{value:"BASIC",id:"basic",level:3},{value:"OpenAPI Definition",id:"openapi-definition",level:2}],m=[{property:"KM_SAP_PROVIDER_URL",description:(0,o.kt)(i.Fragment,null,"URL where is the REST interface implemented for key management. The URL should implement REST interface of this provider, specifically fot activation of the assigned key."),default:(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{class:"badge badge--success"},"YES"))},{property:"KM_SAP_PROVIDER_AUTH_TYPE",description:(0,o.kt)(i.Fragment,null,"Authorization type for the REST API. Supported values are:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"NONE"),(0,o.kt)("li",null,"BASIC")),"See information about the authentication properties below."),default:(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{class:"badge badge--success"},"YES"))}],y=function(e){var t=e.data;return(0,o.kt)(i.Fragment,null,t.map((function(e,t){return(0,o.kt)("tr",{key:t},(0,o.kt)("td",null,(0,o.kt)("b",null,e.property)),(0,o.kt)("td",null,e.description),(0,o.kt)("td",null,e.default),(0,o.kt)("td",null,e.mandatory))})))},f=[{property:"KM_SAP_PROVIDER_USERNAME",description:(0,o.kt)(i.Fragment,null,"Identification of the user."),default:(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(i.Fragment,null,"Mandatory for ",(0,o.kt)("b",null,"KM_SAP_PROVIDER_AUTH_TYPE = BASIC"))},{property:"KM_SAP_PROVIDER_PASSWORD",description:(0,o.kt)(i.Fragment,null,"Password for the username."),default:(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(i.Fragment,null,"Mandatory for ",(0,o.kt)("b",null,"KM_SAP_PROVIDER_AUTH_TYPE = BASIC"))}],g={toc:d,data:m,GenTable:y,basic:f},k="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(k,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rest-key-management-sap-provider"},"REST Key Management SAP Provider"),(0,o.kt)("p",null,"The implementation class of the REST Key Management SAP Provider is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"com.czertainly.trident.sam.sap.RestKeyManagementSapProvider\n")),(0,o.kt)("p",null,"The following properties can be configured for the REST Key Management SAP Provider:"),(0,o.kt)("table",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Default Value"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("tbody",null,(0,o.kt)(y,{data:m,mdxType:"GenTable"}))),(0,o.kt)("h2",{id:"authorization-types"},"Authorization types"),(0,o.kt)("h3",{id:"basic"},"BASIC"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"KM_SAP_PROVIDER_AUTH_TYPE = BASIC")," needs additional properties to be configured, in particular:"),(0,o.kt)("table",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Default Value"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("tbody",null,(0,o.kt)(y,{data:f,mdxType:"GenTable"}))),(0,o.kt)("h2",{id:"openapi-definition"},"OpenAPI Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.3\ninfo:\n  title: REST Key Management SAP Provider\n  version: v1\npaths:\n  /activateKey:\n    post:\n      operationId: buildActivateKey\n      requestBody:\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/BuildActivateKeyRequestDTO'\n        required: true\n      responses:\n        \"200\":\n          description: OK\n          content:\n            '*/*':\n              schema:\n                $ref: '#/components/schemas/BuildActivateKeyResponseDTO'\ncomponents:\n  schemas:\n    BuildResponseDTO:\n      type: object\n      properties:\n        body:\n          type: array\n          items:\n            type: string\n            format: byte\n        nonce:\n          type: array\n          items:\n            type: string\n            format: byte\n    BuildActivateKeyRequestDTO:\n      type: object\n      properties:\n        userId:\n          type: string\n        keyId:\n          type: string\n    BuildActivateKeyResponseDTO:\n      type: object\n      required:\n        - changeKeyPasswordRequest\n        - changeKeyOperationStateRequest\n      properties:\n        changePukRequest:\n          $ref: '#/components/schemas/BuildResponseDTO'\n        changeKeyPasswordRequest:\n          $ref: '#/components/schemas/BuildResponseDTO'\n        changeKeyOperationStateRequest:\n          $ref: '#/components/schemas/BuildResponseDTO'\n")))}b.isMDXComponent=!0}}]);