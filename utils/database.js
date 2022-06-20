import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async function Connect(){
    await client.connect();
    const db = client.db(process.env.DATABASE_NAME);

    return {db, client}
}