"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7778],{76307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(74848),l=a(28453),r=a(11470),i=a(19365);const s={},c="Callbacks",o={id:"contributors/attributes/callbacks",title:"Callbacks",description:"In some cases, the content of the Attribute depends on the content of some other Attribute or some other aspects. This is where we use AttributeCallback to define the callback that will be used to get the content of the Attribute. The callback will be triggered when the mapping rules of the callback definition will be satisfied.",source:"@site/docs/60-contributors/10-attributes/09-callbacks.mdx",sourceDirName:"60-contributors/10-attributes",slug:"/contributors/attributes/callbacks",permalink:"/docs/contributors/attributes/callbacks",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/60-contributors/10-attributes/09-callbacks.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Constraints",permalink:"/docs/contributors/attributes/constraints"},next:{title:"Attributes",permalink:"/docs/contributors/attributes/attributes"}},d={},u=[{value:"Callback properties",id:"callback-properties",level:2},{value:"Special purpose callbacks",id:"special-purpose-callbacks",level:2},{value:"Supported special purpose callbacks",id:"supported-special-purpose-callbacks",level:2},{value:"Callbacks construction samples",id:"callbacks-construction-samples",level:2},{value:"Mapping of the JSON object to the <code>AttributeCallback</code>",id:"mapping-of-the-json-object-to-the-attributecallback",level:3},{value:"Mapping of the JSON object field into the <code>AttributeCallback</code> path variables",id:"mapping-of-the-json-object-field-into-the-attributecallback-path-variables",level:3},{value:"Callbacks model",id:"callbacks-model",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",object:"object",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"callbacks",children:"Callbacks"}),"\n",(0,n.jsxs)(t.p,{children:["In some cases, the content of the ",(0,n.jsx)(t.code,{children:"Attribute"})," depends on the content of some other ",(0,n.jsx)(t.code,{children:"Attribute"})," or some other aspects. This is where we use ",(0,n.jsx)(t.code,{children:"AttributeCallback"})," to define the callback that will be used to get the content of the ",(0,n.jsx)(t.code,{children:"Attribute"}),". The callback will be triggered when the mapping rules of the callback definition will be satisfied."]}),"\n",(0,n.jsxs)(t.p,{children:["Using this approach, ",(0,n.jsx)(t.code,{children:"Connector"})," can use helper controllers and APIs to achieve loading of the data from the technology and communication with the technology without the need to define the ",(0,n.jsx)(t.code,{children:"Attribute"})," content, and therefore be more flexible and dynamic."]}),"\n",(0,n.jsx)(t.admonition,{title:"Attribute callbacks",type:"info",children:(0,n.jsxs)(t.p,{children:["For more information about ",(0,n.jsx)(t.code,{children:"Attribute"})," and ",(0,n.jsx)(t.code,{children:"attributeCallback"})," property, see ",(0,n.jsx)(t.a,{href:"attributes",children:"Attributes"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"callback-properties",children:"Callback properties"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/callback/AttributeCallback.java",children:(0,n.jsx)(t.code,{children:"AttributeCallback"})})," contains the following properties:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Short description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"callbackContext"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{children:"Context part of callback URL that should be used."}),(0,n.jsx)(t.td,{children:(0,n.jsx)("span",{class:"badge badge--success",children:"Yes"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"callbackMethod"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{children:"HTTP method of the callback URL that should be used."}),(0,n.jsx)(t.td,{children:(0,n.jsx)("span",{class:"badge badge--success",children:"Yes"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"mappings"})}),(0,n.jsxs)(t.td,{children:["set of ",(0,n.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/callback/AttributeCallbackMapping.java",children:(0,n.jsx)(t.code,{children:"AttributeCallbackMapping"})})]}),(0,n.jsx)(t.td,{children:"Mappings for the callback method, which defines how to use the data in context of the request path variables, query parameter, or body payload."}),(0,n.jsx)(t.td,{children:(0,n.jsx)("span",{class:"badge badge--success",children:"Yes"})})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["The complex structure, such as objects, arrays, etc., can be mapped only into the body payload of the callback. If the complex structure will be mapped as path variable or query parameter, only its ",(0,n.jsx)(t.code,{children:"value"})," content property will be used."]}),"\n",(0,n.jsxs)(t.p,{children:["The following is the sample ",(0,n.jsx)(t.code,{children:"AttributeCallback"})," structure:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "callbackContext": "/v1/authorityProvider/{authorityUuid}/certificateTemplate",\n  "callbackMethod": "GET",\n  "mappings": [\n    {\n      "from": "authority.uuid", <-- this is the value of the Attribute \'authority\' and its property \'uuid\'\n      "to": "authorityUuid",    <-- we want to put the value \'from\' to the \'authorityUuid\' as the path variable\n      "targets": [\n        "pathVariable"          <-- the name of the path variable should match the \'to\' property\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Mappings have various options how to include the data from other ",(0,n.jsx)(t.code,{children:"Attributes"})," and request additional action based on them. See the available options in ",(0,n.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/callback/AttributeCallbackMapping.java",children:"AttributeCallbackMapping"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"special-purpose-callbacks",children:"Special purpose callbacks"}),"\n",(0,n.jsxs)(t.p,{children:["CZERTAINLY defines special purpose callbacks that are used for specific treatment of the ",(0,n.jsx)(t.code,{children:"Attribute"})," content."]}),"\n",(0,n.jsxs)(t.p,{children:["A typical example is the ",(0,n.jsx)(t.code,{children:"DataAttribute"})," with the content type ",(0,n.jsx)(t.code,{children:"CREDENTIAL"}),". Working with the credentials, a typical use case is to push the credentials to the ",(0,n.jsx)(t.code,{children:"Connector"})," that should be authenticated and authorized based on selected credential to specific technology. However, we do not want to reveal the secret and sensitive value of the credential to the ",(0,n.jsx)(t.code,{children:"Client"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For that purpose we have a special callback interface that will give the ",(0,n.jsx)(t.code,{children:"Client"})," credentials with the specific kind, however not the content. The content is protected by the platform."]}),"\n",(0,n.jsx)(t.h2,{id:"supported-special-purpose-callbacks",children:"Supported special purpose callbacks"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Callback"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"coreGetCredentials"})})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "callbackContext": "core/getCredentials",\n  "callbackMethod": "GET",\n  "mappings": [\n    {\n      "to": "credentialKind",\n      "targets": [\n        "pathVariable"\n      ],\n      "value": "Basic"\n    }\n  ]\n}\n'})}),(0,n.jsxs)(t.p,{children:["This callback allows to get the list of ",(0,n.jsx)(t.code,{children:"Credentials"})," protecting its sensitive data. The list will contain only UUID and name of the ",(0,n.jsx)(t.code,{children:"Credentials"})," that have the required ",(0,n.jsx)(t.code,{children:"kind"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"callbacks-construction-samples",children:"Callbacks construction samples"}),"\n",(0,n.jsxs)(t.h3,{id:"mapping-of-the-json-object-to-the-attributecallback",children:["Mapping of the JSON object to the ",(0,n.jsx)(t.code,{children:"AttributeCallback"})]}),"\n",(0,n.jsx)(r.A,{children:(0,n.jsx)(i.A,{value:"java",label:"Java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'// definition of the AttributeCallback\nAttributeCallback listValuesForAttributeTwoCallback = new AttributeCallback();\nlistValuesForAttributeTwoCallback.setCallbackContext("/v1/support/values");\nlistValuesForAttributeTwoCallback.setCallbackMethod("POST");\n// map the selected object from attributeOne to callback and put it into body payload into the field with name selectedObject\nSet<AttributeCallbackMapping> mappings = new HashSet<>();\nmappings.add(new AttributeCallbackMapping(\n        "attributeOne",\n        "selectedObject"\n        AttributeValueTarget.BODY));\nlistValuesForAttributeTwoCallback.setMappings(mappings);\nattributeTwo.setAttributeCallback(listCredentialCallback);\n'})})})}),"\n",(0,n.jsxs)(t.h3,{id:"mapping-of-the-json-object-field-into-the-attributecallback-path-variables",children:["Mapping of the JSON object field into the ",(0,n.jsx)(t.code,{children:"AttributeCallback"})," path variables"]}),"\n",(0,n.jsx)(r.A,{children:(0,n.jsx)(i.A,{value:"java",label:"Java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'// definition of the AttributeCallback\nAttributeCallback listValuesForAttributeTwoCallback = new AttributeCallback();\nlistValuesForAttributeTwoCallback.setCallbackContext("/v1/support/{authorityId}/{customField}");\nlistValuesForAttributeTwoCallback.setCallbackMethod("GET");\n// map the selected object value from attributeOne to callback and put it into path variable with name authorityId\n// when the name of the Attribute only is specified, the value of the content is taken\nSet<AttributeCallbackMapping> mappings = new HashSet<>();\nmappings.add(new AttributeCallbackMapping(\n        "attributeOne",\n        "authorityId"\n        AttributeValueTarget.PATH_VARIABLE));\n        \n// map the field custom from the selected object to callback and put it into path variable variable with name customField\nmappings.add(new AttributeCallbackMapping(\n        "attributeOne.data.custom",\n        "customField"\n        AttributeValueTarget.PATH_VARIABLE));\nlistValuesForAttributeTwoCallback.setMappings(mappings);\nattributeTwo.setAttributeCallback(listCredentialCallback);\n'})})})}),"\n",(0,n.jsx)(t.h2,{id:"callbacks-model",children:"Callbacks model"}),"\n",(0,n.jsxs)(t.p,{children:["The following diagram represents the callbacks model. Details can be found in the ",(0,n.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/tree/master/src/main/java/com/czertainly/api/model/common/attribute/v2/callback",children:"CZERTAINLY Interfaces repository"}),"."]}),"\n",(0,n.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/VSkn2i9048JX_fvYNY1OQ2KM4MiVOdDPu-9w2RSJoEC73ZlHSlZ-wODIkRuz0K1aSSNnS6hBzK5mHhNfIOnMDTFcaXfcbmXSoMh3Ihs9-o3vrUnVS9TbiJAbJ_Nbk7JTpnVEq8rQnjW1"})]})}function b(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(34164);const l={tabItem:"tabItem_Ymn6"};var r=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,i),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>C});var n=a(96540),l=a(34164),r=a(23104),i=a(56347),s=a(205),c=a(57485),o=a(31682),d=a(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}(a);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const l=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=h(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,u]=p({queryString:a,groupId:l}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,d.Dv)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),j=(()=>{const e=o??m;return b({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=a(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function k(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),l=s[a].value;l!==n&&(o(t),i(l))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,l.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function g(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,x.jsx)(k,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function C(e){const t=(0,f.A)();return(0,x.jsx)(g,{...e,children:u(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var n=a(96540);const l={},r=n.createContext(l);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);