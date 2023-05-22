# Ansible ACME

[Ansible](https://docs.ansible.com/) is a suite of tools to enable the automatization of software configuration. It can be used in conjunction with an ACME server running on the CZERTAINLY platform to automate certificate issuing, especially in situations where a target platform of a new certificate isn't capable of direct communication with an ACME server, and [Certbot](certbot) isn't the right choice.

## Prerequisites

To use Ansible with CZERTAINLY, you need to have the following:
- some previous experience with Ansible (version 2.10 is fine),
- configured at least one `RA Profile` certificate service in CZERTAINLY,
- access to HTTP or DNS resources that will be used to validate ACME challenges,
- ACME protocol enabled according to the [Enable ACME](enable-acme).

## Steps

To get a certificate with ACME protocol, you need to do several tasks typically:
- register an account on the ACME server,
- prepare CSR for your new certificate,
- request challenge on the ACME server,
- transport challenge data to HTTP or DNS server,
- request validation on the ACME server,
- install the new certificate.

### Ansible playbook preparation

To demonstrate all steps, we will create a playbook file [`playbook-czertainly-acme-demo.yml`](https://github.com/semik/ansible-acme-demo/blob/main/playbook-czertainly-acme-demo.yml). The playbook uses modules [`community.crypto.acme_account`](https://docs.ansible.com/ansible/latest/collections/community/crypto/acme_account_module.html) and [`community.crypto.acme_certificate`](https://docs.ansible.com/ansible/latest/collections/community/crypto/acme_certificate_module.html) for interaction with the ACME server. Modules [`community.crypto.openssl_privatekey`](https://docs.ansible.com/ansible/latest/collections/community/crypto/openssl_privatekey_module.html) and [`community.crypto.openssl_csr`](https://docs.ansible.com/ansible/latest/collections/community/crypto/openssl_csr_module.html) for private key and certificate signing request creation. And optionally, it uses [`community.general.nsupdate`](https://docs.ansible.com/ansible/latest/collections/community/general/nsupdate_module.html) for updating DNS. Even though the Ansible community manages those modules, they are part of the standard Ansible package on Debian Bullseye Linux.

At the beginning of the playbook file, we define some default values. The example playbook assumes that it is running on an HTTP server and that user running it has write permissions to `/var/www/html` directory. All working files and resulting certificate is stored in the `tmp` directory, which must be created before executing the playbook.

```yaml
- name: Let's encrypt Ansible ACME example
  hosts: localhost

  tasks:
    - name: Set vars
      ansible.builtin.set_fact:
        acme_directory: "https://[domain]:[port]/api/v1/protocols/acme/ACME_WebServers/directory"
        acme_version: 2
        acme_register_account: true
        acme_web_dir: "/var/www/html"
        acme_force: false
        acme_account_email: "email@example.com"
        bind: "{{ lookup('file', 'vars/czertainly.private') | from_yaml }}"

    - name: Set default ACME method
      ansible.builtin.set_fact:
        acme_method: 'http-01'
        when: acme_method is not defined
```

### Register ACME account

First, we need to create a private RSA key which is associated with a later registered account. The key can be used for revoking the issued certificate even when the private key of the certificate isn't available.

```yaml
    - name: Generate private key for ACME account
      community.crypto.openssl_privatekey:
        path: "tmp/acme_account_key"
        type: RSA
        size: 2048
        mode: 0600

    - name: Register ACME Account without external binding
      community.crypto.acme_account:
        account_key_src: "tmp/acme_account_key"
        acme_directory: "{{ acme_directory }}"
        acme_version: "{{ acme_version }}"
        state: present
        terms_agreed: true
        contact:
          - "mailto:{{ acme_account_email }}"
      register: acme_account
      when: acme_register_account
```

### Generate private key and prepare CSR

The creation of a private key and CSR can be removed entirely, depending on your need. For further steps, you need just CSR.

```yaml
    - name: Generate private key for server
      community.crypto.openssl_privatekey:
        path: "tmp/{{ acme_domain }}.key"
        type: RSA
        size: 2048
        mode: 0600

    - name: Generate certificate signing request (CSR)
      community.crypto.openssl_csr:
        path: "tmp/{{ acme_domain }}.csr"
        privatekey_path: "tmp/{{ acme_domain }}.key"
        common_name: "{{ acme_domain }}"
        subject_alt_name: "DNS:{{ acme_domain }}"
```

### Request verification challenge

During the request of verification challenge, we submit CSR to the ACME server. The argument `dest` can be pointing to a non-existent file. But if it points to an existing certificate, the ACME client (Ansible) will look at its validity, and if it is below the default value 10 days, it will require reissuing. This can be modified by arguments `remaining_days` and `force`. The second argument, `force`, requests a new certificate every time the playbook is executed.

```yaml
    - name: Create a challenge
      community.crypto.acme_certificate:
        account_key_src: "tmp/acme_account_key"
        account_email: "{{ acme_account_email }}"
        csr: "tmp/{{ acme_domain }}.csr"
        dest: "tmp/{{ acme_domain }}}.crt"
        acme_directory: "{{ acme_directory }}"
        acme_version: "{{ acme_version }}"
        terms_agreed: true
        force: "{{ acme_force }}"
        modify_account: false
        challenge: "{{ acme_method }}"
      register: acme_challenge

    - name: Show challenge
      ansible.builtin.debug: var=acme_challenge
```

Example challenge data for CSR with two names, `semik.3key.test` and `www.semik.3key.test`:

```json
  "challenge_data": {
     "semik.3key.test": {
        "dns-01": {
           "record": "_acme-challenge.semik.3key.test",
           "resource": "_acme-challenge",
           "resource_value": "A1RnPLUigrrhd32tDtnF3yH_mgmuDLIfxKvBVrWefs4"
        },
        "http-01": {
           "resource": ".well-known/acme-challenge/wXKY9aI5ChnUFGgUzG-dUDe85-Grq4Ub1MGZ2cYVtL4",
           "resource_value": "wXKY9aI5ChnUFGgUzG-dUDe85-Grq4Ub1MGZ2cYVtL4.YS1M_PeBjPbe78-TEhNKOWuckVy7xf04IG0HpKijyPw"
        },
     },
     "www.semik.3key.test": {
        "dns-01": {
           "record": "_acme-challenge.www.semik.3key.test",
           "resource": "_acme-challenge",
           "resource_value": "_UuzUAyxd1tFA3qx8k94HLmbLwV1Hsoqgef3YxhkWss"
        },
        "http-01": {
           "resource": ".well-known/acme-challenge/OSu7SStl_kwYUOQ1dg0jzptGuaHf5VVcPiJyt-8oUMA",
           "resource_value": "OSu7SStl_kwYUOQ1dg0jzptGuaHf5VVcPiJyt-8oUMA.YS1M_PeBjPbe78-TEhNKOWuckVy7xf04IG0HpKijyPw"
        },
     }
  }
```


### Publishing verification challenge

In case you decide to use `http-01` verification method, you need just put issued challenge into `/var/www/html/.well-known/acme-challenge/` directory:

```yaml
    - name: Copy http-01 challenge data
      ansible.builtin.copy:
        dest: "{{ acme_web_dir }}/{{ item.value['http-01']['resource'] }}"
        content: "{{ item.value['http-01']['resource_value'] }}"
      with_dict:
        - "{{ acme_challenge['challenge_data'] }}"
      when: acme_method == 'http-01'
```

Please note a loop using `with_dict` to iterate over all possible hostnames.

In case you decide to use `dns-01` verification method. You need access to the DNS server responsible for the respective domain. Put access credentials into file `vars/czertainly.private` in the format:

```yaml
server: 123.123.123.123
key_algorithm: "hmac-sha512"
key_name: "name"
key_secret: "base64 data of secret"
```

The file  `vars/czertainly.private` gets loaded at the playbook's beginning. The Following Ansible code is responsible for publishing the DNS challenge:

```yaml
      community.general.nsupdate:
        key_algorithm: "{{ bind.key_algorithm }}"
        key_name: "{{ bind.key_name }}"
        key_secret: "{{ bind.key_secret }}"
        server: "{{ bind.server }}"
        record: "{{ item.value['dns-01']['record'] }}."
        type: "TXT"
        value: "{{ item.value['dns-01']['resource_value'] | regex_replace('^(.*)$', '\"\\1\"') }}"
        state: present
      with_dict:
        - "{{ acme_challenge['challenge_data'] }}"
      when: acme_method == 'dns-01'
```

Please, note dot `.` after `record` (DNS name) - it is required for Bind9. Your DNS server may vary.

### Request validation

After you publish verification data, you request validation

```yaml
    - name: Let the challenge be validated and retrieve the cert and intermediate certificate
      community.crypto.acme_certificate:
        account_key_src: "tmp/acme_account_key"
        csr: "tmp/{{ acme_domain }}.csr"
        dest: "tmp/{{ acme_domain }}.crt"
        fullchain_dest: "tmp/{{ acme_domain }}-fullchain.crt"
        chain_dest: "tmp/{{ acme_domain }}-intermediate.crt"
        data: "{{ acme_challenge }}"
        acme_directory: "{{ acme_directory }}"
        acme_version: "{{ acme_version }}"
        terms_agreed: true
        force: "{{ acme_force }}"
        modify_account: false
        challenge: "{{ acme_method }}"
      async: 120
```

This call is blocking and can be lengthy, so it is good practice to set a timeout. With `async: 120`, Ansible will wait for 2 minutes, and if no certificate is issued within that time limit, it will fail with an error.

### Delete validation challenges

After finishing is good to remove challenges.

```yaml
    - name: Clean http-01 challenge data from drive
      ansible.builtin.file:
        path: "{{ acme_web_dir }}/{{ item.value['http-01'].resource }}"
        state: absent
      with_dict:
        - "{{ acme_challenge['challenge_data'] }}"
      when: acme_method == 'http-01'

    - name: Clean dns-01 challenge data from DNS
      community.general.nsupdate:
        key_algorithm: "{{ bind.key_algorithm }}"
        key_name: "{{ bind.key_name }}"
        key_secret: "{{ bind.key_secret }}"
        server: "{{ bind.server }}"
        record: "{{ item.value['dns-01'].record }}."
        type: "TXT"
        state: absent
      with_dict:
        - "{{ acme_challenge['challenge_data'] }}"
      when: acme_method == 'dns-01'
```

### Issued certificate

The issued certificate is placed into file `"tmp/{{ acme_domain }}.crt"`. Placing it in the right location is specific and different for different target software, so we left it out of the scope of this guide.
