const { connection } = require('../index.js');
const crypto = require('crypto')
module.exports = {
   createAdmin:((req,res)=>{
       var passwordHashed=crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
      var repeatepasswordHshed=crypto.createHash('sha256').update(req.body.repeatepassword, 'utf8').digest('hex')
       const query=`INSERT INTO admin(username,email,password,repeatepassword,image,country) VALUES("${req.body.username}","${req.body.email}","${passwordHashed}","${repeatepasswordHshed}","${req.body.image},"${req.body.country}")`
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
  //  getoneAdmin :((req,res)=>{
  //   var passwordHashed = crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
  //   var repeatepasswordHshed=crypto.createHash('sha256').update(req.body.repeatepassword, 'utf8').digest('hex')
  //   const query=`SELECT * from admin where email="${req.body.email}"`
  //   connection.query(query,(err,results)=>{
  //     if(err){
  //       console.log(err)
  //     }else if(results.length>0 && results[0].password===passwordHashed && results[0].repeatepassword===repeatepasswordHshed && passwordHashed===repeatepasswordHshed){
  //         res.status(200).send(results)
  //       }else{
  //         res.status(500).send('wrong password or email')
          
  //       }
  //   })
  // }),
  getAll:((req,res)=>{
    const query=`SELECT * FROM admin`
    connection.query(query,(err,result)=>{
      err ? res.status(500).send(err):res.status(200).send(result)
    })
  })

}