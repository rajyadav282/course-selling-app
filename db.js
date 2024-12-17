const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    email : {type : String , unique : true },
    password : String,
    firstName : String,
    lastName : String
})

const courses = new Schema({
    title : String,
    description : String,
    price : Number,
    imageUrl : String,
    creatorId : ObjectId
})

const admin = new Schema({
    email : String,
    password : String,
    firstName : String,
    lastName : String
})

const purchase = new Schema({
    userId : ObjectId,
    courseId : ObjectId
})

const userModel = mongoose.model("users" , user);
const courseModel = mongoose.model("courses" , courses);
const adminModel = mongoose.model("admin" , admin);
const purchaseModel = mongoose.model( "purchase", purchase ) 

module.exports = {
    userModel : userModel , 
    courseModel : courseModel , 
    adminModel : adminModel,
    purchaseModel : purchaseModel
};




