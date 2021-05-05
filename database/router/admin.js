const router= require("express").Router()
const models=require('../models/admin.js')
router.post('/',models.createAdmin)
// router.get('/',models.getoneAdmin)
router.get('/api/getall',models.getAll)
module.exports={routerAdmin:router}