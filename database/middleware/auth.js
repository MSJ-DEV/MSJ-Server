const models = require('../models/session')
module.exports={
    CreateSession:((req,res,admin_id,session)=>{
        models.post(admin_id,session)
        .then((result)=>{
            console.log(session)
            res.cookie("carrefour",session,{
                path: '/',
                expires: new Date(new Date().getTime() + 86400 * 1000),
                httpOnly: false,
                secure: false
            }).send([session,"secsuss",admin_id])
        })
        .catch((err)=>{
           res.send(err)
        })
    }),
    VerifySession:(req,res,next)=>{
        if(req.cookies.carrefour){
            models.Get(req.cookies.carrefour)
            .then((result)=>{
                if(result.length>0&&(result[0].date>Date.now())){
                    var adminInfo={
                        admin_id:result[0].admin_id,
                        username:result[0].username,
                        email:result[0].email
                    }
                    res.status(200).send(adminInfo)
                }else{
                    res.status(200).send('seesion login fail')
                }
            })
            .catch((err)=>{
                res.status(500).send(err)
            })
        }else{
            res.status(200).session('session login fail')
        }
    }
}