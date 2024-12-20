# Overview

**Access control is a fundamental for every platform.**

CZERTAINLY decouples the identification, authentication, and authorization process and therefore provides flexibility in terms of configuration access control rules.

The following steps are generally applied when used should be identified, authenticated, and authorized:
1. User is authenticated using external authentication system. The identification of authenticated user is forwarded to the platform.
2. CZERTAINLY Auth Service validates the identification of the user and search for the user in the database.
3. When user is found, internal authorization token is produced containing all permissions that are assigned to the user according the role definition.
4. The authorization token is used by internal services to evaluate authorization of the user to actions and related objects using [OPA](https://www.openpolicyagent.org/).

The access control consists of the following parts:

| Access Control Part                                        | Short description                             |
|------------------------------------------------------------|-----------------------------------------------|
| [Externalized Authentication](externalized-authentication) | External authentication system support        |
| [Identification](identification)                           | Supported identification options              |
| [Authorization](authorization)                             | Authorization policies and evaluation process |
| [Users](users)                                             | User management                               |
| [Roles and Permissions](roles-permissions)                 | Management of roles and permissions           |