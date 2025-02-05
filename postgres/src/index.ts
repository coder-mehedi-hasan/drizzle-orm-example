import 'dotenv/config';
import { dbClient } from './db/db';
import { UserTable } from './db/schema';

async function main() {
    await dbClient.insert(UserTable).values({
        name: "Mehedi Hasan"
    });

    const user = await await dbClient.query.UserTable.findFirst();
    console.log("USER FROM DB: ",user)
}

main()