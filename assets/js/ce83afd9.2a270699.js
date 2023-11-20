"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2455],{30175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(85893),i=n(11151);const s={},o="QSCD Types",c={id:"signing/qscd-integration/types",title:"QSCD Types",description:"Based on Article 1 of CID (EU) 2016/650, two main types of QSCD exist:",source:"@site/docs/30-signing/25-qscd-integration/03-types.md",sourceDirName:"30-signing/25-qscd-integration",slug:"/signing/qscd-integration/types",permalink:"/docs/signing/qscd-integration/types",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/25-qscd-integration/03-types.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/signing/qscd-integration/overview"},next:{title:"Introduction",permalink:"/docs/signing/qscd-integration/trident-hsm/overview"}},a={},d=[{value:"List of referred standards to QSCD types",id:"list-of-referred-standards-to-qscd-types",level:2}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"qscd-types",children:"QSCD Types"}),"\n",(0,r.jsxs)(t.p,{children:["Based on Article 1 of ",(0,r.jsx)(t.a,{href:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016D0650",children:"CID (EU) 2016/650"}),", two main types of QSCD exist:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"TYPE 1 QSCD"})," - where the electronic signature creation data or electronic seal creation data is held in an entirely but not necessarily exclusively user-managed environment"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"TYPE 2 QSCD"})," - where a qualified trust service provider (QTSP) manages the electronic signature creation data or electronic seal creation data on behalf of a signatory or of a creator of a seal"]}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"Type 2 QSCD is realized by the combination of a Cryptographic Module (CM) and a dedicated Signature Activation Module (SAM). The CM provides the underlying cryptographic functionalities for secure key generation, signature generation, seal generation and key storage. The SAM ensures sole control of the signatory over the use of his electronic signature creation data and/or electronic seal creation data."}),(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"../sam-integration/overview",children:"SAM Integration"}),", for more information."]})]}),"\n",(0,r.jsx)(t.h2,{id:"list-of-referred-standards-to-qscd-types",children:"List of referred standards to QSCD types"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Identification"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ISO/IEC 15408-1:2009"})}),(0,r.jsx)(t.td,{children:"Information technology \u2014 Security techniques \u2014 Evaluation criteria for IT security \u2014 Part 1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ISO/IEC 15408-2:2008"})}),(0,r.jsx)(t.td,{children:"Information technology \u2014 Security techniques \u2014 Evaluation criteria for IT security \u2014 Part 2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ISO/IEC 15408-3:2008"})}),(0,r.jsx)(t.td,{children:"Information technology \u2014 Security techniques \u2014 Evaluation criteria for IT security \u2014 Part 3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ISO/IEC 18045:2008"})}),(0,r.jsx)(t.td,{children:"Information technology \u2014 Security techniques \u2014 Methodology for IT security evaluation"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"EN 419211-1:2014"})}),(0,r.jsx)(t.td,{children:"Protection profiles for secure signature creation device \u2014 Part 1: Overview"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"EN 419211-2:2013"})}),(0,r.jsx)(t.td,{children:"Protection profiles for secure signature creation device \u2014 Part 2: Device with key generation"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"EN 419211-3:2013"})}),(0,r.jsx)(t.td,{children:"Protection profiles for secure signature creation device \u2014 Part 3: Device with key import"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"EN 419211-4:2013"})}),(0,r.jsx)(t.td,{children:"Protection profiles for secure signature creation device \u2014 Part 4: Extension for device with key generation and trusted channel to certificate generation application"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"EN 419211-5:2013"})}),(0,r.jsx)(t.td,{children:"Protection profiles for secure signature creation device \u2014 Part 5: Extension for device with key generation and trusted channel to signature creation application"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"EN 419211-6:2014"})}),(0,r.jsx)(t.td,{children:"Protection profiles for secure signature creation device \u2014 Part 6: Extension for device with key import and trusted channel to signature creation application"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(67294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);