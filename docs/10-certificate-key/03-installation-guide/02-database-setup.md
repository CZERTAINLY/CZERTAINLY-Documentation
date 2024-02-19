# Database Setup

The platform is developed and tested in the PostgreSQL relational database.

:::info
From the `Core` version `2.0.3`, database migrations are controlled by the `Core` itself. If you need to split the database administrator responsibility, it is always possible using the provided schema and migration scripts.
:::

## Setup database manually

The database must be setup before the platform can be used. Depending on your setup, you should initialize the database using the following steps:

- Create the database user
```sql
CREATE USER czertainlyuser WITH PASSWORD 'your-strong-password';
```

- Create the database and grant the user access to it
```sql
CREATE DATABASE czertainlydb ENCODING 'UTF8' LC_COLLATE='en_US.UTF-8' LC_CTYPE='en_US.UTF-8' TEMPLATE=template0;
GRANT ALL PRIVILEGES ON DATABASE czertainlydb to czertainlyuser;
```

- If you are going to use Keycloak, create schema for it
```sql
\c czertainlydb;
CREATE SCHEMA keycloak;
ALTER SCHEMA keycloak OWNER TO czertainlyuser;
```
Once the database is prepared, you can deploy the platform and start using it.