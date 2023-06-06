import React from 'react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import { rem } from '@/utilities';
import delivery from '../../../asset/image/delivery.png';
import paris from '../../../asset/image/paris.png';
import time from '../../../asset/image/time.png';
import { StaticImageData } from 'next/image';
export default function Ourgoal() {
    type goalProps={img:StaticImageData,desc:string};
const goalData:goalProps[]=[
    {img:delivery,desc:"On time delivery "},
    {img:paris,desc:"Fast home delivery "},
    {img:time,desc:"We are your product"},
]


     const Goalcard=({img,desc}:goalProps)=>{
      return(
        <Box sx={styles.goal}>
            <Avatar src={img.src}/>
            <Typography>
             {desc}
            </Typography>
        </Box>
      )
      }

  return (
    <Paper sx={styles.cont}>
        <Box sx={styles.goalCont}>
            {goalData.map((value,i:number)=>{
                return(
                   <Goalcard img={value.img} desc={value.desc} key={i}/>
                )
            })}
         
        </Box>
    </Paper>
  )
}


const styles={
    cont:{
        height:`${rem(140)}em`,
        marginTop:`${rem(50)}em`,
       
    },
    goalCont:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-evenly',
     alignItems:'center',
     width:'100%',
     height:'100%'
    },
    goal:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:`${rem(10)}em`

    },

}