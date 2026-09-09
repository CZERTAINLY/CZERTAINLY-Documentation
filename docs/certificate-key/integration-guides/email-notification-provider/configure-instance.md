---
sidebar_position: 2
---

# Configure the notification instance

Create a [`Notification`](../../concept-design/core-components/notification.md) instance of the Email Notification Provider connector with the kind `EMAIL`. The instance represents one e-mail notification channel — one sender identity with one pair of templates. Create multiple instances when different notifications need different senders or templates.

## Instance attributes

| Attribute              | Content Type | Description                                                                                       |
|------------------------|--------------|----------------------------------------------------------------------------------------------------|
| Sender email address   | `STRING`     | E-mail address from which the notifications will be sent                                            |
| Email subject          | `STRING`     | Subject of the e-mail. Supports [template expressions](templates.md)                                |
| Email content template | `CODEBLOCK`  | Content of the e-mail in HTML syntax. Supports [template expressions](templates.md)                 |

Both the subject and the content are rendered as templates for every notification, so they can include data from the notification request — see [Templates](templates.md).

## Mapping attributes

The connector declares one [mapping attribute](../../concept-design/core-components/notification.md#mapping-attributes) that tells `Core` where to find the recipient's e-mail address:

| Mapping attribute       | Content Type | Description                                                    |
|-------------------------|--------------|-------------------------------------------------------------------|
| Recipient email address | `STRING`     | E-mail address(es) the notification will be delivered to          |

When creating the instance, map this attribute to the [custom attribute](../../settings/custom-attributes.md) that holds the e-mail address on your recipients. At delivery time, the connector collects each recipient's addresses from two sources: the e-mail address of the recipient itself, when it is a platform user with one, and the value(s) of the mapped attribute. Either source alone is sufficient.

Multiple addresses can be resolved from the mapped attribute for a single recipient — either as multiple values of the custom attribute, or as a single value with addresses separated by `,` or `;`. Each address is validated individually and invalid addresses are skipped.

## Use in a notification profile

Select the instance as the `Notification instance` of a [notification profile](../../concept-design/core-components/notification-profile.md) and choose the recipients. A recipient without any resolvable address is skipped with a warning, and when no address can be resolved from any recipient, the notification fails — the e-mail channel cannot deliver without addresses.

To include data about the event's object in the e-mail — custom attributes, metadata, associations, or the certificate itself — enable [event data categories](../../concept-design/core-components/notification-profile.md#event-data) on the profile and render the data in the [templates](templates.md).
