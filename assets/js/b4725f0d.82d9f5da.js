"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8383],{6102:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-core-admin.yaml","spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Administrator API","description":"REST API for managing Administrators in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Admin Management API","description":"Admin Management API. Provides to Information regarding the Administrators in the platform With the Admin API, operations like addition, removal, enable etc... operations can be performed "}],"paths":{"/v1/admins/{uuid}/enable":{"put":{"tags":["Admin Management API"],"summary":"Enable Administrator","operationId":"enableAdmin","parameters":[{"name":"uuid","in":"path","description":"Administrator UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Enable administrator success"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/admins/{uuid}/disable":{"put":{"tags":["Admin Management API"],"summary":"Disable Administrator","operationId":"disableAdmin","parameters":[{"name":"uuid","in":"path","description":"Administrator UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Disable administrator success"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/admins/enable":{"put":{"tags":["Admin Management API"],"summary":"Enable Multiple Administrator","operationId":"bulkEnableAdmin","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}},"required":true},"responses":{"204":{"description":"Enable administrator success"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/admins/disable":{"put":{"tags":["Admin Management API"],"summary":"Disable Multiple Administrator","operationId":"bulkDisableAdmin","requestBody":{"description":"Admin UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"Disable administrator success"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/admins/{uuid}":{"get":{"tags":["Admin Management API"],"summary":"Get details of an Administrator","operationId":"getAdmin","parameters":[{"name":"uuid","in":"path","description":"Administrator UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Administrator details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AdminDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"post":{"tags":["Admin Management API"],"summary":"Edit Administrator","operationId":"editAdmin","parameters":[{"name":"uuid","in":"path","description":"Administrator UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EditAdminRequestDto"}}},"required":true},"responses":{"200":{"description":"Administrator edit success","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AdminDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"delete":{"tags":["Admin Management API"],"summary":"Remove Administrator","operationId":"removeAdmin","parameters":[{"name":"uuid","in":"path","description":"Administrator UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Administrator removed"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/admins":{"get":{"tags":["Admin Management API"],"summary":"List available administrators","operationId":"listAdmins","responses":{"200":{"description":"List of administrator","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AdminDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"post":{"tags":["Admin Management API"],"summary":"Create a new Administrator","operationId":"addAdmin","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AddAdminRequestDto"}}},"required":true},"responses":{"201":{"description":"New administrator created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}},"delete":{"tags":["Admin Management API"],"summary":"Remove Multiple Administrator","operationId":"bulkRemoveAdmin","requestBody":{"description":"Admin UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"Administrator removed"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}}},"components":{"schemas":{"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"EditAdminRequestDto":{"type":"object","properties":{"adminCertificate":{"type":"string","description":"Base64 Content of the certificate"},"certificateUuid":{"type":"string","description":"UUID of the existing certificate in inventory. Mandatory if the certificate is not provided."},"name":{"type":"string","description":"Name of the administrator"},"surname":{"type":"string","description":"Administrator Surname"},"email":{"type":"string","description":"Email Id of the admin"},"role":{"type":"string","description":"Role of the admin","enum":["administrator","superAdministrator"]},"description":{"type":"string","description":"Description for the administrator"}}},"AdminDto":{"required":["certificate","description","email","enabled","name","role","serialNumber","surname","username","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"username":{"type":"string","description":"Administrator Username"},"certificate":{"$ref":"#/components/schemas/CertificateDto"},"role":{"type":"string","description":"Role of the administrator","enum":["administrator","superAdministrator"]},"email":{"type":"string","description":"Administrator Email"},"serialNumber":{"type":"string","description":"Serial Number of the administrator"},"description":{"type":"string","description":"Administrator description"},"enabled":{"type":"boolean","description":"Is the admin enabled?"},"surname":{"type":"string","description":"Surname of administrator"}}},"CertificateDto":{"required":["basicConstraints","certificateContent","commonName","fingerprint","issuerCommonName","issuerDn","keySize","keyUsage","notAfter","notBefore","publicKeyAlgorithm","serialNumber","signatureAlgorithm","status","subjectDn","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Certificate"},"commonName":{"type":"string","description":"Certificate common name"},"serialNumber":{"type":"string","description":"Certificate serial number"},"issuerCommonName":{"type":"string","description":"Certificate issuer common name"},"certificateContent":{"type":"string","description":"Base64 encoded Certificate content"},"issuerDn":{"type":"string","description":"Issuer DN of the Certificate"},"subjectDn":{"type":"string","description":"Subject DN of the Certificate"},"notBefore":{"type":"string","description":"Certificate validity start date","format":"date-time"},"notAfter":{"type":"string","description":"Certificate expiration date","format":"date-time"},"publicKeyAlgorithm":{"type":"string","description":"Public key algorithm"},"signatureAlgorithm":{"type":"string","description":"Certificate signature algorithm"},"keySize":{"type":"integer","description":"Certificate key size","format":"int32"},"extendedKeyUsage":{"type":"array","description":"Extended key usages","items":{"type":"string","description":"Extended key usages"}},"keyUsage":{"type":"array","description":"Key usages","items":{"type":"string","description":"Key usages"}},"basicConstraints":{"type":"string","description":"Basic Constraints"},"meta":{"type":"object","additionalProperties":{"type":"object","description":"Certificate meta data"},"description":"Certificate meta data"},"status":{"type":"string","description":"Status of the Certificate","enum":["valid","revoked","expired","unknown","expiring","new","invalid"]},"raProfile":{"$ref":"#/components/schemas/SimplifiedRaProfileDto"},"fingerprint":{"type":"string","description":"SHA256 fingerprint of the Certificate"},"subjectAlternativeNames":{"type":"object","additionalProperties":{"type":"object","description":"Subject alternative names"},"description":"Subject alternative names"},"entity":{"$ref":"#/components/schemas/EntityDto"},"group":{"$ref":"#/components/schemas/GroupDto"},"owner":{"type":"string","description":"Certificate Owner"},"certificateType":{"type":"string","description":"Certificate type","enum":["X509","SSH"]},"issuerSerialNumber":{"type":"string","description":"Serial number of the issuer"},"certificateValidationResult":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/CertificateValidationDto"},"description":"Certificate validation result"}},"description":"Administrator Certificate Details"},"CertificateValidationDto":{"type":"object","properties":{"status":{"type":"string","enum":["success","failed","warning","revoked","not_checked","invalid","expiring","expired"]},"message":{"type":"string"}},"description":"Certificate validation result"},"EntityDto":{"required":["entityType","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the Entity"},"entityType":{"type":"string","description":"Type of the Entity","enum":["server","router","HSM","switch","loadBalancer","firewall","MDM","cloud"]}},"description":"Entity associated to the Certificate"},"GroupDto":{"required":["name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the Certificate Group"}},"description":"Group associated to the Certificate"},"SimplifiedRaProfileDto":{"required":["enabled","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"}},"description":"RA Profile associated to the Certificate"},"AddAdminRequestDto":{"required":["email","name","role","surname","username"],"type":"object","properties":{"adminCertificate":{"type":"string","description":"Base64 Content of the admin certificate"},"certificateUuid":{"type":"string","description":"UUID of the existing certificate in the Inventory. Mandatory if certificate is not provided"},"username":{"type":"string","description":"Username of the administrator"},"name":{"type":"string","description":"Name of the administrator"},"surname":{"type":"string","description":"Surname of the administrator"},"email":{"type":"string","description":"Email of the administrator"},"role":{"type":"string","description":"Role of the administrator","enum":["administrator","superAdministrator"]},"enabled":{"type":"boolean","description":"Enabled flag. true = enabled, false = disabled","default":false},"description":{"type":"string","description":"Description for the administrator"}}},"UuidDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier"}}}}}}}')}}]);