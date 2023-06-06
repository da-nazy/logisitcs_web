import React,{ReactNode} from 'react';
import Carousel,{PagingDots,ControlProps} from 'nuka-carousel';

import { makeStyles } from "tss-react/mui";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Box} from '@mui/material';
import { colors } from '@/asset';
import TestimonialCard from './TestimonialCard';
type props={
  data:ReactNode[]
}
 type customDot={
  currentSlide:ControlProps['currentSlide'],
  slideCount:ControlProps['slideCount'],
  goToSlide:ControlProps['goToSlide']
 }


export default function HomeCarousel() {

  const {classes}=useStyles();

  const CustomDot = ({ currentSlide, slideCount, goToSlide }:customDot) => {
    const indexes = Array.from({ length: slideCount }, (_, index) => index);
  
    return (
      <ul style={{ textAlign: 'center' }}>
        {indexes.map((index) => (
          <li
            key={index}
            style={{
              display: 'inline-block',
              margin: '0 5px',
              width: '16px', // Increase the width to adjust the dot size
              height: '16px', // Increase the height to adjust the dot size
              borderRadius: '50%',
              background: index === currentSlide ? colors.primary : 'gray', // Customize dot colors here
              cursor: 'pointer',
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ul>
    );
  };
  return (
    <Carousel 
    style={{
      height:"100%",
    }}
    
    defaultControlsConfig={
      {
      
      nextButtonStyle:styles.nextButton,
      nextButtonText:<></>,
      prevButtonStyle:styles.prevButton,
      prevButtonText:<ArrowBackIosNewIcon sx={{color:colors.secondary}} />
      }
    }
     autoplay={true}

     renderBottomCenterControls={({ currentSlide, slideCount, goToSlide }) => (
      <CustomDot currentSlide={currentSlide} slideCount={slideCount} goToSlide={goToSlide} />
    )}
    >
     <TestimonialCard/>
     <TestimonialCard/>
    </Carousel>
  )
}

const useStyles = makeStyles()(() => ({
  pageContainer:{
  border:'1px solid #000',
  fontSize:'50px'
  },
  pageDots:{
  border:'1px solid pink',
  fontSize:'50px',
  }
}))

const styles={
  nextButton:{
    borderRadius:'25px',
    height:'50px',
    width:'50px',
    marginRight:'50px',
    display:'none',
    backgroundColor:'rgba(255, 255, 255, 1)'
  },
  prevButton:{
    borderRadius:'25px',
    height:'50px',
    width:'50px',
    marginLeft:'50px',
    display:'none',
    backgroundColor:'rgba(255, 255, 255, 1)',
    flexDirections:'row',
    justifyContent:'center',
    alignItems:'center'
  }
}