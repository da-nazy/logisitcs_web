import React from 'react';
import { Box,Paper,useTheme,Typography,Avatar, List, ListItem, ListItemIcon, ListItemText, Button,Theme } from '@mui/material';
import { rem } from '@/utilities';
import { makeStyles } from "tss-react/mui";
import businessIcon from '../../../asset/image/businessIcon.png';
import houseIcon from '../../../asset/image/houseIcon.png'
import personalIcon from '../../../asset/image/personalIcon.png'
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';
import { Button1 } from '@/component/Buttons';
import { colors } from '@/asset/colors';
export default function Ourservice() {
  const theme=useTheme();
  const classes=useStyles();

  const ServiceCard=()=>{
        return(
            <Paper elevation={2} sx={styles.servCardCont}>
                <Box>
                        <Image 
                        alt="business Icon"
                        src={businessIcon.src}
                        width={70}
                        height={80}
                        />

                </Box>
                <Typography sx={styles.cardNameTxt}>
                    For Business
                </Typography>
              <Box sx={styles.detCont}>
              <Typography sx={styles.cardDescTxt}>
               We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.
               </Typography>
               <Box>
               <List>
            
                <ListItem  sx={styles.listItem}>
                    <CircleIcon fontSize="small" sx={styles.dotIcon}/>
                  
                  <ListItemText
                  
                    primary="Corporate goods"
                  />
                </ListItem>
                <ListItem  sx={styles.listItem}>
                
                    <CircleIcon fontSize="small" sx={styles.dotIcon}/>
                
                  <ListItemText
                    primary="Shipment"
                  />
                </ListItem>
                <ListItem  sx={styles.listItem}>
                    <CircleIcon fontSize="small" sx={styles.dotIcon}/>
                  
                  <ListItemText
                    primary="Accessories"
                  />
                </ListItem>
                </List>

               </Box>
               <Box sx={styles.btnCont}>
                <Button sx={styles.btn} variant="outlined">
                    Learn More
                </Button>
               </Box>
              </Box>
            </Paper>
        )
    }
  return (
    <Box sx={styles.cont}>
      <Box sx={styles.descCont}>
      <Typography sx={styles.serTxt} color="primary">
        SERVICES
        </Typography>
        <Typography sx={styles.osTxt}>
        Our services for you
        </Typography>
      </Box>
      <Box sx={styles.servCont}>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles()((theme) => ({
  iframeWrapper: {
    width: '100%',
  }}))



const styles={
    cont:{
     marginTop:`${rem(50)}em`,
     minHeight:`${rem(500)}em`,
     display:'flex',
     flexDirection:'column',
     alignSelf:'center',
     marginBottom:'10px'
    },
    btnCont:{
        display:'flex',flexDirection:'row',width:'100%'
    },
    btn:{
        width:'100%',
        fontWeight:700,
        "&:hover":{
            backgroundColor:colors.primary,
            color:'#fff'
        }
    },
    dotIcon:{
        color:'rgba(249, 92, 25, 1)',
        fontSize:'10px'
    },
    listItem:{
    padding:'0px',
    display:'flex',
    flexDirection:'row',
    gap:'10px',
    color:'rgba(123, 122, 139, 1)'
    },
    servCont:{
        display:'flex',
        flexDirection:'row',
        flex:1,
        gap:`${rem(20)}em`,
        marginTop:`${rem(30)}em`
    },
    avatar:{
     width:'70px',
     height:'100px'
    },
    serTxt:{
   fontWeight:700,
   fontSize:'18px',
   textAlign:'center',
    },
    osTxt:{
        fontWeight:700,
        fontSize:'26px',
        textAlign:'center',
    },
    descCont:{
        display:'flex',
        flexDirection:'column',
        gap:`${rem(5)}em`
    },
    servCardCont:{
       width:'100%',
       borderRadius:`10px`,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:`${rem(10)}em`
    },
    cardNameTxt:{
        fontWeight:800,
        fontSize:`${rem(16)}em`
    },
    cardDescTxt:{
       fontWeight:400,
       lineHeight:'23.3px',
       color:'rgba(123, 122, 139, 1)'
    },
    detCont:{
        width:'80%',
        marginTop:'10px'
    }
}