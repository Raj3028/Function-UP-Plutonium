// =========================Import-Data=================================
const AuthorModel = require("../models/newAuthorModel");
// =========================Create-Data=================================
const createAuthor = async function (req, res) {
  let author = req.body;
  let authorCreated = await AuthorModel.create(author);
  res.send({ data: authorCreated });
};
// =========================Get-Data=================================
const getAuthorsData = async function (req, res) {
  let authors = await AuthorModel.find();
  res.send({ data: authors });
};
// =========================Export-Data=================================
module.exports.createAuthor = createAuthor;
module.exports.getAuthorsData = getAuthorsData;
