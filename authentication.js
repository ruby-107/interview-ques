
const express =require('express')
const jwt= require('jsonwebtoken')


 const app= express()

 app.listen(8000,()=>{
    console.log("server is connected")
})

// app.get('/about',(req,res)=>{
//     res.send("my first api")
// })

// app.post('/post',verifyToken,(req,res)=>{
//     res.send("api created...")
// })



app.post('/api/login',(req,res)=>{
    const user={
        id:1,
        userName:"ruby",
        email:"ruby@gmail.com"
    }
    jwt.sign({user}, 'secreat-key',(err,token)=>{
        res.json({token})
    }); 
});

function verifyToken(req,res,next){
    let token = req.headers['x-api-key']
    if (!token) {
        return res.status(401).send({ status: false, msg: "no authentication token" })
    } 
    let decodeToken = jwt.verify(token,'secreat-key')
    if(!decodeToken){
        return res.send({msg : "token is not vaild"})
    }
    next()
}

app.post('/sum',verifyToken,(req,res)=>{
    let sum=10+10;
    res.send({sum : sum})
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const createToken = async()=>{
    const token =await jwt.sign({_id : "62371c1161586794399dfbae"},"mysecreatekey56576877")
    console.log(token)

    const verToken = await jwt.verify(token,"mysecreatekey56576877" )
    console.log(verToken)
}
createToken();

///////////////////////////////////////////////////////////////

