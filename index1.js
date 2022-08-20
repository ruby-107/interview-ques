
// // const exprees=require('express')
// // const app=exprees();
// // app.use(exprees.json())

// // app.listen(8000,()=>{console.log("server is connected")})

// // app.get('/',(req,res)=>{
    
// //     const { a,b} =req.body
// //     console.log(a)
// //     let addition=a+b
// //     let subtraction=a-b
// //     let multi=a*b;
// //     let divide=a/b;
// //     res.json({addition,subtraction,multi,divide})

// // })

/////////////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const app = express();
// const port = 3000;

// app.use(express.json());

// // lets imaginary database of user
// const users = [
//   {
//     id: 1,
//     name: "suresh",
//     email: "xyz@gmail.com",
//     password: "123434",
//   },
//   {
//     id: 2,
//     name: "ramesh",
//     email: "abc@gmail.com",
//     password: "9880709",
//   },
// ];

// //  api`s

// //Get api --- to fetch users data inmemory data in code for example
// app.get("/usersdata", (req, res) => {
//   return res.status(200).json({ msg: "ok", data: users });
// });

// //Post api  --- to login a user by generating token
// app.post("/login", (req, res) => {
//   if (Object.keys(req.body).length === 0)
//     return res
//       .status(400)
//       .json({ msg: "bad auth", msg: "please provide the email and password" });

//   const { email, password } = req.body;

//   let ans = users.filter((obj) => {
//     return obj.email == email && obj.password === password;
//   });
//   if (ans.length == 0)
//     return res
//       .status(400)
//       .json({ msg: "bad auth", msg: "incorrect credentials" });

//   const SECRET_KEY = "dp22";
//   const payload = {
//     userId: ans[0].id,
//   };
//   const token = jwt.sign(payload, SECRET_KEY);

//   return res.status(200).json({ msg: "ok", data: token });
// });

// //Get api -- here only the user with his token can get his data and auhtorization implemented
// app.get("/userdata/:id", authMid, (req, res) => {
//   let val = req.userId;
//   if (val != req.params.id)
//     return res.status(400).json({ msg: "unauahtiorized user" });
//   else {
//     let ans = users.filter((obj) => obj.id == req.params.id);
//     return res.status(200).json({ mshg: "ok", data: ans });
//   }
// });

// //middlewware for authentication
// function authMid(req, res, next) {
//   const authHeader = req.header("Authorization", "Bearer Token");

//   if (!authHeader)
//     return res.status(400).json({ msg: "auth header is missing" });

//   let token = authHeader.split(" ")[1];
//   const SECRET_KEY = "dp22";

//   const verfiy = jwt.verify(token, SECRET_KEY);
//   req.userId = verfiy.userId;

//   if (!verfiy)
//     return res.status(400).json({ msg: "invalid token is entered by you" });

//   return next();
// }

// app.listen(port, () => console.log(`running on port ${port}`));