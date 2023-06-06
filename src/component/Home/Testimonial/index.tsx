import React from 'react';
import{Box,useTheme,Typography} from '@mui/material';
import { makeStyles } from "tss-react/mui";
import { rem } from '@/utilities';
import TestimonialCard from './TestimonialCard';
import HomeCarousel from './Carousel';

export default function Testimonial() {
    const theme=useTheme();
    const {classes}=useStyles();
  return (
   <Box className={classes.cont}>
     <Box className={classes.descCont}>
      <Typography className={classes.serTxt} color="primary">
      TESTIMONIAL
        </Typography>
        <Typography className={classes.osTxt}>
        Our Awesome Clients
        </Typography>
      </Box>
      <Box className={classes.testSlider}>
      <HomeCarousel/>
      </Box>
   </Box>
  )
}

const useStyles = makeStyles()((theme) => ({
    cont:{
        marginTop:`${rem(40)}em`,
        minHeight:`${rem(450)}em`,
        display:'flex',
        flexDirection:'column',
        marginBottom:`${rem(40)}em`
    },
    testSlider:{
    display:'flex',
    flex:1,
    padding:`${rem(40)}em`,
    },
    descCont:{
        display:'flex',
        flexDirection:'column',
        gap:`${rem(5)}em`
    },
    serTxt:{
        fontWeight:700,
        fontSize:'18px',
        textAlign:'center',
         },
         osTxt:{
            fontWeight:700,
            fontSize:'26px',
            textAlign:'center',
        },
}))
  