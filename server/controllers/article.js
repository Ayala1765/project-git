 
 const Article=require("../models/Article")
 const addArticle=async (req,res)=>{
    const{articlbody}=req.body
    if(!articlbody)
        return res.status(400).json({messange:'articlbody is mast file'})

    const task= await Article.create({articlbody:articlbody})
    res.json(task)
}
const getAllArticle=async (req,res)=>{
const tasks=await Article.find().lean()
if(!tasks?.length)
    return res.status(400).json({messange:'no Article fount'})
res.json(tasks)
}
const getArticleById=async (req,res)=>{
    const {id} = req.params
    const article = await Article.findById(id).lean()

    if(!article)
        return res.status(400).json({messange:'no article fount'})
    res.json(article)  
}
const updateArticle=async (req,res)=>{
    const{id,title,articlbody,auter,active,category}=req.body
    
      if(!articlbody)
        return res.status(400).json({messange:'articlbody is mast file'})
      const article = await Article.findById(id).exec()
      if(!article)
        return res.status(400).json({messange:'no article fount'})

   article.articlbody=articlbody
   article.title=title
   article.auter=auter
   article.active=active
   article.category=category
   const updatedArticle = await article.save()
   res.json(`'${updatedArticle.title}}' updated`)

}
const updateArticleActive=async (req,res)=>{
    const{id}=req.body
      const article = await Article.findById(id).exec()
      if(!article)
        return res.status(400).json({messange:'no article fount'})

      article.active=!article.active
   const updatedArticle = await article.save()
   res.json(`${updatedArticle.title} updated`)

}
const deleteArticle=async(req,res)=>{
    const{id}=req.body
    const article =await Article.findById(id).exec()
    if(!article)
        return res.status(400).json({messange:'no article fount'})
    const del=await article.deleteOne()
    res.json(`${del.title} delated`)
}
module.exports={addArticle,getAllArticle,getArticleById,updateArticle,updateArticleActive,deleteArticle}