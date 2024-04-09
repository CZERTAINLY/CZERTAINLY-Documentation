# Keycloak

Navigate to your instance of CZERTAINLY, to URL https://czertainly.example.com/kc/admin/ use `admin` as a username and `admin` as a password.

In the menu left, from the first drop-down select CZERTAINLY realm. Still in the left side menu, near its bottom bottom choose *User defined: SAML v2.0* Now scroll to the bottom and enter the AD FS descriptor URL into Import from URL field. For AD FS 3.0, this URL is https://adfs.example.com/FederationMetadata/2007-06/FederationMetadata.xml. In case your AD FS is using private CA, Keycloak won't be able to download metadata. It will just display the error message `No valid metadata was found at this URL: 'Network response was not OK.'` In this case, you can download and import IdP metadata manually. Set the switch `Use entity descriptor` to `off`, and the option `Import config from file` will be displayed.

After importing IdP metadata, correct settings according to [image](../../../../docs/assets/Keycloak-MSADFS.png) and press the `Add` button. This will show a few more options, take care of selecting `Force` in the field `Sync mode` this will ensure that the attribute coming from AD FS will overwrite local values in Keycloak. Just to be sure, compare the complete `Settings` tab again with [image](../../../../docs/assets/Keycloak-MSADFS.png) and press the `Save` button.

## Mappers

In SAML information is transfered as signed XML documents called Assertions. Each Assertion can contain information about several user attributes like name, email and so on. Mappers in Keycloak serve to transform SAML assertion into an internal format.

Small piece of assertion showing just an email:

```XML
...
<AttributeStatement>
    <Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress">
        <AttributeValue>some.user@example.com</AttributeValue>
    </Attribute>
    ...
```

To define Mappers switch to the second tab and click the `Add mapper button` and define it as [shown on image](../../../../docs/assets/Keycloak-email-Mapper.png). In total, you need to define four mappers. All of them have to have `Mapper type` set to `Attribute Importer` and `Name Format` set to `ATTRIBUTE_FORMAT_BASIC`. The remaining properties are shown in the table:

| Name                 | Attribute Name                                                  | User Attribute Name |
|----------------------|-----------------------------------------------------------------|---------------------|
| Attribute: firstName | http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname |           firstName |
| Attribute: lastName  | http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname   |           lastName  |
| Attribute: email     | http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress |           email  |
| Attribute: groups    | http://schemas.xmlsoap.org/claims/Group                            |           groups |



## Export CZERTIANLY metadata

Get back on the `Settings` tab, and click on the link `SAML 2.0 Service Provider Metadata` it should be pointing to `https://czertainly.example.com/kc/realms/CZERTAINLY/broker/saml/endpoint/descriptor`. Double check the URL if it contains a `CZERTAINLY` string, and if there is a `master`. You failed to follow the second paragraph of this guide.

Next check, if there is element `ds:X509Certificate` containing a base64 encoded certificate. If not, you forgot to activate the `Want AuthnRequests signed` option in the Settings tab.

And finally, check if there are four elements `md:RequestedAttribut` - those four you have been creating in the Mappers section. Without them, AD FS won't send you anything.

If everything is OK, send metadata or URL to administrators of MS AD FS.