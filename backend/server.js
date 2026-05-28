//express setup
const cors= require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

//router import
const auth = require("./routes/login.js");


//router use here as middleware
app.use("/login" , auth);

//server listen to
app.listen(3000 , ()=>{
    console.log("server listening on 3000...");    
});