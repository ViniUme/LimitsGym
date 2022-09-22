import Connect from '../../utils/database';

export default async function handler(req, res){
    if(req.method == 'POST'){
        const {db} = await Connect();
        const old_user = req.body.old_user;
        const new_user = req.body.new_user;

        const response = await db.collection('clients').updateOne({email: old_user}, {$set: new_user})

        res.status(200).json({message: response});
    }
}