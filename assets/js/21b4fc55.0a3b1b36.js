"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6281],{80493:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=c(85893),t=c(11151),r=c(99603),s=c(59417);const o={},a="Create Discovery",d={id:"certificate-key/quick-start/certificate-discovery/create-discovery",title:"Create Discovery",description:"In order to run the certificate discovery process, we need to create new Discovery.",source:"@site/docs/10-certificate-key/05-quick-start/02-certificate-discovery/03-create-discovery.mdx",sourceDirName:"10-certificate-key/05-quick-start/02-certificate-discovery",slug:"/certificate-key/quick-start/certificate-discovery/create-discovery",permalink:"/docs/certificate-key/quick-start/certificate-discovery/create-discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/05-quick-start/02-certificate-discovery/03-create-discovery.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Register Connector",permalink:"/docs/certificate-key/quick-start/certificate-discovery/register-connector"},next:{title:"Check Discovery Status",permalink:"/docs/certificate-key/quick-start/certificate-discovery/check-discovery"}},l={},h=[{value:"Create <code>Discovery</code> using the API",id:"create-discovery-using-the-api",level:2},{value:"Create <code>Discovery</code> using the Web Interface",id:"create-discovery-using-the-web-interface",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-discovery",children:"Create Discovery"}),"\n","\n","\n",(0,i.jsxs)(n.p,{children:["In order to run the certificate discovery process, we need to create new ",(0,i.jsx)(n.code,{children:"Discovery"}),".\n",(0,i.jsx)(n.code,{children:"Discovery"})," behavior is defined by the ",(0,i.jsx)(n.code,{children:"Connector"})," implementing ",(0,i.jsx)(n.code,{children:"Discovery Provider"})," ",(0,i.jsx)(n.code,{children:"Function Group"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"create-discovery-using-the-api",children:["Create ",(0,i.jsx)(n.code,{children:"Discovery"})," using the API"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Discovery"})," can be created using the ",(0,i.jsx)(n.code,{children:"Discovery"})," API. However, before creating it, we need know the required ",(0,i.jsx)(n.code,{children:"Attributes"})," for the ",(0,i.jsx)(n.code,{children:"Discovery"}),".\nWe can get that using the following request:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v1/connectors/ef092b12-e181-4734-8e34-73152612a945/discoveryProvider/IP-Hostname/attributes\n  #https://[domain]:[port]/api/v1/connectors/{uuid}/{functionGroup}/{kind}/attributes\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To get details about the ",(0,i.jsx)(n.code,{children:"Connector"}),", you can use the API call described in ",(0,i.jsx)(n.a,{href:"register-connector",children:"Register Connector"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["This returns the list of applicable attributes for the ",(0,i.jsx)(n.code,{children:"Discovery"})," process, such as:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "uuid": "1b6c48ad-c1c7-4c82-91ef-3b61bc9f52ac",\n        "name": "ip",\n        "label": "IPs/Hostnames",\n        "type": "STRING",\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Multiple values can be given seperated by comma \',\'.",\n        "multiSelect": false\n    },\n    {\n        "uuid": "a9091e0d-f9b9-4514-b275-1dd52aa870ec",\n        "name": "port",\n        "content": {\n            "value": 443\n        },\n        "label": "Ports",\n        "type": "INTEGER",\n        "required": false,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Multiple values can be given seperated by comma \',\'.",\n        "multiSelect": false\n    },\n    {\n        "uuid": "3c70d728-e8c3-40f9-b9b2-5d7256f89ef0",\n        "name": "allPorts",\n        "content": {\n            "value": false\n        },\n        "label": "All Ports?",\n        "type": "BOOLEAN",\n        "required": false,\n        "readOnly": false,\n        "visible": true,\n        "list": false,\n        "description": "Check to discover certificates from all ports.",\n        "multiSelect": false\n    }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Knowing the attributes, we can create the ",(0,i.jsx)(n.code,{children:"Discovery"})," using the following request:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "CZERTAINLY Hostname Discovery",\n    "connectorUuid": "ef092b12-e181-4734-8e34-73152612a945",\n    "kind": "IP-Hostname",\n    "attributes": [\n      {\n        "name": "port",\n        "content": {\n          "value": 443\n        }\n      },\n      {\n        "name": "allPorts",\n        "content": {\n          "value": false\n        }\n      },\n      {\n        "name": "ip",\n        "content": {\n          "value": "www.czertainly.com"\n        }\n      }\n    ]\n  }\' \\\n  https://[domain]:[port]/api/v1/discoveries\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"Discovery"})," process is successfully created, its ",(0,i.jsx)(n.code,{children:"uuid"})," is sent back:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "uuid": "c0aaafda-a731-4175-8ec4-2cdcd06015fa"\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"create-discovery-using-the-web-interface",children:["Create ",(0,i.jsx)(n.code,{children:"Discovery"})," using the Web Interface"]}),"\n",(0,i.jsxs)(n.p,{children:["Follow these steps to create new Network ",(0,i.jsx)(n.code,{children:"Discovery"}),".\nAll required attributes will be displayed."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to the Operator Interface ",(0,i.jsx)(n.code,{children:"https://[domain]:[port]/operator"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Discovery"})," in the left menu"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add New Discovery"})," (plus symbol ",(0,i.jsx)("span",{style:{color:"#1473b5"},children:(0,i.jsx)(r.G,{icon:s.r8p})}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Fill the columns with the attributes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Discovery Name: ",(0,i.jsx)(n.code,{children:"CZERTAINLY Hostname Discovery"})]}),"\n",(0,i.jsxs)(n.li,{children:["Discovery Provider: ",(0,i.jsx)(n.code,{children:"Network Discovery Provider"})]}),"\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"IP-Hostname"})]}),"\n",(0,i.jsxs)(n.li,{children:["IP/Hostname: ",(0,i.jsx)(n.code,{children:"www.czertainly.com"})]}),"\n",(0,i.jsxs)(n.li,{children:["Port: ",(0,i.jsx)(n.code,{children:"443"})]}),"\n",(0,i.jsxs)(n.li,{children:["All Ports?: ",(0,i.jsx)(n.code,{children:"No"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Create"})," button to start the ",(0,i.jsx)(n.code,{children:"Discovery"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You have created successfully the ",(0,i.jsx)(n.code,{children:"Discovery"})," for discover certificates from the website ",(0,i.jsx)(n.code,{children:"www.czertainly.com"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);