// =========================Import-Data=================================
const publisherModel = require("../models/newPublisherModel");
// =========================Create-Data=================================
const createPublisher = async function (req, res) {
  let publisher = req.body;
  let authorCreated = await publisherModel.create(publisher);
  res.send({ data: authorCreated });
};
// =========================Get-Data=================================
const getPublishersData = async function (req, res) {
  let publisher = await publisherModel.find();
  res.send({ data: publisher });
};
// =========================Export-Data=================================
module.exports.createPublisher = createPublisher;
module.exports.getPublishersData = getPublishersData;
