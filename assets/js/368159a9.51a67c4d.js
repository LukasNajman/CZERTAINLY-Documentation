"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3870],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55928:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={},s="Database Setup",u={unversionedId:"certificate-key/installation-guide/database-setup",id:"certificate-key/installation-guide/database-setup",title:"Database Setup",description:"The platform is developed and tested in the PostgreSQL relational database.",source:"@site/docs/10-certificate-key/03-installation-guide/02-database-setup.md",sourceDirName:"10-certificate-key/03-installation-guide",slug:"/certificate-key/installation-guide/database-setup",permalink:"/docs/certificate-key/installation-guide/database-setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/certificate-key/installation-guide/introduction"},next:{title:"Create Trusted Certificates",permalink:"/docs/certificate-key/installation-guide/create-trusted-certificates"}},c={},p=[{value:"Setup database manually",id:"setup-database-manually",level:2}],d={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-setup"},"Database Setup"),(0,i.kt)("p",null,"The platform is developed and tested in the PostgreSQL relational database."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"Core")," version ",(0,i.kt)("inlineCode",{parentName:"p"},"2.0.3"),", database migrations are controlled by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Core")," itself. If you need to split the database administrator responsibility, it is always possible using the provided schema and migration scripts.")),(0,i.kt)("h2",{id:"setup-database-manually"},"Setup database manually"),(0,i.kt)("p",null,"The database must be setup before the platform can be used. Depending on your setup, you should initialize the database using the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the database user")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER czertainlyuser WITH PASSWORD 'your-strong-password';\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the database and grant the user access to it")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE czertainlydb ENCODING 'UTF8' LC_COLLATE='en_US.UTF-8' LC_CTYPE='en_US.UTF-8' TEMPLATE=template0;\nGRANT ALL PRIVILEGES ON DATABASE czertainlydb to czertainlyuser;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the tables using the schema file located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"db")," directory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h localhost -U czertainlyuser -d czertainlydb < ./core/01_tables.sql\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Load initial data required by the platform using the file located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"db")," directory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h localhost -U czertainlyuser -d czertainlydb < ./core/02_data.sql\n")),(0,i.kt)("p",null,"Once the tables and data are created, you can deploy the platform and start using it."))}f.isMDXComponent=!0}}]);