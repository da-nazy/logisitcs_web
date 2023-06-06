import FastDelivery from '@/component/Home/FastestDelivery';
import Getstarted from '@/component/Home/Getstarted';
import Ourgoal from '@/component/Home/Ourgoal';
import Ourservice from '@/component/Home/Oursrevice';
import Testimonial from '@/component/Home/Testimonial';
import Track from '@/component/Home/Track';
import { Box } from '@mui/material';
import React from 'react';

export const  MainSection=()=> {
  return (
    <Box>
      <Getstarted/>
      <Ourgoal/>
      <Ourservice/>
      <Track/>
      <FastDelivery/>
      <Testimonial/>
    </Box>
  )
}
