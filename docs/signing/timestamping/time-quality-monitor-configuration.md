---
sidebar_position: 6
---

# Time Quality Monitor configuration

This page covers how to provision the message broker and set the environment variables that connect the [Time Quality Monitor](./time-quality-monitor.md) (TQM) and ILM. For what TQM does and how it evaluates clock accuracy, start with the [Time Quality Monitor](./time-quality-monitor.md) page.

The parameters that govern time quality evaluation itself — NTP servers, thresholds, and rules — are not set here. They are delivered from ILM at runtime as part of each [Time Quality Configuration](./time-quality-configuration.md).

---

## Broker configuration

This section describes what must be configured on the broker side for ILM and TQM to exchange the [message flows](./time-quality-monitor.md#message-flows). Both RabbitMQ and Azure Service Bus are supported; because the two brokers use different terminology for the same concepts, the required constructs are described separately for each to avoid confusion.

### RabbitMQ topology

The three [message flows](./time-quality-monitor.md#message-flows) share one exchange. Each flow has a dedicated queue bound to that exchange with a binding key matching the routing key the publisher uses for that flow.

In a standard Helm-based deployment the `provisioning-rabbitmq` service creates all of the following automatically. For a self-managed broker, provision them manually before starting either component.

**1. Exchange**

Create one exchange. Neither ILM nor TQM declares it at runtime — it must already exist.

| Property | Default | Override |
|---|---|---|
| Exchange name | `ilm` | `BROKER_EXCHANGE` |

**2. Queue: Config request**

A queue bound to the exchange. TQM uses the binding key to publish; ILM uses the queue name to consume. Configure with `x-max-length: 1` and `x-overflow: drop-head` — the queue holds only the latest request; older messages are silently discarded.

| Property | Default | Override |
|---|---|---|
| Queue name | `time-quality.config-request` | `BROKER_QUEUE_TIME_QUALITY_CONFIG_REQUEST` (ILM) |
| Binding key | `time-quality.config-request` | `BROKER_ROUTINGKEY_TIME_QUALITY_CONFIG_REQUEST` (ILM, TQM) |

**3. Queue: Config snapshot**

A queue bound to the exchange. ILM uses the binding key to publish; TQM uses the queue name to consume. Configure with `x-max-length: 1` and `x-overflow: drop-head` — the queue holds only the latest full snapshot; older snapshots are silently discarded.

| Property | Default | Override |
|---|---|---|
| Queue name | `time-quality.config` | `BROKER_QUEUE_TIME_QUALITY_CONFIG` (ILM, TQM) |
| Binding key | `time-quality.config` | `BROKER_ROUTINGKEY_TIME_QUALITY_CONFIG` (ILM, TQM) |

**4. Queue: Results**

A queue bound to the exchange. TQM uses the binding key to publish; ILM uses the queue name to consume. This is an unbounded work queue — no depth limit applies.

| Property | Default | Override |
|---|---|---|
| Queue name | `time-quality.results` | `BROKER_QUEUE_TIME_QUALITY_RESULTS` (ILM) |
| Binding key | `time-quality.results` | `BROKER_ROUTINGKEY_TIME_QUALITY_RESULTS` (ILM, TQM) |

**Broker permissions**

The TQM user requires **write** rights on the exchange (used for both `config-request` and `results` flows) and **read** rights on the `time-quality.config` queue. The TQM must not declare or modify exchanges, queues, or bindings — topology is provisioned by the platform (the Helm chart).

### Azure Service Bus topology

The three [message flows](./time-quality-monitor.md#message-flows) share one topic. Each flow has a dedicated subscription on that topic; the Correlation Filter on each subscription must match the subject the publisher sets on its messages.

All constructs must be provisioned manually in Azure Service Bus before starting either component. No automatic provisioning is performed by the Helm charts.

**1. Topic**

Create one topic. Neither ILM nor TQM declares it at runtime — it must already exist.

| Property | Default | Override |
|---|---|---|
| Name | `ilm` | `BROKER_EXCHANGE` |

**2. Subscription: Config request**

A subscription on the topic with a Correlation Filter on `Properties.Subject`. TQM sets the subject when publishing; ILM uses the subscription name to consume.

| Property | Default | Override |
|---|---|---|
| Subscription name | `time-quality.config-request` | `BROKER_QUEUE_TIME_QUALITY_CONFIG_REQUEST` (ILM) |
| Correlation filter | `time-quality.config-request` | `BROKER_ROUTINGKEY_TIME_QUALITY_CONFIG_REQUEST` (ILM, TQM) |

**3. Subscription: Config snapshot**

A subscription on the topic with a Correlation Filter on `Properties.Subject`. ILM sets the subject when publishing; TQM uses the subscription name to consume.

| Property | Default | Override |
|---|---|---|
| Subscription name | `time-quality.config` | `BROKER_QUEUE_TIME_QUALITY_CONFIG` (ILM, TQM) |
| Correlation filter | `time-quality.config` | `BROKER_ROUTINGKEY_TIME_QUALITY_CONFIG` (ILM, TQM) |

**4. Subscription: Results**

A subscription on the topic with a Correlation Filter on `Properties.Subject`. TQM sets the subject when publishing; ILM uses the subscription name to consume.

| Property | Default | Override |
|---|---|---|
| Subscription name | `time-quality.results` | `BROKER_QUEUE_TIME_QUALITY_RESULTS` (ILM) |
| Correlation filter | `time-quality.results` | `BROKER_ROUTINGKEY_TIME_QUALITY_RESULTS` (ILM, TQM) |

---

## TQM environment variables

All TQM configuration is supplied through environment variables and covers operational concerns such as the broker connection. The parameters that govern time quality monitoring itself — NTP servers, thresholds, and evaluation rules — are not configured here; they are delivered from ILM at runtime as part of the `Time Quality Configuration`. See [Time Quality Configuration](./time-quality-configuration.md).

### Health endpoint

| Variable | Default | Description |
|---|---|---|
| `LISTEN_PORT` | `8080` | Port TQM listens on for the `GET /health` endpoint. Used by container liveness and readiness probes. |

### Broker selection

Select the broker type by setting `BROKER_TYPE`:

| `BROKER_TYPE` | Broker |
|---|---|
| `RABBITMQ` (default) | RabbitMQ |
| `SERVICEBUS` | Azure Service Bus |

### Broker connection

#### RabbitMQ

TQM connects to RabbitMQ over AMQP 1.0 using SASL PLAIN authentication. You can specify the broker address either as a full URL via `BROKER_URL`, or by setting `BROKER_HOST` and `BROKER_PORT` separately — `BROKER_URL` takes precedence when both are provided. The virtual host is passed in the AMQP Open frame hostname as `vhost:<BROKER_VIRTUAL_HOST>`.

TLS is disabled by default. Enable it with `BROKER_TLS_ENABLED`, or use an `amqps://` URL — both switch the connection scheme to `amqps://`. When TLS is active, TQM loads a PKCS12 keystore for mutual TLS authentication and an optional PKCS12 truststore for verifying the broker's certificate.

| Variable | Default | Description |
|---|---|---|
| `BROKER_URL` | — | Full AMQP(S) connection URL. When set, overrides `BROKER_HOST` and `BROKER_PORT`. |
| `BROKER_HOST` | — | RabbitMQ hostname. Used only when `BROKER_URL` is not set. |
| `BROKER_PORT` | — | RabbitMQ port. Used only when `BROKER_URL` is not set. |
| `BROKER_VIRTUAL_HOST` | — | RabbitMQ virtual host. Transmitted in the AMQP Open frame hostname as `vhost:<value>`. |
| `BROKER_USERNAME` | — | SASL PLAIN username. |
| `BROKER_PASSWORD` | — | SASL PLAIN password. |
| `BROKER_TLS_ENABLED` | `false` | Enables TLS. When true, the connection scheme becomes `amqps://`. Implied by the `amqps://` scheme in `BROKER_URL`. |
| `BROKER_TLS_KEYSTORE` | — | Path to a PKCS12 keystore file for mutual TLS with the broker. |
| `BROKER_TLS_KEYSTORE_PASSWORD` | — | Password for `BROKER_TLS_KEYSTORE`. |
| `BROKER_TLS_TRUSTSTORE` | — | Path to a PKCS12 truststore file for broker CA verification. Optional. |
| `BROKER_TLS_TRUSTSTORE_PASSWORD` | — | Password for `BROKER_TLS_TRUSTSTORE`. |

#### Azure Service Bus

TQM connects to Azure Service Bus over AMQP 1.0 with TLS always active. Set `BROKER_URL` to the Service Bus namespace endpoint — the `amqps://` scheme is required and implies TLS.

| Variable | Default | Description |
|---|---|---|
| `BROKER_URL` | — | Service Bus namespace URL. Required. Format: `amqps://<namespace>.servicebus.windows.net`. |

Two authentication modes are supported — configure one or the other, not both:

##### SAS authentication

TQM authenticates using SASL PLAIN, sending the SAS policy name and token as credentials.

| Variable | Default | Description |
|---|---|---|
| `BROKER_USERNAME` | — | SAS policy name. |
| `BROKER_PASSWORD` | — | SAS token. |

##### Entra ID authentication

TQM authenticates using SASL ANONYMOUS and completes a CBS (Claim-Based Security) token exchange immediately after the connection opens. An OAuth2 token is obtained from Entra ID using the configured client credentials and sent to the broker to authorize the session.

| Variable | Default | Description |
|---|---|---|
| `BROKER_AZURE_TENANT_ID` | — | Entra ID tenant ID. |
| `BROKER_AZURE_CLIENT_ID` | — | Entra ID application (client) ID. |
| `BROKER_AZURE_CLIENT_SECRET` | — | Entra ID client secret. |

### Reconnection

TQM manages the AMQP connection lifecycle internally. On any connection or link error it closes the existing connection, waits through the configured backoff sequence, and redials. The receiver and sender are rebuilt on each reconnect. After all backoff entries are exhausted TQM logs an error and continues waiting — it does not exit.

| Variable | Default | Description |
|---|---|---|
| `BACKOFF` | `PT100MS` | Comma-separated ISO 8601 durations defining the reconnection backoff schedule. Recommended: `PT100MS, PT200MS, PT500MS, PT1S, PT2S, PT5S, PT10S`. |

### Message routing

These variables control the exchange or topic name and the routing keys and queue names used for each message flow. The values must match the constructs provisioned on the broker — see [Broker configuration](#broker-configuration).

| Variable | Default | Description |
|---|---|---|
| `BROKER_EXCHANGE` | `ilm` | Name of the RabbitMQ exchange or Azure Service Bus topic shared by all three message flows. Must match the value configured in ILM. |
| `BROKER_ROUTINGKEY_TIME_QUALITY_CONFIG_REQUEST` | `time-quality.config-request` | Routing key (RabbitMQ) or subject (Service Bus) TQM uses when publishing config requests. |
| `BROKER_ROUTINGKEY_TIME_QUALITY_CONFIG` | `time-quality.config` | Binding key (RabbitMQ) or Correlation Filter value (Service Bus) for the config-snapshot queue or subscription. Must match the value configured in ILM. |
| `BROKER_ROUTINGKEY_TIME_QUALITY_RESULTS` | `time-quality.results` | Routing key (RabbitMQ) or subject (Service Bus) TQM uses when publishing NTP check results. |
| `BROKER_QUEUE_TIME_QUALITY_CONFIG` | `time-quality.config` | Name of the queue (RabbitMQ) or subscription (Service Bus) from which TQM consumes config snapshots. |
| `BROKER_REQUEST_TIMEOUT` | — | How long TQM waits for a config snapshot before re-sending the config request. ISO 8601 duration (e.g. `PT5S`). |

---

## ILM environment variables

ILM must be configured to connect to the same broker and use matching routing keys and queue names so that messages are correctly exchanged with TQM. ILM's general broker connection settings are covered in the ILM configuration documentation. The variables listed here are specific to the time quality messaging integration.

All variables use the same naming convention as TQM — where both sides share a variable, the default values match, and both must be set to the same value if overridden.

### Message routing

| Variable | Default | Description |
|---|---|---|
| `BROKER_EXCHANGE` | `ilm` | Name of the RabbitMQ exchange or Azure Service Bus topic shared by all three message flows. Must match the value configured in TQM. |
| `BROKER_ROUTINGKEY_TIME_QUALITY_CONFIG_REQUEST` | `time-quality.config-request` | Routing key (RabbitMQ) or subject (Service Bus) ILM expects on incoming config requests from TQM. Must match the value configured in TQM. |
| `BROKER_ROUTINGKEY_TIME_QUALITY_CONFIG` | `time-quality.config` | Routing key (RabbitMQ) or subject (Service Bus) ILM uses when publishing config snapshots to TQM. Must match the value configured in TQM. |
| `BROKER_ROUTINGKEY_TIME_QUALITY_RESULTS` | `time-quality.results` | Routing key (RabbitMQ) or subject (Service Bus) ILM expects on incoming results from TQM. Must match the value configured in TQM. |
| `BROKER_QUEUE_TIME_QUALITY_CONFIG_REQUEST` | `time-quality.config-request` | Name of the queue (RabbitMQ) or subscription (Service Bus) from which ILM consumes config requests sent by TQM. |
| `BROKER_QUEUE_TIME_QUALITY_CONFIG` | `time-quality.config` | Name of the queue (RabbitMQ) or subscription (Service Bus) ILM publishes config snapshots to. Must match `BROKER_QUEUE_TIME_QUALITY_CONFIG` on the TQM side. |
| `BROKER_QUEUE_TIME_QUALITY_RESULTS` | `time-quality.results` | Name of the queue (RabbitMQ) or subscription (Service Bus) from which ILM consumes NTP check results published by TQM. |
