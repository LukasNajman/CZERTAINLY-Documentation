"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[354],{80607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var s=n(85893),i=n(11151);const r={},o="Approval Profile",a={id:"certificate-key/concept-design/core-components/approval-profile",title:"Approval Profile",description:"The Approval Profile stands as a fundamental cornerstone within the platform, orchestrating the seamless execution of approval processes for various supported operations. The following offers an in-depth exploration of the Approval Profile and its essential components, ensuring users possess a comprehensive understanding of its function and significance.",source:"@site/docs/10-certificate-key/02-concept-design/04-core-components/22-approval-profile.md",sourceDirName:"10-certificate-key/02-concept-design/04-core-components",slug:"/certificate-key/concept-design/core-components/approval-profile",permalink:"/docs/certificate-key/concept-design/core-components/approval-profile",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/04-core-components/22-approval-profile.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Notification",permalink:"/docs/certificate-key/concept-design/core-components/notification"},next:{title:"Certificate Management",permalink:"/docs/certificate-key/concept-design/modules/certificate-management"}},c={},p=[{value:"Approval steps",id:"approval-steps",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"approval-profile",children:"Approval Profile"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Approval Profile"})," stands as a fundamental cornerstone within the platform, orchestrating the seamless execution of approval processes for various supported operations. The following offers an in-depth exploration of the ",(0,s.jsx)(t.code,{children:"Approval Profile"})," and its essential components, ensuring users possess a comprehensive understanding of its function and significance."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Approval Profile"})," has the following parameters:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Name"}),(0,s.jsxs)(t.td,{children:["The distinctive label assigned to the ",(0,s.jsx)(t.code,{children:"Approval Profile"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UUID"}),(0,s.jsxs)(t.td,{children:["The universally unique identifier uniquely representing the ",(0,s.jsx)(t.code,{children:"Approval Profile"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["A concise yet informative explanation detailing the purpose and characteristics of the ",(0,s.jsx)(t.code,{children:"Approval Profile"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Expiry"}),(0,s.jsx)(t.td,{children:"A time-based parameter expressed in hours, denoting the duration before an approval request automatically expires in the absence of any action"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Approval Steps"}),(0,s.jsx)(t.td,{children:"A list of sequential approval steps that collectively define the progression of the approval process"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"approval-steps",children:"Approval steps"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Approval Profile"})," can define multiple approval steps that are executed in sequence from the first to the last step.\nEach approval step defines the following:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"A textual representation clarifying the intention and focus of the specific approval step"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Approver Type"}),(0,s.jsxs)(t.td,{children:["A classification system encompassing ",(0,s.jsx)(t.code,{children:"User"}),", ",(0,s.jsx)(t.code,{children:"Group"}),", and ",(0,s.jsx)(t.code,{children:"Role"}),", facilitating the assignment of the appropriate approvers to the given step"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Required Approvals"}),(0,s.jsxs)(t.td,{children:["Applicable solely to non-",(0,s.jsx)(t.code,{children:"User"})," approver types, this parameter signifies the cumulative number of approvals needed to advance the approval process"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"User/Group/Role"}),(0,s.jsx)(t.td,{children:"Depending on the designated approver type, this section identifies the specific entity entrusted with the approval for the corresponding step"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["An intrinsic attribute of the ",(0,s.jsx)(t.code,{children:"Approval Profile"})," is its dynamic versioning system. As alterations are introduced, the version of the Approval Profile is incremented. This mechanism ensures meticulous tracking of approval process modifications, catering to both existing and new approval requests."]}),"\n",(0,s.jsx)(t.p,{children:"Authenticated users benefit from the capability to view a comprehensive list of approval requests assigned to them, including the associated statuses. This feature enhances transparency and accountability within the approval workflow."}),"\n",(0,s.jsxs)(t.p,{children:["By comprehending the nuances of the ",(0,s.jsx)(t.code,{children:"Approval Profile"})," and its interconnected components, users are empowered to efficiently navigate and leverage approval processes for optimal authorization workflows."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(67294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);