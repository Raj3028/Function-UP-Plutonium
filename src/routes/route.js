const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date




// =========================Assignment-01=============================

const getList = require("../controllers/CowinReport/cowinReport")
router.get("/cowin/getByDistrictID", getList)


// =========================Assignment-02=============================

const weatherData = require("../controllers/weatherData/weatherData")
router.get("/weatherData", weatherData)


// =========================Assignment-03=============================

const meme = require("../controllers/Meme/meme");
router.post("/getNewMeme", meme)


// ===================================================================
module.exports = router;