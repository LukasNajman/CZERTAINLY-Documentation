"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1885],{80849:function(e,t,i){i.r(t),i.d(t,{assets:function(){return A},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var a=i(83117),n=i(80102),r=(i(67294),i(3905)),c=i(92814),o=i(51436),s=["components"],l={},p="Issue Certificate",u={unversionedId:"certificate-key/quick-start/certificate-management/issue-certificate",id:"certificate-key/quick-start/certificate-management/issue-certificate",title:"Issue Certificate",description:"The RA Profile serves as a single point of the particular certificate management service. The RA Profile is used to perform operations on top of the certificates.",source:"@site/docs/10-certificate-key/05-quick-start/03-certificate-management/09-issue-certificate.mdx",sourceDirName:"10-certificate-key/05-quick-start/03-certificate-management",slug:"/certificate-key/quick-start/certificate-management/issue-certificate",permalink:"/docs/certificate-key/quick-start/certificate-management/issue-certificate",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create RA Profile",permalink:"/docs/certificate-key/quick-start/certificate-management/create-ra-profile"},next:{title:"Renew Certificate",permalink:"/docs/certificate-key/quick-start/certificate-management/renew-certificate"}},A={},f=[{value:"Issue new certificate using the API",id:"issue-new-certificate-using-the-api",level:2},{value:"Create new certificate",id:"create-new-certificate",level:2}],m={toc:f};function k(e){var t=e.components,i=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"issue-certificate"},"Issue Certificate"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," serves as a single point of the particular certificate management service. The ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," is used to perform operations on top of the certificates."),(0,r.kt)("h2",{id:"issue-new-certificate-using-the-api"},"Issue new certificate using the API"),(0,r.kt)("p",null,"New ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," can be issued using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Operations")," API. There may be some ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," associated with the issuance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate"),". These ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," represents requirements by some certification authority technology. We can get the list of ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," for issuing of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," using the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v2/operations/authorities/e045a12a-e114-45ed-90b8-bac7e750e803/raProfiles/166b5cf52-63f2-11ec-90d6-0242ac120003/attributes/issue\n  #https://[domain]:[port]/api/v2/operations//authorities/{authorityUuid}/raProfiles/{raProfileUuid}/attributes/issue\n')),(0,r.kt)("p",null,"This returns the list of applicable attributes to issue ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," service, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"[] // empty array of Attributes\n")),(0,r.kt)("p",null,"Knowing the attributes, we can issue ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," using the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "pkcs10": "MIICzTCCAbcCAQAwWjFYMAgGA1UEAwwBeDANBgkqhkiG9w0BCQETADAHBgNVBAsTADAHBgNVBAoTADAHBgNVBAkTADAHBgNVBAcTADAHBgNVBAgTADAHBgNVBBETADAHBgNVBAYTADCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANJ2sKsyNhQWrF3QTgJnL9GO8g4WEiJjlY6Cp6Q5dhUrjv6i2m0pL9uFovopbXkPCW8UuDda5ws79PRhRHEPhuPwdTy/UMXLYoiTnjAYP5jalp4UQ/di7tT5BBUxPPzGAMNWVw0IEKlgJnw67xqYP3nbY9u3LEcbBxfAadLR7RVQNJebyRVXLIWstWGMtuVoDcT+I8pdoLEuSlJE2RXiyPXZSvlm8m2qs5912zNbrA3Mi8b/jU/H+lbS5RZ/sphIhrgWpBH4nq8g95VYwcBNhhmcpyUDeeLDHhWpJwlx8p+g+At6u/PMnEvPfnlQ9MZaFTc6PWTKtGAE+lv0803TZjUCAwEAAaAwMC4GCSqGSIb3DQEJDjEhMB8wHQYDVR0OBBYEFEWyex+1M1ZaTYBL0ERQAnBSnld2MAsGCSqGSIb3DQEBCwOCAQEAWO1hjH5f0BPOnR0zmmmf8riNQGwTs+/ySCn5oMQjzoyNDHOB95ZdhYih7UM5u5LKJxEvrX2AJxeAttYsCZhjwkmUutzg6cWqhmpKTHVeRWpqD00u/FBy6hpUdhRCi4FEYIXTkjFnMzrp+M7bQmjuDKgFVO4NMwophKCJoJifh8JE1Fz2jmO/mixLyUAgFIAuC1Odxakx6wyQnwfwX3Xi2zQtHC/bTH2u8XqpPD+epWUqKK5P02vk2kPq2y6e1BpNl6vdvS6Qy73/qX34vIfwf3guJhp99oESmW4TkR3ccT1Dbv9JJCZoyvJ6RSUi+skz4IGQ6YqVDoRp+qREpW+Dlw==",\n    "attributes": []\n  }\' \\\n  https://[domain]:[port]/api/v2/operations/authorities/e045a12a-e114-45ed-90b8-bac7e750e803/raProfiles/166b5cf52-63f2-11ec-90d6-0242ac120003/certificates\n  #https://[domain]:[port]/api/v2/operations/authorities/{authorityUuid}/raProfiles{raProfileUuid}/certificates\n')),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," is successfully issued, its content and ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "certificateData": "-----BEGIN CERTIFICATE-----\\nMIIFBjCCAu6gAwIBAgITGAAAAQeBixwpO8+33wAAAAABBzANBgkqhkiG9w0BAQ0F\\nADA3MRcwFQYDVQQDDA5EZW1vIE1TIFN1YiBDQTEcMBoGA1UECgwTM0tleSBDb21w\\nYW55IHMuci5vLjAeFw0yMjAxMDExNTUwNTlaFw0yNDAxMDExNTUwNTlaMAwxCjAI\\nBgNVBAMTAXgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDSdrCrMjYU\\nFqxd0E4CZy/RjvIOFhIiY5WOgqekOXYVK47+otptKS/bhaL6KW15DwlvFLg3WucL\\nO/T0YURxD4bj8HU8v1DFy2KIk54wGD+Y2paeFEP3Yu7U+QQVMTz8xgDDVlcNCBCp\\nYCZ8Ou8amD9522PbtyxHGwcXwGnS0e0VUDSXm8kVVyyFrLVhjLblaA3E/iPKXaCx\\nLkpSRNkV4sj12Ur5ZvJtqrOfddszW6wNzIvG/41Px/pW0uUWf7KYSIa4FqQR+J6v\\nIPeVWMHATYYZnKclA3niwx4VqScJcfKfoPgLervzzJxLz355UPTGWhU3Oj1kyrRg\\nBPpb9PNN02Y1AgMBAAGjggE0MIIBMDAdBgNVHQ4EFgQURbJ7H7UzVlpNgEvQRFAC\\ncFKeV3YwHwYDVR0jBBgwFoAUksK831XFwZOFSQf3rMkdC2gBB1EwTQYDVR0fBEYw\\nRDBCoECgPoY8aHR0cDovL2xhYjAyLjNrZXkuY29tcGFueS9jcmxzL2RlbW8vRGVt\\nbyUyME1TJTIwU3ViJTIwQ0EuY3JsMFcGCCsGAQUFBwEBBEswSTBHBggrBgEFBQcw\\nAYY7aHR0cDovL2xhYjAyLjNrZXkuY29tcGFueS9jYXMvZGVtby9EZW1vJTIwTVMl\\nMjBTdWIlMjBDQS5jcnQwIQYJKwYBBAGCNxQCBBQeEgBXAGUAYgBTAGUAcgB2AGUA\\ncjAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDQYJKoZIhvcN\\nAQENBQADggIBABxK3LssVzwskrz49wjYb7aJ0au8Kp/nPSfHrFPnm0j49CRrzzIH\\nEU9p40QfoRRNgcc91103KupdQXzmaGWunbA2P8YFQPAp+m6KfsDFd6kKWDtdVKHq\\ncMdmorvysQqDjswG77NF+RbP0+IyyzZlRZ5A8bx3yWUSozvOmaPI6fWW0Jt+CDoW\\neByxhHLSO6LmeMJuR2jAOKIujkmGlc7BlFWeEDXWGJVbeLNq0m6Kd+Aqiqy/v+Xy\\nK10BRYZIJopA74i4mCwH9VGHJ8JqnvAYEW4WYR+f+N9CmpetuJaLE+MTI+cC1JJ9\\ny9s2Bc+5FoasWfmEBowi6vR/DzFqzq0WVvKvthojbfVBwjLpLd5rTCrbQ97HwvFY\\nKNySV5aGZR2pozAq1avFLdDXFIZAOw93BI0JWKq8/YL9J/8+f6mVTGdmO0/Odhhl\\nWTtuI4GzglI/3xm2rZZ60dSZvbHPNINp3jPSn2Whpp1GNL0Mj8+TOH7d4sAIC4JO\\nJxWGVroN593M6axHOQxTMWydyelEuqdKyJK/CiPWRakZYHGaQ5E5Qu9G9dbDJut7\\n07A/TGtwQzxdVhVh7F2KE7dSQ1g/pDn00VIGl7xYJdXShO0n2ICBMM7D/f1doyKy\\ntOP1yZSGe5fP9o669TLbPQZBn+GLQ7JghsXxCVu5hUTRKj7V9vR6gGeh\\n-----END CERTIFICATE-----",\n  "uuid": "1a90cc6c-76e0-48cb-a027-e52a84c071c2"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"upload should not be here, right?"),(0,r.kt)("h2",{parentName:"blockquote",id:"upload-existing-certificate"},"Upload existing certificate")),(0,r.kt)("p",null,"Upload the existing certificate to the platform."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Certificates")," in the left menu "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Upload Certificate")," (upload symbol ",(0,r.kt)("span",{style:{color:"#1473b5"}},(0,r.kt)(c.G,{icon:o.cf$,mdxType:"FontAwesomeIcon"})),")"),(0,r.kt)("li",{parentName:"ol"},"Upload the certificate (CRT file)"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Submit")," to upload the certificate to the platform")),(0,r.kt)("h2",{id:"create-new-certificate"},"Create new certificate"),(0,r.kt)("p",null,"Select the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," and issue a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Certificates")," in the left menu "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add New Certificate")," (plus symbol ",(0,r.kt)("span",{style:{color:"#1473b5"}},(0,r.kt)(c.G,{icon:o.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"RA Profile"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"ADCS-WebServer")),(0,r.kt)("li",{parentName:"ol"},"Upload the certificate request (CSR file)"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create")," ")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," has been created."))}k.isMDXComponent=!0}}]);