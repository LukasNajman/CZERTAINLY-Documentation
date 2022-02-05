"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[668],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9342:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(2814),l=n(1436),c=["components"],s={},p="Register Connectors",m={unversionedId:"quick-start/certificate-management/register-connectors",id:"quick-start/certificate-management/register-connectors",title:"Register Connectors",description:"In order to start using the platform with any specific technology, we must register the Connector.",source:"@site/docs/05-quick-start/03-certificate-management/01-register-connectors.mdx",sourceDirName:"05-quick-start/03-certificate-management",slug:"/quick-start/certificate-management/register-connectors",permalink:"/docs/quick-start/certificate-management/register-connectors",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get Discovery Results",permalink:"/docs/quick-start/certificate-discovery/get-discovery-results"},next:{title:"Create Credential",permalink:"/docs/quick-start/certificate-management/create-credential"}},d=[{value:"Register <code>Connectors</code> using the API",id:"register-connectors-using-the-api",children:[{value:"Register <code>Common Credential Provider</code>",id:"register-common-credential-provider",children:[],level:3},{value:"Register <code>MS ADCS Connector</code>",id:"register-ms-adcs-connector",children:[],level:3}],level:2},{value:"Register <code>Connectors</code> using the Web Interface",id:"register-connectors-using-the-web-interface",children:[{value:"Register <code>Common Credential Provider</code>",id:"register-common-credential-provider-1",children:[],level:3},{value:"Register <code>MS ADCS Connector</code>",id:"register-ms-adcs-connector-1",children:[],level:3}],level:2}],u={toc:d};function k(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"register-connectors"},"Register Connectors"),(0,i.kt)("p",null,"In order to start using the platform with any specific technology, we must register the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),".\nWe need two ",(0,i.kt)("inlineCode",{parentName:"p"},"Connectors"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for basic ",(0,i.kt)("inlineCode",{parentName:"li"},"Credential")," we use the ",(0,i.kt)("inlineCode",{parentName:"li"},"Common Credential Provider")," implementing ",(0,i.kt)("inlineCode",{parentName:"li"},"Credential Provider")," function group"),(0,i.kt)("li",{parentName:"ul"},"for CA ",(0,i.kt)("inlineCode",{parentName:"li"},"MS ADCS")," we use the ",(0,i.kt)("inlineCode",{parentName:"li"},"MS ADCS Connector")," implementing ",(0,i.kt)("inlineCode",{parentName:"li"},"Authority Provider")," function group")),(0,i.kt)("h2",{id:"register-connectors-using-the-api"},"Register ",(0,i.kt)("inlineCode",{parentName:"h2"},"Connectors")," using the API"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Connectors")," can be registered using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," API."),(0,i.kt)("h3",{id:"register-common-credential-provider"},"Register ",(0,i.kt)("inlineCode",{parentName:"h3"},"Common Credential Provider")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "Common Credential Provider",\n    "url", "https://common-credential-provider-service:8080"",\n    "authType": "none"\n  }\' \\\n  https://[domain]:[port]/api/v1/connectors\n')),(0,i.kt)("p",null,"When there is no error, ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," is successfully registered, and its ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "93f74f2d-1bc7-4c15-a33e-0bf773b3955a"\n}\n')),(0,i.kt)("h3",{id:"register-ms-adcs-connector"},"Register ",(0,i.kt)("inlineCode",{parentName:"h3"},"MS ADCS Connector")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "MS ADCS Connector",\n    "url", "https://ms-adcs-conector-service:8080"",\n    "authType": "none"\n  }\' \\\n  https://[domain]:[port]/api/v1/connectors\n')),(0,i.kt)("p",null,"When there is no error, ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," is successfully registered, and its ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "04cb011f-4497-4e45-b4b9-4975db9df0a0"\n}\n')),(0,i.kt)("h2",{id:"register-connectors-using-the-web-interface"},"Register ",(0,i.kt)("inlineCode",{parentName:"h2"},"Connectors")," using the Web Interface"),(0,i.kt)("h3",{id:"register-common-credential-provider-1"},"Register ",(0,i.kt)("inlineCode",{parentName:"h3"},"Common Credential Provider")),(0,i.kt)("p",null,"Follow these steps to register new ",(0,i.kt)("inlineCode",{parentName:"p"},"Common Credential Provider"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to the Administration Interface ",(0,i.kt)("inlineCode",{parentName:"li"},"https://[domain]:[port]/administrator")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Connectors")," in the left menu"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add new connector")," (plus symbol ",(0,i.kt)("span",{style:{color:"#1473b5"}},(0,i.kt)(a.G,{icon:l.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,i.kt)("li",{parentName:"ol"},"Fill the columns with the attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"URL: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://common-credential-provider-service:8080")),(0,i.kt)("li",{parentName:"ul"},"Authentication Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"No Auth")))),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Connect"))),(0,i.kt)("p",null,"Now you can see the details of the connected ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),"."),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Fill in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector")," name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Common Credential Provider")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create")," to make the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector")," available to other components")),(0,i.kt)("p",null,"You have registered ",(0,i.kt)("inlineCode",{parentName:"p"},"Common Credential Provider"),"."),(0,i.kt)("h3",{id:"register-ms-adcs-connector-1"},"Register ",(0,i.kt)("inlineCode",{parentName:"h3"},"MS ADCS Connector")),(0,i.kt)("p",null,"Follow these steps to register new ",(0,i.kt)("inlineCode",{parentName:"p"},"MS ADCS Connector"),". "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to the Administration Interface ",(0,i.kt)("inlineCode",{parentName:"li"},"https://[domain]:[port]/administrator")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Connectors")," in the left menu"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add new connector")," (plus symbol ",(0,i.kt)("span",{style:{color:"#1473b5"}},(0,i.kt)(a.G,{icon:l.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,i.kt)("li",{parentName:"ol"},"Fill the columns with the attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"URL: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://ms-adcs-connector-service:8080")),(0,i.kt)("li",{parentName:"ul"},"Authentication Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"No Auth")))),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Connect"),"  ")),(0,i.kt)("p",null,"Now you can see the details of the connected ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),". "),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Fill in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector")," name: ",(0,i.kt)("inlineCode",{parentName:"li"},"MS ADCS Connector")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create")," to make the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector")," available to other components")),(0,i.kt)("p",null,"You have registered ",(0,i.kt)("inlineCode",{parentName:"p"},"MS ADCS Connector"),"."))}k.isMDXComponent=!0}}]);