import React, { useState } from 'react'
import axios  from 'axios'
import { Box, Button, Typography } from '@mui/material';
const AdminDashboard = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const login =async ()=> {
 const admin = {
    email, password
 }
 try {
    const result = await axios.post("https://ruza-apartments.onrender.com/api/users/admin", admin).data
    window.location.href = "/adminMain";
 } catch (error) {
    console.log(error)
 }
 console.log(admin)
    }
  return (
   <Box sx={{height:"100vh", display:"flex", flexDirection:"column", alignItems:"center",
   justifyContent:"center"}}>
<Typography variant="h2">Admin login</Typography>
<input  style={{marginTop:10, width:250, height:40, fontSize:20}} type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
<input style={{marginTop:10, width:250, height:40}} type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
   <Button style={{backgroundColor:"red", color:"white", padding:5, marginTop:15}}  onClick={login}>Login</Button>
   </Box>
  )
}

export default AdminDashboard