require('dotenv').config()
const express = require('express')

const app = express();

const port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send("<h1>" + process.env.sample_string + "</h1>");
})

app.listen(port);