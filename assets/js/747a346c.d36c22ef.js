"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2702],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,v=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return n?a.createElement(v,r(r({ref:t},d),{},{components:n})):a.createElement(v,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58106:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],c={},l="Entity Provider",p={unversionedId:"certificate-key/connectors/entity-provider",id:"certificate-key/connectors/entity-provider",title:"Entity Provider",description:"Entity Provider helps to integrate any technology (open and proprietary) that is not able, not capable, or you do not want to, use standard interface and protocols for management and automation of the certificate and cryptographic keys lifecycle.",source:"@site/docs/10-certificate-key/12-connectors/24-entity-provider.md",sourceDirName:"10-certificate-key/12-connectors",slug:"/certificate-key/connectors/entity-provider",permalink:"/docs/certificate-key/connectors/entity-provider",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discovery Provider",permalink:"/docs/certificate-key/connectors/discovery-provider"},next:{title:"Available Connectors",permalink:"/docs/certificate-key/connectors/available-connectors"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Provider objects",id:"provider-objects",level:2},{value:"Processes related to <code>Entity</code>",id:"processes-related-to-entity",level:2},{value:"Create <code>Entity</code>",id:"create-entity",level:3},{value:"Get <code>Entity</code> Details",id:"get-entity-details",level:3},{value:"Update <code>Entity</code>",id:"update-entity",level:3},{value:"Remove <code>Entity</code>",id:"remove-entity",level:3},{value:"Processes related to <code>Location</code>",id:"processes-related-to-location",level:2},{value:"Create <code>Location</code>",id:"create-location",level:3},{value:"<code>Location</code> Details",id:"location-details",level:3},{value:"Update <code>Location</code>",id:"update-location",level:3},{value:"Remove <code>Location</code>",id:"remove-location",level:3},{value:"Change <code>Location</code> State",id:"change-location-state",level:3},{value:"Issue <code>Certificate</code> in <code>Location</code>",id:"issue-certificate-in-location",level:3},{value:"Renew <code>Certificate</code> in <code>Location</code>",id:"renew-certificate-in-location",level:3},{value:"Push <code>Certificate</code> to <code>Location</code>",id:"push-certificate-to-location",level:3},{value:"Delete <code>Certificate</code> from <code>Location</code>",id:"delete-certificate-from-location",level:3},{value:"Specification and example",id:"specification-and-example",level:2}],s={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"entity-provider"},"Entity Provider"),(0,o.kt)("admonition",{title:"Using Entity Provider",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Entity Provider helps to integrate any technology (open and proprietary) that is not able, not capable, or you do not want to, use standard interface and protocols for management and automation of the certificate and cryptographic keys lifecycle.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Certificate")," can be stored and managed in various locations in the infrastructure. Entity Provide gives you the capability of management entities that are the end user of ",(0,o.kt)("inlineCode",{parentName:"p"},"Certificates")," and if supported, manage their location with associated ",(0,o.kt)("inlineCode",{parentName:"p"},"Certificate")," and cryptographic key."),(0,o.kt)("p",null,"Entity Provider can implement literally any type of the certificate store."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Entity Provider ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector")," provides access to the locations on the remote devices. These devices are the actual end-users of the certificate. Multiple locations on one server are supported. The Connector can create multiple Entities and automate the certificate lifecycle on associated locations."),(0,o.kt)("h2",{id:"provider-objects"},"Provider objects"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/certificate-key/concept-design/core-components/entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/certificate-key/concept-design/core-components/location"},(0,o.kt)("inlineCode",{parentName:"a"},"Location"))," objects are managed in the platform through the Entity Provider implementation.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Entity")," represents end user of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Certificate")," and it can have access to multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Locations"),"."),(0,o.kt)("p",null,"The following diagram shows the relation (sample) between ",(0,o.kt)("inlineCode",{parentName:"p"},"Entity Provier"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Entity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Location"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Certificate"),":"),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/ZPB12iCW38RlUGhflOTgZsKKnWw37VOAOjsGjLgiAvJHTvze5M4YyvIGp_o_YVrYg3RlQGIOw8ogYpJ2REYkrIe6hYj45yHdz84TOARiHPyyGeslDhQAx77tRufH8vICnJ6Kzmo40uGB40aGYL36pD4AbypWVypWn4oYSvKhbqRfBHKuSst4GzW6_D1W6OMKyY8Cbod_P4RALEkfDhLhTrNN9pkj665mI-Xip1fmO-pgdmId2G4tgapIWfjFIA3dSh2Vvmi0"})),(0,o.kt)("h2",{id:"processes-related-to-entity"},"Processes related to ",(0,o.kt)("inlineCode",{parentName:"h2"},"Entity")),(0,o.kt)("p",null,"The following processes are associated with the Entity Provider and management of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Entity")," objects."),(0,o.kt)("h3",{id:"create-entity"},"Create ",(0,o.kt)("inlineCode",{parentName:"h3"},"Entity")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/hLDDRy8m3BtlLrZQTINt7X08E21j5oPsGHn2QY2YTIh7PME_VacR3jY7fathfRNpdj-pdG80ZBnebgOgRq80kX57JRL1RaD_i5HhrXM8gnikOIzI-rofmXa_CA_8eYsLfu5nbTArLIqhFfFI8WbaGvWuHbYjJ7XbCn8h9tKhUgUwx-n1azvX5S3ArSXQh2Db6BLWXvXJS4W6r-iSnaK1NHPiIhyhaXC4TqHEsdTHE8TbNOHIC7knNYpjUlgpbJsCHTXk6a4FMtQXoJs2SKHenF6vbUXys5MRxD4S06Cn3EBWjk4u4K1Jx-wAsmsX1_ro4aTTsjZ0lJDjucmvpkCfdLvqSY7TIsPf2paiq3UbHDUw9q1I2BN_p_LVzlVHRuhwcQT4g1xkOhkfJwF-XX-QZklYdmXnGCdS5CEzBlqN0ucWHubXWYvmYupNZIHmUmsZlZHCFNwvd4zRw0Yf2B_T6m00"})),(0,o.kt)("h3",{id:"get-entity-details"},"Get ",(0,o.kt)("inlineCode",{parentName:"h3"},"Entity")," Details"),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/lP4z2m8n38PtVqN0-Un-WmWYuk3YAWwn5yvYcvOq7VJNs_iG5rtjqdozF6zQ081DLXGjmIzg0bWqSWbNaZ7DTyS91GDeJ4Kyt5HJRetfeiqh-oHHTEmVAnk3mUJCg1hErZjYXMODsoW4vxEjLxDZTVemIyNUJ75pHCQUGXqsCP6WkiYc9vtQ1wxssDBbqiAU5AOgkBaC7LK3Fd-m0so4CfFLA7yaludDl7JxrlmqERvH2oVI8lnjUaFSrQzv0G00"})),(0,o.kt)("h3",{id:"update-entity"},"Update ",(0,o.kt)("inlineCode",{parentName:"h3"},"Entity")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/bLEnJiCm4DtvYfDOIRrdG4M50GcMIh1K7LpdqbXDpf5zBfIlntOSaY94rIonVVVklNS-0m0i7KlBlcjlmWQaPqE-sw5DMtVGr4ihEs3JUzj2mzoxKeZAABTGNsXPQcfF2sKw8Nij4Yf-grOZCHJti38MORDHuLSy4Mi-YLkMUp6iYrT9SezTI1QcHojP6n9OQHxYpnJqaSBjjeItlfACC0H0vyWF9PaGD4UqcVmkCa-eJ-rOqtw4VsXku87PwfrdT51R4rms2CeGeM9Z9o_HGNAI8zVQESfMHn4lHgM3YJRQUi_HcPePzKXPv5QMi4RdMmPJWnm1a1b2xGkgyxh0GMvlpL5NQ2zxyAcDLr_ApC1CIWch1jLXF0Zrmu2bxWzrBiBFMIiCOzWwa5HDFVc_YHdvE23_QDfyT8RSDTPeyTnSp8xfQU3YrR2tz4jMIbyYLU6HVGC0"})),(0,o.kt)("h3",{id:"remove-entity"},"Remove ",(0,o.kt)("inlineCode",{parentName:"h3"},"Entity")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/dP8_JmCn3CLtFeKbvcls6r2b4mC32slLmKtSDlHYHuuFgNnwSdyA5LH8a2Mn_9xVJqa00DR5K6r8_Lqj00SJ7jAET2hBAN96nGGcUT0UZcQvjCu5yMNbtqaD8_VdbPVaC4StkSRLzP7Oe7c0JfHWi_5rQnxPeftTlU71pUVc6HaFbAhOIIP5Yy8kK4z6i-A9Ao5xscvRUA4aRmHp0-BI-GeTevR85heZ-HFiHI5G9WuZZ-nUoLkvuM2kZQhz8wbEHFyWlUGrdxoBzZ85vj7XbkSA-7lKbNrFIZ-lPpHFZ_DxuhhUMFqL7m00"})),(0,o.kt)("h2",{id:"processes-related-to-location"},"Processes related to ",(0,o.kt)("inlineCode",{parentName:"h2"},"Location")),(0,o.kt)("p",null,"The following processes are associated with the Entity Provider and management of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Location")," objects."),(0,o.kt)("h3",{id:"create-location"},"Create ",(0,o.kt)("inlineCode",{parentName:"h3"},"Location")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/fLDDRm8X4BttLqpIC-xTWz6iJTF4faaRUp4U44Obih21MLFxwmliubVKrdGlx33lpRmt0030q1Dtr5Jw8GJ06xAcgHReKkWtojJSyGh8retJi2QgVRyef1M-9xxH4LT6xth2LWMlLP5OyIkrGaF01b1QXtsOA4_mP4YHGdz0XHom24hmgx2JOZ2RYR0mRGKdPKtnI7nLJBg8lNB3LrW5Gc5hT2s4Iva1ytaVHb92Za_4i44hjroZs01-1Jbe189TXhGnACYwC_NPuGLAChBxE_wYf9RHzKxUkt-6gJohdTqgYQwTGzlpyXIsN2l92NEV4P5JYuRGnw5yTbauR1y9oGBOti0x-aPJrCqp0ReE__ImFyktBDqVkLWXPS0Om_tJKVmpqdvyq6vVLzz5PopPie0R2MMusMgfGkQN8Tp3FZbzXt7K4UqfPcwSVSH_9D2DmiUFA6kQJb_62JP48yCJ_m40"})),(0,o.kt)("h3",{id:"location-details"},(0,o.kt)("inlineCode",{parentName:"h3"},"Location")," Details"),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/RP312i8m38RlFaN0y-nz1nbCyABWVUmGkp2BRLFQzA1FRpStvi5SmWzVyeK003H9C4fsTbS2O1RssTqfpZ4zZGyOqO5moD72GoIaMgc1TJheDqL1u-theDaf34RDKrErrf0Ng8xGSYJeEbrQPLcZ6FPgBpYgovAgAteSoPK1nO7Y5nb9Lg3lQpYJm9hXHCLhqsQR78khXbjaJId1QeFXBpxnyvNrjlYNRCWFvIyV"})),(0,o.kt)("h3",{id:"update-location"},"Update ",(0,o.kt)("inlineCode",{parentName:"h3"},"Location")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/RL6nRWCX3Dtx5POw4_ORgaHHjdQfr2vH1WVS59N324oazEl3SOTILSS2pxpdzmm00DiicAIC_ga2m28SodYcr63-SI5YmX64OqaUlaLY7hIsRFB6_58ITC7VDeP7ZT7fffhMtZiA0ke5zfm8ZaTJD-NPe3WE-bdmebyNfDumu8N6Aj0SASqKiauwutGQu50nzCB3P-hUN48W8voQrN9MjQEJcug9hyvIccqFSt7Lz8hUMHJgFZkHvCv5A4yHFfTRU9J_1Ea1r3Bq0E-KYnVWBy0kWCLXVOP9z16RHKy0bkeR-_oFFT7R4m_hp2q5Mp_r3W00"})),(0,o.kt)("h3",{id:"remove-location"},"Remove ",(0,o.kt)("inlineCode",{parentName:"h3"},"Location")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/VL0x3i8m3DqvXINcDdi7XDGL5jQgWvkQDf34KU8YmUb9MpuJUB6UzJws0G3sIJ3AvEmc0y19s4-kexZ0T3K-O4G7mc6A5aQHa2gbUjQfr0-AWiRRUwdPAGn6BQgvQcl82nGxg3aID8tEhR2iKGnxjHKSrE65YYDw7CXbWU90SQNqP4depMdR2axa-4Rm7dspveHNKWNrIFeAPuxGKo3VpsjmTo4jwOVYl-zCMuwfFepidE-sgzy-P-JtFG40"})),(0,o.kt)("h3",{id:"change-location-state"},"Change ",(0,o.kt)("inlineCode",{parentName:"h3"},"Location")," State"),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/hL4n3i8m3DnvXINcahq3gbJOO6Ai64ngbOZ4YH9tWDUJfgLYOCIBTPSxdoC303H9CChex2O3m54yZ-v6iS3qC1mmeWFnOOmMxY8XrKhrNgUTVb4KD6oVE-sTmc1KSPL1Le0ORvPKRzBKrwUfMck81Qezj3uIT9tEhR9UenZFQYiugDE2gZCo3kIoGVb0SPRCmp-QwxM6Os7WG_qvR_d5T-1Xfdud4lShBfdL55xMg5S7N0I5eBqZ3pJhcspCrtW3"})),(0,o.kt)("h3",{id:"issue-certificate-in-location"},"Issue ",(0,o.kt)("inlineCode",{parentName:"h3"},"Certificate")," in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Location")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/lPJ1Qi9048RlVOg1dcEWb1uy56qAfRIbegKNyJ0cerbCTiFkh6AVlhkQc4HJeLIQIpAJVsR-BqmM061W63NRFBjo0Q1b9Mq-9xqBpKh80ZNcmAgmEeEKkJ3zC4nKR7hn5sb68RDjBrPvY8K8TrN-YZ91aY6uXqXfWkaqThSWKp6oK3AyPbo6hsKKlA749UMk85G5wRr466CfSXF4GZWTpMPzUFOvQ2ITBwZQrBFzn79o7qQa5qhdC7B9AALuPS35hIQ-BSgOEZf8IJ4xkGSedmFdK_0sABHQYuJq4SnxHM0QC6lCHE96FP7qAOgC7Z9hCRTCnfDzbWA89cEeNpKSLKw20zcOZCqOrA9T1EMmxazo8Q1b3L89FKR5vnrrUMyuQ8jX8pW5IHjueIsCKEYpwBxY4HbF08UMKwKTJGiGg-o1CLZVx34RU_27FJpugEVNPX_GqDrjfxozgXFsuNdTXHToP4tQ6FZ3KdfLwu_vzORkElplYXPjj0_LNDHZelFRrY3tXPGSkVRAtO7NFpbNIks0PE8EsMy0"})),(0,o.kt)("h3",{id:"renew-certificate-in-location"},"Renew ",(0,o.kt)("inlineCode",{parentName:"h3"},"Certificate")," in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Location")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/lPH1IyD048Nl_ee1pp4Wug47gKOGKJ6quaKyZCaqMKnsm-wajVvwTsFIRDfO58gzjBFxPkTzoUi204mDe-QwB8vi0LYpadNvHhefpRkG5MeiWLLLwm9ovifCmZ1LYJb9Faap2bciJn9LXbY9iEbodwWG91c22uYK9dXvIUnNKAW4MIWP7ZDcuNrR1GyeCQFIDeIg8lqjqIHf5Ta9OY6iZcvbftzzdS3CxOAt3K929-XTkDcjXmd4f1TAbn3RnIYdvDs0hGU7DCTYCNA0b9ImLJkIzdTW3GjU1vLMIv6Itg9wx52CHxN4GgHsqeqTP9SeClgIMOktciauiETM0D5y1lsMvwXp4cp0PcJgWa4jXatG3Xj_8WS2odeG__rqVCxHc7VFmL0CAy4vq8SmB6G6TxI668NUo-_Qhf5nX_AovbnfYpIWn6vr0neiJxzPlIpyBfMZMTpuwEVtPg_GqFdPg7mOrpcxSh_kmAcCQvDx0tz8fbCD_ZL_Zcbpml_cj1gYFIa_hTj4-zFcaRj6IhTSEsLp_KrsxvPMF2MPsZlt2m00"})),(0,o.kt)("h3",{id:"push-certificate-to-location"},"Push ",(0,o.kt)("inlineCode",{parentName:"h3"},"Certificate")," to ",(0,o.kt)("inlineCode",{parentName:"h3"},"Location")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/jPB1RiCW38RlUmfBErFkEKoTSjsqgffsgNgWn6sj4Op0LEgUVYHDrYojTXiNCFhjxxS1062Pn4J9hNie0PWix7ExmzY7wPDyCD6q81noT70K2QdIkc6R5lOBenZoxhomt6eJIFTPtQeTeHTGJr1pHDXiRDcKOsk4sEj7CGVzCaJgrNXpmBOaQ0uOBvAGqx4k0DfJaU5sMy6gNC7ahhY2iSYLtF5whlTeXMCF7ywgC4ZEAaG-KODnPkHjfAU9aPDnr1JQwhUXPv58kooOEciVW-ZMurKtiJXQKyE0AbXZoaw0zvSAFramuF-rnTcittcKtvlwdsrCE-yIiPcvxfJztxYdlNdG9Vgc_Crl"})),(0,o.kt)("h3",{id:"delete-certificate-from-location"},"Delete ",(0,o.kt)("inlineCode",{parentName:"h3"},"Certificate")," from ",(0,o.kt)("inlineCode",{parentName:"h3"},"Location")),(0,o.kt)("p",null,(0,o.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/VP51QmCX48Nl_HK3FHllUmY1XPvQ2hs67ApEfb9rP1m3wQ-FQtPfsePwqHdUytsZ002x8eQbnl3G2Z1LADNuZjpBykbJDcmY2ENA0Jv4SXcqTcJBnduXY_4fd3UMeZRPw-wQrnWy9W6rXP4OOR-tRLE1h15FIJ-AEUhdfL8l9faZncRGb96l4iP89nnRX9zy4-BXCC1RRy9D5oQc2EjLt_bpQazF2QqGTuJbh5gIbxFAJ2Vla7_XlAuCvJ-SfvQxMkwZtS2i46fva5bUQX2WwSSm3WFUcMDszGST_ghHTV4Eask_U040"})),(0,o.kt)("h2",{id:"specification-and-example"},"Specification and example"),(0,o.kt)("p",null,"The Entity Provider implements ",(0,o.kt)("a",{parentName:"p",href:"common-interfaces/overview"},"Common Interfaces")," and the following additional interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/connector-entity-provider/#tag/Entity-Management"},"Entity Management")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/connector-entity-provider/#tag/Location-Operations"},"Location Operations"))),(0,o.kt)("p",null,"The OpenAPI specification of the Entity Provider can be found here: ",(0,o.kt)("a",{parentName:"p",href:"/api/connector-entity-provider/"},"Connector API - Entity Provider"),"."))}u.isMDXComponent=!0}}]);