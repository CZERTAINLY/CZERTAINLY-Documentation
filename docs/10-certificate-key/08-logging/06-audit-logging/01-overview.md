# Audit Logging

Audit log records all activities and operations in CZERTAINLY initiated by some user. It can be used to reconstruct any event in case of investigation. It also proves the compliance with the various standards and regulations, such as PCI DSS, ISO 27k, GDPR, WebTrust, etc.

## Audit log structure

Audit log consists of the following information:

| Part                  | Short description                                                         |
|-----------------------|---------------------------------------------------------------------------|
| **ID**                | Sequence number of the audit log record                                   |
| **Author**            | Identification of user or system component resposnsible for the operation |
| **Created**           | Timestamp of the audit log record                                         |
| **Operation Status**  | The result of the opration                                                |
| **Origination**       | Part of the system from which the operation was excuted                   |
| **Affected Data**     | Identification of object name that was affected by the operation          |
| **Object Identifier** | Identification of the particular object that was affected                 |
| **Operation**         | Operation type executed                                                   |
| **Additional Data**   | Additional data that can be related to the operation performed            |

## Audit log protection

The audit log records are stored in the database of the Core. id is a sequence of number starting from 1, when the audit log was enabled. In case there is a gap in the sequence, the audit log integrity was compromised.

Audit log records can be further shipped to the SIEM solution, for example through the syslog. In such case, audit log records can be signed to protect its integrity from modification.

:::info
Integrity protection of audit log records through signing the data may be implemented in the future releases.
:::