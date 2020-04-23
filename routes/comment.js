const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment.js');


router.post("/:id/comment", commentCtrl.postComment);
router.get("/:id/comment", commentCtrl.getAllComments);
router.delete("/:id/comment/:id", commentCtrl.deleteComment);


module.exports = router;