const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
  name: String,
  age: String,
});

exports.Author = model("Author", authorSchema);
