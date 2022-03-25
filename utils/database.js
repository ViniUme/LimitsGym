import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewURLParse: true,
    useUnifiedTopology: true,
});

async function connect(){
    await.client.connect();
}