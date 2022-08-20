// =========================Import-Data=================================
const bookModel = require("../models/newBookModel");
const authorDetails = require("../models/newAuthorModel");
const publisherDetails = require("../models/newPublisherModel");
// =========================Create-Data=================================
const createBook = async function (req, res) {
    let book = req.body;
    if (!book.author) { return res.send("AuthorId detail is required") };
    if (!book.publisher) { return res.send("PublisherId detail is required") };
    let checkIdOfAuthor = await authorDetails.findById(book.author)
    let checkIdOfpublisher = await publisherDetails.findById(book.publisher)
    if (!checkIdOfAuthor) { return res.send("Please check AuthorId") };
    if (!checkIdOfpublisher) { return res.send("Please check PublisherId") };
    let bookCreated = await bookModel.create(book);
    res.send({ data: bookCreated });
};
// =========================Get-Data=================================
const getBooksData = async function (req, res) {
    let books = await bookModel.find();
    res.send({ data: books });
};
// ===============Get-Data-With-Author&Publisher-Details=================
const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate("author").populate("publisher");
    res.send(specificBook);

};
// ===============Update-All-Old-Books=================
const updateOldBook = async function (req, res) {
    let books = await bookModel.findByIdAndUpdate(
        { _id: "630089b459241d540efc1cdb" },
        { $set: { isHardCover: false } },
        { new: true, upsert: true }
    )
    res.send(books)
}
// ===============Update-All-New-Books=================
/*For the books published by 'Penguin' and 'HarperCollins', update this key to true.*/
const updateNewBook = async function (req, res) {
    let findDataAuthor = await publisherDetails.find({ name: { $in: ["Penguin", "HarperCollins"] } })
    let fetch = findDataAuthor.map(x => x._id)
    let books = await bookModel.updateMany(
        { publisher: fetch },
        { $set: { isHardCover: true } },
        { new: true }
    )
    res.send(books)
}
// ===============Update-Price-Of-Book=================
/* For the books written by authors having a rating greater than 3.5, 
 update the books price by 10 (For eg if old price for such a book is 50, new will be 60)*/
const updatePriceOfBook = async function (req, res) {
    let findDataAuthor = await authorDetails.find({ rating: { $gte: 3.5 } })
    let fetch = findDataAuthor.map(x => x._id)
    let books = await bookModel.updateMany(
        { author: fetch },
        { $inc: { price: 10 } },
    )
    res.send(books)
}

// =========================Export-Data=================================
module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.updateOldBook = updateOldBook
module.exports.updateNewBook = updateNewBook
module.exports.updatePriceOfBook = updatePriceOfBook