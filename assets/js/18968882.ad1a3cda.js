"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7203],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79868:function(e,t,n){n.r(t),n.d(t,{GenTable:function(){return d},assets:function(){return c},contentTitle:function(){return u},data:function(){return k},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),o=n(67294),i=n(3905),l=["components"],s={},u="OneTime Crypto Worker",p={unversionedId:"signing/sam-integration/entrust-sam/crypto-workers/onetime-crypto-worker",id:"signing/sam-integration/entrust-sam/crypto-workers/onetime-crypto-worker",title:"OneTime Crypto Worker",description:"EntrustSAMOneTimeCryptoWorker authenticates to the Entrust SAM using the certificate and key pair provided by any implementation of the Crypto Token. The Signer referencing the EntrustSAMOneTimeCryptoWorker will be able to sign documents or data using the following process:",source:"@site/docs/30-signing/30-sam-integration/07-entrust-sam/05-crypto-workers/04-onetime-crypto-worker.mdx",sourceDirName:"30-signing/30-sam-integration/07-entrust-sam/05-crypto-workers",slug:"/signing/sam-integration/entrust-sam/crypto-workers/onetime-crypto-worker",permalink:"/docs/signing/sam-integration/entrust-sam/crypto-workers/onetime-crypto-worker",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Crypto Worker",permalink:"/docs/signing/sam-integration/entrust-sam/crypto-workers/basic-crypto-worker"},next:{title:"Signing with Onetime Crypto Worker",permalink:"/docs/signing/sam-integration/entrust-sam/crypto-workers/signing-with-onetime-crypto-worker"}},c={},m=[],k=[{property:"CRYPTOTOKEN",description:(0,i.kt)(o.Fragment,null,"Name of the underlying source of the ",(0,i.kt)("b",null,"EntrustSAMCryptoToken"),". Refer to the implementation of the Entrust SAM Crypto Token for more information."),default:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--success"},"YES"))},{property:"OTHER_SIGNERS",description:(0,i.kt)(o.Fragment,null,"Sets the reference to the Crypto Token containing the key that should be used to authenticate communication with the certification authority, if needed. Only one value should be specified for this attribute. In case it contains multiple comma separated references to Crypto Token, the first one is taken."),default:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--success"},"YES"))},{property:"KEYALIAS_PREFIX",description:(0,i.kt)(o.Fragment,null,"Prefix that is used to generate the key alias for the key pair."),default:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--secondary"},"onetime-")),mandatory:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--danger"},"NO"))},{property:"KEYGEN_ALGORITHM",description:(0,i.kt)(o.Fragment,null,"Algorithm to use for generating the key pair. The following algorithms are supported:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"RSA"),(0,i.kt)("li",null,"ECDSA"))),default:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--success"},"YES"))},{property:"KEYGEN_SPECIFICATION",description:(0,i.kt)(o.Fragment,null,"Specification of the key for generating the key pair.",(0,i.kt)("br",null),"The following values are supported:",(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"RSA"),(0,i.kt)("th",null,"ECDSA")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"2048"),(0,i.kt)("li",null,"4096"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"secp256r1"),(0,i.kt)("li",null,"prime256v1"),(0,i.kt)("li",null,"secp384r1"),(0,i.kt)("li",null,"prime384v1"),(0,i.kt)("li",null,"secp521r1"),(0,i.kt)("li",null,"prime521v1")))))),default:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--success"},"YES"))},{property:"CA_CONNECTOR_IMPLEMENTATION_CLASS",description:(0,i.kt)(o.Fragment,null,"Implementation class of the CA Connector to be used to request the certificate for user."),default:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--success"},"YES"))}],d=function(e){var t=e.data;return(0,i.kt)(o.Fragment,null,t.map((function(e,t){return(0,i.kt)("tr",{key:t},(0,i.kt)("td",null,(0,i.kt)("b",null,e.property)),(0,i.kt)("td",null,e.description),(0,i.kt)("td",null,e.default),(0,i.kt)("td",null,e.mandatory))})))},g={toc:m,data:k,GenTable:d};function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"onetime-crypto-worker"},"OneTime Crypto Worker"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EntrustSAMOneTimeCryptoWorker")," authenticates to the Entrust SAM using the certificate and key pair provided by any implementation of the Crypto Token. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Signer")," referencing the ",(0,i.kt)("inlineCode",{parentName:"p"},"EntrustSAMOneTimeCryptoWorker")," will be able to sign documents or data using the following process:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"generate a new key pair based on the specified algorithm"),(0,i.kt)("li",{parentName:"ul"},"assign the user to the generate key pair"),(0,i.kt)("li",{parentName:"ul"},"generate a proof of possession for the user and associated key pair"),(0,i.kt)("li",{parentName:"ul"},"request the certificate from certification authority"),(0,i.kt)("li",{parentName:"ul"},"sign the document or data using the certificate and key pair"),(0,i.kt)("li",{parentName:"ul"},"unassign the user from the key pair"),(0,i.kt)("li",{parentName:"ul"},"destroy the key pair")),(0,i.kt)("p",null,"The implementation class of the ",(0,i.kt)("inlineCode",{parentName:"p"},"EntrustSAMOneTimeCryptoWorker")," is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"IMPLEMENTATION_CLASS=com.czertainly.signserver.module.sam.onetime.entrust.EntrustSAMOneTimeCryptoWorker\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This implementation requires the SignServer Enterprise Edition version 5.5.0 and higher to access the crypto instances from other ",(0,i.kt)("inlineCode",{parentName:"p"},"Workers"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For a sample configuration of the Entrust SAM One Time Crypto Token, see ",(0,i.kt)("a",{parentName:"p",href:"../samples/sample-onetime-configuration"},"OneTime Sample Configuration"),".")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EntrustSAMOneTimeCryptoWorker")," will check the following configuration properties."),(0,i.kt)("table",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Description"),(0,i.kt)("th",null,"Default Value"),(0,i.kt)("th",null,"Mandatory"),(0,i.kt)("tbody",null,(0,i.kt)(d,{data:k,mdxType:"GenTable"}))))}y.isMDXComponent=!0}}]);