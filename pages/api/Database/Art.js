//Schema and Model to connect and find from the database.

const mongoose = require("mongoose");

const artSchema = new mongoose.Schema({
  id: String,
  description: String,
  path: String,
  size: String,
  price: Number,
  sold: Boolean
});

 export default mongoose.models.Art || mongoose.model('Art', artSchema);
