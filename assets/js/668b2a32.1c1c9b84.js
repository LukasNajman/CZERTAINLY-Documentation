"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5304],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=i,g=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93016:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],c={},s="Introduction",p={unversionedId:"signing/cert-storage-providers/overview",id:"signing/cert-storage-providers/overview",title:"Introduction",description:"Certificate Storage Providers are managing storage of the certificate information associated with the assigned private key of the user. The certificates are identified based on the specific implementation, basic values for identification are generally userId and keyId.",source:"@site/docs/30-signing/45-cert-storage-providers/01-overview.md",sourceDirName:"30-signing/45-cert-storage-providers",slug:"/signing/cert-storage-providers/overview",permalink:"/docs/signing/cert-storage-providers/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS KMS v2 CryptoToken Properties",permalink:"/docs/signing/aws-kms-cryptotoken/v2-properties"},next:{title:"File System Certificate Storage Provider",permalink:"/docs/signing/cert-storage-providers/filesystem"}},l={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Certificate Storage Providers are managing storage of the certificate information associated with the assigned private key of the user. The certificates are identified based on the specific implementation, basic values for identification are generally ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"keyId"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CERT_STORAGE_IMPLEMENTATION_CLASS")," property must be configured with proper implementation of the Certificate Storage Provider."),(0,o.kt)("p",null,"The following implementations are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./filesystem"},"File System Certificate Storage Provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./keydata"},"Key Data Certificate Storage Provider"))))}d.isMDXComponent=!0}}]);