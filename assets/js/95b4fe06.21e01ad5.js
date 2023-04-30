"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[485],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return E}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),E=o,f=m["".concat(u,".").concat(E)]||m[E]||p[E]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function E(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99452:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return E},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],s={},u="Entrust SAM Sample Configuration",c={unversionedId:"signing/sam-integration/entrust-sam/samples/sample-configuration",id:"signing/sam-integration/entrust-sam/samples/sample-configuration",title:"Entrust SAM Sample Configuration",description:"The following is a sample configuration of the EntrustSAMCryptoToken:",source:"@site/docs/30-signing/30-sam-integration/07-entrust-sam/11-samples/02-sample-configuration.md",sourceDirName:"30-signing/30-sam-integration/07-entrust-sam/11-samples",slug:"/signing/sam-integration/entrust-sam/samples/sample-configuration",permalink:"/docs/signing/sam-integration/entrust-sam/samples/sample-configuration",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Configuration Signer",permalink:"/docs/signing/sam-integration/entrust-sam/dynamic-config-signer-properties"},next:{title:"Entrust SAM Sample OneTime Configuration",permalink:"/docs/signing/sam-integration/entrust-sam/samples/sample-onetime-configuration"}},l={},p=[],m={toc:p};function E(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entrust-sam-sample-configuration"},"Entrust SAM Sample Configuration"),(0,i.kt)("p",null,"The following is a sample configuration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"EntrustSAMCryptoToken"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Type of worker\nWORKERGENID1.TYPE=PROCESSABLE\n\n# Name for other workers to reference this worker\nWORKERGENID1.NAME=EntrustSAMCryptoToken\n\n# EntrustSAMCryptoToken must only be used in conjunction with EntrustSAMCryptoWorker\nWORKERGENID1.IMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.EntrustSAMCryptoWorker\nWORKERGENID1.CRYPTOTOKEN_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.EntrustSAMCryptoToken\n\n# A name of a crypto token containing private key and user certificate. Will be used to authenticate crypto token to\n# Entrust SAM.\nWORKERGENID1.OTHER_SIGNERS=EntrustClientKeyStore\nWORKERGENID1.ENTRUST_CLIENT_AUTHENTICATION_KEY_ALIAS=ed1dcb7122e666b21c36b3a81d61910a864c9d64\n\n# Entrust SAM server url\nWORKERGENID1.ENTRUST_SAM_SERVER=https://213.121.187.216:10462\nWORKERGENID1.ENTRUST_TRUST_SELF_SIGNED=true\nWORKERGENID1.ENTRUST_CONNECTION_POOL_SIZE=20\n\n# Service to authenticate signing requests\nWORKERGENID1.SAD_PROVIDER_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.sad.RestSAMSadProvider\nWORKERGENID1.SAD_PROVIDER_URL=https://entrustsam-simulator.czertainly.com\nWORKERGENID1.SAD_PROVIDER_AUTH_TYPE=BASIC\nWORKERGENID1.SAD_PROVIDER_USERNAME=******\nWORKERGENID1.SAD_PROVIDER_PASSWORD=******\n")))}E.isMDXComponent=!0}}]);