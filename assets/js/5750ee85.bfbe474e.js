"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7416],{42065:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=i(85893),n=i(11151);const o={},d="Credential Provider",c={id:"certificate-key/connectors/credential-provider",title:"Credential Provider",description:"Overview",source:"@site/docs/10-certificate-key/12-connectors/18-credential-provider.md",sourceDirName:"10-certificate-key/12-connectors",slug:"/certificate-key/connectors/credential-provider",permalink:"/docs/certificate-key/connectors/credential-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/12-connectors/18-credential-provider.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compliance Provider",permalink:"/docs/certificate-key/connectors/compliance-provider"},next:{title:"Cryptography Provider",permalink:"/docs/certificate-key/connectors/cryptography-provider"}},a={},s=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Provider objects",id:"provider-objects",level:2},{value:"Processes",id:"processes",level:2},{value:"Add <code>Credential</code>",id:"add-credential",level:3},{value:"Get <code>Credential</code> details",id:"get-credential-details",level:3},{value:"Update <code>Credential</code>",id:"update-credential",level:3},{value:"Remove <code>Credential</code>",id:"remove-credential",level:3},{value:"Change state of the <code>Credential</code>",id:"change-state-of-the-credential",level:3},{value:"Specification and example",id:"specification-and-example",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",object:"object",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"credential-provider",children:"Credential Provider"}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Typically, when we need to access some service, we need to be properly authenticated and authorized. For this purpose we need to provide information to the service that can be used for this purpose. This is the purpose of the Credential Provider that defines the credential and its properties that are needed to securely access required service."}),"\n",(0,r.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsx)(t.p,{children:"The Credential Provider defines specific configuration of the credentials that can be used across the platform for authentication and authorization."}),"\n",(0,r.jsx)(t.h2,{id:"provider-objects",children:"Provider objects"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"../concept-design/core-components/credential",children:(0,r.jsx)(t.code,{children:"Credential"})})," objects are managed in the platform through the Credential Provider implementation."]}),"\n",(0,r.jsx)(t.h2,{id:"processes",children:"Processes"}),"\n",(0,r.jsxs)(t.p,{children:["The following processes are associated with the Credential Provider and management of the ",(0,r.jsx)(t.code,{children:"Credential"})," objects."]}),"\n",(0,r.jsxs)(t.h3,{id:"add-credential",children:["Add ",(0,r.jsx)(t.code,{children:"Credential"})]}),"\n",(0,r.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/TLAxRiCm3Dpx5GIwrj6U8KZWBXsQeKMw11aOYOc5o990qUdZwoixVg58jKYaZZpUIG00woJ8qjJk8GU0ZGJVr4VYBamNwoCorY0XDkoW4ebfgPG9EYtq3x6WzUvxeKEjC5hLLRMhT9Qy5AioCC5-h_DMQ2QJanQTUXGygtACYrVqUAOwHof4OXGRlCfu59fGXyCIDiR0b1dfja48mfMu9tvgUV-YuTDA1IcIjYUhOIF2zjW89JXY8WF1WrG4jewk6wMRObBKIbZT-fOLwGlGbqr2NcVcKxxsdhG41lHtHnpg1rXhId-UELD43bThY6yMJJFEVBcYioOxCrsspdpqMS0nFUCUc0O5RoGDU-XRvQx0b1edT-M-I_kA_sdAgCxpiUdCyTtkvRb3hycR_Cb-0G00"}),"\n",(0,r.jsxs)(t.h3,{id:"get-credential-details",children:["Get ",(0,r.jsx)(t.code,{children:"Credential"})," details"]}),"\n",(0,r.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/LL2xRiCm3Dpx5GGwEzez506SjKNHZa46Hc9ieNg1eeRqwqlBG9ng4Kwyuzq90E1O1LbQ32yA09larEALkCFwurD1nWYII-C0YqYfep4kstgmlyI2FeNxmUPei7ZJLUkPWgSamzkKcU1yjdeDbidfeyTWNWLdCptmy8u9PugAJ2x4A3udCvFibCjbX1EfNQYGRu2mZ-hkkjfqpn4-ELkg5Igfh-oSZom4xET5rZqRztlZ06fOvJUcS8UoBI07LxgjDMIX9rVm5LJKE97x7q0JzFOZVFNviyXj5RhWICdfn_y1"}),"\n",(0,r.jsxs)(t.h3,{id:"update-credential",children:["Update ",(0,r.jsx)(t.code,{children:"Credential"})]}),"\n",(0,r.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/XL8zJmCn3Dtv5PQOhzblG4Ktio31KdLm4zD6pJcHurJ0hoTtt9S4WYp9Svxzdfq00EopecZfmrq5W4KZb_v4Ci9yzPnGi0UDgKY0YshAhJ4kshopdoIAdiF7piRUOF9cp1fM5ponDWzT58B3mTQjiKAk1Zq6SwzuDjs2coTaF5DVaOc91DL7DkIyhfpZiOMNv509rk2gDmYCQYrq5x9Ne7UVbTWInBTwpKnMem2o-oj_fWsMf_F6TvCathmZ-MxWKLNygIZbZUiR1Z-uN2y7vwzJ5709RxHdfRc3Pz8Y35EfMXM4SWdwQxl_3ANInhTOgfQH_sCAUs9Nly4N"}),"\n",(0,r.jsxs)(t.h3,{id:"remove-credential",children:["Remove ",(0,r.jsx)(t.code,{children:"Credential"})]}),"\n",(0,r.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/XP0nom8n38RtxrS4lldiVeC8DxkuYaDierTiqvAcWlvwUnqy1y4iuNrvafS4061N54Lh37zD05PDNEEPfCjoyvnHC8AcN2N0h9hBQ8nBjcpiaqJHStXiR8e6ipTzQgafU68TjbCIWkFHjZPO8TTCZy7yArxDzDR37Xcl59ioAPEW-iJ6KI2bbJgTHZXGJ7U2rLmJbuYUDy8qaxs1lu3EdonOP3WJI5_Ylex-26XOlsm1jGgtNQK6xT2EsBL7lW00"}),"\n",(0,r.jsxs)(t.h3,{id:"change-state-of-the-credential",children:["Change state of the ",(0,r.jsx)(t.code,{children:"Credential"})]}),"\n",(0,r.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/hL6nJiGm3Dtv2alClUmTJYSLHXRMqmrkQjhe4YTod06-dZH5FKx0HXRdFJ_xsJ80m2ahYfRW7oe0B1gvX96amNnrd50mWCPKnCEYcd9lp1HjFjWF4aN7_lrWOp2Od6bLhP5N8CRHavbSNkEUMj_W7R5sno4AmVbiQ-Yiq5H9XzuyAivcs77tWempXOfCJ2IeBhBPsjzKbqiFpus36_dlhb_RtDi-RUHlliJJ_bzzD_SUXeNi5TmRwFAz3kevbC0YmrZ3WZpJNmtMt8_IUsqLjvrxU2KjmY2KYzScEjNHwjq_0G00"}),"\n",(0,r.jsx)(t.h2,{id:"specification-and-example",children:"Specification and example"}),"\n",(0,r.jsxs)(t.p,{children:["The Credential Provider implements ",(0,r.jsx)(t.a,{href:"common-interfaces/overview",children:"Common Interfaces"}),".\nThere are no additional interfaces needed for the Credential Provider."]}),"\n",(0,r.jsxs)(t.p,{children:["The OpenAPI specification of the Credential Provider can be found here: ",(0,r.jsx)(t.a,{href:"/api/connector-credential-provider/",children:"Connector API - Credential Provider"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>d});var r=i(67294);const n={},o=r.createContext(n);function d(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);