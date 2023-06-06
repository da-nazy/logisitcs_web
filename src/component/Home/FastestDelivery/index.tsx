
import {Avatar, Box, useTheme,Typography} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import { rem } from '@/utilities';
import deli from '../../../asset/image/deli.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { colors } from '@/asset/colors';
export default function FastDelivery() {
    const theme=useTheme();
    const {classes}=useStyles();
  return (
   <Box className={classes.cont} 
   style={{
    backgroundImage:`url("${deli.src}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'inherit',
    backgroundPosition: 'center',
   }}
   >
    <Box className={classes.subCont}>
    <Avatar className={classes.avatar}>
       <PlayArrowIcon fontSize='medium'/>
    </Avatar>
    <Typography className={classes.serTxt} color="primary">
        FASTEST DELIVERY
    </Typography>
    <Typography className={classes.serTxt1}>
    You can get your valuable item in the fastest period of
 time with safety. Because your emergency
 is our first priority.
    </Typography>
    </Box>

   </Box>
  )
}


const useStyles=makeStyles()((theme)=>({
cont:{
    minHeight:`${rem(400)}em`,
    marginBottom:`${rem(40)}em`,
    background:'linear-gradient(0deg, rgba(10, 9, 13, 0.8), rgba(10, 9, 13, 0.8))', 
    borderRadius:`${rem(16)}em`,
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
},
avatar:{
    backgroundColor:colors.primary,
    height:`${rem(50)}em`,
    width:`${rem(50)}em`
},
serTxt:{
    fontWeight:700,
    fontSize:`${rem(18)}em`,
    textAlign:'center',
     },
     serTxt1:{
        fontWeight:400,
        fontSize:`${rem(16)}em`,
        textAlign:'center',
        color:'#fff'
     },
     subCont:{
        width:'55%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        gap:`${rem(10)}em`,
        alignItems:'center'
     }
}))