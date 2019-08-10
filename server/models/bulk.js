const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bulkSchema = new Schema({
  sbu: String,
  region: String,
  period: String,
  pl: Double,
  py: Double,
  rfc: Double
});
const bulk = mongoose.model("googlebooks", bulkSchema);
module.exports = bulk;