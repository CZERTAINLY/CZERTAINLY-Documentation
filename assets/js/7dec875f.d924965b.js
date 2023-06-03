"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[863],{61801:function(t){t.exports=JSON.parse('{"url":"https://api.czertainly.com/2.8.0/doc-openapi-core-other.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Uncategorized API","description":"Various uncategorized REST APIs of the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"version":"2.8.0","x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Audit Log","description":"Audit Log API"},{"name":"Enums","description":"Enums API"},{"name":"Statistics/Dashboard","description":"Statistics/Dashboard API"},{"name":"Settings","description":"Settings API"}],"paths":{"/v1/settings/platform":{"get":{"tags":["Settings"],"summary":"Get platform settings","operationId":"getPlatformSettings","responses":{"200":{"description":"Platform settings retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PlatformSettingsDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"put":{"tags":["Settings"],"summary":"Update platform setting","operationId":"updatePlatformSettings","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PlatformSettingsDto"}}},"required":true},"responses":{"200":{"description":"Setting updated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/statistics":{"get":{"tags":["Statistics/Dashboard"],"summary":"Get Dashboard/Statistics Details","operationId":"getStatistics","responses":{"200":{"description":"Details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/StatisticsDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/enums":{"get":{"tags":["Enums"],"summary":"Get platform enums","operationId":"getPlatformEnums","responses":{"200":{"description":"Platform settings retrieved","content":{"application/json":{"schema":{"type":"object","additionalProperties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/EnumItemDto"}}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/auditLogs":{"get":{"tags":["Audit Log"],"summary":"List Audit logs","operationId":"listAuditLogs","parameters":[{"name":"filter","in":"query","required":true,"schema":{"$ref":"#/components/schemas/AuditLogFilter"}},{"name":"pageable","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"description":"List of audit logs","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuditLogResponseDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/auditLogs/statuses":{"get":{"tags":["Audit Log"],"summary":"List Status","operationId":"listOperationStatuses","responses":{"200":{"description":"List of audit log status","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/auditLogs/purge":{"get":{"tags":["Audit Log"],"summary":"Purge Audit logs","operationId":"purgeAuditLogs","parameters":[{"name":"filter","in":"query","required":true,"schema":{"$ref":"#/components/schemas/AuditLogFilter"}},{"name":"pageable","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"204":{"description":"Audit logs purged"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/auditLogs/operations":{"get":{"tags":["Audit Log"],"summary":"List Audit Operations","operationId":"listOperations","responses":{"200":{"description":"List of audit operations","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/auditLogs/objects":{"get":{"tags":["Audit Log"],"summary":"List Audit Objects","operationId":"listObjects","responses":{"200":{"description":"List of audit Objects","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/auditLogs/export":{"get":{"tags":["Audit Log"],"summary":"Export Audit logs","operationId":"exportAuditLogs","parameters":[{"name":"filter","in":"query","required":true,"schema":{"$ref":"#/components/schemas/AuditLogFilter"}},{"name":"pageable","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"description":"Export of audit logs","content":{"application/json":{"schema":{"type":"string","format":"binary"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}}},"components":{"schemas":{"PlatformSettingsDto":{"required":["utils"],"type":"object","properties":{"utils":{"$ref":"#/components/schemas/UtilsSettingsDto"}}},"UtilsSettingsDto":{"type":"object","properties":{"utilsServiceUrl":{"type":"string","description":"URL of the Util Service","example":"http://util-service:8080"}},"description":"Utils settings of the platform"},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"AuthenticationServiceExceptionDto":{"required":["code","message","statusCode"],"type":"object","properties":{"statusCode":{"type":"integer","description":"Status code of the HTTP Request","format":"int32"},"code":{"type":"string","description":"Code of the result"},"message":{"type":"string","description":"Exception message"}}},"StatisticsDto":{"type":"object","properties":{"totalCertificates":{"type":"integer","description":"Number Certificates available","format":"int64"},"totalGroups":{"type":"integer","description":"Number of Groups","format":"int64"},"totalDiscoveries":{"type":"integer","description":"Number of Discoveries triggered","format":"int64"},"totalConnectors":{"type":"integer","description":"Number of Connectors added","format":"int64"},"totalRaProfiles":{"type":"integer","description":"Number of RA Profiles in the platform","format":"int64"},"totalCredentials":{"type":"integer","description":"Number of Credentials","format":"int64"},"totalAuthorities":{"type":"integer","description":"Number of Authority instances","format":"int64"},"totalAdministrators":{"type":"integer","description":"Number of Administrators","format":"int64"},"totalClients":{"type":"integer","description":"Number of Clients added","format":"int64"},"groupStatByCertificateCount":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by Group","format":"int64"},"description":"Map of Certificate count by Group"},"raProfileStatByCertificateCount":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by RA Profile","format":"int64"},"description":"Map of Certificate count by RA Profile"},"certificateStatByType":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by Type","format":"int64"},"description":"Map of Certificate count by Type"},"certificateStatByExpiry":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by expiry date","format":"int64"},"description":"Map of Certificate count by expiry date"},"certificateStatByKeySize":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by key size","format":"int64"},"description":"Map of Certificate count by key size"},"certificateStatByBasicConstraints":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by basic constraints","format":"int64"},"description":"Map of Certificate count by basic constraints"},"certificateStatByStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by status","format":"int64"},"description":"Map of Certificate count by status"},"certificateStatByComplianceStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Certificate count by compliance status","format":"int64"},"description":"Map of Certificate count by compliance status"},"connectorStatByStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Connector count by status","format":"int64"},"description":"Map of Connector count by status"},"raProfileStatByStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of RA Profile count by status","format":"int64"},"description":"Map of RA Profile count by status"},"administratorStatByStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Administrator count by status","format":"int64"},"description":"Map of Administrator count by status"},"clientStatByStatus":{"type":"object","additionalProperties":{"type":"integer","description":"Map of Client count by status","format":"int64"},"description":"Map of Client count by status"}}},"EnumItemDto":{"required":["code","label"],"type":"object","properties":{"code":{"type":"string","description":"Enum item code","example":"X509"},"label":{"type":"string","description":"Enum item display label","example":"X.509"},"description":{"type":"string","description":"Enum item description","example":"X.509 Certificate type"}}},"AuditLogFilter":{"type":"object","properties":{"author":{"type":"string","description":"Author of the action triggered audit log"},"createdFrom":{"type":"string","description":"Start time of the filter","format":"date"},"createdTo":{"type":"string","description":"End time of the filter","format":"date"},"operationStatus":{"type":"string","description":"Status of the filter","enum":["SUCCESS","FAILURE"]},"origination":{"type":"string","description":"Module triggered the action","enum":["ACCESS","RA_PROFILE","CLIENT","ADMINISTRATOR","FE","BE","CA","END_ENTITY","END_ENTITY_PROFILE","END_ENTITY_CERTIFICATE","AUDIT_LOG","ATTRIBUTES","CA_INSTANCE","CREDENTIAL","CONNECTOR","DISCOVERY","HEALTH","ENTITY","GROUP","CERTIFICATE","STATISTICS","ACME_PROFILE","ACME_ACCOUNT","SCEP_PROFILE","COMPLIANCE_PROFILE","COMPLIANCE_RULE","COMPLIANCE_GROUP","LOCALHOST","TOKEN_PROFILE","TOKEN_INSTANCE","CRYPTOGRAPHIC_KEY","CRYPTOGRAPHIC_OPERATIONS","SCHEDULER"]},"affected":{"type":"string","description":"Module affected by the action","enum":["ACCESS","RA_PROFILE","CLIENT","ADMINISTRATOR","FE","BE","CA","END_ENTITY","END_ENTITY_PROFILE","END_ENTITY_CERTIFICATE","AUDIT_LOG","ATTRIBUTES","CA_INSTANCE","CREDENTIAL","CONNECTOR","DISCOVERY","HEALTH","ENTITY","GROUP","CERTIFICATE","STATISTICS","ACME_PROFILE","ACME_ACCOUNT","SCEP_PROFILE","COMPLIANCE_PROFILE","COMPLIANCE_RULE","COMPLIANCE_GROUP","LOCALHOST","TOKEN_PROFILE","TOKEN_INSTANCE","CRYPTOGRAPHIC_KEY","CRYPTOGRAPHIC_OPERATIONS","SCHEDULER"]},"objectIdentifier":{"type":"string","description":"Identifier of the object created"},"operation":{"type":"string","description":"Type of the operation","enum":["CREATE","DELETE","CHANGE","ENABLE","DISABLE","AUTH","REQUEST","ISSUE","RENEW","REVOKE","RESET","START","STOP","VALIDATE","CALLBACK","CONNECT","FORCE_DELETE","ENCRYPT","DECRYPT","SIGN","VERIFY","APPROVE","UPDATE"]}}},"Pageable":{"type":"object","properties":{"page":{"minimum":0,"type":"integer","format":"int32"},"size":{"minimum":1,"type":"integer","format":"int32"},"sort":{"type":"array","items":{"type":"string"}}}},"AuditLogDto":{"required":["affected","author","created","id","objectIdentifier","operation","operationStatus","origination","uuid"],"type":"object","properties":{"id":{"type":"integer","description":"Audit log Id","format":"int64"},"uuid":{"type":"string","description":"Audit log UUID"},"author":{"type":"string","description":"Requestor of the change"},"created":{"type":"string","description":"Time when the audit log is registered","format":"date-time"},"operationStatus":{"type":"string","description":"Status of the operation. Either success or failed","enum":["SUCCESS","FAILURE"]},"origination":{"type":"string","description":"Module triggered the action","enum":["ACCESS","RA_PROFILE","CLIENT","ADMINISTRATOR","FE","BE","CA","END_ENTITY","END_ENTITY_PROFILE","END_ENTITY_CERTIFICATE","AUDIT_LOG","ATTRIBUTES","CA_INSTANCE","CREDENTIAL","CONNECTOR","DISCOVERY","HEALTH","ENTITY","GROUP","CERTIFICATE","STATISTICS","ACME_PROFILE","ACME_ACCOUNT","SCEP_PROFILE","COMPLIANCE_PROFILE","COMPLIANCE_RULE","COMPLIANCE_GROUP","LOCALHOST","TOKEN_PROFILE","TOKEN_INSTANCE","CRYPTOGRAPHIC_KEY","CRYPTOGRAPHIC_OPERATIONS","SCHEDULER"]},"affected":{"type":"string","description":"Module affected by the operation","enum":["ACCESS","RA_PROFILE","CLIENT","ADMINISTRATOR","FE","BE","CA","END_ENTITY","END_ENTITY_PROFILE","END_ENTITY_CERTIFICATE","AUDIT_LOG","ATTRIBUTES","CA_INSTANCE","CREDENTIAL","CONNECTOR","DISCOVERY","HEALTH","ENTITY","GROUP","CERTIFICATE","STATISTICS","ACME_PROFILE","ACME_ACCOUNT","SCEP_PROFILE","COMPLIANCE_PROFILE","COMPLIANCE_RULE","COMPLIANCE_GROUP","LOCALHOST","TOKEN_PROFILE","TOKEN_INSTANCE","CRYPTOGRAPHIC_KEY","CRYPTOGRAPHIC_OPERATIONS","SCHEDULER"]},"objectIdentifier":{"type":"string","description":"Object identifier"},"operation":{"type":"string","description":"Type of operation performed","enum":["CREATE","DELETE","CHANGE","ENABLE","DISABLE","AUTH","REQUEST","ISSUE","RENEW","REVOKE","RESET","START","STOP","VALIDATE","CALLBACK","CONNECT","FORCE_DELETE","ENCRYPT","DECRYPT","SIGN","VERIFY","APPROVE","UPDATE"]},"additionalData":{"type":"string"}},"description":"Audit log items"},"AuditLogResponseDto":{"required":["items","itemsPerPage","pageNumber","totalItems","totalPages"],"type":"object","properties":{"itemsPerPage":{"type":"integer","description":"Number of entries per page","format":"int32"},"pageNumber":{"type":"integer","description":"Page number for the request","format":"int32"},"totalPages":{"type":"integer","description":"Number of pages available","format":"int32"},"totalItems":{"type":"integer","description":"Number of items available","format":"int64"},"items":{"type":"array","description":"Audit log items","items":{"$ref":"#/components/schemas/AuditLogDto"}}}}}}}}')}}]);