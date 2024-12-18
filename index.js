const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {adminRouter} = require("./routers/admin")
const {userRouter} = require("./routers/user");
const {courseRouter} = require("./routers/course");
const { userModel } = require("./db");
const app = express();
app.use(express.json());
const JWT_Secret = "Mahendra@123456789";


app.use("/user" , userRouter);
app.use("/course" , courseRouter);
app.use("/admin" , adminRouter);






async function main(){
await mongoose.connect("mongodb+srv://yraj98391:jfaaVSWlZXVWoFDe@cluster0.mquxa.mongodb.net/course-selling-db");
console.log("Connecting To The DB");
app.listen(3000);
}

main();