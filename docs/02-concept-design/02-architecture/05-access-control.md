# Access Control

Access control is a fundamental for every platform.

### Authentication

Authentication to the platform is done through client certificates. Any user who wishes to access the platform will require a client certificate installed in the system. To use the API of the platform, the users are required to provide the certificate during establishing the connection to the server.

:::note
[`Credential`](../core-components/credential) is not associated with platform login. Authentication to the platform is only via client certificates. [`Credential`](../core-components/credential) is meant to be used only by the `Connector` to establish the connection with specific technology, if needed.
:::

### Roles

Role defined the permissions of user after the successful authentication when logging in. The list of roles available are as follows:

| Role                | Description                                                                                                                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Super Administrator` | Highest level of privilege in the platform. `Super Administrator` has the full permission in the platform.                       |
| `Administrator`       | `Administrator` performs administrative operation sin the platform to setup the platform with the specific technologies and profiles. This role prepares the access for the `Client`. |
| `Client`              | `Client` is entitled to perform certificate and cryptographic key related operations, but not administration.                                                                                             |

:::caution
`Super Administrator` has the full permission in the platform. Therefore, it is recommended to use the `Super Administrator` role only if needed, for example, as a break glass function. The `Administrator` can perform administrative operations to setup the platform for `Client`.
:::