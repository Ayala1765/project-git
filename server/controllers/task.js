 
 const Task=require("../models/Task")
 const addTask=async (req,res)=>{
    const{name}=req.body
    if(!name)
        return res.status(400).json({messange:'name is mast file'})

    const task= await Task.create({name:name})
    res.json(task)
}
const getAllTasks=async (req,res)=>{
const tasks=await Task.find().lean()
if(!tasks?.length)
    return res.status(400).json({messange:'no tasks fount'})
res.json(tasks)
}

const getTaskById=async (req,res)=>{
    const {id} = req.params
    const task = await Task.findById(id).lean()
    if(!task)
        return res.status(400).json({messange:'no task fount'})
    res.json(task)
}
const updateTask=async (req,res)=>{
    const{id,name,complate}=req.body
    
      if(!name)
        return res.status(400).json({messange:'name is mast file'})
      const task = await Task.findById(id).exec()
      if(!task)
        return res.status(400).json({messange:'no task fount'})
   
   task.name=name
   task.complate=complate
   const updatedTask = await task.save()
   res.json(`'${updatedTask.name} ${updatedTask.complate}' updated`)

}
const updateTaskComplete=async (req,res)=>{
    const{id}=req.body
      const task = await Task.findById(id).exec()
      if(!task)
        return res.status(400).json({messange:'no task fount'})

   task.complate=!task.complate
   const updatedTask = await task.save()
   res.json(`${updatedTask.name} ${updatedTask.complate} updated`)

}
const deleteTask=async(req,res)=>{
    const{id}=req.body
    const task =await Task.findById(id).exec()
    if(!task)
        return res.status(400).json({messange:'no task fount'})
    const del=await task.deleteOne()
    res.json(`${del.name} delated`)
}
module.exports={addTask,getAllTasks,getTaskById,updateTask,updateTaskComplete,deleteTask}