//express setup
const cors= require("cors");
const express = require("express");
const dotenv = require("dotenv")

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//router import
const auth = require("./routes/login.js");
const callai = require("./routes/callai.js")

//router use here as middleware
app.use("/login" , auth);
app.use("/interview" , callai);


//server listen to
app.listen(3000 , ()=>{
    console.log("server listening on 3000...");    
});