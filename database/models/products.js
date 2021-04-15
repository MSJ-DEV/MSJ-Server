const {connection}=require('../index.js');
module.exports={
    createProduct: (req,res)=>{   
        const query=`INSERT INTO products(name,information,category,oldprice,newprice,type,quantity,image,status,promotion) VALUES('${req.body.name}','${req.body.information}','${req.body.category}','${req.body.oldprice}','${req.body.newprice}','${req.body.type}','${req.body.quantity}','${req.body.image}','${req.body.status}','${req.body.promotion}')`
        connection.query(query,(err,results)=>{
            err ? res.status(500).send(err) : res.status(201).send(results)
        })
   
    },
    getallproducts:(req,res)=>{
        const query="SELECT * FROM products"
        connection.query(query,(err,results)=>{
            err ? res.status(500).send(err):res.status(200).send(results)
        })
    },
    updateproducts:(req,res)=>{

    }
}   