const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bulkschema = new Schema({
    sbu: String,
    region: String,
    period: String,
    pl: String,
    py: String,
    rfc: String,
    comment:String
});
const bulk = mongoose.model("uploaded", bulkschema);
module.exports =bulk;