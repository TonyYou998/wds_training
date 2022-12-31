const express=require('express');
const { userRouter } = require('./routes/user.route');
const app=express();
app.use(userRouter);
app.listen(3000,()=>{
        console.log("server is running on port 3000");
});