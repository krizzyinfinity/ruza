import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { useTranslation } from "react-i18next";




const Navbar = () => {
  
  const styles = {
   
    textDecoration: "none",
    fontSize: "110%",
    color: "green",
    cursor: "pointer",
    marginLeft: 40,
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
   
  };

  const myStyle = {
    textDecoration: "none",
    fontSize: "110%",
    color: "white",
    cursor: "pointer",
    marginLeft: 40,
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
  }
  const { t } = useTranslation();
  const [color, setColor] = React.useState(false)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const changeColor = ()=> {
    if(window.scrollY > 90 ) {
      setColor(true)
    }else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={ color ? { backgroundColor:'rgba(0,0,0,.9)', color:"white"} : {backgroundColor:"transparent"}}
     
      >
        <Toolbar>
          <Grid
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              display: "flex",
            }}
          >
            <Typography
              style={{ fontSize: "160%", color: "green" }}
             
              variant="h4"
            >
              <Link 
              style={color? {textDecoration:"none", color:"white"} : {textDecoration:"none",color:"green"}} to="/">
                {t("ruza")}
              </Link>
            </Typography>
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <Box>
                <Link to="/" style={ color ? myStyle : styles}>
                  {t("home")}
                </Link>

                <Link style={ color ? myStyle : styles} to="/about">
                  {t("aboutUs")}
                </Link>
                <Link style={ color ? myStyle : styles} to="/activities">
                  {t("activities")}
                </Link>
                <Link style={ color ? myStyle : styles} to="/accommodation">
                  {t("accommodation")}
                </Link>
              </Box>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
