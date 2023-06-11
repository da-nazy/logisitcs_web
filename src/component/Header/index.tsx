import React from 'react';
import {Box,Button, List, ListItemText,ListItemButton,Avatar} from '@mui/material';
import logo from '../../asset/image/logo.png'
import { Button1 } from '../Buttons';
import { rem } from '@/utilities';
import {useRouter} from 'next/navigation';

function Header() {
const router=useRouter();
const nav:{name:string,path:string}[]=[
  {name:"Home",path:'/'},
  {name:"Track Order",path:"/track"},
  {name:"Pricing",path:""},
  {name:"About",path:""}
]
  return (
    <Box sx={styles.cont}>
       <Box sx={styles.navCont}> 
        <Avatar src={logo.src} variant="square" sx={{width:100}}/>
     <List component="nav" sx={styles.list}>
     {nav.map(({name,path},i:number)=>{
        return(
        <ListItemButton
             key={i}
             color='secondary'
             selected={false}
             onClick={(event)=>path&&router.push(path)}
         >
           <ListItemText
           
           primary={name} 
           primaryTypographyProps={{style:{fontWeight:true?700:400}}} />
         </ListItemButton>
        )
     })}
            
          
      </List>
      <Button1 name="Login|Register" 
       action={()=>router.push('/signin')}
      />
       </Box>
    </Box>
  )
}

const styles={
  cont:{
    height:'150px',
    padding:'50px',
  },
  navCont:{
   backgroundColor:'#fff',
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
   paddingLeft:`${rem(40)}em`,
   paddingRight:`${rem(40)}em`,
   alignItems:'center'
  },

  list:{
    backgroundColor:'#fff',
    display:'flex',
    flexDirection:'row',
    gap:'10px'
  },
  logRegBtn:{
    height:'40px',
    color:'#fff'
  }
}

export default Header