const JWT = require("jsonwebtoken");
// const userModel = require("../models/userModel");
//If no token is present in the request header return error. This means the user is not logged in.
// =====================================================================================================
const authenticate = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send("Can't find Token. It must be present");
    // console.log(token);
    next();
}

const authorise = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
    let decodedToken = JWT.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    let userId = req.params.userId;
    let decordDetails = decodedToken.userId
    if (userId != decordDetails) {
        return res.send("Can't login with is this user. You have to modify the request user details.")
    }
    next()
}






// =====================================================================================================
module.exports = { authenticate, authorise }
