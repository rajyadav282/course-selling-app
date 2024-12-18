const { Router } =  require("express"); 
const { userModel } = require("../db");
const { z } = require("zod"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const userRouter = Router();
const jwt_user_password = require("../config");
const {userMiddeleware} = require("../middlewares/user")

userRouter.post( "/signup" ,async function (req,res){
    const userSchema = z.object({
        email : z.string().min(3).max(100).email(),
        password : z.string().min(3).max(100) , 
        firstName : z.string(),
        lastName : z.string
    })

    const {email , password , firstName , lastName } = req.body;
    

        await userModel.create({
            email : email,
            password : password,
            firstName :firstName,
            lastName : lastName
        })
    
    res.json({
        message : "You have successfully signup"
    })

})

userRouter.post("/login" , async function (req,res){
    const {email , password } = req.body;
    const user = userModel.findOne({
        email : email,
        password : password
    })

    if(user){
        const token = jwt.sign({
            id : user._id
        },jwt_user_password)
        res.json({
            message : token
        })
    }
    else { 
        res.status(403).json({
            message : "incorrect Credentials"
        })
    }
   
})


userRouter.get("/purchases" , function (req,res){

})

module.exports = {
    userRouter : userRouter
}