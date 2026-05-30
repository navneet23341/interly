const express = require("express")
const router= express.Router()

const {senddata ,sendNext} = require("../controllers/callai");

router.post("/",senddata)
router.post("/next", sendNext)

module.exports = router;