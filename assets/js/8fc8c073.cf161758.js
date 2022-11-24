"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2466],{31365:function(e,t,i){i.r(t),i.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var a=i(83117),n=i(80102),r=(i(67294),i(3905)),o=i(92814),c=i(51436),s=["components"],l={},p="Revoke Certificate",u={unversionedId:"quick-start/certificate-management/revoke-certificate",id:"quick-start/certificate-management/revoke-certificate",title:"Revoke Certificate",description:"Certificate can be revoked from various reasons. The RA Profile can help us with the revocation as a single point for our certificate management service.",source:"@site/docs/05-quick-start/03-certificate-management/13-revoke-certificate.mdx",sourceDirName:"05-quick-start/03-certificate-management",slug:"/quick-start/certificate-management/revoke-certificate",permalink:"/docs/quick-start/certificate-management/revoke-certificate",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Renew Certificate",permalink:"/docs/quick-start/certificate-management/renew-certificate"},next:{title:"Overview",permalink:"/docs/protocols/overview"}},k={},f=[{value:"Revoke <code>Certificate</code> using the API",id:"revoke-certificate-using-the-api",level:2},{value:"Revoke <code>Certificate</code> using the Web Interface",id:"revoke-certificate-using-the-web-interface",level:2}],m={toc:f};function d(e){var t=e.components,i=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"revoke-certificate"},"Revoke Certificate"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," can be revoked from various reasons. The ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," can help us with the revocation as a single point for our certificate management service."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," that is bound to ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," can be revoked.")),(0,r.kt)("h2",{id:"revoke-certificate-using-the-api"},"Revoke ",(0,r.kt)("inlineCode",{parentName:"h2"},"Certificate")," using the API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," can be revoked using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Operations")," API. There may be some ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," associated with the revocation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate"),". These ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," represents requirements by some certification authority technology. We can get the list of ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," for revocation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," using the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n    https://[domain]:[port]/api/v2/operations/authorities/e045a12a-e114-45ed-90b8-bac7e750e803/raProfiles/166b5cf52-63f2-11ec-90d6-0242ac120003/attributes/revoke\n  #https://[domain]:[port]/api/v2/operations//authorities/{authorityUuid}/raProfiles/{raProfileUuid}/attributes/revoke\n')),(0,r.kt)("p",null,"This returns the list of applicable attributes to revoke ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RA Profile")," service, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"[] // empty array of Attributes\n")),(0,r.kt)("p",null,"Knowing the attributes, we can revoke ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," using the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "reason": "UNSPECIFIED",\n    "attributes": []\n  }\' \\\n  https://[domain]:[port]/api/v2/operations/authorities/e045a12a-e114-45ed-90b8-bac7e750e803/raProfiles/166b5cf52-63f2-11ec-90d6-0242ac120003/revoke\n  #https://[domain]:[port]/api/v2/operations/authorities/{authorityUuid}/raProfiles{raProfileUuid}/certificates/revoke\n')),(0,r.kt)("h2",{id:"revoke-certificate-using-the-web-interface"},"Revoke ",(0,r.kt)("inlineCode",{parentName:"h2"},"Certificate")," using the Web Interface"),(0,r.kt)("p",null,"Follow these steps to revoke a ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Certificates")," in the left menu "),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"List of Certificates")," select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Certificate")," to revoke"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Revoke")," (symbol ",(0,r.kt)("span",{style:{color:"#eb3349"}},(0,r.kt)(o.G,{icon:c.El_,mdxType:"FontAwesomeIcon"}))," )"),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Reason for Revocation")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Revoke")," ")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," has been successfully revoked, information is updated in the inventory. You can check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," status."))}d.isMDXComponent=!0}}]);