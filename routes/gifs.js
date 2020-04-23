const express = require("express");
const router = express.Router();
const gifCtrl = require("../controllers/gif.js");


router.get("/", gifCtrl.getAllGifs);
router.post("/", gifCtrl.postGifs);
router.get("/:id", gifCtrl.getGifById);
router.delete("/:id", gifCtrl.deleteGif);


module.exports = router;
