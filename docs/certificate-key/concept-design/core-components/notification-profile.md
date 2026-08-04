---
sidebar_position: 21
---

# Notification Profile

The `Notification Profile` represents configuration how notifications are handled when used:
- **Who** should receive notification (recipients)
- **How** notification should be delivered (internal/external)
- **When** and **how often** notification should be sent
- **Which notification provider** to use for external delivery (like email, webhook, etc.)

`Notification Profile` has the following properties:

| Parameter             | Description                                                                                                                                                                                  |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                  | The distinctive label assigned to the `Notification Profile`                                                                                                                                 |
| UUID                  | The universally unique identifier uniquely representing the `Notification Profile`                                                                                                           |
| Description           | A concise yet informative explanation detailing the purpose and characteristics of the `Notification Profile`                                                                                |
| Recipient type        | Which [notification recipient](../architecture/notifications.md#notification-recipients) type should be used                                                                                 |
| Recipients            | List of specific recipients of chosen type. Applicable with user, groups and roles                                                                                                           |
| Notification instance | Defines which notification provider and instance should be used. It represents notification channel                                                                                          |
| Internal notification | Indicates if internal notification should be executed or not                                                                                                                                 |
| Frequency             | Used when notifying in context of monitoring events. It specifies interval between consecutive notifications and controls how often to repeat notification from the time when it was created |
| Repetitions           | Used when notifying in context of monitoring events. It specifies maximum number of notification repetitions                                                                                 |
| Event data            | Categories of the event object's data to include in external notifications. All disabled by default. See [Event data](#event-data)                                                          |

:::note
`Notification Profile` is versioned to ensure that already pending notifications are not influenced by configuration changes. Description and [event data](#event-data) categories are properties of the profile itself rather than of a version — changing them does not create a new version and applies immediately, including to already pending notifications.
:::

In case of notifying in context of monitoring events, notification system controls how often and how many notifications are sent to prevent spamming user with notifications carrying the same information.
Frequency and maximum repetitions are checked per notification profile, object and event that defines notification event.

:::note[Example of monitoring event]
When certificate expiring event is raised for certificate X, notification system will mark the time of lst notification of the event for certificate X through notification profile X and increment notification counter.
:::

## Event data

The `Notification Profile` can enrich external notifications with data about the object the event concerns. Four categories can be enabled independently, and all are disabled by default:

| Category          | Included data                                                                                                       |
|-------------------|---------------------------------------------------------------------------------------------------------------------|
| Custom attributes | Content of the [custom attributes](../../settings/custom-attributes.md) assigned to the object                       |
| Metadata          | Connector-sourced metadata of the object, grouped by the connector and source object that produced it                |
| Associations      | Objects associated with the object: owner, groups, and RA profile                                                    |
| Object content    | The content representation of the object when its type provides one — for certificates, the Base64-encoded DER data  |

The categories describe the event's **subject** object — the event's own object for most events, the object awaiting approval for approval events. A category yields data only when the subject object's type supports it, so the configuration is independent of the events the profile is used with — enabling a category that does not apply to some event simply contributes no data for that event. See [object data in external notifications](workflow/event.md#object-data-in-external-notifications) for what each event can yield and how the data reaches the [notification provider](../../connectors/provider-interfaces/notification-provider.mdx). For rendering the data in notification templates, see the [Email Notification Provider](../../integration-guides/email-notification-provider/templates.md) and [Webhook Notification Provider](../../integration-guides/webhook-notification-provider/templates.md) integration guides.

:::info[Required permissions]
Enabling event data categories authorizes export of the object data to the notification instance configured on the profile. Two categories therefore require additional permissions of the configuring user, verified when the category is being enabled and also when the notification instance is changed while such category remains enabled:

- **Custom attributes** requires the `Members` action on the `Attribute` resource without object-level restrictions.
- **Object content** requires the `Detail` action on the `Certificate` resource and the `Members` action on the `RA Profile` resource, both without object-level restrictions.

The check is performed at configuration time. Permissions lost later do not disable already configured profiles.
:::

:::note[Trust boundary]
Enable event data categories only for notification instances whose provider you trust with the exported data. For providers connected through a proxy, requests transit the message broker and may be durably retained there until consumed — the broker is part of the trust boundary for connector traffic.
:::

Secret content never leaves the platform: secret and credential typed values, as well as content of protected attribute definitions, are always excluded from the exported data regardless of the enabled categories.
