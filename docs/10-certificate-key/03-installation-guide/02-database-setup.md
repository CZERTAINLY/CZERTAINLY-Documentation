# Database Setup

The platform is developed and tested in the PostgreSQL relational database. The database must be setup before the platform can be used.

Typicaly you need to create the database user for the platform:
```sql
CREATE USER czertainlyuser WITH PASSWORD 'your-strong-password';
```

Create the database itself and grant the user full control over it:
```sql
CREATE DATABASE czertainlydb ENCODING 'UTF8' LC_COLLATE='en_US.UTF-8' LC_CTYPE='en_US.UTF-8' TEMPLATE=template0;
GRANT ALL PRIVILEGES ON DATABASE czertainlydb to czertainlyuser;
```
The platform will take care of creating all necesary schemas and tables itself. It will also handle any necessary upgrades.

:::warning
Please note that downgrade of the platform is not supported.
:::

## Setup database manually

Depending on your setup, you might be required to initialize the database manualy using following additonal steps:

Create the tables using the schema file located in the `db` directory:
```bash
psql -h localhost -U czertainlyuser -d czertainlydb < ./core/01_tables.sql
```

Load initial data required by the platform using the file located in the `db` directory:
```bash
psql -h localhost -U czertainlyuser -d czertainlydb < ./core/02_data.sql
```

If you are planning to deploy [Keycloak](../20-integration-guides/10-keycloak/01-overview.md) you need to create schema for it:
```sql
\c czertainlydb;
CREATE SCHEMA keycloak;
ALTER SCHEMA keycloak OWNER TO czertainlyuser;
```

Once the tables and data are created, you can deploy the platform and start using it.

:::info
In this manual setup, the database admistrator is responsible for all migrations of database structures. The migration scripts are provided.TODO: Where??
:::
