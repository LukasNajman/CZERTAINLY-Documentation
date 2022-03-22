"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[592],{6959:function(t){t.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-core-other.yaml","spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Uncategorized API","description":"Various uncategorized REST APIs of the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Authentication Management API","description":"Authentication Management API"},{"name":"Statistics/Dashboard API","description":"Statistics/Dashboard API"},{"name":"Audit Log API","description":"Audit Log API"}],"paths":{"/v1/auth/profile":{"get":{"tags":["Authentication Management API"],"summary":"Profile Authorization","operationId":"profile","responses":{"200":{"description":"Authenticate a user","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthProfileDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"put":{"tags":["Authentication Management API"],"summary":"Edit Profile Information","operationId":"editProfile","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EditAuthProfileDto"}}},"required":true},"responses":{"204":{"description":"Edit Profile"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/statistics":{"get":{"tags":["Statistics/Dashboard API"],"summary":"Get Dashboard/Statictics Details","operationId":"getStatistics","responses":{"200":{"description":"Details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/StatisticsDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/logs/statuses":{"get":{"tags":["Audit Log API"],"summary":"List Status","operationId":"listOperationStatuses","responses":{"200":{"description":"List of audit log status","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/logs/operations":{"get":{"tags":["Audit Log API"],"summary":"List Audit Operations","operationId":"listOperations","responses":{"200":{"description":"List of audit operations","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/logs/objects":{"get":{"tags":["Audit Log API"],"summary":"List Audit Objects","operationId":"listObjects","responses":{"200":{"description":"List of audit Objects","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/logs/export":{"get":{"tags":["Audit Log API"],"summary":"Export Audit logs","operationId":"exportAuditLogs","parameters":[{"name":"filter","in":"query","required":true,"schema":{"$ref":"#/components/schemas/AuditLogFilter"}},{"name":"pageable","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"description":"Export of audit logs","content":{"application/json":{"schema":{"type":"string","format":"binary"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/logs":{"get":{"tags":["Audit Log API"],"summary":"List Audit logs","operationId":"listAuditLogs","parameters":[{"name":"filter","in":"query","required":true,"schema":{"$ref":"#/components/schemas/AuditLogFilter"}},{"name":"pageable","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"description":"List of audit logs","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuditLogResponseDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}}},"components":{"schemas":{"EditAuthProfileDto":{"type":"object","properties":{"name":{"type":"string","description":"Name of the User"},"surname":{"type":"string","description":"Surname of the User"},"email":{"type":"string","description":"Email Id of the User"}}},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"StatisticsDto":{"type":"object","properties":{"totalCertificates":{"type":"integer","description":"Number Certificates available","format":"int64"},"totalGroups":{"type":"integer","description":"Number of Groups","format":"int64"},"totalEntities":{"type":"integer","description":"Number of Entities","format":"int64"},"totalDiscoveries":{"type":"integer","description":"Number of Discoveries triggered","format":"int64"},"totalConnectors":{"type":"integer","description":"Number of Connectors added","format":"int64"},"totalRaProfiles":{"type":"integer","description":"Number of RA Profiles in the platform","format":"int64"},"totalCredentials":{"type":"integer","description":"Number of Credentials","format":"int64"},"totalAuthorities":{"type":"integer","description":"Number of Authority instances","format":"int64"},"totalAdministrators":{"type":"integer","description":"Number of Administrators","format":"int64"},"totalClients":{"type":"integer","description":"Number of Clients added","format":"int64"},"groupStatByCertificateCount":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by Group","format":"int64"},"description":"Map of Certificate count by Group"},"entityStatByCertificateCount":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by Entity","format":"int64"},"description":"Map of Certificate count by Entity"},"raProfileStatByCertificateCount":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by RA Profile","format":"int64"},"description":"Map of Certificate count by RA Profile"},"certificateStatByType":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by Type","format":"int64"},"description":"Map of Certificate count by Type"},"certificateStatByExpiry":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by expiry date","format":"int64"},"description":"Map of Certificate count by expiry date"},"certificateStatByKeySize":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by key size","format":"int64"},"description":"Map of Certificate count by key size"},"certificateStatByBasicConstraints":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by basic constraints","format":"int64"},"description":"Map of Certificate count by basic constraints"},"certificateStatByStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by status","format":"int64"},"description":"Map of Certificate count by status"},"connectorStatByStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Connector count by status","format":"int64"},"description":"Map of Connector count by status"},"raProfileStatByStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of RA Profile count by status","format":"int64"},"description":"Map of RA Profile count by status"},"administratorStatByStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Administrator count by status","format":"int64"},"description":"Map of Administrator count by status"},"clientStatByStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Client count by status","format":"int64"},"description":"Map of Client count by status"}}},"AuditLogFilter":{"required":["affected","author","createdFrom","createdTo","objectIdentifier","operation","operationStatus","origination"],"type":"object","properties":{"author":{"type":"string","description":"Author of the action triggered audit log"},"createdFrom":{"type":"string","description":"Start time of the filter","format":"date"},"createdTo":{"type":"string","description":"End time of the filter","format":"date"},"operationStatus":{"type":"string","description":"Status of the filter","enum":["SUCCESS","FAILURE"]},"origination":{"type":"string","description":"Module triggered the action","enum":["ACCESS","RA_PROFILE","CLIENT","ADMINISTRATOR","FE","BE","CA","END_ENTITY","END_ENTITY_PROFILE","END_ENTITY_CERTIFICATE","AUDIT_LOG","ATTRIBUTES","CA_INSTANCE","CREDENTIAL","CONNECTOR","DISCOVERY","HEALTH","ENTITY","GROUP","CERTIFICATE","STATISTICS","ACME_PROFILE","ACME_ACCOUNT","LOCALHOST"]},"affected":{"type":"string","description":"Module affected by the action","enum":["ACCESS","RA_PROFILE","CLIENT","ADMINISTRATOR","FE","BE","CA","END_ENTITY","END_ENTITY_PROFILE","END_ENTITY_CERTIFICATE","AUDIT_LOG","ATTRIBUTES","CA_INSTANCE","CREDENTIAL","CONNECTOR","DISCOVERY","HEALTH","ENTITY","GROUP","CERTIFICATE","STATISTICS","ACME_PROFILE","ACME_ACCOUNT","LOCALHOST"]},"objectIdentifier":{"type":"string","description":"Identifier of the object created"},"operation":{"type":"string","description":"Type of the operation","enum":["CREATE","DELETE","CHANGE","ENABLE","DISABLE","AUTH","REQUEST","ISSUE","RENEW","REVOKE","RESET","START","STOP","VALIDATE","CALLBACK","CONNECT","FORCE_DELETE","APPROVE"]}}},"Pageable":{"type":"object","properties":{"sort":{"$ref":"#/components/schemas/Sort"},"pageNumber":{"type":"integer","format":"int32"},"pageSize":{"type":"integer","format":"int32"},"paged":{"type":"boolean"},"unpaged":{"type":"boolean"},"offset":{"type":"integer","format":"int64"}}},"Sort":{"type":"object","properties":{"sorted":{"type":"boolean"},"unsorted":{"type":"boolean"},"empty":{"type":"boolean"}}},"AuditLogDto":{"required":["affected","author","created","id","objectIdentifier","operation","operationStatus","origination","uuid"],"type":"object","properties":{"id":{"type":"integer","description":"Audit log Id","format":"int64"},"uuid":{"type":"string","description":"Audit log UUID"},"author":{"type":"string","description":"Requestor of the change"},"created":{"type":"string","description":"Time when the audit log is registered","format":"date-time"},"operationStatus":{"type":"string","description":"Status of the operation. Either success or failed","enum":["SUCCESS","FAILURE"]},"origination":{"type":"string","description":"Module triggered the action","enum":["ACCESS","RA_PROFILE","CLIENT","ADMINISTRATOR","FE","BE","CA","END_ENTITY","END_ENTITY_PROFILE","END_ENTITY_CERTIFICATE","AUDIT_LOG","ATTRIBUTES","CA_INSTANCE","CREDENTIAL","CONNECTOR","DISCOVERY","HEALTH","ENTITY","GROUP","CERTIFICATE","STATISTICS","ACME_PROFILE","ACME_ACCOUNT","LOCALHOST"]},"affected":{"type":"string","description":"Module affected by the operation","enum":["ACCESS","RA_PROFILE","CLIENT","ADMINISTRATOR","FE","BE","CA","END_ENTITY","END_ENTITY_PROFILE","END_ENTITY_CERTIFICATE","AUDIT_LOG","ATTRIBUTES","CA_INSTANCE","CREDENTIAL","CONNECTOR","DISCOVERY","HEALTH","ENTITY","GROUP","CERTIFICATE","STATISTICS","ACME_PROFILE","ACME_ACCOUNT","LOCALHOST"]},"objectIdentifier":{"type":"string","description":"Object identifier"},"operation":{"type":"string","description":"Type of operation performed","enum":["CREATE","DELETE","CHANGE","ENABLE","DISABLE","AUTH","REQUEST","ISSUE","RENEW","REVOKE","RESET","START","STOP","VALIDATE","CALLBACK","CONNECT","FORCE_DELETE","APPROVE"]},"additionalData":{"type":"string"}},"description":"Audit log items"},"AuditLogResponseDto":{"required":["items","page","size","totalPages"],"type":"object","properties":{"page":{"type":"integer","description":"Page number","format":"int32"},"size":{"type":"integer","description":"Size of the data per page","format":"int32"},"totalPages":{"type":"integer","description":"Number of pages","format":"int32"},"items":{"type":"array","description":"Audit log items","items":{"$ref":"#/components/schemas/AuditLogDto"}}}},"AuthProfileDto":{"required":["email","name","role","surname","username"],"type":"object","properties":{"username":{"type":"string","description":"Username"},"name":{"type":"string","description":"Name of the user"},"surname":{"type":"string","description":"Surname of the user"},"role":{"type":"string","description":"Role of User","enum":["administrator","superAdministrator"]},"email":{"type":"string","description":"Email address of the user"}}}}}}}')}}]);