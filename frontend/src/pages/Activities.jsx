import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import img1 from "../images/kayak1.jpg";
import img2 from "../images/kayak2.jpg";
import img3 from "../images/kayak4.jpg";
import img4 from "../images/kayak6.jpeg";
import img5 from "../images/aqa.jpg";
import img6 from "../images/bike.jpg";

import { useTranslation } from "react-i18next";

const Activities = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

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
    <Box sx={{ height: "100vh",mb:5, paddingTop: 15 }}>
      <Box className="imgWrapper" >
        {images.map((img, index) => {
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
      <Box sx={{p:4}} >
        <Typography
          sx={{ fontSize: { xs: 20, sm: 20, md: 22, lg: 25, xl: 28 }, mb:12, mt:{lg:10, xl:10, md:5, sm:5} }}
        >
          {t("activities1")}{" "}
          <a
            style={{ textDecoration: "none", color: "#af9a7d" }}
            href="https://naturainsula.com/"
            target="_blank"
          >
            Natura Insula
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Activities;
