
const jwt = require("jsonwebtoken")
const {JWT_ADMIN_PASSWORD} = require("../config");
function adminMiddleware(req , res , next){
    const token = req.body.token;
    const adminverify = jwt.verify({
        token
    },JWT_ADMIN_PASSWORD)
    
    if(adminverify){
        req.userId = adminverify.id;
    }
    else{
        res.json({
            message  : "You are not signed IN"
        })
    }
}

module.exports = {
    adminMiddleware
}