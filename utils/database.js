import { MongoClient } from 'mongodb';

const url = process.env.DATABASE_URL;
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbName = 'LIMITS';

export default async function Connect(){
    
    await client.connect();
    const db = client.db(dbName).collection('users');

    return {db, client}
}