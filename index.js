const express = require("express");
const jwt = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.post( "user/signup" , function (req,res){
    const email = req.body.email;
    const password = req.body.password;
    
    

})

app.post("user/login" , function (req,res){

})


app.get("user/purchases" , function (req,res){

})

app.post("/course/purchases" , function(req,res){
    
})


app.get("/courses" , function (req,res){

})

app.post("user")
app.listen(3000);