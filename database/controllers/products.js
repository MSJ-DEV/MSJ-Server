const models = require('../models/products.js')
module.exports={
    UpdateProducts:(req,res)=>{
        models.updateproducts(req.body,req.params.id)
        .then((results)=>{
            res.status(201).send("updated")
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    }
}