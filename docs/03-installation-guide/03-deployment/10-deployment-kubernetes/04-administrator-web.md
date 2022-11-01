# Administrator Web

The Administrator Web is a web interface that allows you to configure the platform.
The deployment contains the following parts:

| Manifest | Description |
|------|-------------|
| `fe-administrator-deployment.yaml` | `Deployment` of the Administrator Web |
| `fe-administrator-service.yaml` | `Service` to create network access to Administrator Web |

## `fe-administrator-deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fe-administrator-deployment
  namespace: czertainly
  labels:
    app: fe-administrator
spec:
  replicas: 1
  revisionHistoryLimit: 3
  selector:
    matchLabels:
      app: fe-administrator
  template:
    metadata:
      labels:
        app: fe-administrator
    spec:
      # access credentials to pull image from private repository
      imagePullSecrets:
      - name: regcred3key
      containers:
      - name: fe-administrator
        image: 3keycompany/czertainly-frontend-administrator:2.0.0
        ports:
        - containerPort: 80
```

## `fe-administrator-service.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: fe-administrator
  name: fe-administrator-service
  namespace: czertainly
spec:
  ports:
    - port: 80
      protocol: "TCP"
  selector:
    app: fe-administrator
```