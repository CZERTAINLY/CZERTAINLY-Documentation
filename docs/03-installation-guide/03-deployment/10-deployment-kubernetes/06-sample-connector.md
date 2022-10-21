# Sample Connector

The following represents a sample deployment of a typical Connector independent of the Connector technology.

The deployment contains the following parts:

| Manifest | Description |
|------|-------------|
| `connector-secret.yaml` | `Secret` containing credential or other sensitive information for Connector, if needed |
| `connector-deployment.yaml` | `Deployment` of the Connector |
| `connector-service.yaml` | `Service` to create network access to Connector |


