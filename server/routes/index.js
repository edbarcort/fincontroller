var express = require ("express");
var app = express.Router;

app.get("/", (req,res)=> {
  res.send('hello world');
});
var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})

module.exports = app;

