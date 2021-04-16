const express = require('express');
const app = express();
var cors = require('cors')
const db = require('../database/index.js')
const {router} =require('../database/router/products.js')
app.use(cors())
app.set('port',3333)
app.use(express.json());

app.use('/api/poducts',router)
module.exports = app