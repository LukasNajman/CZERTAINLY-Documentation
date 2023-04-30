"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9824],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={},s="Overview",c={unversionedId:"certificate-key/installation-guide/deployment/deployment-helm/overview",id:"certificate-key/installation-guide/deployment/deployment-helm/overview",title:"Overview",description:"Helm chart simplifies the deployment of the platform using already pre-defined templates that are parsed as Kubernetes manifests and managed by Helm.",source:"@site/docs/10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm/overview.md",sourceDirName:"10-certificate-key/03-installation-guide/04-deployment/04-deployment-helm",slug:"/certificate-key/installation-guide/deployment/deployment-helm/overview",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-helm/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment Options",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-options"},next:{title:"Configurable parameters",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-helm/configurable-parameters"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using this Chart",id:"using-this-chart",level:2},{value:"Installation",id:"installation",level:3},{value:"Upgrade",id:"upgrade",level:3},{value:"Uninstall",id:"uninstall",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Helm chart simplifies the deployment of the platform using already pre-defined templates that are parsed as Kubernetes manifests and managed by Helm."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes 1.19+"),(0,l.kt)("li",{parentName:"ul"},"Helm 3.8.0+"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL 11+")),(0,l.kt)("p",null,"In case you want to enable Ingress you need to have installed Ingress Controller, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.7.0/deploy/static/provider/cloud/deploy.yaml\n")),(0,l.kt)("p",null,"If you are using internal CA for Ingress and Administrator certificate, you also need to have installed ",(0,l.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/"},"cert-manager"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"cert-manager is only required to use certificates issued by internally generated CA:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingress.certificate.source=internal")," for internally generated Ingress certificate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingress.certificate.source=letsEncrypt")," for Ingress Let\u2019s Encrypt issued certificate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"registerAdmin.source=generated")," for internally generated certificate for first administrator"))),(0,l.kt)("h2",{id:"using-this-chart"},"Using this Chart"),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Create namespace")),(0,l.kt)("p",null,"We\u2019ll need to define a Kubernetes namespace where the resources created by the Chart should be installed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace czertainly\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Create ",(0,l.kt)("inlineCode",{parentName:"strong"},"czertainly-values.yaml"))),(0,l.kt)("p",null,"Copy the default ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," from the CZERTAINLY Helm chart and modify the values accordingly:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm show values oci://harbor.3key.company/czertainly-helm/czertainly > czertainly-values.yaml\n")),(0,l.kt)("p",null,"Now edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"czertainly-values.yaml")," according to your desired stated, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/certificate-key/installation-guide/deployment/deployment-helm/configurable-parameters"},"Configurable parameters")," for more information."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Prepare list of trusted CA certificates")),(0,l.kt)("p",null,"Create new file called ",(0,l.kt)("inlineCode",{parentName:"p"},"trusted-certificates.pem")," and add to the file PEM certificates of all certification authorities that should be trusted by the platform. No worries, you can always change the list of trusted certificates in the future."),(0,l.kt)("p",null,"The list of trusted certificates is need for the installation of the CZERTAINLY using Helm chart."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note"),"\nTrusted certificates can be defined globally for the CZERTAINLY chart and all of its sub-charts, or it can be applied only for specific sub-chart, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/certificate-key/installation-guide/deployment/deployment-helm/configurable-parameters#global-parameters"},"global parameters"),". For global, set ",(0,l.kt)("inlineCode",{parentName:"p"},"global.trusted.certificates"),", otherwise set ",(0,l.kt)("inlineCode",{parentName:"p"},"trusted.certificates"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Install CZERTAINLY")),(0,l.kt)("p",null,"There are couple of options to install CZERTAINLY based on you TLS configuration and administrator certificate handling. See the ",(0,l.kt)("a",{parentName:"p",href:"/docs/certificate-key/installation-guide/deployment/deployment-helm/configurable-parameters"},"Configurable parameters")," for more information."),(0,l.kt)("p",null,"For the basic installation, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install --namespace czertainly -f czertainly-values.yaml --set-file global.trusted.certificates=trusted-certificates.pem czertainly-tlm oci://harbor.3key.company/czertainly-helm/czertainly\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Save your configuration")),(0,l.kt)("p",null,"Always make sure you save the ",(0,l.kt)("inlineCode",{parentName:"p"},"czertainly-values.yaml")," and all ",(0,l.kt)("inlineCode",{parentName:"p"},"--set")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--set-file")," options you used. You will need to use the same options when you upgrade CZERTAINLY to new versions with Helm. In case you are changing the configuration, save the new configuration."),(0,l.kt)("h3",{id:"upgrade"},"Upgrade"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning"),"\nBe sure that you always save your previous configuration!")),(0,l.kt)("p",null,"For upgrading the CZERTAINLY installation, update your configuration and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --namespace czertainly -f czertainly-values.yaml --set-file global.trusted.certificates=trusted-certificates.pem czertainly-tlm oci://harbor.3key.company/czertainly-helm/czertainly\n")),(0,l.kt)("h3",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm uninstall")," command to uninstall the CZERTAINLY:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall --namespace czertainly czertainly-tlm\n")),(0,l.kt)("admonition",{title:"Helm chart",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts"},"CZERTAINLY-Helm-Charts")," for description of all charts and sub-charts that are available for the platform.")))}d.isMDXComponent=!0}}]);