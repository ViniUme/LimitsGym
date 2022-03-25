import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
});

console.log(client.isConnected);

export default async function connect(){
    if(!client.isConnected){ await client.connect(); }

    const db = client.db('teste-limits');
    return { db, client }
}