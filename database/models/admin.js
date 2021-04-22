const { connection } = require('../index.js');
const crypto = require('crypto')
module.exports = {
   createAdmin:((req,res)=>{
       var passwordHashed=crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
       const query=`INSERT INTO admin(email,password) VALUES("${req.body.email}","${passwordHashed}")`
       connection.query(query,(err,results)=>{
         if(err){
           console.log(err)
           res.send(err)
         }else{
           console.log(results)
           res.send(results)
         }
       })
   }),
   getAdmin :((req,res)=>{
    var passwordHashed = crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
    const query=`SELECT * from admin where email="${req.body.email}"`
    connection.query(query,(err,results)=>{
      if(err){
        console.log(err)
      }else if(results.length>0 && results[0].password===passwordHashed){
          res.status(200).send('success')
        }else{
          res.status(500).send('wrong password or email')
          
        }
    })
  })

}