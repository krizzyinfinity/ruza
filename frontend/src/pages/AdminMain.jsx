import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import moment from "moment";
import BookingModal from "../components/BookingModal";
const AdminMain = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/bookings/getallbookings");
        setBookings(response.data.bookings);
        console.log(bookings);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const toggleShow = () => setIsOpen((p) => !p);

  return (
    <Box sx={{ height: "100vh", mb: 20 }}>
      <Typography variant="h2" sx={{ mt: 20, mb: 15 }}>
        Admin Dashboard
      </Typography>
     
      <Button style={{ cursor: "pointer", backgroundColor:"red", padding:5, color:"white", borderRadius:20, marginBottom:10 }} onClick={toggleShow}>
        Add new booking
      </Button>
    
      {isOpen && <BookingModal close={toggleShow} />}

      <Table>
        <Thead>
          <Tr>
            <Th>From date</Th>
            <Th>To date</Th>
            <Th>Total amount</Th>
            <Th>People</Th>
            <Th>Number of nights</Th>
          </Tr>
        </Thead>
        {bookings.map((d) => {
          return (
            <Tbody key={d._id}>
              <Tr>
                <Td>{moment(d.fromDate, "DD-MM-YYYY")._i}</Td>
                <Td>{moment(d.toDate, "DD-MM-YYYY")._i}</Td>
                <Td>{d.totalAmount}</Td>
                <Td>{d.people}</Td>
                <Td>{d.totalNights}</Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </Box>
  );
};

export default AdminMain;
