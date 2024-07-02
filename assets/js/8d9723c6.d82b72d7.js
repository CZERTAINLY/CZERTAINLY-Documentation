"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2365],{5028:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(74848),r=i(28453);const o={},c="Authority Provider v2",a={id:"certificate-key/connectors/authority-provider-v2",title:"Authority Provider v2",description:"Overview",source:"@site/docs/10-certificate-key/12-connectors/14-authority-provider-v2.md",sourceDirName:"10-certificate-key/12-connectors",slug:"/certificate-key/connectors/authority-provider-v2",permalink:"/docs/certificate-key/connectors/authority-provider-v2",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/12-connectors/14-authority-provider-v2.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authority Provider Legacy",permalink:"/docs/certificate-key/connectors/authority-provider-legacy"},next:{title:"Compliance Provider",permalink:"/docs/certificate-key/connectors/compliance-provider"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Provider objects",id:"provider-objects",level:2},{value:"Processes",id:"processes",level:2},{value:"<code>Authority</code> Instance Management",id:"authority-instance-management",level:2},{value:"Create <code>Authority</code> Instance",id:"create-authority-instance",level:3},{value:"Get <code>Authority</code> Instance Details",id:"get-authority-instance-details",level:3},{value:"Update <code>Authority</code> Instance",id:"update-authority-instance",level:3},{value:"Delete <code>Authority</code> Instance",id:"delete-authority-instance",level:3},{value:"<code>Certificate</code> Management",id:"certificate-management",level:2},{value:"Issue <code>Certificate</code>",id:"issue-certificate",level:3},{value:"Renew <code>Certificate</code>",id:"renew-certificate",level:3},{value:"Revoke <code>Certificate</code>",id:"revoke-certificate",level:3},{value:"Specification and example",id:"specification-and-example",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",object:"object",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"authority-provider-v2",children:"Authority Provider v2"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["Authority Provider v2 interface is used to manage operations with certificates issued by certification authority. The Authority Provider v2 acts as an interface between the ",(0,n.jsx)(t.code,{children:"Core"})," and the certification authority providing the following management functions:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Issue"}),"\n",(0,n.jsx)(t.li,{children:"Renew"}),"\n",(0,n.jsx)(t.li,{children:"Revoke"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,n.jsx)(t.p,{children:"Authority Provider v2 provides the ability to communicate with different types and technologies of certification authorities."}),"\n",(0,n.jsx)(t.h2,{id:"provider-objects",children:"Provider objects"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"../concept-design/core-components/authority",children:(0,n.jsx)(t.code,{children:"Authority"})})," objects are managed in the platform through the Authority Provider v2 implementation."]}),"\n",(0,n.jsx)(t.h2,{id:"processes",children:"Processes"}),"\n",(0,n.jsxs)(t.p,{children:["The following processes are associated with the Authority Provider v2 and management of the ",(0,n.jsx)(t.code,{children:"Authority"})," objects."]}),"\n",(0,n.jsxs)(t.h2,{id:"authority-instance-management",children:[(0,n.jsx)(t.code,{children:"Authority"})," Instance Management"]}),"\n",(0,n.jsxs)(t.h3,{id:"create-authority-instance",children:["Create ",(0,n.jsx)(t.code,{children:"Authority"})," Instance"]}),"\n",(0,n.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/fPAzJkn038Lxdk98r27IBLCWej1Gt0O43Q8m4xCPaTYHnxFyF3rATXCMM76Bcs9YopvpF9yC01V9oJmF_Ga0K7QLF3oopMbwZZAIqG3NCLkFpdrCLLcs6j9PU6TpYjA_dGKTIXfZEQkch-aZYwCuHwF6kByFQbnGzauj-bjvwhGfwoKj_fBGXWSMBtLa8uygPJ0cvxNfIfAJ17vug52tBTO2bigd-sHsFfqLcex3C_Wr9cS937r2eo8SN0qa1_TyaUz6N_egt54VMt96xMxnCJkdW_wbhzW_kC8rfzpxvBOAiDtT4LL-iPfGxUDFNiLekeqjMx7zyx_ichbqW2_-nBU-vs2obK5KcTwr7tFAND7KgrpK6HOtdN-1NItXNk4Tewdn4hsROrh18gQ55RV_eEpPvCWgm3YDAecFa3P6XHkV_aU4r_p4nj-tQUSvB_KHrzlRgykv_OAbpKF_0G00"}),"\n",(0,n.jsxs)(t.h3,{id:"get-authority-instance-details",children:["Get ",(0,n.jsx)(t.code,{children:"Authority"})," Instance Details"]}),"\n",(0,n.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/fP4nQmCn38Nt_Wf1vukXOuQIaaBfq2LhoA3OkZlJisHaEINzzUMkkIIbXGpL9C5xwDCJ0C2g6AhLDDm1060ruPhsfDDOtYDdL4nWagiEq9lbidGkY2yB_qbg67auBhmaXpcwoJNMUeZ41iqZh4K9jbilIWrMwqMZ7TszOUUUvh5vGyQE4h4voQHeKTXrP6V5AnT3zhJRBU6P3EDGG5f0XhC4uabpWHXNJmZCv4rquZZr5vWcgnnY86qE3_y2Uo6xGSHY11gxtaRwaU_7ETRJ7sw81RAAfr8e0780BsaVcG9yHEkl73CCRAWbfR5hLHACuL-bCgVHdDwpX0rPrMloy0trEyhfhpSCA-9Gq_05"}),"\n",(0,n.jsxs)(t.h3,{id:"update-authority-instance",children:["Update ",(0,n.jsx)(t.code,{children:"Authority"})," Instance"]}),"\n",(0,n.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/dLAzJiD03Dvv2alCQIJ63AXLMHXOAfMbwk0cRcEHs97FLrIU7kMQfa5KWBZ9rjdVtnq0m3muciUskGC0mEWgiTsHfJQyiNHes89h5ws1shqBHPvNMePP-K7coDASPgMsENQSfwt-B1icSSWUOQb6iDcKQfHXz5gD_PJVEnxonQNDNb3mG2s9vzgHeRDAJXNxEF8imL5AscuBM7SLEi5u1pnSNkbxqaGkGgMhGG6lsF1vpzru5vt2PFuobmsI2rXHY8s3xgyBS3nZiCeFLBtPeRuwpZhJ8rTasV7XJ-vZClbl_wEVYR8n0rRfVGqo-yuLbWj0gU3CEoA9Ee7neKv9JA2MNvQzfXxWdRrEDOuP0uTBR5Jz4hX7aucjYsSm2frAkFM-Hd0Za75pHNiowYkM9An2nnr-W-gnqfUz8MEzVdvAutEIAhRD9m00"}),"\n",(0,n.jsxs)(t.h3,{id:"delete-authority-instance",children:["Delete ",(0,n.jsx)(t.code,{children:"Authority"})," Instance"]}),"\n",(0,n.jsx)(t.p,{children:"The below diagram shows the sequence of messages that are exchanged between the client, core, and provider to delete an Authority instance."}),"\n",(0,n.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/dP4nQmCn38Nt_Wf1vukXOuQIaYuTkcGD6LpVQs9obemi1z9VNyxDNGfDeTIJXVJqFZyJ4QsAURMQXZiY8bzDkAOtQ2lBCNBswXEPvAe37SnoMJhNIoYBy04r7tauBu8avtDqJJMUzH31HjqZhKL1ssqGHUUh7KIZdTsz-RrxcihkrRFV8u7DIOPwYyAknm33FFJ2nJm7x7PBsY392JJtA5wQLu3HTh9Vqlg0SAGU6To3GqIvCScCOAADzdA_8dTPvHHxQ7Tw-1E-DiP_uqymtUKHeyggyZVLj99QKb6O52KBbrzZU6wHtbgnmJiKFnCSjUqlP__Ph9Yt-fNZ2jpND7m2"}),"\n",(0,n.jsxs)(t.h2,{id:"certificate-management",children:[(0,n.jsx)(t.code,{children:"Certificate"})," Management"]}),"\n",(0,n.jsx)(t.p,{children:"Sections below represents the list of processes involved in managing the certificates."}),"\n",(0,n.jsxs)(t.h3,{id:"issue-certificate",children:["Issue ",(0,n.jsx)(t.code,{children:"Certificate"})]}),"\n",(0,n.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/lLAnRi8m4Dtx5ITrDfOOCo1GkZ1KhLhH1J6Ov02hYSywdoFHhwziKf8YIjMbNcoVtxltxdm00FCWXYMspHq0W8b2BhPRv7mDxzPvmwO58H-vWOE83uNMDLLXKdqWYx6kEKugQhNnLcTMMcLZqGce6PJ42EjrHOogob557jc89HVqlPYzxgRgX5TFmyiPf6q84KjaiJjR6S7Dfe1bYi4eE2WdlQph75P2dCNxip9H3iHMZiepTRP6Ljtqv6AKJ3qQP_ROefEHZyuqjZQ2omi_2n6ssoWOahEt7WL3UEJjovFgErF02uRO2D1k842lPCdzGrb_RU-vX1cKYvlGHLzcpqYrIcJtMzvHQoxXm1WykN3jkncXW6Va7N7xZNEpcvdrAcd_UPeICW_eLK-hrV8X4-RewjWsdm00"}),"\n",(0,n.jsxs)(t.h3,{id:"renew-certificate",children:["Renew ",(0,n.jsx)(t.code,{children:"Certificate"})]}),"\n",(0,n.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/fPB1Ri8m38RlUmfBEuTAE_OmWPWqSPWsRUA4E9ZMq8WcZXod4tlwgO519pfnM2v977_-_pW109X6HT7asZi004pAFhaDITx6lVK11HqeXoGjDAeXbaLHSnKdrHU9elNjOLAnAp3O8bFzcBUMl89vX3aBmMfLiP2fSjHm846rx6DnhxWhkWTpp3UlbvDpKY7awNDEedPhArHQhqjuxsCm25wKUxsJRWdFf31J5Rj9IX6smWu2Ikzj3FQi169tZPxu8Si2sGgsW4AWk2T_i-B5ZlTKAKlknMbjC6d3OlLWWd1dQnBJFHoRCYXcNj3ZZXnv_KTRVlHxCxCI5Z4c6a-TWHawxijg4d-hxhdfr-aW50FxEFvCKC8RoPR5_M8wR6sTx_eNzQ7zF6IKGHk26XKtU2NNa_cZZNfSBXTF6PYIhvDhlm40"}),"\n",(0,n.jsxs)(t.h3,{id:"revoke-certificate",children:["Revoke ",(0,n.jsx)(t.code,{children:"Certificate"})]}),"\n",(0,n.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/lP8nQyCm48Nt_eg3peeXOuQGuBaK4kWICbpaIo9YwyJfP4X_VR7incu8ALsgIJgzf_VT8G20LLGKJKtz0W20ITcdva2IZ_7YV4311fH3aXhEgY4kYg9Y6sVsaqJH-VewizmK65oHNTqgQqTUmIoXP27OxImB6PkhXWC9gcCVYrV5Kz7EJQytx-FDJLG8jNoXaaJTqLbKskyNiCb5c5J7x2un9tjFLbbo_B0tcFJCulHgWd3hAXBJpdkEoMFc3JsUg26l4v8MQrUXqkQUQAqgxf2KOiVsCSXWB4_Wlg7CC9okbvXg1JwE1XYY7Fj_wEll4xuriOHo_Lox7ZeTB9rOa_Yf63e0craWAchwRLxF7X2AWNryz1-4O05RqX_MFX0mGZ-6wixOEVFll0K_fbsHhr9JVm40"}),"\n",(0,n.jsx)(t.h2,{id:"specification-and-example",children:"Specification and example"}),"\n",(0,n.jsxs)(t.p,{children:["The Authority Provider v2 implements ",(0,n.jsx)(t.a,{href:"common-interfaces/overview",children:"Common Interfaces"})," and the following additional interfaces:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api/connector-authority-provider-v2/#tag/Authority-Management",children:"Authority Management"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api/connector-authority-provider-v2/#tag/Certificate-Management",children:"Certificate Management"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The OpenAPI specification of the Authority Provider v2 can be found here: ",(0,n.jsx)(t.a,{href:"/api/connector-authority-provider-v2/",children:"Connector API - Authority Provider v2"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>a});var n=i(96540);const r={},o=n.createContext(r);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);