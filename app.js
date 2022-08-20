
 const express=require("express");
 const router=express.Router();

// const mongoose=require("mongoose")
// //const bodyParser=require("body-parser")

const app=express()
// //app.use(bodyParser.json());
// app.use(express.json());

// mongoose.connect("mongodb+srv://rubygupta7505:GDDYMfHDEGehjUj0@cluster0.xf64f.mongodb.net/interview-gupta")
// .then(()=>{console.log("mongodb is connected")})
// .catch(error=>console.log(error))

 app.listen(3000,()=>console.log("server is rounning port 8000"))

// const newSchema=new mongoose.Schema({
//     // "id":String,
//     // "name":String,
//     // "course":String,
//     // "age":Number,
//     // "gender":String,
//     // "city":String,
//     // "isDeleted":{
//     //     type:Boolean,
//     //     default:false
//     // }
    
//         "firstName" : String,
//         "lastName": String,
//         "address": {
//         "address1": String,
//         "address2": String,
//         "city": String,
//         "country": String
//         }
        
    
// })
// const userModel= mongoose.model("data",newSchema)

// app.get("/get",(req,res)=>{
//     res.send("api ban ja")
// })

// app.post("/student",async function(req,res){
//     let data1=req.body
//     const createUser= await userModel.create(data1)
//     res.send(createUser)

// })
// // app.get("/student",async function(req,res){
// //    // let data1=req.body
// //     const getUser=await userModel.find()
// //     res.send(getUser)
// // })

// app.put("/student",async function(req,res){
//     let newData=req.body
//     const{name,course,age}=newData
//     const updateUser= await userModel.findOneAndUpdate({_id:"629c532bae434b692622964c"},{$set:{course:course}},{new:true})
//     res.send(updateUser)
// })

// app.delete("/student",async function(req,res){
//     let delt=await userModel.findOneAndUpdate({name:"sonam"},{isDeleted:true})
//     res.send(delt)
// })
// app.get("/student",async function(req,res){
       
//         //const getUser=await userModel.find({"course":"cs","age":11}).count()
//        // const getUser=await userModel.find({"city" :{$ne : "agra"}})
//        //const getUser=await userModel.find({"age" :{"$gte" : 14,"$lte":23}})
//        //const getUser=await userModel.find({$and :[{"gender":"male", "age":21}]})
//        //const getUser=await userModel.find({$and :[{"gender":"male", "age":21}]})
//        const getUser=await userModel.find({"address.address1":"phase1"})

//         res.status(200).send({status:true,data1:getUser})
//     })

/////////////////////////////////////////////////////////////////////////////////////////////////

