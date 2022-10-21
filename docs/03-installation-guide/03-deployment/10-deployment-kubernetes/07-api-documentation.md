# API Documentation

The API Documentation can be deployed to better availability of all relevant APIs supported by the platform. This does not provide any functionality, contains only the OpenAPI specifications.

The deployment contains the following parts:

| Manifest | Description |
|------|-------------|
| `docs-deployment.yaml` | `Deployment` of the API Documentation |
| `docs-service.yaml` | `Service` to create network access to API Documentation |

## `docs-deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: docs-deployment
  namespace: czertainly
  labels:
    app: docs
spec:
  replicas: 1
  revisionHistoryLimit: 3
  selector:
    matchLabels:
      app: docs
  template:
    metadata:
      labels:
        app: docs
    spec:
      # access credentials to pull image from private repository
      imagePullSecrets:
      - name: regcred3key
      containers:
      - name: docs
        image: 3keycompany/czertainly-interface-documentation:2.0.1
        ports:
        - containerPort: 80
```

## `docs-service.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: docs
  name: docs-service
  namespace: czertainly
spec:
  ports:
    - port: 80
      protocol: "TCP"
  selector:
    app: docs
```