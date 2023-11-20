"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2319],{46017:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var n=i(85893),s=i(11151);const r={},a="Introduction",o={id:"signing/saml-authorizer/overview",title:"Introduction",description:"Security Assertion Markup Language 2.0 (SAML 2.0) is a version of the SAML standard for exchanging authentication and authorization identities between security domains. SAML 2.0 is an XML-based protocol that uses security tokens containing assertions to pass information about a principal (usually an end-user) between a SAML authority, named an Identity Provider, and a SAML consumer. The assertions are digitally signed and can be verified with the public key and certificate of the SAML authority. The SAML Authorizer allows having the authorization server separate from the CZERTAINLY Signing application and provides eIDAS compliant authentication and authorization to signing and validation workers using multi-factor authentication (MFA).",source:"@site/docs/30-signing/15-saml-authorizer/01-overview.md",sourceDirName:"30-signing/15-saml-authorizer",slug:"/signing/saml-authorizer/overview",permalink:"/docs/signing/saml-authorizer/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/15-saml-authorizer/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AdES Validator Sample Request",permalink:"/docs/signing/ades-validation/ades-validator/ades-sample-request"},next:{title:"Configuration",permalink:"/docs/signing/saml-authorizer/configuration"}},d={},h=[{value:"Use case example",id:"use-case-example",level:2},{value:"Authentication and authorization flow",id:"authentication-and-authorization-flow",level:2}];function c(e){const t={h1:"h1",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Security Assertion Markup Language 2.0 (SAML 2.0) is a version of the SAML standard for exchanging authentication and authorization identities between security domains. SAML 2.0 is an XML-based protocol that uses security tokens containing assertions to pass information about a principal (usually an end-user) between a SAML authority, named an Identity Provider, and a SAML consumer. The assertions are digitally signed and can be verified with the public key and certificate of the SAML authority. The SAML Authorizer allows having the authorization server separate from the CZERTAINLY Signing application and provides eIDAS compliant authentication and authorization to signing and validation workers using multi-factor authentication (MFA)."}),"\n",(0,n.jsx)(t.h2,{id:"use-case-example",children:"Use case example"}),"\n",(0,n.jsx)(t.p,{children:"There are several authorization servers available and this implementation has been tested with Cryptomathic Authenticator. The following use case example outlines authenticating with Cryptomathic Authenticator (as the SAML authority) to obtain a signed SAML Response, then used in the request sent from the client to CZERTAINLY Signing (the SAML consumer). The client in the following overview could, for example, be an Enterprise application communicating with a document management system."}),"\n",(0,n.jsx)("div",{class:"text--center",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SAML Flow",src:i(64336).Z+"",title:"SAML Flow",width:"728",height:"358"})})}),"\n",(0,n.jsx)(t.h2,{id:"authentication-and-authorization-flow",children:"Authentication and authorization flow"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Step"}),(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Certificate with Public key of the SAML Authority distribution"}),(0,n.jsx)(t.td,{children:"The worker in CZERTAINLY Signing is configured to trust the SAML authority server\u2019s certificate. Authorization rules matching assertion\u2019s attributes from the signed SAML Response are also configured."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"Client or user sends the request to consume service"}),(0,n.jsx)(t.td,{children:"The user requests signing or validation services from Enterprise application."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"Authentication requested"}),(0,n.jsx)(t.td,{children:"The Enterprise application request for authentication for SAML authority providing details about the user\u2019s authentication domain."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"SAML authority provides authentication context"}),(0,n.jsx)(t.td,{children:"The authentication context for the user is provided."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"Authentication context forwarder to user"}),(0,n.jsx)(t.td,{children:"The user receives the authentication context that should be used in order to authenticate to the service from SAML authority. Context is used by the user."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6"}),(0,n.jsx)(t.td,{children:"Authentication of the user"}),(0,n.jsx)(t.td,{children:"User authenticates using credentials with the Authentication server / Identity provider. When MFA is enabled, there may be multiple rounds in the authentication process."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"7"}),(0,n.jsx)(t.td,{children:"Producing signed SAML Response"}),(0,n.jsx)(t.td,{children:"Upon successful authentication, the user receives the signed SAML Response from the SAML authority. The response contains also AudienceRestriction element to specify the target system for use of the SAML Response."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"8"}),(0,n.jsx)(t.td,{children:"Forward signed SAML Response"}),(0,n.jsx)(t.td,{children:"User forwards the signed SAML Response as a proof of successful authentication and authorization for signing / validation request."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"9"}),(0,n.jsx)(t.td,{children:"Request to sign / validate"}),(0,n.jsx)(t.td,{children:"The request with the signed SAML Response is submitted to CZERTAINLY Signing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"Perform task and provide response"}),(0,n.jsx)(t.td,{children:"CZERTAINLY Signing validates the signed SAML Response and its assertion attributes perform the operation and provide a response to Enterprise application."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"11"}),(0,n.jsx)(t.td,{children:"Response"}),(0,n.jsx)(t.td,{children:"User receives response from CZERTAINLY Signing."})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},64336:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/saml-flow-450ed049c24c0ebb26bdeeb48537a385.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var n=i(67294);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);