import React, { useEffect, useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";
import { useTranslation } from "react-i18next";
const BookingForm = () => {
  let { roomid, toDate, fromDate, people } = useParams();
  const [seasonPrice, setSeasonPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState([]);

  const firstdate = moment(fromDate, "DD-MM-YYYY");
  const lastdate = moment(toDate, "DD-MM-YYYY");
  const totalNights = moment.duration(lastdate.diff(firstdate)).asDays();
  const isInitialRender = React.useRef(true);
  const totalAmount = totalNights * seasonPrice;
  const { t } = useTranslation();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = (
          await axios.post("/api/apartments/getroombyid", { roomid: roomid })
        ).data;
        console.log("from date", moment(fromDate, "DD-MM-YYYY")._i);
        isInitialRender.current = false;
        setRoom(Object.values(data));

        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const KEY = process.env.REACT_APP_PUBLISHABLE_KEY;
  const onToken = async (token) => {
    console.log(token);
    const bookingDetails = {
      room,
      token,
      fromDate,
      toDate,
      people,
      totalAmount,
      totalNights,
    };
    try {
      setLoading(true);

      const result = await axios.post("https://ruza-apartments.onrender.com/api/bookings/bookroom", bookingDetails);
      setLoading(false);
      Swal.fire(t("congragulation"), t("congragulation2"), "success").then(
        (result) => {
          window.location.href = "/";
        }
      );
    } catch (error) {
      setLoading(false);
      Swal.fire(t("error"), t("error2"), "error");
    }
  };
  useEffect(() => {
    if (!isInitialRender.current) filterByDate();
  }, [room]);
  const filterByDate = () => {
    for (const r of room[0].price) {
      if (
        moment(fromDate, "DD-MM-YYYY") >= moment(r.from, "DD-MM-YYYY") &&
        moment(toDate, "DD-MM-YYYY") <= moment(r.to, "DD-MM-YYYY")
      ) {
        setSeasonPrice(r.price);
        console.log(seasonPrice);
        console.log(fromDate);
        console.log(r.from);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: { xs: 4, sm: 5, md: 8, lg: 10, xl: 10 },
        justifyContent: "center",
      }}
    >
      {loading ? (
        <Loader />
      ) : room.length >= 1 ? (
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",

            width: "90%",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 24, sm: 25, md: 25, lg: 25, xl: 35 },
                m: 4,
              }}
            >
              
{t("roomName")}: {room[0].translations[1].lng == navigator.languages[0] ? room[0].translations[1].name : room[0].translations[0].name}
                  
            </Typography>

            <img src={room[0].imageUrls[0]} alt="apartment" className="myImg" />
          </Box>
          <Box sx={{ mt: 6 }}>
            <Typography
              sx={{ fontSize: { xs: 18, sm: 25, md: 20, lg: 25, xl: 25 } }}
            >
              {t("pricePerNight")}: {seasonPrice}€
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 18, sm: 25, md: 20, lg: 25, xl: 25 } }}
            >
              {t("totalDays")}: {totalNights}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 18, sm: 25, md: 20, lg: 25, xl: 25 } }}
            >
              {t("from")}: {fromDate}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 18, sm: 25, md: 20, lg: 25, xl: 25 } }}
            >
              {t("to")}: {toDate}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 18, sm: 25, md: 20, lg: 25, xl: 25 } }}
            >
              {t("noOfPeople")}: {people}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 25, md: 20, lg: 25, xl: 25 },
                mb: 4,
              }}
            >
              {t("totalAmount")}: {totalAmount}€
            </Typography>

            <StripeCheckout
              amount={totalAmount * 100}
              currency="EUR"
              token={onToken}
              stripeKey={KEY}
            >
              <Button
                style={{ backgroundColor: "red", color: "white", padding: 5 }}
              >
                {t("payNow")}
              </Button>
            </StripeCheckout>
          </Box>
        </Grid>
      ) : (
        <Error />
      )}
    </Box>
  );
};
export default BookingForm;
