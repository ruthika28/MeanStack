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

//import verify token middleware
const verifyAndValidateToken=require('../middlewares/verifyToken');




userApp.get('/profile/:username',verifyAndValidateToken,(req,res,next)=>{
    //res.send({message:'user profile works',data:''})
    
    console.log("userapi has a username",req.params.username);
    let userCollectionObj=dbo.getDb().usercollectionobj;
    userCollectionObj.findOne({username:req.params.username},(err,userObjFromDB)=>{
        if(err)
        {
            next(err);
        }
        else if(userCollectionObj==null)
        {
            res.send({message:"user doesnot exist"});
        }
        else
        {
            res.send({message:"user existed",data:userObjFromDB});
        }
    })
}
);


const cloudinary=require("cloudinary");
const cloudinaryStorage=require("multer-storage-cloudinary");
const multer=require("multer");

//configure cloudinary
cloudinary.config({
    cloud_name:'dzka5oatn',
    api_key:'687434899847193',
    api_secret:'nF2zfkOyJFjmszFkN8jUxhrFoGE',
}
);
//configure cloudinary storage details

var storageForCloudinary=cloudinaryStorage({
    cloudinary:cloudinary,
    folder:'vnrfiles',
    allowedFormats:['jpg','png','jpeg'],
    filename:function(req,file,cb)
    {
        //cb=callback fn
        cb(undefined,file.fieldname +'-'+Date.now());    
    }
});

//configure multer
var upload=multer({storage:storageForCloudinary});







//userRouter.use(exp.json())
userApp.post('/register',upload.single('photo'),(req,res)=>{
    //check for username in db
    //console.log("cdn link of uploaded image is ",req.file.secure_url);
    
    //prepare req.body
    //to attch cdn link 
    //convert string to json
    req.body=JSON.parse(req.body.userObj);

    req.body.profileImage=req.file.secure_url; 

//remove key "photo"
delete req.body.photo;

    console.log("req body is", req.body);


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
                            res.send({message:"success",token:signedToken,username:userObj.username});
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
