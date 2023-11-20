"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9560],{40786:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=i(85893),o=i(11151);const c={},r="Configure OIDC",a={id:"certificate-key/integration-guides/keycloak/configure-oidc",title:"Configure OIDC",description:"CZERTAINLY supports the configuration of the OIDC through the configuration of Helm chart values.",source:"@site/docs/10-certificate-key/20-integration-guides/10-keycloak/05-configure-oidc.md",sourceDirName:"10-certificate-key/20-integration-guides/10-keycloak",slug:"/certificate-key/integration-guides/keycloak/configure-oidc",permalink:"/docs/certificate-key/integration-guides/keycloak/configure-oidc",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/20-integration-guides/10-keycloak/05-configure-oidc.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Realm and Client",permalink:"/docs/certificate-key/integration-guides/keycloak/create-realm"},next:{title:"Create User and Login",permalink:"/docs/certificate-key/integration-guides/keycloak/create-user-login"}},s={},l=[{value:"Configure OIDC Client",id:"configure-oidc-client",level:2},{value:"Configure CORS",id:"configure-cors",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-oidc",children:"Configure OIDC"}),"\n",(0,t.jsx)(n.p,{children:"CZERTAINLY supports the configuration of the OIDC through the configuration of Helm chart values.\nApply the following settings to enable OIDC and CORS."}),"\n",(0,t.jsx)(n.h2,{id:"configure-oidc-client",children:"Configure OIDC Client"}),"\n",(0,t.jsxs)(n.p,{children:["To enable OIDC client, set the ",(0,t.jsx)(n.code,{children:"oidc.enabled"})," value to ",(0,t.jsx)(n.code,{children:"true"})," and configure the following values:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiGateway:\n  # kong-oidc plugin: https://github.com/revomatico/kong-oidc\n  # this plugin inserts user data into X-USERINFO header\n  oidc:\n    # if oidc is enabled, all client values must be present\n    enabled: false\n    client:\n      # oidc client id\n      id: czertainly\n      # oidc client secret\n      secret: s0qKH5qItTWoxpBt7Zrj348ZhZ7woAbk\n      # realm used in www-authenticate response header\n      realm: czertainly\n      # oidc discovery endpoint\n      discovery: https://<KEYCLOKA_SERVER>/.well-known/openid-configuration\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configure-cors",children:"Configure CORS"}),"\n",(0,t.jsxs)(n.p,{children:["To enable CORS, set the ",(0,t.jsx)(n.code,{children:"cors.enabled"})," value to ",(0,t.jsx)(n.code,{children:"true"})," and configure the following values:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiGateway:\n  # kong cors plugin: https://docs.konghq.com/hub/kong-inc/cors\n  cors:\n    enabled: false\n    # list of allowed domains for the Access-Control-Allow-Origin header\n    origins:\n      - '*'\n    # list of values for the Access-Control-Expose-Headers header\n    exposedHeaders:\n      - X-Auth-Token\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(67294);const o={},c=t.createContext(o);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);