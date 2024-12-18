const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");

function userMiddeleware(req, res , next){
    const token = req.body.headers;
    const userDetails = jwt.verify({
        token
    },JWT_USER_PASSWORD)

    if(userDetails){
        req.userId = userDetails.id;
        next()
    }
    else{
        res.status(403).json({
            message : "User Not Signed In"})
    }

}

module.exports = {
    userMiddeleware
}