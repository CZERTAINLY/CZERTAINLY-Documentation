# Operator Web

The Operator Web is a web interface that allows you to manage certificates and related modules in the platform.
The deployment contains the following parts:

| Manifest | Description |
|------|-------------|
| `fe-operator-deployment.yaml` | `Deployment` of the Operator Web |
| `fe-operator-service.yaml` | `Service` to create network access to Operator Web |

## `fe-operator-deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fe-operator-deployment
  namespace: czertainly
  labels:
    app: fe-operator
spec:
  replicas: 1
  revisionHistoryLimit: 3
  selector:
    matchLabels:
      app: fe-operator
  template:
    metadata:
      labels:
        app: fe-operator
    spec:
      # access credentials to pull image from private repository
      imagePullSecrets:
      - name: regcred3key
      containers:
      - name: fe-operator
        image: 3keycompany/czertainly-frontend-operator:1.0.0
        ports:
        - containerPort: 80
```

## `fe-operator-service.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: fe-operator
  name: fe-operator-service
  namespace: czertainly
spec:
  ports:
    - port: 80
      protocol: "TCP"
  selector:
    app: fe-operator
```