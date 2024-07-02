"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3568],{14049:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(74848),a=n(28453),s=n(11470),i=n(19365);const o={},c="Constraints",l={id:"contributors/attributes/constraints",title:"Constraints",description:"Constraints define set of rules that are applied for validation of the Attribute content as input. The Attribute content is validated when the Attribute is created or updated. Validation is controlled consistently by the platform and ensures that the Attribute content is valid and can be used for further processing.",source:"@site/docs/60-contributors/10-attributes/07-constraints.mdx",sourceDirName:"60-contributors/10-attributes",slug:"/contributors/attributes/constraints",permalink:"/docs/contributors/attributes/constraints",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/60-contributors/10-attributes/07-constraints.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Content",permalink:"/docs/contributors/attributes/content"},next:{title:"Callbacks",permalink:"/docs/contributors/attributes/callbacks"}},d={},u=[{value:"Constraint properties",id:"constraint-properties",level:2},{value:"Supported constraints types",id:"supported-constraints-types",level:2},{value:"Constraint type description and samples",id:"constraint-type-description-and-samples",level:2},{value:"<code>RegExpAttributeConstraint</code>",id:"regexpattributeconstraint",level:3},{value:"<code>RangeAttributeConstraint</code>",id:"rangeattributeconstraint",level:3},{value:"<code>DateTimeAttributeConstraint</code>",id:"datetimeattributeconstraint",level:3},{value:"Constraint model",id:"constraint-model",level:2}];function h(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",object:"object",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"constraints",children:"Constraints"}),"\n",(0,r.jsxs)(e.p,{children:["Constraints define set of rules that are applied for validation of the ",(0,r.jsx)(e.code,{children:"Attribute"})," content as input. The ",(0,r.jsx)(e.code,{children:"Attribute"})," content is validated when the ",(0,r.jsx)(e.code,{children:"Attribute"})," is created or updated. Validation is controlled consistently by the platform and ensures that the ",(0,r.jsx)(e.code,{children:"Attribute"})," content is valid and can be used for further processing."]}),"\n",(0,r.jsx)(e.admonition,{title:"Attributes that support constraints",type:"info",children:(0,r.jsxs)(e.p,{children:["For more information about ",(0,r.jsx)(e.code,{children:"Attribute"})," types that support constraints, see ",(0,r.jsx)(e.a,{href:"attributes",children:"Attributes"}),"."]})}),"\n",(0,r.jsx)(e.h2,{id:"constraint-properties",children:"Constraint properties"}),"\n",(0,r.jsxs)(e.p,{children:["Every constraint is extended from the base class of ",(0,r.jsx)(e.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/BaseAttributeConstraint.java",children:(0,r.jsx)(e.code,{children:"BaseAttributeConstraint"})})," which is abstracted from ",(0,r.jsx)(e.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/AttributeConstraint.java",children:(0,r.jsx)(e.code,{children:"AttributeConstraint"})}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["The constraint has the following properties defined and inherited from the ",(0,r.jsx)(e.code,{children:"BaseAttributeConstraint"}),":"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Property"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Short description"}),(0,r.jsx)(e.th,{children:"Required"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"description"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"string"})}),(0,r.jsx)(e.td,{children:"Description of the constraint"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"errorMessage"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"string"})}),(0,r.jsx)(e.td,{children:"Error message to be displayed when the constraint is violated"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"type"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#supported-constraints-types",children:(0,r.jsx)(e.code,{children:"AttributeConstraintType"})})}),(0,r.jsx)(e.td,{children:"Type of the constraint"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("span",{class:"badge badge--success",children:"Yes"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"data"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"AttributeConstraint"})}),(0,r.jsx)(e.td,{children:"Data to be used for the constraint"}),(0,r.jsx)(e.td,{children:(0,r.jsx)("span",{class:"badge badge--success",children:"Yes"})})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"supported-constraints-types",children:"Supported constraints types"}),"\n",(0,r.jsxs)(e.p,{children:["Supported constraint types are defined in the ",(0,r.jsx)(e.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/AttributeConstraintType.java",children:(0,r.jsx)(e.code,{children:"AttributeConstraintType"})}),". The following content types are available and supported:"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.code,{children:"AttributeConstraintType"})}),(0,r.jsx)(e.th,{children:"Class"}),(0,r.jsx)(e.th,{children:"Data"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"REGEXP"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/RegexpAttributeConstraint.java",children:(0,r.jsx)(e.code,{children:"RegexpAttributeConstraint"})})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"string"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"RANGE"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/RangeAttributeConstraint.java",children:(0,r.jsx)(e.code,{children:"RangeAttributeConstraint"})})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/data/RangeAttributeConstraintData.java",children:(0,r.jsx)(e.code,{children:"RangeAttributeConstraintData"})})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"DATETIME"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/DateTimeAttributeConstraint.java",children:(0,r.jsx)(e.code,{children:"DateTimeAttributeConstraint"})})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint/data/DateTimeAttributeConstraintData.java",children:(0,r.jsx)(e.code,{children:"DateTimeAttributeConstraintData"})})})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"constraint-type-description-and-samples",children:"Constraint type description and samples"}),"\n",(0,r.jsx)(e.h3,{id:"regexpattributeconstraint",children:(0,r.jsx)(e.code,{children:"RegExpAttributeConstraint"})}),"\n",(0,r.jsx)(e.p,{children:"Use this constraint when the content needs to be validated against a regular expression."}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"json",label:"JSON",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "description": "Alphanumeric Regex Constraint",\n    "errorMessage": "Only alphanumeric characters are allowed",\n    "type": "RegExp",\n    "data": "^[a-zA-Z0-9]*$"\n}\n'})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'AttributeConstraint constraint = new RegexpAttributeConstraint()\nconstraint.setDescription("Alphanumeric Regex Constraint")\nconstraint.setErrorMessage("Only alphanumeric characters are allowed")\nconstraint.setData("^[a-zA-Z0-9]*$");\nconstraint.setType(AttributeConstraintType.REGEXP);\n'})})})]}),"\n",(0,r.jsx)(e.h3,{id:"rangeattributeconstraint",children:(0,r.jsx)(e.code,{children:"RangeAttributeConstraint"})}),"\n",(0,r.jsx)(e.p,{children:"Use this constraint when the content needs to be validated against a range of integers."}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"json",label:"JSON",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "description": "Range Constraint",\n    "errorMessage": "Value should be between 1 and 10",\n    "type": "range",\n    "data": {\n        "from": 1,\n        "to": 10\n    }\n}\n'})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'RangeAttributeConstraintData data = new RangeAttributeConstraintData();\ndata.setFrom(1);\ndata.setTo(10);\n\nRangeAttributeConstraint constraint = new RangeAttributeConstraint();\nconstraint.setDescription("Range Constraint");\nconstraint.setErrorMessage("Value should be between 1 and 10");\nconstraint.setData(data);\nconstraint.setType(AttributeConstraintType.RANGE);\n'})})})]}),"\n",(0,r.jsx)(e.h3,{id:"datetimeattributeconstraint",children:(0,r.jsx)(e.code,{children:"DateTimeAttributeConstraint"})}),"\n",(0,r.jsx)(e.p,{children:"Use this constraint when you need to validate date and time."}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"json",label:"JSON",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n    "description": "Date Time Constraint",\n    "errorMessage": "Value should be between 1 and 10",\n    "type": "datetime",\n    "data": {\n        "from": "2020-01-01T00:00:00.000Z",\n        "to": "2020-12-31T00:00:00.000Z"\n    }\n}\n'})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'DateTimeAttributeConstraintData data = new DateTimeAttributeConstraintData();\ndata.setFrom(LocalDateTime.now());\ndata.setTo(LocalDateTime.of(2023, Month.JULY, 29, 19, 30, 40));\n\nDateTimeAttributeConstraint constraint = new DateTimeAttributeConstraint();\nconstraint.setDescription("Date Time Constraint");\nconstraint.setErrorMessage("Value should be between the provided range");\nconstraint.setData(data);\nconstraint.setType(AttributeConstraintType.DATETIME);\n'})})})]}),"\n",(0,r.jsx)(e.h2,{id:"constraint-model",children:"Constraint model"}),"\n",(0,r.jsxs)(e.p,{children:["The following diagram represents the constraint model inherited from the ",(0,r.jsx)(e.code,{children:"AttributeConstraint"}),". Details can be found in the ",(0,r.jsx)(e.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/tree/master/src/main/java/com/czertainly/api/model/common/attribute/v2/constraint",children:"CZERTAINLY Interfaces repository"}),"."]}),"\n",(0,r.jsx)(e.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/bP5B3i8m34JtdC8Ng5Z02dN1foT0NC1DJOcKfYYPIZq-ga4i44dRZQN4BpCUvnZ10KFdDaH4qR0JscttUd9o1w6dODi7gB5136plDzhaEYAm0Ps0OEi1SkdzT6Kz5D1Y7CT8PuwImjv4nP2RxMQeA_js3f5MnkU2cJAE5OCNk7um9V-qgInqSKKgFXr8HeXleagagB8eSiEkK4a5MIEHMk-FXfRSr3Eflb-GDimbcfw_0000"})]})}function p(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},19365:(t,e,n)=>{n.d(e,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(t){let{children:e,hidden:n,className:i}=t;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:e})}},11470:(t,e,n)=>{n.d(e,{A:()=>C});var r=n(96540),a=n(34164),s=n(23104),i=n(56347),o=n(205),c=n(57485),l=n(31682),d=n(70679);function u(t){return r.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??function(t){return u(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:a}}=t;return{value:e,label:n,attributes:r,default:a}}))}(n);return function(t){const e=(0,l.X)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:n}=t;const a=(0,i.W6)(),s=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(a.location.search);e.set(s,t),a.replace({...a.location,search:e.toString()})}),[s,a])]}function m(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,s=h(t),[i,c]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:s}))),[l,u]=b({queryString:n,groupId:a}),[m,j]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,s]=(0,d.Dv)(n);return[a,(0,r.useCallback)((t=>{n&&s.set(t)}),[n,s])]}({groupId:a}),x=(()=>{const t=l??m;return p({value:t,tabValues:s})?t:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!p({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);c(t),u(t),j(t)}),[u,j,s]),tabValues:s}}var j=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function g(t){let{className:e,block:n,selectedValue:r,selectValue:i,tabValues:o}=t;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=t=>{const e=t.currentTarget,n=c.indexOf(e),a=o[n].value;a!==r&&(l(e),i(a))},u=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},e),children:o.map((t=>{let{value:e,label:n,attributes:s}=t;return(0,f.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:t=>c.push(t),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===e}),children:n??e},e)}))})}function v(t){let{lazy:e,children:n,selectedValue:a}=t;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=s.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a})))})}function y(t){const e=m(t);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function C(t){const e=(0,j.A)();return(0,f.jsx)(y,{...t,children:u(t.children)},String(e))}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function i(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);