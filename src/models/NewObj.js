const mongoose = require('mongoose');

const NewObj = new mongoose.Schema({
    Name: String,
    City: String,
    AddressPincode: Number
}, { timestamps: true });

module.exports = mongoose.model('UserABC', NewObj)

