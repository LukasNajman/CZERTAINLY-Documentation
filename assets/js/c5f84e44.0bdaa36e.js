"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5034],{41623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(85893),r=t(11151);const s={},o="Create User and Login",a={id:"certificate-key/integration-guides/keycloak/create-user-login",title:"Create User and Login",description:"Create user in the CZERTAINLY realm following steps described in the Creating users section of the Keycloak documentation, with these attributes:",source:"@site/docs/10-certificate-key/20-integration-guides/10-keycloak/07-create-user-login.md",sourceDirName:"10-certificate-key/20-integration-guides/10-keycloak",slug:"/certificate-key/integration-guides/keycloak/create-user-login",permalink:"/docs/certificate-key/integration-guides/keycloak/create-user-login",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/20-integration-guides/10-keycloak/07-create-user-login.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure OIDC",permalink:"/docs/certificate-key/integration-guides/keycloak/configure-oidc"},next:{title:"Add CZERTAINLY Theme",permalink:"/docs/certificate-key/integration-guides/keycloak/czertainly-theme"}},c={},l=[{value:"Login",id:"login",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-user-and-login",children:"Create User and Login"}),"\n",(0,i.jsxs)(n.p,{children:["Create user in the CZERTAINLY realm following steps described in the ",(0,i.jsx)(n.a,{href:"https://www.keycloak.org/docs/latest/server_admin/#proc-creating-user_server_administration_guide",children:"Creating users"})," section of the Keycloak documentation, with these attributes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Username: ",(0,i.jsx)(n.strong,{children:"admin"})]}),"\n",(0,i.jsxs)(n.li,{children:["Email: ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"mailto:admin@czertainly.local",children:"admin@czertainly.local"})})]}),"\n",(0,i.jsxs)(n.li,{children:["First name: ",(0,i.jsx)(n.strong,{children:"CZERTAINLY"})]}),"\n",(0,i.jsxs)(n.li,{children:["Last name: ",(0,i.jsx)(n.strong,{children:"Administrator"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the attributes mapping to define roles for the user. For that purpose, set the user attributes according to ",(0,i.jsx)(n.a,{href:"https://www.keycloak.org/docs/latest/server_admin/#proc-configuring-user-attributes_server_administration_guide",children:"Configuring user attributes"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["groups: ",(0,i.jsx)(n.strong,{children:"superadmin"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This will map the ",(0,i.jsx)(n.code,{children:"groups"})," attribute to the ",(0,i.jsx)(n.code,{children:"roles"})," attribute in the JSON ID of the user and the resulting JSON ID will look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "email_verified": true,\n  "roles": [\n    "superadmin"\n  ],\n  "username": "admin",\n  "sub": "5560f639-8067-415d-85ae-809b06e48d19",\n  "given_name": "CZERTAINLY",\n  "family_name": "Administrator",\n  "email": "admin@czertainly.local",\n  "id": "5560f639-8067-415d-85ae-809b06e48d19",\n  "preferred_username": "admin",\n  "name": "CZERTAINLY Administrator"\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"JSON ID",type:"info",children:(0,i.jsxs)(n.p,{children:["JSON ID will be forwarder by the API gateway to CZERTAINLY. The JSON ID contains the payload from the Userinfo Endpoint of the Keycloak OpenID Connect provider. For more information, see ",(0,i.jsx)(n.a,{href:"../../concept-design/architecture/access-control/identification#json-id",children:"JSON ID"})," in the access control section."]})}),"\n",(0,i.jsxs)(n.admonition,{title:"Automatic registration of user and roles",type:"info",children:[(0,i.jsxs)(n.p,{children:["By default the users and roles that do not exists are rejected. However, in some cases, it is desirable to automatically register the user and roles. This is required for example when single sign-on (SSO) and user federation is allowed. The behavior of the user and roles registration is controlled by the values ",(0,i.jsx)(n.code,{children:"createUnknownUsers"})," and ",(0,i.jsx)(n.code,{children:"createUnknownRoles"})," in the ",(0,i.jsx)(n.code,{children:"Auth"})," service. If you want to enable automatic registration of users and roles, set the following values when installing or upgrading Helm chart:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'authService:\n  createUnknownUsers: "true"\n  createUnknownRoles: "true"\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"login",children:"Login"}),"\n",(0,i.jsx)(n.p,{children:"You can login to CZERTAINLY with configured user:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the CZERTAINLY login page: ",(0,i.jsx)(n.code,{children:"https://<CZERTAINLY_DOMAIN>/login"})]}),"\n",(0,i.jsxs)(n.li,{children:["Login with username ",(0,i.jsx)(n.code,{children:"admin"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);