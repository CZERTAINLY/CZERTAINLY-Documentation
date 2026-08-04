---
sidebar_position: 3
---

# Templates

With the content types `JSON` and `XML`, the request body is rendered from the content template with [FreeMarker](https://freemarker.apache.org/) (version 2.3.33). A template error fails the notification, so guard every value access with FreeMarker defaults.

The template data is the whole notification request — identical to the [Email Notification Provider templates](../email-notification-provider/templates.md), including the example payload and the recipe collection for consuming `notificationData` and `objectData`; all of it applies here unchanged. This page covers what is specific to building machine-readable webhook payloads. As with the e-mail templates, accessing `objectData` requires a connector version built against `interfaces` version `2.20.0` or later.

## Building a JSON body

Two rules keep the rendered body valid JSON:

- **Escape every interpolated string** with `?json_string` — object names, attribute values, and anything else user-controlled can contain quotes or backslashes. Apply it *after* the default, with the defaulted expression parenthesized: `${((objectData.subject.name)!"")?json_string}`.
- **Render numbers with `?c`**, not `?string` — `?string` applies locale formatting (`8443` becomes `8,443`), which breaks JSON numbers.

A body template combining both, working with and without object data enabled:

```
{
  "event": "${event?json_string}",
  "subject": "${((objectData.subject.name)!"")?json_string}",
  "expires": "${(notificationData.expiresAt)!""}",
  "owner": "${((((objectData.associations)![])?filter(a -> a.resource == "users")?first.name)!"-")?json_string}",
  "ports": [<#assign nd = ((objectData.metadata)![])?filter(g -> ((g.connectorName)!"") == "Network-Discovery")><#if nd?has_content && (nd?first.attributes.port)??>${nd?first.attributes.port.values?map(v -> v?c)?join(", ")}</#if>]
}
```

For the example `certificate_expiring` payload this renders:

```json
{
  "event": "certificate_expiring",
  "subject": "shop.acme.example",
  "expires": "2026-08-04T08:00:00Z",
  "owner": "jane.operator",
  "ports": [443, 8443]
}
```

For an event without object data, the same template renders empty and fallback values — the body stays valid JSON.

:::tip
When the receiving side can parse the platform's own format, prefer the `RAW_JSON` [content type](configure-instance.md#content-types) over a hand-written template that reproduces the request — no template to maintain, and new fields arrive automatically.
:::

## Building an XML body

Escape interpolated strings with `?xml`:

```
<subject>${((objectData.subject.name)!"")?xml}</subject>
```

A value like `shop "A" & <B>` renders as `shop &quot;A&quot; &amp; &lt;B&gt;`, keeping the document well-formed.
