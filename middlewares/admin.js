const jwt_admin_password = require("../config");
const jwt = require("jsonwebtoken")
function adminMiddleware(req , res , next){
    const token = req.body.token;
    const adminverify = jwt.verify({
        token
    },jwt_admin_password)
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