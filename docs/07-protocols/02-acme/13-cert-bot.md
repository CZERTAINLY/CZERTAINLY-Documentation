# Certbot

Like `cert-manager` which can be used to manage the certificates using ACME in the containers, `Certbot` can be used to issue and manage the certificates directly on the webservers.

[`Certbot`](https://certbot.eff.org/) allows to request and download certificate from ACME Servers. These certificates can be requested for multiple type of web-servers, or can be requested through a standalone server that is deployed by the Certbot temporarily. It also gives option to request for a certificate and store it without deployment.

For more information about `Certbot`, refer to the [Certbot documentation](https://eff-certbot.readthedocs.io/en/stable/).

CZERTAINLY platform supports ACME implementation according the [RFC 8555](https://datatracker.ietf.org/doc/html/rfc8555). This guide shows, how you can use `Certbot` to manage certificates using ACME protocol and certificate management services controlled by the platform.

## Prerequisites

Before configuring `Certbot` with CZERTAINLY, you need to have the following:

- Certbot is installed in the host server
- Configured at least one `RA Profile` certificate service in CZERTAINLY
- Access to HTTP or DNS resources, that will be used to validate ACME challenges

To learn more about `Certbot` installation, follow the [installation guide](https://certbot.eff.org/) to install it.

## Configuration of `ACME Profile`

First step is to configure the [`ACME Profile`](acme-profile). To know more about configuring `ACME Profile` follow [ACME Profile Configuration](cert-manager#configuration-of-acme-profile")

## Enable ACME protocol for `RA Profile`

ACME Should be enabled for `RA Profiles` before they can be used. To know more about enabling ACME, follow [Enable ACME](cert-manager#enable-acme-protocol-for-ra-profile)

## Issuing Certificate

### HTTP-01

Issuing certificate using `Certbot` for a webserver is an easy step. By default, if no challenge type is specified, `http-01` is considered for the request. Once the `Certbot` is installed on the destination server, issue the following command:

```bash
certbot -n --apache -d debian26.acme.local --server https://[domain]:[port]/api/acme/raProfile/czertainly/directory
```

:::warning
Note that URL of the server and host should be updated before running the previous command.
:::

With `Certbot`, a certificate can be issued to a server without installing it, to do so, use the following command,

```bash
certbot certonly -n --apache -d debian26.acme.local --server https://[domain]:[port]/api/acme/raProfile/czertainly/directory
```

`Certbot` also provides various options with the command. To learn more, visit [Certbot Usage](https://eff-certbot.readthedocs.io/en/stable/using.html)

The certificates will be obtained by `Certbot` which will either be installed or stored in a location based on the options selected.

### DNS-01

To issue a certificate and use DNS validation, `Certbot` offers various DNS plugins based on the technology. The list of DNS plugins supported by Certbot can be found at [DNS Plugins](https://eff-certbot.readthedocs.io/en/stable/using.html#dns-plugins). In this example, we will see how to use Certbot with [Bind9 DNS](https://www.isc.org/bind/)

#### Prerequisites

- Install and configure bind9 DNS with Zones, dynamic updates etc..
- Test the connectivity between Server hosting `Certbot` and Bind9

1. Create a file called `dns.ini`.
2. Open the file and paste the below configuration

```bash
dns_rfc2136_server = 127.0.0.1
dns_rfc2136_port = 53
dns_rfc2136_name = acme.local
dns_rfc2136_secret = <DNS TSIG Secret>
dns_rfc2136_algorithm = HMAC-SHA512
```

3. Once the file saved, the following command can be executed

```bash
certbot certonly -n -d debian12.acme.local --no-verify-ssl --server https://[domain]:[port]/api/acme/raProfile/czertainly/directory --dns-rfc2136 --dns-rfc2136-credentials dns.ini --preferred-challenges="dns"
```

The issued certificate is also included in the certificate inventory of the platform. From now on, the `Certbot` will renew the certificate automatically.

## Revoke Certificate

Certificate can be easily revoked using `Certbot`. To revoke a certificate,

```bash
certbot revoke --cert-name debian12.acme.local --server https://[domain]:[port]/api/acme/raProfile/czertainly/directory --no-verify-ssl
```

The certificate will be revoked from CZERTAINLY and the response will be propagated to the `Certbot`. Once the certificate is revoked, then the user
can decide to keep the certificate or can be removed permanently.
