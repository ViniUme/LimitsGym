import Connect from '../../../utils/database.js'

export default async function handler (req,res){
    if(req.method === "POST"){
        const { db } = await Connect();
        const body = req.body
        const response = db.collection('users').insertOne(body)
        res.status(200).json({message: "insert with success"});
    }
    else{
        res.status(400).json({message: "BAD REQUEST"})
    }
}