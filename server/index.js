const express = require('express');
const app = express();
const PORT = 3001;
const mongoose = require('mongoose');
const userRoute=require('./routes/auth')
const cors = require('cors')
const dotenv = require("dotenv");
dotenv.config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user',userRoute)


// 'mongodb+srv://umairawan:imumair123@learner.h8nyweu.mongodb.net/?retryWrites=true&w=majority&appName=Learner'
const db=process.env.DB_CONNECTION_STRING
mongoose.connect(db)
   .then(() => {
      console.log('Connected to Database')
   }).catch((err) => {
      console.log(err)
   })


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);