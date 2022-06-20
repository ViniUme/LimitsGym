import Connect from '../../../utils/database';

export default async function handler (req,res){
    if(req.method === "POST"){
        const { db } = await Connect();
        const body = req.body;

        const create = await db.collection('users').insertOne(body);

        console.log(create)
        res.status(200).json({message: true})
    }
}