const router= require("express").Router()
const models=require('../models/admin.js')
const controler=require('../controllers/admin')
const middleware = require('../middleware/auth');
router.post('/api/admin',models.createAdmin)
router.post('/api/login',models.VerifyAdmin)
router.get('/api/logout',models.logout)



router.get('/api/getall',models.getAll)
router.patch('/api/getall/:id',controler.UpdateAdmin)
router.get('/api/admin/:id',models.getoneAdmin)
router.get('/api/session',middleware.VerifySession)
module.exports={routerAdmin:router}