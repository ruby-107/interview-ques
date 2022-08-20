
const express=require("express")
const router=express.Router();

const user=[
    {id:1,name:"ruby"},
    {id:2,name:"manish"},
    {id:3,name:"sachin"}
]

router.get("/user",(req,res)=>{
res.send(user)
})

router.post("/user",(req,res)=>{
    const{id,name}=req.body
    user.push({name,id})
    res.send({name,id})

})

router.put("/user",(req,res)=>{
    let {name,id}=req.body
    user=user.map(d=>{
        if(d.id===id){
            d.name=name
        }
        return d
    })
    res.send({name,id})
})
module.exports=router