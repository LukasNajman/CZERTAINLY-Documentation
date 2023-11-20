"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9004],{4746:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=i(85893),n=i(11151);const o={},s="Overview",c={id:"certificate-key/protocols/scep/overview",title:"Overview",description:"One of the most common use cases for SCEP is to manage certificates for devices that do not have a user interface. For example, a device that is not a computer, such as a router or a printer, or a computer that is not running any user interface. SCEP is also used to manage certificates for mobile devices that are not connected to the network all the time.",source:"@site/docs/10-certificate-key/07-protocols/03-scep/01-overview.md",sourceDirName:"10-certificate-key/07-protocols/03-scep",slug:"/certificate-key/protocols/scep/overview",permalink:"/docs/certificate-key/protocols/scep/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/07-protocols/03-scep/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ansible acme module",permalink:"/docs/certificate-key/protocols/acme/ansible-acme"},next:{title:"SCEP Profile",permalink:"/docs/certificate-key/protocols/scep/scep-profile"}},l={},a=[{value:"Supported capabilities",id:"supported-capabilities",level:2},{value:"Supported operations",id:"supported-operations",level:2},{value:"Supported PKI messages types",id:"supported-pki-messages-types",level:2},{value:"Encryption of the message",id:"encryption-of-the-message",level:2},{value:"Microsoft Intune support",id:"microsoft-intune-support",level:2},{value:"Certificate revocation",id:"certificate-revocation",level:3},{value:"Platform SCEP server management",id:"platform-scep-server-management",level:2},{value:"SCEP Profile vs RA Profile SCEP API",id:"scep-profile-vs-ra-profile-scep-api",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"One of the most common use cases for SCEP is to manage certificates for devices that do not have a user interface. For example, a device that is not a computer, such as a router or a printer, or a computer that is not running any user interface. SCEP is also used to manage certificates for mobile devices that are not connected to the network all the time."}),"\n",(0,r.jsx)(t.p,{children:"The platform implements SCEP (Simple Certificate Enrolment Protocol) protocol for certificate management and certificate and CRL queries. It supports various SCEP clients and are easy to configure and to manage."}),"\n",(0,r.jsxs)(t.p,{children:["Implementation of SCEP server provides a flexibility for the clients and administrators to choose between running SCEP endpoint that are bound to any ",(0,r.jsx)(t.a,{href:"../../concept-design/core-components/ra-profile",children:"RA Profile"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["SCEP implementation follows ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8894",children:"RFC 8894 - Simple Certificate Enrolment Protocol"})," with backward compatibility with ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/draft-nourse-scep-23",children:"draft-nourse-scep-23"}),".\n",(0,r.jsx)(t.a,{href:"#",title:"TODO",children:"//"}),": # (TODO)\nSee ",(0,r.jsx)(t.a,{href:"#",children:"SCEP protocol API"})," for more information about implemented SCEP services."]})}),"\n",(0,r.jsx)(t.h2,{id:"supported-capabilities",children:"Supported capabilities"}),"\n",(0,r.jsxs)(t.p,{children:["The SCEP server implementation supports the following capabilities according to the ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8894#name-ca-capabilities-response-fo",children:"RFC 8894, section 3.5.2"}),":"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Capability"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AES"}),(0,r.jsx)(t.td,{children:"CA supports the AES128-CBC encryption algorithm."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DES3"}),(0,r.jsx)(t.td,{children:"CA supports the triple DES-CBC encryption algorithm."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POSTPKIOperation"}),(0,r.jsx)(t.td,{children:"CA supports PKIOperation messages sent via HTTP POST."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Renewal"}),(0,r.jsx)(t.td,{children:"CA supports the Renewal CA operation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SHA-1"}),(0,r.jsx)(t.td,{children:"CA supports the SHA-1 hashing algorithm."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SHA-256"}),(0,r.jsx)(t.td,{children:"CA supports the SHA-256 hashing algorithm."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SHA-512"}),(0,r.jsx)(t.td,{children:"CA supports the SHA-512 hashing algorithm."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SCEPStandard"}),(0,r.jsxs)(t.td,{children:['CA supports all mandatory-to-implement sections of the SCEP standard. This keyword implies "AES", "POSTPKIOperation", and "SHA-256", as well as the provisions of ',(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8894#name-mandatory-to-implement-func",children:"RFC 8894, section 2.9"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"supported-operations",children:"Supported operations"}),"\n",(0,r.jsx)(t.p,{children:"The following operations are supported by the SCEP implementation:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Operation"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GetCACaps"}),(0,r.jsxs)(t.td,{children:["Get the list of capabilities according to the ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8894#name-messagetype",children:"RFC 8894, section 3.5.1"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GetCACert"}),(0,r.jsxs)(t.td,{children:["Get the CA certificate(s) according to the ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8894#GetCACert",children:"RFC 8894, section 4.2"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PKIOperation"}),(0,r.jsxs)(t.td,{children:["Perform a certificate enrolment, renewal, or polling client certificate according to the ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8894#section-4.3",children:"RFC 8894, section 4.3"})," and ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8894#name-poll-for-client-initial-cer",children:"RFC 8894, section 4.3"})]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"supported-pki-messages-types",children:"Supported PKI messages types"}),"\n",(0,r.jsxs)(t.p,{children:["The following PKI messages are supported by the SCEP implementation according to the ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8894#name-messagetype",children:"RFC 8894, section 3.2.1.2"}),":"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Message type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CertRep"}),(0,r.jsx)(t.td,{children:"Response to certificate or CRL request."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PKCSReq"}),(0,r.jsx)(t.td,{children:"PKCS#10 certificate request authenticated with a shared secret."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RenewalReq"}),(0,r.jsx)(t.td,{children:"PKCS#10 certificate request authenticated with an existing certificate."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CertPoll"}),(0,r.jsx)(t.td,{children:"Certificate polling in manual enrolment."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"encryption-of-the-message",children:"Encryption of the message"}),"\n",(0,r.jsxs)(t.p,{children:["Encryption of the message data, according to the ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8894#name-scep-message-object-process",children:"RFC 8894, section 3.1"})," is supported using:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"the recipient's public key with the CMS KeyTransRecipientInfo mechanism (key is encryption capable)"}),"\n",(0,r.jsx)(t.li,{children:"the challengePassword with the CMS PasswordRecipientInfo mechanism (key is not encryption capable)"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"microsoft-intune-support",children:"Microsoft Intune support"}),"\n",(0,r.jsxs)(t.p,{children:["The SCEP protocol implementation supports the Microsoft Intune request validation. For more information, see ",(0,r.jsx)(t.a,{href:"../../integration-guides/intune/overview",children:"Intune Integration Guide"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"certificate-revocation",children:"Certificate revocation"}),"\n",(0,r.jsxs)(t.p,{children:["The certificates that are published by Intune to be revoked are checked on each Intune enabled ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," every hour.\nRevocation request is submitted to associated ",(0,r.jsx)(t.code,{children:"RA Profile"})," to revoke certificate and result is published back to Intune."]}),"\n",(0,r.jsx)(t.h2,{id:"platform-scep-server-management",children:"Platform SCEP server management"}),"\n",(0,r.jsx)(t.p,{children:"In order to start with the SCEP protocol, the platform must be configured and act as the SCEP server."}),"\n",(0,r.jsxs)(t.p,{children:["For this purpose we define the ",(0,r.jsx)(t.a,{href:"./scep-profile",children:(0,r.jsx)(t.code,{children:"SCEP Profile"})})," that contains configuration of the SCEP server."]}),"\n",(0,r.jsxs)(t.p,{children:["You can manage ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," through the web interface or through the ",(0,r.jsx)(t.a,{href:"#",children:(0,r.jsx)(t.code,{children:"Core SCEP API"})}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"scep-profile-vs-ra-profile-scep-api",children:"SCEP Profile vs RA Profile SCEP API"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," can be configured with or without default ",(0,r.jsx)(t.code,{children:"RA Profile"}),". On the other hand, you can enable SCEP protocol (with the reference to already configured ",(0,r.jsx)(t.code,{children:"SCEP Profile"}),") for any particular ",(0,r.jsx)(t.code,{children:"RA Profile"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"There are the following options for SCEP service available:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"SCEP service using"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"SCEP Profile"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"https://<hostname>:<port>/api/v1/protocols/scep/{scepProfileName}/pkiclient.exe"})]}),(0,r.jsxs)(t.td,{children:["To use ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," directly from the client. In this case, the ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," must have configured a default ",(0,r.jsx)(t.code,{children:"RA Profile"}),", otherwise the SCEP service won't be working. This option provides flexibility to change the underlying ",(0,r.jsx)(t.code,{children:"RA Profile"})," without changing the configuration of SCEP client"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"RA Profile"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"https://<hostname>:<port>/api/v1/protocols/scep/raProfile/{raProfileName}/pkiclient.exe"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"RA Profile"})," can enable SCEP protocol by using specific and already configured ",(0,r.jsx)(t.code,{children:"SCEP Profile"}),". The SCEP service is in this case managed by the ",(0,r.jsx)(t.code,{children:"RA Profile"})," and you do not have to configure it as a default for ",(0,r.jsx)(t.code,{children:"SCEP Profile"}),". This option provides a way, how to assign multiple ",(0,r.jsx)(t.code,{children:"RA Profiles"})," with general SCEP service configuration"]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["When to use ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," and when ",(0,r.jsx)(t.code,{children:"RA Profile"})," SCEP service?"]})}),"\n",(0,r.jsx)(t.p,{children:"Depends on what you would like to achieve:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["if you would like to allow SCEP clients to work only with one specific ",(0,r.jsx)(t.code,{children:"RA Profile"})," then enable SCEP protocol for the ",(0,r.jsx)(t.code,{children:"RA Profile"})," using pre-configured ",(0,r.jsx)(t.code,{children:"SCEP Profile"})]}),"\n",(0,r.jsxs)(t.li,{children:["if you would like to have the flexibility in changing the ",(0,r.jsx)(t.code,{children:"RA Profile"})," which is used by the SCEP client, then use ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," service and configure the default ",(0,r.jsx)(t.code,{children:"RA Profile"})," for it (that can be changed when needed)"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SCEP Profile"})," can be used with multiple ",(0,r.jsx)(t.code,{children:"RA Profiles"}),"."]})}),"\n",(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsx)(t.p,{children:"The platform performs various validations on the backend including the following:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Availability of the ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," or ",(0,r.jsx)(t.code,{children:"RA Profile"})]}),"\n",(0,r.jsxs)(t.li,{children:["Status of the ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," or ",(0,r.jsx)(t.code,{children:"RA Profile"})]}),"\n",(0,r.jsxs)(t.li,{children:["If both ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," and ",(0,r.jsx)(t.code,{children:"RA Profile"})," are available and enabled"]}),"\n",(0,r.jsxs)(t.li,{children:["If the ",(0,r.jsx)(t.code,{children:"SCEP Profile"})," has configured default ",(0,r.jsx)(t.code,{children:"RA Profile"})]}),"\n"]})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>s});var r=i(67294);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);