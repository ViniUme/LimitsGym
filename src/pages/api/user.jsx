import connect from "../../../utils/database";

export default async (req,res) => {
    const { db } = await connect();

    if(req.method === "POST"){
        const  {name, cellphone, email, password} = req.body;

        if(!name || !cellphone || !email || !password){
            res.status(400).json({message: "Error 400, Missing body parameter"});
        }
        else{
            const response = await db.collection("clientes").insertOne({
                name: name,
                cellphone: cellphone,
                email: email,
                password: password
            });
            res.status(200).json(response);
        } 
    }
    else{
        res.status(400).json({message: "Error 400, Use Post method"})
    }
}