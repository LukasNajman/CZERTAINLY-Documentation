(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8972],{77834:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return C},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var o=t(83117),r=t(80102),i=(t(67294),t(3905)),a=t(93456),c=["components"],s={},l="Info Interface",d={unversionedId:"connectors/description/common-interfaces/info-interface",id:"connectors/description/common-interfaces/info-interface",title:"Info Interface",description:"Overview",source:"@site/docs/12-connectors/05-description/10-common-interfaces/03-info-interface.md",sourceDirName:"12-connectors/05-description/10-common-interfaces",slug:"/connectors/description/common-interfaces/info-interface",permalink:"/docs/connectors/description/common-interfaces/info-interface",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/connectors/description/common-interfaces/overview"},next:{title:"Health Interface",permalink:"/docs/connectors/description/common-interfaces/health-interface"}},p={},f=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Processes",id:"processes",level:2},{value:"Client operations",id:"client-operations",level:3},{value:"Connector self-registration",id:"connector-self-registration",level:3},{value:"Specification and example",id:"specification-and-example",level:2}],u={toc:f};function C(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"info-interface"},"Info Interface"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," has to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Info")," interface. This interface provides information about the list of supported functions and endpoints of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),".\nThe data is validated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Core")," to check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," is compliant with the definition of interfaces based on its function group."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Info")," interface is used during the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," registration and reconnecting to update the information if necessary."),(0,i.kt)("h2",{id:"processes"},"Processes"),(0,i.kt)("h3",{id:"client-operations"},"Client operations"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," with proper permissions can manage the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connectors")," and invoke API that works with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Info")," interface of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),".\nThe following diagrams represents the requests and communication flow."),(0,i.kt)(a.Mermaid,{config:{theme:{light:"neutral",dark:"dark"}},chart:"sequenceDiagram\n    autonumber\n    \n    alt requests\n        Client->>Core: PUT /v1/connectors/connect\n        Note over Client,Core: Connect to the Connector on specified URL and auth\n        Client->>Core: GET /v1/connectors/{uuid}\n        Note over Client,Core: Get details about the Connector\n        Client->>Core: POST /v1/connectors/{uuid}\n        Note over Client,Core: Update Connector\n        Client->>Core: PUT /v1/connectors/{uuid}/reconnect\n        Note over Client,Core: Reconnect to Connector\n    end\n    Core->>Connector: GET /v1\n    Note over Core,Connector: Get information about the Connector\n    Connector--\x3e>Core: Function Groups, Kinds, and EndPoints\n    Core--\x3e>Client: Function Groups, Kinds, and EndPoints",mdxType:"Mermaid"}),(0,i.kt)("h3",{id:"connector-self-registration"},"Connector self-registration"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," is allowed to self-register in the platform. In this case the information about the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," is stored and waiting for approval by the user or administrator.\nThe registration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," may be executed by any external entity."),(0,i.kt)(a.Mermaid,{chart:"sequenceDiagram\n    autonumber\n    \n    Connector->>Core: POST /v1/connector/register\n    Note over Connector,Core: Register Connector (also self-register)\n    Core->>Connector: GET /v1\n    Note over Core,Connector: Get information about the Connector\n    Connector--\x3e>Core: List of supported Function Groups, Kinds, and EndPoints\n    Core--\x3e>Connector: Registered UUID of the Connector",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"specification-and-example"},"Specification and example"),(0,i.kt)("p",null,"You can find specification and information about the ",(0,i.kt)("inlineCode",{parentName:"p"},"Info")," interface on the following locations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/core-connector/"},"Core Connector API")),(0,i.kt)("li",{parentName:"ul"},"Connector API specifications, see for example ",(0,i.kt)("a",{parentName:"li",href:"/api/connector-authority-provider-v2/"},"Authority Provider"))))}C.isMDXComponent=!0},11748:function(e,n,t){var o={"./locale":89234,"./locale.js":89234};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=11748}}]);