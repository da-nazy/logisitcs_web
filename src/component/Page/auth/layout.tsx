"use client"
import React,{ReactNode} from 'react';
import {Box,useTheme,Typography,Paper} from '@mui/material';
import {makeStyles} from 'tss-react/mui';
import { rem } from '@/utilities';
import courrierImg from '../../../asset/image/courrierImg.png';
import Image from 'next/image'
type props={
    children:ReactNode
}
export const Authlayout=({children}:props)=>{
    const theme=useTheme();
    const {classes}=useStyles();
    return(
       <Box className={classes.cont}>
        <Box className={classes.imgCont}
         style={{
            backgroundImage: `url("${courrierImg.src}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          
        </Box>
        <Box  className={classes.subCont}>{children}</Box>
       </Box>
    )
}

const useStyles=makeStyles()((theme)=>({
    cont:{
        minHeight:`${rem(500)}em`,
        display:'grid',
        gridTemplateColumns:'2fr 1.5fr',
        marginBottom:`${rem(20)}em`
    },
    imgCont:{
        borderTopLeftRadius:'5px',
        borderBottomLeftRadius:'5px',
        display:'flex',
        width:'100%'
    },
    subCont:{
        backgroundColor:'#fff',
        borderTopRightRadius:'5px',
        borderBottomRightRadius:'5px',
        boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 8px",
    }
      
}))