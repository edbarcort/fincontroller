var http = require("http");
var fs = require("fs");
const mongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
 csv = require('csvtojson')
//var cors = require('cors');

var PORT = 3000;
var filename = null;

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//     cb(null, filename);
//   }
// })

var server = http.createServer(handleRequest);
//server.use(cors());

function handleRequest(req, res) {
  var path = req.url;

  switch (path) {
    case "/upload":
      console.log("Upload route successfuly")
      return renderUpload(req, res);
    default:
      return renderWelcomePage(req, res);
  }
}

function renderWelcomePage(req, res) {
  fs.readFile(__dirname + "/index.html", function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
    }
    else {
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

function renderUpload(req, res) {
  // Saving the request posted data as a variable.
  var requestData = "";

  var myHTML =
    "<html><head><title>Hello Noder!</title></head><body><h1>Oops, I didn't get any data</h1></body></html>";

  // When the server receives data, it will add it to requestData.
  req.on("data", function (data) {
    requestData += data;
    console.log(data);
    console.log("You just posted some data to the server:\n", requestData);

    // Mongodb Connection URL 

    const url = "mongodb://localhost";
    //console.log("Multer", req.file.filename);
    // Database Name
    const dbName = "dbFinancial";

    // Create a new MongoClient
    const client = new mongoClient(url, { useNewUrlParser: true });

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
      const collection = db.collection("uploaded");

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


    myHTML =
      "<html><head><title>Hello Noder!</title></head><body>" +
      "<h1>Thank you for the data: </h1><code>" +
      requestData +
      "</code>" +
      "</body></html>";
  });

  // When the request has ended...
  req.on("end", function () {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
  });
}

// Starts our server.
server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
