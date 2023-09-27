const { Router } = require("express");
const router = Router();

router.get("/database", (req,res)=>{
    res.status(200).send("databases")
})

module.exports = router;