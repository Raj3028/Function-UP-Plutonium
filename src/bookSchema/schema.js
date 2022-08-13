const mongoose1 = require("mongoose");

const bookSchema = new mongoose1.Schema(
  {
    bookName: {
      type: String,
      unique: true,
      required: true,
    },
    authorName: String,
    category: {
      type: String,
      enum: [
        "Fantasy",
        "Sci-Fi",
        "Mystery",
        "Thriller",
        "Romance",
        "Westerns",
        "Dystopian",
        "Contemporary",
      ],
    },
    year:{type: Number,
        required: true,
        min: 1900,
        max: 2100},
  },
  { timestamps: true }
);

module.exports = mongoose1.model("Book", bookSchema); 
