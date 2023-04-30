"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8553],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(r),d=i,b=l["".concat(u,".").concat(d)]||l[d]||f[d]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},31980:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],c={},u="Overview of A<sup>2</sup> engine",s={unversionedId:"certificate-key/concept-design/architecture/attributes/overview",id:"certificate-key/concept-design/architecture/attributes/overview",title:"Overview of A<sup>2</sup> engine",description:"A^2 engine",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/07-attributes/00-overview.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture/07-attributes",slug:"/certificate-key/concept-design/architecture/attributes/overview",permalink:"/docs/certificate-key/concept-design/architecture/attributes/overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connector",permalink:"/docs/certificate-key/concept-design/architecture/connector"},next:{title:"Custom Attributes",permalink:"/docs/certificate-key/concept-design/architecture/attributes/custom-attributes"}},p={},f=[{value:"Connector attributes",id:"connector-attributes",level:3},{value:"Custom attributes",id:"custom-attributes",level:3},{value:"Metadata attributes",id:"metadata-attributes",level:3}],l={toc:f};function d(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview-of-a2-engine"},"Overview of A",(0,a.kt)("sup",null,"2")," engine"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A^2 engine",src:r(33419).Z,width:"255",height:"100"})),(0,a.kt)("p",null,"Although the CZERTAINLY platform is technology independent, each technology have its own specifics that the users should be able to use properly. Due to the dynamic nature of CZERTAINLY, required input data should be represented generally, in concise and accurate structure.\nCZERTAINLY uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Attribute")," to require input and/or store import information identified by attribute name, type and content type."),(0,a.kt)("p",null,"From the standpoint of attribute definition source, we can split attributes to two separate groups."),(0,a.kt)("h3",{id:"connector-attributes"},"Connector attributes"),(0,a.kt)("p",null,"Connector attributes, as name tells, are defined in connectors and are used to require input from user for some operation, provide additional non-mandatory data or display information to the user.\nThere are the following types of connector attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Data")," - their content represent some input parameter"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Info")," - their content is used to display some additional formatted information to the user (e.g. hint, tip, guide, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Group")," - logical grouping of ",(0,a.kt)("inlineCode",{parentName:"li"},"Data")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Info")," attributes, that can be requested conditionally based on previous user input.")),(0,a.kt)("p",null,"For more information on how to work with attributes, see ",(0,a.kt)("a",{parentName:"p",href:"../../../../contributors/attributes/overview"},"Using Attributes"),"."),(0,a.kt)("h3",{id:"custom-attributes"},"Custom attributes"),(0,a.kt)("p",null,"Custom attributes are defined and managed by the users of CZERTAINLY platform. It allows user to add custom information to individual objects / resources that are part of platform."),(0,a.kt)("p",null,"This way, user can individually categorize, mark objects or create hierarchy and relationships between objects."),(0,a.kt)("p",null,"Custom attributes are not exchanged between the platform and connectors."),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"./custom-attributes"},"Custom Attributes"),"."),(0,a.kt)("h3",{id:"metadata-attributes"},"Metadata attributes"),(0,a.kt)("p",null,"Metadata attributes are additional non-mandatory structured data that can provide additional information specific to implementation of connector."),(0,a.kt)("p",null,"Connector can provide metadata attributes as part of the operation result and they may be used during additional connector operations."),(0,a.kt)("p",null,"Metadata attributes are typically managed by the connector."),(0,a.kt)("p",null,"Metadata attribute can be marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"global")," to make it available between various connectors. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"./global-metadata"},"Global Metadata"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more information about the concept behind the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Attributes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Callbacks"),", etc, see the ",(0,a.kt)("a",{parentName:"p",href:"../../../concept-design/overview"},"CZERTAINLY platform overview"),".")))}d.isMDXComponent=!0},33419:function(e,t){t.Z="data:image/png;base64,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"}}]);