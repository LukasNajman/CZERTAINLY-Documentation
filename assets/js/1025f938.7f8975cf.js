"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8759],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={},c="Credential",p={unversionedId:"concept-design/core-components/credential",id:"concept-design/core-components/credential",title:"Credential",description:"Credential allows storing the authentication and authorization related information for the Connector to use when trying to communicate with an external system and technology.",source:"@site/docs/02-concept-design/04-core-components/05-credential.md",sourceDirName:"02-concept-design/04-core-components",slug:"/concept-design/core-components/credential",permalink:"/docs/concept-design/core-components/credential",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Access Control",permalink:"/docs/concept-design/architecture/access-control"},next:{title:"Authority",permalink:"/docs/concept-design/core-components/authority"}},d={},m=[],u={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"credential"},"Credential"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," allows storing the authentication and authorization related information for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector")," to use when trying to communicate with an external system and technology."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," is only used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," is not used by the platform to authenticate or authorize client or administrative operations.")),(0,o.kt)("p",null,"The platform provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential Provider API")," which can be used to implement custom ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential Provider"),"."),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," is stored on the platform, it becomes available for use by every ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," has the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the ",(0,o.kt)("inlineCode",{parentName:"td"},"Credential"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Credential Provider")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of ",(0,o.kt)("inlineCode",{parentName:"td"},"Credential Provider")," ",(0,o.kt)("inlineCode",{parentName:"td"},"Connector"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Kind")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Kind")," of the ",(0,o.kt)("inlineCode",{parentName:"td"},"Credential")," implemented by the ",(0,o.kt)("inlineCode",{parentName:"td"},"Connector"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Attributes")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Attributes")," defined by ",(0,o.kt)("inlineCode",{parentName:"td"},"Connector"),"implementation and the specific ",(0,o.kt)("inlineCode",{parentName:"td"},"Kind"),".")))))}s.isMDXComponent=!0}}]);