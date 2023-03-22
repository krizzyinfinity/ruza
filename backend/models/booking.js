const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const bookingSchema = mongoose.Schema({
    room:{
        type:String,
        //required:true
    },
    roomid:{
        type:String,
        //required:true
    },
    people:{
        type:String,
        required:false
    },
    fromDate:{
        type:String,
        //required:true
    },
    toDate:{
        type:String,
        //required:true
    },
    totalNights:{
        type:Number,
        //required:true
    },
    
    totalAmount:{
 type:Number,
 //required:true
    },
    transactionId:{
        type:String,
        //required:true
    },
    
    status:{
        type:String,
        //required:true,
        default:"booked"
    }

}, {
    timestamps:true
})

const bookingModel = mongoose.model("bookings", bookingSchema)
module.exports = bookingModel