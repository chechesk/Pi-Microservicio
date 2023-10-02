    module.exports =(req,res,next) =>{
        const {model} = req.params;
        if (["Characters","Films","Planets"].includes(model)){
            return next()
        }   else {
            throw Error("Invalidad model")
        
        }
    }