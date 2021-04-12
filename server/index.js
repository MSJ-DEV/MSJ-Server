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


app.get('/users', function(req, res) {
  // TODO - your code here!
  db.getAll((err, result)=> {
    if (err) {throw err}
    return res.status(200).json(result)
  })

});

module.exports = app