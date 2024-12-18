const {Router} = require("express"); 
const {adminModel , courseModel} = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const  jwt  = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = require("../config")

const { adminMiddleware } = require("../middlewares/admin");

const adminRouter = Router();

adminRouter.post("/signup" ,async function(req,res){
    
    // const adminSchema = z.object({
    //     email : z.string().min(3).max(100).email(),
    //     password : z.string().min(3).max(100),
    //     firstName : z.string,
    //     lastname : z.string
    // })

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
        },JWT_ADMIN_PASSWORD)
        res.json({
            message : token
        })
    }
})

adminRouter.post("/course" ,adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const {title ,description ,imageUrl ,price } = req.body;
    const course = await courseModel.create({
        title : title,
        description : description,
        imageUrl : imageUrl,
        price : price,
        creatorId : adminId
    })

    res.json({
        message : "New Course has been created",
        creatorId  : course._id
    })
})

adminRouter.put("/course" , adminMiddleware , async function(req,res){
    const adminId = req.userId;

    const {title , description , imageUrl , price , courseId} = req.body;
    
    const course = await courseModel.updateOne({
    _id : courseId,creatorId : adminId
    },{
        title : title,
        description : description,
        imageUrl : imageUrl,
        price  :price
    })
    res.json({
        message : "Course Updated",
        courseId : course._id
    })
})

adminRouter.get("/course/bulk" ,adminMiddleware, async function(req,res){
    const adminId = userId;
    const course = await courseModel.find({
     creatorId : adminId
    })
})

module.exports = {
    adminRouter :adminRouter
}