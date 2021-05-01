const { connection } = require('../index.js');
const crypto = require('crypto');


module.exports = {
   createAdmin:((req,res)=>{
       var passwordHashed=crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
      var repeatepasswordHshed=crypto.createHash('sha256').update(req.body.repeatepassword, 'utf8').digest('hex')
       const query=`INSERT INTO admin(Firstname,Lastname,username,email,Address,numberPhone,password,repeatepassword,image,country,State,Zip) VALUES("${req.body.Firstname}","${req.body.Lastname}","${req.body.username}","${req.body.email}","${req.body.Address}","${req.body.numberPhone}","${passwordHashed}","${repeatepasswordHshed}","${req.body.image}","${req.body.country}","${req.body.State}","${req.body.Zip}")`
      console.log(req.body)
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
   getoneAdmin :((req,res,id)=>{
         const query=`SELECT * from admin where id=${req.params.id}`
    connection.query(query,(err,results)=>{
   err ? res.status(200).send(err) : res.status(200).send(results[0])
    
      })
  }),
  getAll:((req,res)=>{
    const query=`SELECT * FROM admin`
    connection.query(query,(err,result)=>{
      err ? res.status(500).send(err):res.status(200).send(result)
    })
  }),
  UpdateAdmin : (admin , id) => {
    var passwordHashed = crypto.createHash('sha256').update(admin.password, 'utf8').digest('hex')
       return new Promise((resolve,reject) => {
         connection.query(`UPDATE admin SET Firstname=?, Lastname=?, email=?, Address=?, numberPhone=?,  password=?,repeatepassword="${passwordHashed}", image=?, country=?, Zip=? WHERE id=?`,
       [admin.Firstname,admin.Lastname, admin.email,admin.Address,admin.numberPhone,passwordHashed,admin.image,admin.country,admin.Zip,id],(err,results)=>{
           err ? reject(err) : resolve(results)
         })
       })
  },
  VerifyAdmin :((req,res)=>{
    console.log(req.body)
    var passwordHashed = crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
    console.log(passwordHashed)
    const query=`SELECT * from admin where email="${req.body.email}"`
    connection.query(query,(err,results)=>{
      if(err){
      
      }else if(results.length>0){
        for(var i=0;i<results.length;i++){
          if(results[i].password===passwordHashed)
          res.status(200).send("sucsee")
        }
        }else{
          res.status(500).send('wrong password or email')
          
        }
    })
  })

}