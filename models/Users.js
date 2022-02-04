const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
            type:String,
            required:true,
        },
        Email:{
            type:String,
            required:true,
        },
        Password:{
            type: String,
            required:true,
        },

    }
);

const userModel = mongoose.model("user",userSchema) //user is the name of the collection we made in our collections in the Cluster in Mogo Atlas
module.exports = userModel;

