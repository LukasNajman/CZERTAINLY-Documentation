"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3864],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28469:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],c={},s="Terraform acme provider",l={unversionedId:"certificate-key/protocols/acme/terraform",id:"certificate-key/protocols/acme/terraform",title:"Terraform acme provider",description:"Terraform is an open-source infrastructure as code (IaC) software tool that enables you to safely and predictably create, change, and improve infrastructure. It is widely used for deployment of cloud infrastructure, but it can also be used to manage on-premises infrastructure and hybrid infrastructures.",source:"@site/docs/10-certificate-key/07-protocols/02-acme/17-terraform.md",sourceDirName:"10-certificate-key/07-protocols/02-acme",slug:"/certificate-key/protocols/acme/terraform",permalink:"/docs/certificate-key/protocols/acme/terraform",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IIS win-acme",permalink:"/docs/certificate-key/protocols/acme/win-acme"},next:{title:"Configuration and Settings",permalink:"/docs/certificate-key/settings/overview"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure <code>acme</code> provider",id:"configure-acme-provider",level:2},{value:"Register account",id:"register-account",level:2},{value:"Create certificate",id:"create-certificate",level:2},{value:"Generate CSR and create certificate",id:"generate-csr-and-create-certificate",level:3},{value:"Use existing CSR and create certificate",id:"use-existing-csr-and-create-certificate",level:3},{value:"Certificate management",id:"certificate-management",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"terraform-acme-provider"},"Terraform acme provider"),(0,i.kt)("p",null,"Terraform is an open-source infrastructure as code (IaC) software tool that enables you to safely and predictably create, change, and improve infrastructure. It is widely used for deployment of cloud infrastructure, but it can also be used to manage on-premises infrastructure and hybrid infrastructures."),(0,i.kt)("p",null,"Declarative configuration of infrastructure allows you to create a blueprint of your infrastructure and version it, enabling you to roll back to a previous version if needed. In most cases, you need to provision and maintain trusted certificates for your infrastructure."),(0,i.kt)("p",null,"Terraform with integration to CZERTAINLY can be used to automate the process of certificate provisioning and renewal."),(0,i.kt)("p",null,"CZERTAINLY platform supports ACME implementation according to the ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8555"},"RFC 8555"),". This guide shows, how you can use Terraform ",(0,i.kt)("inlineCode",{parentName:"p"},"acme")," provider to manage certificates using ACME protocol and certificate management services controlled by the platform."),(0,i.kt)("p",null,"For more information about Terraform, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/index.html"},"Terraform documentation"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This guide assumes you have at least basic knowledge about Terraform. If you are new to Terraform, we recommend you to start with the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"official tutorial"),".")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you can configure Terraform ",(0,i.kt)("inlineCode",{parentName:"p"},"acme")," provider with the CZERTAINLY, you need to have the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Terraform installed"),(0,i.kt)("li",{parentName:"ul"},"Configured at least one ",(0,i.kt)("inlineCode",{parentName:"li"},"RA Profile")," certificate service"),(0,i.kt)("li",{parentName:"ul"},"Access to HTTP or DNS resources, that will be used to validate ACME challenges"),(0,i.kt)("li",{parentName:"ul"},"ACME protocol enabled according to the ",(0,i.kt)("a",{parentName:"li",href:"enable-acme"},"Enable ACME"))),(0,i.kt)("p",null,"To install Terraform, follow the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"installation instructions"),"."),(0,i.kt)("p",null,"For this guide, we will use ",(0,i.kt)("inlineCode",{parentName:"p"},"dns-01")," challenge validation, but the ",(0,i.kt)("inlineCode",{parentName:"p"},"http-01")," can be also configured and the process is the same."),(0,i.kt)("h2",{id:"configure-acme-provider"},"Configure ",(0,i.kt)("inlineCode",{parentName:"h2"},"acme")," provider"),(0,i.kt)("p",null,"To install ",(0,i.kt)("inlineCode",{parentName:"p"},"acme")," provider, register the following in the Terraform block in your configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  required_providers {\n    acme = {\n      source  = "vancluever/acme"\n      version = "~> 2.0"\n    }\n  }\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Check your version of the provider to be compatible with your deployment. For more information about ",(0,i.kt)("inlineCode",{parentName:"p"},"acme")," provider, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/vancluever/acme/latest/docs"},"provider documentation"),".")),(0,i.kt)("p",null,"The configuration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"acme")," provider is done in the ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," block and requires directory URL of the ACME server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'provider "acme" {\n  server_url = "https://[domain]:[port]/api/acme/raProfile/czertainly/directory"\n}\n')),(0,i.kt)("p",null,"Do not forget to initialize the provider after the configuration using ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform init"),"."),(0,i.kt)("h2",{id:"register-account"},"Register account"),(0,i.kt)("p",null,"Account is registered using ",(0,i.kt)("inlineCode",{parentName:"p"},"acme_registration")," resource. The resource requires email address and private key. The private key can be generated using ",(0,i.kt)("inlineCode",{parentName:"p"},"tls_private_key")," resource (as in this example) or any other method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "tls_private_key" "private_key" {\n  algorithm = "RSA"\n}\n\nresource "acme_registration" "reg" {\n  account_key_pem = tls_private_key.private_key.private_key_pem\n  email_address   = "czertainly-terraform@example.com"\n}\n')),(0,i.kt)("p",null,"When the account is deleted, it is deactivated in the platform."),(0,i.kt)("h2",{id:"create-certificate"},"Create certificate"),(0,i.kt)("p",null,"Certificate is created using ",(0,i.kt)("inlineCode",{parentName:"p"},"acme_certificate")," resource. The resource requires account key and certificate signing request that can be generated or provided externally."),(0,i.kt)("p",null,"In this guide, we configure ",(0,i.kt)("inlineCode",{parentName:"p"},"dns_challenge")," block for ",(0,i.kt)("inlineCode",{parentName:"p"},"acme_certificate")," resource. The ",(0,i.kt)("inlineCode",{parentName:"p"},"dns_challenge")," requires provider and configuration of the provider to connect with the DNS service and manage challenges for resources. We use ",(0,i.kt)("inlineCode",{parentName:"p"},"rfc2136")," provider for demonstration purposes."),(0,i.kt)("p",null,"For the list of all available challenge types and configuration, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/vancluever/acme/latest/docs/resources/certificate#argument-reference"},"provider documentation"),"."),(0,i.kt)("h3",{id:"generate-csr-and-create-certificate"},"Generate CSR and create certificate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"common_name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key_type"),", and optionally ",(0,i.kt)("inlineCode",{parentName:"p"},"subject_alternative_names")," should be specified to generate certificate signing request by the ",(0,i.kt)("inlineCode",{parentName:"p"},"acme_certificate")," resource."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "acme_certificate" "certificate" {\n  account_key_pem           = acme_registration.reg.account_key_pem\n  common_name               = "demo.czertainly.test"\n  key_type                  = "2048"\n  subject_alternative_names = ["demo.czertainly.test"]\n\n  dns_challenge {\n    provider = "rfc2136"\n\n    config = {\n      RFC2136_NAMESERVER     = "127.0.0.1:53"\n      RFC2136_TSIG_ALGORITHM = "hmac-sha512"\n      RFC2136_TSIG_KEY       = "czertainly.test"\n      RFC2136_TSIG_SECRET    = "OCLSOqzn0LjZfu40cER7tCan1RNx9q/c16kBkfeqUzNMtiwnWD+LgXSepG5tV8KptHsdK8zVQYuGS9aRn/JBig=="\n    }\n  }\n\n  #recursive_nameservers = ["127.0.0.1:53"]\n  #disable_complete_propagation = true\n}\n')),(0,i.kt)("h3",{id:"use-existing-csr-and-create-certificate"},"Use existing CSR and create certificate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_private_key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tls_cert_request")," resources can be used to generate private key and certificate signing request that is provided to ",(0,i.kt)("inlineCode",{parentName:"p"},"acme_certificate")," resource as ",(0,i.kt)("inlineCode",{parentName:"p"},"certificate_request_pem"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "tls_private_key" "cert_private_key" {\n  algorithm = "RSA"\n}\n\nresource "tls_cert_request" "req" {\n  key_algorithm   = "RSA"\n  private_key_pem = tls_private_key.cert_private_key.private_key_pem\n  dns_names       = ["demo.czertainly.test"]\n\n  subject {\n    common_name = "demo.czertainly.test"\n  }\n}\n\nresource "acme_certificate" "certificate" {\n  account_key_pem         = acme_registration.reg.account_key_pem\n  certificate_request_pem = tls_cert_request.req.cert_request_pem\n\n  dns_challenge {\n    provider = "rfc2136"\n\n    config = {\n      RFC2136_NAMESERVER     = "127.0.0.1:53"\n      RFC2136_TSIG_ALGORITHM = "hmac-sha512"\n      RFC2136_TSIG_KEY       = "czertainly.test"\n      RFC2136_TSIG_SECRET    = "OCLSOqzn0LjZfu40cER7tCan1RNx9q/c16kBkfeqUzNMtiwnWD+LgXSepG5tV8KptHsdK8zVQYuGS9aRn/JBig=="\n    }\n  }\n\n  #recursive_nameservers = ["127.0.0.1:53"]\n  #disable_complete_propagation = true\n}\n')),(0,i.kt)("h2",{id:"certificate-management"},"Certificate management"),(0,i.kt)("p",null,"Terraform handles the ",(0,i.kt)("inlineCode",{parentName:"p"},"acme_certificate")," resource as a single entity. When the resource is created, the certificate is issued. When the resource is deleted, the certificate is revoked. When the resource is updated, the certificate is renewed."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"acme_certificate")," resource handles automatic certificate renewal so long as a plan or apply is done within the number of days specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"min_days_remaining")," resource parameter. During refresh, if Terraform detects that the certificate is within the expiry range specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"min_days_remaining"),", or is already expired, Terraform will mark the certificate to be renewed on the next apply."))}d.isMDXComponent=!0}}]);