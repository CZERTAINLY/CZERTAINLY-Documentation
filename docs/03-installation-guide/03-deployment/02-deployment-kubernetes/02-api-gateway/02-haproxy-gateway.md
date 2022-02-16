# HAProxy Gateway

`HAProxy` is a free, very fast and reliable reverse-proxy offering high availability, load balancing, and proxying for TCP and HTTP-based applications.

The `HAProxy` is used as a simple API Gateway to the platform. The `HAProxy` is configured to forward the request to the platform. You can configure and run it using the following guide.

It contains the following manifests:

| Manifest | Description |
|------|-------------|
| `api-gateway-configmap.yaml` | `ConfigMap` holding the `haproxy.cfg` configuration |
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
  haproxy.cfg: |
    global
        log stdout format raw local0 debug

    defaults
        log global
        timeout connect 5s
        timeout client 1m
        timeout server 1m

    frontend api_gateway
        mode http
        bind :8080

        # Forward client certificate from the SSL_CLIENT_CERT to X-APP-CERTIFICATE header
        http-request add-header X-APP-CERTIFICATE %[req.hdr(ssl-client-cert)]

        acl PATH_api path_beg -i /api
        acl PATH_administrator path_beg -i /administrator
        acl PATH_operator path_beg -i /operator
        # optional
        acl PATH_docs path_beg -i /docs

        use_backend core if PATH_api
        use_backend fe_administrator if PATH_administrator
        use_backend fe_operator if PATH_operator
        # optional
        use_backend docs if PATH_docs

        default_backend no-match

    backend no-match
        mode http
        http-request deny deny_status 404

    backend core
        mode http
        server core core-service:8080

    backend fe_administrator
        mode http
        server fe-administrator fe-administrator-service:80

    backend fe_operator
        mode http
        server fe-operator fe-operator-service:80

    # optional
    backend docs
        mode http
        server docs docs-service:80
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
        image: haproxy
        ports:
        - containerPort: 8080
          name: http
        volumeMounts:
        - name: api-gateway-config-volume
          mountPath: /usr/local/etc/haproxy
      volumes:
      - name: api-gateway-config-volume
        configMap:
          name: api-gateway-configmap
          items:
          - key: haproxy.cfg
            path: haproxy.cfg
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
    - port: 8080
      protocol: "TCP"
  selector:
    app: api-gateway
```