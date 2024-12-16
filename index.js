const express = require("express");
const jwt = require("express");
const mongoose = require("mongoose");
const {adminRouter} = require("./router/admin")
const {userRouter} = require("./routers/user");
const {courseRouter} = require("./routers/course")
const app = express();
app.use(express.json());

app.use("/user" , userRouter);
app.use("/course" , courseRouter);
app.use("/admin" , adminRouter);

   






app.post("user")
app.listen(3000);