const { Router } = require("express");
const store = require("../model")
const { modelValidation } = require("../Middlewares")
const catchedAsync = require("../util/chatchedAsyn")

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

router.post("/:model", modelValidation, catchedAsync(async (req, res) => {
      const { model } = req.params;
      const data = req.body
      const response = await store[model]?.insert(data);
      res.send(response);
    })
  );

router.put("/:model", modelValidation, catchedAsync(async (req, res) => {
    const { model } = req.params; 
    const data = req.body
    const response = await store[model]?.update(data);
    res.send(response);
  })
);

router.patch("/:model/:id", modelValidation, catchedAsync(async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].patch(id);
  res.send(response);
})
);

module.exports = router;