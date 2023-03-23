
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Section from '../components/Section'

const Home = () => {
  useEffect(()=> {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },[])
  return (
    <Box>
        <Hero/>
        <Section/>
    </Box>
  )
}

export default Home