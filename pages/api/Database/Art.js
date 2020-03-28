//Schema and Model to connect and find from the database.

const mongoose = require("mongoose");

const artSchema = new mongoose.Schema({
  id: Number,
  description: String,
  path: String,
  length: Number,
  width: Number,
  depth: Number,
  price: Number,
  sold: Boolean
});

 export default mongoose.models.Art || mongoose.model('Art', artSchema);
