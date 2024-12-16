const express = require("express");
const jwt = require("express");
const mongoose = require("mongoose");
const {userRouter} = require("./router/user");
const app = express();
app.use(express.json());

app.use("/user" , userRouter);
app.use("/course" , courseRouter);


   






app.post("user")
app.listen(3000);