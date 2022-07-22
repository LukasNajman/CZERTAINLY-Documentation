"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5426],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11456:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(92814),c=n(51436),l=["components"],s={},p="Create Discovery",u={unversionedId:"quick-start/certificate-discovery/create-discovery",id:"quick-start/certificate-discovery/create-discovery",title:"Create Discovery",description:"In order to run the certificate discovery process, we need to create new Discovery.",source:"@site/docs/05-quick-start/01-certificate-discovery/03-create-discovery.mdx",sourceDirName:"05-quick-start/01-certificate-discovery",slug:"/quick-start/certificate-discovery/create-discovery",permalink:"/docs/quick-start/certificate-discovery/create-discovery",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Register Connector",permalink:"/docs/quick-start/certificate-discovery/register-connector"},next:{title:"Check Discovery Status",permalink:"/docs/quick-start/certificate-discovery/check-discovery"}},d={},m=[{value:"Create <code>Discovery</code> using the API",id:"create-discovery-using-the-api",level:2},{value:"Create <code>Discovery</code> using the Web Interface",id:"create-discovery-using-the-web-interface",level:2}],y={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-discovery"},"Create Discovery"),(0,a.kt)("p",null,"In order to run the certificate discovery process, we need to create new ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery")," behavior is defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," implementing ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery Provider")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Group"),"."),(0,a.kt)("h2",{id:"create-discovery-using-the-api"},"Create ",(0,a.kt)("inlineCode",{parentName:"h2"},"Discovery")," using the API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Discovery")," can be created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery")," API. However, before creating it, we need know the required ",(0,a.kt)("inlineCode",{parentName:"p"},"Attributes")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery"),".\nWe can get that using the following request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v1/connectors/ef092b12-e181-4734-8e34-73152612a945/discoveryProvider/IP-Hostname/attributes\n  #https://[domain]:[port]/api/v1/connectors/{uuid}/{functionGroup}/{kind}/attributes\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To get details about the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),", you can use the API call described in ",(0,a.kt)("a",{parentName:"p",href:"register-connector"},"Register Connector"),".")),(0,a.kt)("p",null,"This returns the list of applicable attributes for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery")," process, such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "uuid": "1b6c48ad-c1c7-4c82-91ef-3b61bc9f52ac",\n        "name": "ip",\n        "label": "IPs/Hostnames",\n        "type": "STRING",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Multiple values can be given seperated by comma \',\'.",\n        "multiSelect": false\n    },\n    {\n        "uuid": "a9091e0d-f9b9-4514-b275-1dd52aa870ec",\n        "name": "port",\n        "content": {\n            "value": 443\n        },\n        "label": "Ports",\n        "type": "INTEGER",\n        "required": false,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Multiple values can be given seperated by comma \',\'.",\n        "multiSelect": false\n    },\n    {\n        "uuid": "3c70d728-e8c3-40f9-b9b2-5d7256f89ef0",\n        "name": "allPorts",\n        "content": {\n            "value": false\n        },\n        "label": "All Ports?",\n        "type": "BOOLEAN",\n        "required": false,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Check to discover certificates from all ports.",\n        "multiSelect": false\n    }\n]\n')),(0,a.kt)("p",null,"Knowing the attributes, we can create the ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery")," using the following request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "CZERTAINLY Hostname Discovery",\n    "connectorUuid": "ef092b12-e181-4734-8e34-73152612a945",\n    "kind": "IP-Hostname",\n    "attributes": [\n      {\n        "name": "port",\n        "content": {\n          "value": 443\n        }\n      },\n      {\n        "name": "allPorts",\n        "content": {\n          "value": false\n        }\n      },\n      {\n        "name": "ip",\n        "content": {\n          "value": "www.czertainly.com"\n        }\n      }\n    ]\n  }\' \\\n  https://[domain]:[port]/api/v1/discoveries\n')),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery")," process is successfully created, its ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c0aaafda-a731-4175-8ec4-2cdcd06015fa"\n}\n')),(0,a.kt)("h2",{id:"create-discovery-using-the-web-interface"},"Create ",(0,a.kt)("inlineCode",{parentName:"h2"},"Discovery")," using the Web Interface"),(0,a.kt)("p",null,"Follow these steps to create new Network ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery"),".\nAll required attributes will be displayed.  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to the Operator Interface ",(0,a.kt)("inlineCode",{parentName:"li"},"https://[domain]:[port]/operator")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Discovery")," in the left menu "),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add New Discovery")," (plus symbol ",(0,a.kt)("span",{style:{color:"#1473b5"}},(0,a.kt)(o.G,{icon:c.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,a.kt)("li",{parentName:"ol"},"Fill the columns with the attributes:   ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Discovery Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"CZERTAINLY Hostname Discovery")),(0,a.kt)("li",{parentName:"ul"},"Discovery Provider: ",(0,a.kt)("inlineCode",{parentName:"li"},"Network Discovery Provider")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"IP-Hostname")),(0,a.kt)("li",{parentName:"ul"},"IP/Hostname: ",(0,a.kt)("inlineCode",{parentName:"li"},"www.czertainly.com")),(0,a.kt)("li",{parentName:"ul"},"Port: ",(0,a.kt)("inlineCode",{parentName:"li"},"443")),(0,a.kt)("li",{parentName:"ul"},"All Ports?: ",(0,a.kt)("inlineCode",{parentName:"li"},"No")))),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Create")," button to start the ",(0,a.kt)("inlineCode",{parentName:"li"},"Discovery"))),(0,a.kt)("p",null,"You have created successfully the ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery")," for discover certificates from the website ",(0,a.kt)("inlineCode",{parentName:"p"},"www.czertainly.com"),"."))}f.isMDXComponent=!0}}]);