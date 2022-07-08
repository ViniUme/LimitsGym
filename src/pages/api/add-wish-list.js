import Connect from '../../utils/database';

export default async function handler (req,res){
    if(req.method === "POST"){
        const { db } = await Connect();
        const body = req.body;

        /*
        const add = await db.collection('users').findOne({email: body[0]})
        console.log(add)*/
        const add = await db.collection('users').replaceOne({email: body[0]},body[1])
        console.log(add)
        res.status(200)
    }
}