# Troubleshooting

## It seems that I cannot log in with my generated administrator certificate

When you have installed the CZERTAINLY using the auto-generated internal admin CA and issued administrator certificate for your registered administrator, it may happen that you override the list of trusted certificates and miss to create internal admin CA certificate. In this case, read the admin CA certificate, include it in the list of trusted certificates, and upgrade the configuration of the CZERTAINLY. You can use the following command to get the admin CA certificate in PEM format to file `admin-ca-certificate.pem`:

```bash
kubectl get secrets --namespace czertainly admin-ca-keypair -o jsonpath='{.data.tls\.crt}' | base64 --decode > admin-ca-certificate.pem
```
