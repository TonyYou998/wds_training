const express=require('express');
const { getAllUser, addUser } = require('../controllers/user.controller');
const userRouter=express.Router();

userRouter.get("/get-users",getAllUser);
userRouter.post("/add-user",addUser);

module.exports={
    userRouter,
}