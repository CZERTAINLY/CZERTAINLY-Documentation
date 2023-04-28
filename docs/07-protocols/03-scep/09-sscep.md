# SSCEP

One of the most common use cases for SCEP is to manage certificates for devices that do not have a user interface. For example, a device that is not a computer, such as a router or a printer, or a computer that is not running a graphical user interface (GUI), such as a server. SCEP is also used to manage certificates for devices that are not connected to the network all the time, such as a laptop computer that is used by a mobile worker.

[`SSCEP`](https://github.com/certnanny/sscep) is a client-only implementation of the SCEP Protocol. It is a simple command-line tool that can be used to communicate with a SCEP server to obtain signed certificates. It is written in C and is designed to be small, simple and fast. It is licensed under the [Apache License 2.0]

This guide shows, how to use `SSCEP` to manage certificates using SCEP protocol and certificate management services controlled by the platform.

## Prerequisites

Before you can use `SSCEP` with the CZERTAINLY, you need to have the following:
- SSCEP installed and configured
- Configured at least one `RA Profile` certificate service
- SCEP protocol enabled according to the [Enable SCEP](enable-scep)

In case you do not have the `SSCEP` installed, follow the [installation instructions](https://github.com/certnanny/sscep) to install it.

## Get CA Certificate

The first step in the certificate management process is to obtain the CA certificate from the CZERTAINLY. You can do this by using the `getca` command:

```bash
sscep getca -u  http://[domain]:[port]/api/v1/protocols/scep/czertainly/pkiclient.exe -c ca.crt
```

This command will download the CA certificate from the CZERTAINLY and store it in the `ca.crt` file. The CA Certificate is the item that you have already chosen when configuring the `SCEP Profile`

## Enroll Certificate

Once the CA certificate is downloaded, you can use it to enroll a new certificate. To enroll a new certificate, you will need the following,

### RSA Key Pair

Generate the RSA Key Pair using the following command:

```bash
 openssl req -new -newkey rsa:2048 -nodes -keyout test.key -out test.csr
 ```

 This will generate the `test.key` and `test.csr` files. The `test.key` file contains the private key and the `test.csr` file contains the certificate signing request.

### Enroll Certificate

Once you have the CA certificate and the RSA key pair, you can enroll a new certificate using the following command:

```bash
 sscep enroll -u http://[domain]:[port]/api/v1/protocols/scep/czertainly/pkiclient.exe -c ca.crt -k test.key -r test.csr -l test.crt
 ```

To include more information in the console output, you can include -v or -d for details. 

This command will enroll a new certificate and store it in the `test.crt` file. The certificate is also stored in the certificate inventory of the platform.


## Renew Certificate

To renew a certificate, you will need the following:
  - `CA Certificate`
  - `Original Certificate` and its `Private Key`
  - New `Key Pair` and `CSR`

Use the following command to renew the certificate:

```bash

sscep enroll -u http://[domain]:[port]/api/v1/protocols/scep/czertainly/pkiclient.exe -c ca.crt -K test.key -O test.crt -k new.key -r new.csr -l new.crt

```

where `test.crt` is the original certificate and `test.key` is the original private key. The `new.crt` and `new.key` are the new certificate and private key that will be used to renew the certificate. The `new.csr` is the certificate signing request for the new certificate.

The issued certificate is also included in the certificate inventory of the platform.