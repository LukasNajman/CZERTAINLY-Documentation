"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[966],{83428:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(85893),r=i(11151);const a={},s="Initialization",o={id:"certificate-key/installation-guide/deployment/deployment-appliance/initialization",title:"Initialization",description:"To make initial configuration of virtual appliance, you must log into it using default credentials:",source:"@site/docs/10-certificate-key/03-installation-guide/04-deployment/06-deployment-appliance/03-initialization.md",sourceDirName:"10-certificate-key/03-installation-guide/04-deployment/06-deployment-appliance",slug:"/certificate-key/installation-guide/deployment/deployment-appliance/initialization",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/initialization",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/03-installation-guide/04-deployment/06-deployment-appliance/03-initialization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment using Virtual Appliance",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/overview"},next:{title:"Text-based user interface",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-appliance/TUI/intro"}},l={},c=[{value:"Change hostname and networking parameters",id:"change-hostname-and-networking-parameters",level:2},{value:"Update system and packages",id:"update-system-and-packages",level:2},{value:"TLS certificate for CZERTAINLY interface",id:"tls-certificate-for-czertainly-interface",level:2},{value:"Trusted certificates list",id:"trusted-certificates-list",level:2},{value:"Database",id:"database",level:2},{value:"Credentials for CZERTAINLY docker repository",id:"credentials-for-czertainly-docker-repository",level:2},{value:"Configure CZERTAINLY",id:"configure-czertainly",level:2},{value:"Install CZERTAINLY",id:"install-czertainly",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(n.p,{children:"To make initial configuration of virtual appliance, you must log into it using default credentials:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"username"}),": czertainly"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"password"}),": newgenerationtrustcare"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To log in, you can use the console of the virtual machine. Or you can use SSH, which offers higher user comfort like scrolling and easy copy & paste. When you are successfully logged in, you will see the Text-based User Interface (",(0,t.jsx)(n.a,{href:"./TUI/intro",children:(0,t.jsx)(n.strong,{children:"TUI"})}),") for managing the virtual appliance."]}),"\n",(0,t.jsx)(n.p,{children:"The following steps needs to be done to initialize the virtual appliance."}),"\n",(0,t.jsx)(n.admonition,{title:"Mandatory steps",type:"warning",children:(0,t.jsx)(n.p,{children:"Bold items are mandatory even for testing purposes."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#change-hostname-and-networking-parameters",children:"Change hostname and networking parameters"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#update-system-and-packages",children:(0,t.jsx)(n.strong,{children:"Update the system"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#tls-certificate-for-czertainly-interface",children:"Setup TLS certificate"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#trusted-certificates-list",children:"Trusted certificate list"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#database",children:"Configure database"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#credentials-for-czertainly-docker-repository",children:"Configure credentials to CZERTAINLY docker repository"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configure-czertainly",children:(0,t.jsx)(n.strong,{children:"Configure CZERTAINLY"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#install-czertainly",children:(0,t.jsx)(n.strong,{children:"Install CZERTAINLY"})})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"change-hostname-and-networking-parameters",children:"Change hostname and networking parameters"}),"\n",(0,t.jsx)(n.p,{children:"By default, the virtual appliance is configured to use dynamically assigned IP address from a DHCP server."}),"\n",(0,t.jsxs)(n.p,{children:["Default hostname ",(0,t.jsx)(n.code,{children:"czertainly"})," and domain ",(0,t.jsx)(n.code,{children:"local"})," may be useful for development and testing purposes. You need add name ",(0,t.jsx)(n.code,{children:"czertainly.local"})," and VM IP into your ",(0,t.jsx)(n.a,{href:"https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/",children:"hosts\nfile"}),". In production, you will need to set a hostname that will be configured in DNS. To do so, select ",(0,t.jsxs)(n.strong,{children:["Main menu -> ",(0,t.jsx)(n.a,{href:"./TUI/main-menu#configure-hostname",children:"Configure hostname"})]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If your network policy requires using HTTP proxy, you can configure it by selecting ",(0,t.jsxs)(n.strong,{children:["Main menu -> ",(0,t.jsx)(n.a,{href:"./TUI/main-menu#configure-http-proxy",children:"Configure HTTP proxy"})]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"update-system-and-packages",children:"Update system and packages"}),"\n",(0,t.jsxs)(n.p,{children:["It is always good to have current version of ",(0,t.jsx)(n.code,{children:"czertainly-appliance-tools"})," and Debian software. To update packages, select from the main menu ",(0,t.jsx)(n.strong,{children:"Advanced options -> Update Operating System"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"tls-certificate-for-czertainly-interface",children:"TLS certificate for CZERTAINLY interface"}),"\n",(0,t.jsxs)(n.p,{children:["CZERTAINLY is controlled via a web interface. For testing purposes, a self-signed certificate is automatically generated. If you aim to put CZERTAINLY into production, you want to upload a certificate from your internal CA. To do so, select ",(0,t.jsxs)(n.strong,{children:["Main menu -> ",(0,t.jsx)(n.a,{href:"./TUI/main-menu#configure-ingress-tls-certificates",children:"Configure ingress TLS certificates"})]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"trusted-certificates-list",children:"Trusted certificates list"}),"\n",(0,t.jsx)(n.p,{children:"Access to the web interface of CZERTAINLY is authenticated by a client certificate by default."}),"\n",(0,t.jsx)(n.admonition,{title:"Access control",type:"info",children:(0,t.jsxs)(n.p,{children:["There are various options how to configure access control for the platform. See ",(0,t.jsx)(n.a,{href:"../../../concept-design/architecture/access-control/overview",children:"Access control"})," for more information."]})}),"\n",(0,t.jsxs)(n.p,{children:["For testing purposes, you can use preconfigured ",(0,t.jsx)(n.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/master/dummy-certificates/certs/root-ca.cert.pem",children:"Dummy CA certificate"}),". In production system, you will need to replace this list with your own trusted CA certificates. To do this, select ",(0,t.jsxs)(n.strong,{children:["Main menu -> ",(0,t.jsx)(n.a,{href:"./TUI/main-menu#configure-custom-trusted-certificates",children:"Configure custom trusted certificates"})]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,t.jsxs)(n.p,{children:["CZERTAINLY persists all its data in Postgres database. The server will be installed for you, but you might want to set your own password for the database. To do so choose ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./TUI/main-menu#configure-database",children:"Configure database"})})," from the ",(0,t.jsx)(n.strong,{children:"Main menu"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"credentials-for-czertainly-docker-repository",children:"Credentials for CZERTAINLY docker repository"}),"\n",(0,t.jsxs)(n.p,{children:["Some parts of CZERTAINLY are private and can't be provided publicly. Those parts are ",(0,t.jsx)(n.a,{href:"../../../current-versions/",children:"hosted in private Docker repository"})," ",(0,t.jsx)(n.code,{children:"harbor.3key.company"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"Obtain access to private Docker repository",type:"warning",children:(0,t.jsxs)(n.p,{children:["Ask ",(0,t.jsx)(n.a,{href:"../../../../feedback-support/",children:"support"})," for credentials to access private repository."]})}),"\n",(0,t.jsxs)(n.p,{children:["To enter obtained credentials, use option ",(0,t.jsxs)(n.strong,{children:["Main Menu -> ",(0,t.jsx)(n.a,{href:"./TUI/main-menu#configure-docker-repository-access-credentials",children:"Configure Docker repository access credentials"})]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"configure-czertainly",children:"Configure CZERTAINLY"}),"\n",(0,t.jsxs)(n.p,{children:["Option ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./TUI/main-menu#configure-czertainly",children:"Configure CZERTAINLY"})})," of the main menu opens dialog where you can choose version of CZERTAINLY and it's components you want to install."]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsxs)(n.p,{children:["If you are not planning to use email notifications, disable ",(0,t.jsx)(n.em,{children:"email Provider"}),". It is by default enabled and when not configured properly, installation will hang."]})}),"\n",(0,t.jsx)(n.h2,{id:"install-czertainly",children:"Install CZERTAINLY"}),"\n",(0,t.jsxs)(n.p,{children:["When you select ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./TUI/main-menu#install-czertainly",children:"Install CZERTAINLY"})})," from the main menu. The installation will begin after confirmation."]}),"\n",(0,t.jsx)(n.admonition,{title:"Installation time",type:"info",children:(0,t.jsx)(n.p,{children:"Complete installation takes about 10 minutes on a decent system with good internet access. The most time consuming part is downloading of docker images that are deployed in the cluster."})}),"\n",(0,t.jsx)(n.p,{children:"After successful installation, administrator web interface is available on address:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://[hostname]/administrator/\n"})}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"hostname"})," is the value configured in the previous step."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/master/dummy-certificates/private/admin.p12",children:"Dummy administrator certificate"})," is available for quick testing purposes with password ",(0,t.jsx)(n.code,{children:"00000000"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var t=i(67294);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);