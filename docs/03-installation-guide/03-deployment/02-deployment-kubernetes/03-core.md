# Core

The deployment of the core contains the following parts:

| Manifest | Description |
|------|-------------|
| `trusted-certificates-secret.yaml` | `Secret` holding the trusted CA certificates for client authorization |
| `core-secret.yaml` | `Secret` holding access credentials to database and truststore secret |
| `core-deployment.yaml` | `Deployment` of the Core |
| `core-service.yaml` | `Service` to create access to the Core |

## `trusted-certificates-secret.yaml`

:::caution
Include all trusted certificates in the `trusted-certificates-secret.yaml` file that should be used for client authorization.
:::

```yaml
apiVersion: v1
kind: Secret
metadata:
  namespace: czertainly
  name: trusted-certificates
type: Opaque
stringData:
  trusted-certificates.pem: |+
    -----BEGIN CERTIFICATE-----
    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
    bmafaPj1x+cNQ5AM
    -----END CERTIFICATE-----
    -----BEGIN CERTIFICATE-----
    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
    -----END CERTIFICATE-----
```

## `core-secret.yaml`

```yaml
apiVersion: v1
data:
  password: cGFzc3dvcmQ=
  username: Y3plcnRhaW5seXVzZXI=
  tspassword: cGFzc3dvcmQ=
kind: Secret
metadata:
  name: core-secret
  namespace: czertainly
```

## `core-deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: core-deployment
  namespace: czertainly
  labels:
    app: core
spec:
  replicas: 1
  revisionHistoryLimit: 3
  selector:
    matchLabels:
      app: core
  template:
    metadata:
      labels:
        app: core
    spec:
      containers:
      - name: core
        image: 3keycompany/czertainly-core:2.0.1
        env:
        - name: HEADER_ENABLED
          value: "true"
        - name: JDBC_URL
          value: "jdbc:postgresql://localhost:5432/czertainly?characterEncoding=UTF-8"
        - name: JDBC_USERNAME
          valueFrom:
            secretKeyRef:
              name: core-secret
              key: username
        - name: JDBC_PASSWORD
          valueFrom:
            secretKeyRef:
              name: core-secret
              key: password
        - name: TS_PASSWORD
          valueFrom:
            secretKeyRef:
              name: core-secret
              key: tspassword
        ports:
        - containerPort: 8080
        volumeMounts:
        - name: trusted-certificate-volume
          mountPath: /opt/czertainly/
      volumes:
      - name: trusted-certificate-volume
        secret:
          secretName: trusted-certificates
      - name: core-secret
        secret:
          secretName: core-secret
```

## `core-service.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: core
  name: core-service
  namespace: czertainly
spec:
  ports:
    - port: 8080
      protocol: "TCP"
  selector:
    app: core
```