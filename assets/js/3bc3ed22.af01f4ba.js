"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9178],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={},c="Identification",d={unversionedId:"certificate-key/concept-design/architecture/access-control/identification",id:"certificate-key/concept-design/architecture/access-control/identification",title:"Identification",description:"Each user is identified by one of the supported methods listed below:",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/05-identification.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture/05-access-control",slug:"/certificate-key/concept-design/architecture/access-control/identification",permalink:"/docs/certificate-key/concept-design/architecture/access-control/identification",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Externalized Authentication",permalink:"/docs/certificate-key/concept-design/architecture/access-control/externalized-authentication"},next:{title:"Authorization",permalink:"/docs/certificate-key/concept-design/architecture/access-control/authorization"}},s={},u=[{value:"X.509 certificate",id:"x509-certificate",level:2},{value:"JSON ID",id:"json-id",level:2},{value:"Identification order",id:"identification-order",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"identification"},"Identification"),(0,i.kt)("p",null,"Each user is identified by one of the supported methods listed below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"X.509 certificate"),(0,i.kt)("li",{parentName:"ul"},"JSON ID")),(0,i.kt)("p",null,"Identification is performed by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Auth"},"CZERTAINLY Auth Service"),"."),(0,i.kt)("h2",{id:"x509-certificate"},"X.509 certificate"),(0,i.kt)("p",null,"User can be identified based on X.509 certificate representing the digital identity.\nTypically, the X.509 certificate of authenticated user is provided as Base64-encoded value in the header."),(0,i.kt)("p",null,"An example of the user identity provided as X.509 certificate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"X-APP-CERTIFICATE=MIIE/TCCAuWgAwIBAgIUPCqjU2t+JmCd9j/47eIc8DnaBJ0wDQYJKoZIhvcNAQENBQAwOzEbMBkGA1UEAwwSRGVtbyBTZXJ2ZXIgU3ViIENBMRwwGgYDVQQKDBMzS2V5IENvbXBhbnkgcy5yLm8uMB4XDTIyMTAxMjA5MTg0M1oXDTIyMTAxMjIxMTg0MlowDjEMMAoGA1UEAwwDeDExMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx3yEn1ivUp4etk3kdNrRXNP5PeIpTYobGj4lQrW57rsj9hhOhY/SwaeCu6sYPVvYIXPWnlc4tTafjcen/8Ikc7pY2NuzD0HaIAOujblcMKT2KAKA/OU+RrI2o/swU9UmEQ2wYveNYCGobimt/foURrB9opeDCx3pFXkddYsXAziaWu3AQIF5gIf/b+r7hYRIXh8V/u01t6FCnpBWCtdmYVrJ5e8KZw0yqptNpgDK1plu+8AR5tviP/vgrpBquwzNsVREsnRZJxOM6rXq9rG5scoqO+gxdsm6+EqfRiGiBvcaIr+Zpv81ryfiABLdixvyhoZ//3o8rAU0O7Pjm7HTxwIDAQABo4IBJDCCASAwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBQb/FXk1AOCzd40P27IA82xTCrutTBQBggrBgEFBQcBAQREMEIwQAYIKwYBBQUHMAKGNGh0dHA6Ly9wa2kuM2tleS5jb21wYW55L2Nhcy9kZW1vL2RlbW9zZXJ2ZXJzdWJjYS5jcnQwEQYDVR0gBAowCDAGBgRVHSAAMBMGA1UdJQQMMAoGCCsGAQUFBwMBMEYGA1UdHwQ/MD0wO6A5oDeGNWh0dHA6Ly9wa2kuM2tleS5jb21wYW55L2NybHMvZGVtby9kZW1vc2VydmVyc3ViY2EuY3JsMB0GA1UdDgQWBBQzGoVZucmxb0IrrAWE2oPxrcEOojAOBgNVHQ8BAf8EBAMCBaAwDQYJKoZIhvcNAQENBQADggIBAN+hsAdianf+76orB/KwNDLIE36XOai6Z5/9VHmgWKHmVqdBYf8RU/Pdd8NcCULIy8bDI67H7BhPbciRcFfHn7rkWNNz1LCvnxxEzfj20A0WGuPC4oQTnU7QpPJr6tru7d6rLsbJPCRYBhEw6soLRzmWWAy5P+RoONWJCw6fv+2o8xwsX7jGYkwYmmdu4sr8+f5hREyfLXt6z4CZCue1/gcOrS+fKzaXLAJ/2pVCqcKIKn+oUW8LtnB2R8jJe08KbXZwnlTTmaTCMT/k5tAWE34VnpCaMJPRR7gMeOTSiV73kfLpKGnSTFLaZr05hvaMBUzP1nZSmZOyMOFrZSZSH+tE8zK098UhXiNTKSFywbN5HfNV+YLMuG9sMU25xBB4pvx/iXcH3e3o6JmFBTjJeKVCgljhWgPalb52kA1YdN9sE0DLBBX+UVjT0W7+JkKOvEwo3VqLUZqavwfkfjHEx3Dlzx0Q4m8N2XCGkHe1tRz1McKbn2RCJk3sgZoe9fANK68L+d4CM3A31qbjgYkhJ0geDSS797CEpD8UK3NWYx/ssad45SU20Axq3BkSTpjS9eG1QPwR1YX0CywyTwbceNw6PvWNC28VLjverXi9beT1dbZ7HKHNap768cT5TTGViWEBFnuueIVNsBGSDNV3Qtba94HGKHuGNJpYvkMas4JZ\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The user must exist and must be associated with the X.509 certificate to be successfully identified and authenticated.")),(0,i.kt)("h2",{id:"json-id"},"JSON ID"),(0,i.kt)("p",null,"User can be identified using JSON format."),(0,i.kt)("p",null,"JSON ID has the following format of fields (other field will be ignored):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Item"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sub")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Unique identification of the user in the external system"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"YES"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"username")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Username of the user, username must be unique in the platform"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--success"},"YES"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"given_name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Given name of the user"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"NO"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"family_name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Family name of the user"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"NO"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"email")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Email associated with the user"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"NO"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"roles")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"array of strings")),(0,i.kt)("td",{parentName:"tr",align:null},"Roles associated with the user"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"badge badge--danger"},"NO"))))),(0,i.kt)("p",null,"The JSON ID is typically provided in the header as Base64-encoded data."),(0,i.kt)("p",null,"An example of the user identity provided as JSON token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sub": "2d73cf2a-5339-421e-81cd-8fa0d25a100b",\n  "username": "test",\n  "roles": [\n    "test-role",\n    "new-role"\n  ],\n  "given_name": "Test",\n  "family_name": "Test",\n  "email": "test@test.com"\n}\n\n# Base64-encoded\nX-USERINFO=ewogICJzdWIiOiAiMmQ3M2NmMmEtNTMzOS00MjFlLTgxY2QtOGZhMGQyNWExMDBiIiwKICAidXNlcm5hbWUiOiAidGVzdCIsCiAgInJvbGVzIjogInRlc3Qtcm9sZSIsCiAgImdpdmVuX25hbWUiOiAiVGVzdCIsCiAgImZhbWlseV9uYW1lIjogIlRlc3QiLAogICJlbWFpbCI6ICJ0ZXN0QHRlc3QuY29tIgp9\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"External authentication servers is responsible to provide consistent JSON ID that is used for identification of the user. ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak")," is one of the tested authentication servers.")),(0,i.kt)("h2",{id:"identification-order"},"Identification order"),(0,i.kt)("p",null,"When identifying user, the following order is applied:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"X.509 certificate"),(0,i.kt)("li",{parentName:"ol"},"JSON token")),(0,i.kt)("p",null,"When none of the identification data of user is provided, user is considered to be ",(0,i.kt)("strong",{parentName:"p"},"anonymous")," (unidentified)."))}m.isMDXComponent=!0}}]);