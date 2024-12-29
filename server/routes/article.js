const express=require("express")
const router=express.Router()
const article =require("../controllers/article")
router.post("/",article.addArticle)
router.get("/",article.getAllArticle)
router.get("/:id",article.getArticleById)
router.put("/",article.updateArticle)
router.put("/Complete",article.updateArticleActive)
router.delete("/",article.deleteArticle)
module.exports=router