import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { useTheme,Box,Typography,TextField, InputAdornment, Button, Step, StepLabel, Stepper, StepContent, Paper } from '@mui/material';
import { rem } from '@/utilities';
import deliv from '../../../asset/image/deliv.jpg';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
export default function TrackLayout() {
    const theme=useTheme();
    const {classes}=useStyles();

    const [activeStep, setActiveStep] = React.useState(1);

    
    
    const steps = [
        'Pickup',
        'In Transit',
        'Delivery',
      ];
      const vsteps = [
        {
          label: 'Delivered, In/At Mailbox',
          description: `ISC NEW YORK NY(USPS)`,
          date:"Oct 23, 2017",
          time:"02:55 pm"
        },
        {
          label: 'Out for DeliveryUSPS',
          description:
            'ISC NEW YORK NY(USPS)',
            date:"Oct 23, 2017",
          time:"02:55 pm"
        },
        {
          label: 'Arrived at Post OfficeUSPS',
          description: `ISC NEW YORK NY(USPS)`,
          date:"Oct 23, 2017",
          time:"02:55 pm"
                },

                {
                    label: 'Departed Shipping Partner FacilityUSPS',
                    description: `ISC NEW YORK NY(USPS)`,
                    date:"Oct 23, 2017",
                    time:"02:55 pm"
                          },
       
      ];


  return (
    <Box className={classes.cont}>
     <Box className={classes.header}
      style={{
        backgroundImage:`url("${deliv.src}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'100% 100%'
       }}
     >
        <Typography className={classes.trackTxt}>
            Track Order
        </Typography>
    
     </Box>
     <Box className={classes.trackCont}>
        <Typography className={classes.tysTxt}>
            Track your shipment
        </Typography>
        <Typography className={classes.etnTxt}>
        Enter a tracking number, and get tracking results.
        </Typography>
        <Box>
            <TextField placeholder="Tracking Number" className={classes.inputField}
             InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                   <Button startIcon={<LocationSearchingIcon/>} className={classes.trackBtn} variant="contained" >Track</Button>
                  </InputAdornment>
                ),
              }}
            /> 
        </Box>
     </Box>
     <Box className={classes.trackNumCont} >
        <Typography>
            13534343
        </Typography>
     </Box>
     <Box className={classes.stage}>
  <Stepper activeStep={1} alternativeLabel className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
     </Box>
     <Box className={classes.status}>
     <Typography className={classes.statusTxt}>
        Delivered
     </Typography>
     </Box>
     <Box className={classes.vStep}>
     <Stepper activeStep={activeStep}  orientation="vertical">
        {vsteps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography> 
            </StepContent>
          </Step>
        ))}
      </Stepper>
    
     </Box>
    </Box>
  )
}

const useStyles=makeStyles()((theme)=>({
cont:{
  display:'flex',
  flex:1,
  marginBottom:`${rem(20)}em`,
  flexDirection:'column',
  
},
header:{
  height:`${rem(250)}em`,
  width:'100%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  background:'linear-gradient(0deg, rgba(10, 9, 13, 0.8), rgba(10, 9, 13, 0.8))',
},
trackTxt:{
    fontWeight:700,
    fontSize:`${rem(24)}em`,
    color:'#fff'
},
trackCont:{
    backgroundColor:'#fff',
    width:'100%',
    height:`${rem(250)}em`,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:`${rem(10)}em`
},
tysTxt:{
  fontWeight:700,
  fontSize:`${rem(20)}em`,
  textTransform:'uppercase',
  color:'rgba(123, 122, 139, 1)' 
},
etnTxt:{
    color:'rgba(123, 122, 139, 1)' 
},
inputField:{
    width:`${rem(400)}em`
},
trackNumCont:{
    display:'flex',
    flexDirection:'column',
    height:`${rem(50)}em`,
    justifyContent:'center',
    alignItems:'center'
},
stage:{
backgroundColor:'#fff',
height:`${rem(100)}em`,
display:'flex',
flexDirection:'row',
width:'100%',
justifyContent:'center',
alignItems:'center'
},
trackBtn:{
height:'40px',
width:'100px',
fontWeight:700,
"&:hover":{
    color:'#fff'
}
},
stepper:{
width:'100%'
},
status:{
    height:`${rem(70)}em`,
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:`${theme.palette.primary.main}`
},
statusTxt:{
    fontWeight:700,
    fontSize:`${rem(18)}em`,
    color:'#fff'
},
vStep:{
    height:`${rem(400)}em`,
    backgroundColor:'#fff',
    padding:`${rem(20)}em`
}

}))