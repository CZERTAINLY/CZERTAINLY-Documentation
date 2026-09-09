---
sidebar_position: 2
---

# Configure the notification instance

Create a [`Notification`](../../concept-design/core-components/notification.md) instance of the Webhook Notification Provider connector with the kind `WEBHOOK`. The instance represents one webhook — one target URL with one content configuration. Create multiple instances when different notifications go to different endpoints or need different payloads.

## Instance attributes

| Attribute        | Content Type | Description                                                                       |
|------------------|--------------|--------------------------------------------------------------------------------------|
| Webhook URL      | `STRING`     | URL the notification content is sent to as an HTTP `POST` request                     |
| Content type     | `STRING`     | How the request body is built — see [content types](#content-types)                   |
| Content template | `CODEBLOCK`  | Template of the request body, in the selected syntax. Not used with `RAW_JSON`        |

The connector declares no [mapping attributes](../../concept-design/core-components/notification.md#mapping-attributes) — delivery goes to the configured URL, not to per-recipient addresses.

## Content types

| Content type | Request body                                                       | `Content-Type` header |
|--------------|---------------------------------------------------------------------|------------------------|
| `RAW_JSON`   | The whole notification request serialized as JSON, without a template | `application/json`     |
| `JSON`       | Rendered from the content [template](templates.md)                   | `application/json`     |
| `XML`        | Rendered from the content [template](templates.md)                   | `application/xml`      |

`RAW_JSON` is the zero-template integration: the endpoint receives the complete notification request — the event information, the resolved recipients, and, when [event data categories](../../concept-design/core-components/notification-profile.md#event-data) are enabled on the profile, the object data. The structure is defined by the [send notification operation](/api/connector-notification-provider/#tag/Notification-instances-Management/operation/sendNotification) of the Notification Provider interface, so the receiving side parses a stable, documented format that can evolve with the platform.

:::info
Passing the object data through requires a connector version built against `interfaces` version `2.20.0` or later — earlier versions do not know the `objectData` field and do not deliver it.
:::

Use `JSON` or `XML` with a template when the endpoint expects its own payload format — for example a chat tool's message schema or a ticketing system's API.

## Use in a notification profile

Select the instance as the `Notification instance` of a [notification profile](../../concept-design/core-components/notification-profile.md). The recipient type `None` fits the webhook pattern — no recipients are resolved and the payload still carries the full event content. To include data about the event's object, enable [event data categories](../../concept-design/core-components/notification-profile.md#event-data) on the profile; with `RAW_JSON` the data arrives automatically as `objectData`, with a template it is available to render.
