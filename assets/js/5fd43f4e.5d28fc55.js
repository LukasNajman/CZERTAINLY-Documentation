"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5215],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,d=p["".concat(l,".").concat(f)]||p[f]||g[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},27786:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={},l="Sole Control Assurance Level",c={unversionedId:"signing/sam-integration/scal",id:"signing/sam-integration/scal",title:"Sole Control Assurance Level",description:"EN 419 241-1 identifies two levels of sole control assurance:",source:"@site/docs/30-signing/30-sam-integration/03-scal.md",sourceDirName:"30-signing/30-sam-integration",slug:"/signing/sam-integration/scal",permalink:"/docs/signing/sam-integration/scal",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/signing/sam-integration/overview"},next:{title:"SAM Crypto Token",permalink:"/docs/signing/sam-integration/sam-cryptotoken"}},u={},g=[{value:"Sole Control Assurance Level 1 (SCAL1)",id:"sole-control-assurance-level-1-scal1",level:2},{value:"Sole Control Assurance Level 1 (SCAL2)",id:"sole-control-assurance-level-1-scal2",level:2}],p={toc:g};function f(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sole-control-assurance-level"},"Sole Control Assurance Level"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EN 419 241-1 identifies two levels of sole control assurance:")),(0,o.kt)("h2",{id:"sole-control-assurance-level-1-scal1"},"Sole Control Assurance Level 1 (SCAL1)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The signing keys are used, with a low level of confidence, under the sole control of the signer."),(0,o.kt)("li",{parentName:"ul"},"The authorized signer\u2019s use of its key for signing is enforced by the Server Signing Application Service Component which authenticates the signer. The activation of the signing key can remain for a given period and/or for a given number of signatures.")),(0,o.kt)("p",null,"In case of SCAL1, user relies on the server signing application to ensure that the appropriate signing key is selected. The functionality supporting signature activation and ensuring sole control is implemented as part of the server signing application."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SCAL1",src:n(27895).Z,title:"SCAL1",width:"754",height:"553"}))),(0,o.kt)("h2",{id:"sole-control-assurance-level-1-scal2"},"Sole Control Assurance Level 1 (SCAL2)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The signing keys are used, with a high level of confidence, under the sole control of the signer."),(0,o.kt)("li",{parentName:"ul"},"The authorized signer\u2019s use of its key for signing is enforced by the signature activation module by means of signature activation data provided, by the signer, using a signature activation protocol, in order to enable the use of the corresponding signing key to sign specific documents.")),(0,o.kt)("p",null,"SCAL2 provides greater assurance of sole control by requiring code within the HSM to implement signature activation, called signature activation module. This code is certified to the same security level as the HSM\u2019s general cryptographic functions. The signature activation data passes, in protected form using the signature activation protocol, from the signer\u2019s device to the HSM to ensure that the user\u2019s signing keys can\u2019t be abused, even if the TSP\u2019s server signing application were to be compromised."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SCAL2",src:n(67995).Z,title:"SCAL2",width:"804",height:"553"}))))}f.isMDXComponent=!0},27895:function(e,t,n){t.Z=n.p+"assets/images/SCAL1-e24dbe391a5c62c69bcbca363e5895c6.png"},67995:function(e,t,n){t.Z=n.p+"assets/images/SCAL2-d23f24db94e1386f840f5f4464a1e01b.png"}}]);