# JSCEP

[`JSCEP`](https://github.com/jscep/jscep) can be used to issue and manage the certificates on manually administered servers. It allows requesting and downloading certificate from SCEP enabled servers.

`JSCEP` is a Java implementation of the SCEP protocol and can be used to integrate CZERTAINLY as a SCEP Server with other systems implemented in Java.

## Prerequisites

Before configuring `JSCEP` with CZERTAINLY, you need to have the following:
- JSCEP is inluded in the project
- Configured at least one `RA Profile` certificate service in CZERTAINLY
- Access to HTTP or DNS resources, that will be used to validate ACME challenges
- ACME protocol enabled according to the [Enable SCEP](enable-scep)

To download and know more about `JSCEP`, follow the [installation guide](https://github.com/jscep/jscep).

## JSCEP Configuration

For this example lets assume that you are using `HttpsURLConnection` in Java.

Connect to the URL of the CZERTAINLY SCEP service

```java

URL url = new URL("https://[domain]:[port]/api/v1/protocols/scep/czertainly/pkiclient.exe");
CertificateVerifier verifier = new OptimisticCertificateVerifier();
CallbackHandler handler = new DefaultCallbackHandler(verifier);
Client client = new Client(url, handler);
```

from the above code, the connection to the SCEP Service will be stored under `client` variable, which is a JSCEP Object.

Get the capabilities of the SCEP Service

```java
Capabilities caps = client.getCaCapabilities();
```

This will have the list of capabilities of the SCEP Service. You can use this to check if the SCEP Service supports the operations that you want to perform.

Get the CA Certificate

```java
CertStore caCertificates = client.getCaCertificate();
```

Generate the CSR and Private Key

```java
KeyPairGenerator keyPairGenerator1 = KeyPairGenerator.getInstance("RSA");
keyPairGenerator.initialize(1024);
KeyPair entityKeyPair = keyPairGenerator1.genKeyPair();

X500Principal entitySubject = new X500Principal("CN=test, C=US");; 
PublicKey entityPubKey = entityKeyPair.getPublic();
PKCS10CertificationRequestBuilder csrBuilder = new JcaPKCS10CertificationRequestBuilder(entitySubject, entityPubKey);
DERPrintableString password = new DERPrintableString("test123");
csrBuilder.addAttribute(PKCSObjectIdentifiers.pkcs_9_at_challengePassword, password);

PrivateKey entityPrivKey = entityKeyPair.getPrivate();
JcaContentSignerBuilder csrSignerBuilder = new JcaContentSignerBuilder("SHA1withRSA");
ContentSigner csrSigner = csrSignerBuilder.build(entityPrivKey);
PKCS10CertificationRequest csr = csrBuilder.build(csrSigner);
```

Enroll the certificate

```java
EnrollmentResponse res = client.enrol(requesterCert, requesterPrivKey, csr);
```

This will return the certificate issued by the SCEP Service and the issued `certificate` will be stored in the CZERTAINLY Certificate Inventory.


The overall java code will look like below mentioned. This code generates a self signed certificate and uses if for signing the CSR.

```java

package com.local.test;

import org.bouncycastle.asn1.DERPrintableString;
import org.bouncycastle.asn1.pkcs.PKCSObjectIdentifiers;
import org.bouncycastle.cert.X509CertificateHolder;
import org.bouncycastle.cert.jcajce.JcaX509CertificateConverter;
import org.bouncycastle.cert.jcajce.JcaX509v3CertificateBuilder;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.operator.ContentSigner;
import org.bouncycastle.operator.OperatorCreationException;
import org.bouncycastle.operator.jcajce.JcaContentSignerBuilder;
import org.bouncycastle.pkcs.PKCS10CertificationRequest;
import org.bouncycastle.pkcs.PKCS10CertificationRequestBuilder;
import org.bouncycastle.pkcs.jcajce.JcaPKCS10CertificationRequestBuilder;
import org.jscep.client.Client;
import org.jscep.client.ClientException;
import org.jscep.client.DefaultCallbackHandler;
import org.jscep.client.EnrollmentResponse;
import org.jscep.client.verification.CachingCertificateVerifier;
import org.jscep.client.verification.CertificateVerifier;
import org.jscep.client.verification.ConsoleCertificateVerifier;
import org.jscep.client.verification.OptimisticCertificateVerifier;
import org.jscep.transaction.TransactionException;
import org.jscep.transport.UrlConnectionTransportFactory;
import org.jscep.transport.response.Capabilities;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.net.ssl.*;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.x500.X500Principal;
import java.math.BigInteger;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.*;
import java.security.cert.CertStore;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.Calendar;
import java.util.Date;

public class JscepTest {

    private void test() throws MalformedURLException, KeyManagementException, NoSuchAlgorithmException, OperatorCreationException, CertificateException, TransactionException, ClientException {
        TrustManager[] trustAllCerts = new TrustManager[] {new X509TrustManager() {
            public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                return null;
            }
            public void checkClientTrusted(X509Certificate[] certs, String authType) {
            }
            public void checkServerTrusted(X509Certificate[] certs, String authType) {
            }
        }
        };

        // Install the all-trusting trust manager
        SSLContext sc = SSLContext.getInstance("SSL");
        sc.init(null, trustAllCerts, new java.security.SecureRandom());
        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

        Security.addProvider(new BouncyCastleProvider());

        // Create all-trusting host name verifier
        HostnameVerifier allHostsValid = new HostnameVerifier() {
            public boolean verify(String hostname, SSLSession session) {
                return true;
            }
        };

        // Install the all-trusting host verifier
        HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);

        URL url = new URL("https://localhost:8443/api/v1/protocols/scep/scepProfile2/pkiclient.exe");
        CertificateVerifier verifier = new OptimisticCertificateVerifier();
        CallbackHandler handler = new DefaultCallbackHandler(verifier);
        Client client = new Client(url, handler);
        Capabilities caps = client.getCaCapabilities();

        CertStore caCertificates = client.getCaCertificate();

        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");
        keyPairGenerator.initialize(1024);
        KeyPair requesterKeyPair = keyPairGenerator.genKeyPair();
        String sigAlg = caps.getStrongestSignatureAlgorithm();


        // Mandatory
        X500Principal requesterIssuer = new X500Principal("CN=2, L=Cardiff, ST=WLS, C=IN");
        BigInteger serial = BigInteger.ONE;
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, -1); // yesterday
        Date notBefore = calendar.getTime();
        calendar.add(Calendar.DATE, +2); // tomorrow
        Date notAfter = calendar.getTime();
        X500Principal requesterSubject = new X500Principal("CN=2, L=Cardiff, ST=WLS, C=IN"); // doesn't need to be the same as issuer
        PublicKey requesterPubKey = requesterKeyPair.getPublic(); // from generated key pair
        JcaX509v3CertificateBuilder certBuilder = new JcaX509v3CertificateBuilder(requesterIssuer, serial, notBefore, notAfter, requesterSubject, requesterPubKey);

        PrivateKey requesterPrivKey = requesterKeyPair.getPrivate(); // from generated key pair
        JcaContentSignerBuilder certSignerBuilder = new JcaContentSignerBuilder(sigAlg); // from above
        ContentSigner certSigner = certSignerBuilder.build(requesterPrivKey);

        X509CertificateHolder certHolder = certBuilder.build(certSigner);

        JcaX509CertificateConverter converter = new JcaX509CertificateConverter();
        X509Certificate requesterCert = converter.getCertificate(certHolder);


        //CSR Generation part

        KeyPairGenerator keyPairGenerator1 = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(1024);
        KeyPair entityKeyPair = keyPairGenerator1.genKeyPair();

        X500Principal entitySubject = requesterSubject; // use the same subject as the self-signed certificate
        PublicKey entityPubKey = entityKeyPair.getPublic();
        PKCS10CertificationRequestBuilder csrBuilder = new JcaPKCS10CertificationRequestBuilder(entitySubject, entityPubKey);
        DERPrintableString password = new DERPrintableString("test123");
        csrBuilder.addAttribute(PKCSObjectIdentifiers.pkcs_9_at_challengePassword, password);

        PrivateKey entityPrivKey = entityKeyPair.getPrivate();
        JcaContentSignerBuilder csrSignerBuilder = new JcaContentSignerBuilder("SHA1withRSA");
        ContentSigner csrSigner = csrSignerBuilder.build(entityPrivKey);
        PKCS10CertificationRequest csr = csrBuilder.build(csrSigner);

        EnrollmentResponse res = client.enrol(requesterCert, requesterPrivKey, csr);
        System.out.println(res.getCertStore());
    }
}

```