const express=require('express');
const rootRouter = require('./routes/root.route');
const { userRouter } = require('./routes/user.route');
const app=express();
app.use(express.json());
app.use("/api/v1",rootRouter);
app.listen(3000,()=>{
        console.log("server is running on port 3000");
});