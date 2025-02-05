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