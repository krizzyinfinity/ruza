const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const userSchema = mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    
}, {
    timestamps: true
})
const userModel = mongoose.model("users", userSchema)

module.exports = userModel;