const express = require('express');
const app = express();
var cors = require('cors')
const db = require('../database/index.js')

app.use(cors())
app.set('port',3333)
app.use(express.json());
app.get("/", (req, res)=>{
  res.send('hello world')
})




module.exports = app