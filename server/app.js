var express = require("express");
var bodyParser = requier ("bodyParser");
var path = require("path");
var routes = require("./routes");
var multer = require('multer')
var cors = require('cors');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/",routes);


