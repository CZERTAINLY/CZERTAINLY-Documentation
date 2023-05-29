"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4258],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return b}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(b,o(o({ref:e},c),{},{components:n})):a.createElement(b,o({ref:e},c))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(t,e,n){n.d(e,{Z:function(){return o}});var a=n(67294),r=n(86010),i={tabItem:"tabItem_Ymn6"};function o(t){var e=t.children,n=t.hidden,o=t.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},e)}},74866:function(t,e,n){n.d(e,{Z:function(){return N}});var a=n(83117),r=n(67294),i=n(86010),o=n(12466),l=n(76775),s=n(91980),u=n(67392),c=n(50012);function p(t){return function(t){var e,n;return null!=(e=null==(n=r.Children.map(t,(function(t){if(!t||(0,r.isValidElement)(t)&&(e=t.props)&&"object"==typeof e&&"value"in e)return t;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?e:[]}(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}function d(t){var e=t.values,n=t.children;return(0,r.useMemo)((function(){var t=null!=e?e:p(n);return function(t){var e=(0,u.l)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,n])}function m(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function b(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId,i=(0,l.k6)(),o=function(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(t){if(o){var e=new URLSearchParams(i.location.search);e.set(o,t),i.replace(Object.assign({},i.location,{search:e.toString()}))}}),[o,i])]}function f(t){var e,n,a,i,o=t.defaultValue,l=t.queryString,s=void 0!==l&&l,u=t.groupId,p=d(t),f=(0,r.useState)((function(){return function(t){var e,n=t.defaultValue,a=t.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(e=a.find((function(t){return t.default})))?e:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),h=f[0],g=f[1],v=b({queryString:s,groupId:u}),k=v[0],y=v[1],N=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:u}.groupId),n=(0,c.Nk)(e),a=n[0],i=n[1],[a,(0,r.useCallback)((function(t){e&&i.set(t)}),[e,i])]),C=N[0],T=N[1],A=function(){var t=null!=k?k:C;return m({value:t,tabValues:p})?t:null}();return(0,r.useLayoutEffect)((function(){A&&g(A)}),[A]),{selectedValue:h,selectValue:(0,r.useCallback)((function(t){if(!m({value:t,tabValues:p}))throw new Error("Can't select invalid tab value="+t);g(t),y(t),T(t)}),[y,T,p]),tabValues:p}}var h=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(t){var e=t.className,n=t.block,l=t.selectedValue,s=t.selectValue,u=t.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(t){var e=t.currentTarget,n=c.indexOf(e),a=u[n].value;a!==l&&(p(e),s(a))},m=function(t){var e,n=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":var a,r=c.indexOf(t.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,o=c.indexOf(t.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(e=n)||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e)},u.map((function(t){var e=t.value,n=t.label,o=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:function(t){return c.push(t)},onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===e})}),null!=n?n:e)})))}function k(t){var e=t.lazy,n=t.children,a=t.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){var o=i.find((function(t){return t.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a})})))}function y(t){var e=f(t);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},t,e)),r.createElement(k,(0,a.Z)({},t,e)))}function N(t){var e=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(e)},t))}},43058:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(74866),l=n(85162),s=["components"],u={},c="Constraints",p={unversionedId:"contributors/attributes/constraints",id:"contributors/attributes/constraints",title:"Constraints",description:"Constraints define set of rules that are applied for validation of the Attribute content as input. The Attribute content is validated when the Attribute is created or updated. Validation is controlled consistently by the platform and ensures that the Attribute content is valid and can be used for further processing.",source:"@site/docs/60-contributors/10-attributes/07-constraints.mdx",sourceDirName:"60-contributors/10-attributes",slug:"/contributors/attributes/constraints",permalink:"/docs/contributors/attributes/constraints",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/60-contributors/10-attributes/07-constraints.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Content",permalink:"/docs/contributors/attributes/content"},next:{title:"Callbacks",permalink:"/docs/contributors/attributes/callbacks"}},d={},m=[{value:"Constraint properties",id:"constraint-properties",level:2},{value:"Supported constraints types",id:"supported-constraints-types",level:2},{value:"Constraint type description and samples",id:"constraint-type-description-and-samples",level:2},{value:"<code>RegExpAttributeConstraint</code>",id:"regexpattributeconstraint",level:3},{value:"<code>RangeAttributeConstraint</code>",id:"rangeattributeconstraint",level:3},{value:"<code>DateTimeAttributeConstraint</code>",id:"datetimeattributeconstraint",level:3},{value:"Constraint model",id:"constraint-model",level:2}],b={toc:m},f="wrapper";function h(t){var e=t.components,n=(0,r.Z)(t,s);return(0,i.kt)(f,(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"constraints"},"Constraints"),(0,i.kt)("p",null,"Constraints define set of rules that are applied for validation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," content as input. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," content is validated when the ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," is created or updated. Validation is controlled consistently by the platform and ensures that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," content is valid and can be used for further processing."),(0,i.kt)("admonition",{title:"Attributes that support constraints",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more information about ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," types that support constraints, see ",(0,i.kt)("a",{parentName:"p",href:"attributes"},"Attributes"),".")),(0,i.kt)("h2",{id:"constraint-properties"},"Constraint properties"),(0,i.kt)("p",null,"Every constraint is extended from the base class of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/BaseAttributeConstraint.java"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseAttributeConstraint"))," which is abstracted from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/AttributeConstraint.java"},(0,i.kt)("inlineCode",{parentName:"a"},"AttributeConstraint")),"."),(0,i.kt)("p",null,"The constraint has the following properties defined and inherited from the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseAttributeConstraint"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Short description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"description")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Description of the constraint"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"No"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"errorMessage")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Error message to be displayed when the constraint is violated"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"No"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#supported-constraints-types"},(0,i.kt)("inlineCode",{parentName:"a"},"AttributeConstraintType"))),(0,i.kt)("td",{parentName:"tr",align:null},"Type of the constraint"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"Yes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AttributeConstraint")),(0,i.kt)("td",{parentName:"tr",align:null},"Data to be used for the constraint"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"Yes"))))),(0,i.kt)("h2",{id:"supported-constraints-types"},"Supported constraints types"),(0,i.kt)("p",null,"Supported constraint types are defined in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/AttributeConstraintType.java"},(0,i.kt)("inlineCode",{parentName:"a"},"AttributeConstraintType")),". The following content types are available and supported:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"AttributeConstraintType")),(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Data"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"REGEXP")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/RegexpAttributeConstraint.java"},(0,i.kt)("inlineCode",{parentName:"a"},"RegexpAttributeConstraint"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RANGE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/RangeAttributeConstraint.java"},(0,i.kt)("inlineCode",{parentName:"a"},"RangeAttributeConstraint"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/data/RangeAttributeConstraintData.java"},(0,i.kt)("inlineCode",{parentName:"a"},"RangeAttributeConstraintData")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DATETIME")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/DateTimeAttributeConstraint.java"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTimeAttributeConstraint"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/data/DateTimeAttributeConstraintData.java"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTimeAttributeConstraintData")))))),(0,i.kt)("h2",{id:"constraint-type-description-and-samples"},"Constraint type description and samples"),(0,i.kt)("h3",{id:"regexpattributeconstraint"},(0,i.kt)("inlineCode",{parentName:"h3"},"RegExpAttributeConstraint")),(0,i.kt)("p",null,"Use this constraint when the content needs to be validated against a regular expression."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "description": "Alphanumeric Regex Constraint",\n    "errorMessage": "Only alphanumeric characters are allowed",\n    "type": "RegExp",\n    "data": "^[a-zA-Z0-9]*$"\n}\n'))),(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'AttributeConstraint constraint = new RegexpAttributeConstraint()\nconstraint.setDescription("Alphanumeric Regex Constraint")\nconstraint.setErrorMessage("Only alphanumeric characters are allowed")\nconstraint.setData("^[a-zA-Z0-9]*$");\nconstraint.setType(AttributeConstraintType.REGEXP);\n')))),(0,i.kt)("h3",{id:"rangeattributeconstraint"},(0,i.kt)("inlineCode",{parentName:"h3"},"RangeAttributeConstraint")),(0,i.kt)("p",null,"Use this constraint when the content needs to be validated against a range of integers."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "description": "Range Constraint",\n    "errorMessage": "Value should be between 1 and 10",\n    "type": "range",\n    "data": {\n        "from": 1,\n        "to": 10\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'RangeAttributeConstraintData data = new RangeAttributeConstraintData();\ndata.setFrom(1);\ndata.setTo(10);\n\nRangeAttributeConstraint constraint = new RangeAttributeConstraint();\nconstraint.setDescription("Range Constraint");\nconstraint.setErrorMessage("Value should be between 1 and 10");\nconstraint.setData(data);\nconstraint.setType(AttributeConstraintType.RANGE);\n')))),(0,i.kt)("h3",{id:"datetimeattributeconstraint"},(0,i.kt)("inlineCode",{parentName:"h3"},"DateTimeAttributeConstraint")),(0,i.kt)("p",null,"Use this constraint when you need to validate date and time."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "description": "Date Time Constraint",\n    "errorMessage": "Value should be between 1 and 10",\n    "type": "datetime",\n    "data": {\n        "from": "2020-01-01T00:00:00.000Z",\n        "to": "2020-12-31T00:00:00.000Z"\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'DateTimeAttributeConstraintData data = new DateTimeAttributeConstraintData();\ndata.setFrom(LocalDateTime.now());\ndata.setTo(LocalDateTime.of(2023, Month.JULY, 29, 19, 30, 40));\n\nDateTimeAttributeConstraint constraint = new DateTimeAttributeConstraint();\nconstraint.setDescription("Date Time Constraint");\nconstraint.setErrorMessage("Value should be between the provided range");\nconstraint.setData(data);\nconstraint.setType(AttributeConstraintType.DATETIME);\n')))),(0,i.kt)("h2",{id:"constraint-model"},"Constraint model"),(0,i.kt)("p",null,"The following diagram represents the constraint model inherited from the ",(0,i.kt)("inlineCode",{parentName:"p"},"AttributeConstraint"),". Details can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/tree/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint"},"CZERTAINLY Interfaces repository"),"."),(0,i.kt)("p",null,(0,i.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/bP4z3i8m38Ntdi8NY1XWGXtuEm7Y0cvgIgGqHR4hzVYq1Z4WahOPBCN-ykpd75WmIj_w0iR35Zt1ThFJcwUxW7GGNVCGg5qaAwuBXHQnOebe1OuYqLMzqBaBKye5KK23zSWC9sHAOM_YWa8tryvGLmpD748D3Sy5CsKwZYLSqFM3AVcd3ANHnPcKVTW33KAXPfL8KQKnkM5NgAICh958hVT7GqDkwXbNtoz8Dymvcfw_0000"})))}h.isMDXComponent=!0}}]);