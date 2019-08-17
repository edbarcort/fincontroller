const router = require("express").Router();
const finController = require("../../controllers/dataController.js");
// Matches with "/api/data"
router
    .route("/")
    .get(finController.findAll);
 // Matches with "/api/data/:id"
 router
 .route("/:id")
 .post(finController.update);   
// Matches with "/api/data/:sbu/:region/:period"
router
    .route("/:sbu/:region/:period")
    .get(finController.findOne);

module.exports = router;