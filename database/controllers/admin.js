
const models = require('../models/admin.js');

module.exports={
    UpdateAdmin:((req,res)=>{
          models.UpdateAdmin(req.body,req.params.id)
          .then((results)=>{
              res.status(201).send("updated")
          })
          .catch((err)=>{
              res.status(500).send(err)
          })
    })
}