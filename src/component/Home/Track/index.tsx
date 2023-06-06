import React from 'react';
import { Box, Paper,TextField,Typography,useTheme,Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { rem } from '@/utilities';
export default function Track() {
    const theme=useTheme();
    const {classes}=useStyles();
  return (
   <Paper elevation={2} className={classes.cont}>
      <Box  className={classes.subCont}>

       <Box className={classes.leftCont}>
       <Box className={classes.left}>
            <Typography className={classes.trackTxt}>
            Track your Order 
            </Typography>
            <Typography className={classes.trackTxt2}>
            Tack your order with its own delivery area to deliver  you as soon as possible
            </Typography>
        </Box>
       </Box>

       <Box className={classes.rightCont}>
       <Box className={classes.right}>
            <TextField size='medium' className={classes.rightInput} color="primary" placeholder="Enter your order number"/>
            <Button className={classes.rightBtn} variant="contained">
              Send
            </Button>
        </Box>
       </Box>
      </Box>
   </Paper>
  )
}

const useStyles=makeStyles()((theme)=>({
   
    cont:{
     minHeight:`${rem(200)}em`,
     marginTop:`${rem(40)}em`,
     marginBottom:`${rem(40)}em`
    },
    subCont:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        padding:`${rem(10)}em`,
        justifyContent:'center'
    },
    leftCont:{
     display:'flex',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     height:'200px'
    },
    left:{
        display:'flex',
        flexDirection:'column',
        padding:`${rem(20)}em`,
        width:'80%',
    },
    rightCont:{
        padding:`${rem(20)}em`,
        display:'flex',
        flexDirection:'row',
        height:'200px',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    right:{
     paddingRight:`${rem(20)}em`
    },
    rightInput:{
        boxShadow:'0px 8px 40px rgba(0, 0, 0, 0.08)',
       
    },
    rightBtn:{
     width:`${rem(40)}em`,
     height:`${rem(60)}em`,
     marginLeft:'2px',
     "&:hover":{
        color:'#fff'
     }
    },
    trackTxt:{
        fontWeight:700,
        fontSize:`${rem(24)}em`
    },
    trackTxt2:{
        fontWeight:500,
        fontSize:`${rem(16)}em`
    }
}))