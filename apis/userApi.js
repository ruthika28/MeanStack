//create mini express appliatio to handle admin requests
const exp=require("express")
var bcrypt=require("bcrypt")
const userApp=exp.Router();
//use body parsing middleware
userApp.use(exp.json())

//import dbo from db.js
const dbo=require('../db');
dbo.initDb();

//import jsonwebtoken
const jwt=require("jsonwebtoken")


userApp.get('/readprofile/:username',(req,res)=>{
    res.send({message:"user profile works"})
});


userApp.post('/register',(req,res)=>{
    //check for username in db
    var userCollectionObj=dbo.getDb().usercollectionobj;
    userCollectionObj.findOne({username:req.body.username},(err,userObjFromDB)=>{
        if(err)
        {
            console.log('error in register',err)
        }
        else if(userObjFromDB!=null)
        {
            res.send({message:'username already existed'});
        }
        else
        {   
            //hash password
            var hashedPassword=bcrypt.hashSync(req.body.password,7);
            req.body.password=hashedPassword;
            userCollectionObj.insertOne(req.body,(err,success)=>{
                if(err)
                {
                    console.log('error');
                }
                else
                {
                    res.send({message:'register successfully'});
                }
            })
        }
    })
});


//login req handler
userApp.post('/login',(req,res)=>{
    var userCollectionObj=dbo.getDb().usercollectionobj;
    //verify username
    userCollectionObj.findOne({username:req.body.username},(err,userObj)=>{
        if(err)
        {
            console.log("error in read");
        }
        else if(userObj==null)
        {
            res.send({message:'invalid username'});
        }
        else
        {
            bcrypt.compare(req.body.password,userObj.password,(err,result)=>{
                if(err)
                {
                    console.log("err in password compare",err);
                }
                else if(result==false)
                {
                    res.send({message:'invalid password'});
                }
                else
                {
                    //create a token and send it to client
                    jwt.sign({username:userObj.username},'ssshhh',{expiresIn:60},(err,signedToken)=>{
                        if(err)
                        {
                            console.log("err ",err);
                        }
                        else
                        {
                            res.send({message:signedToken,username:userObj.username});
                        }
                    })  
                }
            });
        }
    })

})

const verifyToken=require("../middlewares/verifyToken");

//testReqHandler
userApp.get('/test',verifyToken,(req,res)=>{
    console.log("req headers is ",req.headers.authorization)
})

//export adminApp

module.exports=userApp;
