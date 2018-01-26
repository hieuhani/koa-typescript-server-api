We use PostgreSQL gen_random_uuid() to generate primary key. Therefore you will need to install pgcrypto addon by querying this SQL statement.

```CREATE EXTENSION pgcrypto```
