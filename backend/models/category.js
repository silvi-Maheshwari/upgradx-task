const mongoose=require('mongoose')
const CategorySchema = new mongoose.Schema({
    categoryname: String,
  });
  const Categorymodel = mongoose.model("Category", CategorySchema);
  module.exports=Categorymodel

  