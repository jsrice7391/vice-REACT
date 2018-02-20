const path = require("path");
const router = require("express").Router();
// Takes in all of the routes that will be established on the API side.
const apiRoutes = require("./api");


// Establish the API routes
router.use("/api", apiRoutes);

// If no route is specified within the API routes, send them to the REACT folder.
router.use(function(req,res, next){
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
})



module.exports = router;


