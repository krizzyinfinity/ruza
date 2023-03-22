import React, {  useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
const styles = {
  textDecoration: "none",
  color: "#af9a7d",
};

function DrawerComponent() {
  const { t } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            height: 350,
            alignItems: "center",
            width: "55%",
            top: 100,
            left: "25%",
          },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={styles} to="/">
                {t("home")}
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={styles} to="/about">
                {t("aboutUs")}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={styles} to="/activities">
                {t("activities")}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={styles} to="/accommodation">
                {t("accommodation")}
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <FaAlignRight className="nav-icon" style={{ color: "#af9a7d" }} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
