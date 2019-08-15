const router = require("express").Router();
const finRoutes = require("./fin");
// Book routes
//router.use("/books", bookRoutes);
router.use('/data', finRoutes);
module.exports = router;