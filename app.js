const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
 app.use(express.json()); 
// import routes 
const postRoute= require('./routes/ports'); 

app.use('/posts',postRoute); 

 //Routes // listening 

mongoose.connect("mongodb://localhost:27017/test",() =>{ console.log("Connected to DB"); });

 app.listen(3000);  