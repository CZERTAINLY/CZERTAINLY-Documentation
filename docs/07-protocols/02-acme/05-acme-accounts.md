# ACME Accounts

This section of the document describes the `ACME Account` Object. The `Account` objects are the Objects defined by the [RFC 8555](https://datatracker.ietf.org/doc/html/rfc8555) under section [7.1.2.](https://datatracker.ietf.org/doc/html/rfc8555#section-7.1.2) with additional capabilities to enable and disable them.

:::info
Note that the `ACME Account` holds the information of the account registered by the client. These information cannot be updated. `ACME Account` wrapper provides only the functionality to control the state of the account by either enabling or disabling them. This also allows the user to revoke the account so that new Orders cannot be placed.
:::

### Operations:

The following operations can be performed on `ACME Account`.

- Enable
- Disable
- Revoke

:::info

- `Account` should be Enable to place a new Order
- Revocation of the `Account` is same as Server Side Deactivation mentioned in the [RFC 8555, section 7.1.6](https://datatracker.ietf.org/doc/html/rfc8555#:~:text=State%20Transitions%20for%20Account%20Objects)
- Deactivated or Revoked account cannot be re-enabled.
- Status of the deactivated account will be disabled and cannot be updated
