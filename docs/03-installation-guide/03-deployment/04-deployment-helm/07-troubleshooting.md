# Troubleshooting

## Timed out waiting for the condition

When the installation or upgrade fails with the following reason:
```bash
Error: INSTALLATION FAILED: failed post-install: timed out waiting for the condition
```
It is most probably because of reaching the default Helm timeout during deployment when Helm is trying to download all missing container images. This should not happen when you have all required container images already present on the target cluster.

If you are facing timeout issues, increase the Helm timeout using `--timeout` switch, for example:
```bash
helm install --namespace czertainly -f czertainly-values.yaml --set-file trusted.certificates=trusted-certificates.pem czertainly-tlm oci://harbor.3key.company/czertainly-helm/czertainly --timeout 1h
```

## It seems that I cannot log in with my generated administrator certificate

When you have installed the CZERTAINLY using the auto-generated internal admin CA and issued administrator certificate for your registered administrator, it may happen that you override the list of trusted certificates and miss to create internal admin CA certificate. In this case, read the admin CA certificate, include it in the list of trusted certificates, and upgrade the configuration of the CZERTAINLY. You can use the following command to get the admin CA certificate in PEM format to file `admin-ca-certificate.pem`:

```bash
kubectl get secrets --namespace czertainly admin-ca-keypair -o jsonpath='{.data.tls\.crt}' | base64 --decode > admin-ca-certificate.pem
```
