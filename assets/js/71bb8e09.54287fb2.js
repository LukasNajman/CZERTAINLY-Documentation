"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8416],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=o,d=f["".concat(u,".").concat(p)]||f[p]||m[p]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52991:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),o=n(34334),i=n(24575),a=n(39960),c=n(13919),u=n(95999),l="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function f(e){var t=e.href,n=e.children;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function p(e){var t=e.href,n=e.icon,i=e.title,a=e.description;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},n," ",i),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",m),title:a},a))}function d(e){var t,n=e.item,o=(0,i.Wl)(n);return o?r.createElement(p,{href:o,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){var t,n,o=e.item,a=(0,c.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",u=(0,i.xz)(null!=(t=o.docId)?t:void 0);return r.createElement(p,{href:o.href,icon:a,title:o.label,description:null!=(n=o.description)?n:null==u?void 0:u.description})}function b(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,n=(0,i.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){var t=e.items,n=e.className;if(!t)return r.createElement(v,e);var a=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e}))})))}},69165:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=n(52991),c=["components"],u={},l="Contributing to CZERTAINLY",s={unversionedId:"contributors/overview",id:"contributors/overview",title:"Contributing to CZERTAINLY",description:"Join CZERTAINLY Community! CZERTAINLY, community matters. Join us in building innovative trust lifecycle management tools that can be freely used by anyone. Any contribution counts.",source:"@site/docs/60-contributors/01-overview.mdx",sourceDirName:"60-contributors",slug:"/contributors/overview",permalink:"/docs/contributors/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Feedback and Support",permalink:"/docs/feedback-support"},next:{title:"Overview",permalink:"/docs/contributors/attributes/overview"}},m={},f=[],p={toc:f};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-czertainly"},"Contributing to CZERTAINLY"),(0,i.kt)("admonition",{title:"CZERTAINLY community",type:"success"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.czertainly.com/community/"},"Join CZERTAINLY Community! CZERTAINLY"),", community matters. Join us in building innovative trust lifecycle management tools that can be freely used by anyone. Any contribution counts.")),(0,i.kt)("p",null,"We encourage everyone to make contributions to CZERTAINLY platform. You can be a part of the community and improving the security of the internet. Your contribution is important to enhance the platform and make it more affordable and available for all of us using digital certificate."),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);