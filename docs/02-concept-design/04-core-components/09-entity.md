# Entity

An `Entity` represents the end-user that actually uses the certificate and associated private key.

Various `Entity` implementations may exist based on the `Entity Provider` `Function Group` of the `Connector`. Such `Connector` defines the `Entity` technology and can perform specific operations on the `Entity`, such as:

- generate private key and certificate signing request
- deploy certificate
- get information about the certificate
