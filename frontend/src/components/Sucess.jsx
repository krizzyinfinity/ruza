import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Sucess = () => {
  const { t } = useTranslation(); 
  return (
    <Box sx={{height:"100vh", width:"100vw", backgroundColor:"green",
    textAlign:"center"}}>
        <Typography variant="h2">{t("success")}</Typography>
        <Typography variant="h2">{t("checkInbox")}</Typography>
    </Box>
  )
}

export default Sucess