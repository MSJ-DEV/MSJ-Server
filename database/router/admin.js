const router= require("express").Router()
const models=require('../models/admin.js')
const controler=require('../controllers/admin')
router.post('/api/admin',models.createAdmin)
router.get('/api/admin/:id',models.getoneAdmin)
router.post('/',models.VerifyAdmin)

router.get('/api/getall',models.getAll)
router.patch('/api/getall/:id',controler.UpdateAdmin)
module.exports={routerAdmin:router}