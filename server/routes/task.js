const express=require("express")
const router=express.Router()
const task=require("../controllers/task")
router.post("/",task.addTask)
router.get("/",task.getAllTasks)
router.get("/:id",task.getTaskById)
router.put("/",task.updateTask)
router.put("/Complete",task.updateTaskComplete)
router.delete("/",task.deleteTask)

module.exports=router