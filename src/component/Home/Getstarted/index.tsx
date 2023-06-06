import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { rem } from '@/utilities';
import { Button1 } from '../../Buttons';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Herosection from '../../../asset/image/Herosection.png';
export default function Getstarted() {
  return (
    <Box sx={styles.cont}>
       <Box sx={styles.left}>
        <Typography sx={styles.wpTxt}>
        We are provide best courier services.
        </Typography>
        <Typography sx={styles.wdTxt}>
        We deliver your products safely to your home in a reasonable time.
        </Typography>
        <Button1
        name="Get started"
        size={`${rem(150)}em`}
        endIcon={<ArrowForwardIcon/>}
        />
       </Box>
       <Box sx={styles.right}>
        
        <Image
        style={styles.img}
        alt="Hero Image"
        width={350}
        height={300}
        src={Herosection.src}
        />
       </Box>

    </Box>
  )
}


const styles={
    cont:{
        minHeight:`${rem(300)}em`,
        display:'grid',
        gridTemplateColumns:'1fr 1fr'
    },
    left:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    gap:`${rem(10)}em`
    },
    img:{
      backdropFilter: `blur(2px)`
    },
    wpTxt:{
     fontWeight:700,
     fontSize:`${rem(40)}em`,
     width:'65%',
    },
    wdTxt:{
    width:'70%',
    fontWeight:400,
    margin:'5px 0px',
    fontSize:`${rem(20)}em`,
    lineHeight:`${rem(20)}em`
    },
    right:{
     display:'flex',
     flexDirection:'row',
     justifyContent:"center",
     padding:`${rem(10)}em`
    }
}