"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1561],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?i.createElement(m,a(a({ref:t},p),{},{components:r})):i.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88767:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var i=r(83117),n=r(80102),o=(r(67294),r(3905)),a=["components"],c={},l="RA Profile",s={unversionedId:"certificate-key/concept-design/core-components/ra-profile",id:"certificate-key/concept-design/core-components/ra-profile",title:"RA Profile",description:"What is RA Profile?",source:"@site/docs/10-certificate-key/02-concept-design/04-core-components/07-ra-profile.md",sourceDirName:"10-certificate-key/02-concept-design/04-core-components",slug:"/certificate-key/concept-design/core-components/ra-profile",permalink:"/docs/certificate-key/concept-design/core-components/ra-profile",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authority",permalink:"/docs/certificate-key/concept-design/core-components/authority"},next:{title:"Compliance Profile",permalink:"/docs/certificate-key/concept-design/core-components/compliance-profile"}},p={},u=[{value:"What is <code>RA Profile</code>?",id:"what-is-ra-profile",level:2},{value:"Characteristics",id:"characteristics",level:3},{value:"Process Flow",id:"process-flow",level:3}],f={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ra-profile"},"RA Profile"),(0,o.kt)("h2",{id:"what-is-ra-profile"},"What is ",(0,o.kt)("inlineCode",{parentName:"h2"},"RA Profile"),"?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," is a representation of attributes that collectively provides a complete configuration of the certificate service which can be used by users and applications in a consistent and convenient way."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," provides an abstraction of the certificate management service configuration attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Certification Authority and its related information"),(0,o.kt)("li",{parentName:"ul"},"Certificate management technology-specific attributes"),(0,o.kt)("li",{parentName:"ul"},"Service-related configuration"),(0,o.kt)("li",{parentName:"ul"},"Access control configuration")),(0,o.kt)("p",null,"Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," uses the following attributes to identify the service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile")," Name"),(0,o.kt)("li",{parentName:"ul"},"Description")),(0,o.kt)("h3",{id:"characteristics"},"Characteristics"),(0,o.kt)("p",null,"Characteristics of ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile")," are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Binds the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authority")," and act as a specific certificate management service"),(0,o.kt)("li",{parentName:"ul"},"Configures the certificate specific attributes and defines the compliance rules and behavior"),(0,o.kt)("li",{parentName:"ul"},"Provide rules for issuing, renewing, and revocation of the certificate")),(0,o.kt)("h3",{id:"process-flow"},"Process Flow"),(0,o.kt)("p",null,"The following steps illustrate the process of requesting the certificate through the ",(0,o.kt)("inlineCode",{parentName:"p"},"RA Profile"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Client")," requests the ",(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile")," to issue certificate providing the certificate signing request"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile")," validates the certificate signing request against its configuration"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile")," forwards the certificate signing request and related attributes to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authority Provider")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Authority Provider")," validates the certificate signing request and issues the certificate"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RA Profile")," forwards the certificate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Client"))))}d.isMDXComponent=!0}}]);