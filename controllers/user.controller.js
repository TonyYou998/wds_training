const fs=require('fs');
const data=fs.readFileSync("./models/db.json");
const userDb=JSON.parse(data);
const getAllUser=(req,res)=>{
       
        res.status(200).json(userDb.users);

}
const addUser=(req,res)=>{
        const{id,name,age}=req.body;
        const newUSer={id,name,age};
        userDb.users=[...userDb.users,newUSer];
        fs.writeFileSync('./models/db.json',JSON.stringify(userDb));
        res.status(200).json("success");

}

module.exports={
    getAllUser,
    addUser
}