---
sidebar_position: 1
---

# Overview

This document outlines the steps necessary to deliver external notifications from the platform as e-mails using the Email Notification Provider, from creating the notification instance to writing the e-mail templates.

## Email Notification Provider

The **Email Notification Provider** is the [`Connector`](../../concept-design/architecture/connector.md) that implements the [Notification Provider](../../connectors/provider-interfaces/notification-provider.mdx) interface for e-mail delivery:

| Function Group          | Kind    |
|-------------------------|---------|
| `Notification Provider` | `EMAIL` |

When a [notification profile](../../concept-design/core-components/notification-profile.md) with a `Notification` instance of this connector is triggered by an [event](../../concept-design/core-components/workflow/event.md), `Core` resolves the recipients and hands the notification request to the connector. The connector renders the e-mail subject and content from the templates configured on the instance and sends the e-mail through the configured SMTP server to the addresses resolved from the recipients.

## Prerequisites

Before you start, make sure that:

- The Email Notification Provider connector is deployed, connected to an SMTP server, and registered as a `Connector` in the platform. Deploying and operating the connector is out of scope of this document — refer to the [connector repository](https://github.com/OmniTrustILM/email-notification-provider) for the deployment options.
- The recipients you want to notify carry an e-mail address the connector can use — either as platform users with an e-mail, or through a [custom attribute](../../settings/custom-attributes.md) holding the address (see [mapping attributes](../../concept-design/core-components/notification.md#mapping-attributes)).

## Next steps

1. [Create the notification instance](configure-instance.md) with the sender address and templates.
2. [Write the templates](templates.md) for the subject and content of the e-mails.
3. Use the instance in a [notification profile](../../concept-design/core-components/notification-profile.md) and associate the profile with the events you want to be notified about.
