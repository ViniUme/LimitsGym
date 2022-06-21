import Connect from '../../../utils/database';

export default async function handler (req,res){
    if(req.method === "POST"){
        const { db } = await Connect();
        const body = req.body;

        const verify = await db.collection('users').findOne({email: body});
        
        if(verify === null){
            res.status(400).json({message: "Not found"})
        }
        else{
            console.log(verify)
            res.status(200).json(verify);
        }
    }
}