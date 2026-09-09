---
sidebar_position: 3
---

# Templates

The e-mail subject and content are rendered with [FreeMarker](https://freemarker.apache.org/) (version 2.3.33) for every notification. The template expressions are written as `${...}` and evaluated against the notification request the connector receives — a template error fails the notification, which is why every recipe below uses safe access with defaults.

## Template data

The whole notification request is available to the template. Its structure is defined by the [send notification operation](/api/connector-notification-provider/#tag/Notification-instances-Management/operation/sendNotification) of the [Notification Provider](../../connectors/provider-interfaces/notification-provider.mdx) interface; the parts most templates use:

- `${notificationData.*}` — event-specific data describing what happened. Each event defines its own fields — the [supported events](../../concept-design/core-components/workflow/event.md#supported-events) table links the authoritative definition for every event.
- `${objectData.*}` — data about the object the event concerns, present only when [event data categories](../../concept-design/core-components/notification-profile.md#event-data) are enabled on the notification profile. See [object data in external notifications](../../concept-design/core-components/workflow/event.md#object-data-in-external-notifications) for what it contains per event. Accessing it in templates requires a connector version built against `interfaces` version `2.20.0` or later — earlier versions do not receive the field.
- `${event}`, `${resource}`, `${recipients}` — the event code, the resource of the event object, and the resolved recipients.

The recipes below focus on `objectData`, which has the richer structure. They assume this example — a `certificate_expiring` notification with all four event data categories enabled, showing same-named metadata from two connectors isolated by grouping:

```json
{
  "event": "certificate_expiring",
  "resource": "certificates",
  "notificationData": {
    "certificateUuid": "e1f6a7c2-4b1d-4f6e-9a3b-2c8d7e5f0a11",
    "subjectDn": "CN=shop.acme.example, O=ACME",
    "expiresAt": "2026-08-04T08:00:00Z",
    "raProfileName": "acme-web-servers"
  },
  "objectData": {
    "subject": {
      "resource": "certificates",
      "uuid": "e1f6a7c2-4b1d-4f6e-9a3b-2c8d7e5f0a11",
      "name": "shop.acme.example"
    },
    "customAttributes": {
      "department": {
        "name": "department", "label": "Department", "contentType": "string",
        "values": ["E-Commerce"]
      },
      "slaContacts": {
        "name": "slaContacts", "label": "SLA Contacts", "contentType": "string",
        "values": ["ops@acme.example", "webteam@acme.example"]
      }
    },
    "metadata": [
      {
        "connectorName": "Network-Discovery",
        "sourceObjectType": "discoveries",
        "attributes": {
          "discoverySource": {
            "name": "discoverySource", "label": "Discovery Source", "contentType": "string",
            "values": ["10.20.30.0/24", "edge-lb-scan"],
            "sourceObjects": [
              { "uuid": "3c1e88f0-1a2b-4c3d-9e8f-7a6b5c4d3e2f", "name": "weekly-dc1-sweep" },
              { "uuid": "9b77d2a1-2b3c-4d5e-8f9a-0b1c2d3e4f5a", "name": "edge-lb-scan-2026-07" }
            ]
          },
          "port": {
            "name": "port", "label": "Port", "contentType": "integer",
            "values": [443, 8443],
            "sourceObjects": [
              { "uuid": "3c1e88f0-1a2b-4c3d-9e8f-7a6b5c4d3e2f", "name": "weekly-dc1-sweep" }
            ]
          }
        }
      },
      {
        "connectorName": "ACME-Server",
        "sourceObjectType": "authorities",
        "attributes": {
          "discoverySource": {
            "name": "discoverySource", "label": "Order Source", "contentType": "string",
            "values": ["acme-directory"],
            "sourceObjects": [
              { "uuid": "51d09e44-3c4d-4e5f-9a0b-1c2d3e4f5a6b", "name": "acme-prod-ca" }
            ]
          }
        }
      }
    ],
    "associations": [
      { "resource": "users",      "uuid": "b4d92c11-4d5e-4f6a-8b9c-0d1e2f3a4b5c", "name": "jane.operator" },
      { "resource": "groups",     "uuid": "0aa13f77-5e6f-4a7b-9c0d-1e2f3a4b5c6d", "name": "web-team" },
      { "resource": "raProfiles", "uuid": "77aa01b3-9c2e-4d5f-8a7b-6c5d4e3f2a10", "name": "acme-web-servers" }
    ],
    "content": {
      "format": "X509_DER_BASE64",
      "data": "MIIDdTCCAl2gAwIBAgIVAJ7k…"
    }
  }
}
```

Recipes referencing attributes not present in this example simply render their fallbacks. The example illustrates the structure — the authoritative definition is [`NotificationEventObjectDataDto`](https://github.com/OmniTrustILM/interfaces/blob/main/src/main/java/com/otilm/api/model/connector/notification/NotificationEventObjectDataDto.java) with the classes it references.

## Safe access

`objectData` is present only when the notification profile enables event data categories, and any category can be absent — because the event's subject does not support it, the data failed to load, or the size cap dropped it. Templates should always use FreeMarker safe access with defaults, so one template serves profiles with different configurations:

```
Department: ${(objectData.customAttributes.department.values[0])!"unassigned"}
SLA contacts: ${(objectData.customAttributes.slaContacts.values?join(", "))!"none"}
```

The parentheses around the expression make the `!` default cover the whole navigation path — any missing step falls back to the default instead of failing the template.

:::warning[Operator precedence pitfall]
The `!` default operator binds below postfix built-ins, so `(objectData.associations)![]?filter(...)` applies `?filter` to the empty-list fallback — when data is present, the expression silently yields the **unfiltered** list. Always parenthesize the defaulted expression before chaining built-ins:

```
<#-- wrong: yields the first association of any type when data is present -->
${(((objectData.associations)![]?filter(a -> a.resource == "groups"))?first.name)!"-"}
<#-- correct: the extra parentheses make ?filter apply to the defaulted value -->
${((((objectData.associations)![])?filter(a -> a.resource == "groups"))?first.name)!"-"}
```
:::

## Custom attributes

Custom attribute names are unique across the platform, so direct access by name is safe:

```
Department: ${(objectData.customAttributes.department.values[0])!"unassigned"}
```

To look up an attribute by a name held in a variable, use the bracket syntax — it takes any expression as the key:

```
<#assign wanted = "department">
<#if (objectData.customAttributes[wanted])??>
${objectData.customAttributes[wanted].label}: ${objectData.customAttributes[wanted].values?map(v -> v?string)?join(", ")}
</#if>
```

## Metadata

Metadata attribute names are only unique within their group — different connectors can produce attributes with the same name. Address them connector group first, then name. Two group fields are optional and must be guarded: `connectorName` can be absent (platform-global metadata, or the producing connector no longer exists) and `sourceObjects` is present only when the contributing source objects are known:

```
<#list (objectData.metadata)![] as group>
  <#if ((group.connectorName)!"") == "Network-Discovery" && group.attributes.discoverySource??>
Discovered via: ${group.attributes.discoverySource.values?join(", ")}
  <#if group.attributes.discoverySource.sourceObjects?has_content>
  (sources: ${group.attributes.discoverySource.sourceObjects?map(s -> s.name)?join(", ")})
  </#if>
  </#if>
</#list>
```

When the attribute name is unambiguous and the connector does not matter, a small reusable function finds the first match across all groups:

```
<#function findMeta name>
  <#list (objectData.metadata)![] as g>
    <#if g.attributes[name]??><#return g.attributes[name]></#if>
  </#list>
  <#return {}>
</#function>

<#assign m = findMeta("monitoringUrl")>
<#if m?has_content>Monitoring: ${m.values?map(v -> v?string)?join(", ")}</#if>
```

The `<#return {}>` fallback keeps the `?has_content` check safe when no group carries the attribute.

## Associations

Associations are filtered by their `resource` type — `users` (the owner), `groups`, and `raProfiles`:

```
Owner: ${(((objectData.associations)![])?filter(a -> a.resource == "users")?first.name)!"-"}
Groups: ${((objectData.associations)![])?filter(a -> a.resource == "groups")?map(a -> a.name)?join(", ")}
```

## Conditional logic on attribute values

Branch on the content of an attribute — for example, escalate production certificates:

```
<#assign env = (objectData.customAttributes.environment.values)![]>
<#if env?seq_contains("production")>
!! PRODUCTION certificate — page on-call: ${(objectData.customAttributes.slaContacts.values?join(", "))!"n/a"}
</#if>
```

## Generic rendering

Render everything the operator enabled without hardcoding attribute names — the `label` field exists exactly for this:

```
<#list (objectData.customAttributes)!{} as name, attr>
  ${attr.label}: ${attr.values?map(v -> v?string)?join(", ")}
</#list>
<#list (objectData.metadata)![] as g>
  From ${g.connectorName!"(no connector)"}:
  <#list g.attributes as name, attr>
    ${attr.label}: ${attr.values?map(v -> v?string)?join(", ")} <#if attr.sourceObjects?has_content>(via ${attr.sourceObjects?map(s -> s.name)?join(", ")})</#if>
  </#list>
</#list>
```

Two value-formatting rules to know:

- **Booleans**: `?join` on a list containing a boolean aborts rendering under the default provider configuration. `?map(v -> v?string)` converts every value first and keeps the join safe.
- **Numbers**: `?string` applies locale number formatting, so `8443` renders as `8,443`. Where numbers must stay unformatted (identifiers, ports), use `?c` instead:

```
<#assign nd = ((objectData.metadata)![])?filter(g -> ((g.connectorName)!"") == "Network-Discovery")>
<#if nd?has_content && (nd?first.attributes.port)??>
Ports: ${nd?first.attributes.port.values?map(v -> v?is_number?then(v?c, v?string))?join(", ")}
</#if>
```

## Branching on the subject

One template can serve events with different subjects by branching on `objectData.subject.resource`:

```
<#if objectData?? && objectData.subject.resource == "certificates">
  Certificate context: ${objectData.subject.name!""}
<#elseif objectData?? && objectData.subject.resource == "discoveries">
  Discovery context: ${objectData.subject.name!""}
</#if>
```

For approval events the subject is the object awaiting approval, so certificate recipes apply to approvals of certificate operations unchanged:

```
${notificationData.creatorUsername} requests "${notificationData.resourceAction}" on
${objectData.subject.name!""} (${(objectData.customAttributes.department.values[0])!"-"}),
approve by ${notificationData.expiryAt}.
```

## Certificate content as PEM

With the object content category enabled, certificate subjects carry the certificate as Base64-encoded DER. Fold it to 64-character lines for PEM output:

```
<#if (objectData.content)?? && objectData.content.format == "X509_DER_BASE64">
-----BEGIN CERTIFICATE-----
${objectData.content.data?replace("(.{64})(?=.)", "$1\n", "r")}
-----END CERTIFICATE-----
</#if>
```

The `(?=.)` lookahead folds only lines followed by more data, avoiding a blank line before the `END` marker when the Base64 length is an exact multiple of 64.

## Type-aware rendering

The `contentType` field distinguishes how to format each attribute:

```
<#list (objectData.customAttributes)!{} as name, attr>
  <#if attr.contentType == "boolean">
    ${attr.label}: <#if attr.values?first>yes<#else>no</#if>
  <#elseif attr.contentType == "datetime">
    ${attr.label}: ${attr.values?first}
  <#else>
    ${attr.label}: ${attr.values?map(v -> v?string)?join(", ")}
  </#if>
</#list>
```
