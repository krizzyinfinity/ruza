import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
       
        textAlign: "center",
      }}
    >
      <Typography variant="h2">{t("wrong")}</Typography>
    </Box>
  );
};

export default Error;
