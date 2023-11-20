"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2518],{2519:(M,I,i)=>{i.r(I),i.d(I,{assets:()=>t,contentTitle:()=>N,default:()=>c,frontMatter:()=>j,metadata:()=>D,toc:()=>s});var g=i(85893),e=i(11151);const j={},N="Introduction",D={id:"signing/qscd-integration/utimaco-cp5/overview",title:"Introduction",description:"Utimaco CryptoServer CP5 is a hardware security module, developed by Utimaco, supporting fulfilling policy and security requirements defined in various ETSI technical standards (ETSI EN 319 401, EN 319 411, EN 319 421). With key authorization functionalities, it is well suited for eIDAS-compliant applications.",source:"@site/docs/30-signing/25-qscd-integration/07-utimaco-cp5/01-overview.md",sourceDirName:"30-signing/25-qscd-integration/07-utimaco-cp5",slug:"/signing/qscd-integration/utimaco-cp5/overview",permalink:"/docs/signing/qscd-integration/utimaco-cp5/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/25-qscd-integration/07-utimaco-cp5/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Key Management Operations",permalink:"/docs/signing/qscd-integration/trident-hsm/km"},next:{title:"Key Authorization Key",permalink:"/docs/signing/qscd-integration/utimaco-cp5/kak"}},t={},s=[{value:"Using the CryptoServer CP5 as QSCD",id:"using-the-cryptoserver-cp5-as-qscd",level:2}];function C(M){const I={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,e.a)(),...M.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(I.h1,{id:"introduction",children:"Introduction"}),"\n",(0,g.jsxs)(I.p,{children:["Utimaco CryptoServer CP5 is a hardware security module, developed by ",(0,g.jsx)(I.a,{href:"https://www.utimaco.com/",children:"Utimaco"}),", supporting fulfilling policy and security requirements defined in various ETSI technical standards (ETSI EN 319 401, EN 319 411, EN 319 421). With key authorization functionalities, it is well suited for eIDAS-compliant applications."]}),"\n",(0,g.jsx)(I.p,{children:"The CryptoServer CP5 can be used as a cryptographic module for implementing local signing/sealing and server signing services in accordance with the EN 419 241-1 Security Requirements and the EN 419 241-2 \u201cProtection Profile for Qualified Signature Creation Device (QSCD) for Server Signing\u201d."}),"\n",(0,g.jsx)(I.p,{children:"As a part of a Time Stamping System, the CryptoServer CP5 may be used as the cryptographic module creating the digital signatures of the time-stamp tokens. It fulfills the requirements for a cryptographic module according to EN 419231 \u201cProtection profile for trustworthy systems supporting time stamping\u201d."}),"\n",(0,g.jsx)(I.h2,{id:"using-the-cryptoserver-cp5-as-qscd",children:"Using the CryptoServer CP5 as QSCD"}),"\n",(0,g.jsxs)(I.admonition,{type:"warning",children:[(0,g.jsx)(I.p,{children:"Assumption is that you already have a CryptoServer CP5 up and running. The following steps applies to how to integrate existing CryptoServer CP5 as a QSCD with the SignServer."}),(0,g.jsx)(I.p,{children:"Current implementation does not support the management of keys of the CryptoServer CP5 through the standard interfaces. Private keys must be generated, initialized, and authorized before they are with the Crypto Tokens and Signers. This documentation explains required steps to do so."})]}),"\n",(0,g.jsxs)(I.p,{children:["The key authorization concept of the CryptoServer CP5 makes it possible to restrict the use of private keys to dedicated users. Thus, the CryptoServer CP5 fulfills the requirements from eIDAS and the Protection Profile EN 419 221-5 for providing the possibility of \u201csole control\u201d of a user over signature key. See ",(0,g.jsx)(I.a,{href:"./kak",children:"Key Authorization Key (KAK)"})," for more information."]}),"\n",(0,g.jsx)(I.p,{children:"In order to start usign the CryptoServer CP5 as QSCD, follow these steps:"}),"\n",(0,g.jsxs)(I.ol,{children:["\n",(0,g.jsx)(I.li,{children:(0,g.jsx)(I.a,{href:"./genkey",children:"Generate, initialize and authorize private keys"})}),"\n",(0,g.jsx)(I.li,{children:(0,g.jsx)(I.a,{href:"./issuecert",children:"Generate CSR and import certificate"})}),"\n",(0,g.jsx)(I.li,{children:(0,g.jsx)(I.a,{href:"./middleware",children:"Installation of PKCS#11 middleware"})}),"\n",(0,g.jsx)(I.li,{children:(0,g.jsx)(I.a,{href:"./cryptotoken",children:"Configuration of PKCS#11 Crypto Token"})}),"\n"]}),"\n",(0,g.jsx)(I.p,{children:"The configured PKCS#11 Crypto Token can be used as a reference within Signer configuration."}),"\n",(0,g.jsx)(I.admonition,{type:"info",children:(0,g.jsxs)(I.p,{children:["For more information about the Utimaco CryptoServer CP5, please refer to official vendor's site and materials: ",(0,g.jsx)(I.a,{href:"https://hsm.utimaco.com/products-hardware-security-modules/general-purpose-hsm/cryptoserver-cp5-eidas-cc-2/",children:"Utimaco CryptoServer CP5"})]})}),"\n",(0,g.jsx)("div",{class:"text--center",children:(0,g.jsx)(I.p,{children:(0,g.jsx)(I.img,{alt:"Utimaco",src:i(25561).Z+"",title:"Utimaco",width:"332",height:"75"})})})]})}function c(M={}){const{wrapper:I}={...(0,e.a)(),...M.components};return I?(0,g.jsx)(I,{...M,children:(0,g.jsx)(C,{...M})}):C(M)}},25561:(M,I,i)=>{i.d(I,{Z:()=>g});const g="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzMycHgiIGhlaWdodD0iNzVweCIgdmlld0JveD0iMCAwIDMzMiA3NSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5hdG9tL2NkL3V0aW1hY28gbG9nbzwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjAgMC44Mjc3IDQxLjk5MTkgMC44Mjc3IDQxLjk5MTkgNTAuOTk5NyAwIDUwLjk5OTciPjwvcG9seWdvbj4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0zIiBwb2ludHM9IjAuNjA4NiAwLjgyODEgNTIuODkwNiAwLjgyODEgNTIuODkwNiA1MSAwLjYwODYgNTEiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJhdG9tL2NkL3V0aW1hY28tbG9nbyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTIwIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNy40MzM4MDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0yIj48L2c+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQxLjk5MTksNDkuNTEyNyBMMzAuODY4OSw1MC4yNTY3IEwzMC44Njg5LDQ0LjEyNDcgTDMwLjY4MjksNDQuMTI0NyBDMjYuNjk2OSw0OS41MTI3IDIyLjgwMzksNTAuOTk5NyAxNi4yMjE5LDUwLjk5OTcgQzYuNDg5OSw1MC45OTk3IC0wLjAwMDEsNDQuNzc1NyAtMC4wMDAxLDM0LjczOTcgTC0wLjAwMDEsMi4zMTI3IEwxMS43NzI5LDAuODI3NyBMMTEuNzcyOSwzMS41ODE3IEMxMS43NzI5LDM2LjU5NzcgMTQuMDg5OSw0MC43Nzg3IDE5LjM3MzksNDAuNzc4NyBDMjYuNzg4OSw0MC43Nzg3IDMwLjIxOTksMzUuMTEwNyAzMC4yMTk5LDI5LjE2MzcgTDMwLjIxOTksMi4zMTI3IEw0MS45OTE5LDAuODI3NyBMNDEuOTkxOSw0OS41MTI3IFoiIGlkPSJGaWxsLTEiIGZpbGw9IiMwMDAwMDAiIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU0LjEzNSwxMC4xMzg3IEw2NS45MDcsNC44NDA3IEw2NS45MDcsMTguMzEyNyBMNzYuNTY4LDE4LjMxMjcgTDc2LjU2OCwyOC41MzM3IEw2NS45MDcsMjguNTMzNyBMNjUuOTA3LDQ4LjY5NTcgQzY1LjkwNyw1My4yNDY3IDY3Ljg1NCw1Ni4yMjA3IDc0LjcxMyw1Ni4yMjA3IEM3Ni4wMTIsNTYuMjIwNyA3Ny40OTYsNTYuMTI2NyA3OC43OTMsNTYuMDMzNyBMNzUuOTIsNjYuNjI2NyBDNzQuODA3LDY2LjkwNTcgNzIuNzY3LDY2Ljk5ODcgNzEuMjg0LDY2Ljk5ODcgQzYxLjM2Niw2Ni45OTg3IDU0LjEzNSw2MS43MDI3IDU0LjEzNSw1MS4yMDM3IEw1NC4xMzUsMjguNTMzNyBMNDYuOTA0LDI4LjUzMzcgTDQ5LjUsMTguMzEyNyBMNTQuMTM1LDE4LjMxMjcgTDU0LjEzNSwxMC4xMzg3IFoiIGlkPSJGaWxsLTQiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDMuMTcwMSwxOC4zMTI1IEwxMTQuMjk0MSwxNy4xOTg1IEwxMTQuMjk0MSwyMy4yMzc1IEMxMTcuOTEwMSwxOS4xNTA1IDEyMC42OTExLDE2LjgyOTUgMTI2LjM0NTEsMTYuODI5NSBDMTMwLjk4MTEsMTYuODI5NSAxMzUuMTUxMSwxOC44NzE1IDEzOC40ODgxLDIyLjg2ODUgQzE0Mi42NTkxLDE4Ljc3NzUgMTQ2LjA4OTEsMTYuODI5NSAxNTEuNzQ0MSwxNi44Mjk1IEMxNTguOTc1MSwxNi44Mjk1IDE2Ny4wMzkxLDIxLjAwODUgMTY3LjAzOTEsMzEuODc5NSBMMTY3LjAzOTEsNjUuNTEyNSBMMTU1LjI2NTEsNjYuMjU2NSBMMTU1LjI2NTEsMzMuOTIwNSBDMTU1LjYzNzEsMjguMTYyNSAxNTIuMzkyMSwyNy4wNDY1IDE0OC40MDUxLDI3LjA0NjUgQzE0My41ODcxLDI3LjA0NjUgMTQwLjk5MTEsMzAuNjY5NSAxNDAuOTkxMSwzNi41MjQ1IEwxNDAuOTkxMSw2NS41MTI1IEwxMjkuMjE4MSw2Ni4yNTY1IEwxMjkuMjE4MSwzMy45MjA1IEMxMjkuNTg5MSwyOC4xNjI1IDEyNi4zNDUxLDI3LjA0NjUgMTIyLjM1ODEsMjcuMDQ2NSBDMTE3LjUzOTEsMjcuMDQ2NSAxMTQuOTQyMSwzMC42Njk1IDExNC45NDIxLDM2LjUyNDUgTDExNC45NDIxLDY1LjUxMjUgTDEwMy4xNzAxLDY2LjI1NjUgTDEwMy4xNzAxLDE4LjMxMjUgWiIgaWQ9IkZpbGwtNiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4NC40NjUxLDUwLjM2NzIgQzE4NC40NjUxLDQ2LjE4NzIgMTg4LjkxNjEsNDMuNTg1MiAxOTMuMDg2MSw0My41ODUyIEMxOTcuMjU2MSw0My41ODUyIDIwMS43MDcxLDQ2LjE4NzIgMjAxLjcwNzEsNTAuMzY3MiBDMjAxLjcwNzEsNTQuNjQxMiAxOTcuMjU2MSw1Ny4xNTIyIDE5My4wODYxLDU3LjE1MjIgQzE4OC45MTYxLDU3LjE1MjIgMTg0LjQ2NTEsNTQuNjQxMiAxODQuNDY1MSw1MC4zNjcyIEwxODQuNDY1MSw1MC4zNjcyIFogTTE3OC40NDExLDI5LjQ2NDIgQzE4Mi43MDQxLDI3Ljc4OTIgMTg3LjE1NTEsMjYuNjc3MiAxOTEuNzg5MSwyNi42NzcyIEMxOTcuMjU2MSwyNi42NzcyIDIwMS44OTMxLDI3Ljg4NjIgMjAxLjg5MzEsMzQuMjk0MiBDMjAxLjg5MzEsMzUuNTA2MiAyMDEuNzA3MSwzNi40MzIyIDIwMS42MTYxLDM3LjQ1MzIgQzE5Ny4wNzIxLDM1LjEzMzIgMTkzLjczNjEsMzQuMjk0MiAxODguNjM3MSwzNC4yOTQyIEMxNzkuODMwMSwzNC4yOTQyIDE3Mi42OTMxLDQxLjgxNzIgMTcyLjY5MzEsNTAuMzY3MiBDMTcyLjY5MzEsNjEuMTQ1MiAxODAuNDc5MSw2Ni45OTkyIDE5MC40OTExLDY2Ljk5OTIgQzE5NC44NDcxLDY2Ljk5OTIgMTk5LjAxOTEsNjUuMzI4MiAyMDIuMjY0MSw2Mi41MzkyIEwyMDIuMjY0MSw2Ni42MjcyIEwyMTMuMDE2MSw2NS41MTMyIEwyMTMuMDE2MSwzMC4xMTMyIEMyMTMuMDE2MSwyMC41NDMyIDIwMy43NDcxLDE2LjgyODIgMTk1LjMxMzEsMTYuODI4MiBDMTkwLjc3MTEsMTYuODI4MiAxODYuMTM1MSwxNy4yOTEyIDE4MS42ODQxLDE4LjEyNjIgTDE3OC40NDExLDI5LjQ2NDIgWiIgaWQ9IkZpbGwtOCIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1Ni4wMjc2LDMxLjEzNDggQzI1Mi45Njg2LDI5LjI3ODggMjQ5LjYzMTYsMjcuNjA2OCAyNDYuMDE1NiwyNy42MDY4IEMyMzcuMzAzNiwyNy42MDY4IDIzMC44MTM2LDMzLjM2MzggMjMwLjgxMzYsNDEuOTExOCBDMjMwLjgxMzYsNTAuMDg4OCAyMzguMjI4Niw1Ni4yMjA4IDI0NC4zNDk2LDU2LjIyMDggQzI0OS4xNjk2LDU2LjIyMDggMjUxLjg1NDYsNTUuMTA2OCAyNTUuNjU3Niw1Mi41OTc4IEwyNjIuMTQ1Niw2MS4wNTM4IEMyNTcuNjAzNiw2NS42MDU4IDI1MC41NTc2LDY2Ljk5OTggMjQ0LjUzMjYsNjYuOTk5OCBDMjMyLjM4ODYsNjYuOTk5OCAyMTkuMDQyNiw1Ny40MzE4IDIxOS4wNDI2LDQxLjU0MTggQzIxOS4wNDI2LDI3LjIzMzggMjMxLjE4NDYsMTYuODI3OCAyNDQuOTA0NiwxNi44Mjc4IEMyNTEuNzYzNiwxNi44Mjc4IDI1Ny4wNDc2LDE4Ljk2MjggMjYyLjIzOTYsMjIuMzEwOCBMMjU2LjAyNzYsMzEuMTM0OCBaIiBpZD0iRmlsbC0xMCIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjIuMDAwMDAwLCAxNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTEzIj48L2c+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjczMzYsMjUuOTEzMSBDMTEuNzMzNiwxNy44MzExIDE4Ljc3NjYsMTEuNjA3MSAyNi43NDg2LDExLjYwNzEgQzM0LjcyMTYsMTEuNjA3MSA0MS43Njc2LDE3LjgzMTEgNDEuNzY3NiwyNS45MTMxIEM0MS43Njc2LDMzLjk5NzEgMzQuNzIxNiw0MC4yMjExIDI2Ljc0ODYsNDAuMjIxMSBDMTguNzc2Niw0MC4yMjExIDExLjczMzYsMzMuOTk3MSAxMS43MzM2LDI1LjkxMzEgTTAuNjA4NiwyNS45MTMxIEMwLjYwODYsNDAuMTI4MSAxMi44NDM2LDUxLjAwMDEgMjYuNzQ4Niw1MS4wMDAxIEM0MC42NTI2LDUxLjAwMDEgNTIuODkwNiw0MC4xMjgxIDUyLjg5MDYsMjUuOTEzMSBDNTIuODkwNiwxMS42OTgxIDQwLjY1MjYsMC44MjgxIDI2Ljc0ODYsMC44MjgxIEMxMi44NDM2LDAuODI4MSAwLjYwODYsMTEuNjk4MSAwLjYwODYsMjUuOTEzMSIgaWQ9IkZpbGwtMTIiIGZpbGw9IiMwMDAwMDAiIG1hc2s9InVybCgjbWFzay00KSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMzMC41MzI0LDkuMDQ3OSBDMzMwLjUzMjQsMTMuMTM1OSAzMjcuNTE4NCwxNi4xOTc5IDMyMy41MzI0LDE2LjE5NzkgQzMxOS41MjQ0LDE2LjE5NzkgMzE2LjQ4NjQsMTMuMTM1OSAzMTYuNDg2NCw5LjA0NzkgQzMxNi40ODY0LDUuMDI3OSAzMTkuNTI0NCwxLjkzODkgMzIzLjUzMjQsMS45Mzg5IEMzMjcuNTE4NCwxLjkzODkgMzMwLjUzMjQsNS4wMjc5IDMzMC41MzI0LDkuMDQ3OSBMMzMwLjUzMjQsOS4wNDc5IFogTTMyMy41MzI0LDE3LjQwOTkgQzMyOC4wNzU0LDE3LjQwOTkgMzMxLjg3NDQsMTMuNzE2OSAzMzEuODc0NCw5LjA0NzkgQzMzMS44NzQ0LDQuNDI1OSAzMjguMDc1NCwwLjczMjkgMzIzLjUzMjQsMC43MzI5IEMzMTguOTQ0NCwwLjczMjkgMzE1LjE0NDQsNC40MjU5IDMxNS4xNDQ0LDkuMDQ3OSBDMzE1LjE0NDQsMTMuNzE2OSAzMTguOTQ0NCwxNy40MDk5IDMyMy41MzI0LDE3LjQwOTkgTDMyMy41MzI0LDE3LjQwOTkgWiBNMzIxLjYzNTQsOS42NzQ5IEwzMjMuNTc5NCw5LjY3NDkgTDMyNi4yOTA0LDEzLjk3MTkgTDMyNy43NzI0LDEzLjk3MTkgTDMyNC45MjQ0LDkuNjUxOSBDMzI2LjI2NzQsOS40MTg5IDMyNy40MDM0LDguNjUxOSAzMjcuNDAzNCw2LjkxMDkgQzMyNy40MDM0LDUuMDc1OSAzMjYuMzU5NCw0LjEyMzkgMzI0LjEzNjQsNC4xMjM5IEwzMjAuMzgyNCw0LjEyMzkgTDMyMC4zODI0LDEzLjk3MTkgTDMyMS42MzU0LDEzLjk3MTkgTDMyMS42MzU0LDkuNjc0OSBaIE0zMjMuODgyNCw1LjIzNjkgQzMyNC45OTM0LDUuMjM2OSAzMjYuMTUyNCw1LjUzNzkgMzI2LjE1MjQsNi44NjI5IEMzMjYuMTUyNCw3LjkzMjkgMzI1LjY0MjQsOC41NTg5IDMyMy45Mjc0LDguNTU4OSBMMzIxLjYzNTQsOC41NTg5IEwzMjEuNjM1NCw1LjIzNjkgTDMyMy44ODI0LDUuMjM2OSBaIiBpZD0iRmlsbC0xNSIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTE4IiBmaWxsPSIjMDA2OEI0IiBwb2ludHM9Ijg5Ljg4MjEgMC4wMDAyIDc4Ljg3NjEgMTEuMDMwMiA4OS44ODIxIDIyLjA1NjIgMTAwLjg4NDEgMTEuMDMwMiI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xOSIgZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSI4My44NTM5IDI1LjU4NDUgODMuODUzOSA3My41MjA1IDk1LjYyNjkgNzIuNzgxNSA5NS42MjY5IDI0LjQ3MDUiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},11151:(M,I,i)=>{i.d(I,{Z:()=>D,a:()=>N});var g=i(67294);const e={},j=g.createContext(e);function N(M){const I=g.useContext(j);return g.useMemo((function(){return"function"==typeof M?M(I):{...I,...M}}),[I,M])}function D(M){let I;return I=M.disableParentContext?"function"==typeof M.components?M.components(e):M.components||e:N(M.components),g.createElement(j.Provider,{value:I},M.children)}}}]);