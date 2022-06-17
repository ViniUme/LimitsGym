import database from '../../../utils/database.js'

export default async function handler (req,res){
    console.log("sim")
    res.status(200).json({message: "confirm"})
}