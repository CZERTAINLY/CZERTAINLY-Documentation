"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2692],{56649:function(e,i,t){t.r(i),t.d(i,{assets:function(){return s},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return r},toc:function(){return d}});var n=t(85893),o=t(11151);const c={},a="Notification Provider",r={id:"certificate-key/connectors/notification-provider",title:"Notification Provider",description:"Notification Provider provides interface to extend the notification features of the platform. Notification Provider can be used to send notifications to the users of the platform using email, SMS, Slack, Team, webhook, or any other technology.",source:"@site/docs/10-certificate-key/12-connectors/26-notification-provider.mdx",sourceDirName:"10-certificate-key/12-connectors",slug:"/certificate-key/connectors/notification-provider",permalink:"/docs/certificate-key/connectors/notification-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/12-connectors/26-notification-provider.mdx",tags:[],version:"current",sidebarPosition:26,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity Provider",permalink:"/docs/certificate-key/connectors/entity-provider"},next:{title:"Available Connectors",permalink:"/docs/certificate-key/connectors/available-connectors"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Provider objects",id:"provider-objects",level:2},{value:"Processes related to <code>Notification</code>",id:"processes-related-to-notification",level:2},{value:"Create <code>Notification</code> instance",id:"create-notification-instance",level:3},{value:"Get <code>Notification</code> instance details",id:"get-notification-instance-details",level:3},{value:"Update <code>Notification</code> instance",id:"update-notification-instance",level:3},{value:"Delete <code>Notification</code> instance",id:"delete-notification-instance",level:3},{value:"Sending notifications",id:"sending-notifications",level:2},{value:"Specification and example",id:"specification-and-example",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",object:"object",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"notification-provider",children:"Notification Provider"}),"\n",(0,n.jsx)(i.admonition,{title:"Using Notification Provider",type:"info",children:(0,n.jsx)(i.p,{children:"Notification Provider provides interface to extend the notification features of the platform. Notification Provider can be used to send notifications to the users of the platform using email, SMS, Slack, Team, webhook, or any other technology."})}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.p,{children:"Notification Provider handles notifications that should be sent to the users outside the scope of the deployment of the platform (external notification). The Notification Provider can be used to send notifications to the users of the platform using various technologies. Typical use cases are sending notifications to the users using email, however, the Notification Provider can be also used to create tickets in the ticketing system."}),"\n",(0,n.jsx)(i.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,n.jsxs)(i.p,{children:["Notification Provider consumes notification data from the ",(0,n.jsx)(i.code,{children:"Core"})," and sends the notifications to the recipient(s) using the configured technology."]}),"\n",(0,n.jsx)(i.h2,{id:"provider-objects",children:"Provider objects"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"../concept-design/core-components/notification",children:(0,n.jsx)(i.code,{children:"Notification"})})," objects are managed in the platform through the Notification Provider implementation.\nEach ",(0,n.jsx)(i.code,{children:"Notification"})," represents a single notification processing definition."]}),"\n",(0,n.jsxs)(i.h2,{id:"processes-related-to-notification",children:["Processes related to ",(0,n.jsx)(i.code,{children:"Notification"})]}),"\n",(0,n.jsxs)(i.p,{children:["The following processes are associated with the Notification Provider and management of the ",(0,n.jsx)(i.code,{children:"Notification"})," objects."]}),"\n",(0,n.jsxs)(i.h3,{id:"create-notification-instance",children:["Create ",(0,n.jsx)(i.code,{children:"Notification"})," instance"]}),"\n",(0,n.jsx)(i.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/dP8nRy8m48Nt_egJEeVi6H0exS3G3gteWXWEvm0BvvoUpuZsrrTE84qGRQLcS1BVUtT-dmm0C0kAeh5sTm006DLph3SaxMyuM6vGi0RrJHG7UzKc57bUUHCcvfD4qRBxc1XVvzZOl7MbftIMM26RGkc5OBKoNYXZhtPh3QhrdDyhxlB7av8mkknvKCgUa757DR7clY7fz4O8bOQw1GT5DhHU5p2lAXZMla-I1a_JMa2v9tC0EjcWn8R0Rw7qp6JK2o3_qg5BSf4My8RELgW4SrMncwWK1lgBBZldB-25GdIQ1lO6E7OzVX-Lo9s_H_YoHlpHLYGTnn4-U-OI_WEoRAi_aUYJ3SxOqx2UKqAXzqX1UnTx9H2xs-i8U35W1oWz3we0TvWoWEu9RDsuDa7NFpMtqcxyHLoZy2W728N6Sw0Rl8MWW5TDxolBbYHTbYjFChLt_FQavNBnq3fcn5MitHS0"}),"\n",(0,n.jsxs)(i.h3,{id:"get-notification-instance-details",children:["Get ",(0,n.jsx)(i.code,{children:"Notification"})," instance details"]}),"\n",(0,n.jsx)(i.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/dP4_QyCm4CNtVeg3pexs32MGbjAX7Rg631VfR8jAT-9qxhzFN-ounAQ5GZL9w3tTJ-y10EogeTgGqnK000ucFEGJwNIiBv4BAcOmAOCcwCrAtJeNnDUD_oGrZ9m-DbwomnBTv1hNFaLYW-O6zg84XuCNfOR5OXizMXHsruQTktitKiRKF2skcaTax2WJcvD2UjPtP4lH0rT3zdGyRk6U308PnbH1MbZABaGZnyJ3JDv49wXvlo9hYifh3AHdn1LPdAVMVp7-2iPY11gxtaRs4NCBjvVFM4yh7yGAHSLJhHG0EO2NV8fC0TwYzMkjKajAx0bQbGnZ2Oj0leDevfgsy4msAA_Vc8Fz6UHKyT-U7N4OSle2"}),"\n",(0,n.jsxs)(i.h3,{id:"update-notification-instance",children:["Update ",(0,n.jsx)(i.code,{children:"Notification"})," instance"]}),"\n",(0,n.jsx)(i.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/dP8nJyD038LtVeKbvZHx1rHKCJ30W0HBrS6vkAdXuZjylWhuzIYNKb8HWKIcvCv-xtrF0G1O9KErtFiB003C5YJt3MdvJ2yi4HLxi12pUjYRnRIiwpQuj70Vf8Oi_dtXGbzZvBfi3S_QCub1TGNhe0IRZGjAbGJZ7Jiq3b9V6dRrpPkH2lhgVd9LtQ5WHps9rI6IZlFKiasdRYKPYgFjTWcFiKKZc5v_Hna2b20Yv2meBE49FPUDQpFb9XkboVpNN7MCluG7IjaRXDra0GwZoEzU0_dn_Go_YXeEt9AEFPpXyv4ipHUH2-p_gZYXJJAUwk0W0wBIQwPaWDB2w7KIa604ojs-T35HcDI2Ib_LK0lOuO03jYVWFle2CreDFgpbuA_sBQkS8O5IYa4IpLIl1BCrWDAEbCGHi9H0BHes-4DaK2d_xxnrQ9x9MTbPaRIvzvy0"}),"\n",(0,n.jsxs)(i.h3,{id:"delete-notification-instance",children:["Delete ",(0,n.jsx)(i.code,{children:"Notification"})," instance"]}),"\n",(0,n.jsx)(i.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/dP6nJWCn44Hxlc8bwelx52XIeA20WZPAONoJn8gzjjRh2FXwTBvBoA7Gu6gjdP7VZ8c8LaMjQ8tXZeZ8LarSupkaNSlHSxPY8sdALG8TL7DP6jCdLnRk2wBMS_XSk1IDpTuqrt3MmOELkWTQ9m5jDYu9EaxgTzvPzOdDlTgzUVfG2DlGlLwjkXVBTey8LfCoPDJt251Swvwvg6M7xNP9RuZf1BfU_y0C26UK9QqFS4VgaS4zs7cK6qfcE4tIoATvXjzbIIVVGyOSCtm_SPNRGQIX_Y_86QkRuWnwhS8pFRMgXa5GSkA2lwfuR9tEpO8T1En-cmPN-zNBcvTdYbgjOuihS5zZ-0O0"}),"\n",(0,n.jsx)(i.h2,{id:"sending-notifications",children:"Sending notifications"}),"\n",(0,n.jsxs)(i.p,{children:["Once the notification should be sent to the recipient(s), the ",(0,n.jsx)(i.code,{children:"Notification"})," object is used as proxy to the Notification Provider. The ",(0,n.jsx)(i.code,{children:"Notification"})," object contains the information about how the notification should be processed. The ",(0,n.jsx)(i.code,{children:"Notification"})," with the provided notification data."]}),"\n",(0,n.jsx)(i.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/RP31IWGn38RlFaN0SxVtESY2PqNqkEmXTk9OR9EQf0lhquiZgrsON9AGV7z-0W2mDqVrNiiD001s5-xrbNHjxIDpGyKABgrhWNVtPbECioJRfIzInypbl4jI8xOSL-edxaK9mjsQ9tWKpsyveMTXCD9JJhInoap9HU5mI9Swy826fdBACscyTLpYg1eocoCdil20Z0jLOe_IIDTnDE9vt3yU9tWXdc7K1wNFJkQ3jOkbqTy4Jog9pAxWBUZl0S_aNVdwMFiLoRo0alNYcy-3_sjAreID8BEJCfPoNf4zyTnh-GO0"}),"\n",(0,n.jsx)(i.h2,{id:"specification-and-example",children:"Specification and example"}),"\n",(0,n.jsxs)(i.p,{children:["The Notification Provider implements ",(0,n.jsx)(i.a,{href:"common-interfaces/overview",children:"Common Interfaces"})," and the following additional interfaces:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api/connector-notification-provider/#tag/Notification-instances-Management",children:"Notification Instances Management"})}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The OpenAPI specification of the Notification Provider can be found here: ",(0,n.jsx)(i.a,{href:"/api/connector-notification-provider/",children:"Connector API - Notification Provider"}),"."]})]})}function f(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:function(e,i,t){t.d(i,{Z:function(){return r},a:function(){return a}});var n=t(67294);const o={},c=n.createContext(o);function a(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);