# Notifications

Platform implements a notification system that allows to informs users that something has happened, and typically provides additional information about what happened.

The notifications can be sent to the users internally, or externally via `Notification Provider`.

## Notification types

Currently, the platform supports the following notification types:

| Notification type            | Description                                                                                                                   | Additional information                                                                                                                                                                                                              |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Certificate status changed   | Notification when the certificate changes state with detail about the certificate                                             | [`NotificationDataCertificateStatusChanged`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/connector/notification/data/NotificationDataCertificateStatusChanged.java)     |
| Certificate action performed | Notification after certificate action (e.g.: issue, renew, rekey, revoke, etc.) was completed with detail about its execution | [`NotificationDataCertificateActionPerformed`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/connector/notification/data/NotificationDataCertificateActionPerformed.java) |
| Approval requested           | Notification about requesting approval on specific operation included                                                         | [`NotificationDataApproval`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/connector/notification/data/NotificationDataApproval.java)                                     |
| Approval closed              | Notification after approval was closed informing about the result of approval process                                         | [`NotificationDataApproval`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/connector/notification/data/NotificationDataApproval.java)                                     |
| Scheduled job completed      | Notification about scheduled job execution finished with result and detail of its execution                                   | [`NotificationDataScheduledJobCompleted`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/connector/notification/data/NotificationDataScheduledJobCompleted.java)           |
| Other                        | Uncategorized text notification about operations done in the platform                                                         | [`NotificationDataText`](https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/connector/notification/data/NotificationDataText.java)                                             |

## Internal vs. external notifications

Platform distinguishes between internal and external notifications.

Internal notifications are enabled by default and provides a way how to notice users of events even when other notification providers are not configured. 
Each logged-in user can see the notifications and their history in the platform.

External notifications are not mandatory and they are sent only if the `Notification` instances are configured and assigned to notification type.
For more information about `Notification` instances, see [Notification Provider](../../connectors/notification-provider) description.
