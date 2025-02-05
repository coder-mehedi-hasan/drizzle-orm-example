import 'dotenv/config';
import { dbClient } from './db/db';
import { users } from './db/schema';

async function main() {
    await dbClient.insert(users).values({
        name: "Mehedi Hasan",
        email: "mdmehedihasan2360@gmail.com"
    });

    const user = await await dbClient.query.users.findFirst();
    console.log("USER FROM DB: ", user)
}

main()