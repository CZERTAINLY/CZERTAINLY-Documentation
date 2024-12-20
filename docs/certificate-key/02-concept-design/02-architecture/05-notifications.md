# Notifications

In the context of our platform, notifications play a crucial role in keeping users informed about events and updates. There are two distinct categories of notifications: internal and external. Understanding the difference between these two types is essential for effectively utilizing our notification system.

## Internal notifications

Internal notifications are an integral part of the platform's functionality and are automatically enabled for all users by default. These notifications serve as a fundamental means of informing users about various events, even in cases where other external notification providers have not been configured. When users log in to the platform, they can readily access and review their internal notifications and their respective histories.

The primary purpose of internal notifications is to ensure that users are promptly informed about essential events directly within the platform. This enables users to stay up-to-date without relying on external communication channels. For instance, internal notifications can include updates on account activities, system changes, or any other relevant information that users need to be aware of while using the platform.

## External notifications

External notifications, on the other hand, are not obligatory and are dispatched exclusively when specific conditions are met. These notifications are sent out only if corresponding `Notification` instances have been configured and associated with a particular notification type. To gain a comprehensive understanding of how external notifications work, refer to the documentation on the [Notification Provider](../../connectors/notification-provider).

External notifications offer a more customized approach to notifying users based on their preferences and the specific types of events they wish to be alerted about. Unlike internal notifications, external notifications rely on designated notification providers to facilitate the dissemination of information to users outside the platform environment. This can include communication channels like email, SMS, or other third-party integrations.

In summary, internal notifications are a default feature that ensures users receive crucial information while using the platform, regardless of external notification configurations. External notifications, however, offer a more tailored and optional way of notifying users through designated notification providers. By leveraging both internal and external notifications effectively, users can stay informed and engaged with the platform according to their preferences and needs.

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

## Notification recipients

Notifications generated by the system can be directed towards various recipients based on their intended audience. The recipient of a notification can fall into one of the following categories:

- **User**: When a notification is directed at a specific user, it is sent exclusively to that individual. This personalized approach ensures that important messages reach the intended person directly.

- **Group**: Notifications can also be broadcasted to a predefined group of users who share a common purpose or affiliation. This can be achieved using group email addresses or similar communication channels. By sending notifications to a group, information can be efficiently disseminated to a larger audience with a single action.

- **Role**: In cases where notifications need to be received by all individuals fulfilling a particular role, such as administrators, auditors, or any other designated function, notifications can be targeted at a specific role. This streamlines communication to all relevant parties with the same responsibilities.

It's important to note that a single notification has the capability to be sent to multiple recipients simultaneously, regardless of whether they fall under the **User**, **Group**, or **Role** category. This flexibility ensures that the right people receive the right information at the right time. By offering diverse recipient options, the notification system maximizes its utility in various communication scenarios.
