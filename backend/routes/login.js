//setting up router
const express = require("express");
const router = express.Router();

//importing the function to do job
const {isvalid} = require("../controllers/login.js")

//route set up here
router.post("/", isvalid);


//exporting the router
module.exports = router;