import Connect from '../../../utils/database';

export default async function handler (req,res){
    if(req.method === "POST"){
        const { db } = await Connect();
        const body = req.body;

        const add = await db.collection('users').insertOne(body);
    }
}