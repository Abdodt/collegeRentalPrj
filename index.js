const express = require('express');
const app = express()
const mongoose = require('mongoose') //THis is the dependency for connecting and using Mongodb
const userModel = require('./models/Users')

mongoose.connect("mongodb+srv://nezar:Aezakmi1@cluster0.9ebqm.mongodb.net/Users?retryWrites=true&w=majority");
//with the link from MongoDB Atlas we are now making connection with the mangoose dependency here

app.get("/getUser", (req,res)=> {
    userModel.find({ },(err,result)=>{
        if(err){
            res.json("There is an error");
        }
        else{
            res.json(result);
        }
    });
});
//{} here is used to return **ALL** the datasets from the model
app.listen(8080,()=>{
    console.log("Server listening from Port:8080");
})

