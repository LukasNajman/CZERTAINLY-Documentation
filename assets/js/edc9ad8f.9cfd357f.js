"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4566],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(2814),o=n(1436),c=["components"],u={},p="Create RA Profile",s={unversionedId:"quick-start/certificate-management/create-ra-profile",id:"quick-start/certificate-management/create-ra-profile",title:"Create RA Profile",description:"When the connection with the Authority is successfully established, we can create a service for certificate management. We call it RA Profile.",source:"@site/docs/05-quick-start/03-certificate-management/07-create-ra-profile.mdx",sourceDirName:"05-quick-start/03-certificate-management",slug:"/quick-start/certificate-management/create-ra-profile",permalink:"/docs/quick-start/certificate-management/create-ra-profile",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Authority",permalink:"/docs/quick-start/certificate-management/create-authority"},next:{title:"Issue Certificate",permalink:"/docs/quick-start/certificate-management/issue-certificate"}},f={},m=[{value:"Create <code>RA Profile</code> using the API",id:"create-ra-profile-using-the-api",level:2},{value:"Create <code>RA Profile</code> using the Web Interface",id:"create-ra-profile-using-the-web-interface",level:2}],d={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-ra-profile"},"Create RA Profile"),(0,i.kt)("p",null,"When the connection with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authority")," is successfully established, we can create a service for certificate management. We call it ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile"),"."),(0,i.kt)("h2",{id:"create-ra-profile-using-the-api"},"Create ",(0,i.kt)("inlineCode",{parentName:"h2"},"RA Profile")," using the API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile")," can be created using the ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile")," API. However, before creating it, we need know the required ",(0,i.kt)("inlineCode",{parentName:"p"},"Attributes")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile"),".\nWe can get that using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authority")," API and the following request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v1/authorities/83265efb-35a1-4b48-ae6f-1269b7c41668/raProfile/attributes\n  #https://[domain]:[port]/api/v1/authorities/{uuid}/raProfile/attributes\n')),(0,i.kt)("p",null,"This returns the list of applicable attributes for the ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile"),", such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "uuid": "87a94421-c5d8-4a23-bb2c-bbee76cb4ea9",\n      "name": "template",\n      "label": "Template",\n      "type": "LIST",\n      "required": true,\n      "readOnly": false,\n      "editable": true,\n      "visible": true,\n      "multiValue": false,\n      "value": [\n         "CodeSigning",\n         "EnrollmentAgent",\n         ...\n         "Administrator"\n      ]\n   },\n   {\n      "uuid": "1467ffaa-445c-11ec-81d3-0242ac130003",\n      "name": "caAdcs",\n      "label": "Certification Authority",\n      "type": "LIST",\n      "required": true,\n      "readOnly": false,\n      "editable": true,\n      "visible": true,\n      "multiValue": false,\n      "value": [\n         "vmi307469.3key.local\\\\Demo MS Sub CA"\n      ]\n   }\n]\n')),(0,i.kt)("p",null,"Knowing the attributes, we can create the ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile")," using the following request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "Web Server RA Profile",\n    "authorityInstanceUuid": "83265efb-35a1-4b48-ae6f-1269b7c41668",\n    "description": "Quick start",\n    "enabled": true,\n    "attributes": [\n      {\n        "name": "template",\n        "value": "WebServer"\n      },\n      {\n        "name": "caAdcs",\n        "value": "vmi307469.3key.local\\\\Demo MS Sub CA"\n      }\n    ]\n  }\' \\\n  https://[domain]:[port]/api/v1/raprofiles\n')),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile")," is successfully created, its ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "e045a12a-e114-45ed-90b8-bac7e750e803"\n}\n')),(0,i.kt)("h2",{id:"create-ra-profile-using-the-web-interface"},"Create ",(0,i.kt)("inlineCode",{parentName:"h2"},"RA Profile")," using the Web Interface"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile")," to manage certificates with the specific certificate template."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"RA Profiles")," in the left menu "),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add new RA Profile")," (plus symbol ",(0,i.kt)("span",{style:{color:"#1473b5"}},(0,i.kt)(l.G,{icon:o.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,i.kt)("li",{parentName:"ol"},"Fill the columns with the attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"RA Profile Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"ADCS-WebServer")),(0,i.kt)("li",{parentName:"ul"},"Description: ",(0,i.kt)("inlineCode",{parentName:"li"},"RA profile for webserver certificates")),(0,i.kt)("li",{parentName:"ul"},"Select Authority: ",(0,i.kt)("inlineCode",{parentName:"li"},"MS ADCS authority")),(0,i.kt)("li",{parentName:"ul"},"Template: ",(0,i.kt)("inlineCode",{parentName:"li"},"WebServer")),(0,i.kt)("li",{parentName:"ul"},"Certification Authority: ",(0,i.kt)("em",{parentName:"li"},"your system certificate authority")))),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create")," "),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Enable"),"  to make RA Profile ready for using, the RA Profile Status would be changed to ",(0,i.kt)("inlineCode",{parentName:"li"},"Enabled"),".")))}k.isMDXComponent=!0}}]);