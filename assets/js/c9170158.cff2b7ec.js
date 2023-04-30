"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4239],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,s=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(s,a(a({ref:t},d),{},{components:n})):r.createElement(s,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={},c="Authority",p={unversionedId:"certificate-key/concept-design/core-components/authority",id:"certificate-key/concept-design/core-components/authority",title:"Authority",description:"Authority holds the access information related to the certificate authority technology, i.e., it contains the information of which CA to use and the attributes of the CA.",source:"@site/docs/10-certificate-key/02-concept-design/04-core-components/06-authority.md",sourceDirName:"10-certificate-key/02-concept-design/04-core-components",slug:"/certificate-key/concept-design/core-components/authority",permalink:"/docs/certificate-key/concept-design/core-components/authority",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Credential",permalink:"/docs/certificate-key/concept-design/core-components/credential"},next:{title:"RA Profile",permalink:"/docs/certificate-key/concept-design/core-components/ra-profile"}},d={},u=[{value:"<code>Authority Provider</code>",id:"authority-provider",level:3},{value:"<code>RA Profile</code>",id:"ra-profile",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authority"},"Authority"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Authority")," holds the access information related to the certificate authority technology, i.e., it contains the information of which CA to use and the attributes of the CA."),(0,i.kt)("p",null,"The information held by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authority")," varies depending on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kind")," of CA and is defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"Authority Provider")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Attributes")," to get the data needed to establish the connection to the CA."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Authority")," has the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Authority"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Authority Provider")),(0,i.kt)("td",{parentName:"tr",align:null},"Identification of ",(0,i.kt)("inlineCode",{parentName:"td"},"Connector")," implementing the ",(0,i.kt)("inlineCode",{parentName:"td"},"Authority Provider")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Function Group"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Kind")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Kind")," of the CA technology implemented by the ",(0,i.kt)("inlineCode",{parentName:"td"},"Connector"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Attributes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Attributes")," defined by ",(0,i.kt)("inlineCode",{parentName:"td"},"Connector"),"implementation and the specific ",(0,i.kt)("inlineCode",{parentName:"td"},"Kind"))))),(0,i.kt)("h3",{id:"authority-provider"},(0,i.kt)("inlineCode",{parentName:"h3"},"Authority Provider")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector")," can serve for more than one ",(0,i.kt)("inlineCode",{parentName:"li"},"Authority"),"."),(0,i.kt)("li",{parentName:"ul"},"Inputs for the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector")," to determine the CA are captured and stored in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Authority"),".")),(0,i.kt)("p",null,"For more information, refer to ",(0,i.kt)("a",{parentName:"p",href:"../../connectors/authority-provider-v2"},"Authority Provider")," description."),(0,i.kt)("h3",{id:"ra-profile"},(0,i.kt)("inlineCode",{parentName:"h3"},"RA Profile")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile")," is created on top of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authority"),". For more information, refer to ",(0,i.kt)("a",{parentName:"p",href:"./ra-profile"},"RA Profile"),"."))}f.isMDXComponent=!0}}]);