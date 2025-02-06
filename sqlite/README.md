
## Drizzle guidline
 

### Initilization: 
- Postgres: https://orm.drizzle.team/docs/get-started-postgresql#postgresjs
- Sqlite: 

### Migration:
- https://orm.drizzle.team/docs/drizzle-config-file

### Schema: 
- https://orm.drizzle.team/docs/sql-schema-declaration


# Steps
- ## Instalation
  - ```bash
    npm install drizzle-orm better-sqlite3 sqlite
    npm install -D drizzle-kit
- ## Configure
    - `drizzle.config.ts`
    ```js
    import { defineConfig } from "drizzle-kit";
    export default defineConfig({
        dialect: 'sqlite',
        schema: './src/db/schema.ts',
        out: './src/db/migrations',
        dbCredentials: {
            url: "app.db",
        },
        verbose: true,
        migrations: {
            table: "migrations"
        }
    })
    ```
- ## Schema Generate
    - `schema.ts` (src/db/schema.ts)
        ```js
        import { sqliteTable as table, integer, text, int, uniqueIndex } from "drizzle-orm/sqlite-core";

        export const users = table(
            "users",
            {
                id: int().primaryKey({ autoIncrement: true }),
                name: text("first_name", {
                    length: 255
                }).notNull(),
                email: text().notNull(),
            },
            (table) => [
                uniqueIndex("email_idx").on(table.email)
            ]
        )
        ```
    - run command
        ```bash
        drizzle-kit generate
        ```

- ## Make Migrations
    - `migration.ts` (src/db/migration.ts)
        ```js
        import 'dotenv/config'
        import { drizzle } from 'drizzle-orm/better-sqlite3';
        import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
        import Database from 'better-sqlite3';

        const migrationClient = new Database(process.env.DATABASE_URL as string);

        const init = async () => {
            await migrate(drizzle(migrationClient), {
                migrationsFolder: "./src/db/migrations"
            });

            await migrationClient.close();
        }

        init();
        ```
    - run command
         ```bash 
        tsx src/db/migration.ts
        ```

- ## View Database: 
    ```bash 
    npx drizzle-kit studio
    ```

- ## Create DB Client
    - `db.ts` (src/db/db.ts)
    ```js
        
    ```
