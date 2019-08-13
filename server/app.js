var express = require("express");
//var bodyParser = require ("bodyParser");
var path = require("path");
var routes = require("./routes");
var multer = require('multer')
var cors = require('cors');
var path = require ("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use("/",routes);

// Starts our server.
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});



