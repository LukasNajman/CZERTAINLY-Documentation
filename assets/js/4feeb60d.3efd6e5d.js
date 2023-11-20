"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6392],{60686:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(85893),r=n(11151);const s={},o="Introduction",a={id:"signing/sam-integration/entrust-sam/overview",title:"Introduction",description:"The Entrust Signature Activation Module (SAM) is used to deploy a server-side endpoint that will be used by the server signing applications to get data signed (a document hash). The SAM receives the signer authentication data, the signer\u2019s signing key, and the data to be signed through a Signature Activation Protocol (SAP). It interacts with the Entrust nShield\xae Connect XC CC eIDAS (called cryptographic module or CM) to return the encrypted data with the signing key.",source:"@site/docs/30-signing/30-sam-integration/07-entrust-sam/01-overview.md",sourceDirName:"30-signing/30-sam-integration/07-entrust-sam",slug:"/signing/sam-integration/entrust-sam/overview",permalink:"/docs/signing/sam-integration/entrust-sam/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/30-sam-integration/07-entrust-sam/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SAM Crypto Token",permalink:"/docs/signing/sam-integration/sam-cryptotoken"},next:{title:"Entrust SAM Crypto Token Properties",permalink:"/docs/signing/sam-integration/entrust-sam/properties"}},c={},d=[{value:"Entrust SAM Crypto Token vs Crypto Worker",id:"entrust-sam-crypto-token-vs-crypto-worker",level:2},{value:"Entrust SAM Dynamic Configuration Signer",id:"entrust-sam-dynamic-configuration-signer",level:2}];function h(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(e.p,{children:"The Entrust Signature Activation Module (SAM) is used to deploy a server-side endpoint that will be used by the server signing applications to get data signed (a document hash). The SAM receives the signer authentication data, the signer\u2019s signing key, and the data to be signed through a Signature Activation Protocol (SAP). It interacts with the Entrust nShield\xae Connect XC CC eIDAS (called cryptographic module or CM) to return the encrypted data with the signing key."}),"\n",(0,i.jsx)(e.p,{children:"The design of the Entrust SAM is based on the Trustworthy Systems Supporting Server Signing (TW4S) architecture described in the CEN EN 419 241 standards. It implements the CEN EN 419 241-2 standard to be integrated with the Server Signing Application (SSA) as described in CEN EN 419 241-1."}),"\n",(0,i.jsx)(e.p,{children:"The cryptographic module used with the Entrust SAM module is the Entrust nShield Connect XC CC eIDAS HSM, which is Common Criteria certified for CEN EN 419 221-5 and FIPS 140-2 L3."}),"\n",(0,i.jsx)(e.p,{children:"CZERTAINLY Signing solution acts as a server signing application that interacts with the Entrust SAM and provides a simple interface to consume the SAM services."}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:["For more information about the Entrust SAM, please refer to official vendor's site and materials: ",(0,i.jsx)(e.a,{href:"https://www.entrust.com/digital-security/certificate-solutions/products/digital-signing/entrust-signature-activation-module",children:"Entrust Signature Activation Module"})]})}),"\n",(0,i.jsx)(e.h2,{id:"entrust-sam-crypto-token-vs-crypto-worker",children:"Entrust SAM Crypto Token vs Crypto Worker"}),"\n",(0,i.jsx)(e.p,{children:"The CZERTAINLY Signing acts as a Signing Service Privileged User (SSPU) and can invoke service function of the SAM administratively."}),"\n",(0,i.jsxs)(e.p,{children:["The implementation of ",(0,i.jsx)(e.a,{href:"./properties",children:"Entrust SAM Crypto Token"})," contains all required attributes to establish connection with the Entrust SAM interface and start consuming the SAM services."]}),"\n",(0,i.jsxs)(e.p,{children:["The Entrust SAM Crypto Worker implementations define the behaviour of the signing process and authenticates to the Entrust SAM. ",(0,i.jsx)(e.code,{children:"Signer"})," contains the reference for the Entrust SAM Crypto Worker implementation that utilizes the ",(0,i.jsx)(e.a,{href:"./properties",children:"Entrust SAM Crypto Token"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"The following Entrust SAM Crypto Worker implementations are available:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"./crypto-workers/basic-crypto-worker",children:(0,i.jsx)(e.code,{children:"EntrustSAMCryptoWorker"})})," - this is a basic implementation of the Entrust SAM Crypto Worker that must be configured with the Entrust SAM Crypto Token to create access to the Entrust SAM interface."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"./crypto-workers/onetime-crypto-worker",children:(0,i.jsx)(e.code,{children:"EntrustSAMOneTimeCryptoWorker"})})," - this Crypto Worker implementation is used to create a one-time signing keys with short-lived certificates to sign data."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["For a sample configuration of the Entrust SAM Crypto Token, see ",(0,i.jsx)(e.a,{href:"./samples/sample-configuration",children:"Sample Configuration"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"entrust-sam-dynamic-configuration-signer",children:"Entrust SAM Dynamic Configuration Signer"}),"\n",(0,i.jsx)(e.p,{children:"The dynamic configuration is the part of the SAM's public configuration that is likely to change more often. It can be hot swapped, i.e., changed while the SAM is running; it does not need to be stopped."}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.a,{href:"./dynamic-config-signer-properties",children:"Dynamic Configuration Signer"})," offers easy and convenient way to sign and update the dynamic configuration of the SAM."]}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Entrust",src:n(77963).Z+"",title:"Entrust",width:"610",height:"292"})})})]})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},77963:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/Entrust_logo-2b1bc072323497796c0f64c2ca0b0cf6.png"},11151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>o});var i=n(67294);const r={},s=i.createContext(r);function o(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);