import React from 'react';
import { useTheme,Box,Typography, Paper, Rating,styled, Avatar } from '@mui/material';
import { makeStyles } from "tss-react/mui";
import { rem } from '@/utilities';
import { colors } from '@/asset';
import avatar from '../../../asset/image/Avatar.png'
export default function TestimonialCard() {
    const theme=useTheme();
    const {classes}=useStyles();

  

  return (
    <Paper elevation={2} className={classes.card}>
   <Box>
   <Typography className={classes.hdTxt}>
     Fantastic service!
     </Typography>
     <Typography className={classes.descTxt}>
     I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home.
     I received my phone within one day, and I was really satisfied with their service when I received it.
     They are really quick and dependable.
     They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery.
     I get a lot of questions from call center support and key account managers.
     They come highly recommended.
     Confidently say that they are really reliable.
     </Typography>
   </Box>
     <Box className={classes.foot}>
     <Rating name="read-only" value={4} readOnly className={classes.rating} />
     <Box  className={classes.avatarCont}>
        <Box>
            <Typography className={classes.avatarNameTxt}>
            Yves Tanguy
            </Typography>
            <Typography className={classes.avatarDescTxt}>
            Chief Executive, DLF
            </Typography>
        </Box>
        <Avatar 
        src={avatar.src}
        className={classes.avatar}
        />
     </Box>
     </Box>
    </Paper>
  )
}

const useStyles = makeStyles()((theme) => ({
   card:{
    borderRadius:`${rem(6)}em`,
    display:'flex',
    flexDirection:'column',
    width:'100%',
    justifyContent:'space-between',
    padding:`${rem(20)}em`
   },
   hdTxt:{
   fontWeight:700,
   fontSize:`${rem(20)}em`,
   color:`${theme.palette.primary.main}`,
   lineHeight:`${rem(30)}em`
   },
   avatarNameTxt:{
   textAlign:'end',
   fontWeight:700,
   lineHeight:`${rem(19)}em`,
   
   },
   avatarDescTxt:{
   textAlign:'end',
   fontWeight:400,
   lineHeight:`${rem(19)}em`,
   },
   descTxt:{
   fontWeight:400,
   fontSize:`${rem(16)}em`,
   lineHeight:`${rem(23)}em`
   },
   rating:{
    color:`${theme.palette.primary.main}`
   },
   avatarCont:{
    display:'flex',
    gap:`${rem(10)}em`
    
   },
   avatar:{
    width:`${rem(40)}em`,
    height:`${rem(40)}em`
   },
   foot:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
   }

}))
  