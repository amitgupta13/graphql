const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: Schema.Types.ObjectId,
});

exports.Book = model("Book", bookSchema);
