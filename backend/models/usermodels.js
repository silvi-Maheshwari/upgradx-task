const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true},
    password:{type:String}
})
const usermodel=mongoose.model("userauth",userSchema)
module.exports=usermodel