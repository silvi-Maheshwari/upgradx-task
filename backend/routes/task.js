const express = require('express');
const authmiddleware = require('../middleware/auth');
const Taskmodel = require('../models/task');
const taskRouter = express.Router();
taskRouter.post("/tasks", authmiddleware, async (req, res) => {
    const task = new Taskmodel({ ...req.body, user: req.userid });
    await task.save();
    res.json(task);
  });
  taskRouter.get("/tasks", authmiddleware, async (req, res) => {
    const tasks = await Taskmodel.find({ user: req.userid }).populate("category");
    res.json(tasks);
  });
  taskRouter.get("/tasks", authmiddleware, async (req, res) => {
    const { category_id } = req.query;
    const tasks = await Taskmodel.find({ category: category_id, user: req.userid });
    res.json(tasks);
  });
  taskRouter.get("/tasks/:id", authmiddleware, async (req, res) => {
    const task = await Taskmodel.findById(req.params.id);
    if (!task) return res.status(404).send("Task Not Found");
    res.json(task);
  });
  taskRouter.put("/tasks/:id", authmiddleware, async (req, res) => {
    const task = await Taskmodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  });
  taskRouter.delete("/tasks/:id", authmiddleware, async (req, res) => {
    await Taskmodel.findByIdAndDelete(req.params.id);
    res.send("Task Deleted");
  });

  module.exports=taskRouter