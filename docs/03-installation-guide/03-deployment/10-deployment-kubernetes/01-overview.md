# Overview

:::warning Deprecated deployment 
Deployment using Kubernetes manifests becomes complex especially in case you want to manage multiple connectors and platform grows. Therefore, this type of deployment is considered to be deprecated in favor of the deployment using Helm charts or Virtual appliance and will not be further maintained and extended. 
:::

The platform can be easily deployed using Kubernetes. The following provides a simple Kubernetes manifests for the platform that can be uased out-of-the-box to deploy in few minutes.

Entry point for the platform differs based on the environment setup and technology used. To create a complete solution, we will use `Ingress`, but any approach can be used.

## Deployment of the platform services

The following table explains the deployment parts and provides references for further details:

| Part | Description | Reference |
| ---- | ----------- | --------- |
| **API Gateway** | Entry point for the platform. API gateway ensures correct routing and validation of the requests coming to the platform. Any API gateway can be used. In the references, you can find examples how to configure and run popular API gateways for the platform. | <ul> <li>[Kong](api-gateway/kong-gateway)</li> <li>[HAProxy](api-gateway/haproxy-gateway)</li> </ul> |
| **Core** | The Core of the platform | [Core](core) |
| **Administrator Web** (optional) | Administrator Web UI| [Administrator Web](administrator-web) |
| **Operator Web** (optional) | Operator Web UI | [Operator Web](operator-web) |
| **Sample Connector** (optional) | Sample Connector integration in the Kubernetes environment | [Sample Connector](sample-connector) |
| **API Documentation** (optional) | OpenAPI documentation for the REST APIs | [API Documentation](api-documentation) |

## Publishing for the user access

In order users can access the platform, we need to create and access point which has the following functions:
- accepts trusted client certificates issued from trusted certification authorities
- terminates the TLS with mutual authentication
- forwards client certificate and request to the platform **API Gateway**

The simple example is `Ingress` with the following configuration:
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: czertainly-ingress
  namespace: czertainly
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt
    kubernetes.io/ingress.class: public
    kubernetes.io/tls-acme: "true"
    #nginx.ingress.kubernetes.io/ssl-passthrough: "true"
    # If you encounter a redirect loop or are getting a 307 response code 
    # then you need to force the nginx ingress to connect to the backend using HTTPS.
    #
    nginx.ingress.kubernetes.io/backend-protocol: "HTTP"
    # Enable client certificate authentication
    nginx.ingress.kubernetes.io/auth-tls-verify-client: "on"
    # Create the secret containing the trusted ca certificates
    nginx.ingress.kubernetes.io/auth-tls-secret: "czertainly/czertainly-ingress-ca-secret"
    # Specify an error page to be redirected to verification errors
    nginx.ingress.kubernetes.io/auth-tls-error-page: "https://demo.server.com/forbidden.html"
    # Specify the verification depth in the client certificates chain
    nginx.ingress.kubernetes.io/auth-tls-verify-depth: "3"
    # Specify if certificates are passed to upstream server
    nginx.ingress.kubernetes.io/auth-tls-pass-certificate-to-upstream: "true"
spec:
  rules:
  - host: demo.server.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service: 
            name: api-gateway-service
            port:
              number: 8080
              #name: https
  tls:
  - hosts:
    - demo.server.com
    secretName: demo.server.com-secret # do not change
```

Whe request is authenticated, the certificate will be forwarded to **API Gateway** in the `SSL_CLIENT_CERT` header together with the request that the platform will handle.