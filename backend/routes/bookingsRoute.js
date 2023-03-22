const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();

const router = express.Router();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const moment = require("moment");
const Booking = require("../models/booking");
const stripe = require("stripe")(process.env.SECRET_KEY);
const { v4: uuidv4 } = require("uuid");
const Room = require("../models/apartments");
router.post("/bookroom", async (req, res) => {
  const { room, fromDate, toDate, totalAmount, totalNights, token, people } =
    req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
   
    const payment = await stripe.charges.create(
      {
        amount: totalAmount * 100,
        customer: customer.id,
        currency: "eur",
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const newBooking = new Booking({
        room: room.apartmentNumber,
        roomid: room._id,
        // fromDate: moment(fromDate, "DD/MM/YYYY"),
        // toDate: moment(toDate, "DD/MM/YYYY"),
         
      fromDate: moment(fromDate).format("DD-MM-YYYY"),
      toDate: moment(toDate).format("DD-MM-YYYY"),
        people,
        totalAmount,
        totalNights,
        transactionId: "1234",
      });
      const booking = await newBooking.save();
      const roomBooked = await Room.findOneAndUpdate({ _id: room._id });
      roomBooked.currentbookings.push({
        bookingid: booking._id,
        // fromDate: moment(fromDate, "DD/MM/YYYY")._i,
        // toDate: moment(toDate, "DD/MM/YYYY")._i,
         
      fromDate: moment(fromDate).format("DD-MM-YYYY"),
      toDate: moment(toDate).format("DD-MM-YYYY"),
        transactionid: booking.transactionId,

        status: "booked",
      });
      await roomBooked.save();
    }
    res.send({message: req.t("payment_successful")});
  } catch (error) {
    return     res.send(res.t("payment_unsuccessful"));
    //res.status(400).json({ error });

  }

});
router.get("/getallbookings", async(req, res) => {
  try {
   const bookings = await Booking.find({})
   return res.json({bookings});
  } catch (error) {
   return res.status(400).json({message: error})
  }
});


router.post("/admin/bookroom", async (req, res) => {
  const { name, from, to, totalAmount, totalNights, people, id } =
    req.body;

    


  try {
   const newBooking = new Booking({
        room: name,
        roomid: id,
      
        fromDate: moment(from).format("DD-MM-YYYY"),
        toDate: moment(to).format("DD-MM-YYYY"),
        people,
        totalAmount,
        totalNights,
        
      });
      const booking = await newBooking.save();
      const roomBooked = await Room.findOneAndUpdate({ _id: id });
      roomBooked.currentbookings.push({
        bookingid: booking._id,
        
      fromDate: moment(from).format("DD-MM-YYYY"),
      toDate: moment(to).format("DD-MM-YYYY"),
        transactionid: "null",

        status: "booked",
      });
      await roomBooked.save();
   
    res.send({message: "Booking saved"});
  } catch (error) {
    return   res.status(400).json({ error });

  }

});

module.exports = router;
