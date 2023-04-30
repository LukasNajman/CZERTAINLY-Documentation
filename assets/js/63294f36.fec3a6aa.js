"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9535],{96668:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return A},metadata:function(){return p},toc:function(){return u}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),c=n(92814),o=n(51436),s=["components"],A={},l="Renew Certificate",p={unversionedId:"certificate-key/quick-start/certificate-management/renew-certificate",id:"certificate-key/quick-start/certificate-management/renew-certificate",title:"Renew Certificate",description:"Certificate can be renewed. The renewal operation does not need additional Attributes or any information other than certificate signing request. This is one of advantages of RA Profile.",source:"@site/docs/10-certificate-key/05-quick-start/03-certificate-management/11-renew-certificate.mdx",sourceDirName:"10-certificate-key/05-quick-start/03-certificate-management",slug:"/certificate-key/quick-start/certificate-management/renew-certificate",permalink:"/docs/certificate-key/quick-start/certificate-management/renew-certificate",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Issue Certificate",permalink:"/docs/certificate-key/quick-start/certificate-management/issue-certificate"},next:{title:"Revoke Certificate",permalink:"/docs/certificate-key/quick-start/certificate-management/revoke-certificate"}},f={},u=[{value:"Renew <code>Certificate</code> using the API",id:"renew-certificate-using-the-api",level:2},{value:"Renew <code>Certificate</code> using the Web Interface",id:"renew-certificate-using-the-web-interface",level:2}],w={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"renew-certificate"},"Renew Certificate"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," can be renewed. The renewal operation does not need additional ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," or any information other than certificate signing request. This is one of advantages of ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," that is bound to ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," can be renewed.")),(0,r.kt)("h2",{id:"renew-certificate-using-the-api"},"Renew ",(0,r.kt)("inlineCode",{parentName:"h2"},"Certificate")," using the API"),(0,r.kt)("p",null,"To renew ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate"),", use the following API request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "pkcs10": "MIICzTCCAbcCAQAwWjFYMAgGA1UEAwwBeDANBgkqhkiG9w0BCQETADAHBgNVBAsTADAHBgNVBAoTADAHBgNVBAkTADAHBgNVBAcTADAHBgNVBAgTADAHBgNVBBETADAHBgNVBAYTADCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANJ2sKsyNhQWrF3QTgJnL9GO8g4WEiJjlY6Cp6Q5dhUrjv6i2m0pL9uFovopbXkPCW8UuDda5ws79PRhRHEPhuPwdTy/UMXLYoiTnjAYP5jalp4UQ/di7tT5BBUxPPzGAMNWVw0IEKlgJnw67xqYP3nbY9u3LEcbBxfAadLR7RVQNJebyRVXLIWstWGMtuVoDcT+I8pdoLEuSlJE2RXiyPXZSvlm8m2qs5912zNbrA3Mi8b/jU/H+lbS5RZ/sphIhrgWpBH4nq8g95VYwcBNhhmcpyUDeeLDHhWpJwlx8p+g+At6u/PMnEvPfnlQ9MZaFTc6PWTKtGAE+lv0803TZjUCAwEAAaAwMC4GCSqGSIb3DQEJDjEhMB8wHQYDVR0OBBYEFEWyex+1M1ZaTYBL0ERQAnBSnld2MAsGCSqGSIb3DQEBCwOCAQEAWO1hjH5f0BPOnR0zmmmf8riNQGwTs+/ySCn5oMQjzoyNDHOB95ZdhYih7UM5u5LKJxEvrX2AJxeAttYsCZhjwkmUutzg6cWqhmpKTHVeRWpqD00u/FBy6hpUdhRCi4FEYIXTkjFnMzrp+M7bQmjuDKgFVO4NMwophKCJoJifh8JE1Fz2jmO/mixLyUAgFIAuC1Odxakx6wyQnwfwX3Xi2zQtHC/bTH2u8XqpPD+epWUqKK5P02vk2kPq2y6e1BpNl6vdvS6Qy73/qX34vIfwf3guJhp99oESmW4TkR3ccT1Dbv9JJCZoyvJ6RSUi+skz4IGQ6YqVDoRp+qREpW+Dlw=="\n  }\' \\\n  https://[domain]:[port]/api/v2/operations/authorities/e045a12a-e114-45ed-90b8-bac7e750e803/raProfiles/166b5cf52-63f2-11ec-90d6-0242ac120003/certificates/renew\n  #https://[domain]:[port]/api/v2/operations/authorities/{authorityUuid}/raProfiles{raProfileUuid}/certificates/renew\n')),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," is successfully renews, its content and ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back in the response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "certificateData": "-----BEGIN CERTIFICATE-----\\nMIIFBjCCAu6gAwIBAgITGAAAAQp1ch0L5EiisQAAAAABCjANBgkqhkiG9w0BAQ0F\\nADA3MRcwFQYDVQQDDA5EZW1vIE1TIFN1YiBDQTEcMBoGA1UECgwTM0tleSBDb21w\\nYW55IHMuci5vLjAeFw0yMjAxMDExNjQ2MjNaFw0yNDAxMDExNjQ2MjNaMAwxCjAI\\nBgNVBAMTAXgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDSdrCrMjYU\\nFqxd0E4CZy/RjvIOFhIiY5WOgqekOXYVK47+otptKS/bhaL6KW15DwlvFLg3WucL\\nO/T0YURxD4bj8HU8v1DFy2KIk54wGD+Y2paeFEP3Yu7U+QQVMTz8xgDDVlcNCBCp\\nYCZ8Ou8amD9522PbtyxHGwcXwGnS0e0VUDSXm8kVVyyFrLVhjLblaA3E/iPKXaCx\\nLkpSRNkV4sj12Ur5ZvJtqrOfddszW6wNzIvG/41Px/pW0uUWf7KYSIa4FqQR+J6v\\nIPeVWMHATYYZnKclA3niwx4VqScJcfKfoPgLervzzJxLz355UPTGWhU3Oj1kyrRg\\nBPpb9PNN02Y1AgMBAAGjggE0MIIBMDAdBgNVHQ4EFgQURbJ7H7UzVlpNgEvQRFAC\\ncFKeV3YwHwYDVR0jBBgwFoAUksK831XFwZOFSQf3rMkdC2gBB1EwTQYDVR0fBEYw\\nRDBCoECgPoY8aHR0cDovL2xhYjAyLjNrZXkuY29tcGFueS9jcmxzL2RlbW8vRGVt\\nbyUyME1TJTIwU3ViJTIwQ0EuY3JsMFcGCCsGAQUFBwEBBEswSTBHBggrBgEFBQcw\\nAYY7aHR0cDovL2xhYjAyLjNrZXkuY29tcGFueS9jYXMvZGVtby9EZW1vJTIwTVMl\\nMjBTdWIlMjBDQS5jcnQwIQYJKwYBBAGCNxQCBBQeEgBXAGUAYgBTAGUAcgB2AGUA\\ncjAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDQYJKoZIhvcN\\nAQENBQADggIBAKi79EtWQqljrHoTI4SIssXJFFicT64pnu/U2Zf6RfsSMtV7ZEL1\\nKiRVrL9PLbFoMVxxQyffdSNyGk19NsBO7/xEEuwUgpQ6iVOaVZVTHxAEt9PHqyDo\\nWur+xhYq6PvyVJOphMqPMUZ3dmBOZyS9BuGgF08XYcWcEu5VKAtZTNtXoTFJrX0x\\nXR2szp5nOu2SI3eAW24psOxevo738RsmhhN31nGhdupWPu1Xki2yhEnECPW0motS\\n4kpNfGErUx2hoDa9UAkh+Aq/s1zkhFj7ZBP6RolqLUGw+YEGEVGPJyHuD6TKbWe4\\nkp5VDHcLt0sc0qwMZ07TQf2+gw54KZKP3YpHal68qA6j1fYdyTLAuk0yXhBX7ROe\\nyDyGIZy74xIaTfqlR2rGS2jyLMsmzKU+nt87CYr+2P+gCeEsk1AsDSPeIEZaYG2T\\nFH4q29ZQjWucuiGUHpu61+qdvrkgFeKrUmJR9l2rhSopkSeV1teeFd/e9Vo1mCOb\\nIlfmlMw8erwOSAAZ8VRB/y1lfCg1dpcRB3443wM4nMc938J435lexKTZ3DGcwpx6\\nHaTbGjCWQ654eRUztWW2Z0Pn9FF/VJbi11yw5ucGd/6ThnAB5rAJGfHtfbEFf5wn\\n0bmOtWX+yWWB42fYEFecH3X6STNwoXnBck4pzegC2jBEh15a1gy8Vwii\\n-----END CERTIFICATE-----",\n  "uuid": "bde30bad-2bbe-467c-83e5-d3eace339a7e"\n}\n')),(0,r.kt)("h2",{id:"renew-certificate-using-the-web-interface"},"Renew ",(0,r.kt)("inlineCode",{parentName:"h2"},"Certificate")," using the Web Interface"),(0,r.kt)("p",null,"Follow these steps to renew a ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Certificates")," in the left menu "),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"List of Certificates")," select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Certificate")," to renewal"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Renew")," (symbol ",(0,r.kt)("span",{style:{color:"#1473b5"}},(0,r.kt)(c.G,{icon:o.x5v,mdxType:"FontAwesomeIcon"})),")"),(0,r.kt)("li",{parentName:"ol"},"Upload the certificate signing request (CSR file)"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Renew"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," has been successfully renewed and information is update in the inventory. You can check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," status."))}k.isMDXComponent=!0}}]);