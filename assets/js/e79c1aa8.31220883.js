"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9594],{17955:e=>{e.exports=JSON.parse('{"url":"https://api.czertainly.com/2.12.0/doc-openapi-core-group.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Group API","description":"REST API for managing Group in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"version":"2.12.0","x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Certificate & Key Group","description":"Group API"}],"paths":{"/v1/groups/{uuid}":{"get":{"tags":["Certificate & Key Group"],"summary":"Group details","operationId":"getGroup","parameters":[{"name":"uuid","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Group details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GroupDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"put":{"tags":["Certificate & Key Group"],"summary":"Edit Group","operationId":"editGroup","parameters":[{"name":"uuid","in":"path","description":"Group UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/GroupRequestDto"}}},"required":true},"responses":{"200":{"description":"Group updated","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GroupDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"delete":{"tags":["Certificate & Key Group"],"summary":"Delete Group","operationId":"deleteGroup","parameters":[{"name":"uuid","in":"path","description":"Group UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Group deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/groups":{"get":{"tags":["Certificate & Key Group"],"summary":"List Groups","operationId":"listGroups","responses":{"200":{"description":"list of available Group","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/GroupDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"post":{"tags":["Certificate & Key Group"],"summary":"Create Group","operationId":"createGroup","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/GroupRequestDto"}}},"required":true},"responses":{"201":{"description":"Group created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"delete":{"tags":["Certificate & Key Group"],"summary":"Delete multiple Groups","operationId":"bulkDeleteGroup","requestBody":{"description":"Group UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"204":{"description":"Groups deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationServiceExceptionDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}}},"components":{"schemas":{"AttributeCallback":{"required":["callbackContext","callbackMethod","mappings"],"type":"object","properties":{"callbackContext":{"type":"string","description":"Context part of callback URL"},"callbackMethod":{"type":"string","description":"HTTP method of the callback"},"mappings":{"uniqueItems":true,"type":"array","description":"Mappings for the callback method","items":{"$ref":"#/components/schemas/AttributeCallbackMapping"}}},"description":"Optional definition of callback for getting the content of the Attribute based on the action"},"AttributeCallbackMapping":{"required":["targets","to"],"type":"object","properties":{"from":{"type":"string","description":"Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set."},"attributeType":{"$ref":"#/components/schemas/AttributeType"},"attributeContentType":{"$ref":"#/components/schemas/AttributeContentType"},"to":{"type":"string","description":"Name of the path variable or request param or body field which is to be used to assign value of attribute"},"targets":{"uniqueItems":true,"type":"array","description":"Set of targets for propagating value.","items":{"$ref":"#/components/schemas/AttributeValueTarget"}},"value":{"type":"object","description":"Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time."}},"description":"Mappings for the callback method"},"AttributeConstraintType":{"type":"string","description":"Attribute Constraint Type","enum":["regExp","range","dateTime"]},"AttributeContentType":{"type":"string","description":"Type of the attribute content. ","enum":["string","text","integer","boolean","float","date","time","datetime","secret","file","credential","codeblock","object"]},"AttributeType":{"type":"string","description":"Type of the attribute. It is optional and must be set only if special behaviour is needed.","enum":["data","group","info","meta","custom"]},"AttributeValueTarget":{"type":"string","description":"Set of targets for propagating value.","enum":["pathVariable","requestParameter","body"]},"BaseAttributeConstraint":{"required":["data","type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"type":"object","description":"Attribute Constraint Data"}},"description":"Optional regular expressions and constraints used for validating the Attribute content","oneOf":[{"$ref":"#/components/schemas/RegexpAttributeConstraint"},{"$ref":"#/components/schemas/RangeAttributeConstraint"},{"$ref":"#/components/schemas/DateTimeAttributeConstraint"}]},"BaseAttributeContentDto":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"object","description":"Content Data"}},"description":"Base Attribute content definition","oneOf":[{"$ref":"#/components/schemas/BooleanAttributeContent"},{"$ref":"#/components/schemas/CodeBlockAttributeContent"},{"$ref":"#/components/schemas/CredentialAttributeContent"},{"$ref":"#/components/schemas/DateAttributeContent"},{"$ref":"#/components/schemas/DateTimeAttributeContent"},{"$ref":"#/components/schemas/FileAttributeContent"},{"$ref":"#/components/schemas/FloatAttributeContent"},{"$ref":"#/components/schemas/IntegerAttributeContent"},{"$ref":"#/components/schemas/ObjectAttributeContent"},{"$ref":"#/components/schemas/SecretAttributeContent"},{"$ref":"#/components/schemas/StringAttributeContent"},{"$ref":"#/components/schemas/TextAttributeContent"},{"$ref":"#/components/schemas/TimeAttributeContent"}]},"BooleanAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"boolean","description":"Boolean attribute value"}}},"CodeBlockAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/CodeBlockAttributeContentData"}}},"CodeBlockAttributeContentData":{"required":["code","language"],"type":"object","properties":{"language":{"$ref":"#/components/schemas/ProgrammingLanguageEnum"},"code":{"type":"string","description":"Block of the code in Base64. Formatting of the code is specified by variable language"}},"description":"CodeBlock attribute content data"},"CredentialAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/CredentialAttributeContentData"}}},"CredentialAttributeContentData":{"required":["attributes","kind","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"kind":{"type":"string","description":"Credential Kind","example":"SoftKeyStore, Basic, ApiKey, etc"},"attributes":{"type":"array","description":"List of Credential Attributes","items":{"$ref":"#/components/schemas/DataAttribute"}}},"description":"Credential attribute content data"},"DataAttribute":{"required":["contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/DataAttributeProperties"},"constraints":{"type":"array","description":"Optional regular expressions and constraints used for validating the Attribute content","items":{"$ref":"#/components/schemas/BaseAttributeConstraint"}},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"}},"description":"Data attribute allows to store and transfer dynamic data. Its content can be edited and send in requests to store."},"DataAttributeProperties":{"required":["label","list","multiSelect","readOnly","required","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false}},"description":"Properties of the Attributes"},"DateAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Date attribute value in format yyyy-MM-dd","format":"date"}}},"DateTimeAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"$ref":"#/components/schemas/DateTimeAttributeConstraintData"}}},"DateTimeAttributeConstraintData":{"type":"object","properties":{"from":{"type":"string","description":"Start of the datetime for validation","format":"date-time"},"to":{"type":"string","description":"End of the datetime for validation","format":"date-time"}},"description":"DateTime Range Attribute Constraint Data"},"DateTimeAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"DateTime attribute value in format yyyy-MM-ddTHH:mm:ss.SSSXXX","format":"date-time"}}},"FileAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/FileAttributeContentData"}}},"FileAttributeContentData":{"required":["content","fileName","mimeType"],"type":"object","properties":{"content":{"type":"string","description":"File content"},"fileName":{"type":"string","description":"Name of the file"},"mimeType":{"type":"string","description":"Type of the file uploaded"}},"description":"File attribute content data"},"FloatAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"number","description":"Float attribute value","format":"float"}}},"GroupRequestDto":{"required":["name"],"type":"object","properties":{"name":{"type":"string","description":"Name of the Group"},"description":{"type":"string","description":"Description of the Group"},"email":{"type":"string","description":"Group contact email"},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"IntegerAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"integer","description":"Integer attribute value","format":"int32"}}},"ObjectAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"object","description":"Object attribute content data"}}},"ProgrammingLanguageEnum":{"type":"string","description":"Definition of programming languages used for code","example":"JAVA, PHP, C, etc","enum":["apacheconf","bash","basic","c","csharp","cpp","css","docker","fsharp","gherkin","git","go","graphql","html","http","ini","java","javascript","json","kotlin","latex","lisp","makefile","markdown","matlab","nginx","objectivec","perl","php","powershell","properties","python","ruby","rust","smalltalk","sql","typescript","vbnet","xquery","xml","yaml"]},"RangeAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"$ref":"#/components/schemas/RangeAttributeConstraintData"}}},"RangeAttributeConstraintData":{"type":"object","properties":{"from":{"type":"integer","description":"Start of the range for validation","format":"int32"},"to":{"type":"integer","description":"End of the range for validation","format":"int32"}},"description":"Integer Range Attribute Constraint Data"},"RegexpAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"type":"string","description":"Regular Expression Attribute Constraint Data"}}},"RequestAttributeDto":{"required":["content","contentType","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}}},"description":"Request attribute to send attribute content for object"},"SecretAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/SecretAttributeContentData"}}},"SecretAttributeContentData":{"type":"object","properties":{"secret":{"type":"string","description":"Secret attribute data"},"protectionLevel":{"type":"string","description":"Level of protection of the data"}},"description":"Secret attribute content data"},"StringAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"String attribute value"}}},"TextAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Text attribute value"}}},"TimeAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Time attribute value in format HH:mm:ss"}}},"AuthenticationServiceExceptionDto":{"required":["code","message","statusCode"],"type":"object","properties":{"statusCode":{"type":"integer","description":"Status code of the HTTP Request","format":"int32"},"code":{"type":"string","description":"Code of the result"},"message":{"type":"string","description":"Exception message"}}},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"GroupDto":{"required":["name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the Group"},"email":{"type":"string","description":"Group contact email"},"customAttributes":{"type":"array","description":"List of Custom Attributes","items":{"$ref":"#/components/schemas/ResponseAttributeDto"}}}},"ResponseAttributeDto":{"required":["contentType","label","name","type"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"label":{"type":"string","description":"Label of the the Attribute","example":"Attribute Name"},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}}},"description":"Response attribute with content for object it belongs to"},"UuidDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier"}}}}}}}')}}]);