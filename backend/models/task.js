const mongoose=require('mongoose')
const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "userauth" },
  });
  const Taskmodel = mongoose.model("Task", TaskSchema);
  module.exports=Taskmodel
  