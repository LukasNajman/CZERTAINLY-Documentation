"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8759],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Credential",d={unversionedId:"concept-design/core-components/credential",id:"concept-design/core-components/credential",title:"Credential",description:"Credential allows storing the authentication and authorization related information for the Connector to use when trying to communicate with an external system and technology.",source:"@site/docs/02-concept-design/04-core-components/05-credential.md",sourceDirName:"02-concept-design/04-core-components",slug:"/concept-design/core-components/credential",permalink:"/docs/concept-design/core-components/credential",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Access Control",permalink:"/docs/concept-design/architecture/access-control"},next:{title:"Authority",permalink:"/docs/concept-design/core-components/authority"}},p={},m=[],s={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"credential"},"Credential"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," allows storing the authentication and authorization related information for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector")," to use when trying to communicate with an external system and technology."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," is only used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," is not used by the platform to authenticate or authorize client or administrative operations."))),(0,o.kt)("p",null,"The platform provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential Provider API")," which can be used to implement custom ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential Provider"),"."),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," is stored on the platform, it becomes available for use by every ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," has the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the ",(0,o.kt)("inlineCode",{parentName:"td"},"Credential"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Credential Provider")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of ",(0,o.kt)("inlineCode",{parentName:"td"},"Credential Provider")," ",(0,o.kt)("inlineCode",{parentName:"td"},"Connector"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Kind")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Kind")," of the ",(0,o.kt)("inlineCode",{parentName:"td"},"Credential")," implemented by the ",(0,o.kt)("inlineCode",{parentName:"td"},"Connector"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Attributes")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Attributes")," defined by ",(0,o.kt)("inlineCode",{parentName:"td"},"Connector"),"implementation and the specific ",(0,o.kt)("inlineCode",{parentName:"td"},"Kind"),".")))))}u.isMDXComponent=!0}}]);