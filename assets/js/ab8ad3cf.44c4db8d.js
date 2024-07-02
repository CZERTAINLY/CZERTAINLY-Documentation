"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8447],{42791:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/2.12.0/doc-openapi-core-scep.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY SCEP API","description":"REST API for managing SCEP Profiles in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"version":"2.12.0","x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"SCEP Profile Management","description":"SCEP Profile Management API"}],"paths":{"/v1/scepProfiles/{uuid}":{"get":{"tags":["SCEP Profile Management"],"summary":"Get details of SCEP Profile","operationId":"getScepProfile","parameters":[{"name":"uuid","in":"path","description":"SCEP Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"SCEP Profile details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ScepProfileDetailDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"put":{"tags":["SCEP Profile Management"],"summary":"Edit SCEP Profile","operationId":"editScepProfile","parameters":[{"name":"uuid","in":"path","description":"SCEP Profile UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ScepProfileEditRequestDto"}}},"required":true},"responses":{"200":{"description":"SCEP Profile updated","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ScepProfileDetailDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"delete":{"tags":["SCEP Profile Management"],"summary":"Delete SCEP Profile","operationId":"deleteScepProfile","parameters":[{"name":"uuid","in":"path","description":"SCEP Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"SCEP Profile deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/scepProfiles":{"get":{"tags":["SCEP Profile Management"],"summary":"Get list of SCEP Profiles","operationId":"listScepProfiles","responses":{"200":{"description":"SCEP Profile list retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ScepProfileDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"post":{"tags":["SCEP Profile Management"],"summary":"Create SCEP Profile","operationId":"createScepProfile","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ScepProfileRequestDto"}}},"required":true},"responses":{"201":{"description":"SCEP Profile created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ScepProfileDetailDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/scepProfiles/{uuid}/raProfiles/{raProfileUuid}":{"patch":{"tags":["SCEP Profile Management"],"summary":"Update RA Profile for SCEP Profile","operationId":"updateRaProfile","parameters":[{"name":"uuid","in":"path","description":"SCEP Profile UUID","required":true,"schema":{"type":"string"}},{"name":"raProfileUuid","in":"path","description":"RA Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"RA Profile updated"},"204":{"description":"No Content"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/scepProfiles/{uuid}/enable":{"patch":{"tags":["SCEP Profile Management"],"summary":"Enable SCEP Profile","operationId":"enableScepProfile","parameters":[{"name":"uuid","in":"path","description":"SCEP Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"SCEP Profile enabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/scepProfiles/{uuid}/disable":{"patch":{"tags":["SCEP Profile Management"],"summary":"Disable SCEP Profile","operationId":"disableScepProfile","parameters":[{"name":"uuid","in":"path","description":"SCEP Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"SCEP Profile disabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/scepProfiles/enable":{"patch":{"tags":["SCEP Profile Management"],"summary":"Enable multiple SCEP Profiles","operationId":"bulkEnableScepProfile","requestBody":{"description":"SCEP Profile UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"SCEP Profiles enabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/scepProfiles/disable":{"patch":{"tags":["SCEP Profile Management"],"summary":"Disable multiple SCEP Profile","operationId":"bulkDisableScepProfile","requestBody":{"description":"SCEP Profile UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"SCEP Profiles disabled"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/scepProfiles/caCertificates":{"get":{"tags":["SCEP Profile Management"],"summary":"Get list of certificates eligible for CA certificate of SCEP requests","operationId":"listScepCaCertificates","parameters":[{"name":"intuneEnabled","in":"query","description":"flag to return certificates that are eligible for Intune integration","required":true,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"List of CA certificates retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/CertificateDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/scepProfiles/delete":{"delete":{"tags":["SCEP Profile Management"],"summary":"Delete multiple SCEP Profiles","operationId":"bulkDeleteScepProfile","requestBody":{"description":"SCEP Profile UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"200":{"description":"SCEP Profiles deleted","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BulkActionMessageDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/scepProfiles/delete/force":{"delete":{"tags":["SCEP Profile Management"],"summary":"Force delete multiple SCEP Profiles","operationId":"forceDeleteScepProfiles","requestBody":{"description":"SCEP Profile UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"200":{"description":"SCEP Profiles forced to delete","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BulkActionMessageDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}}},"components":{"schemas":{"AttributeCallback":{"required":["callbackContext","callbackMethod","mappings"],"type":"object","properties":{"callbackContext":{"type":"string","description":"Context part of callback URL"},"callbackMethod":{"type":"string","description":"HTTP method of the callback"},"mappings":{"uniqueItems":true,"type":"array","description":"Mappings for the callback method","items":{"$ref":"#/components/schemas/AttributeCallbackMapping"}}},"description":"Optional definition of callback for getting the content of the Attribute based on the action"},"AttributeCallbackMapping":{"required":["targets","to"],"type":"object","properties":{"from":{"type":"string","description":"Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set."},"attributeType":{"$ref":"#/components/schemas/AttributeType"},"attributeContentType":{"$ref":"#/components/schemas/AttributeContentType"},"to":{"type":"string","description":"Name of the path variable or request param or body field which is to be used to assign value of attribute"},"targets":{"uniqueItems":true,"type":"array","description":"Set of targets for propagating value.","items":{"$ref":"#/components/schemas/AttributeValueTarget"}},"value":{"type":"object","description":"Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time."}},"description":"Mappings for the callback method"},"AttributeConstraintType":{"type":"string","description":"Attribute Constraint Type","enum":["regExp","range","dateTime"]},"AttributeContentType":{"type":"string","description":"Type of the attribute content. ","enum":["string","text","integer","boolean","float","date","time","datetime","secret","file","credential","codeblock","object"]},"AttributeType":{"type":"string","description":"Type of the attribute. It is optional and must be set only if special behaviour is needed.","enum":["data","group","info","meta","custom"]},"AttributeValueTarget":{"type":"string","description":"Set of targets for propagating value.","enum":["pathVariable","requestParameter","body"]},"BaseAttributeConstraint":{"required":["data","type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"type":"object","description":"Attribute Constraint Data"}},"description":"Optional regular expressions and constraints used for validating the Attribute content","oneOf":[{"$ref":"#/components/schemas/RegexpAttributeConstraint"},{"$ref":"#/components/schemas/RangeAttributeConstraint"},{"$ref":"#/components/schemas/DateTimeAttributeConstraint"}]},"BaseAttributeContentDto":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"object","description":"Content Data"}},"description":"Base Attribute content definition","oneOf":[{"$ref":"#/components/schemas/BooleanAttributeContent"},{"$ref":"#/components/schemas/CodeBlockAttributeContent"},{"$ref":"#/components/schemas/CredentialAttributeContent"},{"$ref":"#/components/schemas/DateAttributeContent"},{"$ref":"#/components/schemas/DateTimeAttributeContent"},{"$ref":"#/components/schemas/FileAttributeContent"},{"$ref":"#/components/schemas/FloatAttributeContent"},{"$ref":"#/components/schemas/IntegerAttributeContent"},{"$ref":"#/components/schemas/ObjectAttributeContent"},{"$ref":"#/components/schemas/SecretAttributeContent"},{"$ref":"#/components/schemas/StringAttributeContent"},{"$ref":"#/components/schemas/TextAttributeContent"},{"$ref":"#/components/schemas/TimeAttributeContent"}]},"BooleanAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"boolean","description":"Boolean attribute value"}}},"CodeBlockAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/CodeBlockAttributeContentData"}}},"CodeBlockAttributeContentData":{"required":["code","language"],"type":"object","properties":{"language":{"$ref":"#/components/schemas/ProgrammingLanguageEnum"},"code":{"type":"string","description":"Block of the code in Base64. Formatting of the code is specified by variable language"}},"description":"CodeBlock attribute content data"},"CredentialAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/CredentialAttributeContentData"}}},"CredentialAttributeContentData":{"required":["attributes","kind","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"kind":{"type":"string","description":"Credential Kind","example":"SoftKeyStore, Basic, ApiKey, etc"},"attributes":{"type":"array","description":"List of Credential Attributes","items":{"$ref":"#/components/schemas/DataAttribute"}}},"description":"Credential attribute content data"},"DataAttribute":{"required":["contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/DataAttributeProperties"},"constraints":{"type":"array","description":"Optional regular expressions and constraints used for validating the Attribute content","items":{"$ref":"#/components/schemas/BaseAttributeConstraint"}},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"}},"description":"Data attribute allows to store and transfer dynamic data. Its content can be edited and send in requests to store."},"DataAttributeProperties":{"required":["label","list","multiSelect","readOnly","required","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false}},"description":"Properties of the Attributes"},"DateAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Date attribute value in format yyyy-MM-dd","format":"date"}}},"DateTimeAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"$ref":"#/components/schemas/DateTimeAttributeConstraintData"}}},"DateTimeAttributeConstraintData":{"type":"object","properties":{"from":{"type":"string","description":"Start of the datetime for validation","format":"date-time"},"to":{"type":"string","description":"End of the datetime for validation","format":"date-time"}},"description":"DateTime Range Attribute Constraint Data"},"DateTimeAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"DateTime attribute value in format yyyy-MM-ddTHH:mm:ss.SSSXXX","format":"date-time"}}},"FileAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/FileAttributeContentData"}}},"FileAttributeContentData":{"required":["content","fileName","mimeType"],"type":"object","properties":{"content":{"type":"string","description":"File content"},"fileName":{"type":"string","description":"Name of the file"},"mimeType":{"type":"string","description":"Type of the file uploaded"}},"description":"File attribute content data"},"FloatAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"number","description":"Float attribute value","format":"float"}}},"IntegerAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"integer","description":"Integer attribute value","format":"int32"}}},"ObjectAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"object","description":"Object attribute content data"}}},"ProgrammingLanguageEnum":{"type":"string","description":"Definition of programming languages used for code","example":"JAVA, PHP, C, etc","enum":["apacheconf","bash","basic","c","csharp","cpp","css","docker","fsharp","gherkin","git","go","graphql","html","http","ini","java","javascript","json","kotlin","latex","lisp","makefile","markdown","matlab","nginx","objectivec","perl","php","powershell","properties","python","ruby","rust","smalltalk","sql","typescript","vbnet","xquery","xml","yaml"]},"RangeAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"$ref":"#/components/schemas/RangeAttributeConstraintData"}}},"RangeAttributeConstraintData":{"type":"object","properties":{"from":{"type":"integer","description":"Start of the range for validation","format":"int32"},"to":{"type":"integer","description":"End of the range for validation","format":"int32"}},"description":"Integer Range Attribute Constraint Data"},"RegexpAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"type":"string","description":"Regular Expression Attribute Constraint Data"}}},"RequestAttributeDto":{"required":["content","contentType","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}}},"description":"Request attribute to send attribute content for object"},"ScepProfileEditRequestDto":{"required":["caCertificateUuid","issueCertificateAttributes"],"type":"object","properties":{"description":{"type":"string","description":"Description of the SCEP Profile","example":"Sample description"},"raProfileUuid":{"type":"string","description":"RA Profile UUID","example":"6b55de1c-844f-11ec-a8a3-0242ac120002"},"issueCertificateAttributes":{"type":"array","description":"List of Attributes to issue Certificate","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"caCertificateUuid":{"type":"string","description":"UUID of the Certificate to be used as CA Certificate for SCEP Requests"},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"renewalThreshold":{"type":"integer","description":"Minimum expiry days to allow renewal of certificate. Empty or the value \'0\' will be considered as null and half life of the certificate validity will be considered for the protocol","format":"int32"},"includeCaCertificate":{"type":"boolean","description":"Include CA Certificate in the SCEP Message response","default":false},"includeCaCertificateChain":{"type":"boolean","description":"Include CA Certificate Chain in the SCEP Message response","default":false},"challengePassword":{"type":"string","description":"Challenge Password for the SCEP Request"},"enableIntune":{"type":"boolean","description":"Status of Intune"},"intuneTenant":{"type":"string","description":"Intune Tenant"},"intuneApplicationId":{"type":"string","description":"Intune Application ID"},"intuneApplicationKey":{"type":"string","description":"Intune Application Key"}}},"SecretAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/SecretAttributeContentData"}}},"SecretAttributeContentData":{"type":"object","properties":{"secret":{"type":"string","description":"Secret attribute data"},"protectionLevel":{"type":"string","description":"Level of protection of the data"}},"description":"Secret attribute content data"},"StringAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"String attribute value"}}},"TextAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Text attribute value"}}},"TimeAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Time attribute value in format HH:mm:ss"}}},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"AuthenticationServiceExceptionDto":{"required":["code","message","statusCode"],"type":"object","properties":{"statusCode":{"type":"integer","description":"Status code of the HTTP Request","format":"int32"},"code":{"type":"string","description":"Code of the result"},"message":{"type":"string","description":"Exception message"}}},"CertificateDto":{"required":["commonName","keySize","privateKeyAvailability","publicKeyAlgorithm","signatureAlgorithm","state","subjectDn","trustedCa","uuid","validationStatus"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Certificate"},"commonName":{"type":"string","description":"Certificate common name"},"serialNumber":{"type":"string","description":"Certificate serial number"},"issuerCommonName":{"type":"string","description":"Certificate issuer common name"},"issuerDn":{"type":"string","description":"Issuer DN of the Certificate"},"subjectDn":{"type":"string","description":"Subject DN of the Certificate"},"notBefore":{"type":"string","description":"Certificate validity start date","format":"date-time"},"notAfter":{"type":"string","description":"Certificate expiration date","format":"date-time"},"publicKeyAlgorithm":{"type":"string","description":"Public key algorithm"},"signatureAlgorithm":{"type":"string","description":"Certificate signature algorithm"},"keySize":{"type":"integer","description":"Certificate key size","format":"int32"},"state":{"$ref":"#/components/schemas/CertificateState"},"validationStatus":{"$ref":"#/components/schemas/CertificateValidationStatus"},"raProfile":{"$ref":"#/components/schemas/SimplifiedRaProfileDto"},"fingerprint":{"type":"string","description":"SHA256 fingerprint of the Certificate"},"groups":{"type":"array","description":"Groups associated to the Certificate","items":{"$ref":"#/components/schemas/GroupDto"}},"owner":{"type":"string","description":"Certificate Owner"},"ownerUuid":{"type":"string","description":"Certificate Owner UUID"},"certificateType":{"$ref":"#/components/schemas/CertificateType"},"issuerSerialNumber":{"type":"string","description":"Serial number of the issuer"},"complianceStatus":{"$ref":"#/components/schemas/ComplianceStatus"},"issuerCertificateUuid":{"type":"string","description":"UUID of the issuer certificate"},"privateKeyAvailability":{"type":"boolean","description":"Private Key Availability"},"trustedCa":{"type":"boolean","description":"Indicator whether CA is marked as trusted, set to null if certificate is not CA"}},"description":"CA Certificate for the SCEP Profile"},"CertificateState":{"type":"string","description":"State of the Certificate","enum":["requested","rejected","pending_approval","pending_issue","pending_revoke","failed","issued","revoked","archived"]},"CertificateType":{"type":"string","description":"Certificate type","enum":["X.509","SSH"]},"CertificateValidationStatus":{"type":"string","description":"Current validation status of the certificate","enum":["not_checked","failed","inactive","invalid","valid","revoked","expiring","expired"]},"ComplianceStatus":{"type":"string","description":"Certificate compliance status","enum":["not_checked","ok","nok","na"]},"GroupDto":{"required":["name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the Group"},"email":{"type":"string","description":"Group contact email"},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}}},"description":"Groups associated to the Certificate"},"ResponseAttributeDto":{"required":["contentType","label","name","type"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"label":{"type":"string","description":"Label of the the Attribute","example":"Attribute Name"},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}}},"description":"Response attribute with content for object it belongs to"},"ScepProfileDetailDto":{"required":["enabled","includeCaCertificate","includeCaCertificateChain","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"},"description":{"type":"string","description":"SCEP Profile description","example":"Sample description"},"raProfile":{"$ref":"#/components/schemas/SimplifiedRaProfileDto"},"includeCaCertificate":{"type":"boolean","description":"Include CA certificate in the SCEP response"},"includeCaCertificateChain":{"type":"boolean","description":"Include CA certificate chain in the SCEP response"},"renewThreshold":{"type":"integer","description":"Renewal time threshold in days","format":"int32","example":30},"scepUrl":{"type":"string","description":"SCEP URL","example":"https://some-server.com/api/v1/protocols/scep/profile/pkiclient.exe"},"enableIntune":{"type":"boolean","description":"Status of Intune"},"issueCertificateAttributes":{"type":"array","description":"List of Attributes to issue a Certificate","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"caCertificate":{"$ref":"#/components/schemas/CertificateDto"},"intuneTenant":{"type":"string","description":"Intune tenant"},"intuneApplicationId":{"type":"string","description":"Intune application ID"}}},"SimplifiedRaProfileDto":{"required":["enabled","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"},"authorityInstanceUuid":{"type":"string","description":"Authority Instance UUID"}},"description":"RA Profile associated to the Certificate"},"ScepProfileRequestDto":{"required":["caCertificateUuid","issueCertificateAttributes","name"],"type":"object","properties":{"description":{"type":"string","description":"Description of the SCEP Profile","example":"Sample description"},"raProfileUuid":{"type":"string","description":"RA Profile UUID","example":"6b55de1c-844f-11ec-a8a3-0242ac120002"},"issueCertificateAttributes":{"type":"array","description":"List of Attributes to issue Certificate","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"caCertificateUuid":{"type":"string","description":"UUID of the Certificate to be used as CA Certificate for SCEP Requests"},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"renewalThreshold":{"type":"integer","description":"Minimum expiry days to allow renewal of certificate. Empty or the value \'0\' will be considered as null and half life of the certificate validity will be considered for the protocol","format":"int32"},"includeCaCertificate":{"type":"boolean","description":"Include CA Certificate in the SCEP Message response","default":false},"includeCaCertificateChain":{"type":"boolean","description":"Include CA Certificate Chain in the SCEP Message response","default":false},"challengePassword":{"type":"string","description":"Challenge Password for the SCEP Request"},"enableIntune":{"type":"boolean","description":"Status of Intune"},"intuneTenant":{"type":"string","description":"Intune Tenant"},"intuneApplicationId":{"type":"string","description":"Intune Application ID"},"intuneApplicationKey":{"type":"string","description":"Intune Application Key"},"name":{"type":"string","description":"Name of the SCEP Profile","example":"Profile Name 1"}}},"ScepProfileDto":{"required":["enabled","includeCaCertificate","includeCaCertificateChain","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"},"description":{"type":"string","description":"SCEP Profile description","example":"Sample description"},"raProfile":{"$ref":"#/components/schemas/SimplifiedRaProfileDto"},"includeCaCertificate":{"type":"boolean","description":"Include CA certificate in the SCEP response"},"includeCaCertificateChain":{"type":"boolean","description":"Include CA certificate chain in the SCEP response"},"renewThreshold":{"type":"integer","description":"Renewal time threshold in days","format":"int32","example":30},"scepUrl":{"type":"string","description":"SCEP URL","example":"https://some-server.com/api/v1/protocols/scep/profile/pkiclient.exe"},"enableIntune":{"type":"boolean","description":"Status of Intune"}}},"BulkActionMessageDto":{"required":["message","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"message":{"type":"string","description":"Message describing the associations of the Objects which is preventing the bulk operation","example":"Object is associated with other items"}}}}}}}')}}]);