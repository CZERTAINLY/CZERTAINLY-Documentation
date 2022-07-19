"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4215],{9103:function(e){e.exports=JSON.parse('{"url":"https://api.czertainly.com/doc-openapi-core-compliance-profile.yaml","spec":{"openapi":"3.0.1","info":{"title":"CZERTAINLY Compliance Profile API","description":"REST API for managing Compliance Profiles in the platform","contact":{"name":"CZERTAINLY","url":"https://www.czertainly.com","email":"getinfo@czertainly.com"},"license":{"name":"MIT License","url":"https://github.com/3KeyCompany/CZERTAINLY/blob/develop/LICENSE.md"},"x-logo":{"url":"images/czertainly_color_H.svg"}},"externalDocs":{"description":"CZERTAINLY Documentation","url":"https://docs.czertainly.com"},"servers":[{"url":"http://localhost:8080","description":"Generated server url"}],"tags":[{"name":"Compliance Profile Management API","description":"Compliance Profile Management API"}],"paths":{"/v1/complianceProfiles/{uuid}/rules":{"post":{"tags":["Compliance Profile Management API"],"summary":"Add rule to a Compliance Profile","operationId":"addRule","parameters":[{"name":"uuid","in":"path","description":"Compliance Profile UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ComplianceRuleAdditionRequestDto"}}},"required":true},"responses":{"204":{"description":"New rule is deleted from the profile"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Compliance Profile Management API"],"summary":"Delete rule from a Compliance Profile","operationId":"removeRule","parameters":[{"name":"uuid","in":"path","description":"Compliance Profile UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ComplianceRuleDeletionRequestDto"}}},"required":true},"responses":{"204":{"description":"New group is added to the profile"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/complianceProfiles/{uuid}/groups":{"post":{"tags":["Compliance Profile Management API"],"summary":"Add group to a Compliance Profile","operationId":"addGroup","parameters":[{"name":"uuid","in":"path","description":"Compliance Profile UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ComplianceGroupRequestDto"}}},"required":true},"responses":{"204":{"description":"New group is deleted from the profile"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Compliance Profile Management API"],"summary":"Delete group from a Compliance Profile","operationId":"removeGroup","parameters":[{"name":"uuid","in":"path","description":"Compliance Profile UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ComplianceGroupRequestDto"}}},"required":true},"responses":{"204":{"description":"New rule is added to the profile"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/complianceProfiles/compliance":{"post":{"tags":["Compliance Profile Management API"],"summary":"Initiate Certificate Compliance Check","operationId":"checkCompliance","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ComplianceProfileComplianceCheckDto"}}},"required":true},"responses":{"204":{"description":"Compliance check initiated"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/complianceProfiles":{"get":{"tags":["Compliance Profile Management API"],"summary":"List of available Compliance Profiles","operationId":"listComplianceProfiles","responses":{"200":{"description":"Compliance Profiles retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ComplianceProfilesListDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"post":{"tags":["Compliance Profile Management API"],"summary":"Add Compliance Profile","operationId":"createComplianceProfile","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ComplianceProfileRequestDto"}}},"required":true},"responses":{"201":{"description":"New Compliance profile added","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UuidDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Compliance Profile Management API"],"summary":"Delete multiple Compliance Profiles","operationId":"bulkRemoveComplianceProfiles","requestBody":{"description":"Compliance Profile UUIDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["c2f685d4-6a3e-11ec-90d6-0242ac120003","b9b09548-a97c-4c6a-a06a-e4ee6fc2da98"]}},"required":true},"responses":{"200":{"description":"Compliance Profiles deleted","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ForceDeleteMessageDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/complianceProfiles/{uuid}/raprofile/disassociate":{"patch":{"tags":["Compliance Profile Management API"],"summary":"Disassociate Compliance Profile to RA Profile","operationId":"disassociateProfiles","parameters":[{"name":"uuid","in":"path","description":"Compliance Profile UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RaProfileAssociationRequestDto"}}},"required":true},"responses":{"200":{"description":"RA Profile disassociation successful"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/complianceProfiles/{uuid}/raprofile/associate":{"patch":{"tags":["Compliance Profile Management API"],"summary":"Associate Compliance Profile to RA Profile","operationId":"associateProfiles","parameters":[{"name":"uuid","in":"path","description":"Compliance Profile UUID","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RaProfileAssociationRequestDto"}}},"required":true},"responses":{"200":{"description":"RA Profile association successful"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/complianceProfiles/{uuid}/raprofiles":{"get":{"tags":["Compliance Profile Management API"],"summary":"Get RA Profiles for a Compliance Profile","operationId":"getAssociatedRAProfiles","parameters":[{"name":"uuid","in":"path","description":"Compliance Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"RA Profiles retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/SimplifiedRaProfileDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/complianceProfiles/{uuid}":{"get":{"tags":["Compliance Profile Management API"],"summary":"Details of a Compliance Profiles","operationId":"getComplianceProfile","parameters":[{"name":"uuid","in":"path","description":"Compliance Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Compliance Profile details retrieved","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ComplianceProfileDto"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}},"delete":{"tags":["Compliance Profile Management API"],"summary":"Remove Compliance Profile","operationId":"removeComplianceProfile","parameters":[{"name":"uuid","in":"path","description":"Compliance Profile UUID","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Compliance Profile deleted"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/complianceProfiles/rules":{"get":{"tags":["Compliance Profile Management API"],"summary":"Get Compliance rules","operationId":"getComplianceRules","parameters":[{"name":"complianceProvider","in":"query","required":false,"schema":{"type":"string"}},{"name":"kind","in":"query","required":false,"schema":{"type":"string"}},{"name":"certificateType","in":"query","required":false,"schema":{"type":"array","items":{"type":"string","enum":["X509","SSH"]}}}],"responses":{"200":{"description":"Compliance rules retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ComplianceRulesListResponseDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/complianceProfiles/groups":{"get":{"tags":["Compliance Profile Management API"],"summary":"Get Compliance groups","operationId":"getComplianceGroups","parameters":[{"name":"complianceProvider","in":"query","required":false,"schema":{"type":"string"}},{"name":"kind","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"Compliance groups retrieved","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ComplianceGroupsListResponseDto"}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessable Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}},"/v1/complianceProfiles/force":{"delete":{"tags":["Compliance Profile Management API"],"summary":"Force delete Compliance Profiles","operationId":"bulkForceRemoveComplianceProfiles","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}},"required":true},"responses":{"204":{"description":"Compliance Profiles forced to delete"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"422":{"description":"Unprocessible Entity","content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}},"example":["Error Message 1","Error Message 2"]}}},"500":{"description":"Internal Server Error"},"502":{"description":"Connector Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}},"503":{"description":"Connector Communication Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorMessageDto"}}}}}}}},"components":{"schemas":{"ComplianceRuleAdditionRequestDto":{"required":["connectorUuid","kind","ruleUuid"],"type":"object","properties":{"connectorUuid":{"type":"string","description":"UUID of the Compliance Provider","example":"1212a-34dddf34-4334f-34ddfvfdg1y3"},"kind":{"type":"string","description":"Kind of the Compliance Provider","example":"default"},"ruleUuid":{"type":"string","description":"UUID of the rule","example":"1212a-34dddf34-4334f-34ddfvfdg1y3"},"attributes":{"type":"array","description":"Attributes for the rule","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}}},"RequestAttributeDto":{"required":["content","name"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"}},"description":"Attributes for the rule"},"ErrorMessageDto":{"required":["message"],"type":"object","properties":{"message":{"type":"string","description":"Error message detail","example":"Error message"}}},"ComplianceGroupRequestDto":{"required":["connectorUuid","groupUuid","kind"],"type":"object","properties":{"connectorUuid":{"type":"string","description":"UUID of the Compliance Provider","example":"1212a-34dddf34-4334f-34ddfvfdg1y3"},"kind":{"type":"string","description":"Kind of the Compliance Provider","example":"default"},"groupUuid":{"type":"string","description":"UUID of the group","example":"1212a-34dddf34-4334f-34ddfvfdg1y3"}}},"ComplianceProfileComplianceCheckDto":{"type":"object","properties":{"complianceProfileUuids":{"type":"array","description":"List of UUIDs of the Compliance Profiles","items":{"type":"string","description":"List of UUIDs of the Compliance Profiles"}}}},"ComplianceProfileRequestDto":{"required":["name"],"type":"object","properties":{"name":{"type":"string","description":"Name of the Compliance Profile","example":"Profile 1"},"description":{"type":"string","description":"Description of the Compliance Profile","example":"Profile 1"},"rules":{"type":"array","description":"Rules to be associated with the Compliance Profile. Profiles can be created without rules and can be added later","items":{"$ref":"#/components/schemas/ComplianceProfileRulesRequestDto"}}}},"ComplianceProfileRulesRequestDto":{"required":["connectorUuid","kind"],"type":"object","properties":{"connectorUuid":{"type":"string","description":"UUID of the Compliance Provider","example":"c35bc88c-d0ef-11ec-9d64-0242ac120005"},"kind":{"type":"string","description":"Kind of the Compliance Provider","example":"x509"},"rules":{"type":"array","description":"Rules for new Compliance Profiles","items":{"$ref":"#/components/schemas/ComplianceRequestRulesDto"}},"groups":{"type":"array","description":"Groups for Compliance Profile","items":{"type":"string","description":"Groups for Compliance Profile"}}},"description":"Rules to be associated with the Compliance Profile. Profiles can be created without rules and can be added later"},"ComplianceRequestRulesDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the rule","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"attributes":{"type":"array","description":"Attributes for the rule","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}},"description":"Rules for new Compliance Profiles"},"UuidDto":{"required":["uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier"}}},"RaProfileAssociationRequestDto":{"required":["raProfileUuids"],"type":"object","properties":{"raProfileUuids":{"type":"array","description":"List of UUIDs of RA Profiles to be associated","example":["18324af0-e95c-11ec-8fea-0242ac120002","18324c94-e95c-11ec-8fea-0242ac120002"],"items":{"type":"string","description":"List of UUIDs of RA Profiles to be associated","example":"[\\"18324af0-e95c-11ec-8fea-0242ac120002\\",\\"18324c94-e95c-11ec-8fea-0242ac120002\\"]"}}}},"SimplifiedRaProfileDto":{"required":["enabled","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"enabled":{"type":"boolean","description":"Enabled flag - true = enabled; false = disabled"}}},"ComplianceConnectorAndGroupsDto":{"type":"object","properties":{"connectorName":{"type":"string","description":"Name of the Compliance Provider"},"connectorUuid":{"type":"string","description":"UUID of the Compliance Provider"},"kind":{"type":"string","description":"Kind of the Compliance Provider"},"groups":{"type":"array","description":"Groups associated","items":{"$ref":"#/components/schemas/NameAndUuidDto"}}},"description":"List of groups"},"ComplianceConnectorAndRulesDto":{"type":"object","properties":{"connectorName":{"type":"string","description":"Name of the Compliance Provider"},"connectorUuid":{"type":"string","description":"UUID of the Compliance Provider"},"kind":{"type":"string","description":"Kind of the Compliance Provider"},"rules":{"type":"array","description":"Rules associated","items":{"$ref":"#/components/schemas/ComplianceRulesDto"}}},"description":"List of rules"},"ComplianceProfileDto":{"required":["groups","name","rules","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the Compliance Profile"},"rules":{"type":"array","description":"List of rules","items":{"$ref":"#/components/schemas/ComplianceConnectorAndRulesDto"}},"groups":{"type":"array","description":"List of groups","items":{"$ref":"#/components/schemas/ComplianceConnectorAndGroupsDto"}},"raProfiles":{"type":"array","description":"List of associated RA Profiles","items":{"$ref":"#/components/schemas/SimplifiedRaProfileDto"}}}},"ComplianceRulesDto":{"required":["certificateType","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"description":{"type":"string","description":"Description of the rule","example":"Sample rule description"},"certificateType":{"type":"string","description":"Certificate type for the rule","example":"X509","enum":["X509","SSH"]},"attributes":{"type":"array","description":"Attributes of the rule","items":{"$ref":"#/components/schemas/RequestAttributeDto"}}},"description":"Rules associated"},"NameAndUuidDto":{"required":["name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"}},"description":"Groups associated"},"AttributeCallback":{"required":["callbackContext","callbackMethod","mappings"],"type":"object","properties":{"callbackContext":{"type":"string","description":"Context part of callback URL"},"callbackMethod":{"type":"string","description":"HTTP method of the callback"},"mappings":{"uniqueItems":true,"type":"array","description":"Mappings for the callback method","items":{"$ref":"#/components/schemas/AttributeCallbackMapping"}}},"description":"Optional definition of callback for getting the content of the Attribute based on the action"},"AttributeCallbackMapping":{"required":["targets","to"],"type":"object","properties":{"from":{"type":"string","description":"Name of the attribute whose value is to be used as value of path variable or request param or body field.It is optional and must be set only if value is not set."},"attributeType":{"type":"string","description":"Type of the attribute. It is optional and must be set only if special behaviour is needed.","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"to":{"type":"string","description":"Name of the path variable or request param or body field which is to be used to assign value of attribute"},"targets":{"uniqueItems":true,"type":"array","description":"Set of targets for propagating value.","items":{"type":"string","description":"Set of targets for propagating value.","enum":["pathVariable","requestParameter","body"]}},"value":{"type":"object","description":"Static value to be propagated to targets. It is optional and is set only if the value is known at attribute creation time."}},"description":"Mappings for the callback method"},"AttributeDefinition":{"required":["label","list","multiSelect","name","readOnly","required","type","uuid","visible"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the Attribute for unique identification","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the Attribute that is used for identification","example":"Attribute"},"content":{"type":"object","description":"Content of the Attribute"},"label":{"type":"string","description":"Friendly name of the the Attribute","example":"Attribute Name"},"type":{"type":"string","description":"Type of the Attribute","enum":["STRING","INTEGER","SECRET","FILE","BOOLEAN","CREDENTIAL","DATE","FLOAT","JSON","TEXT","TIME","DATETIME"]},"required":{"type":"boolean","description":"Boolean determining if the Attribute is required. If true, the Attribute must be provided.","default":false},"readOnly":{"type":"boolean","description":"Boolean determining if the Attribute is read only. If true, the Attribute content cannot be changed.","default":false},"visible":{"type":"boolean","description":"Boolean determining if the Attribute is visible and can be displayed, otherwise it should be hidden to the user.","default":true},"list":{"type":"boolean","description":"Boolean determining if the Attribute contains list of values in the content","default":false},"description":{"type":"string","description":"Optional description of the Attribute, should contain helper text on what is expected"},"validationRegex":{"type":"string","description":"Optional regular expression used for validating the Attribute content"},"attributeCallback":{"$ref":"#/components/schemas/AttributeCallback"},"multiSelect":{"type":"boolean","description":"Boolean determining if the Attribute can have multiple values","default":false},"group":{"type":"string","description":"Group of the Attribute, used for the logical grouping of the Attribute","example":"requiredAttributes"}},"description":"Rule attributes"},"ComplianceRulesListResponseDto":{"required":["connectorName","connectorUuid","kind","rules"],"type":"object","properties":{"connectorName":{"type":"string","description":"Name of the Compliance Provider","example":"Provider1"},"connectorUuid":{"type":"string","description":"UUID of the Compliance Provider","example":"c35bc88c-d0ef-11ec-9d64-0242ac120003"},"kind":{"type":"string","description":"Kind of the Compliance Provider","example":"Kind1"},"rules":{"type":"array","description":"Rules from Compliance Provider","items":{"$ref":"#/components/schemas/ComplianceRulesResponseDto"}}}},"ComplianceRulesResponseDto":{"required":["certificateType","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the rule","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"groupUuid":{"type":"string","description":"UUID of the group to which the rule belongs to","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the rule","example":"Rule1"},"certificateType":{"type":"string","description":"Type of the certificate to which this rule can be applied","example":"X509","enum":["X509","SSH"]},"attributes":{"type":"array","description":"Rule attributes","items":{"$ref":"#/components/schemas/AttributeDefinition"}},"description":{"type":"string","description":"Description of the rule","example":"Sample rule description"}},"description":"Rules from Compliance Provider"},"ComplianceGroupsListResponseDto":{"required":["connectorName","connectorUuid","groups","kind"],"type":"object","properties":{"connectorName":{"type":"string","description":"Name of the Compliance Provider","example":"Provider1"},"connectorUuid":{"type":"string","description":"UUID of the Compliance Provider","example":"c35bc88c-d0ef-11ec-9d64-0242ac120003"},"kind":{"type":"string","description":"Kind of the Compliance Provider","example":"Kind1"},"groups":{"type":"array","description":"Groups from Compliance Provider","items":{"$ref":"#/components/schemas/ComplianceGroupsResponseDto"}}}},"ComplianceGroupsResponseDto":{"required":["name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"UUID of the group","example":"166b5cf52-63f2-11ec-90d6-0242ac120003"},"name":{"type":"string","description":"Name of the group","example":"RFC"},"description":{"type":"string","description":"Description of the group","example":"Sample description of the group"}},"description":"Groups from Compliance Provider"},"ComplianceProfilesListDto":{"required":["name","rules","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"rules":{"type":"array","description":"Rules summary","items":{"$ref":"#/components/schemas/ComplianceProviderSummaryDto"}}}},"ComplianceProviderSummaryDto":{"required":["connectorName"],"type":"object","properties":{"connectorName":{"type":"string","description":"Name of the Compliance Provider"},"numberOfRules":{"type":"integer","description":"Number of rules for the Provider","format":"int32"},"numberOfGroups":{"type":"integer","description":"Number of groups for the Provider","format":"int32"}},"description":"Rules summary"},"ComplianceRuleDeletionRequestDto":{"required":["connectorUuid","kind","ruleUuid"],"type":"object","properties":{"connectorUuid":{"type":"string","description":"UUID of the Compliance Provider","example":"1212a-34dddf34-4334f-34ddfvfdg1y3"},"kind":{"type":"string","description":"Kind of the Compliance Provider","example":"default"},"ruleUuid":{"type":"string","description":"UUID of the rule","example":"1212a-34dddf34-4334f-34ddfvfdg1y3"}}},"ForceDeleteMessageDto":{"required":["message","name","uuid"],"type":"object","properties":{"uuid":{"type":"string","description":"Object identifier","example":"7b55ge1c-844f-11dc-a8a3-0242ac120002"},"name":{"type":"string","description":"Object Name","example":"Name"},"message":{"type":"string","description":"Message describing the associations of the Connector which is preventing the delete operation","example":"Object is associated with other items"}}}}}}}')}}]);