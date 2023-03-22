import { Typography } from "@mui/material";
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
import sauna from "../images/sauna.jpeg";
import pool from "../images/pool.jpg";
import tennis from "../images/tennis.jpeg";
import jacuzzi from "../images/jacuzzi.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Section = () => {
  const { t } = useTranslation();
  const images = [badgmintom, cinema, sauna, pool, tennis, jacuzzi];
  const images2 = [ap1, ap2, ap3, ap4, ap5, ap6, ap7];
  const [currentSlide, setCurrentSlide] = useState(0);
  // useRef does not cause a re-render
  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
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
        }}
      >
        <Typography variant="h2">{t("amenities")}</Typography>

        <Box className="imgWrapper">
          {images.map((img, index) => {
            return (
              <img
                src={img}
                className={
                  index === currentSlide ? "imageActive homeImage" : "image"
                }
              />
            );
          })}
        </Box>
        <Box sx={{ marginBottom: 20, marginTop: 5 }}>
          <Typography
            sx={{ fontSize: { xs: 16, sm: 20, md: 20, lg: 20, xl: 30 }, m: 5 }}
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
          marginTop: 30,
        }}
      >
        <Typography variant="h2">{t("accommodation")}</Typography>

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
            sx={{ fontSize: { xs: 16, sm: 20, md: 20, lg: 20, xl: 30 }, m: 5 }}
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
