import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from "./schema";
import postgres from 'postgres';

const client = postgres(process.env.DATABASE_URL as string);
export const dbClient = drizzle(client, { schema, logger: true });

