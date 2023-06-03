"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3069],{78160:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/2.8.0/doc-openapi-core-entity.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Entity API","description":"REST API for managing Entities in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"version":"2.8.0","x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Entity Management","description":"Entity Management API"}],"paths":{"/v1/entities/{entityUuid}":{"get":{"tags":["Entity Management"],"summary":"Get Entity instance details","operationId":"getEntityInstance","parameters":[{"name":"entityUuid","in":"path","description":"Entity instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Authority instance details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityInstanceDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"put":{"tags":["Entity Management"],"summary":"Edit Entity instance","operationId":"editEntityInstance","parameters":[{"name":"entityUuid","in":"path","description":"Entity instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityInstanceUpdateRequestDto"}}},"required":true},"responses":{"200":{"description":"Authority instance details updated","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityInstanceDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Entity Management"],"summary":"Delete Entity instance","operationId":"deleteEntityInstance","parameters":[{"name":"entityUuid","in":"path","description":"Entity instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Entity instance deleted"},"400":{"description":"Bad Request","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/entities":{"post":{"tags":["Entity Management"],"summary":"Add Entity instance","operationId":"createEntityInstance","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityInstanceRequestDto"}}},"required":true},"responses":{"201":{"description":"Entity instance created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/entities/{entityUuid}/attributes/location/validate":{"post":{"tags":["Entity Management"],"summary":"Validate Location Attributes","operationId":"validateLocationAttributes","parameters":[{"name":"entityUuid","in":"path","description":"Entity instance UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"required":true},"responses":{"200":{"description":"Attributes validated"},"204":{"description":"No Content"},"400":{"description":"Bad Request","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"*/*":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/entities/list":{"post":{"tags":["Entity Management"],"summary":"List Entity instances","operationId":"listEntityInstances","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchRequestDto"}}},"required":true},"responses":{"200":{"description":"List of Entity instances","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityInstanceResponseDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/entities/{entityUuid}/attributes/location":{"get":{"tags":["Entity Management"],"summary":"List Location Attributes","operationId":"listLocationAttributes","parameters":[{"name":"entityUuid","in":"path","description":"Entity instance UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Location attributes retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BaseAttributeDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/entities/search":{"get":{"tags":["Entity Management"],"summary":"Get Entities searchable fields information","operationId":"getSearchableFieldInformation","responses":{"200":{"description":"Entity searchable field information retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/SearchFieldDataByGroupDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}}},"components":{"schemas":{"AttributeCallback":{"required":["callbackContext","callbackMethod","mappings"],"type":"object","properties":{"callbackContext":{"type":"string","description":"Context part of callback URL"},"callbackMethod":{"type":"string","description":"HTTP method of the callback"},"mappings":{"uniqueItems":true,"type":"array","description":"Mappings for the callback method","items":{"$ref":"#/components/schemas/AttributeCallbackMapping"}}},"description":"Optional definition of callback for getting the content of the Attribute based on the action"},"AttributeCallbackMapping":{"required":["targets","to"],"type":"object","properties":{"from":{"type":"string","description":"Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set."},"attributeType":{"$ref":"#/components/schemas/AttributeType"},"attributeContentType":{"$ref":"#/components/schemas/AttributeContentType"},"to":{"type":"string","description":"Name of the path variable or request param or body field which is to be used to assign value of attribute"},"targets":{"uniqueItems":true,"type":"array","description":"Set of targets for propagating value.","items":{"$ref":"#/components/schemas/AttributeValueTarget"}},"value":{"type":"object","description":"Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time."}},"description":"Mappings for the callback method"},"AttributeConstraintType":{"type":"string","description":"Attribute Constraint Type","enum":["regExp","range","dateTime"]},"AttributeContentType":{"type":"string","description":"Type of the attribute content. ","enum":["string","text","integer","boolean","float","date","time","datetime","secret","file","credential","codeblock","object"]},"AttributeType":{"type":"string","description":"Type of the attribute. It is optional and must be set only if special behaviour is needed.","enum":["data","group","info","meta","custom"]},"AttributeValueTarget":{"type":"string","description":"Set of targets for propagating value.","enum":["pathVariable","requestParameter","body"]},"BaseAttributeConstraint":{"required":["data","type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"type":"object","description":"Attribute Constraint Data"}},"description":"Optional regular expressions and constraints used for validating the Attribute content","oneOf":[{"$ref":"#/components/schemas/RegexpAttributeConstraint"},{"$ref":"#/components/schemas/RangeAttributeConstraint"},{"$ref":"#/components/schemas/DateTimeAttributeConstraint"}]},"BaseAttributeContentDto":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"object","description":"Content Data"}},"description":"Base Attribute content definition","oneOf":[{"$ref":"#/components/schemas/BooleanAttributeContent"},{"$ref":"#/components/schemas/CodeBlockAttributeContent"},{"$ref":"#/components/schemas/CredentialAttributeContent"},{"$ref":"#/components/schemas/DateAttributeContent"},{"$ref":"#/components/schemas/DateTimeAttributeContent"},{"$ref":"#/components/schemas/FileAttributeContent"},{"$ref":"#/components/schemas/FloatAttributeContent"},{"$ref":"#/components/schemas/IntegerAttributeContent"},{"$ref":"#/components/schemas/ObjectAttributeContent"},{"$ref":"#/components/schemas/SecretAttributeContent"},{"$ref":"#/components/schemas/StringAttributeContent"},{"$ref":"#/components/schemas/TextAttributeContent"},{"$ref":"#/components/schemas/TimeAttributeContent"}]},"BooleanAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"boolean","description":"Boolean attribute value"}}},"CodeBlockAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/CodeBlockAttributeContentData"}}},"CodeBlockAttributeContentData":{"required":["code","language"],"type":"object","properties":{"language":{"$ref":"#/components/schemas/ProgrammingLanguageEnum"},"code":{"type":"string","description":"Block of the code in Base64. Formatting of the code is specified by variable language"}},"description":"CodeBlock attribute content data"},"CredentialAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/CredentialAttributeContentData"}}},"CredentialAttributeContentData":{"required":["attributes","kind","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"kind":{"type":"string","description":"Credential Kind","example":"SoftKeyStore, Basic, ApiKey, etc"},"attributes":{"type":"array","description":"List of Credential Attributes","items":{"$ref":"#/components/schemas/DataAttribute"}}},"description":"Credential attribute content data"},"DataAttribute":{"required":["contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/DataAttributeProperties"},"constraints":{"type":"array","description":"Optional regular expressions and constraints used for validating the Attribute content","items":{"$ref":"#/components/schemas/BaseAttributeConstraint"}},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"}},"description":"Data attribute allows to store and transfer dynamic data. Its content can be edited and send in requests to store."},"DataAttributeProperties":{"required":["label","list","multiSelect","readOnly","required","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false}},"description":"Properties of the Attributes"},"DateAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Date attribute value in format yyyy-MM-dd","format":"date"}}},"DateTimeAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"$ref":"#/components/schemas/DateTimeAttributeConstraintData"}}},"DateTimeAttributeConstraintData":{"type":"object","properties":{"from":{"type":"string","description":"Start of the datetime for validation","format":"date-time"},"to":{"type":"string","description":"End of the datetime for validation","format":"date-time"}},"description":"DateTime Range Attribute Constraint Data"},"DateTimeAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"DateTime attribute value in format yyyy-MM-ddTHH:mm:ss.SSSXXX","format":"date-time"}}},"EntityInstanceUpdateRequestDto":{"required":["attributes"],"type":"object","properties":{"attributes":{"type":"array","description":"List of Entity instance Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"FileAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/FileAttributeContentData"}}},"FileAttributeContentData":{"required":["content","fileName","mimeType"],"type":"object","properties":{"content":{"type":"string","description":"File content"},"fileName":{"type":"string","description":"Name of the file"},"mimeType":{"type":"string","description":"Type of the file uploaded"}},"description":"File attribute content data"},"FloatAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"number","description":"Float attribute value","format":"float"}}},"IntegerAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"integer","description":"Integer attribute value","format":"int32"}}},"ObjectAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"object","description":"Object attribute content data"}}},"ProgrammingLanguageEnum":{"type":"string","description":"Definition of programming languages used for code","example":"JAVA, PHP, C, etc","enum":["apacheconf","bash","basic","c","csharp","cpp","css","docker","fsharp","gherkin","git","go","graphql","html","http","ini","java","javascript","json","kotlin","latex","lisp","makefile","markdown","matlab","nginx","objectivec","perl","php","powershell","properties","python","ruby","rust","smalltalk","sql","typescript","vbnet","xquery","xml","yaml"]},"RangeAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"$ref":"#/components/schemas/RangeAttributeConstraintData"}}},"RangeAttributeConstraintData":{"type":"object","properties":{"from":{"type":"integer","description":"Start of the range for validation","format":"int32"},"to":{"type":"integer","description":"End of the range for validation","format":"int32"}},"description":"Integer Range Attribute Constraint Data"},"RegexpAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"type":"string","description":"Regular Expression Attribute Constraint Data"}}},"RequestAttributeDto":{"required":["content","name"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}}},"description":"Request attribute to send attribute content for object"},"SecretAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/SecretAttributeContentData"}}},"SecretAttributeContentData":{"type":"object","properties":{"secret":{"type":"string","description":"Secret attribute data"},"protectionLevel":{"type":"string","description":"Level of protection of the data"}},"description":"Secret attribute content data"},"StringAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"String attribute value"}}},"TextAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Text attribute value"}}},"TimeAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Time attribute value in format HH:mm:ss"}}},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"EntityInstanceDto":{"required":["attributes","connectorName","connectorUuid","kind","name","status","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"attributes":{"type":"array","description":"List of Entity instance Attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}},"status":{"type":"string","description":"Status of Entity instance"},"connectorUuid":{"type":"string","description":"UUID of Entity Provider"},"connectorName":{"type":"string","description":"Name of Entity Provider"},"kind":{"type":"string","description":"Entity instance Kind","example":"Keystore, etc."}}},"ResponseAttributeDto":{"required":["contentType","label","name","type"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"label":{"type":"string","description":"Label of the the Attribute","example":"Attribute Name"},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}}},"description":"Response attribute with content for object it belongs to"},"EntityInstanceRequestDto":{"required":["attributes","connectorUuid","kind","name"],"type":"object","properties":{"name":{"type":"string","description":"Entity instance name"},"attributes":{"type":"array","description":"List of Entity instance Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}},"connectorUuid":{"type":"string","description":"UUID of Entity Provider"},"kind":{"type":"string","description":"Entity instance Kind","example":"Keystore, etc."}}},"UuidDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier"}}},"SearchCondition":{"type":"string","description":"Condition for the search","enum":["EQUALS","NOT_EQUALS","GREATER","GREATER_OR_EQUAL","LESSER","LESSER_OR_EQUAL","CONTAINS","NOT_CONTAINS","STARTS_WITH","ENDS_WITH","EMPTY","NOT_EMPTY","SUCCESS","FAILED","UNKNOWN","NOT_CHECKED"]},"SearchFilterRequestDto":{"required":["condition","fieldIdentifier","searchGroup"],"type":"object","properties":{"searchGroup":{"$ref":"#/components/schemas/SearchGroup"},"fieldIdentifier":{"type":"string","description":"Field to search"},"condition":{"$ref":"#/components/schemas/SearchCondition"},"value":{"type":"object","description":"Value to match"}},"description":"Certificate filter input"},"SearchGroup":{"type":"string","description":"Group to search","enum":["meta","custom","property"]},"SearchRequestDto":{"type":"object","properties":{"filters":{"type":"array","description":"Certificate filter input","items":{"$ref":"#/components/schemas/SearchFilterRequestDto"}},"itemsPerPage":{"maximum":1000,"type":"integer","description":"Number of entries per page","format":"int32","default":10},"pageNumber":{"type":"integer","description":"Page number for the request","format":"int32","default":1}}},"EntityInstanceResponseDto":{"required":["entities","itemsPerPage","pageNumber","totalItems","totalPages"],"type":"object","properties":{"entities":{"type":"array","description":"Entities","items":{"$ref":"#/components/schemas/EntityInstanceDto"}},"itemsPerPage":{"type":"integer","description":"Number of entries per page","format":"int32"},"pageNumber":{"type":"integer","description":"Page number for the request","format":"int32"},"totalPages":{"type":"integer","description":"Number of pages available","format":"int32"},"totalItems":{"type":"integer","description":"Number of items available","format":"int64"}}},"BaseAttributeDto":{"required":["name","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"type":{"$ref":"#/components/schemas/AttributeType"},"content":{"type":"object","description":"Content of the Attribute"}},"description":"Base Attribute definition","discriminator":{"propertyName":"type","mapping":{"data":"#/components/schemas/DataAttribute","info":"#/components/schemas/InfoAttribute","group":"#/components/schemas/GroupAttribute","meta":"#/components/schemas/MetadataAttribute","custom":"#/components/schemas/CustomAttribute"}},"oneOf":[{"$ref":"#/components/schemas/DataAttribute"},{"$ref":"#/components/schemas/InfoAttribute"},{"$ref":"#/components/schemas/GroupAttribute"},{"$ref":"#/components/schemas/MetadataAttribute"},{"$ref":"#/components/schemas/CustomAttribute"}]},"CustomAttribute":{"required":["contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/CustomAttributeProperties"}},"description":"Custom attribute allows to store and transfer dynamic data. Its content can be edited and send in requests to store."},"CustomAttributeProperties":{"required":["label","list","multiSelect","readOnly","required","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false}},"description":"Properties of the Attributes"},"GroupAttribute":{"required":["name","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"List of all different types of attributes","items":{"$ref":"#/components/schemas/BaseAttributeDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"}},"description":"Group attribute and its content represents dynamic list of additional attributes retrieved by callback. Its content can not be edited and is not send in requests to store."},"InfoAttribute":{"required":["content","contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/InfoAttributeProperties"}},"description":"Info attribute contains content that is for information purpose or represents additional information for object (metadata). Its content can not be edited and is not send in requests to store."},"InfoAttributeProperties":{"required":["label","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"}},"description":"Properties of the Attributes"},"MetadataAttribute":{"required":["content","contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/MetadataAttributeProperties"}},"description":"Info attribute contains content that is for metadata. Its content can not be edited and is not send in requests to store."},"MetadataAttributeProperties":{"required":["label","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"},"global":{"type":"boolean","description":"Boolean determining if the Metadata is a global metadata.","default":false}},"description":"Properties of the Attributes"},"PlatformEnum":{"type":"string","description":"Platform enum of the field values","enum":["Resource","SearchCondition","SearchableFieldType","SearchGroup","SettingsSection","AuthType","HealthStatus","ConnectorStatus","FunctionGroupCode","CertificateType","CertificateStatus","CertificateValidationStatus","DiscoveryStatus","KeyAlgorithm","KeyFormat","KeyState","KeyType","KeyUsage","KeyRequestType","KeyCompromiseReason","TokenInstanceStatus","DigestAlgorithm","RsaSignatureScheme","RsaEncryptionScheme","ComplianceStatus","ComplianceRuleStatus","AccountStatus","AttributeType","AttributeContentType","AttributeConstraintType","AttributeValueTarget","ProgrammingLanguageEnum"]},"SearchFieldDataByGroupDto":{"required":["searchGroup"],"type":"object","properties":{"searchGroup":{"$ref":"#/components/schemas/SearchGroup"},"searchFieldData":{"type":"array","description":"List of search fields for specified search group","items":{"$ref":"#/components/schemas/SearchFieldDataDto"}}}},"SearchFieldDataDto":{"required":["conditions","fieldIdentifier","fieldLabel","type"],"type":"object","properties":{"fieldIdentifier":{"type":"string","description":"Identifier of field to search"},"fieldLabel":{"type":"string","description":"Label for the field"},"type":{"$ref":"#/components/schemas/SearchableFieldType"},"conditions":{"type":"array","description":"List of available conditions for the field","items":{"$ref":"#/components/schemas/SearchCondition"}},"platformEnum":{"$ref":"#/components/schemas/PlatformEnum"},"value":{"type":"object","description":"Available values for the field"},"multiValue":{"type":"boolean","description":"Multivalue flag. true = yes, false = no"}},"description":"List of search fields for specified search group"},"SearchableFieldType":{"type":"string","description":"Type of the field","enum":["string","number","list","date","datetime","boolean"]}}}}}')}}]);