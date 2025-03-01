let mongoose=require("mongoose")
let prodSchema=new mongoose.Schema({
    "_id":String,
    "name":String,
    "cat":String,
    "price":String,
    "desc":String,
    "pimg":String,
    "comm":[]
})
let pm=mongoose.model("pm",prodSchema)
module.exports=pm