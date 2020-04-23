const express = require("express");
const router = express.Router();
const articleCtrl = require("../controllers/article.js");    

router.get("/", articleCtrl.getAllArticles);
router.post("/", articleCtrl.postArticles);
router.get("/:id", articleCtrl.getArticleById);
router.patch("/:id", articleCtrl.updateArticle);
router.delete("/:id", articleCtrl.deleteArticle);


module.exports = router;