"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5446],{3905:function(n,e,r){r.d(e,{Zo:function(){return D},kt:function(){return R}});var t=r(67294);function A(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function i(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function o(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){A(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function E(n,e){if(null==n)return{};var r,t,A=function(n,e){if(null==n)return{};var r,t,A={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(A[r]=n[r]);return A}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(A[r]=n[r])}return A}var a=t.createContext({}),c=function(n){var e=t.useContext(a),r=e;return n&&(r="function"==typeof n?n(e):o(o({},e),n)),r},D=function(n){var e=c(n.components);return t.createElement(a.Provider,{value:e},n.children)},T="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(n,e){var r=n.components,A=n.mdxType,i=n.originalType,a=n.parentName,D=E(n,["components","mdxType","originalType","parentName"]),T=c(r),s=A,R=T["".concat(a,".").concat(s)]||T[s]||p[s]||i;return r?t.createElement(R,o(o({ref:e},D),{},{components:r})):t.createElement(R,o({ref:e},D))}));function R(n,e){var r=arguments,A=e&&e.mdxType;if("string"==typeof n||A){var i=r.length,o=new Array(i);o[0]=s;var E={};for(var a in e)hasOwnProperty.call(e,a)&&(E[a]=e[a]);E.originalType=n,E[T]="string"==typeof n?n:A,o[1]=E;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},64650:function(n,e,r){r.r(e),r.d(e,{assets:function(){return D},contentTitle:function(){return a},default:function(){return R},frontMatter:function(){return E},metadata:function(){return c},toc:function(){return T}});var t=r(83117),A=r(80102),i=(r(67294),r(3905)),o=["components"],E={},a="Trident SAM Crypto Token Sample Configuration",c={unversionedId:"signing/sam-integration/trident-sam/sample-properties",id:"signing/sam-integration/trident-sam/sample-properties",title:"Trident SAM Crypto Token Sample Configuration",description:"Signing-only mode",source:"@site/docs/30-signing/30-sam-integration/09-trident-sam/05-sample-properties.md",sourceDirName:"30-signing/30-sam-integration/09-trident-sam",slug:"/signing/sam-integration/trident-sam/sample-properties",permalink:"/docs/signing/sam-integration/trident-sam/sample-properties",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/30-sam-integration/09-trident-sam/05-sample-properties.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Trident SAM Crypto Token Properties",permalink:"/docs/signing/sam-integration/trident-sam/properties"},next:{title:"Introduction",permalink:"/docs/signing/sam-integration/trident-sam/signature-sap-providers/overview"}},D={},T=[{value:"Signing-only mode",id:"signing-only-mode",level:2},{value:"Management mode",id:"management-mode",level:2}],p={toc:T},s="wrapper";function R(n){var e=n.components,r=(0,A.Z)(n,o);return(0,i.kt)(s,(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trident-sam-crypto-token-sample-configuration"},"Trident SAM Crypto Token Sample Configuration"),(0,i.kt)("h2",{id:"signing-only-mode"},"Signing-only mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WORKER7.TYPE=CRYPTO_WORKER\nWORKER7.DISABLED=FALSE\nWORKER7.TRIDENT_URL=https\\://*****.trident-online.info\\:3000\nWORKER7.NAME=TridentSAMCryptoTokenOnlySigning\nWORKER7.CRYPTOTOKEN_IMPLEMENTATION_CLASS=com.czertainly.signserver.trident.TridentSAMCryptoToken\nWORKER7.SAP_PROVIDER_URL=https\\://***.czertainly.com\\:8081/v1/sad\nWORKER7.TRIDENT_CEISK=-----BEGIN CERTIFICATE-----\\r\\nMIIDPzCCAicCBF8Wx5owDQYJKoZIhvcNAQELBQAwZDEOMAwGA1UEAwwFY2Vpc2sx\\r\\nDjAMBgNVBAMMBU1QU0FNMQwwCgYDVQQKDANJNFAxFDASBgNVBAsMC0RldmVsb3Bt\\r\\nZW50MREwDwYDVQQHDAhCdWRhcGVzdDELMAkGA1UEBhMCSFUwHhcNMjAwNzIxMTA0\\r\\nNjUwWhcNMjUwNzIwMTA0NjUwWjBkMQ4wDAYDVQQDDAVjZWlzazEOMAwGA1UEAwwF\\r\\nTVBTQU0xDDAKBgNVBAoMA0k0UDEUMBIGA1UECwwLRGV2ZWxvcG1lbnQxETAPBgNV\\r\\nBAcMCEJ1ZGFwZXN0MQswCQYDVQQGEwJIVTCCASIwDQYJKoZIhvcNAQEBBQADggEP\\r\\nADCCAQoCggEBALzRH7T52+sW0yPVjmIvTO2P6XD3tEpWGwwwKmaq5+rCT0FIN64W\\r\\noaU0DnSWMLNGnCRcjzQpBYSnxhJRhJ61VQLhFuV0ntyHlYJYL0lTTKhfx0Wv4Pv4\\r\\n+7bpI69oP55RQ8GSGjnq2pqeGck6oCV6XWUxtbK9Unztetn+tbQpM3xtI2xEJESF\\r\\nzST4uAt9ChMDOHm4X247pFzpqptTfoJe+zqu/7v83cvijiCoDYqTrRFCs2ukmZ/x\\r\\nZn1gA4ocgdMcd4yQbxlogQt6E35Pm91fwwqBJRG7SjL6aTufB/SY7p+VoR1MjBDJ\\r\\n6lKBHQyPVDw41QSSv9GEf//d0u83rnfK/LcCAwEAATANBgkqhkiG9w0BAQsFAAOC\\r\\nAQEAQdhYDIijAALYNBr7F6iF8dWCqDlXpuHZiE5v0hv1n1lFFRimMYetlPDqTzPO\\r\\naWae0uKaXtimKJdkXyO6v/ah5qQDp6cPYQP8pM6JglPBqMy6evUu+AEy5jz9KhFc\\r\\nCQQlTlDIFSeB3stejohBoXUwz98laLmlvpk9c7UJOIukwkOFGqlmOypZzAHcXhrB\\r\\nd1zPW8kNoqaWMghNa4eiDvgLUykLD8KbOwAHsTdS1DU+myFfAoCl8h57Y0V0DOxa\\r\\nSB3t4O+uVjcpfN7vtN3+6AHAKn6jCVxJNscDG226nxC4hhSK6EtlDOjSR3T0fBGJ\\r\\nMabx+LDhRhfN16a+0dvfsvha1g\\=\\=\\r\\n-----END CERTIFICATE-----\nWORKER7.SAP_PROVIDER_AUTH_TYPE=NONE\nWORKER7.CERT_STORAGE_BASE_DIR=/opt/TridentSAMCertificates\nWORKER7.TRIDENT_CSISK=-----BEGIN CERTIFICATE-----\\r\\nMIIDPzCCAicCBF8Wx5kwDQYJKoZIhvcNAQELBQAwZDEOMAwGA1UEAwwFY3Npc2sx\\r\\nDjAMBgNVBAMMBU1QU0FNMQwwCgYDVQQKDANJNFAxFDASBgNVBAsMC0RldmVsb3Bt\\r\\nZW50MREwDwYDVQQHDAhCdWRhcGVzdDELMAkGA1UEBhMCSFUwHhcNMjAwNzIxMTA0\\r\\nNjQ5WhcNMjUwNzIwMTA0NjQ5WjBkMQ4wDAYDVQQDDAVjc2lzazEOMAwGA1UEAwwF\\r\\nTVBTQU0xDDAKBgNVBAoMA0k0UDEUMBIGA1UECwwLRGV2ZWxvcG1lbnQxETAPBgNV\\r\\nBAcMCEJ1ZGFwZXN0MQswCQYDVQQGEwJIVTCCASIwDQYJKoZIhvcNAQEBBQADggEP\\r\\nADCCAQoCggEBAN3rvi+E83XMxIo4XeGvgoYZyILIapmaGraLWp7zI3/dgdqh6Bms\\r\\nUr6HXRl8Z+SmodzgcYz9WawJ1GC8Rfdif+oMThMyI7WXoM1JdTHXPm4O+scEtU0s\\r\\nL7dP8TI/+xLpvf9tGeJO8vuGEtRlHRNDEpSKZUiecXxDTkt9r5qToRuPJ0P2m7by\\r\\n+54ySYpNbOK8UDElTwQCMjU/BYDBDjB0QRC9gBYHA8ij9+cf5gPBcslcYY1VDSLT\\r\\nm7HjtSPbxOg2EghvSQp3NIj95Hc5NcdjpI2W1UK0gkyYsJ3U9quJC9ks3kns+UMj\\r\\n0KWX8BEbkyefIAr/NbN+YHuVv+mW8baVYtMCAwEAATANBgkqhkiG9w0BAQsFAAOC\\r\\nAQEAyoS2Vx72mad76vM0U+cIEijWfYyZ0FC2LebppUU3LVnQol69r7+ZKmsaJ3A5\\r\\nWbtqSEWvfX3/x510INXM4x8Sl8X3qBzAWKNKaZpr2VtFc88g6O/4MYfypHe3y7NW\\r\\np+H+G2MtxhoTmdLQBdDrFH6ncppELE3/gCZXQqV/lLKf/J01t0yI2KODb/blF/5B\\r\\nj00AkmDsby1j2hfIvAkfZneDrhz+xWQQg9uljOnpt3iznjXkCaYmqjeL865il7Ar\\r\\nwWdySglKwogaKOuTCxTLjk13pT/He/PyLsNENI2llB0g9lB+54uaFA662EMr9mB8\\r\\nHX5BYCDkhCuOMP7eD4uuiudZmA\\=\\=\\r\\n-----END CERTIFICATE-----\nWORKER7.SAP_PROVIDER_IMPLEMENTATION_CLASS=com.czertainly.trident.sam.sap.RestSignatureSapProvider\nWORKER7.CERT_STORAGE_IMPLEMENTATION_CLASS=com.czertainly.trident.provider.certificate.FileSystemCertificateStorage\nWORKER7.IMPLEMENTATION_CLASS=org.signserver.server.signers.CryptoWorker\n")),(0,i.kt)("h2",{id:"management-mode"},"Management mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WORKER3.KM_SAP_PROVIDER_IMPLEMENTATION_CLASS=com.czertainly.trident.sam.sap.RestKeyManagementSapProvider\nWORKER3.TYPE=CRYPTO_WORKER\nWORKER3.IMPLEMENTATION_CLASS=org.signserver.server.signers.CryptoWorker\nWORKER3.SAP_PROVIDER_URL=https\\://***.czertainly.com\\:8081/v1/sad\nWORKER3.TRIDENT_KEY_ADMIN_ID=keyadmin-totp\nWORKER3.CRYPTOTOKEN_IMPLEMENTATION_CLASS=com.czertainly.signserver.trident.TridentSAMCryptoToken\nWORKER3.SAP_PROVIDER_IMPLEMENTATION_CLASS=com.czertainly.trident.sam.sap.RestSignatureSapProvider\nWORKER3.DISABLED=FALSE\nWORKER3.CERT_STORAGE_BASE_DIR=/opt/TridentSAMCertificates\nWORKER3.TRIDENT_KEY_ADMIN_TOTP_SEED=_MASKED_\nWORKER3.TRIDENT_KEY_ADMIN_TOTP_REFRESH_INTERVAL=120\nWORKER3.TRIDENT_URL=https\\://*****.trident-online.info\\:3000\nWORKER3.TRIDENT_KEY_ADMIN_TOTP_STEP=30\nWORKER3.TRIDENT_KEY_ADMIN_PASSWORD=_MASKED_\nWORKER3.SAP_PROVIDER_AUTH_TYPE=NONE\nWORKER3.TRIDENT_CEISK=-----BEGIN CERTIFICATE-----\\r\\nMIIDPzCCAicCBF8Wx5owDQYJKoZIhvcNAQELBQAwZDEOMAwGA1UEAwwFY2Vpc2sx\\r\\nDjAMBgNVBAMMBU1QU0FNMQwwCgYDVQQKDANJNFAxFDASBgNVBAsMC0RldmVsb3Bt\\r\\nZW50MREwDwYDVQQHDAhCdWRhcGVzdDELMAkGA1UEBhMCSFUwHhcNMjAwNzIxMTA0\\r\\nNjUwWhcNMjUwNzIwMTA0NjUwWjBkMQ4wDAYDVQQDDAVjZWlzazEOMAwGA1UEAwwF\\r\\nTVBTQU0xDDAKBgNVBAoMA0k0UDEUMBIGA1UECwwLRGV2ZWxvcG1lbnQxETAPBgNV\\r\\nBAcMCEJ1ZGFwZXN0MQswCQYDVQQGEwJIVTCCASIwDQYJKoZIhvcNAQEBBQADggEP\\r\\nADCCAQoCggEBALzRH7T52+sW0yPVjmIvTO2P6XD3tEpWGwwwKmaq5+rCT0FIN64W\\r\\noaU0DnSWMLNGnCRcjzQpBYSnxhJRhJ61VQLhFuV0ntyHlYJYL0lTTKhfx0Wv4Pv4\\r\\n+7bpI69oP55RQ8GSGjnq2pqeGck6oCV6XWUxtbK9Unztetn+tbQpM3xtI2xEJESF\\r\\nzST4uAt9ChMDOHm4X247pFzpqptTfoJe+zqu/7v83cvijiCoDYqTrRFCs2ukmZ/x\\r\\nZn1gA4ocgdMcd4yQbxlogQt6E35Pm91fwwqBJRG7SjL6aTufB/SY7p+VoR1MjBDJ\\r\\n6lKBHQyPVDw41QSSv9GEf//d0u83rnfK/LcCAwEAATANBgkqhkiG9w0BAQsFAAOC\\r\\nAQEAQdhYDIijAALYNBr7F6iF8dWCqDlXpuHZiE5v0hv1n1lFFRimMYetlPDqTzPO\\r\\naWae0uKaXtimKJdkXyO6v/ah5qQDp6cPYQP8pM6JglPBqMy6evUu+AEy5jz9KhFc\\r\\nCQQlTlDIFSeB3stejohBoXUwz98laLmlvpk9c7UJOIukwkOFGqlmOypZzAHcXhrB\\r\\nd1zPW8kNoqaWMghNa4eiDvgLUykLD8KbOwAHsTdS1DU+myFfAoCl8h57Y0V0DOxa\\r\\nSB3t4O+uVjcpfN7vtN3+6AHAKn6jCVxJNscDG226nxC4hhSK6EtlDOjSR3T0fBGJ\\r\\nMabx+LDhRhfN16a+0dvfsvha1g\\=\\=\\r\\n-----END CERTIFICATE-----\nWORKER3.KM_SAP_PROVIDER_URL=https\\://***.czertainly.com\\:8081/v1/sad\nWORKER3.TRIDENT_CSISK=-----BEGIN CERTIFICATE-----\\r\\nMIIDPzCCAicCBF8Wx5kwDQYJKoZIhvcNAQELBQAwZDEOMAwGA1UEAwwFY3Npc2sx\\r\\nDjAMBgNVBAMMBU1QU0FNMQwwCgYDVQQKDANJNFAxFDASBgNVBAsMC0RldmVsb3Bt\\r\\nZW50MREwDwYDVQQHDAhCdWRhcGVzdDELMAkGA1UEBhMCSFUwHhcNMjAwNzIxMTA0\\r\\nNjQ5WhcNMjUwNzIwMTA0NjQ5WjBkMQ4wDAYDVQQDDAVjc2lzazEOMAwGA1UEAwwF\\r\\nTVBTQU0xDDAKBgNVBAoMA0k0UDEUMBIGA1UECwwLRGV2ZWxvcG1lbnQxETAPBgNV\\r\\nBAcMCEJ1ZGFwZXN0MQswCQYDVQQGEwJIVTCCASIwDQYJKoZIhvcNAQEBBQADggEP\\r\\nADCCAQoCggEBAN3rvi+E83XMxIo4XeGvgoYZyILIapmaGraLWp7zI3/dgdqh6Bms\\r\\nUr6HXRl8Z+SmodzgcYz9WawJ1GC8Rfdif+oMThMyI7WXoM1JdTHXPm4O+scEtU0s\\r\\nL7dP8TI/+xLpvf9tGeJO8vuGEtRlHRNDEpSKZUiecXxDTkt9r5qToRuPJ0P2m7by\\r\\n+54ySYpNbOK8UDElTwQCMjU/BYDBDjB0QRC9gBYHA8ij9+cf5gPBcslcYY1VDSLT\\r\\nm7HjtSPbxOg2EghvSQp3NIj95Hc5NcdjpI2W1UK0gkyYsJ3U9quJC9ks3kns+UMj\\r\\n0KWX8BEbkyefIAr/NbN+YHuVv+mW8baVYtMCAwEAATANBgkqhkiG9w0BAQsFAAOC\\r\\nAQEAyoS2Vx72mad76vM0U+cIEijWfYyZ0FC2LebppUU3LVnQol69r7+ZKmsaJ3A5\\r\\nWbtqSEWvfX3/x510INXM4x8Sl8X3qBzAWKNKaZpr2VtFc88g6O/4MYfypHe3y7NW\\r\\np+H+G2MtxhoTmdLQBdDrFH6ncppELE3/gCZXQqV/lLKf/J01t0yI2KODb/blF/5B\\r\\nj00AkmDsby1j2hfIvAkfZneDrhz+xWQQg9uljOnpt3iznjXkCaYmqjeL865il7Ar\\r\\nwWdySglKwogaKOuTCxTLjk13pT/He/PyLsNENI2llB0g9lB+54uaFA662EMr9mB8\\r\\nHX5BYCDkhCuOMP7eD4uuiudZmA\\=\\=\\r\\n-----END CERTIFICATE-----\nWORKER3.KM_SAP_PROVIDER_AUTH_TYPE=NONE\nWORKER3.NAME=TridentSAMCryptoToken\nWORKER3.CERT_STORAGE_IMPLEMENTATION_CLASS=com.czertainly.trident.provider.certificate.FileSystemCertificateStorage\n")))}R.isMDXComponent=!0}}]);