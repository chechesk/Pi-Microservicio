const { Router } = require("express");
const store = require("../model")
const { modelValidation } = require("../Middlewares")

const router = Router();

router.get("/:model", modelValidation, async (req,res)=>{
    const { model } = req.params;
    const response = await store[model].list()
    res.status(200).json(response) 
})

router.get("/:model/:id", modelValidation, async(req,res)=>{
    const {model, id} = req.params;
    const response = await store[model].get(id)
    res.status(200).json(response)
})

router.delete("/:model/:id", modelValidation, async(req,res)=>{
    const {model, id} = req.params;
    const response = await store[model].delete(id)
    res.status(200).json(response)
})

router.post("/:model", modelValidation, async (req, res, next) => {
    const { model } = req.params;
    const data = req.body;
      const response = await store[model].create(data);
      res.status(201).json(response); 
  });

module.exports = router;