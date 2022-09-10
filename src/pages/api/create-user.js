import Connect from '../../utils/database';

export default async function handler (req,res){
    if(req.method === "POST"){
        const { db } = await Connect();
        const body = req.body;
        
        await db.collection('clients').insertOne(body)

        res.status(200).json({message: true})
    }
}