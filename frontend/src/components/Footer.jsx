import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Stack
      gap="10px"
      sx={{ alignItems: "center", bgcolor: "#af9a7d" }}
      flexWrap="wrap"
      px="10px"
      pt="24px"
    >
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" }, color: "white", mt: 2 }}
      >
        {t("ruza")}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: { lg: "28px", xs: "20px" }, color: "white", mt: "3px" }}
      >
        Dragove 12 a
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: { lg: "28px", xs: "20px" }, color: "white", mt: "3px" }}
      >
        Dugi Otok Croatia
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LocalPhoneIcon style={{ color: "white", fontSize: "200%" }} />
        <Typography
          variant="h3"
          sx={{
            fontSize: { lg: "28px", xs: "20px" },
            color: "white",
            mt: "3px",
          }}
        >
          +00385951805406
        </Typography>
      </Box>
      <a
        style={{ textDecoration: "none", color: "olive" }}
        href="mailto:kristinamouly@outlook.com"
      >
        <Typography sx={{ fontSize: { lg: "28px", xs: "20px" }, mb: 8 }}>
          Email: kristinamouly@outlook.com
        </Typography>
      </a>
    </Stack>
  );
};

export default Footer;
