// const express=require('express')
// const app=express();
// const mongoose=require('mongoose')
// const bodyParser = require("body-parser")


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}));


// mongoose.connect("mongodb+srv://rubygupta7505:GDDYMfHDEGehjUj0@cluster0.xf64f.mongodb.net/Interview",{useNewUrlParser:true})
// .then(()=>console.log(`MongoDB connection successful.`))
// .catch((err)=> console.log(err))

// const userSchema=new mongoose.Schema({
//     firstName:{ type:String,required:true},
//     lastName:{type:String,required:true},
//     age:{type:Number}
// }, {timestamps:true})

//  const userModel=mongoose.model('data',userSchema)

//  const createUser=async function(req,res){
//      try{
//          let data=req.body;
//          let userData=await userModel.create(data)
//          res.status(201).send({status:true,userData})
//      }
//        catch(error){
//            res.status(500).send({status:false,message:error.message})
//        }
//  }
// app.post("/register",createUser)
// app.listen(3000)

// app.listen(3000,()=>{
//     console.log("express is running")
// })

///////////////////////////////////////////////

//const mongoose=require('mongoose')
//const bodyParser=require("body-parser");

//app.use(bodyParser.json());


// const studentSchema=new mongoose.Schema({
//     studentName:{type:String, require:true,trim:true},
//     course:{type:String,require:true}
// },{timestamps:true})

// const studentModel=mongoose.model('student',studentSchema)

// const createStu= async function(req,res){
//     try{
//         let data=req.body
//     const studentData=await studentModel.create(data)
//     res.status(200).send({status:true,studentData})
//     }
// catch(error){
//     res.status(500).send({status:false,message:error.message})
// }
// }

// const getUser=async()=>{
//     const result=await studentModel.find()
//     console.log(result)
//     res.send(result)
// }

// getUser()

// const updateUser=async()=>{
//     let id=req.params
//     let data = req.body
//     const resu=await studentModel.findByIdAndUpdate({_id:id},{cousre:data.cousre})
//     console.log(updateUser)
// res.send(resu)
// }


// app.get("/getStudent",getUser)
// app.post('/student',createStu)
// app.put('/update', updateUser)

// mongoose.connect("mongodb+srv://rubygupta7505:GDDYMfHDEGehjUj0@cluster0.xf64f.mongodb.net/Interview",{useNewUrlParser:true})
// .then(()=>console.log("mongodb succesful connect"))
// .catch((error)=>console.log(error))

const express=require("express")
const app=express();

app.listen(3000,()=>{
    console.log("connect hoja")
})

app.get('/get', function(req,res){
    res.send("yeeeeeeeeeeeee")
})