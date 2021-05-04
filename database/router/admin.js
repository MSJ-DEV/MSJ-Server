const router= require("express").Router()
const models=require('../models/admin.js')
router.post('/',models.createAdmin)
router.get('/',models.getAdmin)
module.exports={routerAdmin:router}