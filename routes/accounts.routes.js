const express=require('express');
const { getAllAccounts } = require('../controllers/account.controller');

const accountRouter=express.Router();

accountRouter.get("/get-accounts",getAllAccounts);


module.exports={
    accountRouter,
}