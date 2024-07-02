"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6604],{37576:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>A});var n=i(74848),c=i(28453),r=i(83914),a=i(66188);const s={},o="Renew Certificate",d={id:"certificate-key/quick-start/certificate-management/renew-certificate",title:"Renew Certificate",description:"Certificate can be renewed. The renewal operation does not need additional Attributes or any information other than certificate signing request. This is one of advantages of RA Profile.",source:"@site/docs/10-certificate-key/05-quick-start/03-certificate-management/11-renew-certificate.mdx",sourceDirName:"10-certificate-key/05-quick-start/03-certificate-management",slug:"/certificate-key/quick-start/certificate-management/renew-certificate",permalink:"/docs/certificate-key/quick-start/certificate-management/renew-certificate",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/05-quick-start/03-certificate-management/11-renew-certificate.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Issue Certificate",permalink:"/docs/certificate-key/quick-start/certificate-management/issue-certificate"},next:{title:"Revoke Certificate",permalink:"/docs/certificate-key/quick-start/certificate-management/revoke-certificate"}},l={},A=[{value:"Renew <code>Certificate</code> using the API",id:"renew-certificate-using-the-api",level:2},{value:"Renew <code>Certificate</code> using the Web Interface",id:"renew-certificate-using-the-web-interface",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"renew-certificate",children:"Renew Certificate"}),"\n","\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Certificate"})," can be renewed. The renewal operation does not need additional ",(0,n.jsx)(t.code,{children:"Attributes"})," or any information other than certificate signing request. This is one of advantages of ",(0,n.jsx)(t.code,{children:"RA Profile"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Only the ",(0,n.jsx)(t.code,{children:"Certificate"})," that is bound to ",(0,n.jsx)(t.code,{children:"RA Profile"})," can be renewed."]})}),"\n",(0,n.jsxs)(t.h2,{id:"renew-certificate-using-the-api",children:["Renew ",(0,n.jsx)(t.code,{children:"Certificate"})," using the API"]}),"\n",(0,n.jsxs)(t.p,{children:["To renew ",(0,n.jsx)(t.code,{children:"Certificate"}),", use the following API request:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "pkcs10": "MIICzTCCAbcCAQAwWjFYMAgGA1UEAwwBeDANBgkqhkiG9w0BCQETADAHBgNVBAsTADAHBgNVBAoTADAHBgNVBAkTADAHBgNVBAcTADAHBgNVBAgTADAHBgNVBBETADAHBgNVBAYTADCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANJ2sKsyNhQWrF3QTgJnL9GO8g4WEiJjlY6Cp6Q5dhUrjv6i2m0pL9uFovopbXkPCW8UuDda5ws79PRhRHEPhuPwdTy/UMXLYoiTnjAYP5jalp4UQ/di7tT5BBUxPPzGAMNWVw0IEKlgJnw67xqYP3nbY9u3LEcbBxfAadLR7RVQNJebyRVXLIWstWGMtuVoDcT+I8pdoLEuSlJE2RXiyPXZSvlm8m2qs5912zNbrA3Mi8b/jU/H+lbS5RZ/sphIhrgWpBH4nq8g95VYwcBNhhmcpyUDeeLDHhWpJwlx8p+g+At6u/PMnEvPfnlQ9MZaFTc6PWTKtGAE+lv0803TZjUCAwEAAaAwMC4GCSqGSIb3DQEJDjEhMB8wHQYDVR0OBBYEFEWyex+1M1ZaTYBL0ERQAnBSnld2MAsGCSqGSIb3DQEBCwOCAQEAWO1hjH5f0BPOnR0zmmmf8riNQGwTs+/ySCn5oMQjzoyNDHOB95ZdhYih7UM5u5LKJxEvrX2AJxeAttYsCZhjwkmUutzg6cWqhmpKTHVeRWpqD00u/FBy6hpUdhRCi4FEYIXTkjFnMzrp+M7bQmjuDKgFVO4NMwophKCJoJifh8JE1Fz2jmO/mixLyUAgFIAuC1Odxakx6wyQnwfwX3Xi2zQtHC/bTH2u8XqpPD+epWUqKK5P02vk2kPq2y6e1BpNl6vdvS6Qy73/qX34vIfwf3guJhp99oESmW4TkR3ccT1Dbv9JJCZoyvJ6RSUi+skz4IGQ6YqVDoRp+qREpW+Dlw=="\n  }\' \\\n  https://[domain]:[port]/api/v2/operations/authorities/e045a12a-e114-45ed-90b8-bac7e750e803/raProfiles/166b5cf52-63f2-11ec-90d6-0242ac120003/certificates/renew\n  #https://[domain]:[port]/api/v2/operations/authorities/{authorityUuid}/raProfiles{raProfileUuid}/certificates/renew\n'})}),"\n",(0,n.jsxs)(t.p,{children:["When the ",(0,n.jsx)(t.code,{children:"Certificate"})," is successfully renews, its content and ",(0,n.jsx)(t.code,{children:"uuid"})," is sent back in the response:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "certificateData": "-----BEGIN CERTIFICATE-----\\nMIIFBjCCAu6gAwIBAgITGAAAAQp1ch0L5EiisQAAAAABCjANBgkqhkiG9w0BAQ0F\\nADA3MRcwFQYDVQQDDA5EZW1vIE1TIFN1YiBDQTEcMBoGA1UECgwTM0tleSBDb21w\\nYW55IHMuci5vLjAeFw0yMjAxMDExNjQ2MjNaFw0yNDAxMDExNjQ2MjNaMAwxCjAI\\nBgNVBAMTAXgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDSdrCrMjYU\\nFqxd0E4CZy/RjvIOFhIiY5WOgqekOXYVK47+otptKS/bhaL6KW15DwlvFLg3WucL\\nO/T0YURxD4bj8HU8v1DFy2KIk54wGD+Y2paeFEP3Yu7U+QQVMTz8xgDDVlcNCBCp\\nYCZ8Ou8amD9522PbtyxHGwcXwGnS0e0VUDSXm8kVVyyFrLVhjLblaA3E/iPKXaCx\\nLkpSRNkV4sj12Ur5ZvJtqrOfddszW6wNzIvG/41Px/pW0uUWf7KYSIa4FqQR+J6v\\nIPeVWMHATYYZnKclA3niwx4VqScJcfKfoPgLervzzJxLz355UPTGWhU3Oj1kyrRg\\nBPpb9PNN02Y1AgMBAAGjggE0MIIBMDAdBgNVHQ4EFgQURbJ7H7UzVlpNgEvQRFAC\\ncFKeV3YwHwYDVR0jBBgwFoAUksK831XFwZOFSQf3rMkdC2gBB1EwTQYDVR0fBEYw\\nRDBCoECgPoY8aHR0cDovL2xhYjAyLjNrZXkuY29tcGFueS9jcmxzL2RlbW8vRGVt\\nbyUyME1TJTIwU3ViJTIwQ0EuY3JsMFcGCCsGAQUFBwEBBEswSTBHBggrBgEFBQcw\\nAYY7aHR0cDovL2xhYjAyLjNrZXkuY29tcGFueS9jYXMvZGVtby9EZW1vJTIwTVMl\\nMjBTdWIlMjBDQS5jcnQwIQYJKwYBBAGCNxQCBBQeEgBXAGUAYgBTAGUAcgB2AGUA\\ncjAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDQYJKoZIhvcN\\nAQENBQADggIBAKi79EtWQqljrHoTI4SIssXJFFicT64pnu/U2Zf6RfsSMtV7ZEL1\\nKiRVrL9PLbFoMVxxQyffdSNyGk19NsBO7/xEEuwUgpQ6iVOaVZVTHxAEt9PHqyDo\\nWur+xhYq6PvyVJOphMqPMUZ3dmBOZyS9BuGgF08XYcWcEu5VKAtZTNtXoTFJrX0x\\nXR2szp5nOu2SI3eAW24psOxevo738RsmhhN31nGhdupWPu1Xki2yhEnECPW0motS\\n4kpNfGErUx2hoDa9UAkh+Aq/s1zkhFj7ZBP6RolqLUGw+YEGEVGPJyHuD6TKbWe4\\nkp5VDHcLt0sc0qwMZ07TQf2+gw54KZKP3YpHal68qA6j1fYdyTLAuk0yXhBX7ROe\\nyDyGIZy74xIaTfqlR2rGS2jyLMsmzKU+nt87CYr+2P+gCeEsk1AsDSPeIEZaYG2T\\nFH4q29ZQjWucuiGUHpu61+qdvrkgFeKrUmJR9l2rhSopkSeV1teeFd/e9Vo1mCOb\\nIlfmlMw8erwOSAAZ8VRB/y1lfCg1dpcRB3443wM4nMc938J435lexKTZ3DGcwpx6\\nHaTbGjCWQ654eRUztWW2Z0Pn9FF/VJbi11yw5ucGd/6ThnAB5rAJGfHtfbEFf5wn\\n0bmOtWX+yWWB42fYEFecH3X6STNwoXnBck4pzegC2jBEh15a1gy8Vwii\\n-----END CERTIFICATE-----",\n  "uuid": "bde30bad-2bbe-467c-83e5-d3eace339a7e"\n}\n'})}),"\n",(0,n.jsxs)(t.h2,{id:"renew-certificate-using-the-web-interface",children:["Renew ",(0,n.jsx)(t.code,{children:"Certificate"})," using the Web Interface"]}),"\n",(0,n.jsxs)(t.p,{children:["Follow these steps to renew a ",(0,n.jsx)(t.code,{children:"Certificate"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Certificates"})," in the left menu"]}),"\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.strong,{children:"List of Certificates"})," select the ",(0,n.jsx)(t.code,{children:"Certificate"})," to renewal"]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Renew"})," (symbol ",(0,n.jsx)("span",{style:{color:"#1473b5"},children:(0,n.jsx)(r.g,{icon:a.Uw9})}),")"]}),"\n",(0,n.jsx)(t.li,{children:"Upload the certificate signing request (CSR file)"}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Renew"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Certificate"})," has been successfully renewed and information is update in the inventory. You can check the ",(0,n.jsx)(t.code,{children:"Certificate"})," status."]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);