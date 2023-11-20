"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9229],{71743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=n(85893),c=n(11151);const s={},i="Content",d={id:"contributors/attributes/content",title:"Content",description:"Attribute supports various content defined by contentType.",source:"@site/docs/60-contributors/10-attributes/05-content.md",sourceDirName:"60-contributors/10-attributes",slug:"/contributors/attributes/content",permalink:"/docs/contributors/attributes/content",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/60-contributors/10-attributes/05-content.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Properties",permalink:"/docs/contributors/attributes/properties"},next:{title:"Constraints",permalink:"/docs/contributors/attributes/constraints"}},o={},a=[{value:"Content properties",id:"content-properties",level:2},{value:"Supported content types",id:"supported-content-types",level:2},{value:"Content type samples",id:"content-type-samples",level:2},{value:"Content model",id:"content-model",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",object:"object",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"content",children:"Content"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Attribute"})," supports various content defined by ",(0,r.jsx)(t.code,{children:"contentType"}),"."]}),"\n",(0,r.jsx)(t.admonition,{title:"Attribute types",type:"info",children:(0,r.jsxs)(t.p,{children:["For more details about ",(0,r.jsx)(t.code,{children:"Attribute"})," types and ",(0,r.jsx)(t.code,{children:"contentType"}),", see ",(0,r.jsx)(t.a,{href:"attributes",children:"Attributes"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"content-properties",children:"Content properties"}),"\n",(0,r.jsxs)(t.p,{children:["Each content type must extends ",(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/BaseAttributeContent.java",children:(0,r.jsx)(t.code,{children:"BaseAttributeContent"})})," which is abstracted from ",(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/AttributeContent.java",children:(0,r.jsx)(t.code,{children:"AttributeContent"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The content has the following properties defined and inherited from ",(0,r.jsx)(t.code,{children:"BaseAttributeContent"}),":"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Short description"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"reference"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsxs)(t.td,{children:["Reference that can be used for the content value. It is usefull especially when the ",(0,r.jsx)(t.code,{children:"data"})," contains an object, or any other more complex data structure"]}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"No"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"data"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"AttributeContent"})}),(0,r.jsxs)(t.td,{children:["The value of the content, depending on the ",(0,r.jsx)(t.code,{children:"contentType"})," from supported ",(0,r.jsx)(t.a,{href:"#supported-content-types",children:(0,r.jsx)(t.code,{children:"AttributeContentType"})})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{class:"badge badge--success",children:"Yes"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"supported-content-types",children:"Supported content types"}),"\n",(0,r.jsxs)(t.p,{children:["Supported content types are defined in ",(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/AttributeContentType.java",children:(0,r.jsx)(t.code,{children:"AttributeContentType"})}),".\nThe following content types are available and supported:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.code,{children:"AttributeContentType"})}),(0,r.jsx)(t.th,{children:"Class"}),(0,r.jsx)(t.th,{children:"Data"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"STRING"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/StringAttributeContent.java",children:(0,r.jsx)(t.code,{children:"StringAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"INTEGER"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/IntegerAttributeContent.java",children:(0,r.jsx)(t.code,{children:"IntegerAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"integer"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"SECRET"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/SecretAttributeContent.java",children:(0,r.jsx)(t.code,{children:"SecretAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/data/SecretAttributeContentData.java",children:(0,r.jsx)(t.code,{children:"SecretAttributeContentData"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"FILE"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/FileAttributeContent.java",children:(0,r.jsx)(t.code,{children:"FileAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/data/FileAttributeContentData.java",children:(0,r.jsx)(t.code,{children:"FileAttributeContentData"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"BOOLEAN"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/BooleanAttributeContent.java",children:(0,r.jsx)(t.code,{children:"BooleanAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TEXT"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/TextAttributeContent.java",children:(0,r.jsx)(t.code,{children:"TextAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CODEBLOCK"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/CodeBlockAttributeContent.java",children:(0,r.jsx)(t.code,{children:"CodeBlockAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/data/CodeBlockAttributeContentData.java",children:(0,r.jsx)(t.code,{children:"CodeBlockAttributeContentData"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"FLOAT"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/FloatAttributeContent.java",children:(0,r.jsx)(t.code,{children:"FloatAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"float"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"DATE"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/DateAttributeContent.java",children:(0,r.jsx)(t.code,{children:"DateAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"date"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"DATETIME"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/DatetimeAttributeContent.java",children:(0,r.jsx)(t.code,{children:"DateTimeAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"datetime"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TIME"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/TimeAttributeContent.java",children:(0,r.jsx)(t.code,{children:"TimeAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"time"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CREDENTIAL"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/CredentialAttributeContent.java",children:(0,r.jsx)(t.code,{children:"CredentialAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/core/credential/CredentialDto.java",children:(0,r.jsx)(t.code,{children:"CredentialDto"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"OBJECT"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/ObjectAttributeContent.java",children:(0,r.jsx)(t.code,{children:"ObjectAttributeContent"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"object"})})]})]})]}),"\n",(0,r.jsx)(t.admonition,{title:"Mulitple content types in one Attribute",type:"warning",children:(0,r.jsxs)(t.p,{children:["One ",(0,r.jsx)(t.code,{children:"Attribute"})," can define only one ",(0,r.jsx)(t.code,{children:"contenttype"}),". Multiple different content types for one ",(0,r.jsx)(t.code,{children:"Attribute"})," is not supported."]})}),"\n",(0,r.jsx)(t.h2,{id:"content-type-samples",children:"Content type samples"}),"\n",(0,r.jsxs)(t.p,{children:["The table below shows the ",(0,r.jsx)(t.code,{children:"AttributeContentType"})," and the sample for each type."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"AttributeContentType"})})}),(0,r.jsx)("th",{children:(0,r.jsxs)(t.p,{children:["Associated ",(0,r.jsx)(t.code,{children:"content"})," field"]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"STRING"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{  \n  "content": [\n    {\n      "reference": "string",\n      "data": "string"\n    }\n  ]\n}\n'})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"INTEGER"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{  \n  "content": [\n    {\n      "reference": "string",\n      "value": 12345\n    }\n  ]\n}\n'})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"SECRET"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{  \n  "content": [\n    {\n      "reference": "string",\n      "data": {\n        "secret": "secret"\n    }\n  ]\n}\n'})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SECRET"})," is handled by the platform in a secure way and its value will never be presented to client once defined."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"FILE"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{  \n  "content": [\n    {\n      "reference": "string",\n      "data": {\n        "value": "base64-encoded content of the file",\n        "fileName": "name of the file",\n        "mimeType": "type of the file"\n      }\n    }\n  ]\n}\n'})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"FILE"})," type can be specifically handled based on the ",(0,r.jsx)(t.code,{children:"mimeType"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"BOOLEAN"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{  \n  "content": [\n    {\n      "reference": "string",\n      "value": true\n    }\n  ]\n}\n'})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"CREDENTIAL"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "content": [\n    {\n      "reference": "identification of Credential",\n      "data": {\n        "name": "string",\n        "uuid": "UUID of the Credential",\n        "kind": "kind of the Credential",\n        "attributes": [\n          ...list of Credential Attributes\n        ]\n        "enabled": true,\n        "connectorUuid": "UUID of the Credential Provider Connector",\n        "connectorName": "name of the Credential Provider Connector"\n      }\n    }\n  ]\n}\n'})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"CREDENTIAL"})," is a special purpose type that is handled by the platform for ",(0,r.jsx)(t.code,{children:"Connectors"})," that needs to use the credential for authentication and authorization to technology, for example API Key, username/password, and any other ",(0,r.jsx)(t.code,{children:"Credential"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"DATE"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "content": [\n    {\n      "reference": "string",\n      "value": "2022-11-30"\n    }\n  ]\n}\n'})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"DATE"})," should be in the format ",(0,r.jsx)(t.code,{children:"yyyy-MM-dd"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"FLOAT"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "content": [\n    {\n      "reference": "string",\n      "value": 12.4487211\n    }\n  ]\n}\n'})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"OBJECT"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "content": [\n    {\n      "reference": "identification of Object",\n      "data": {\n        ... any JSON object\n      }\n    }\n  ]\n}\n'})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"OBJECT"})," type provides a flexible way how to work with the custom objects within the ",(0,r.jsx)(t.code,{children:"Attributes"})," and ",(0,r.jsx)(t.code,{children:"Callbacks"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"TEXT"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "content": [\n    {\n      "reference": "string",\n      "value": "long text"\n    }\n  ]\n}\n'})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TEXT"})," supports long string/text data to be processed."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"CODEBLOCK"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "content": [\n    {\n      "reference": "string",\n      "value": {\n          "language": "string",\n          "code": "Block of the code in Base64. Formatting of the code is specified by variable language"\n        }\n    }\n  ]\n}\n'})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"CODEBLOCK"})," supports scripts from various ",(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content/data/ProgrammingLanguageEnum.java",children:"languages"}),". For example, to store simple addition method written in C#"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"public void Add(string a, string b) {\n  return a + b;\n}\n"})}),(0,r.jsx)(t.p,{children:"you would sent following content"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "content": [\n    {\n      "reference": "sample",\n      "value": {\n          "language": "csharp",\n          "code": "cHVibGljIHZvaWQgQWRkKHN0cmluZyBhLCBzdHJpbmcgYikgewogIHJldHVybiBhICsgYjsKfQ=="\n        }\n    }\n  ]\n}\n'})})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"TIME"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "content": [\n    {\n      "reference": "string",\n      "value": "11:45:32"\n    }\n  ]\n}\n'})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TIME"})," should be in the format ",(0,r.jsx)(t.code,{children:"HH:mm:ss"}),"."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"DATETIME"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "content": [\n    {\n      "reference": "string",\n      "value": "2011-12-03T10:15:30+01:00"\n    }\n  ]\n}\n'})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"DATETIME"})," should be in the format ",(0,r.jsx)(t.code,{children:"yyyy-MM-dd'T'HH:mm:ss.SSSXXX"}),", which is ISO-8601 extended offset date-time format."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"content-model",children:"Content model"}),"\n",(0,r.jsxs)(t.p,{children:["The following diagram represents the content model inherited from the ",(0,r.jsx)(t.code,{children:"AttributeContent"}),". Details can be found in the ",(0,r.jsx)(t.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/tree/master/src/main/java/com/czertainly/api/model/common/attribute/v2/content",children:"CZERTAINLY Interfaces repository"}),"."]}),"\n",(0,r.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/fPJ1IiGm48Rl-nHvWU91Jx87tOeW20hk2qpJiKQp2IIpukERZRA7CfcCs4EW-V-lRMR-wKqcI7Gy-8qfLxRWqLnUNDKxZwzaA9habZSoiqjeoSMmgI9CcH9OChT4oKr7mZ46ma1LhOlraBFPGKRMyol7w162u1WJpcN7WHTCTq3OaVVk85dkdHTb7u44_Q5iB9W4nzFqNWee65xG9XGDHGcBODZZbyHtAZ366NS-sezUIxbIbGf3zomhqtEAz9EfH_p4KmIhkARCTgWH7DWicMjJJerXpXLcBTjXQ0LDYxTJg7q25z6_i5ptj3pNCJNB9LyBDyP2Y_CpewNv4AffTjgqD3UAQlOVdMuEyUe1TM5ZqShBUNZRhn0_uCmtsjBkM8SyoPLU_K--0G00"})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var r=n(67294);const c={},s=r.createContext(c);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);