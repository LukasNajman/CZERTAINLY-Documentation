"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6676],{72738:(e,a,t)=>{t.r(a),t.d(a,{GenTable:()=>h,assets:()=>o,contentTitle:()=>d,data:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(85893),r=t(11151),s=t(67294);const i={},d="AdES Validator Properties",l={id:"signing/ades-validation/ades-validator/ades",title:"AdES Validator Properties",description:"The implementation class of the AdES Validator is:",source:"@site/docs/30-signing/10-ades-validation/10-ades-validator/01-ades.mdx",sourceDirName:"30-signing/10-ades-validation/10-ades-validator",slug:"/signing/ades-validation/ades-validator/ades",permalink:"/docs/signing/ades-validation/ades-validator/ades",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/10-ades-validation/10-ades-validator/01-ades.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Default Validation Policy",permalink:"/docs/signing/ades-validation/default-policy"},next:{title:"AdES Validator Sample Configuration",permalink:"/docs/signing/ades-validation/ades-validator/ades-sample"}},o={},c=[{property:"REPORT_TYPE",description:(0,n.jsxs)(n.Fragment,{children:["Report type to be returned after the validation process is complete. Allowed values are:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"SIMPLE - for a simple report"}),(0,n.jsx)("li",{children:"DETAILED - for a detailed report"}),(0,n.jsx)("li",{children:"DIAGNOSTIC - for a diagnostic data report"}),(0,n.jsx)("li",{children:"ETSI - for ETSI validation report"}),(0,n.jsx)("li",{children:"ALL - to return all of the above"})]})]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"OUTPUT_TYPE",description:(0,n.jsxs)(n.Fragment,{children:["Output format of the report. Allowed values are:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"XML"}),(0,n.jsx)("li",{children:"JSON"}),(0,n.jsx)("li",{children:"YAML"})]})]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"TRUSTED_CERTIFICATES",description:(0,n.jsx)(n.Fragment,{children:"Contains list of PEM certificates to use as a trusted sources, additionally to the LOTL and TLs. This is the place where you need to provide your trusted certificates that are not part of the public trust list."}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"LOTL and TLs"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"INCLUDE_SEMANTICS",description:(0,n.jsxs)(n.Fragment,{children:["Sets if the semantics for Indication / SubIndication must be included in the report (see table 5 / 6 of the ETSI TS 119 102-1)",(0,n.jsx)("br",{}),(0,n.jsx)("b",{children:"true / false"})]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"VALIDATION_LEVEL",description:(0,n.jsxs)(n.Fragment,{children:["Sets an expected signature validation level. Supported values are:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"BASIC_SIGNATURES"}),(0,n.jsx)("li",{children:"TIMESTAMPS"}),(0,n.jsx)("li",{children:"LONG_TERM_DATA"}),(0,n.jsx)("li",{children:"ARCHIVAL_DATA"})]})]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"ARCHIVAL_DATA"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"VALIDATION_POLICY",description:(0,n.jsxs)(n.Fragment,{children:["Provide a custom validation policy. The custom validation policy must be provided as XML document. See example of the ",(0,n.jsx)("a",{href:"../default-policy",children:"default validation policy"}),"."]}),default:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--secondary",children:"default validation policy"})}),mandatory:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],h=({data:e})=>{const a={b:"b",td:"td",tr:"tr",...(0,r.a)()};return(0,n.jsx)(s.Fragment,{children:e.map(((e,t)=>(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.b,{children:e.property})}),(0,n.jsx)(a.td,{children:e.description}),(0,n.jsx)(a.td,{children:e.default}),(0,n.jsx)(a.td,{children:e.mandatory})]},t)))})},p=[];function u(e){const a={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"ades-validator-properties",children:"AdES Validator Properties"}),"\n",(0,n.jsx)(a.p,{children:"The implementation class of the AdES Validator is:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"com.czertainly.signserver.module.ades.validator.AdESValidator\n"})}),"\n",(0,n.jsx)(a.p,{children:"It contains the integration with the DSS framework and extends the Worker interface of the SignServer. If you want to use the AdES Validator, you must specify this property. The AdES Validator will check the following configuration properties."}),"\n","\n","\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("th",{children:"Property"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsx)("th",{children:"Default Value"}),(0,n.jsx)("th",{children:"Mandatory"}),(0,n.jsx)("tbody",{children:(0,n.jsx)(h,{data:c})})]})]})}function x(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>d,a:()=>i});var n=t(67294);const r={},s=n.createContext(r);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);