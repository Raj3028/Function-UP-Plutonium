const express = require("express");
const router = express.Router();
// ===========================Import-Data==================================
const authorController = require("../controllers/authorController");
const bookController = require("../controllers/bookController");
const publisherController = require("../controllers/publisherController");
// ============================Test-Router=================================
router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});
// ===========================Author-Apis==================================
router.post("/createAuthor", authorController.createAuthor);
router.get("/getAuthorsData", authorController.getAuthorsData);
// ===========================Book-Apis====================================
router.post("/createBook", bookController.createBook);
router.get("/getBooksData", bookController.getBooksData);
router.get(
  "/getBooksWithAuthorAndPublisherDetails",
  bookController.getBooksWithAuthorAndPublisherDetails
);
// ============================Publisher-Apis===============================

router.post("/createPublisher", publisherController.createPublisher);
router.get("/getPublishersData", publisherController.getPublishersData);
// ===========================Update-All-Old-Books===========================
router.put("/updateOldBook", bookController.updateOldBook);
// ===========================Update-All-New-Books===========================
router.put("/updateNewBook", bookController.updateNewBook);
// ========================Update-Price-Of-Book==============================
router.put("/updatePriceOfBook", bookController.updatePriceOfBook);
// ==========================Export-Router-Apis==============================
module.exports = router;
