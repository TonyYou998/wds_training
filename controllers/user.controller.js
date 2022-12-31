const fs=require('fs');
const data=fs.readFileSync("./models/db.json");
const userDb=JSON.parse(data);
const getAllUser=(req,res)=>{
        console.log(userDb);
        res.status(200).json(userDb.users);

}

module.exports={
    getAllUser,
}