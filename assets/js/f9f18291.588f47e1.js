"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3365],{24636:(e,n,r)=>{r.r(n),r.d(n,{GenTable:()=>p,assets:()=>c,basic:()=>x,contentTitle:()=>a,data:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>o,tls:()=>j,toc:()=>l});var s=r(85893),t=r(11151),i=r(67294);const d={},a="REST SAD Provider",o={id:"signing/sam-integration/entrust-sam/sad-providers/rest",title:"REST SAD Provider",description:"The implementation class of the REST SAD Provider is:",source:"@site/docs/30-signing/30-sam-integration/07-entrust-sam/07-sad-providers/03-rest.mdx",sourceDirName:"30-signing/30-sam-integration/07-entrust-sam/07-sad-providers",slug:"/signing/sam-integration/entrust-sam/sad-providers/rest",permalink:"/docs/signing/sam-integration/entrust-sam/sad-providers/rest",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/30-sam-integration/07-entrust-sam/07-sad-providers/03-rest.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/signing/sam-integration/entrust-sam/sad-providers/overview"},next:{title:"Metadata SAD Provider",permalink:"/docs/signing/sam-integration/entrust-sam/sad-providers/metadata"}},c={},l=[{value:"Authorization types",id:"authorization-types",level:2},{value:"BASIC",id:"basic",level:3},{value:"TLS",id:"tls",level:3},{value:"Keystore formats",id:"keystore-formats",level:4},{value:"Truststore formats",id:"truststore-formats",level:4},{value:"OpenAPI Definition",id:"openapi-definition",level:2},{value:"v1",id:"v1",level:3},{value:"v2",id:"v2",level:3}],h=[{property:"SAD_PROVIDER_URL",description:(0,s.jsx)(s.Fragment,{children:"URL to get the Signature Activation Data. The URL should implement REST interface of this provider."}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"SAD_PROVIDER_AUTH_TYPE",description:(0,s.jsxs)(s.Fragment,{children:["Authorization type for the REST API. Supported values are:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"NONE"}),(0,s.jsx)("li",{children:"BASIC"}),(0,s.jsx)("li",{children:"TLS"})]}),"See information about the authentication properties below."]}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"SAD_PROVIDER_RESPONSE_TIMEOUT",description:(0,s.jsx)(s.Fragment,{children:"Response timeout in seconds."}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"60"})}),mandatory:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],p=({data:e})=>{const n={b:"b",td:"td",tr:"tr",...(0,t.a)()};return(0,s.jsx)(i.Fragment,{children:e.map(((e,r)=>(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.b,{children:e.property})}),(0,s.jsx)(n.td,{children:e.description}),(0,s.jsx)(n.td,{children:e.default}),(0,s.jsx)(n.td,{children:e.mandatory})]},r)))})},x=[{property:"SAD_PROVIDER_USERNAME",description:(0,s.jsx)(s.Fragment,{children:"Identification of the user."}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory for ",(0,s.jsx)("b",{children:"SAD_PROVIDER_AUTH_TYPE = BASIC"})]})},{property:"SAD_PROVIDER_PASSWORD",description:(0,s.jsx)(s.Fragment,{children:"Password for the username."}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory for ",(0,s.jsx)("b",{children:"SAD_PROVIDER_AUTH_TYPE = BASIC"})]})}],j=[{property:"SAD_PROVIDER_KEYSTORE_FORMAT",description:(0,s.jsxs)(s.Fragment,{children:["Format of the keystore provided. Supported values are:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"CRYPTOTOKEN"}),(0,s.jsx)("li",{children:"BASE64"}),(0,s.jsx)("li",{children:"FILE"})]})]}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory for ",(0,s.jsx)("b",{children:"SAD_PROVIDER_AUTH_TYPE = TLS"})]})},{property:"SAD_PROVIDER_KEYSTORE_ALIAS",description:(0,s.jsx)(s.Fragment,{children:"Alias of the private key stored in the keystore."}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory for ",(0,s.jsx)("b",{children:"SAD_PROVIDER_AUTH_TYPE = TLS"})]})},{property:"SAD_PROVIDER_KEYSTORE_INDEX",description:(0,s.jsxs)(s.Fragment,{children:["Index of the Crypto Token that is configured in ",(0,s.jsx)("b",{children:"OTHER_SIGNERS"})," property."]}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory for ",(0,s.jsx)("b",{children:"SAD_PROVIDER_KEYSTORE_FORMAT = CRYPTOTOKEN"})]})},{property:"SAD_PROVIDER_KEYSTORE",description:(0,s.jsxs)(s.Fragment,{children:["Referring to the keystore content. See ",(0,s.jsx)("a",{href:"#keystore-formats",children:"Keystore formats"}),"."]}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory for ",(0,s.jsx)("b",{children:"SAD_PROVIDER_KEYSTORE_FORMAT = BASE64, FILE"})]})},{property:"SAD_PROVIDER_KEYSTORE_TYPE",description:(0,s.jsxs)(s.Fragment,{children:["Type of the keystore. Supported values are:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"PKCS12"}),(0,s.jsx)("li",{children:"JKS"})]})]}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory for ",(0,s.jsx)("b",{children:"SAD_PROVIDER_KEYSTORE_FORMAT = BASE64, FILE"})]})},{property:"SAD_PROVIDER_KEYSTORE_PASSWORD",description:(0,s.jsx)(s.Fragment,{children:"Password for the keystore."}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory for ",(0,s.jsx)("b",{children:"SAD_PROVIDER_KEYSTORE_FORMAT = BASE64, FILE"})]})},{property:"SAD_PROVIDER_TRUSTSTORE",description:(0,s.jsxs)(s.Fragment,{children:["Referring to the truststore content. See ",(0,s.jsx)("a",{href:"#truststore-formats",children:"Truststore formats"}),"."]}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SAD_PROVIDER_TRUSTSTORE_FORMAT",description:(0,s.jsxs)(s.Fragment,{children:["Format of the truststore provided. Supported values are:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"PEM"}),(0,s.jsx)("li",{children:"BASE64"}),(0,s.jsx)("li",{children:"FILE"})]})]}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory when ",(0,s.jsx)("b",{children:"SAD_PROVIDER_TRUSTSTORE"})," provided"]})},{property:"SAD_PROVIDER_TRUSTSTORE_TYPE",description:(0,s.jsxs)(s.Fragment,{children:["Type of the truststore. Supported values are:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"PKCS12"}),(0,s.jsx)("li",{children:"JKS"})]})]}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory for ",(0,s.jsx)("b",{children:"SAD_PROVIDER_TRUSTSTORE_FORMAT = BASE64, FILE"})]})},{property:"SAD_PROVIDER_TRUSTSTORE_PASSWORD",description:(0,s.jsx)(s.Fragment,{children:"Password for the truststore."}),default:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,s.jsxs)(s.Fragment,{children:["Mandatory for ",(0,s.jsx)("b",{children:"SAD_PROVIDER_TRUSTSTORE_FORMAT = BASE64, FILE"})]})}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"rest-sad-provider",children:"REST SAD Provider"}),"\n",(0,s.jsx)(n.p,{children:"The implementation class of the REST SAD Provider is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"com.czertainly.signserver.module.entrustsam.sad.RestSAMSadProvider\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following properties can be configured for the REST SAD Provider:"}),"\n","\n","\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Default Value"}),(0,s.jsx)("th",{children:"Mandatory"}),(0,s.jsx)("tbody",{children:(0,s.jsx)(p,{data:h})})]}),"\n",(0,s.jsx)(n.h2,{id:"authorization-types",children:"Authorization types"}),"\n",(0,s.jsx)(n.h3,{id:"basic",children:"BASIC"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SAP_PROVIDER_AUTH_TYPE = BASIC"})," needs additional properties to be configured, in particular:"]}),"\n","\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Default Value"}),(0,s.jsx)("th",{children:"Mandatory"}),(0,s.jsx)("tbody",{children:(0,s.jsx)(p,{data:x})})]}),"\n",(0,s.jsx)(n.h3,{id:"tls",children:"TLS"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SAP_PROVIDER_AUTH_TYPE = TLS"})," authenticates based on client certificate provided and server identity (TLS mutual authentication). The following options are available for the configuration of ",(0,s.jsx)(n.code,{children:"TLS"})," authentication:"]}),"\n","\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Default Value"}),(0,s.jsx)("th",{children:"Mandatory"}),(0,s.jsx)("tbody",{children:(0,s.jsx)(p,{data:j})})]}),"\n",(0,s.jsx)(n.h4,{id:"keystore-formats",children:"Keystore formats"}),"\n",(0,s.jsxs)(n.p,{children:["The supported values for ",(0,s.jsx)(n.code,{children:"SAD_PROVIDER_KEYSTORE_FORMAT"})," are defined as:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"CRYPTOTOKEN"})})," - the keystore is provided as reference to other Crypto Token defined in the SignServer. It must be part of the ",(0,s.jsx)(n.code,{children:"OTHER_SIGNERS"})," property"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"BASE64"})})," - The keystore is provided as Base64-encoded value that is part of the ",(0,s.jsx)(n.code,{children:"SAD_PROVIDER_KEYSTORE"})," property"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"FILE"})})," - The keystore is loaded from the filesystem and the absolute path for the keystore is expected to be provided as part of the ",(0,s.jsx)(n.code,{children:"SAD_PROVIDER_KEYSTORE"})," property"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"truststore-formats",children:"Truststore formats"}),"\n",(0,s.jsxs)(n.p,{children:["The supported values for ",(0,s.jsx)(n.code,{children:"SAD_PROVIDER_TRUSTSTORE_FORMAT"})," are defined as:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"PEM"})})," - the truststore is provided as list of PEM-encoded certificates to be used as a trusted sources and is expected to be provided as part of the ",(0,s.jsx)(n.code,{children:"SAD_PROVIDER_TRUSTSTORE"})," property"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"BASE64"})})," - The truststore is provided as Base64-encoded value that is part of the ",(0,s.jsx)(n.code,{children:"SAD_PROVIDER_TRUSTSTORE"})," property"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"FILE"})})," - The keystore is loaded from the filesystem and the absolute path for the keystore is expected to be provided as part of the ",(0,s.jsx)(n.code,{children:"SAD_PROVIDER_TRUSTSTORE"})," property"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"openapi-definition",children:"OpenAPI Definition"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"v2"})," implementation of the OpenAPI definition is mandatory to use batch signing. See ",(0,s.jsx)(n.a,{href:"../../../ades-formats/batch-signing",children:"Batch Signing"})," for more information."]})}),"\n",(0,s.jsx)(n.h3,{id:"v1",children:"v1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.3\ninfo:\n  title: REST Signature SAP Provider\n  version: v1\npaths:\n  /v1/sad/buildSad:\n    post:\n      operationId: buildSad\n      requestBody:\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/BuildSadRequestDTO'\n        required: true\n      responses:\n        \"200\":\n          description: OK\n          content:\n            '*/*':\n              schema:\n                $ref: '#/components/schemas/BuildSadResponseDTO'\ncomponents:\n  schemas:\n    BuildSadRequestDTO:\n      type: object\n      properties:\n        userId:\n          type: string\n        keyId:\n          type: string\n        dtbs:\n          type: string\n        metadata:\n          type: object\n          additionalProperties:\n            type: string\n    BuildSadResponseDTO:\n      type: object\n      properties:\n        sad:\n          type: string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"v2",children:"v2"}),"\n",(0,s.jsxs)(n.p,{children:["v2 API supports building Signature Activation Data for multiple data to be signed. It is mandatory to implement to support batch signing.\nSee ",(0,s.jsx)(n.a,{href:"../../../ades-formats/batch-signing",children:"Batch Signing"})," for more information."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.3\ninfo:\n  title: REST Signature SAP Provider\n  version: v1\npaths:\n  /v2/sad/buildSad:\n    post:\n      operationId: buildSad\n      requestBody:\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/BuildSadRequestDTO'\n        required: true\n      responses:\n        \"200\":\n          description: OK\n          content:\n            '*/*':\n              schema:\n                $ref: '#/components/schemas/BuildSadResponseDTO'\ncomponents:\n  schemas:\n    BuildSadRequestDTO:\n      type: object\n      properties:\n        userId:\n          type: string\n        keyId:\n          type: string\n        dtbs:\n          type: array\n          items:\n            type: string\n        metadata:\n          type: object\n          additionalProperties:\n            type: string\n    BuildSadResponseDTO:\n      type: object\n      properties:\n        sad:\n          type: string\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>d});var s=r(67294);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);