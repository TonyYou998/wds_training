const express=require('express');
const { accountRouter } = require('./accounts.routes');
const { userRouter } = require('./user.route');
const rootRouter=express.Router();
rootRouter.use(userRouter);
rootRouter.use(accountRouter);
module.exports=rootRouter;