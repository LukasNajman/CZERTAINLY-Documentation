"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7639],{45257:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=s(85893),t=s(11151);const r={},a="Generate Assigned Key",c={id:"signing/qscd-integration/nshield-xc-cc/genkey",title:"Generate Assigned Key",description:"Assigned keys provide for more restrictive controls which are enforced with ACLs",source:"@site/docs/30-signing/25-qscd-integration/09-nshield-xc-cc/05-genkey.md",sourceDirName:"30-signing/25-qscd-integration/09-nshield-xc-cc",slug:"/signing/qscd-integration/nshield-xc-cc/genkey",permalink:"/docs/signing/qscd-integration/nshield-xc-cc/genkey",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/25-qscd-integration/09-nshield-xc-cc/05-genkey.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CMTS Security World",permalink:"/docs/signing/qscd-integration/nshield-xc-cc/cmts"},next:{title:"Issue and Import Certificate",permalink:"/docs/signing/qscd-integration/nshield-xc-cc/issuecert"}},o={},d=[{value:"Generate assigned keys",id:"generate-assigned-keys",level:2},{value:"Using the <code>generatekey</code>",id:"using-the-generatekey",level:3},{value:"Using the <code>mkaclx</code>",id:"using-the-mkaclx",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"generate-assigned-key",children:"Generate Assigned Key"}),"\n",(0,i.jsx)(n.p,{children:"Assigned keys provide for more restrictive controls which are enforced with ACLs\nDepending on the authorisation required, the keys can be either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Token protected key"}),", which is a key protected by an OCS or Softcard, and a passphrase."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Certifier protected key"}),", which is a key protected by a Certifier key."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The assigned key is generated as part of the ",(0,i.jsx)(n.code,{children:"pkcs11"})," application, that can be further used for signing and sealing purposes."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For more information about the assigned keys, protection mechanism, and key parameters, see ",(0,i.jsx)(n.strong,{children:"nShield Solo XC Common Criteria Evaluated Configuration Guide"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"generate-assigned-keys",children:"Generate assigned keys"}),"\n",(0,i.jsxs)(n.p,{children:["Token protected assigned keys can be created via the ",(0,i.jsx)(n.code,{children:"generatekey"})," and ",(0,i.jsx)(n.code,{children:"mkaclx"})," CLI utilities."]}),"\n",(0,i.jsxs)(n.h3,{id:"using-the-generatekey",children:["Using the ",(0,i.jsx)(n.code,{children:"generatekey"})]}),"\n",(0,i.jsxs)(n.p,{children:["To generate an assigned key using ",(0,i.jsx)(n.code,{children:"generatekey"}),", use the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"generatekey pkcs11 assigned=yes\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will bring an interactive generation of the assigned key, where you need to provide at least the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Key type"}),"\n",(0,i.jsx)(n.li,{children:"Key size"}),"\n",(0,i.jsx)(n.li,{children:"Key name"}),"\n",(0,i.jsx)(n.li,{children:"Token (your PKCS#11 token)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This is an example output from the ",(0,i.jsx)(n.code,{children:"generatekey"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"generatekey pkcs11 assigned=yes\ntype: Key type? (DES3, DH, DHEx, DSA, HMACSHA1, HMACSHA256, HMACSHA384,\n                 HMACSHA512, RSA, DES2, AES, Rijndael, ECDSA, ECDH, Ed25519,\n                 X25519) [RSA] >\nsize: Key size? (bits, minimum 1024) [2048] >\nOPTIONAL: pubexp: Public exponent for RSA key (hex)? []\n>\nlogkeyusage: Log key usage? (yes/no) [no] >\nplainname: Key name? [] > testassignedkey01\nnvram: Blob in NVRAM (needs ACS)? (yes/no) [no] >\nkey generation parameters:\n operation    Operation to perform               generate\n application  Application                        pkcs11\n protect      Protected by                       softcard\n softcard     Soft card to protect key           testsoftcard01\n recovery     Key recovery                       no\n assigned     Make an assigned key               yes\n verify       Verify security of key             yes\n type         Key type                           RSA\n size         Key size                           2048\n pubexp       Public exponent for RSA key (hex)\n logkeyusage  Log key usage                      no\n plainname    Key name                           testassignedkey01\n nvram        Blob in NVRAM (needs ACS)          no\nPlease enter the pass phrase for softcard `testsoftcard01':\n\nPlease wait........\nKey successfully generated.\nPath to key: /opt/nfast/kmdata/local/key_pkcs11_uc80a8020f5c5bed0d9b9bed13f9577608903dd4da-9ea7bcb6daa87fa29bbd0466d5d21f0799bc8c19\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"using-the-mkaclx",children:["Using the ",(0,i.jsx)(n.code,{children:"mkaclx"})]}),"\n",(0,i.jsxs)(n.p,{children:["To generate an assigned key using ",(0,i.jsx)(n.code,{children:"mkaclx"}),", use the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkaclx --assigned --no-recovery --softcard-protected=testsoftcard01 --timeout=365d --use-limit=100 testassignedkey01\n"})})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var i=s(67294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);