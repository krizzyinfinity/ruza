import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const ModalComponent2 = ({ open, rooms, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vhw",
    height: "100%",
  
    overflow: "scroll",
    display: "flex",
  
    flexWrap: "wrap",
    justifyContent: "center",
  
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button
          style={{
            position: "absolute",
            top: 19,
            right: 45,
            backgroundColor: "olive",
            borderRadius: 60,
            padding: 10,
            color: "black",
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </Button>
        {rooms.map((image) => {
          return (
            <Box sx={{ flexGrow: 1, paddingTop: 4 }}>
              <img
                src={image}
                alt="apartment"
                style={{ width: 300, height: 150, margin: 8 }}
              />
            </Box>
          );
        })}
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {rooms.maxCount}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalComponent2;
