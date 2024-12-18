const jwt = require("jsonwebtoken");
const {jwt_user_password} = require("../config");

function userMiddeleware(req, res , next){
    const token = req.body.headers;
    const userDetails = jwt.verify({
        token
    },jwt_user_password)

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