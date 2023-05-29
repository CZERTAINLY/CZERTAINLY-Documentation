"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9945],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={},c="Ansible acme module",s={unversionedId:"certificate-key/protocols/acme/ansible-acme",id:"certificate-key/protocols/acme/ansible-acme",title:"Ansible acme module",description:"Ansible is a suite of tools to enable the automatization of software configuration. It can be used in conjunction with an ACME server running on the CZERTAINLY platform to automate certificate management, especially in situations where a target entity isn't capable of certificate management operations and direct communication with an ACME server through available ACME client implementations.",source:"@site/docs/10-certificate-key/07-protocols/02-acme/25-ansible-acme.md",sourceDirName:"10-certificate-key/07-protocols/02-acme",slug:"/certificate-key/protocols/acme/ansible-acme",permalink:"/docs/certificate-key/protocols/acme/ansible-acme",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/07-protocols/02-acme/25-ansible-acme.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Terraform acme provider",permalink:"/docs/certificate-key/protocols/acme/terraform"},next:{title:"Configuration and Settings",permalink:"/docs/certificate-key/settings/overview"}},m={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Ansible playbook preparation",id:"ansible-playbook-preparation",level:3},{value:"Register ACME account",id:"register-acme-account",level:3},{value:"Generate private key and prepare CSR",id:"generate-private-key-and-prepare-csr",level:3},{value:"Request verification challenge",id:"request-verification-challenge",level:3},{value:"Publishing verification challenge",id:"publishing-verification-challenge",level:3},{value:"Request validation",id:"request-validation",level:3},{value:"Delete validation challenges",id:"delete-validation-challenges",level:3},{value:"Issued certificate",id:"issued-certificate",level:3}],u={toc:p},d="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ansible-acme-module"},"Ansible acme module"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.ansible.com/"},"Ansible")," is a suite of tools to enable the automatization of software configuration. It can be used in conjunction with an ACME server running on the CZERTAINLY platform to automate certificate management, especially in situations where a target entity isn't capable of certificate management operations and direct communication with an ACME server through available ACME client implementations."),(0,r.kt)("p",null,"CZERTAINLY platform supports ACME implementation according to the ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8555"},"RFC 8555"),". This guide shows, how you can use Ansible ",(0,r.kt)("inlineCode",{parentName:"p"},"acme")," module to manage certificates using ACME protocol and certificate management services controlled by the platform."),(0,r.kt)("p",null,"For more information about Ansible, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ansible.com/"},"Ansible documentation"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide assumes you have at least basic knowledge about Ansible. If you are new to Ansible, we recommend you to start with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/getting_started/index.html"},"Getting started with Ansible"),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use Ansible with CZERTAINLY, you need to have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ansible installed"),(0,r.kt)("li",{parentName:"ul"},"Configured at least one ",(0,r.kt)("inlineCode",{parentName:"li"},"RA Profile")," certificate service in CZERTAINLY"),(0,r.kt)("li",{parentName:"ul"},"Access to HTTP or DNS resources that will be used to validate ACME challenges"),(0,r.kt)("li",{parentName:"ul"},"ACME protocol enabled according to the ",(0,r.kt)("a",{parentName:"li",href:"enable-acme"},"Enable ACME"))),(0,r.kt)("p",null,"To install Ansible, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html"},"installation instructions"),"."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"To get a certificate with ACME protocol, you need to do several tasks typically using Ansible:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"register an account on the ACME server"),(0,r.kt)("li",{parentName:"ul"},"prepare CSR to issue new certificate"),(0,r.kt)("li",{parentName:"ul"},"request challenge on the ACME server"),(0,r.kt)("li",{parentName:"ul"},"transport challenge data to HTTP or DNS server"),(0,r.kt)("li",{parentName:"ul"},"request validation of the challenge on the ACME server"),(0,r.kt)("li",{parentName:"ul"},"install the new certificate")),(0,r.kt)("h3",{id:"ansible-playbook-preparation"},"Ansible playbook preparation"),(0,r.kt)("p",null,"To demonstrate all steps, we will create a playbook file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/semik/ansible-acme-demo/blob/main/playbook-czertainly-acme-demo.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"playbook-czertainly-acme-demo.yml")),"."),(0,r.kt)("p",null,"The playbook uses the following modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/collections/community/crypto/acme_account_module.html"},(0,r.kt)("inlineCode",{parentName:"a"},"community.crypto.acme_account"))," for registration ACME account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/collections/community/crypto/acme_certificate_module.html"},(0,r.kt)("inlineCode",{parentName:"a"},"community.crypto.acme_certificate"))," for certificate management operations on ACME server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/collections/community/crypto/openssl_privatekey_module.html"},(0,r.kt)("inlineCode",{parentName:"a"},"community.crypto.openssl_privatekey"))," to generate unique key pair"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/collections/community/crypto/openssl_csr_module.html"},(0,r.kt)("inlineCode",{parentName:"a"},"community.crypto.openssl_csr"))," to sign certificate signing request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/collections/community/general/nsupdate_module.html"},(0,r.kt)("inlineCode",{parentName:"a"},"community.general.nsupdate"))," to distribute ACME challenge to DNS server")),(0,r.kt)("p",null,"Even though Ansible community manages those modules, they are part of the standard Ansible packages."),(0,r.kt)("p",null,"At the beginning of the playbook file, we define default values that are used across tasks. The example playbook assumes that it is running on an HTTP server and that user running it has write permissions to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/www/html")," directory. All working files and resulting certificate is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tmp")," directory, which must be created before executing the playbook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: CZERTAINLY Ansible ACME example\n  hosts: localhost\n\n  tasks:\n    - name: Set vars\n      ansible.builtin.set_fact:\n        acme_directory: "https://[domain]:[port]/api/v1/protocols/acme/czertainly/directory"\n        acme_version: 2\n        acme_register_account: true\n        acme_web_dir: "/var/www/html"\n        acme_force: false\n        acme_account_email: "email@example.com"\n        bind: "{{ lookup(\'file\', \'vars/czertainly.private\') | from_yaml }}"\n\n    - name: Set default ACME method\n      ansible.builtin.set_fact:\n        acme_method: \'http-01\'\n        when: acme_method is not defined\n')),(0,r.kt)("h3",{id:"register-acme-account"},"Register ACME account"),(0,r.kt)("p",null,"First, we will create private RSA key pair which will be associated with later registered account. The key can be used for revoking the issued certificate even when the private key of the certificate isn't available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'    - name: Generate private key for ACME account\n      community.crypto.openssl_privatekey:\n        path: "tmp/acme_account_key"\n        type: RSA\n        size: 2048\n        mode: 0600\n\n    - name: Register ACME Account without external binding\n      community.crypto.acme_account:\n        account_key_src: "tmp/acme_account_key"\n        acme_directory: "{{ acme_directory }}"\n        acme_version: "{{ acme_version }}"\n        state: present\n        terms_agreed: true\n        contact:\n          - "mailto:{{ acme_account_email }}"\n      register: acme_account\n      when: acme_register_account\n')),(0,r.kt)("h3",{id:"generate-private-key-and-prepare-csr"},"Generate private key and prepare CSR"),(0,r.kt)("p",null,"The step to generate key pair and certificate signing request is optional. You can also you externally generated and signed certificate signing request."),(0,r.kt)("admonition",{title:"Account vs certificate key pair ",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that this key pair is not associated with the ACME account key pair.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'    - name: Generate private key for server\n      community.crypto.openssl_privatekey:\n        path: "tmp/{{ acme_domain }}.key"\n        type: RSA\n        size: 2048\n        mode: 0600\n\n    - name: Generate certificate signing request (CSR)\n      community.crypto.openssl_csr:\n        path: "tmp/{{ acme_domain }}.csr"\n        privatekey_path: "tmp/{{ acme_domain }}.key"\n        common_name: "{{ acme_domain }}"\n        subject_alt_name: "DNS:{{ acme_domain }}"\n')),(0,r.kt)("h3",{id:"request-verification-challenge"},"Request verification challenge"),(0,r.kt)("p",null,"Now, we need to submit the certificate signing request to ACME server and register validation challenge.. The argument ",(0,r.kt)("inlineCode",{parentName:"p"},"dest")," can be pointing to a non-existent file. But if it points to an existing certificate, the Ansible will check if it is below the default value 10 days and request renewal instead of new certificate (default behaviour). This can be modified by arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"remaining_days")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"force"),". The second argument, ",(0,r.kt)("inlineCode",{parentName:"p"},"force")," requests new certificate every time the playbook is executed, instead of checking for renewal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'    - name: Create a challenge\n      community.crypto.acme_certificate:\n        account_key_src: "tmp/acme_account_key"\n        account_email: "{{ acme_account_email }}"\n        csr: "tmp/{{ acme_domain }}.csr"\n        dest: "tmp/{{ acme_domain }}}.crt"\n        acme_directory: "{{ acme_directory }}"\n        acme_version: "{{ acme_version }}"\n        terms_agreed: true\n        force: "{{ acme_force }}"\n        modify_account: false\n        challenge: "{{ acme_method }}"\n      register: acme_challenge\n\n    - name: Show challenge\n      ansible.builtin.debug: var=acme_challenge\n')),(0,r.kt)("p",null,"The following is an example of challenge data generated by CZERTAINLY for submitted CSR containing with two domain name identifiers ",(0,r.kt)("inlineCode",{parentName:"p"},"demo.czertainly.test")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"www.czertainly.test"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "challenge_data": {\n     "demo.czertainly.test": {\n        "dns-01": {\n           "record": "_acme-challenge.demo.czertainly.test",\n           "resource": "_acme-challenge",\n           "resource_value": "A1RnPLUigrrhd32tDtnF3yH_mgmuDLIfxKvBVrWefs4"\n        },\n        "http-01": {\n           "resource": ".well-known/acme-challenge/wXKY9aI5ChnUFGgUzG-dUDe85-Grq4Ub1MGZ2cYVtL4",\n           "resource_value": "wXKY9aI5ChnUFGgUzG-dUDe85-Grq4Ub1MGZ2cYVtL4.YS1M_PeBjPbe78-TEhNKOWuckVy7xf04IG0HpKijyPw"\n        },\n     },\n     "www.czertainly.test": {\n        "dns-01": {\n           "record": "_acme-challenge.www.czertainly.test",\n           "resource": "_acme-challenge",\n           "resource_value": "_UuzUAyxd1tFA3qx8k94HLmbLwV1Hsoqgef3YxhkWss"\n        },\n        "http-01": {\n           "resource": ".well-known/acme-challenge/OSu7SStl_kwYUOQ1dg0jzptGuaHf5VVcPiJyt-8oUMA",\n           "resource_value": "OSu7SStl_kwYUOQ1dg0jzptGuaHf5VVcPiJyt-8oUMA.YS1M_PeBjPbe78-TEhNKOWuckVy7xf04IG0HpKijyPw"\n        },\n     }\n  }\n')),(0,r.kt)("h3",{id:"publishing-verification-challenge"},"Publishing verification challenge"),(0,r.kt)("p",null,"In case you decide to use ",(0,r.kt)("inlineCode",{parentName:"p"},"http-01")," challenge validation method, you need to publish generated challenge in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/www/html/.well-known/acme-challenge/")," directory of the web server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    - name: Copy http-01 challenge data\n      ansible.builtin.copy:\n        dest: \"{{ acme_web_dir }}/{{ item.value['http-01']['resource'] }}\"\n        content: \"{{ item.value['http-01']['resource_value'] }}\"\n      with_dict:\n        - \"{{ acme_challenge['challenge_data'] }}\"\n      when: acme_method == 'http-01'\n")),(0,r.kt)("admonition",{title:"Multiple identifiers",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note a loop using ",(0,r.kt)("inlineCode",{parentName:"p"},"with_dict")," to iterate over all identifiers.")),(0,r.kt)("p",null,"In case you decide to use ",(0,r.kt)("inlineCode",{parentName:"p"},"dns-01")," challenge validation method, you need to publish TXT record to the DNS server responsible for the respective domain. Typically, access is granted based on the secret key that needs to be configured to sign request to write DNS records. Put your DNS credentials into file ",(0,r.kt)("inlineCode",{parentName:"p"},"vars/czertainly.private")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'server: 123.123.123.123\nkey_algorithm: "hmac-sha512"\nkey_name: "name"\nkey_secret: "base64 data of secret"\n')),(0,r.kt)("p",null,"The file ",(0,r.kt)("inlineCode",{parentName:"p"},"vars/czertainly.private")," gets loaded every time the playbook is executed. The following Ansible task is responsible for publishing the challenge to desired DNS resolver:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'      community.general.nsupdate:\n        key_algorithm: "{{ bind.key_algorithm }}"\n        key_name: "{{ bind.key_name }}"\n        key_secret: "{{ bind.key_secret }}"\n        server: "{{ bind.server }}"\n        record: "{{ item.value[\'dns-01\'][\'record\'] }}."\n        type: "TXT"\n        value: "{{ item.value[\'dns-01\'][\'resource_value\'] | regex_replace(\'^(.*)$\', \'\\"\\\\1\\"\') }}"\n        state: present\n      with_dict:\n        - "{{ acme_challenge[\'challenge_data\'] }}"\n      when: acme_method == \'dns-01\'\n')),(0,r.kt)("admonition",{title:"DNS dot notation",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note dot ",(0,r.kt)("inlineCode",{parentName:"p"},".")," after ",(0,r.kt)("inlineCode",{parentName:"p"},"record")," (DNS name) - it is required for some DNS server implementations, for example Bind9.")),(0,r.kt)("h3",{id:"request-validation"},"Request validation"),(0,r.kt)("p",null,"Once the challenges are successfully published, Ansible can request CZERTAINLY to validate them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'    - name: Let the challenge(s) be validated and retrieve the cert and intermediate certificate\n      community.crypto.acme_certificate:\n        account_key_src: "tmp/acme_account_key"\n        csr: "tmp/{{ acme_domain }}.csr"\n        dest: "tmp/{{ acme_domain }}.crt"\n        fullchain_dest: "tmp/{{ acme_domain }}-fullchain.crt"\n        chain_dest: "tmp/{{ acme_domain }}-intermediate.crt"\n        data: "{{ acme_challenge }}"\n        acme_directory: "{{ acme_directory }}"\n        acme_version: "{{ acme_version }}"\n        terms_agreed: true\n        force: "{{ acme_force }}"\n        modify_account: false\n        challenge: "{{ acme_method }}"\n      async: 120\n')),(0,r.kt)("p",null,"This tasks is blocking and can take be time-consuming depending on how many challenges and how often are validated. Therefore, it is a good practice to set timeout for this task. With ",(0,r.kt)("inlineCode",{parentName:"p"},"async: 120"),", Ansible will wait for 2 minutes for challenge validation, and if it is not done even after this timeout, it will fail with an error."),(0,r.kt)("h3",{id:"delete-validation-challenges"},"Delete validation challenges"),(0,r.kt)("p",null,"After successful challenge validation and obtaining issued certificate, we are going to do the cleanup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'    - name: Clean http-01 challenge data from drive\n      ansible.builtin.file:\n        path: "{{ acme_web_dir }}/{{ item.value[\'http-01\'].resource }}"\n        state: absent\n      with_dict:\n        - "{{ acme_challenge[\'challenge_data\'] }}"\n      when: acme_method == \'http-01\'\n\n    - name: Clean dns-01 challenge data from DNS\n      community.general.nsupdate:\n        key_algorithm: "{{ bind.key_algorithm }}"\n        key_name: "{{ bind.key_name }}"\n        key_secret: "{{ bind.key_secret }}"\n        server: "{{ bind.server }}"\n        record: "{{ item.value[\'dns-01\'].record }}."\n        type: "TXT"\n        state: absent\n      with_dict:\n        - "{{ acme_challenge[\'challenge_data\'] }}"\n      when: acme_method == \'dns-01\'\n')),(0,r.kt)("h3",{id:"issued-certificate"},"Issued certificate"),(0,r.kt)("p",null,"The issued certificate is placed into file ",(0,r.kt)("inlineCode",{parentName:"p"},'"tmp/{{ acme_domain }}.crt"'),". Placing it in the right location is specific and different for various end entities. This is out of the scope of this guide."))}h.isMDXComponent=!0}}]);