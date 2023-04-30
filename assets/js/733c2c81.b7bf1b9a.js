"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5059],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85074:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],c={},s="Authorization",u={unversionedId:"certificate-key/concept-design/architecture/access-control/authorization",id:"certificate-key/concept-design/architecture/access-control/authorization",title:"Authorization",description:"Once user is properly authenticated and identified, internal authorization token is issued based on the roles and associated permissions that are assigned to the user.",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/07-authorization.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture/05-access-control",slug:"/certificate-key/concept-design/architecture/access-control/authorization",permalink:"/docs/certificate-key/concept-design/architecture/access-control/authorization",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Identification",permalink:"/docs/certificate-key/concept-design/architecture/access-control/identification"},next:{title:"Users",permalink:"/docs/certificate-key/concept-design/architecture/access-control/users"}},l={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"Once user is properly authenticated and identified, internal authorization token is issued based on the roles and associated permissions that are assigned to the user.\nThe authorization token is used by internal services to evaluate authorization of identified user."),(0,o.kt)("p",null,"The authorization is evaluated using ",(0,o.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/"},"Open Policy Agent")," policies (OPA)."),(0,o.kt)("p",null,"The following diagram shows the interaction with the OPA:"),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/RP31JiD034Jl-nLMxuW8EELGDGA4SYA2Bp29Mwnkl67NsoXyVRrGeLBrw9atziYRf1WrZzvXrY1v_A3e9fEuvmb5OTLqBRoWqepB2Z21pHT0razuftZWddu94vmhkPirF8P8DRpHLwQaCBEnF90eRxb7vI2WOK_Y2bVu4gwXlORy7Bf45iZ9Al_tcfHu9n23fmGe0qmKHpOnI3gXVzNA629_NolpsZKrF1_GPti0u3dfp3lVudsOuHQUI9PJlBJfsXhkgigCX-hUkGt9OBy-0W00"})),(0,o.kt)("p",null,"For more information about the authorization policies, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Auth-OPA-Policies"},"CZERTAINLY Auth OPA Policies"),"."))}d.isMDXComponent=!0}}]);