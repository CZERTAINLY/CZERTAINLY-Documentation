# Troubleshooting

```bash
export POD_NAME=$(kubectl get pods --namespace czertainly -l "app.kubernetes.io/name=api-gateway-haproxy,app.kubernetes.io/instance=czertainly-tlm" -o jsonpath="{.items[0].metadata.name}")
export CONTAINER_PORT=$(kubectl get pod --namespace czertainly $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
echo "Visit http://127.0.0.1:8080/administrator to use your application"
kubectl --namespace czertainly port-forward $POD_NAME 8080:$CONTAINER_PORT
```