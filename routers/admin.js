const {Router} = require("express"); 
const {adminModel} = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const  jwt  = require("jsonwebtoken");
const jwt_admin_password = "indira@12345";

const adminRouter = Router();

adminRouter.post("/signup" ,async function(req,res){
    
    const adminSchema = z.object({
        email : z.string().min(3).max(100).email(),
        password : z.string().min(3).max(100),
        firstName : z.string,
        lastname : z.string
    })

    const { email , password ,firstName , lastName } = req.body;

    // const hasedPassword = bcrypt.hash(password , 5);

    await adminModel.create({
        email : email,
        password : password,
        firstName :firstName,
        lastName: lastName
    })

    res.json({
        message : "You Have Successfully Created Account as the Admin"
    })
})

adminRouter.post("/signin" ,async function(req,res){
    const {email , password} = req.body;
    const adminfound = await adminModel.findOne({
        email : email,
        password : password
    })
    if(adminfound){
        const token = jwt.sign({
            id : adminfound._id
        },jwt_admin_password)
        res.json({
            message : token
        })
    }
})

adminRouter.post("/course" , function(req,res){
    
})

adminRouter.put("/course" , function(req,res){
    
})

adminRouter.get("/course/bulk" , function(req,res){
    
})

module.exports = {
    adminRouter :adminRouter
}