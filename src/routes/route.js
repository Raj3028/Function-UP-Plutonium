const express = require("express");
const router = express.Router();

// =================Book-Assignment========================
const bookingData = require("../bookController/bookController");
router.post("/createBook", bookingData.createBook);
router.get("/bookList", bookingData.bookList);
router.post("/getBooksInYear", bookingData.getBooksInYear);
router.post("/getParticularBooks", bookingData.getParticularBooks);
router.get("/getXINRBooks", bookingData.getXINRBooks);
router.get("/getRandomBooks", bookingData.getRandomBooks);
// ========================================================

module.exports = router;
