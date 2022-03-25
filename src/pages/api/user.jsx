import connect from "../../../utils/database";

export default async (req,res) => {
    const { db } = await connect();

    if(req.method === "POST"){
        const response = await db.collection("clientes").insertOne({
            name: "Rogério",
            age: 17,
        });
    
        res.status(200).json(response);    
    }
    else{
        const { name } = req.body;
        res.status(400).json({mensage: name})
    }
}