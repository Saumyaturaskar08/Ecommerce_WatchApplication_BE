let mongoose=require("mongoose")
let userSchema=new mongoose.Schema({
    "_id":String,
    "name":String,
    "phono":String,
    "pwd":String,
    "role":{
        type:String,
        default:"user"
    }
})
let usermod=mongoose.model("usermod",userSchema)
module.exports=usermod