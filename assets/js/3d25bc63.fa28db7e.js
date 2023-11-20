"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1930],{91734:(e,n,r)=>{r.r(n),r.d(n,{GenTable:()=>h,assets:()=>c,contentTitle:()=>d,data:()=>g,default:()=>u,frontMatter:()=>i,keygen:()=>p,management:()=>m,metadata:()=>o,toc:()=>l,usermanagement:()=>x});var a=r(85893),t=r(11151),s=r(67294);const i={},d="Trident SAM Crypto Token Properties",o={id:"signing/sam-integration/trident-sam/properties",title:"Trident SAM Crypto Token Properties",description:"TridentSAMCryptoToken implements the Trident SAM and requires access to Trident QSCD.",source:"@site/docs/30-signing/30-sam-integration/09-trident-sam/03-properties.mdx",sourceDirName:"30-signing/30-sam-integration/09-trident-sam",slug:"/signing/sam-integration/trident-sam/properties",permalink:"/docs/signing/sam-integration/trident-sam/properties",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/30-sam-integration/09-trident-sam/03-properties.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/signing/sam-integration/trident-sam/overview"},next:{title:"Trident SAM Crypto Token Sample Configuration",permalink:"/docs/signing/sam-integration/trident-sam/sample-properties"}},c={},l=[{value:"Signing-only mode",id:"signing-only-mode",level:2},{value:"Key Management mode",id:"key-management-mode",level:2},{value:"MANUAL and HYBRID key generation",id:"manual-and-hybrid-key-generation",level:3},{value:"User Management Mode",id:"user-management-mode",level:2}],g=[{property:"TRIDENT_URL",description:(0,a.jsx)(a.Fragment,{children:"URL to access the Trident SAM."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"TRIDENT_CEISK",description:(0,a.jsx)(a.Fragment,{children:"Infrastructural certificate for encryption, represented as PEM encoded string."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"TRIDENT_CSISK",description:(0,a.jsx)(a.Fragment,{children:"Infrastructural certificate for digital signature, represented as PEM encoded string."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"CERT_STORAGE_IMPLEMENTATION_CLASS",description:(0,a.jsx)(a.Fragment,{children:"Implementation class for certificate storage. Certificates issued for assigned signing keys will be stored according the implementation provided. Each implementation may have additional properties that needs to be configured."}),default:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"}),(0,a.jsx)("br",{}),"See ",(0,a.jsx)("a",{href:"../../cert-storage-providers/overview",children:"Certificate Storage Providers"})," for more information."]}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"SAP_PROVIDER_IMPLEMENTATION_CLASS",description:(0,a.jsx)(a.Fragment,{children:"Implementation class for Signature Activation Protocol handling between the Signature Integration Component and the Signature Activation Module. This is the interface for providing the Signature Activation Data to be used in order to execute signing operation."}),default:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"}),(0,a.jsx)("br",{}),"See ",(0,a.jsx)("a",{href:"./signature-sap-providers/overview",children:"Signature SAP Providers"})," for more information."]}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--success",children:"YES"})})}],h=({data:e})=>{const n={b:"b",td:"td",tr:"tr",...(0,t.a)()};return(0,a.jsx)(s.Fragment,{children:e.map(((e,r)=>(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.b,{children:e.property})}),(0,a.jsx)(n.td,{children:e.description}),(0,a.jsx)(n.td,{children:e.default}),(0,a.jsx)(n.td,{children:e.mandatory})]},r)))})},m=[{property:"TRIDENT_KEY_ADMIN",description:(0,a.jsx)(a.Fragment,{children:"Identification of the key administrator."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"TRIDENT_KEY_ADMIN_PASSWORD",description:(0,a.jsx)(a.Fragment,{children:"Password associated with the key administrator."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"TRIDENT_KEY_ADMIN_TOTP_SEED",description:(0,a.jsx)(a.Fragment,{children:"TOTP seed associated with the key administrator, in HEX format."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"TRIDENT_KEY_ADMIN_TOTP_STEP",description:(0,a.jsx)(a.Fragment,{children:"TOTP step for generating correct codes for TOTP authentication. TOPS step is represented in seconds."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"TRIDENT_KEY_ADMIN_TOTP_REFRESH_INTERVAL",description:(0,a.jsx)(a.Fragment,{children:"Refresh interval of the key administrator session based on the TOTP authentication. Interval is represented in number of seconds."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"KM_SAP_PROVIDER_IMPLEMENTATION_CLASS",description:(0,a.jsx)(a.Fragment,{children:"Implementation class for the key management operations handling through the Signature Activation Protocol. This interface provides ability for user to activate and manage assigned private keys."}),default:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"}),(0,a.jsx)("br",{}),"See ",(0,a.jsx)("a",{href:"./km-sap-providers/overview",children:"Key Management SAP Providers"})," for more information."]}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"TRIDENT_KEYGEN_MDOE",description:(0,a.jsxs)(a.Fragment,{children:["Mode of the key generation based on the configuration of the Trident HSM. Allowed values are:",(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"AUTO"}),(0,a.jsx)("li",{children:"MANUAL"}),(0,a.jsx)("li",{children:"HYBRID"})]})]}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--success",children:"YES"})})}],p=[{property:"TRIDENT_CM_URL",description:(0,a.jsx)(a.Fragment,{children:"URL to access the Trident CM API."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"TRIDENT_CM_ADMIN_UID",description:(0,a.jsx)(a.Fragment,{children:"Identification of the CM administrator."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"TRIDENT_CM_ADMIN_PASSWORD",description:(0,a.jsx)(a.Fragment,{children:"Password associated with the CM administrator."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"TRIDENT_CM_ADMIN_SESSION_REFRESH_INTERVAL",description:(0,a.jsx)(a.Fragment,{children:"Refresh interval of the CM administrator session. Interval is represented in number of seconds."}),default:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],x=[{property:"UM_SAP_PROVIDER_IMPLEMENTATION_CLASS",description:(0,a.jsx)(a.Fragment,{children:"Implementation class for the user management operations handling through the Signature Activation Protocol. This interface provides ability to manage users and the authorisation configuration."}),default:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{class:"badge badge--secondary",children:"NONE"}),(0,a.jsx)("br",{}),"See ",(0,a.jsx)("a",{href:"./user-sap-providers/overview",children:"User Management SAP Providers"})," for more information."]}),mandatory:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{class:"badge badge--danger",children:"NO"})})}];function j(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"trident-sam-crypto-token-properties",children:"Trident SAM Crypto Token Properties"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"TridentSAMCryptoToken"})," implements the Trident SAM and requires access to Trident QSCD.\nOnce configured, it can be used to create remote signatures on behalf of the users. The ",(0,a.jsx)(n.code,{children:"TridentSAMCryptoToken"})," can be attached to any ",(0,a.jsx)(n.code,{children:"Signer"})," implementation."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"TridentSAMCryptoToken"})," can be operated in 2 modes:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Signing-only mode:"})," To support only remote signing operations (the user and key management is handled by different component in the solution)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Key Management mode:"})," To support signing, user, and key management operations (in this case, it is a single point of SAM key management)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"User Management mode:"})," To suppord additional user management functions, such as create user, configure authorization, or remove user."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The implementation class of the ",(0,a.jsx)(n.code,{children:"TridentSAMCryotoToken"})," Worker is:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"com.czertainly.signserver.trident.TridentSAMCryptoToken\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The Worker seamlessly integrates with the Trident SAM interface. The ",(0,a.jsx)(n.code,{children:"TridentSAMCryptoToken"})," Worker will check the following configuration properties."]}),"\n",(0,a.jsx)(n.h2,{id:"signing-only-mode",children:"Signing-only mode"}),"\n","\n","\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("th",{children:"Property"}),(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("th",{children:"Default Value"}),(0,a.jsx)("th",{children:"Mandatory"}),(0,a.jsx)("tbody",{children:(0,a.jsx)(h,{data:g})})]}),"\n",(0,a.jsx)(n.h2,{id:"key-management-mode",children:"Key Management mode"}),"\n",(0,a.jsx)(n.p,{children:"For the Key Management mode, the same properties as for the Signing-only mode must be configured. Additional properties are defined in order to support the management of the users and assigned keys. The following properties are optional for the Signing-only mode, but mandatory for Key Management mode:"}),"\n","\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("th",{children:"Property"}),(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("th",{children:"Default Value"}),(0,a.jsx)("th",{children:"Mandatory"}),(0,a.jsx)("tbody",{children:(0,a.jsx)(h,{data:m})})]}),"\n",(0,a.jsx)(n.h3,{id:"manual-and-hybrid-key-generation",children:"MANUAL and HYBRID key generation"}),"\n",(0,a.jsxs)(n.p,{children:["In order to enable ",(0,a.jsx)(n.strong,{children:"MANUAL"})," or ",(0,a.jsx)(n.strong,{children:"HYBRID"})," key generation mode, additional configuration properties must be available. These are not mandatory in case of ",(0,a.jsx)(n.strong,{children:"AUTO"})," key generation mode:"]}),"\n","\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("th",{children:"Property"}),(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("th",{children:"Default Value"}),(0,a.jsx)("th",{children:"Mandatory"}),(0,a.jsx)("tbody",{children:(0,a.jsx)(h,{data:p})})]}),"\n",(0,a.jsx)(n.h2,{id:"user-management-mode",children:"User Management Mode"}),"\n",(0,a.jsx)(n.p,{children:"User Management mode is an extension of the Key Management mode allowing you to manage SAM users. The Key Management Mode must be configured in order to use the User Management mode. This mode allows you to manage users independently of the key management operations. The following properties are optional for other modes, but mandatory for User Management mode:"}),"\n","\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("th",{children:"Property"}),(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("th",{children:"Default Value"}),(0,a.jsx)("th",{children:"Mandatory"}),(0,a.jsx)("tbody",{children:(0,a.jsx)(h,{data:x})})]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var a=r(67294);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);