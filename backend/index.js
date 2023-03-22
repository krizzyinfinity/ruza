const express = require("express");
const app = express();
const dotenv = require("dotenv");
require("dotenv").config();
const adminRoute = require("./routes/userRoute");
const roomsRoute = require("./routes/roomsRoute");
const bookingsRoute = require("./routes/bookingsRoute");
const dbConfig = require("./mongo")
const {I18n} = require("i18n")
const path = require("path");
const roomModel = require("./models/apartments");
// var i18next = require('i18next');
// var Backend = require('i18next-fs-backend');
// var middleware = require("i18next-http-middleware");

const i18n = new I18n({
 locales:['en', 'hr'],
 directory: path.join(__dirname,'translation'),
 defaultLocale: 'en'
})
  

app.use(express.json())
app.use(i18n.init);
// app.get("/api/apartments/getallapartments", async (req, res) => {
//     //res.send({ name: res.__("name"), description: res.__("description")})
//     const rooms = await roomModel.find({})
//     return res.json({rooms});
// })

//app.use(middleware.handle(i18next));


app.use("/api/users", adminRoute)
app.use("/api/apartments", roomsRoute)
app.use("/api/bookings", bookingsRoute)





const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log( `Server is running on port ${port} `));