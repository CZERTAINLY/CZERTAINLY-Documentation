# Kong Gateway

`Kong` is a scalable, open source API Platform (also known as an API Gateway or API Middleware).

The `Kong` is used as a simple API Gateway to the platform. The `Kong` is configured to forward the request to the platform. You can configure and run it using the following guide.

It contains the following manifests:

| Manifest | Description |
|------|-------------|
| `api-gateway-configmap.yaml` | `ConfigMap` holding the `kong.yml` declarative configuration |
| `api-gateway-deployment.yaml` | `Deployment` of the API Gateway |
| `api-gateway-service.yaml` | `Service` to create access for the API Gateway |

## `api-gateway-configmap.yaml`

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: api-gateway-configmap
  namespace: czertainly
data:
  kong.yml: |
    _format_version: "2.1"
    _transform: true

    services:
    - name: czertainly-core
      host: czertainly-core-service
      port: 8080
      protocol: http
      routes:
      - name: czertainly-core_route
        strip_path: false
        paths:
        - /api*
      plugins:
      - name: request-transformer
        config:
          rename:
            headers:
            - SSL_CLIENT_CERT:X-APP-CERTIFICATE
    - name: czertainly-fe-administrator
      host: czertainly-fe-administrator-service
      port: 80
      protocol: http
      path: /
      routes:
      - name: czertainly-fe-administrator_route
        strip_path: false
        paths:
        - /administrator*
    - name: czertainly-fe-operator
      host: czertainly-fe-operator-service
      port: 80
      protocol: http
      routes:
      - name: czertainly-fe-operator_route
        strip_path: false
        paths:
        - /operator*
```

## `api-gateway-deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-gateway-deployment
  namespace: czertainly
  labels:
    app: api-gateway
spec:
  replicas: 1
  revisionHistoryLimit: 3
  selector:
    matchLabels:
      app: api-gateway
  template:
    metadata:
      labels:
        app: api-gateway
    spec:
      containers:
        - name: api-gateway
          image: kong:2.7.1-alpine
          env:
            - name: KONG_DATABASE
              value: "off"
            - name: KONG_PROXY_ACCESS_LOG
              value: "/dev/stdout"
            - name: KONG_ADMIN_ACCESS_LOG
              value: "/dev/stdout"
            - name: KONG_PROXY_ERROR_LOG
              value: "/dev/stderr"
            - name: KONG_ADMIN_ERROR_LOG
              value: "/dev/stderr"
            - name: KONG_ADMIN_LISTEN
              value: "0.0.0.0:8001, 0.0.0.0:8444 ssl"
            - name: KONG_DECLARATIVE_CONFIG
              value: "/kong/declarative/kong.yml"
          ports:
            - containerPort: 8080
              name: consumer-http
            - containerPort: 8443
              name: consumer-https
            - containerPort: 8001
              name: admin-http
            - containerPort: 8444
              name: admin-https
          volumeMounts:
            - name: api-gateway-config-volume
              mountPath: /kong/declarative
      volumes:
        - name: api-gateway-config-volume
          configMap:
            name: api-gateway-configmap
            items:
              - key: kong.yml
                path: kong.yml
```

## `api-gateway-service.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: api-gateway
  name: api-gateway-service
  namespace: czertainly
spec:
  ports:
    - port: 8000
      protocol: "TCP"
  selector:
    app: api-gateway
```