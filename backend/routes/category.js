const express = require('express');
const authmiddleware = require('../middleware/auth');
const Categorymodel = require('../models/category');
const CategoryRouter = express.Router();

CategoryRouter.post("/categories", authmiddleware, async (req, res) => {
    const category = new Categorymodel(req.body);
    await category.save();
    res.json(category);
  });

  module.exports=CategoryRouter
  
  CategoryRouter.get("/categories", authmiddleware, async (req, res) => {
    const categories = await Categorymodel.find();
    res.json(categories);
  });