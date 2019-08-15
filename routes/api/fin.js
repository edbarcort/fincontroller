const router = require("express").Router();
const finController = require("../../controllers/dataController.js");
// Matches with "/api/books"
router
    .route("/")
    .get(finController.findAll);
    
// Matches with "/api/books/:id"
router
    .route("/:sbu/:region/:period")
    .get(finController.findOne);

module.exports = router;