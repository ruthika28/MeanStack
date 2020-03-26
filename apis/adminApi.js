//create mini express appliatio to handle admin requests
const exp=require("express")
const adminApp=exp.Router();

//import dbo from db.js
const dbo=require('../db');
dbo.initDb();


adminApp.get('/readprofile/:username',(req,res)=>{
    res.send({message:"admin profile works"})
});
adminApp.post('/login',(req,res)=>{
    res.send({message:"admin login works"})
});

//export adminApp

module.exports=adminApp;