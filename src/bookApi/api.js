const books = require("../bookSchema/schema");

const userInput = async function (req, res) {
  let data = req.body;
  let savedData = await books.create(data);
  res.send({ bookInfo: savedData });
};

const allData = async function(req, res){
    let allBooksData= await books.find()
    res.send({allBookInfo: allBooksData})
}



module.exports.booksName = userInput;
module.exports.allBooksName = allData;
