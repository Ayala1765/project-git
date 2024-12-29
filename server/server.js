require("dotenv").config()
const express =require("express")
const cors=require("cors")
const app=express()
const corsOptions=require("./config/corsOptions")
const PORT=process.env.PORT||1135
const cnnct=require("./config/connectDB")
const { default: mongoose } = require("mongoose")
cnnct()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.get("/",(req,res)=>{res.send("homepage")})
app.use("/task", require("./routes/task"))
app.use("/article", require("./routes/article"))




mongoose.connection.once('open',()=>{app.listen(PORT,()=>{console.log(`the port is${PORT}`)})})
mongoose.connection.on('error',err=>{})