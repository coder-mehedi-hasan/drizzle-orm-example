import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from "./schema";
import Database from 'better-sqlite3';
const client = new Database(process.env.DATABASE_URL as string);

export const dbClient = drizzle(client, { schema, logger: true });

