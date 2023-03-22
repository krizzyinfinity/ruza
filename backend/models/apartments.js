const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const roomSchema = mongoose.Schema({
    name: {
        type:String,
        //required:true
    },
    apartmentNumber: {
        type: String,
        //required: false
    },
    description:{
        type:String,
        //required:true
    },
    maxCount: {
        type:Number,
        //required:true
    },
    
    imageUrls: [],
    currentbookings:[],
    price: [],
    
}, {
    timestamps: true,
})

const roomModel = mongoose.model("apartments", roomSchema)

module.exports = roomModel;