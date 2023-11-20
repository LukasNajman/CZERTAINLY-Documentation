"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8911],{22291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var c=t(85893),i=t(11151);const r={},o="Connector",d={id:"certificate-key/concept-design/architecture/connector",title:"Connector",description:"Connector is the component that is used to communicate with the specific technology. In other words, Connector can be described as the service that translates actions and messages from other technologies to the platform.",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/04-connector.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture",slug:"/certificate-key/concept-design/architecture/connector",permalink:"/docs/certificate-key/concept-design/architecture/connector",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/02-architecture/04-connector.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interfaces",permalink:"/docs/certificate-key/concept-design/architecture/interfaces"},next:{title:"Notifications",permalink:"/docs/certificate-key/concept-design/architecture/notifications"}},s={},h=[{value:"<code>Connector</code> building blocks",id:"connector-building-blocks",level:2},{value:"<code>Function Group</code>",id:"function-group",level:3},{value:"<code>Kind</code>",id:"kind",level:3},{value:"<code>Attribute</code>",id:"attribute",level:3},{value:"<code>End Point</code>",id:"end-point",level:3},{value:"<code>Callback</code>",id:"callback",level:3},{value:"<code>Connector</code> Authentication",id:"connector-authentication",level:3},{value:"Interfaces implemented by the <code>Connector</code>",id:"interfaces-implemented-by-the-connector",level:3},{value:"How it works together?",id:"how-it-works-together",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"connector",children:"Connector"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Connector"})," is the component that is used to communicate with the specific technology. In other words, ",(0,c.jsx)(n.code,{children:"Connector"})," can be described as the service that translates actions and messages from other technologies to the platform."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Connector"})," is technology independent and can be developed with any programming language. Each ",(0,c.jsx)(n.code,{children:"Connector"})," implements specific ",(0,c.jsx)(n.code,{children:"Function Groups"})," and ",(0,c.jsx)(n.code,{children:"Kinds"})," and must be registered and approved within the ",(0,c.jsx)(n.code,{children:"Core"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["For more information about the ",(0,c.jsx)(n.code,{children:"Connector"})," interfaces, refer to ",(0,c.jsx)(n.a,{href:"interfaces",children:"Interfaces"}),"."]}),"\n",(0,c.jsxs)(n.h2,{id:"connector-building-blocks",children:[(0,c.jsx)(n.code,{children:"Connector"})," building blocks"]}),"\n",(0,c.jsx)(n.h3,{id:"function-group",children:(0,c.jsx)(n.code,{children:"Function Group"})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"Function Group"})," of a ",(0,c.jsx)(n.code,{children:"Connector"})," describes the functions it can perform. It represents its capabilities."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Function Group"})," can be combined, for example, a ",(0,c.jsx)(n.code,{children:"Connector"})," can implement both ",(0,c.jsx)(n.code,{children:"Credential Provider"})," and ",(0,c.jsx)(n.code,{children:"Authority Provider"})," ",(0,c.jsx)(n.code,{children:"Function Group"}),", however, ",(0,c.jsx)(n.code,{children:"Kinds"})," cannot be mixed."]}),"\n",(0,c.jsxs)(n.p,{children:["The platform supports the following ",(0,c.jsx)(n.code,{children:"Connector"})," ",(0,c.jsx)(n.code,{children:"Function Groups"}),":"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Function Group"}),(0,c.jsx)(n.th,{children:"Description"}),(0,c.jsx)(n.th,{children:"Interfaces needed to implement"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../connectors/credential-provider",children:(0,c.jsx)(n.code,{children:"Credential Provider"})})}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"Connector"})," that provides a specific type of the ",(0,c.jsx)(n.code,{children:"Credential"})," to the platform. ",(0,c.jsx)(n.code,{children:"Credential"})," can be further used by the objects and other ",(0,c.jsx)(n.code,{children:"Connector"})," of the platform"]}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/api/connector-credential-provider",children:"Credential Provider API"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../connectors/discovery-provider",children:(0,c.jsx)(n.code,{children:"Discovery Provider"})})}),(0,c.jsx)(n.td,{children:"Provides an interface to search for a certificates within a specific technology and sources"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/api/connector-discovery-provider",children:"Discovery Provider API"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../connectors/authority-provider-legacy",children:(0,c.jsx)(n.code,{children:"Legacy Authority Provider"})})}),(0,c.jsx)(n.td,{children:"Provides a connection with the certification authority and certificate management functions"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/api/connector-authority-provider-legacy",children:"Legacy Authority Provider API"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../connectors/authority-provider-v2",children:(0,c.jsx)(n.code,{children:"Authority Provider"})})}),(0,c.jsx)(n.td,{children:"Provides a connection with the certification authority and certificate management functions"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/api/connector-authority-provider-v2",children:"Authority Provider API"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../connectors/entity-provider",children:(0,c.jsx)(n.code,{children:"Entity Provider"})})}),(0,c.jsx)(n.td,{children:"Provides access to end entities and their locations to automate certificate and key lifecycle operations"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/api/connector-entity-provider",children:"Entity Provider API"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../connectors/compliance-provider",children:(0,c.jsx)(n.code,{children:"Compliance Provider"})})}),(0,c.jsx)(n.td,{children:"Defines compliance rules that can be applied to certificates and validate against"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/api/connector-compliance-provider",children:"Compliance Provider API"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"../../connectors/cryptography-provider",children:(0,c.jsx)(n.code,{children:"Cryptography Provider"})})}),(0,c.jsx)(n.td,{children:"Provides cryptographic key management and operations using specific technology"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/api/connector-cryptography-provider",children:"Cryptography Provider API"})})]})]})]}),"\n",(0,c.jsx)(n.h3,{id:"kind",children:(0,c.jsx)(n.code,{children:"Kind"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Kind"})," represents the technology that single ",(0,c.jsx)(n.code,{children:"Function Group"})," implements."]}),"\n",(0,c.jsxs)(n.p,{children:["Each ",(0,c.jsx)(n.code,{children:"Connector"})," can implement multiple ",(0,c.jsx)(n.code,{children:"Function Groups"})," and each ",(0,c.jsx)(n.code,{children:"Function Group"})," can implement multiple ",(0,c.jsx)(n.code,{children:"Kinds"}),". The platform combines the power of ",(0,c.jsx)(n.code,{children:"Function Group"})," and ",(0,c.jsx)(n.code,{children:"Kind"})," to achieve multiple implementations in a single ",(0,c.jsx)(n.code,{children:"Connector"})," if needed. But we always recommend creating a separate ",(0,c.jsx)(n.code,{children:"Connector"})," for different technology for easy maintenance."]}),"\n",(0,c.jsx)(n.h3,{id:"attribute",children:(0,c.jsx)(n.code,{children:"Attribute"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Attribute"})," is the input the ",(0,c.jsx)(n.code,{children:"Connector"})," may require for the request processing.\nWhen the ",(0,c.jsx)(n.code,{children:"Connector"})," is requested to perform the operation, it uses ",(0,c.jsx)(n.code,{children:"Attributes"})," to get the list of required inputs with the format definition."]}),"\n",(0,c.jsx)(n.h3,{id:"end-point",children:(0,c.jsx)(n.code,{children:"End Point"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"End Point"})," is the API that is implemented by the ",(0,c.jsx)(n.code,{children:"Connector"}),". A ",(0,c.jsx)(n.code,{children:"Connector"})," must include a few mandatory ",(0,c.jsx)(n.code,{children:"End Points"}),". These pre-defined, standard endpoints are used by the ",(0,c.jsx)(n.code,{children:"Core"})," to determine if the ",(0,c.jsx)(n.code,{children:"Connector"})," is compliant with the platform."]}),"\n",(0,c.jsxs)(n.p,{children:["See ",(0,c.jsxs)(n.a,{href:"interfaces#connector-interfaces",children:[(0,c.jsx)(n.code,{children:"Connector"})," Interfaces"]})," for more information about the required ",(0,c.jsx)(n.code,{children:"End Points"}),"."]}),"\n",(0,c.jsx)(n.h3,{id:"callback",children:(0,c.jsx)(n.code,{children:"Callback"})}),"\n",(0,c.jsxs)(n.p,{children:["Each ",(0,c.jsx)(n.code,{children:"Connector"})," can implement ",(0,c.jsx)(n.code,{children:"Callback"})," for any ",(0,c.jsx)(n.code,{children:"Attribute"}),". ",(0,c.jsx)(n.code,{children:"Callback"})," is the ways to fetch the values that are dependent on the input from other ",(0,c.jsx)(n.code,{children:"Attribute"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Callback"})," is implemented as specific ",(0,c.jsx)(n.code,{children:"End Point"}),"."]}),"\n",(0,c.jsxs)(n.h3,{id:"connector-authentication",children:[(0,c.jsx)(n.code,{children:"Connector"})," Authentication"]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"Connector"})," can be implemented without authentication, but when needed, authentication can be included. The platform implements the following authentication types:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Basic (username/password)"}),"\n",(0,c.jsx)(n.li,{children:"Client certificate"}),"\n",(0,c.jsx)(n.li,{children:"API Key"}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"interfaces-implemented-by-the-connector",children:["Interfaces implemented by the ",(0,c.jsx)(n.code,{children:"Connector"})]}),"\n",(0,c.jsxs)(n.p,{children:["All Connectors must implement their respective interfaces. For more information, refer to ",(0,c.jsx)(n.a,{href:"interfaces",children:"Interfaces"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"how-it-works-together",children:"How it works together?"}),"\n",(0,c.jsxs)(n.p,{children:["The following steps explain how the ",(0,c.jsx)(n.code,{children:"Connector"})," works:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Connector"})," will be registered with the ",(0,c.jsx)(n.code,{children:"Core"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Core"})," validates the compliance of the ",(0,c.jsx)(n.code,{children:"Connector"})," and its ",(0,c.jsx)(n.code,{children:"Function Groups"})," together with ",(0,c.jsx)(n.code,{children:"Kinds"})]}),"\n",(0,c.jsxs)(n.li,{children:["Once the registration is complete, the ",(0,c.jsx)(n.code,{children:"Connector"})," can provide its functionality to the platform"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["To perform any operations with ",(0,c.jsx)(n.code,{children:"Connector"}),", the ",(0,c.jsx)(n.code,{children:"Client"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Requests the ",(0,c.jsx)(n.code,{children:"Core"})," for the operation"]}),"\n",(0,c.jsxs)(n.li,{children:["Provides necessary attributes related to the ",(0,c.jsx)(n.code,{children:"Connector"})," implementation"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var c=t(67294);const i={},r=c.createContext(i);function o(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);