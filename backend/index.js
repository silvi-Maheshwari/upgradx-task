const { default: mongoose } = require("mongoose");
const express=require('express');
const userRouter = require("./routes/userroutes");
const CategoryRouter = require("./routes/category");
const taskRouter = require("./routes/task");
const dotenv = require("dotenv");
require("dotenv").config();
const app=express()
app.use(express.json())
const url=process.env.MONGO_URL
console.log(url)
const Port=process.env.Port
console.log(Port)
app.use('/user',userRouter)
app.use('/',CategoryRouter)
app.use('/',taskRouter)
const connectdb=async()=>{
    try{
   await mongoose.connect(url)
    console.log('mongoose is connected')
    }catch{
        console.log('error')
    }
}
app.listen(Port,()=>{
    connectdb()
    console.log('server is connected')
})