
var express = require ("express");
var app = express.Router;
var multer = require('multer');
const csv = require('csvtojson');
const mongoClient = require('mongodb').MongoClient,
assert = require('assert');



var filename = null;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    filename = Date.now() + "-" + file.originalname;
    cb(null, filename);
  },
});

var upload = multer({
  storage: storage,
});

var app = express();

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

// app.post('/upload', function (req, res) {

//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       return res.status(500).json(err)
//     } else if (err) {
//       return res.status(500).json(err)
//     }
//     console.log("post")
//     return res.status(200).send(req.file)

//   })

// });

app.post('/upload', upload.single("file"), function (req, res, next) {
console.log("index running");


  // Mongodb Connection URL 

  const url = "mongodb://localhost";
  console.log("Multer", req.file.filename);
  // Database Name
  const dbName = "dbFinancial";

  // Create a new MongoClient
  const client = new mongoClient(url, { useNewUrlParser: true });


  // Use connect method to connect to the Server
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to database");

    const db = client.db(dbName);
    insertDocuments(db, function () {
      console.log("Closing connection");
      client.close();
    });
  });

  const insertDocuments = (db, callback) => {
    // Get the documents collection
    const collection = db.collection("uploadeds");

    // CSV File Path
    const csvFilePath = "uploads/" + filename;

    console.log("Reading file from ", csvFilePath);
    /**
     * Read csv file and save every row of
     * data on mongodb database
     */
    csv()
      .fromFile(csvFilePath)
      .then(jsonObj => {
        console.log(jsonObj);
        collection.insert(jsonObj, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("suceess");
            res.redirect("/");
            filename = null;
            callback();
          }
        });
      })
      .catch(err => {
        //error reading file
        console.log(err);
      });
  };
});

// app.listen(3200, () => {
//   console.log("Server working at port 3200");
// });
module.exports = app;