"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9087],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return b}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,b=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(b,l(l({ref:t},p),{},{components:a})):n.createElement(b,l({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(86010),i={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(83117),r=a(67294),i=a(86010),l=a(12466),o=a(76775),u=a(91980),s=a(67392),p=a(50012);function c(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function f(e){var t,a,n,i,l=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,c=d(e),f=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),g=f[0],k=f[1],h=b({queryString:u,groupId:s}),y=h[0],N=h[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,p.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),C=v[0],T=v[1],A=function(){var e=null!=y?y:C;return m({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){A&&k(A)}),[A]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);k(e),N(e),T(e)}),[N,T,c]),tabValues:c}}var g=a(72389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,a=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,p=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==o&&(c(t),u(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var i,l=p.indexOf(e.currentTarget)-1;a=null!=(i=p[l])?i:p[p.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){var t=(0,g.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},35219:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=a(74866),o=a(85162),u=["components"],s={},p="Attributes",c={unversionedId:"contributors/attributes/attributes",id:"contributors/attributes/attributes",title:"Attributes",description:"Attribute, specifically its type is used to control different behaviour of the content and values in the platform. Some attributes defined the data that are exchanged between technologies, some of them may represent read-only information, and some of them may contain additional attributes that are grouped together or works as a wizard.",source:"@site/docs/60-contributors/10-attributes/11-attributes.mdx",sourceDirName:"60-contributors/10-attributes",slug:"/contributors/attributes/attributes",permalink:"/docs/contributors/attributes/attributes",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/60-contributors/10-attributes/11-attributes.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callbacks",permalink:"/docs/contributors/attributes/callbacks"},next:{title:"Examples",permalink:"/docs/contributors/attributes/examples"}},d={},m=[{value:"Attribute properties",id:"attribute-properties",level:2},{value:"Attribute Types",id:"attribute-types",level:2},{value:"Attribute properties and types",id:"attribute-properties-and-types",level:2},{value:"Attribute structure samples",id:"attribute-structure-samples",level:2},{value:"<code>Attribute</code> model",id:"attribute-model",level:2}],b={toc:m},f="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)(f,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"Attribute, specifically its type is used to control different behaviour of the content and values in the platform. Some attributes defined the data that are exchanged between technologies, some of them may represent read-only information, and some of them may contain additional attributes that are grouped together or works as a wizard."),(0,i.kt)("h2",{id:"attribute-properties"},"Attribute properties"),(0,i.kt)("p",null,"The following is a list of properties that can be used to define the behaviour of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," and extends properties of the ",(0,i.kt)("a",{parentName:"p",href:"overview#baseattribute"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseAttribute")),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"contentType")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"content#supported-content-types"},(0,i.kt)("inlineCode",{parentName:"a"},"AttributeContentType"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"Yes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"constraints")),(0,i.kt)("td",{parentName:"tr",align:null},"list of ",(0,i.kt)("a",{parentName:"td",href:"constraints"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseAttributeConstraint"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"No"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"properties"},(0,i.kt)("inlineCode",{parentName:"a"},"AttributeProperties"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"Yes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"attributeCallback")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"callbacks"},(0,i.kt)("inlineCode",{parentName:"a"},"AttributeCallback"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"No"))))),(0,i.kt)("h2",{id:"attribute-types"},"Attribute Types"),(0,i.kt)("p",null,"Based on the usage and specific behaviour you want to provide, ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," can be one of the following defined types in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/AttributeType.java"},"AttributeType"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"AttributeType")),(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Short description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DATA")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/DataAttribute.java"},(0,i.kt)("inlineCode",{parentName:"a"},"DataAttribute"))),(0,i.kt)("td",{parentName:"tr",align:null},"Full fledged data carriers used by in the platform for information exchange")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INFO")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/InfoAttribute.java"},(0,i.kt)("inlineCode",{parentName:"a"},"InfoAttributes"))),(0,i.kt)("td",{parentName:"tr",align:null},"Information carriers whose primary responsibility is to provide additional helper information. The content of this attribute is not sent back to the platform, it is just informative")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GROUP")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/GroupAttribute.java"},(0,i.kt)("inlineCode",{parentName:"a"},"GroupAttributes"))),(0,i.kt)("td",{parentName:"tr",align:null},"Advanced type of attribute that can group multiple attributes. Main use is when the attributes are dependent on the content selected from other attributes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"META")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/MetadataAttribute.java"},(0,i.kt)("inlineCode",{parentName:"a"},"MetadataAttributes"))),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata representation that can be exchanged between the platform and connectors")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CUSTOM")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/CustomAttribute.java"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomAttributes"))),(0,i.kt)("td",{parentName:"tr",align:null},"Used defined attributes for storing additional information about the objects supported in the platform")))),(0,i.kt)("h2",{id:"attribute-properties-and-types"},"Attribute properties and types"),(0,i.kt)("p",null,"The following matrix shows which ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," properties are supported for each ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," type:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name / Attribute type"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"DataAttribute")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"InfoAttributeP")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"GroupAttributes")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"MetadataAttribute")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"CustomAttribute")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"contentType")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--secondary"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"constraints")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--secondary"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--secondary"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--secondary"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--secondary"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--secondary"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"attributeCallback")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--secondary"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--secondary"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--secondary"}))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{class:"badge badge--success",size:"s"})," - the property is required"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{class:"badge badge--danger"})," - the property is optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{class:"badge badge--secondary"})," - the property is not applicable")),(0,i.kt)("h2",{id:"attribute-structure-samples"},"Attribute structure samples"),(0,i.kt)("p",null,"The following samples show how the ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," can be defined in the platform for different types:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"data",label:"DATA",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n  "name": "certificateTemplate",\n  "label": "Certificate Template",\n  "type": "data",\n  "contentType": "string",\n  "content": [\n    {\n      "reference": "Template 1",\n      "data": "template1"\n    },\n    {\n      "reference": "Template 2",\n      "data": "template2"\n    },\n    {\n      "reference": "Template 3",\n      "data": "template3"\n    }\n  ],\n  "properties": {\n    "required": true,\n    "readOnly": false,\n    "visible": true,\n    "list": true,\n    "multiSelect": true,\n    "group": "Certificate Configuration"\n  },\n  "description": "Available certificate templates that can be selected for the certificate request",\n  "constraints": [\n    {\n      "description": "Certificate Template Regex",\n      "errorMessage": "Certificate Template must be a valid string",\n      "type": "regexp",\n      "data": "^[a-z\\\\s]{0,255}"\n    }\n  ]\n}\n'))),(0,i.kt)(o.Z,{value:"info",label:"INFO",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n  "name": "certificateTemplate",\n  "label": "Certificate Template",\n  "type": "info",\n  "contentType": "string",\n  "content": [\n    {\n      "reference": "Template 1",\n      "data": "template1"\n    }\n  ],\n  "properties": {\n    "readOnly": false,\n    "visible": true,\n    "group": "Certificate Configuration"\n  },\n  "description": "Available certificate templates that can be selected for the certificate request",\n}\n'))),(0,i.kt)(o.Z,{value:"group",label:"GROUP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n  "name": "group1",\n  "label": "Option A Attributes",\n  "type": "group",\n  "content": [\n    {\n      "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n      "name": "certificateTemplate",\n      "label": "Certificate Template",\n      "type": "data",\n      "contentType": "string",\n      "content": [\n        {\n          "reference": "Template 1",\n          "data": "template1"\n        },\n        {\n          "reference": "Template 2",\n          "data": "template2"\n        },\n        {\n          "reference": "Template 3",\n          "data": "template3"\n        }\n      ],\n      "properties": {\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": true,\n        "multiSelect": true,\n        "group": "Certificate Configuration"\n      },\n      "description": "Available certificate templates that can be selected for the certificate request",\n      "constraints": [\n        {\n          "description": "Certificate Template Regex",\n          "errorMessage": "Certificate Template must be a valid string",\n          "type": "regexp",\n          "data": "^[a-z\\\\s]{0,255}"\n        }\n      ]\n    }\n  ],\n  "description": "Available certificate templates that can be selected for the certificate request",\n}\n'))),(0,i.kt)(o.Z,{value:"meta",label:"META",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n  "name": "discoverySource",\n  "label": "Discovery Source",\n  "type": "meta",\n  "contentType": "string",\n  "content": [\n    {\n      "reference": "Internet",\n      "data": "internet.com"\n    }\n  ],\n  "properties": {\n    "readOnly": false,\n    "visible": true,\n    "global": true,\n    "group": "Discovery"\n  },\n  \n  "description": "Source from where the certificate is discovered",\n}\n'))),(0,i.kt)(o.Z,{value:"custom",label:"CUSTOM",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n  "name": "purpose",\n  "label": "Purpose",\n  "type": "custom",\n  "contentType": "string",\n  "content": [\n    {\n      "reference": "",\n      "data": "Created to test the custom attribute"\n    }\n  ],\n  "properties": {\n    "required": true,\n    "readOnly": false,\n    "visible": true,\n    "list": true,\n    "multiSelect": true,\n    "group": "Certificate Configuration"\n  },\n  "description": "Sample description for the custom attribute"\n}\n')))),(0,i.kt)("h2",{id:"attribute-model"},(0,i.kt)("inlineCode",{parentName:"h2"},"Attribute")," model"),(0,i.kt)("p",null,"Th following diagram represents the ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," model inherited from the ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractBaseAttribute"),". Details can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/tree/develop/src/main/java/com/czertainly/api/model/common/attribute/v2"},"CZERTAINLY Interfaces repository"),"."),(0,i.kt)("p",null,(0,i.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/XL1B2W8n3DrxYbnWSA4hSU6e82uyHAOJjT2PIlCA7byfWdRiq2nA-ZuXBpi51yJ1BUXTQjW9hPRhz7Do1S5JiBSxgBT13AmV4vSUxXI13QZzD7jMQO5WkmX94kDObURm8uDB-7cy-X9-2Zu-IiH5mFtCi4DK-E6NIMHnPzesAMsJhqmRaYTax3LPfvOc3r9LP_6gwZnqLVvtYgfZSg2l_WK0"})))}g.isMDXComponent=!0}}]);