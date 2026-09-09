---
sidebar_position: 1
---

# Overview

This document outlines the steps necessary to deliver external notifications from the platform to an HTTP endpoint using the Webhook Notification Provider — for integrations with ticketing systems, chat tools, automation pipelines, or any service that accepts an HTTP callback.

## Webhook Notification Provider

The **Webhook Notification Provider** is the [`Connector`](../../concept-design/architecture/connector.md) that implements the [Notification Provider](../../connectors/provider-interfaces/notification-provider.mdx) interface for HTTP delivery:

| Function Group          | Kind      |
|-------------------------|-----------|
| `Notification Provider` | `WEBHOOK` |

When a [notification profile](../../concept-design/core-components/notification-profile.md) with a `Notification` instance of this connector is triggered by an [event](../../concept-design/core-components/workflow/event.md), the connector sends the notification content as an HTTP `POST` request to the URL configured on the instance. The body is either the whole notification request serialized as JSON, or rendered from a [template](templates.md) — see [content types](configure-instance.md#content-types).

Every request carries these headers:

| Header                   | Value                                                        |
|--------------------------|---------------------------------------------------------------|
| `Content-Type`           | According to the configured content type                      |
| `X-CZERTAINLY-Timestamp` | Time of the request in milliseconds since the epoch           |
| `X-CZERTAINLY-Nonce`     | Random Base64-encoded value, unique per request               |

The webhook posts to its configured URL regardless of the notification's recipients, so profiles targeting a webhook instance typically use the recipient type `None` — see [notification recipients](../../concept-design/architecture/notifications.md#notification-recipients). When the profile does resolve recipients, they are part of the delivered content.

## Prerequisites

Before you start, make sure that:

- The Webhook Notification Provider connector is deployed and registered as a `Connector` in the platform. Deploying and operating the connector is out of scope of this document — refer to the [connector repository](https://github.com/OmniTrustILM/webhook-notification-provider) for the deployment options.
- The receiving endpoint is reachable from the connector and accepts `POST` requests with the configured content type.

## Next steps

1. [Create the notification instance](configure-instance.md) with the URL and content type.
2. For templated content, [write the payload template](templates.md).
3. Use the instance in a [notification profile](../../concept-design/core-components/notification-profile.md) and associate the profile with the events you want delivered.
