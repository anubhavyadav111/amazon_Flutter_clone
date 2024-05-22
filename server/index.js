///IMPORT FORM PACKAGES
const express = require('express'); 
const mongoose = require('mongoose'); 


//import like packesig in flutter
//IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const adminRouter = require('./routes/admin');

//INIT

const PORT = 3000;
const app     = express();//save in variable constant
const DB ="mongodb+srv://anubhavyadavdec10:o8j2eGRDWAEcMNB8@cluster0.uu11fh5.mongodb.net";


//middleware 
//CLIENT -> SERVER -> CLIENT 
app.use(express.json())
app.use(authRouter);
app.use(adminRouter);



//connections
mongoose.connect(DB).then(() => {
   console.log("Connection Successful");
}).catch((e) => {
   console.log(e)
});





 // creating a api


 app.listen(PORT, "0.0.0.0",() =>{
    console.log(`connected at port  ${PORT}`); // rember this method for
 } )
 
 
 
 
 
 //local host -> 127.0.0.1 talk to local host

 // creating an api
 // Get , put, post ,delete , update -> Crud

//  app.get('/hello-world' , (req, res)=>{
//     res.send("hello world" );  normal fomat

// app.get("/hello-world" , (req,res)=> {
//     res.json({hi:"hello world"});
// });

// app.get('/hello-world' , (req, res)=>{
//     res.json({Name: "Anubhav Yadav",
//     Student: "B.Tech-CSE",}
//     )
// })

//  }
