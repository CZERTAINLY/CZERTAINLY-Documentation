"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7381],{84492:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-connector-discovery-provider.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Discovery Provider API","description":"REST API for implementations of custom Discovery Provider","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Info API","description":"Connector Information API. Each connector may have multiple functions represented by FunctionGroupCode. For each FunctionGroupCode there is a list of implemented end points. These endpoints must be according the specified interface, this is validated by the core. You can also implement helper end points that are used for callbacks and other relevant operations specific to implementation."},{"name":"Discovery API","description":"Discovery Provider API. Used to schedule and establish certificate discovery process. Once the discovery process is started, the progress and the history of the certificate discovery can be requested. Discovery provides information about discovered certificates and meta data that are specific to implementation of the discovery provider."},{"name":"Attributes API","description":"Connector Attributes API. Provides information about supported Attributes of the connector. Attributes are specific to implementation and gives information about the data that can be exchanged and properly parsed by the connector. Part of this API is validation of the Attributes."},{"name":"Health check API","description":"Connector Health check API. Connector returns own status and in some cases can return status of services on which it depends like database, HSM and so on."}],"paths":{"/v1/{functionalGroup}/{kind}/attributes/validate":{"post":{"tags":["Attributes API"],"summary":"Validate Attributes","operationId":"validateAttributes","parameters":[{"name":"kind","in":"path","description":"Kind","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"required":true},"responses":{"200":{"description":"Attribute validation completed"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Attribute validation failed","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}},"/v1/discoveryProvider/discover/{uuid}":{"post":{"tags":["Discovery API"],"summary":"Get Discovery status and result","operationId":"getDiscovery","parameters":[{"name":"uuid","in":"path","description":"Discovery UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DiscoveryDataRequestDto"}}},"required":true},"responses":{"200":{"description":"Discovery details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/DiscoveryProviderDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}},"delete":{"tags":["Discovery API"],"summary":"Delete Discovery","operationId":"deleteDiscovery","parameters":[{"name":"uuid","in":"path","description":"Discovery UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Discovery information deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/discoveryProvider/discover":{"post":{"tags":["Discovery API"],"summary":"Initiate certificate Discovery","operationId":"discoverCertificate","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DiscoveryRequestDto"}}},"required":true},"responses":{"200":{"description":"Discovery initiated","content":{"application/json":{"schema":{"$ref":"#/components/schemas/DiscoveryProviderDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"}}}},"/v1/{functionalGroup}/{kind}/attributes":{"get":{"tags":["Attributes API"],"summary":"List available Attributes","operationId":"listAttributeDefinitions","parameters":[{"name":"kind","in":"path","description":"Kind","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Attributes retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/AttributeDefinition"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1/health":{"get":{"tags":["Health check API"],"summary":"Health check","operationId":"checkHealth","responses":{"200":{"description":"Health check completed successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HealthDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}},"/v1":{"get":{"tags":["Info API"],"summary":"List supported functions of the connector","description":"Returns map of functional code and implemented end points","operationId":"listSupportedFunctions","responses":{"200":{"description":"Functions found","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/InfoResponse"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"}}}}},"components":{"schemas":{"RequestAttributeDto":{"required":["content","name"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"}}},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"DiscoveryDataRequestDto":{"required":["endIndex","kind","name","startIndex"],"type":"object","properties":{"name":{"type":"string","description":"Name of the Discovery"},"kind":{"type":"string","description":"Discovery Kind"},"startIndex":{"type":"integer","description":"Starting index of the Certificate","format":"int32"},"endIndex":{"type":"integer","description":"Last index of the Certificate","format":"int32"}}},"DiscoveryProviderCertificateDataDto":{"required":["base64Content","meta","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Certificate UUID"},"base64Content":{"type":"string","description":"Base64 encoded Certificate content"},"meta":{"type":"object","additionalProperties":{"type":"object","description":"Metadata for the Certificate"},"description":"Metadata for the Certificate"}},"description":"Certificate data"},"DiscoveryProviderDto":{"required":["certificateData","meta","name","status","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"status":{"type":"string","description":"Status of Discovery","enum":["inProgress","failed","completed","warning"]},"totalCertificatesDiscovered":{"type":"integer","description":"Number of Certificates discovered","format":"int32","default":0},"certificateData":{"type":"array","description":"Certificate data","items":{"$ref":"#/components/schemas/DiscoveryProviderCertificateDataDto"}},"meta":{"type":"object","additionalProperties":{"type":"object","description":"Certificate Metadata"},"description":"Certificate Metadata"}}},"DiscoveryRequestDto":{"required":["kind","name"],"type":"object","properties":{"name":{"type":"string","description":"Name of the Discovery"},"kind":{"type":"string","description":"Discovery Kind"},"attributes":{"type":"array","description":"Discovery Provider Attributes. Mandatory for creating new Discovery","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"AttributeCallback":{"required":["callbackContext","callbackMethod","mappings"],"type":"object","properties":{"callbackContext":{"type":"string","description":"Context part of callback URL"},"callbackMethod":{"type":"string","description":"HTTP method of the callback"},"mappings":{"uniqueItems":true,"type":"array","description":"Mappings for the callback method","items":{"$ref":"#/components/schemas/AttributeCallbackMapping"}}},"description":"Optional definition of callback for getting the content of the Attribute based on the action"},"AttributeCallbackMapping":{"required":["targets","to"],"type":"object","properties":{"from":{"type":"string","description":"Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set."},"attributeType":{"type":"string","description":"Type of the attribute. It is optional and must be set only if special behaviour is needed.","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"to":{"type":"string","description":"Name of the path variable or request param or body field which is to be used to assign value of attribute"},"targets":{"uniqueItems":true,"type":"array","description":"Set of targets for propagating value.","items":{"type":"string","description":"Set of targets for propagating value.","enum":["pathVariable","requestParameter","body"]}},"value":{"type":"object","description":"Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time."}},"description":"Mappings for the callback method"},"AttributeDefinition":{"required":["label","list","multiSelect","name","readOnly","required","type","uuid","visible"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"},"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"type":{"type":"string","description":"Type of the Attribute","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"validationRegex":{"type":"string","description":"Optional regular expression used for validating the Attribute content"},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"}}},"HealthDto":{"required":["status"],"type":"object","properties":{"status":{"type":"string","description":"Current connector operational status","enum":["ok","nok","unknown"]},"description":{"type":"string","description":"Detailed status description"},"parts":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/HealthDto"},"description":"Nested status of services"}}},"EndpointDto":{"required":["context","method","name","required","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"context":{"type":"string","description":"Context of the Endpoint","example":"/v1"},"method":{"type":"string","description":"Method to be used for the Endpoint","example":"POST"},"required":{"type":"boolean","description":"True if the Endpoint is required for implementation","example":true}},"description":"List of end points related to functional group"},"InfoResponse":{"required":["endPoints","functionGroupCode","kinds"],"type":"object","properties":{"functionGroupCode":{"type":"string","description":"Enumerated code of functional group","enum":["credentialProvider","legacyAuthorityProvider","authorityProvider","discoveryProvider","entityProvider","complianceProvider"]},"kinds":{"type":"array","description":"List of supported functional group kinds","example":["SoftKeyStore","Basic","ApiKey"],"items":{"type":"string","description":"List of supported functional group kinds","example":"[\\"SoftKeyStore\\",\\"Basic\\",\\"ApiKey\\"]"}},"endPoints":{"type":"array","description":"List of end points related to functional group","items":{"$ref":"#/components/schemas/EndpointDto"}}}}}}}}')}}]);