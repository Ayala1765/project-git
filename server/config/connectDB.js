const mongoose=require('mongoose')
const cnnct =async ()=>{
    try {
        await mongoose.connect(process.env.ROUT)
    } catch(err){
console.error("error"+err)
        }
    }
module.exports=cnnct