const newCUser = require("../models/NewObj")

const newUser = async function (req, res) {
    let data = req.body
    let savedData = await newCUser.create(data)
    res.send({ msg: savedData })
}

const getNewUser = async function (req, res) {
    let allData = await newCUser.findById("63072b4a0ed6ea41a1d00e83")
    let all1 = allData.City
    let all = allData["City"]
    console.log({ all1: all1 })
    console.log({ all: all })
    console.log(req.headers)
    req.headers["month"] = "August"
    res.send({ all1, all })
    
}




module.exports.newUser = newUser
module.exports.getNewUser = getNewUser