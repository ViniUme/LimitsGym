import Connect from "../../utils/database";

export default async function handler(req,res){
    if(req.method == 'POST'){
        const {db} = await Connect();
        const body = req.body;

        const response = await db.collection('clients').findOne({email: body.email, pass: body.pass});

        if(response != null){
            res.status(200).json({message: true});
        }
        else{
            res.status(200).json({message: false});
        }
    }
}