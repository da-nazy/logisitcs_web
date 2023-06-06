import React from 'react';
import {Box,Typography,useTheme} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { rem } from '@/utilities';
export default function Footer() {
  const theme=useTheme();
  const {classes}=useStyles();


  return (
    <Box className={classes.cont}>
    <Box className={classes.subCont}>
    <Box className={classes.leftCont}>
       <Box>
       <Typography className={classes.compNameTxt}>
       Stuff Boxes
       </Typography>
       <Typography className={classes.compDescTxt}>
       Best Courier  box  delivery Company in Nigeria  
       </Typography>
       </Box>
      </Box>
      <Box className={classes.rightCont}>
       {["Other links","Services","Customer Care"].map((value,index)=>{
        return(
          <Box key={index} className={classes.linkCont}>
          <Typography className={classes.linkHdTxt}>
            {value}
          </Typography>
 
         <Box className={classes.subLinkCont}>
        {["Blogs","Movers website","Traffic Update"].map((value,id)=>{
         return(
           <Typography key={id} className={classes.linkDescTxt}>
           {value}
         </Typography>
         )
        })}
         </Box>
 
         </Box>
        )
       })}
      </Box>
    </Box>
      </Box>
  )
}

const useStyles=makeStyles()((theme)=>({
  cont:{
    height:`${rem(307)}em`,
    backgroundColor:`${theme.palette.secondary.main}`,
    padding:`${rem(40)}em`,
    display:'flex',
    flexDirection:'column'
  },
  subCont:{
  flex:1,
  display:'grid',
  gridTemplateColumns:'2fr 2fr'
  },
  leftCont:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  compNameTxt:{
    fontWeight:400,
    fontSize:`${rem(25)}em`,
    color:'#fff'
  },
  compDescTxt:{
    color:' rgba(146, 145, 161, 1)',
    width:`${rem(209)}em`

  },
  rightCont:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr'
  },
  linkCont:{
    display:'flex',
    flexDirection:'column',
    gap:`${rem(10)}em`
  },
  linkHdTxt:{
    fontWeight: 600,
    lineHeight:`${rem(25)}em`,
    color:'#fff'
  },
  linkDescTxt:{
  fontWeight: 500,
  lineHeight:`${rem(22)}em`,
  color:' rgba(146, 145, 161, 1)',
  },
  subLinkCont:{
    display:'flex',
    flexDirection:'column',
    gap:`${rem(10)}em`
  }
}))
