"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8493],{5173:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-core-certificate.yaml","spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Certificate API","description":"REST API for managing Certificates in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Certificate Group API","description":"Certificate Group API"},{"name":"Certificate Inventory API","description":"Certificate Inventory API"}],"paths":{"/v1/certificate/{uuid}/ra-profile":{"put":{"tags":["Certificate Inventory API"],"summary":"Update RA Profile for a Certificate","operationId":"updateRaProfile","parameters":[{"name":"uuid","in":"path","description":"Certificate UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateUpdateRAProfileDto"}}},"required":true},"responses":{"204":{"description":"RA Profile updated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/{uuid}/owner":{"put":{"tags":["Certificate Inventory API"],"summary":"Update Owner for a Certificate","operationId":"updateOwner","parameters":[{"name":"uuid","in":"path","description":"Certificate UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateOwnerRequestDto"}}},"required":true},"responses":{"204":{"description":"Owner updated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/{uuid}/group":{"put":{"tags":["Certificate Inventory API"],"summary":"Update Group for a Certificate","operationId":"updateCertificateGroup","parameters":[{"name":"uuid","in":"path","description":"Certificate UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateUpdateGroupDto"}}},"required":true},"responses":{"204":{"description":"Group updated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/validate":{"put":{"tags":["Certificate Inventory API"],"summary":"Validate Certificates of Status Unknown","operationId":"validateAllCertificate","responses":{"204":{"description":"Certificate Validation Initiated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/ra-profile":{"put":{"tags":["Certificate Inventory API"],"summary":"Update RA Profile for multiple Certificates","description":"In this operation, when the list of Certificate UUIDs are provided and the filter is left as null or undefined, then the change will be applied only to the list of Certificate UUIDs provided. When the filter is provided in the request, the list of UUIDs will be ignored and the change will be applied for the all the certificates that matches the filter criteria. To apply this change for all the Certificates in the inventory, provide an empty array \\"[]\\" for the value of \\"filters\\" in the request body","operationId":"bulkUpdateRaProfile","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/MultipleRAProfileUpdateDto"}}},"required":true},"responses":{"204":{"description":"RA Profile updated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/owner":{"put":{"tags":["Certificate Inventory API"],"summary":"Update Owner for multiple Certificates","description":"In this operation, when the list of Certificate UUIDs are provided and the filter is left as null or undefined, then the change will be applied only to the list of Certificate UUIDs provided. When the filter is provided in the request, the list of UUIDs will be ignored and the change will be applied for the all the certificates that matches the filter criteria. To apply this change for all the Certificates in the inventory, provide an empty array \\"[]\\" for the value of \\"filters\\" in the request body","operationId":"bulkUpdateOwner","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateOwnerBulkUpdateDto"}}},"required":true},"responses":{"204":{"description":"Owner updated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/group":{"put":{"tags":["Certificate Inventory API"],"summary":"Update Group for multiple Certificates","description":"In this operation, when the list of Certificate UUIDs are provided and the filter is left as null or undefined, then the change will be applied only to the list of Certificate UUIDs provided. When the filter is provided in the request, the list of UUIDs will be ignored and the change will be applied for the all the certificates that matches the filter criteria. To apply this change for all the Certificates in the inventory, provide an empty array \\"[]\\" for the value of \\"filters\\" in the request body","operationId":"bulkUpdateCertificateGroup","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/MultipleGroupUpdateDto"}}},"required":true},"responses":{"204":{"description":"Group updated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/groups/{uuid}":{"get":{"tags":["Certificate Group API"],"summary":"Group details","operationId":"getGroup","parameters":[{"name":"uuid","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Group details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GroupDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"post":{"tags":["Certificate Group API"],"summary":"Update Group","operationId":"updateGroup","parameters":[{"name":"uuid","in":"path","description":"Group UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/GroupRequestDto"}}},"required":true},"responses":{"200":{"description":"Group updated","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GroupDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"delete":{"tags":["Certificate Group API"],"summary":"Remove Group","operationId":"removeGroup","parameters":[{"name":"uuid","in":"path","description":"Group UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Group removed"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/groups":{"get":{"tags":["Certificate Group API"],"summary":"List Groups","operationId":"listGroups","responses":{"200":{"description":"list of available Group","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/GroupDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"post":{"tags":["Certificate Group API"],"summary":"Create Group","operationId":"createGroup","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/GroupRequestDto"}}},"required":true},"responses":{"201":{"description":"Group created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"delete":{"tags":["Certificate Group API"],"summary":"Remove multiple Groups","operationId":"bulkRemoveGroup","requestBody":{"description":"Group UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"Groups removed"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/upload":{"post":{"tags":["Certificate Inventory API"],"summary":"Upload a new Certificate","operationId":"upload","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/UploadCertificateRequestDto"}}},"required":true},"responses":{"201":{"description":"Certificate uploaded","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/delete":{"post":{"tags":["Certificate Inventory API"],"summary":"Delete multiple certificates","description":"In this operation, when the list of Certificate UUIDs are provided and the filter is left as null or undefined, then the change will be applied only to the list of Certificate UUIDs provided. When the filter is provided in the request, the list of UUIDs will be ignored and the change will be applied for the all the certificates that matches the filter criteria. To apply this change for all the Certificates in the inventory, provide an empty array \\"[]\\" for the value of \\"filters\\" in the request body","operationId":"bulkRemoveCertificate","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RemoveCertificateDto"}}},"required":true},"responses":{"200":{"description":"Certificates deleted","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BulkOperationResponse"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/compliance":{"post":{"tags":["Certificate Inventory API"],"summary":"Initiate Certificate Compliance Check","operationId":"checkCompliance","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateComplianceCheckDto"}}},"required":true},"responses":{"204":{"description":"Compliance check initiated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate":{"post":{"tags":["Certificate Inventory API"],"summary":"List Certificates","operationId":"listCertificate","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchRequestDto"}}},"required":true},"responses":{"200":{"description":"List of all the certificates","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateResponseDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/{uuid}/validate":{"get":{"tags":["Certificate Inventory API"],"summary":"Initiate Certificate validation","operationId":"check","parameters":[{"name":"uuid","in":"path","description":"Certificate UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Certificate validation initiated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/{uuid}/history":{"get":{"tags":["Certificate Inventory API"],"summary":"Get Certificate event history","operationId":"getCertificateEventHistory","parameters":[{"name":"uuid","in":"path","description":"Certificate UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Certificate event history retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/CertificateEventHistoryDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/{uuid}":{"get":{"tags":["Certificate Inventory API"],"summary":"Get Certificate Details","operationId":"getCertificate","parameters":[{"name":"uuid","in":"path","description":"Certificate UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Certificate detail retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CertificateDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"delete":{"tags":["Certificate Inventory API"],"summary":"Remove a certificate","operationId":"removeCertificate","parameters":[{"name":"uuid","in":"path","description":"Certificate UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Certificate deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/{certificateUuid}/locations":{"get":{"tags":["Certificate Inventory API"],"summary":"List of available Locations for the Certificate","operationId":"listLocations","parameters":[{"name":"certificateUuid","in":"path","description":"Certificate UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Locations retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/LocationDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/certificate/search":{"get":{"tags":["Certificate Inventory API"],"summary":"Get Certificate searchable fields information","operationId":"getSearchableFieldInformation","responses":{"200":{"description":"Certificate searchable field information retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/SearchFieldDataDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}}},"components":{"schemas":{"CertificateUpdateRAProfileDto":{"required":["raProfileUuid"],"type":"object","properties":{"raProfileUuid":{"type":"string","description":"RA Profile UUID"}}},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"CertificateOwnerRequestDto":{"required":["owner"],"type":"object","properties":{"owner":{"type":"string","description":"Owner of the certificate"}}},"CertificateUpdateGroupDto":{"required":["groupUuid"],"type":"object","properties":{"groupUuid":{"type":"string","description":"Group UUID"}}},"MultipleRAProfileUpdateDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the RA Profile"},"certificateUuids":{"type":"array","description":"List of Certificate UUIDs","items":{"type":"string","description":"List of Certificate UUIDs"}},"filters":{"type":"array","description":"Certificate filter input","items":{"$ref":"#/components/schemas/SearchFilterRequestDto"}}}},"SearchFilterRequestDto":{"required":["condition","field"],"type":"object","properties":{"field":{"type":"string","description":"Field to search","enum":["commonName","serialNumber","raProfile","entity","status","group","owner","issuerCommonName","signatureAlgorithm","fingerprint","notAfter","notBefore","publicKeyAlgorithm","keySize","keyUsage","basicConstraints","meta","subjectAlternativeNames","subjectDn","issuerDn","issuerSerialNumber","ocspValidation","crlValidation","signatureValidation"]},"condition":{"type":"string","description":"Condition for the search","enum":["EQUALS","NOT_EQUALS","GREATER","LESSER","CONTAINS","NOT_CONTAINS","STARTS_WITH","ENDS_WITH","EMPTY","NOT_EMPTY","SUCCESS","FAILED","UNKNOWN","NOT_CHECKED"]},"value":{"type":"object","description":"Value to match"}},"description":"Certificate filter input"},"CertificateOwnerBulkUpdateDto":{"required":["owner"],"type":"object","properties":{"owner":{"type":"string","description":"Owner of the Certificates"},"certificateUuids":{"type":"array","description":"List of Certificate UUIDs","items":{"type":"string","description":"List of Certificate UUIDs"}},"filters":{"type":"array","description":"Certificate filter input","items":{"$ref":"#/components/schemas/SearchFilterRequestDto"}}}},"MultipleGroupUpdateDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Group"},"certificateUuids":{"type":"array","description":"List of Certificate UUIDs","items":{"type":"string","description":"List of Certificate UUIDs"}},"filters":{"type":"array","description":"Certificate filter input","items":{"$ref":"#/components/schemas/SearchFilterRequestDto"}}}},"GroupRequestDto":{"required":["name"],"type":"object","properties":{"name":{"type":"string","description":"Name of the Certificate Group"},"description":{"type":"string","description":"Description of the Certificate Group"}}},"GroupDto":{"required":["name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the Certificate Group"}}},"UuidDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier"}}},"UploadCertificateRequestDto":{"required":["certificate"],"type":"object","properties":{"certificate":{"type":"string","description":"Base64 Content of the Certificate"}}},"RemoveCertificateDto":{"type":"object","properties":{"uuids":{"type":"array","description":"List of Certificate UUIDs","items":{"type":"string","description":"List of Certificate UUIDs"}},"filters":{"type":"array","description":"Certificate filter input","items":{"$ref":"#/components/schemas/SearchFilterRequestDto"}}}},"BulkOperationResponse":{"required":["failedItem","message","status"],"type":"object","properties":{"status":{"type":"string","description":"Status of the operation","enum":["SUCCESS","FAILED","PARTIAL"]},"failedItem":{"type":"integer","description":"Number of items failed","format":"int64"},"message":{"type":"string","description":"Message for the action"}}},"CertificateComplianceCheckDto":{"type":"object","properties":{"certificateUuids":{"type":"array","description":"List of UUIDs of the Certificates","items":{"type":"string","description":"List of UUIDs of the Certificates"}}}},"SearchRequestDto":{"type":"object","properties":{"filters":{"type":"array","description":"Certificate filter input","items":{"$ref":"#/components/schemas/SearchFilterRequestDto"}},"itemsPerPage":{"maximum":1000,"type":"integer","description":"Number of entries per page","format":"int32","default":10},"pageNumber":{"type":"integer","description":"Page number for the request","format":"int32","default":1}}},"CertificateComplianceResultDto":{"required":["connectorName","ruleDescription","ruleName","status"],"type":"object","properties":{"connectorName":{"type":"string","description":"Name of the Compliance Provider","example":"Provider1"},"ruleName":{"type":"string","description":"Name of the rule","example":"RuleName"},"ruleDescription":{"type":"string","description":"Description of the rule","example":"Description sample"},"status":{"type":"string","description":"Status of the rule","example":"nok","enum":["ok","nok","na"]}},"description":"Certificate compliance check result"},"CertificateDto":{"required":["basicConstraints","certificateContent","commonName","fingerprint","issuerCommonName","issuerDn","keySize","keyUsage","notAfter","notBefore","publicKeyAlgorithm","serialNumber","signatureAlgorithm","status","subjectDn","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Certificate"},"commonName":{"type":"string","description":"Certificate common name"},"serialNumber":{"type":"string","description":"Certificate serial number"},"issuerCommonName":{"type":"string","description":"Certificate issuer common name"},"certificateContent":{"type":"string","description":"Base64 encoded Certificate content"},"issuerDn":{"type":"string","description":"Issuer DN of the Certificate"},"subjectDn":{"type":"string","description":"Subject DN of the Certificate"},"notBefore":{"type":"string","description":"Certificate validity start date","format":"date-time"},"notAfter":{"type":"string","description":"Certificate expiration date","format":"date-time"},"publicKeyAlgorithm":{"type":"string","description":"Public key algorithm"},"signatureAlgorithm":{"type":"string","description":"Certificate signature algorithm"},"keySize":{"type":"integer","description":"Certificate key size","format":"int32"},"extendedKeyUsage":{"type":"array","description":"Extended key usages","items":{"type":"string","description":"Extended key usages"}},"keyUsage":{"type":"array","description":"Key usages","items":{"type":"string","description":"Key usages"}},"basicConstraints":{"type":"string","description":"Basic Constraints"},"meta":{"type":"object","additionalProperties":{"type":"object","description":"Certificate meta data"},"description":"Certificate meta data"},"status":{"type":"string","description":"Status of the Certificate","enum":["valid","revoked","expired","unknown","expiring","new","invalid"]},"raProfile":{"$ref":"#/components/schemas/SimplifiedRaProfileDto"},"fingerprint":{"type":"string","description":"SHA256 fingerprint of the Certificate"},"subjectAlternativeNames":{"type":"object","additionalProperties":{"type":"object","description":"Subject alternative names"},"description":"Subject alternative names"},"locations":{"uniqueItems":true,"type":"array","description":"Locations associated to the Certificate","items":{"$ref":"#/components/schemas/LocationDto"}},"group":{"$ref":"#/components/schemas/GroupDto"},"owner":{"type":"string","description":"Certificate Owner"},"certificateType":{"type":"string","description":"Certificate type","enum":["X509","SSH"]},"issuerSerialNumber":{"type":"string","description":"Serial number of the issuer"},"certificateValidationResult":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/CertificateValidationDto"},"description":"Certificate validation result"},"nonCompliantRules":{"type":"array","description":"Certificate compliance check result","items":{"$ref":"#/components/schemas/CertificateComplianceResultDto"}},"complianceStatus":{"type":"string","description":"Certificate compliance status","enum":["ok","nok","na"]}},"description":"Certificates"},"CertificateInLocationDto":{"required":["certificateUuid","commonName","metadata","serialNumber"],"type":"object","properties":{"certificateUuid":{"type":"string","description":"UUID of the Certificate"},"commonName":{"type":"string","description":"Common Name of the Subject DN field of the Certificate"},"serialNumber":{"type":"string","description":"Serial number in HEX of the Certificate"},"metadata":{"type":"object","additionalProperties":{"type":"object","description":"Metadata of the Certificate in Location"},"description":"Metadata of the Certificate in Location"},"pushAttributes":{"type":"array","description":"Applied push attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"csrAttributes":{"type":"array","description":"Applied issue attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"withKey":{"type":"boolean","description":"If the Certificate in Location has associated private key","default":false}},"description":"List of Certificates in Location"},"CertificateResponseDto":{"required":["certificates","itemsPerPage","pageNumber","totalItems","totalPages"],"type":"object","properties":{"certificates":{"type":"array","description":"Certificates","items":{"$ref":"#/components/schemas/CertificateDto"}},"itemsPerPage":{"type":"integer","description":"Number of entries per page","format":"int32"},"pageNumber":{"type":"integer","description":"Page number for the request","format":"int32"},"totalPages":{"type":"integer","description":"Number of pages available","format":"int32"},"totalItems":{"type":"integer","description":"Number of items available","format":"int64"}}},"CertificateValidationDto":{"type":"object","properties":{"status":{"type":"string","enum":["success","failed","warning","revoked","not_checked","invalid","expiring","expired"]},"message":{"type":"string"}},"description":"Certificate validation result"},"LocationDto":{"required":["attributes","certificates","enabled","entityInstanceName","entityInstanceUuid","name","supportKeyManagement","supportMultipleEntries","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the Location"},"entityInstanceUuid":{"type":"string","description":"UUID of Entity instance"},"entityInstanceName":{"type":"string","description":"Name of Entity instance"},"attributes":{"type":"array","description":"List of Location attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"},"supportMultipleEntries":{"type":"boolean","description":"If the location supports multiple Certificates","default":false},"supportKeyManagement":{"type":"boolean","description":"If the location supports key management operations","default":false},"certificates":{"type":"array","description":"List of Certificates in Location","items":{"$ref":"#/components/schemas/CertificateInLocationDto"}},"metadata":{"type":"object","additionalProperties":{"type":"object","description":"Location metadata"},"description":"Location metadata"}},"description":"Locations associated to the Certificate"},"RequestAttributeDto":{"required":["content","name"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"}},"description":"Applied issue attributes"},"ResponseAttributeDto":{"required":["label","name","type"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"label":{"type":"string","description":"Label of the the Attribute","example":"Attribute Name"},"type":{"type":"string","description":"Type of the Attribute","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"content":{"type":"object","description":"Content of the Attribute"}},"description":"List of Location attributes"},"SimplifiedRaProfileDto":{"required":["enabled","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"}},"description":"RA Profile associated to the Certificate"},"CertificateEventHistoryDto":{"required":["certificateUuid","created","createdBy","event","message","status","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the event"},"certificateUuid":{"type":"string","description":"UUID of the Certificate"},"created":{"type":"string","description":"Event creation time","format":"date-time"},"createdBy":{"type":"string","description":"Created By"},"event":{"type":"string","description":"Event type","enum":["Issue Certificate","Renew Certificate","Revoke Certificate","Delete Certificate","Update RA Profile","Update Entity","Update Group","Update Owner","Upload Certificate","Certificate Discovered","Update Location"]},"status":{"type":"string","description":"Event result","enum":["SUCCESS","FAILED"]},"message":{"type":"string","description":"Event message"},"additionalInformation":{"type":"object","additionalProperties":{"type":"object","description":"Additional information for the event"},"description":"Additional information for the event"}}},"SearchFieldDataDto":{"required":["conditions","field","label","type"],"type":"object","properties":{"field":{"type":"string","description":"Field to search","enum":["commonName","serialNumber","raProfile","entity","status","group","owner","issuerCommonName","signatureAlgorithm","fingerprint","notAfter","notBefore","publicKeyAlgorithm","keySize","keyUsage","basicConstraints","meta","subjectAlternativeNames","subjectDn","issuerDn","issuerSerialNumber","ocspValidation","crlValidation","signatureValidation"]},"label":{"type":"string","description":"Label for the field"},"type":{"type":"string","description":"Type of the field","enum":["string","number","list","date"]},"conditions":{"type":"array","description":"List of available conditions for the field","items":{"type":"string","description":"List of available conditions for the field","enum":["EQUALS","NOT_EQUALS","GREATER","LESSER","CONTAINS","NOT_CONTAINS","STARTS_WITH","ENDS_WITH","EMPTY","NOT_EMPTY","SUCCESS","FAILED","UNKNOWN","NOT_CHECKED"]}},"value":{"type":"object","description":"Available values for the field"},"multiValue":{"type":"boolean","description":"Multivalue flag. true = yes, false = no"}}}}}}}')}}]);