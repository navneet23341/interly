const express = require("express")
const router= express.Router()

const {senddata} = require("../controllers/callai");

router.post("/",senddata)

module.exports = router;