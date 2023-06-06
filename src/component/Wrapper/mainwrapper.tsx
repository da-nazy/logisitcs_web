'use client';
import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import Getstarted from '../Home/Getstarted';
import { rem } from '@/utilities';
export const Mainwrapper=({children}:{children:ReactNode})=> {
  return (
   <Box sx={styles.cont}>
    <Header/>
    <Box sx={styles.body}>
        {children}
    </Box>
    <Footer/>
   </Box>
  )
}


const styles={
    cont:{
        minHeight:'100vh',
        margin:'0px',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'rgba(238, 238, 238, 1)'
    },
    body:{
        display:'flex',
        flexDirection:'column',
        paddingLeft:`${rem(90)}em`,
        paddingRight:`${rem(90)}em`,
        flex:1
    }

}