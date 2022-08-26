const userSchema = require("../models/userModel")
const productSchema = require("../models/productModel")
const orderSchema = require("../models/orderModel")



const midHeader = async function (req, res, next) {
    // console.log(req.headers.isfreeappuser)
    const abc = req.headers["isfreeappuser"]
    if (!abc) { return res.send("Missing A Mandatory Header") }
    console.log("All are good.")
    next()
}

const midUserId = async function (req, res, next) {
    let userID = req.body["userId"]
    let checkUserId = await userSchema.findById(userID)
    if (!checkUserId) { return res.send("Please Check UserId") };
    next()
}

const midProductId = async function (req, res, next) {
    let productId = req.body["productId"]
    let checkProductId = await productSchema.findById(productId)
    if (!checkProductId) { return res.send("Please Check ProductId") };
    next()
}

const midCheckUserData = async function (req, res, next) {
    // let productData = await productSchema.findById(orderData.productId)
    // let userData = await userSchema.findById(orderData.userId)
    if (!req.headers["isfreeappuser"]) {
        return res.send("Order haven't created because of insufficient balance")
    }
    next()
}


module.exports = { midHeader, midUserId, midProductId, midCheckUserData }