"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4543],{96606:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/2.7.1/doc-openapi-connector-credential-provider.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Credential Provider API","description":"REST API for implementations of custom Credential Provider","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"version":"2.7.1","x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Connector Info","description":"Connector Information API. Each connector may have multiple functions represented by FunctionGroupCode. For each FunctionGroupCode there is a list of implemented end points. These endpoints must be according the specified interface, this is validated by the core. You can also implement helper end points that are used for callbacks and other relevant operations specific to implementation."},{"name":"Health check","description":"Connector Health check API. Connector returns own status and in some cases can return status of services on which it depends like database, HSM and so on."},{"name":"Connector Attributes","description":"Connector Attributes API. Provides information about supported Attributes of the connector. Attributes are specific to implementation and gives information about the data that can be exchanged and properly parsed by the connector. Part of this API is validation of the Attributes."}],"paths":{"/v1/{functionalGroup}/{kind}/attributes/validate":{"post":{"tags":["Connector Attributes"],"summary":"Validate Attributes","operationId":"validateAttributes","parameters":[{"name":"kind","in":"path","description":"Kind","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"required":true},"responses":{"200":{"description":"Attribute validation completed"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Attribute validation failed","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}},"/v1":{"get":{"tags":["Connector Info"],"summary":"List supported functions of the connector","description":"Returns map of functional code and implemented end points","operationId":"listSupportedFunctions","responses":{"200":{"description":"Functions found","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/InfoResponse"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/{functionalGroup}/{kind}/attributes":{"get":{"tags":["Connector Attributes"],"summary":"List available Attributes","operationId":"listAttributeDefinitions","parameters":[{"name":"kind","in":"path","description":"Kind","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Attributes retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BaseAttributeDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/health":{"get":{"tags":["Health check"],"summary":"Health check","operationId":"checkHealth","responses":{"200":{"description":"Health check completed successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HealthDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}}},"components":{"schemas":{"AttributeCallback":{"required":["callbackContext","callbackMethod","mappings"],"type":"object","properties":{"callbackContext":{"type":"string","description":"Context part of callback URL"},"callbackMethod":{"type":"string","description":"HTTP method of the callback"},"mappings":{"uniqueItems":true,"type":"array","description":"Mappings for the callback method","items":{"$ref":"#/components/schemas/AttributeCallbackMapping"}}},"description":"Optional definition of callback for getting the content of the Attribute based on the action"},"AttributeCallbackMapping":{"required":["targets","to"],"type":"object","properties":{"from":{"type":"string","description":"Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set."},"attributeType":{"$ref":"#/components/schemas/AttributeType"},"attributeContentType":{"$ref":"#/components/schemas/AttributeContentType"},"to":{"type":"string","description":"Name of the path variable or request param or body field which is to be used to assign value of attribute"},"targets":{"uniqueItems":true,"type":"array","description":"Set of targets for propagating value.","items":{"$ref":"#/components/schemas/AttributeValueTarget"}},"value":{"type":"object","description":"Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time."}},"description":"Mappings for the callback method"},"AttributeConstraintType":{"type":"string","description":"Attribute Constraint Type","enum":["regExp","range","dateTime"]},"AttributeContentType":{"type":"string","description":"Type of the attribute content. ","enum":["string","integer","secret","file","boolean","credential","date","float","object","text","time","datetime","codeblock"]},"AttributeType":{"type":"string","description":"Type of the attribute. It is optional and must be set only if special behaviour is needed.","enum":["data","group","info","meta","custom"]},"AttributeValueTarget":{"type":"string","description":"Set of targets for propagating value.","enum":["pathVariable","requestParameter","body"]},"BaseAttributeConstraint":{"required":["data","type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"type":"object","description":"Attribute Constraint Data"}},"description":"Optional regular expressions and constraints used for validating the Attribute content","oneOf":[{"$ref":"#/components/schemas/RegexpAttributeConstraint"},{"$ref":"#/components/schemas/RangeAttributeConstraint"},{"$ref":"#/components/schemas/DateTimeAttributeConstraint"}]},"BaseAttributeContentDto":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"object","description":"Content Data"}},"description":"Base Attribute content definition","oneOf":[{"$ref":"#/components/schemas/BooleanAttributeContent"},{"$ref":"#/components/schemas/CodeBlockAttributeContent"},{"$ref":"#/components/schemas/CredentialAttributeContent"},{"$ref":"#/components/schemas/DateAttributeContent"},{"$ref":"#/components/schemas/DateTimeAttributeContent"},{"$ref":"#/components/schemas/FileAttributeContent"},{"$ref":"#/components/schemas/FloatAttributeContent"},{"$ref":"#/components/schemas/IntegerAttributeContent"},{"$ref":"#/components/schemas/ObjectAttributeContent"},{"$ref":"#/components/schemas/SecretAttributeContent"},{"$ref":"#/components/schemas/StringAttributeContent"},{"$ref":"#/components/schemas/TextAttributeContent"},{"$ref":"#/components/schemas/TimeAttributeContent"}]},"BooleanAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"boolean","description":"Boolean attribute value"}}},"CodeBlockAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/CodeBlockAttributeContentData"}}},"CodeBlockAttributeContentData":{"required":["code","language"],"type":"object","properties":{"language":{"$ref":"#/components/schemas/ProgrammingLanguageEnum"},"code":{"type":"string","description":"Block of the code in Base64. Formatting of the code is specified by variable language"}},"description":"CodeBlock attribute content data"},"CredentialAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/CredentialAttributeContentData"}}},"CredentialAttributeContentData":{"required":["attributes","kind","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"kind":{"type":"string","description":"Credential Kind","example":"SoftKeyStore, Basic, ApiKey, etc"},"attributes":{"type":"array","description":"List of Credential Attributes","items":{"$ref":"#/components/schemas/DataAttribute"}}},"description":"Credential attribute content data"},"DataAttribute":{"required":["contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/DataAttributeProperties"},"constraints":{"type":"array","description":"Optional regular expressions and constraints used for validating the Attribute content","items":{"$ref":"#/components/schemas/BaseAttributeConstraint"}},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"}},"description":"Data attribute allows to store and transfer dynamic data. Its content can be edited and send in requests to store."},"DataAttributeProperties":{"required":["label","list","multiSelect","readOnly","required","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false}},"description":"Properties of the Attributes"},"DateAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Date attribute value in format yyyy-MM-dd","format":"date"}}},"DateTimeAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"$ref":"#/components/schemas/DateTimeAttributeConstraintData"}}},"DateTimeAttributeConstraintData":{"type":"object","properties":{"from":{"type":"string","description":"Start of the datetime for validation","format":"date-time"},"to":{"type":"string","description":"End of the datetime for validation","format":"date-time"}},"description":"DateTime Range Attribute Constraint Data"},"DateTimeAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"DateTime attribute value in format yyyy-MM-ddTHH:mm:ss.SSSXXX","format":"date-time"}}},"FileAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/FileAttributeContentData"}}},"FileAttributeContentData":{"required":["content","fileName","mimeType"],"type":"object","properties":{"content":{"type":"string","description":"File content"},"fileName":{"type":"string","description":"Name of the file"},"mimeType":{"type":"string","description":"Type of the file uploaded"}},"description":"File attribute content data"},"FloatAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"number","description":"Float attribute value","format":"float"}}},"IntegerAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"integer","description":"Integer attribute value","format":"int32"}}},"ObjectAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"object","description":"Object attribute content data"}}},"ProgrammingLanguageEnum":{"type":"string","description":"Definition of programming languages used for code","example":"JAVA, PHP, C, etc","enum":["css","clike","javascript","abap","actionscript","ada","apacheconf","apl","applescript","arduino","arff","asciidoc","asm6502","aspnet","autohotkey","autoit","bash","basic","batch","bison","brainfuck","bro","c","csharp","cpp","coffeescript","clojure","crystal","csp","css-extras","d","dart","diff","django","docker","eiffel","elixir","elm","erb","erlang","fsharp","flow","fortran","gedcom","gherkin","git","glsl","gml","go","graphql","groovy","haml","handlebars","haskell","haxe","http","hpkp","hsts","ichigojam","icon","inform7","ini","io","j","java","jolie","json","julia","keyman","kotlin","latex","less","liquid","lisp","livescript","lolcode","lua","makefile","markdown","markup-templating","matlab","mel","mizar","monkey","n4js","nasm","nginx","nim","nix","nsis","objectivec","ocaml","opencl","oz","parigp","parser","pascal","perl","php","php-extras","plsql","powershell","processing","prolog","properties","protobuf","pug","puppet","pure","python","q","qore","r","jsx","tsx","renpy","reason","rest","rip","roboconf","ruby","rust","sas","sass","scss","scala","scheme","smalltalk","smarty","sql","soy","stylus","swift","tap","tcl","textile","tt2","twig","typescript","vbnet","velocity","verilog","vhdl","vim","visual-basic","wasm","wiki","xeora","xojo","xquery","yaml"]},"RangeAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"$ref":"#/components/schemas/RangeAttributeConstraintData"}}},"RangeAttributeConstraintData":{"type":"object","properties":{"from":{"type":"integer","description":"Start of the range for validation","format":"int32"},"to":{"type":"integer","description":"End of the range for validation","format":"int32"}},"description":"Integer Range Attribute Constraint Data"},"RegexpAttributeConstraint":{"required":["type"],"type":"object","properties":{"description":{"type":"string","description":"Description of the constraint"},"errorMessage":{"type":"string","description":"Error message to be displayed for wrong data"},"type":{"$ref":"#/components/schemas/AttributeConstraintType"},"data":{"type":"string","description":"Regular Expression Attribute Constraint Data"}}},"RequestAttributeDto":{"required":["content","name"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}}},"description":"Request attribute to send attribute content for object"},"SecretAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"$ref":"#/components/schemas/SecretAttributeContentData"}}},"SecretAttributeContentData":{"type":"object","properties":{"secret":{"type":"string","description":"Secret attribute data"},"protectionLevel":{"type":"string","description":"Level of protection of the data"}},"description":"Secret attribute content data"},"StringAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"String attribute value"}}},"TextAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Text attribute value"}}},"TimeAttributeContent":{"required":["data"],"type":"object","properties":{"reference":{"type":"string","description":"Content Reference"},"data":{"type":"string","description":"Time attribute value in format HH:mm:ss"}}},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"EndpointDto":{"required":["context","method","name","required","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"context":{"type":"string","description":"Context of the Endpoint","example":"/v1"},"method":{"type":"string","description":"Method to be used for the Endpoint","example":"POST"},"required":{"type":"boolean","description":"True if the Endpoint is required for implementation","example":true}},"description":"List of end points related to functional group"},"FunctionGroupCode":{"type":"string","description":"Enumerated code of functional group","enum":["credentialProvider","legacyAuthorityProvider","authorityProvider","discoveryProvider","entityProvider","complianceProvider","cryptographyProvider"]},"InfoResponse":{"required":["endPoints","functionGroupCode","kinds"],"type":"object","properties":{"functionGroupCode":{"$ref":"#/components/schemas/FunctionGroupCode"},"kinds":{"type":"array","description":"List of supported functional group kinds","example":["SoftKeyStore","Basic","ApiKey"],"items":{"type":"string","description":"List of supported functional group kinds","example":"[\\"SoftKeyStore\\",\\"Basic\\",\\"ApiKey\\"]"}},"endPoints":{"type":"array","description":"List of end points related to functional group","items":{"$ref":"#/components/schemas/EndpointDto"}}}},"BaseAttributeDto":{"required":["name","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"type":{"$ref":"#/components/schemas/AttributeType"},"content":{"type":"object","description":"Content of the Attribute"}},"description":"Base Attribute definition","discriminator":{"propertyName":"type","mapping":{"data":"#/components/schemas/DataAttribute","info":"#/components/schemas/InfoAttribute","group":"#/components/schemas/GroupAttribute","meta":"#/components/schemas/MetadataAttribute","custom":"#/components/schemas/CustomAttribute"}},"oneOf":[{"$ref":"#/components/schemas/DataAttribute"},{"$ref":"#/components/schemas/InfoAttribute"},{"$ref":"#/components/schemas/GroupAttribute"},{"$ref":"#/components/schemas/MetadataAttribute"},{"$ref":"#/components/schemas/CustomAttribute"}]},"CustomAttribute":{"required":["contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/CustomAttributeProperties"}},"description":"Custom attribute allows to store and transfer dynamic data. Its content can be edited and send in requests to store."},"CustomAttributeProperties":{"required":["label","list","multiSelect","readOnly","required","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false}},"description":"Properties of the Attributes"},"GroupAttribute":{"required":["name","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"List of all different types of attributes","items":{"$ref":"#/components/schemas/BaseAttributeDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"}},"description":"Group attribute and its content represents dynamic list of additional attributes retrieved by callback. Its content can not be edited and is not send in requests to store."},"InfoAttribute":{"required":["content","contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/InfoAttributeProperties"}},"description":"Info attribute contains content that is for information purpose or represents additional information for object (metadata). Its content can not be edited and is not send in requests to store."},"InfoAttributeProperties":{"required":["label","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"}},"description":"Properties of the Attributes"},"MetadataAttribute":{"required":["content","contentType","name","properties","type","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"content":{"type":"array","description":"Content of the Attribute","items":{"$ref":"#/components/schemas/BaseAttributeContentDto"}},"type":{"$ref":"#/components/schemas/AttributeType"},"contentType":{"$ref":"#/components/schemas/AttributeContentType"},"properties":{"$ref":"#/components/schemas/MetadataAttributeProperties"}},"description":"Info attribute contains content that is for metadata. Its content can not be edited and is not send in requests to store."},"MetadataAttributeProperties":{"required":["label","visible"],"type":"object","properties":{"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"},"global":{"type":"boolean","description":"Boolean determining if the Metadata is a global metadata.","default":false}},"description":"Properties of the Attributes"},"HealthDto":{"required":["status"],"type":"object","properties":{"status":{"$ref":"#/components/schemas/HealthStatus"},"description":{"type":"string","description":"Detailed status description"},"parts":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/HealthDto"},"description":"Nested status of services"}}},"HealthStatus":{"type":"string","description":"Current connector operational status","enum":["ok","nok","unknown"]}}}}}')}}]);