"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4131],{39510:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-connector-authority-provider-v2.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Authority Provider v2 API","description":"REST API for implementations of custom v2 Authority Provider","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Authority Management API","description":"Authority Management API"},{"name":"Info API","description":"Connector Information API. Each connector may have multiple functions represented by FunctionGroupCode. For each FunctionGroupCode there is a list of implemented end points. These endpoints must be according the specified interface, this is validated by the core. You can also implement helper end points that are used for callbacks and other relevant operations specific to implementation."},{"name":"Certificate Management API","description":"Certificate Management API"},{"name":"Attributes API","description":"Connector Attributes API. Provides information about supported Attributes of the connector. Attributes are specific to implementation and gives information about the data that can be exchanged and properly parsed by the connector. Part of this API is validation of the Attributes."},{"name":"Health check API","description":"Connector Health check API. Connector returns own status and in some cases can return status of services on which it depends like database, HSM and so on."}],"paths":{"/v2/authorityProvider/authorities/{uuid}/certificates/revoke/attributes/validate":{"post":{"tags":["Certificate Management API"],"summary":"Validate list of Attributes to revoke certificate","operationId":"validateRevokeCertificateAttributes","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"required":true},"responses":{"200":{"description":"Attributes validated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}},"/v2/authorityProvider/authorities/{uuid}/certificates/revoke":{"post":{"tags":["Certificate Management API"],"summary":"Revoke Certificate","operationId":"revokeCertificate","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertRevocationDto"}}},"required":true},"responses":{"200":{"description":"Certificate revoked"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}},"/v2/authorityProvider/authorities/{uuid}/certificates/renew":{"post":{"tags":["Certificate Management API"],"summary":"Renew Certificate","operationId":"renewCertificate","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateRenewRequestDto"}}},"required":true},"responses":{"200":{"description":"Certificate renewed","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateDataResponseDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}},"/v2/authorityProvider/authorities/{uuid}/certificates/issue/attributes/validate":{"post":{"tags":["Certificate Management API"],"summary":"Validate list of Attributes to issue Certificate","operationId":"validateIssueCertificateAttributes","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"required":true},"responses":{"200":{"description":"Attributes validated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}},"/v2/authorityProvider/authorities/{uuid}/certificates/issue":{"post":{"tags":["Certificate Management API"],"summary":"Issue Certificate","operationId":"issueCertificate","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateSignRequestDto"}}},"required":true},"responses":{"200":{"description":"Certificate issued","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateDataResponseDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}},"/v1/{functionalGroup}/{kind}/attributes/validate":{"post":{"tags":["Attributes API"],"summary":"Validate Attributes","operationId":"validateAttributes","parameters":[{"name":"kind","in":"path","description":"Kind","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"required":true},"responses":{"200":{"description":"Attribute validation completed"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Attribute validation failed","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}},"/v1/authorityProvider/authorities/{uuid}/raProfile/attributes/validate":{"post":{"tags":["Authority Management API"],"summary":"Validate RA Profile attributes","operationId":"validateRAProfileAttributes","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"required":true},"responses":{"200":{"description":"Authority instance updated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/authorityProvider/authorities/{uuid}":{"get":{"tags":["Authority Management API"],"summary":"Get an Authority instance","operationId":"getAuthorityInstance","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Authority instance retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthorityProviderInstanceDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"post":{"tags":["Authority Management API"],"summary":"Update Authority instance","operationId":"updateAuthorityInstance","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthorityProviderInstanceRequestDto"}}},"required":true},"responses":{"200":{"description":"Authority instance updated","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthorityProviderInstanceDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"delete":{"tags":["Authority Management API"],"summary":"Remove Authority instance","operationId":"removeAuthorityInstance","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Authority instance removed"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/authorityProvider/authorities":{"get":{"tags":["Authority Management API"],"summary":"List Authority instances","operationId":"listAuthorityInstances","responses":{"200":{"description":"Authority instances retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AuthorityProviderInstanceDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"post":{"tags":["Authority Management API"],"summary":"Create Authority instance","operationId":"createAuthorityInstance","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthorityProviderInstanceRequestDto"}}},"required":true},"responses":{"200":{"description":"Authority instance created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthorityProviderInstanceDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v2/authorityProvider/authorities/{uuid}/certificates/revoke/attributes":{"get":{"tags":["Certificate Management API"],"summary":"List of Attributes to revoke Certificate","operationId":"listRevokeCertificateAttributes","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Attribute list retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AttributeDefinition"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}},"/v2/authorityProvider/authorities/{uuid}/certificates/issue/attributes":{"get":{"tags":["Certificate Management API"],"summary":"List of Attributes to issue Certificate","operationId":"listIssueCertificateAttributes","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Attribute list retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AttributeDefinition"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/{functionalGroup}/{kind}/attributes":{"get":{"tags":["Attributes API"],"summary":"List available Attributes","operationId":"listAttributeDefinitions","parameters":[{"name":"kind","in":"path","description":"Kind","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Attributes retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AttributeDefinition"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/health":{"get":{"tags":["Health check API"],"summary":"Health check","operationId":"checkHealth","responses":{"200":{"description":"Health check completed successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HealthDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/authorityProvider/authorities/{uuid}/raProfile/attributes":{"get":{"tags":["Authority Management API"],"summary":"List RA Profile Attributes","operationId":"listRAProfileAttributes","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Authority instance updated","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AttributeDefinition"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/authorityProvider/authorities/{uuid}/connect":{"get":{"tags":["Authority Management API"],"summary":"Connect to Authority","operationId":"getConnection","parameters":[{"name":"uuid","in":"path","description":"Authority Instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Authority instance connected"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1":{"get":{"tags":["Info API"],"summary":"List supported functions of the connector","description":"Returns map of functional code and implemented end points","operationId":"listSupportedFunctions","responses":{"200":{"description":"Functions found","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/InfoResponse"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}}},"components":{"schemas":{"RequestAttributeDto":{"required":["content","name"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"}}},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"CertRevocationDto":{"required":["attributes","certificate","raProfileAttributes","reason"],"type":"object","properties":{"reason":{"type":"string","description":"Revocation reason","enum":["UNSPECIFIED","KEY_COMPROMISE","CA_COMPROMISE","AFFILIATION_CHANGED","SUPERSEDED","CESSATION_OF_OPERATION","CERTIFICATE_HOLD","REMOVE_FROM_CRL","PRIVILEGES_WITHDRAWN","AA_COMPROMISE"]},"raProfileAttributes":{"type":"array","description":"List of RA Profiles attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"attributes":{"type":"array","description":"List of Attributes to revoke Certificate","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"certificate":{"type":"string","description":"Base64 Certificate content. (Certificate to be revoked)"}}},"CertificateRenewRequestDto":{"required":["certificate","meta","pkcs10","raProfileAttributes"],"type":"object","properties":{"pkcs10":{"type":"string","description":"Certificate sign request (PKCS#10) encoded as Base64 string"},"raProfileAttributes":{"type":"array","description":"List of RA Profiles attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"certificate":{"type":"string","description":"Base64 Certificate content. (Certificate to be renewed)"},"meta":{"type":"string","description":"Metadata for the Certificate"}}},"CertificateDataResponseDto":{"required":["certificateData","meta","uuid"],"type":"object","properties":{"certificateData":{"type":"string","description":"Base64 encoded Certificate content"},"uuid":{"type":"string","description":"UUID of Certificate"},"meta":{"type":"string","description":"Metadata for the Certificate"}}},"CertificateSignRequestDto":{"required":["attributes","pkcs10","raProfileAttributes"],"type":"object","properties":{"pkcs10":{"type":"string","description":"Certificate sign request (PKCS#10) encoded as Base64 string"},"raProfileAttributes":{"type":"array","description":"List of RA Profiles attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"attributes":{"type":"array","description":"List of Attributes to issue Certificate","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"AuthorityProviderInstanceRequestDto":{"required":["attributes","kind","name"],"type":"object","properties":{"name":{"type":"string","description":"Authority instance name"},"kind":{"type":"string","description":"Kind of Authority instance"},"attributes":{"type":"array","description":"List of Authority instance Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"AttributeCallback":{"required":["callbackContext","callbackMethod","mappings"],"type":"object","properties":{"callbackContext":{"type":"string","description":"Context part of callback URL"},"callbackMethod":{"type":"string","description":"HTTP method of the callback"},"mappings":{"uniqueItems":true,"type":"array","description":"Mappings for the callback method","items":{"$ref":"#/components/schemas/AttributeCallbackMapping"}}},"description":"Optional definition of callback for getting the content of the Attribute based on the action"},"AttributeCallbackMapping":{"required":["targets","to"],"type":"object","properties":{"from":{"type":"string","description":"Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set."},"attributeType":{"type":"string","description":"Type of the attribute. It is optional and must be set only if special behaviour is needed.","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"to":{"type":"string","description":"Name of the path variable or request param or body field which is to be used to assign value of attribute"},"targets":{"uniqueItems":true,"type":"array","description":"Set of targets for propagating value.","items":{"type":"string","description":"Set of targets for propagating value.","enum":["pathVariable","requestParameter","body"]}},"value":{"type":"object","description":"Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time."}},"description":"Mappings for the callback method"},"AttributeDefinition":{"required":["label","list","multiSelect","name","readOnly","required","type","uuid","visible"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"},"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"type":{"type":"string","description":"Type of the Attribute","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"validationRegex":{"type":"string","description":"Optional regular expression used for validating the Attribute content"},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"}},"description":"List of Authority instance Attributes"},"AuthorityProviderInstanceDto":{"required":["attributes","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"attributes":{"type":"array","description":"List of Authority instance Attributes","items":{"$ref":"#/components/schemas/AttributeDefinition"}}}},"HealthDto":{"required":["status"],"type":"object","properties":{"status":{"type":"string","description":"Current connector operational status","enum":["ok","nok","unknown"]},"description":{"type":"string","description":"Detailed status description"},"parts":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/HealthDto"},"description":"Nested status of services"}}},"EndpointDto":{"required":["context","method","name","required","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"context":{"type":"string","description":"Context of the Endpoint","example":"/v1"},"method":{"type":"string","description":"Method to be used for the Endpoint","example":"POST"},"required":{"type":"boolean","description":"True if the Endpoint is required for implementation","example":true}},"description":"List of end points related to functional group"},"InfoResponse":{"required":["endPoints","functionGroupCode","kinds"],"type":"object","properties":{"functionGroupCode":{"type":"string","description":"Enumerated code of functional group","enum":["credentialProvider","legacyAuthorityProvider","authorityProvider","discoveryProvider","entityProvider","complianceProvider"]},"kinds":{"type":"array","description":"List of supported functional group kinds","example":["SoftKeyStore","Basic","ApiKey"],"items":{"type":"string","description":"List of supported functional group kinds","example":"[\\"SoftKeyStore\\",\\"Basic\\",\\"ApiKey\\"]"}},"endPoints":{"type":"array","description":"List of end points related to functional group","items":{"$ref":"#/components/schemas/EndpointDto"}}}}}}}}')}}]);