import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { DatePicker, Space } from "antd";
import "antd/dist/reset.css";
import moment from "moment";
import ModalComponent from "../components/Modal";
import ModalComponent2 from "../components/Modal2";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

import { useTranslation } from "react-i18next";

const Accommodation = () => {
  const { RangePicker } = DatePicker;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [single, setSingle] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const handleOpen = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [rooms, setRooms] = useState([]);
  const [duplicateRooms, setDuplicateRooms] = useState([]);
  const theme = useTheme();

  const [people, setPeople] = useState();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://ruza-apartments.onrender.com/api/apartments/getallapartments");
        setRooms(response.data.rooms);
        setDuplicateRooms(response.data.rooms);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // const getNavigatorLanguage = () => {
  //   if (navigator.languages && navigator.languages.length) {
  //     console.log(navigator.languages[0])
  //     return navigator.languages[0];

  //   } else {
  //     return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
  //   }
  // }

  if (people > 3 && people <= 6) {
    alert(t("acc1"));
  }
  if (people > 6 && people <= 8) {
    alert(t("acc3"));
  }
  if (people > 8 && people <= 15) {
    alert(t("acc5"));
  }
  const today = new Date().toISOString().slice(0, -14);

  const filterByDate = (dates) => {
    const from = moment(dates[0].$d).format("DD-MM-YYYY");
    const to = moment(dates[1].$d).format("DD-MM-YYYY");

    setFromDate(from);
    setToDate(to);
    var tempRooms = [];
    var availability = false;
    if (from < today || to < today) {
      alert(t("past"));
      window.location.reload(true);
    }

    for (const room of duplicateRooms) {
      if (room.currentbookings.length > 0) {
        for (const booking of room.currentbookings) {
          if (
            !moment(moment(dates[0].$d).format("DD-MM-YYYY")).isBetween(
              booking.fromDate,
              booking.toDate
            ) &&
            !moment(moment(dates[1].$d).format("DD-MM-YYYY")).isBetween(
              booking.fromDate,
              booking.toDate
            )
          ) {
            if (
              moment(dates[0].$d).format("DD-MM-YYYY") !== booking.fromDate &&
              moment(dates[0].$d).format("DD-MM-YYYY") !== booking.toDate &&
              moment(dates[1].$d).format("DD-MM-YYYY") !== booking.fromDate &&
              moment(dates[1].$d).format("DD-MM-YYYY") !== booking.toDate
            ) {
              availability = true;
            }
          }
        }
      }
      if (availability == true || room.currentbookings.length === 0) {
        tempRooms.push(room);
      }

      setRooms(tempRooms);
    }
   
  };

  return (
    <Box sx={{ marginTop: 10 }}>
      {console.log("today", today)}
      {!isOpen && (
        <Button
          style={{ backgroundColor: "olive", color: "black", padding: 5 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {t("availability")}
        </Button>
      )}
      {isOpen && (
        <Grid
          container
          sx={{
            backgroundColor: "olive",
            height: 150,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Space direction="vertical" size={12}>
            <RangePicker
              style={{ fontSize: "160%", marginRight: 20 }}
              format="DD-MM-YYYY"
              onChange={filterByDate}
            />
          </Space>
          <TextField
            InputLabelProps={{
              sx: {
                color: "white",
              },
            }}
            type="number"
            onChange={(e) => setPeople(e.target.value)}
            value={people}
            id="outlined-basic"
            label={t("mandatory")}
            variant="outlined"
          />
        </Grid>
      )}
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 40, sm: 45, md: 50, lg: 70, xl: 70 } }}
          >
            {t("accommodation")}
          </Typography>
          {rooms.map((room) => {
            return (
              <>
                {isMobile ? (
                  <Paper
                    key={room.id}
                    elevation={6}
                    sx={{
                      display: "flex",
                      width: "100vw",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: 900,
                      padding: 5,
                      marginTop: 3,
                      marginBottom: 10,
                    }}
                  >
                    <Box sx={{ marginBottom: 4 }}>
                      <img
                        src={room.imageUrls[0]}
                        style={{ height: 200, width: "100vw" }}
                      />
                    </Box>

                    <Typography variant="h7">
                      <span style={{ fontWeight: "bold" }}>{t("desc")}:</span>
                    </Typography>

                    <Typography variant="h7" sx={{ marginBottom: 2 }}>
                      {room.translations[1].lng == navigator.languages[0]
                        ? room.translations[1].description
                        : room.translations[0].description}
                    </Typography>

                    <Typography variant="h7" sx={{ marginBottom: 2 }}>
                      <span style={{ fontWeight: "bold" }}>
                        {t("noOfPeople")}:
                      </span>{" "}
                      {room.maxCount}
                    </Typography>

                    <Typography variant="h7" sx={{ marginBottom: 2 }}>
                      <span style={{ fontWeight: "bold" }}>
                        {t("basePrice")}:
                      </span>{" "}
                      {room.price[0].price}€
                    </Typography>
                    <Button
                      onClick={() => {
                        setOpen(true);
                        setSingle(room.imageUrls);
                      }}
                      style={{
                        backgroundColor: "red",
                        padding: 7,
                        color: "white",
                      }}
                    >
                      {t("morePictures")}
                    </Button>
                    <ModalComponent2
                      rooms={single}
                      handleOpen={handleOpen}
                      handleClose={handleClose}
                      open={open}
                    />
                    {fromDate && toDate && people && (
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/book/${room._id}/${fromDate}/${toDate}/${people} `}
                      >
                        <Button
                          style={{
                            backgroundColor: "black",
                            padding: 7,
                            marginTop: 6,
                            color: "white",
                          }}
                        >
                          {t("book")}
                        </Button>
                      </Link>
                    )}
                  </Paper>
                ) : (
                  <Paper
                    key={room.id}
                    elevation={6}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "left",
                      justifyContent: "space-between",
                      minHeight: 430,
                      margin: 10,
                    }}
                  >
                    <Box>
                      <img
                        src={room.imageUrls[0]}
                        style={{ height: 400, width: 500 }}
                      />
                    </Box>

                    <Box
                      sx={{
                        alignItems: "flex-start",
                        display: "flex",
                        flexDirection: "column",
                        padding: 5,
                      }}
                    >
                      <Typography variant="h5">
                        <span style={{ fontWeight: "bold" }}>{t("desc")}:</span>
                      </Typography>
                      <Typography variant="h5" sx={{ marginBottom: 5 }}>
                        {room.translations[1].lng == navigator.languages[0]
                          ? room.translations[1].description
                          : room.translations[0].description}
                      </Typography>

                      <Typography variant="h5" sx={{ marginBottom: 5 }}>
                        <span style={{ fontWeight: "bold" }}>
                          {t("noOfPeople")}:
                        </span>{" "}
                        {room.maxCount}
                      </Typography>

                      <Typography variant="h5">
                        <span style={{ fontWeight: "bold" }}>
                          {t("basePrice")}:
                        </span>{" "}
                        {room.price[0].price}€
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: 50,
                        }}
                      >
                        <Button
                          onClick={() => {
                            setOpen(true);
                            setSingle(room.imageUrls);
                          }}
                          style={{
                            backgroundColor: "red",
                            padding: 7,
                            color: "white",
                          }}
                        >
                          {t("morePictures")}
                        </Button>
                        <ModalComponent
                          rooms={single}
                          handleOpen={handleOpen}
                          handleClose={handleClose}
                          open={open}
                        />
                        {fromDate && toDate && people && (
                          <Link
                            style={{ textDecoration: "none" }}
                            to={`/book/${room._id}/${fromDate}/${toDate}/${people} `}
                          >
                            <Button
                              style={{
                                backgroundColor: "black",
                                padding: 7,
                                color: "white",
                                marginLeft: 40,
                              }}
                            >
                              {t("book")}
                            </Button>
                          </Link>
                        )}
                      </Box>
                    </Box>
                  </Paper>
                )}
              </>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Accommodation;
