import Connect from '../../utils/database.js'

export default async function handler (req,res){
    if(req.method === "POST"){
        const { db } = await Connect();
        const body = req.body

        const find = await db.collection('users').findOne({email: body});

        if(find === null){
            res.status(200).json({
                response: false,
                email: body
            })
        }
        else{
            res.status(200).json({response: true})
        }
    }
    else{
        res.status(400).json({message: "Bad request, use method POST"})
    }
}