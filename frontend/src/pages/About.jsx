import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box className="div1"></Box>
      <Box sx={{ m: { lg: 10, xl: 5, md: 10, sm: 6, xs: 4 } }}>
        <Typography
          sx={{
            lineHeight: 1.5,
            fontSize: { xs: 20, sm: 20, md: 22, lg: 25, xl: 28 },
            textAlign: "center",
          }}
        >
          {t("about")}
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
