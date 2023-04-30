"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3613],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=i,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52522:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={},p="Signing with Onetime Crypto Worker",u={unversionedId:"signing/sam-integration/entrust-sam/crypto-workers/signing-with-onetime-crypto-worker",id:"signing/sam-integration/entrust-sam/crypto-workers/signing-with-onetime-crypto-worker",title:"Signing with Onetime Crypto Worker",description:"The following chapters describe the signing flow using the EntrustSAMOneTimeCryptoWorker. The same process is applicable for any type of the Signer configured.",source:"@site/docs/30-signing/30-sam-integration/07-entrust-sam/05-crypto-workers/06-signing-with-onetime-crypto-worker.md",sourceDirName:"30-signing/30-sam-integration/07-entrust-sam/05-crypto-workers",slug:"/signing/sam-integration/entrust-sam/crypto-workers/signing-with-onetime-crypto-worker",permalink:"/docs/signing/sam-integration/entrust-sam/crypto-workers/signing-with-onetime-crypto-worker",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OneTime Crypto Worker",permalink:"/docs/signing/sam-integration/entrust-sam/crypto-workers/onetime-crypto-worker"},next:{title:"Introduction",permalink:"/docs/signing/sam-integration/entrust-sam/sad-providers/overview"}},l={},c=[{value:"Signing process",id:"signing-process",level:2},{value:"Prepare SAM key data",id:"prepare-sam-key-data",level:3},{value:"Activate SAM key and sign",id:"activate-sam-key-and-sign",level:3},{value:"Typical setup of onetime signing",id:"typical-setup-of-onetime-signing",level:2},{value:"EntrustSAMCryptoToken",id:"entrustsamcryptotoken",level:3},{value:"EntrustSAMOneTimeCryptoWorker",id:"entrustsamonetimecryptoworker",level:3},{value:"Signer",id:"signer",level:3},{value:"Signing process execution",id:"signing-process-execution",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"signing-with-onetime-crypto-worker"},"Signing with Onetime Crypto Worker"),(0,o.kt)("p",null,"The following chapters describe the signing flow using the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntrustSAMOneTimeCryptoWorker"),". The same process is applicable for any type of the Signer configured."),(0,o.kt)("h2",{id:"signing-process"},"Signing process"),(0,o.kt)("p",null,"The signing process starts with the request coming to Signer to process and return the signature. It can be any of the supported signature formats."),(0,o.kt)("p",null,"The user must be properly identified and authorized to generate unique onetime SAM key. The signing process is synchronous. If some step during the signing process fails, the SAM private key is destroyed and the operation is reported as failed."),(0,o.kt)("p",null,"The signing process has 2 subprocesses that are described in more detail below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#prepare-sam-key-data"},(0,o.kt)("strong",{parentName:"a"},"Prepare SAM key data"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#activate-sam-key-and-sign"},(0,o.kt)("strong",{parentName:"a"},"Activate SAM key and sign")))),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/dLDDImD13BtxAm9UAgWeKWGFObjRyE07jE1vt8bjsDrCpMGK5V-xcQskbMh5xiBEBdbvILxU0W2SHNMYgQwsx0DYIJntucg8-92G2uJN9f2ldaXu6eGg26mVTe-F-jslKA51-a4yoi-0zkN6gb51SyUw3hyCSqKvbP3OVq27XwFky62L-Yeehe17n_bkC6_DqoKDdEexb3PnK16omjufZ6dAA2VDIJm5oIf4_LO2XAOpXN3VeYSpX1HHW2AGDogw9_JWsETgio3qWhxbM6JbQaDMIL77lSjhnWdLE93dkORR86McxHKFYGH1ZNuHWKaeaN_fvW-s6q7RB8B5eSHdy4vToxGs5_QMb5bk12xOt6Cc-M6sJ_meIEsqgGQMTuSGSyH3vtpI7-_yNvKCX9oxcGpcL7fq-gL3tb9kQGCjykaqoThvYLrb-s-s-35w8qQ7kAYIju2LC1dhUTmrlps6mYa5Ra2xW5hihufa_0lFBZirfcfXr3DaRp_qEm00"})),(0,o.kt)("h3",{id:"prepare-sam-key-data"},"Prepare SAM key data"),(0,o.kt)("p",null,"This process consists of generating, assigning, and certifying the SAM key that is should be authorized to be used on behalf of the user."),(0,o.kt)("p",null,"When the SAM key is generated, it must be certified. This consists of providing the proof of possession in the form of the CSR to certification authority. How is the certificate requested and issued depends on the implementation of CA Connector identified by ",(0,o.kt)("inlineCode",{parentName:"p"},"CA_CONNECTOR_IMPLEMENTATION_CLASS")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntrustSAMOneTimeCryptoWorker"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Out-of-the-box implementation of the EJBCA connector using Web Services can be used with the SAM crypto worker. The implementation class for this CA connector is ",(0,o.kt)("inlineCode",{parentName:"p"},"CA_CONNECTOR_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.sam.onetime.caconnector.EjbcaWSSAMCAConnector"),". It is expected that this implementation will be moved to generic package in the future release. The configuration properties are same as in case ",(0,o.kt)("a",{parentName:"p",href:"https://doc.primekey.com/signserver/signserver-operations/setting-up-one-time-keys#SettingupOnetimeKeys-EJBCAWSCAConnector"},"EJBCA WS CA Connector"))),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/fPDDJy9048Rl_ee9NZIHH6882GT3gM0y-14nyRos0svAPzRPBOGO_xkpG4024j2swTS--yuxCxi001qVZ8Ig79_e1_Z2aZDYIl3uKI5b29_pWNWa8ZnDUSm2furcwwhRN0zbWQNBagFi1bOlJnhDPjOP2lludvZ9Yf5mHVaIxJNwpTxbjlG31zo2-wrupfcl-TrKWQagtr1M4tiKfF9XaDm_4hxO4bEPkS2lB0KArA-XjYH0aLeRRf5GJ40mb8Fnteu82ATGu0oSiMlXZNbGLwMzeTgHcwla9fW_snj4F-dWMQs10IVCGz3BiVUePfd-uK-bJQW43pUN9csuyxv2o51xEhIPLcwZPy0JHVSANKIL6tH8kGSc2Ey8jdHZB9622PfJp31D86KYZ8jn5K5_7f1OkiFRiNNNJM0dSLauMJnZ9yyMMS_EVolwyMkYerNG3ViD"})),(0,o.kt)("p",null,"As a result of this process, the SAM key data are ready to be activated and used to generate a digital signature on behalf of the user that owns the SAM key."),(0,o.kt)("h3",{id:"activate-sam-key-and-sign"},"Activate SAM key and sign"),(0,o.kt)("p",null,"Once the data to be signed (DTBS) and SAM key is ready, the process of activation the SAM key and signing on behalf of the user can be executed."),(0,o.kt)("p",null,"For that we need to get Signature Activation Data (SAD) which represents the explicit authorization from the user to sign the DTBS and can be used to generate the digital signature. How is the SAD obtained depends on the implementation of the SAD Provider and it can be configured using the ",(0,o.kt)("inlineCode",{parentName:"p"},"SAD_PROVIDER_IMPLEMENTATION_CLASS")," of the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"CRYPTOTOKEN")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntrustSAMOneTimeCryptoWorker"),". See ",(0,o.kt)("a",{parentName:"p",href:"../sad-providers/overview"},"SAD Providers")," for more information."),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/ZL9DImCn4BtxAuPwKR1WaLBeGVhjgLgiu3dTdMv3TpFhP58HyRyxMSksjLARG4YOD-_DUmG0eEV5i8GYlz07-BLrfM5JWCUtW2v1-AmASVMPwNr8EJ5SjjgTkq5xLqg4U42S8lyDg2ypLRE9BOsJK_Xzc4dM6LDmwHOwRatQuzjZwaSIF09FEd5NcA_gD478XMA1N3UEdN3mCkzFdno-s0A7_54AlHAlaQ5v3urvVmGpfetLWHjTU8xXU86vpPoHm1W3i1iZbXoCZ1YuqexhWyc0DafsKkhcjyu8ItIf1sML5O8joXmBTF8ZH4lOnzTgXopGL0CdPRjd-_W_g2r21vlg_0_ea8rwJsrcnUJWQo4LME3AvCje8tXj3zwwB3hQ6TbdYpxEDr9nz3Gy_TdV"})),(0,o.kt)("p",null,"The digital signature is eventually obtained from Entrust SAM and returned back to the Signer."),(0,o.kt)("h2",{id:"typical-setup-of-onetime-signing"},"Typical setup of onetime signing"),(0,o.kt)("p",null,"To make the onetime signing work, we typically need the following component workers to be properly configured and activated:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"EntrustSAMCryptoToken - source crypto token for managing SAM keys"),(0,o.kt)("li",{parentName:"ul"},"EntrustSAMOneTimeCryptoWorker - managing the onetime SAM keys lifecycle"),(0,o.kt)("li",{parentName:"ul"},"Signer - format of DTBS and execution of the signing process")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"External components like certification authority and SAD provider should be available and are not further discussed in this document. Refer to the installation and configuration guide of these components for details.")),(0,o.kt)("h3",{id:"entrustsamcryptotoken"},"EntrustSAMCryptoToken"),(0,o.kt)("p",null,"For more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntrustSAMCryptoToken"),", refer to ",(0,o.kt)("a",{parentName:"p",href:"../properties"},"Entrust SAM Crypto Token Properties")," and ",(0,o.kt)("a",{parentName:"p",href:"./basic-crypto-worker"},"Basic Crypto Worker"),"."),(0,o.kt)("p",null,"The following is a sample configuration of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntrustSAMCryptoToken"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ENTRUST_CONNECTION_POOL_SIZE=20\nSAD_PROVIDER_PASSWORD=password\nSAD_PROVIDER_URL=http://host.docker.internal:8080\nOTHER_SIGNERS=EntrustSSPUP12\nSAD_PROVIDER_AUTH_TYPE=BASIC\nNAME=EntrustSAMCryptoToken\nENTRUST_TRUST_SELF_SIGNED=true\nKEY_ALIAS_SEPARATOR=_____\nDISABLED=FALSE\nIMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.EntrustSAMCryptoWorker\nSAD_PROVIDER_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.sad.RestSAMSadProvider\nENTRUST_CLIENT_AUTHENTICATION_KEY_ALIAS=sspu1\nENTRUST_SAM_SERVER=https://127.0.0.1:9572\nTYPE=PROCESSABLE\nCRYPTOTOKEN_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.EntrustSAMCryptoToken\nSAD_PROVIDER_USERNAME=admin\n")),(0,o.kt)("h3",{id:"entrustsamonetimecryptoworker"},"EntrustSAMOneTimeCryptoWorker"),(0,o.kt)("p",null,"For more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntrustSAMOneTimeCryptoWorker"),", refer to ",(0,o.kt)("a",{parentName:"p",href:"./onetime-crypto-worker"},"OneTime Crypto Worker"),"."),(0,o.kt)("p",null,"The following is a sample configuration of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntrustSAMOneTimeCryptoWorker"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TLSCLIENTKEY=ra_signserver_02\nCANAME=DemoClientSubCA\nSUBJECTALTNAME_PATTERN=uri=TID://${TRANSACTION_ID},uri=keyId://${entrustsam.keyid}\nEJBCAWSURL=https://host.docker.internal:8453/ejbca\nUSERNAME_PATTERN=onetime-${TRANSACTION_ID}\nKEYGEN_ALGORITHM=RSA\nOTHER_SIGNERS=RA02CryptoTokenP12\nNAME=EntrustSAMOneTimeCryptoTokenWithEJBCA\nCA_CONNECTOR_IMPLEMENTATION_CLASS=com.czertainly.signserver.trident.EjbcaWSSAMCAConnector\nCRYPTOTOKEN=EntrustSAMCryptoToken\nDISABLED=FALSE\nIMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.EntrustSAMOneTimeCryptoWorker\nENDENTITYPROFILE=DemoDocumentSigningEndEntityProfile\nTRUSTSTOREPATH=/opt/primekey/truststore.jks\nTRUSTSTORETYPE=JKS\nCERTIFICATEPROFILE=DemoDocumentSigningEECertificateProfile\nTRUSTSTOREPASSWORD=changeit\nTYPE=PROCESSABLE\nKEYGEN_SPECIFICATION=2048\nCERTSIGNATUREALGORITHM=SHA256WithRSA\nSUBJECTDN_PATTERN=CN=${AUTHORIZED_USERNAME},UID=${TRANSACTION_ID}\n")),(0,o.kt)("h3",{id:"signer"},"Signer"),(0,o.kt)("p",null,"The Signer is responsible for the formatting of the signature. Based on your needs, configure available Signer with the following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CRYPTOTOKEN=EntrustSAMOneTimeCryptoTokenWithEJBCA\nAUTHTYPE=org.signserver.server.UsernameAuthorizer\nPROCESSINTRANSACTION=true\nALIASSELECTOR=org.signserver.server.aliasselectors.AuthorizedUsernameAliasSelector\nACCEPT_ALL_USERNAMES=true\nPROCESSINTRANSACTION=true\n")),(0,o.kt)("p",null,"Because the onetime signing process must run in transaction to secure correct behaviour of the SAM key lifecycle, the Signer must configure the following property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PROCESSINTRANSACTION=true\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The onetime signing operation using the Entrust SAM fails without providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"PROCESSINTRANSACTION=true")," in the metadata of the signing request. This metadata is used to properly handle the state of the SAM key in the database of the SignServer during the transaction.")),(0,o.kt)("p",null,"The following is a sample configuration of PAdES Signer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CRYPTOTOKEN=EntrustSAMOneTimeCryptoTokenWithEJBCA\nAUTHTYPE=org.signserver.server.UsernameAuthorizer\nIMPLEMENTATION_CLASS=com.czertainly.signserver.module.pades.signer.PAdESSigner\nPROCESSINTRANSACTION=true\nALIASSELECTOR=org.signserver.server.aliasselectors.AuthorizedUsernameAliasSelector\nACCEPT_ALL_USERNAMES=true\nSIGNATURE_LEVEL=PAdES-BASELINE-B\nTYPE=PROCESSABLE\nDIGESTALGORITHM=SHA256\nDISABLEKEYUSAGECOUNTER=true\nNAME=PAdES-Baseline-B-EntrustSAM-OneTime\n")),(0,o.kt)("h2",{id:"signing-process-execution"},"Signing process execution"),(0,o.kt)("p",null,"When the configuration is ready, you can request signing through any of the supported interfaces of the SignServer."),(0,o.kt)("p",null,"The signing request must contain ",(0,o.kt)("inlineCode",{parentName:"p"},"IS_SIGNING_OPERATION")," metadata:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REQUEST_METADATA.IS_SIGNING_OPERATION=true\n")),(0,o.kt)("p",null,"Otherwise only dummy onetime crypto instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntrustSAMOneTimeCryptoWorker")," will be provided."))}g.isMDXComponent=!0}}]);