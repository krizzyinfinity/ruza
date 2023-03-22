import { Box, Button, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    backgroundColor:"grey",
    display:"flex",
    flexDirection:"column",
 zIndex: 1,
    alignItems:"center",
    p: 7,
    
  };

const BookingModal = ({close}) => {
    const [from , setFrom ]= useState("");
    const [to , setTo ]= useState("");
    const [people , setPeople ]= useState(0);
    const [totalNights , setTotalNights ]= useState(0);
    const [totalAmount , setTotalAmount ]= useState(0);
    const [name , setName ]= useState("");
    const [id, setId]= useState("");

    const addBooking = async()=> {
        const newBooking = {
            name,
            people,
            id,
            totalAmount,
            totalNights,
            from,
            to
        }
        //console.log(newBooking)
        try {
          
      
            await axios.post("/api/bookings/admin/bookroom", newBooking);
           
            
          } catch (error) {
           console.log(error)
          }
    }
  return (
    <Box style={style}>
        <Button style={{cursor:"pointer", position:"absolute", right:30, color:"white",
    backgroundColor:"black", top:10}} onClick={close}>Close</Button>
        <Typography sx={{mt:10,lineHeight:1,mb:4, fontSize:{xs:35, sm:45} }} >Add new booking</Typography>
       
            <input className='myInput'onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder='Input room name '/>
            
            <input className='myInput' value={id} onChange={(e)=> setId(e.target.value)} type="text" placeholder='Input room id '/>
            
            <input className='myInput' type="date" onChange={(e)=> setFrom(e.target.value)} value={from}  placeholder='Input From date '/>
            
            <input className='myInput' type="date" onChange={(e)=> setTo(e.target.value)} value={to} placeholder='Input To date '/>
            
            <input className='myInput' onChange={(e)=> setPeople(e.target.value)} type="text" value={people} placeholder='Input number of people '/>
            
            <input onChange={(e)=> setTotalAmount(e.target.value)} className='myInput' type="text" value={totalAmount} placeholder='Input total amount '/>
            
            <input onChange={(e)=> setTotalNights(e.target.value)} className='myInput' type="text" value={totalNights} placeholder='Input total nights '/>
            <Button onClick={addBooking} style={{backgroundColor:"red", padding:5, color:"white", borderRadius:10}}>Submit</Button>
       
          
            
    </Box>
  )
}

export default BookingModal