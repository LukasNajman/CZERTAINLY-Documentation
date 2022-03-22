"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5961],{244:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-core-discovery.yaml","spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Discovery API","description":"REST API for managing Discoveries in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Discovery Management API","description":"Discovery Management API"}],"paths":{"/v1/discoveries":{"get":{"tags":["Discovery Management API"],"summary":"List Discovery","operationId":"listDiscovery","responses":{"200":{"description":"List of available Discoveries","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/DiscoveryHistoryDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"post":{"tags":["Discovery Management API"],"summary":"Create Discovery","operationId":"createDiscovery","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DiscoveryDto"}}},"required":true},"responses":{"201":{"description":"Discovery Created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Discovery Management API"],"summary":"Delete Multiple Discoveries","operationId":"bulkRemoveDiscovery","requestBody":{"description":"Discovery UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"Discoveries deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/discoveries/{uuid}":{"get":{"tags":["Discovery Management API"],"summary":"Discovery Details","operationId":"getDiscovery","parameters":[{"name":"uuid","in":"path","description":"Discovery UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Discovery details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/DiscoveryHistoryDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Discovery Management API"],"summary":"Delete Discovery","operationId":"removeDiscovery","parameters":[{"name":"uuid","in":"path","description":"Discovery UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Discovery deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}}},"components":{"schemas":{"DiscoveryDto":{"required":["attributes","connectorUuid","kind","name"],"type":"object","properties":{"name":{"type":"string","description":"Discovery name"},"attributes":{"type":"array","description":"List of Attributes for Discovery","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"connectorUuid":{"type":"string","description":"Discovery Provider UUID"},"kind":{"type":"string","description":"Discovery Kind"}}},"RequestAttributeDto":{"required":["name","value"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"value":{"type":"object","description":"Value of the Attribute"}},"description":"List of Attributes for Discovery"},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"UuidDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier"}}},"DiscoveryCertificatesDto":{"required":["certificateContent","commonName","fingerprint","issuerCommonName","notAfter","notBefore","serialNumber","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Certificate"},"commonName":{"type":"string","description":"Certificate common name"},"serialNumber":{"type":"string","description":"Certificate Serial Number"},"issuerCommonName":{"type":"string","description":"Issuer common name"},"notBefore":{"type":"string","description":"Certificate validity start date","format":"date-time"},"notAfter":{"type":"string","description":"Certificate expiration date","format":"date-time"},"fingerprint":{"type":"string","description":"SHA256 thumbprint of the certificate"},"certificateContent":{"type":"string","description":"Base64 encoded Certificate content"}},"description":"List of Discovered Certificates"},"DiscoveryHistoryDto":{"required":["attributes","certificate","connectorName","connectorUuid","kind","name","status","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"kind":{"type":"string","description":"Discovery Kind","example":"IP-HostName"},"status":{"type":"string","description":"Status of Discovery","enum":["inProgress","failed","completed","warning"]},"message":{"type":"string","description":"Failure/Success Messages","example":"Failed due to network connectivity issues"},"startTime":{"type":"string","description":"Date and time when Discovery started","format":"date-time","nullable":true},"endTime":{"type":"string","description":"Date and time when Discovery finished","format":"date-time","nullable":true},"totalCertificatesDiscovered":{"type":"integer","description":"Number of certificates that are discovered","format":"int32","default":0},"connectorUuid":{"type":"string","description":"UUID of the Discovery Provider"},"connectorName":{"type":"string","description":"Name of the Discovery Provider"},"certificate":{"type":"array","description":"List of Discovered Certificates","items":{"$ref":"#/components/schemas/DiscoveryCertificatesDto"}},"attributes":{"type":"array","description":"List of Discovery Attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"meta":{"type":"object","additionalProperties":{"type":"object","description":"Metadata of the Discovery"},"description":"Metadata of the Discovery"}}},"ResponseAttributeDto":{"required":["label","name","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"label":{"type":"string","description":"Label of the the Attribute","example":"Attribute Name"},"type":{"type":"string","description":"Type of the Attribute","enum":["STRING","NUMBER","SECRET","FILE","BOOLEAN","LIST","CREDENTIAL"]},"value":{"type":"object","description":"Value of the Attribute"}},"description":"List of Discovery Attributes"}}}}}')}}]);