---
title: Access control
hide_table_of_contents: false
---

# Access control

Authorization is an integral part of CZERTAINLY platform. Each authenticated identified user and its permissions are represented by internal authorization token which is evaluated using [Open Policy Agent](https://www.openpolicyagent.org/) (OPA) and defined policies. For more information about the authorization policies, refer to [CZERTAINLY Auth OPA Policies](https://github.com/3KeyCompany/CZERTAINLY-Auth-OPA-Policies). Individual permissions are set for roles existing in `Auth` service which then can be assigned to users.

## Resources and actions

CZERTAINLY platform and its `Core` service works with different type of objects (entities) that are called resources. Each resource then has defined set of actions that are available for that particular resource. Both available resources and actions are defined as `enum` type to easily refer to.
Therefore, permission to perform some request represented by some endpoint can be described as set of actions performed on resources that needs to be allowed.

Individual permission can be evaluated on two levels (represented by different OPA policies), generally if action is allowed/denied on some resource level or on object level for specific object UUID.
Example of permissions for some resource can be seen on following excerpt from authorization token:

```json
{
  "permissions": {
    "allowAllResources": false,
    "resources":
    [
      {
        "name": "raProfiles",
        "allowAllActions": false,
        "actions": [ "detail", "list" ],
        "objects": [
          {
            "name": "NG-RA-Profile1",
            "uuid": "d7d5b6e6-0335-4492-a994-6120751fced1",
            "allow": [],
            "deny": [ "detail" ]
          }
        ]
      },
      {
        "name": "certificates",
        "allowAllActions": true,
        "actions": [],
        "objects": []
      }
    ]
  }
}
```

In an example there are permissions defined for two resources - `raProfiles` and `certificates`. For `certificates` resource all actions are allowed in general and for `raProfiles` detail and list action on any profile except RA profile *NG-RA-Profile1* where detail action is denied. 

## Authorization mechanism and annotations

Authorization process (OPA evaluation) is triggered by calling methods annotated with `@ExternalAuthorization` annotation. Usually, public methods of service implementations are annotated with this annotation, to require authorization if service is called from anywhere across `Core` service.

Authorization mechanism itself is driven by Spring framework security layer and custom implementations of `AccessDecisionVoter`.
For example, voter responsible for evaluating `method` policies extracts parameters of annotation of method called and constructs input to include in request to OPA. Based on response from OPA, result can be `ACCESS_GRANTED` or `ACCESS_DENIED.`

`@ExternalAuthorization` annotation has parameters to define two pairs of resource and action. One for resource accessed and other for parent resource. Both can be evaluated simultaneously to authorize access to resources in hierarchical dependency.
Resource and action names are codes for enums defined in `Core` service.

For example, method annotated with `@ExternalAuthorization(resource = Resource.RA_PROFILE, action = ResourceAction.DELETE, parentResource = Resource.AUTHORITY, parentAction = ResourceAction.DETAIL)` means that calling this method triggers evaluation of permission for `delete` action on resource `raProfiles` and `detail` action on parent resource `authorities`.

### Object access level permissions evaluation

In case we want to evaluate also permissions for resource/action on object access level, `@ExternalAuthorization` annotation is combined with method parameters. Parameter representing UUID of object that should be evaluated needs to be of type `SecuredUUID`. To evaluate object access level for parent resource/action, we use similarly type `SecuredParentUUID`.
If we have list of UUIDs to evaluate, we can use `List<SecuredUuid>` type in similar fashion.

``` Java
@ExternalAuthorization(resource = Resource.RA_PROFILE, action = ResourceAction.DELETE, parentResource = Resource.AUTHORITY, parentAction = ResourceAction.DETAIL)
public void deleteRaProfile(SecuredParentUUID authorityUuid, SecuredUUID uuid) throws NotFoundException {
    // some code here
} 
```
In the example above we can see how should look annotation and method signature if we want to evaluate permissions to delete RA profile object with UUID specified by parameter `uuid` and permissions to retrieve detail of object of parent resource authority with UUID specified by parameter `authorityUuid`.

Other use case for evaluation object access level permissions is when we want to filter list of retrieved objects to contain only objects that have allowed action specified in the annotation (usually applicable in listing endpoints).
This can be achieved by passing `SecurityFilter` object to method annotated with `@ExternalAuthorization`. `SecurityFilter` contains resource filters with list of allowed and denied object UUIDs that are populated with response from OPA `object` policy evaluation. `SecurityFilter` can then be used for example to filter out records retrieved from DB.  

``` Java
@ExternalAuthorization(resource = Resource.RA_PROFILE, action = ResourceAction.LIST, parentResource = Resource.AUTHORITY, parentAction = ResourceAction.LIST)
public List<RaProfileDto> listRaProfiles(SecurityFilter filter, Optional<Boolean> enabled) {
    filter.setParentRefProperty("authorityInstanceReferenceUuid");
    
    // some additional code here
} 
```
In the example above, we are using security filter to get filters for RA profile objects that have permission for list action and their parent resource authority, too.
To be able to automatize retrieving records from DB based on SecurityFilter with help of `SecurityFilterRepository`, it is necessary to define property of entity (representing resource object) that holds reference UUID of parent resource. 

### Extending resources and actions

When we need to extend set of available resource and/or actions usable in Access control components, first we can add new items to enums defined in `Core`. Then they can be used as values of `@ExternalAuthorization` properties.

To achieve that changes in available set of resources and their actions are reflected in role permissions, `Core` service manages changes automatically with help of syncing mechanism.
When `Core` service starts, it collects all `@ExternalAuthorization` annotation instances and builds map of available resources and their actions. This information is then passed to `Auth` service which can then store role permissions with reference to corresponding resource/action. This way, `Core` and `Auth` services are in sync and permissions can refer to all resources/actions that are actually used and require authorization.

In addition, we can mark resources to allow adding permissions on object access level. It can be achieved by annotating listing endpoint in corresponding controller that can be used to list objects. The annotation `@AuthEndpoint` is used to set object listing endpoint path for a resource which can be later used in permissions editor to dynamically retrieve available objects of that resource.

Example of using `@AuthEndpoint` annotation to mark RA profile resource to have object access level permissions:

``` Java
@AuthEndpoint(resourceName = Resource.RA_PROFILE)
public List<RaProfileDto> listRaProfiles(Optional<Boolean> enabled) {
    return raProfileService.listRaProfiles(SecurityFilter.create(), enabled);
}
```