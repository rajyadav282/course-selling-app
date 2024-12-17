const { Router } =  require("express"); 
const { userModel } = require("../db");
 

const userRouter = Router();

userRouter.post( "/signup" , function (req,res){
    res.json({
        message : "You have successfully Signed Up"
    })
})

userRouter.post("/login" , function (req,res){

})


userRouter.get("/purchases" , function (req,res){

})

module.exports = {
    userRouter : userRouter
}