"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2230],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(a),f=r,u=s["".concat(m,".").concat(f)]||s[f]||d[f]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5858:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={},m="Overview",p={unversionedId:"protocols/acme/overview",id:"protocols/acme/overview",title:"Overview",description:"The platform implements the ACME (Automatic Certificate Management Environment) protocol to automate the process of certificate management. it offers simple integration with ACME server with the help of ACME objects that are easy to configure and to manage.",source:"@site/docs/07-protocols/02-acme/01-overview.md",sourceDirName:"07-protocols/02-acme",slug:"/protocols/acme/overview",permalink:"/docs/protocols/acme/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/protocols/overview"},next:{title:"ACME Profile",permalink:"/docs/protocols/acme/acme-profile"}},c={},d=[{value:"Platform ACME management",id:"platform-acme-management",level:2},{value:"ACME Profile vs RA Profile ACME API",id:"acme-profile-vs-ra-profile-acme-api",level:2},{value:"Supported operations",id:"supported-operations",level:2}],s={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The platform implements the ACME (Automatic Certificate Management Environment) protocol to automate the process of certificate management. it offers simple integration with ACME server with the help of ACME objects that are easy to configure and to manage."),(0,i.kt)("p",null,"Implementation of ACME provides a flexibility for the clients and administrators to choose between running ACME endpoint that are bound to ",(0,i.kt)("a",{parentName:"p",href:"../../concept-design/core-components/ra-profile"},"RA Profile"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ACME implementation follows ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8555"},"RFC 8555 - Automatic Certificate Management Environment (ACME)"),".\nSee ",(0,i.kt)("a",{parentName:"p",href:"/api/protocol-acme/"},"ACME protocol API")," for more information about implemented end points."))),(0,i.kt)("h2",{id:"platform-acme-management"},"Platform ACME management"),(0,i.kt)("p",null,"In order to start with the ACME protocol, the platform must be configured and act as the ACME server.\nFor this purpose we define the following management objects:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ACME management object"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"acme-profile"},(0,i.kt)("inlineCode",{parentName:"a"},"ACME Profile"))),(0,i.kt)("td",{parentName:"tr",align:null},"Contains configuration of the ACME server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"acme-account"},(0,i.kt)("inlineCode",{parentName:"a"},"ACME Account"))),(0,i.kt)("td",{parentName:"tr",align:null},"Registered ACME account that consumes the ACME operations")))),(0,i.kt)("p",null,"You can manage ",(0,i.kt)("inlineCode",{parentName:"p"},"ACME Profiles")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ACME Accounts")," through the web interface or through the ",(0,i.kt)("a",{parentName:"p",href:"/api/core-acme/"},(0,i.kt)("inlineCode",{parentName:"a"},"Core ACME API")),"."),(0,i.kt)("h2",{id:"acme-profile-vs-ra-profile-acme-api"},"ACME Profile vs RA Profile ACME API"),(0,i.kt)("p",null,"You can configure ",(0,i.kt)("inlineCode",{parentName:"p"},"ACME Profile")," with or without ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile"),". And you can enable ACME API for any particular ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile")," only.\nThere are 2 ACME APIs that are implemented in the platform:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ACME API"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ACME Profile"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"https://<hostname>:<port>/acme/{acmeProfileName}/directory")),(0,i.kt)("td",{parentName:"tr",align:null},"To use ",(0,i.kt)("inlineCode",{parentName:"td"},"ACME Profile")," directly from the client. In this case, the ",(0,i.kt)("inlineCode",{parentName:"td"},"ACME Profile")," must have configure default ",(0,i.kt)("inlineCode",{parentName:"td"},"RA Profile"),", otherwise the API won't be working")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RA Profile"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"https://<hostname>:<port>/acme/raProfile/{raProfileName}/directory")),(0,i.kt)("td",{parentName:"tr",align:null},"Any ",(0,i.kt)("inlineCode",{parentName:"td"},"RA Profile")," can have enabled specific ",(0,i.kt)("inlineCode",{parentName:"td"},"ACME Profile"),". The ACME API is in this case managed by the ",(0,i.kt)("inlineCode",{parentName:"td"},"RA Profile")," and you do not have to configure it as a default for ",(0,i.kt)("inlineCode",{parentName:"td"},"ACME Profile"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"When to use ",(0,i.kt)("inlineCode",{parentName:"strong"},"ACME Profile")," and when ",(0,i.kt)("inlineCode",{parentName:"strong"},"RA Profile")," ACME API?")),(0,i.kt)("p",null,"Depends on what you would like to achieve:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if you would like to allow ACME clients to work only with one specific ",(0,i.kt)("inlineCode",{parentName:"li"},"RA Profile")," then use ",(0,i.kt)("inlineCode",{parentName:"li"},"RA Profile")," ACME API"),(0,i.kt)("li",{parentName:"ul"},"if you would like to have the flexibility in changing the ",(0,i.kt)("inlineCode",{parentName:"li"},"RA Profile")," which is used by the ACME client, then use ",(0,i.kt)("inlineCode",{parentName:"li"},"ACME Profile")," ACME API")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"ACME Profile")," can be used with multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profiles"),"."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The platform performs various validations on the end point including the following:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Availability of the ",(0,i.kt)("inlineCode",{parentName:"li"},"ACME Profile")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"RA Profile")),(0,i.kt)("li",{parentName:"ul"},"Status of the ",(0,i.kt)("inlineCode",{parentName:"li"},"ACME Profile")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"RA Profile")),(0,i.kt)("li",{parentName:"ul"},"If both ",(0,i.kt)("inlineCode",{parentName:"li"},"ACME Profile")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"RA Profile")," are available and enabled")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ACME Profile")," that has no configuration of default ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profile")," is usually bound to one or multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"RA Profiles"),". In this case the ",(0,i.kt)("inlineCode",{parentName:"p"},"ACME Profile")," configuration consist of consistent attributes that are used by ACME clients. "),(0,i.kt)("h2",{id:"supported-operations"},"Supported operations"),(0,i.kt)("p",null,"Supported operations are listed below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operation"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"End Points"),(0,i.kt)("th",{parentName:"tr",align:null},"RFC Reference"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Directory")),(0,i.kt)("td",{parentName:"tr",align:null},"Get the directory object containing the URL for operations and other details including Terms of Service"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/acme/{acmeProfileName}/directory")," ",(0,i.kt)("br",null)," (or) ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"/acme/raProfile/{raProfileName}/directory")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.1.1"},"RFC 8555, section 7.1.1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"New Nonce")),(0,i.kt)("td",{parentName:"tr",align:null},"Create a new Anti-Replay Nonce that should be used in the following requests in the header field by the client"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/acme/{acmeProfileName}/new-nonce")," ",(0,i.kt)("br",null)," (or) ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"/acme/raProfile/{raProfileName}/new-nonce")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.2"},"RFC 8555, section 7.2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"New Account")),(0,i.kt)("td",{parentName:"tr",align:null},"Create a new account using the key pair generated by the client, get the existing account using the public key"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/acme/{acmeProfileName}/new-account")," ",(0,i.kt)("br",null)," (or) ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"/acme/raProfile/{raProfileName}/new-account")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.3"},"RFC 8555, section 7.3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Update Account")),(0,i.kt)("td",{parentName:"tr",align:null},"Update the account including the Terms of Service and External account binding"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/acme/{acmeProfileName}/acct/{accountId}")," ",(0,i.kt)("br",null)," (or) ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"/acme/raProfile/{raProfileName}/acct/{accountId}")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.3.2"},"RFC 8555, section 7.3.2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"New Order")),(0,i.kt)("td",{parentName:"tr",align:null},"Place a new order for a certificate. The order will contain the identifiers to which the certificate is being issued. New Order marks the first step in issuing a certificate"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/acme/{acmeProfileName}/new-order")," ",(0,i.kt)("br",null)," (or) ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"/acme/raProfile/{raProfileName}/new-order")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.4"},"RFC 8555, section 7.4"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Challenge")),(0,i.kt)("td",{parentName:"tr",align:null},"Initiate the challenge validation from the server side once the client has satisfied the challenges"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/acme/{acmeProfileName}/chall/{challengeId}")," ",(0,i.kt)("br",null)," (or) ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"/acme/raProfile/{raProfileName}/chall/{challengeId}")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.5"},"RFC 8555, section 7.5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Finalize")),(0,i.kt)("td",{parentName:"tr",align:null},"Finalize the order for new certificate by providing the CSR"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/acme/{acmeProfileName}/order/{orderId}/finalize")," ",(0,i.kt)("br",null)," (or) ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"/acme/raProfile/{raProfileName}/order/{orderId}/finalize")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.4.2"},"RFC 8555, section 7.4.2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Download Certificate")),(0,i.kt)("td",{parentName:"tr",align:null},"Download the certificate once the certificate issuance is completed"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/acme/{acmeProfileName}/cert/{certificateId}")," ",(0,i.kt)("br",null)," (or) ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"/acme/raProfile/{raProfileName}/cert/{certificateId}")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.3.2"},"RFC 8555, section 7.3.2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Revoke Certificate")),(0,i.kt)("td",{parentName:"tr",align:null},"Revoke a certificate if it is no longer viable. Revocation operation uses the certificate content for the server to identify"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/acme/{acmeProfileName}/revoke-cert")," ",(0,i.kt)("br",null)," (or) ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"/acme/raProfile/{raProfileName}/order/revoke-cert")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc8555#section-7.6"},"RFC 8555, section 7.6"))))))}f.isMDXComponent=!0}}]);