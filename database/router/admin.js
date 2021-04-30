const router= require("express").Router()
const models=require('../models/admin.js')
const controler=require('../controllers/admin')
router.post('/api/admin',models.createAdmin)
router.get('/api/admin',models.getoneAdmin)
router.get('/api/getall',models.getAll)
router.patch('/:id',controler.UpdateAdmin)
module.exports={routerAdmin:router}