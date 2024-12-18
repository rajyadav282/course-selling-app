require("dotenv").config()



const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {adminRouter} = require("./routers/admin")
const {userRouter} = require("./routers/user");
const {courseRouter} = require("./routers/course");


const app = express();
app.use(express.json());



app.use("/user" , userRouter);
app.use("/course" , courseRouter);
app.use("/admin" , adminRouter);

async function main(){
await mongoose.connect(process.env.mongo_url);
console.log("Connecting To The DB");
app.listen(3000);
}

main();