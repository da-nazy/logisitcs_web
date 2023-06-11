"use client"
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Authlayout } from './layout';
import {Box,useTheme,Typography,TextField, Button,Switch, FormControlLabel} from '@mui/material';
import { rem } from '@/utilities';
import { useRouter } from 'next/navigation';
export const Signin=()=>{
    const theme=useTheme();
    const router=useRouter();
    const {classes}=useStyles();
    const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  return (
    <Authlayout>
       <Box className={classes.cont}>
       <Typography className={classes.hdTxt}>
       Nice to see you again
       </Typography>
       <Box className={classes.inputCont}>
       <TextField placeholder="Email or phone number"/>
       <TextField placeholder="Enter password"/>
       </Box>
       <Box className={classes.remCont}>
       <FormControlLabel control={<Switch {...label} defaultChecked  />} label="Remember me" />
        <Button>
        Forgot password?
        </Button>
      </Box>
       <Button variant="contained" className={classes.signBtn}>
        Sign in
       </Button>
       <Box className={classes.signUpCont}>
        <Typography>Dont have an account?</Typography>
        <Button onClick={()=>router.push('/signup')}>
        Sign up now
        </Button>
       </Box>
      </Box>
    </Authlayout>
  )
}


const useStyles=makeStyles()((theme)=>({
  cont:{
    
      width:'100%',
      height:'100%',
      padding:`${rem(20)}em`,
      display:'flex',
      flexDirection:'column',
      gap:`${rem(20)}em`

  },
  inputCont:{
    display:'flex',
    flexDirection:'column',
    gap:`${rem(15)}em`
  },
  remCont:{
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between'
  },
  signUpCont:{
    display:'flex',
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center'
  },
  hdTxt:{
    fontWeight:600,
    fontSize:`${rem(20)}em`,
    lineHeight:`${rem(20)}em`
  },
  signBtn:{
    width:'100%',
    color:'#fff',
    "&:hover":{
        color:'#fff'
    }
  }
}))