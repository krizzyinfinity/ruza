import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ap1 from "../images/ap1.jpg";
import ap2 from "../images/ap2.jpg";
import ap3 from "../images/ap3.jpg";
import ap4 from "../images/ap4.jpg";
import ap5 from "../images/ap5.jpg";
import ap6 from "../images/ap6.jpg";
import ap7 from "../images/ap7.jpg";
import badgmintom from "../images/badgminton.jpg";
import cinema from "../images/cinema.jpeg";
import sauna from "../images/sauna.jpg";
import pool from "../images/pool.jpg";
import pool3 from "../images/pool3.jpg";
import tennis from "../images/tennis.jpeg";
import jacuzzi from "../images/jacuzzi.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
const Section = () => {
  const API_KEY = process.env.REACT_APP_WEATHER_API;
  const[weather, setWeather] = useState()
  const { t } = useTranslation();
  const images = [badgmintom, cinema, sauna, pool, tennis, jacuzzi, pool3];
  const images2 = [ap1, ap2, ap3, ap4, ap5, ap6, ap7];
  const [currentSlide, setCurrentSlide] = useState(0);
  const[weatherImg, setWeatherImg] = useState(null)
  let units = "metric";
  // useRef does not cause a re-render
  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  
  useEffect(()=> {
    const fetchData = async ()=> {
      try {
      const response =   await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.1126&lon=14.9331&units=${units}&appid=${API_KEY}`)
      setWeather(response.data.main.temp)
      console.log(response.data.main.temp)
      setWeatherImg(response.data.weather[0].icon) 

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])
  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
 
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 30,
          mb:10
        }}
      >
<Grid sx={{ alignItems:"center",pl:5,pr:5, mt:{xs:20, lg:2}}}>
        <Typography sx={{fontSize:{lg:"180%", xs:"160%", sm:"160%", md:"180%"}, color:"#af9a7d",}}>{t("currentWeather")} <span style={{fontStyle:"oblique", color:"black"}}>{Math.round(weather)} °C</span></Typography>
        <img style={{width:"12%", height:"10vh"}} src ={`http://openweathermap.org/img/w/${weatherImg}.png`} alt="wthr img" />
        </Grid>
        <Typography sx={{fontSize:{xs:40, sm:45, md:55, lg:55, xl:60}}} variant="h2">{t("amenities")}</Typography>

        <Box className="imgWrapper">
          {images.map((img, index) => {
            return (
              <img
                src={img}
                alt="amenities"
                className={
                  index === currentSlide ? "imageActive homeImage" : "image"
                }
              />
            );
          })}
        </Box>
        <Box sx={{ marginBottom: 20, marginTop: 5 }}>
          <Typography 
            sx={{ fontSize: { xs: 18, sm: 20, md: 20, lg: 20, xl: 30 }, m: 5 }}
          >
            {t("section1")}
            <Link
              style={{ textDecoration: "none", color: "#af9a7d" }}
              to="/activities"
            >
              {t("activities")}
            </Link>
            {t("page")}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop:{xs:45, sm:20, md:10, lg:20, xl:20},
        }}
      >
        <Typography sx={{fontSize:{xs:40, sm:45, md:55, lg:55, xl:60}}} variant="h2">{t("accommodation")}</Typography>

        <Box className="imgWrapper">
          {images2.map((img, index) => {
            return (
              <img
                src={img}
                alt="accommodation images"
                className={
                  index === currentSlide ? "imageActive homeImage" : "image"
                }
              />
            );
          })}
        </Box>
        <Box sx={{ marginBottom: 20, marginTop: 5 }}>
          <Typography
            sx={{ fontSize: { xs: 18, sm: 20, md: 20, lg: 20, xl: 30 }, m: 5 }}
          >
            {t("section2")}
            <Link
              style={{ textDecoration: "none", color: "#af9a7d" }}
              to="/accommodation"
            >
              {t("accommodation")}
            </Link>
            {t("page")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Section;
