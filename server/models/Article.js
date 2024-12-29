const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    articlbody: {
     type: String,
         required: true
    },
    title: {
        type: String
    },
    auter: {
        type: String,
        default:false
    }
    ,
    active: {
        type: Boolean,
        default:false
    },
    category: {
        type: String,
    }
},{
    timestamps:true
})
module.exports = mongoose.model('Article', articleSchema)
