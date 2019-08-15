var express = require("express");
//var bodyParser = require ("bodyParser");
var path = require("path");
var routes = require("./routes");
var multer = require('multer')
var cors = require('cors');
var path = require ("path");
const apiRoutes = require("./routes/api");
const mongoose = require("mongoose");

// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use("/",routes);
//app.use("/api",apiRoutes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbFinancial");
// Starts our server.
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});



