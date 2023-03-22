const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
var mongoURL = process.env.MONGO;

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser : true})

var connection = mongoose.connection;



connection.on("error", ()=> {
    console.log("connection failed")
})
connection.on("connected", ()=> {
    console.log("sucessfull")
})
module.exports = mongoose