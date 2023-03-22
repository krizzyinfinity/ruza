import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("");

  const [index, setIndex] = useState(0);
  const [fullText, setFullText] = useState(t("village"));
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 90);
    }
  }, [index]);
  return (
    <Box
      className="div"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        backgroundPosition: "50% 0",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        margin: 0,
      }}
    >
      <Typography
        style={{
          color: "white",
          WebkitTextStroke: "4px olive",
          fontSize: "11vh",
          fontWeight: "bold",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Hero;
