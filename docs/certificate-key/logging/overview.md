---
sidebar_position: 1
---

# Logging Overview

The CZERTAINLY platform consists of multiple components/services that generate logs. The logs are essential for monitoring and troubleshooting the platform. In general, the logs are generated by the following components:

- **Core components** - The core components of the CZERTAINLY platform are the main source of logs. The core components include services that are managing lifecycle of the supported objects (e.g., certificates, keys, etc.), and the services that are providing the platform functionality (e.g., authentication, scheduling, etc.).

- **Connectors** - The connectors are the components that are connecting the CZERTAINLY platform with external systems. The connectors are generating logs for the communication with the external systems. The connector logs are typically outside of the control of the CZERTAINLY platform, and the logs are managed by the external systems.

## Types of logs

The CZERTAINLY platform is generating the following types of logs. You can find detailed information about the logs in the subsequent sections.

| Log type                                    | Structured                                    | Description                                                                                                                                                                                                                                                                    |
|---------------------------------------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**Application logs**](application-logs.md) | <span class="badge badge--danger">No</span>   | The application logs are generated to record the events that are affecting the platform. The application logs are used for monitoring and troubleshooting the platform. Its source could be also libraries used by Core.                                                       |
| [**Audit logs**](audit-logs.md)             | <span class="badge badge--success">Yes</span> | Audit log records all user operations to reconstruct any event in case of investigation. It also proves the compliance with the various standards and regulations, such as PCI DSS, ISO 27k, GDPR, WebTrust, etc.                                                              |
| [**Event logs**](event-logs.md)             | <span class="badge badge--success">Yes</span> | Event logs are used to record certificate management, cryptographic key management, and other operation-related events. The event logs are used to reconstruct the complete history of the operations and its source can be user or system itself in case of automatic events. |

## OpenTelemetry support

The CZERTAINLY platform supports the OpenTelemetry standard for logging. When the OpenTelemetry is enabled, the platform generates logs in the [OpenTelemetry format](https://opentelemetry.io/docs/specs/otel/logs/data-model/) and sends the logs to the target configured as exporter.

:::info[OpenTelemetry]
OpenTelemetry is a set of APIs, libraries, agents, and instrumentation to provide observability for cloud-native software. OpenTelemetry is a CNCF project. You can find more information about OpenTelemetry on the [OpenTelemetry website](https://opentelemetry.io/).
:::
