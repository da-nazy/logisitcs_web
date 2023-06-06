import { rem } from "@/utilities";
import { Button } from "@mui/material";
import { ReactNode } from "react";
type btn1props={
    name?:string,
    action?:()=>void,
    endIcon?:ReactNode,
    startIcon?:ReactNode,
    size?:string,
}
export const Button1 =({name,action,endIcon,startIcon,size}:btn1props)=>{
    return(
        <Button sx={{...styles.btn1,width:size&&size}} variant="contained" onClick={()=>action&&action()} endIcon={endIcon&&endIcon} startIcon={startIcon&&startIcon}>
         {name&&name}
        </Button>
    )
}

const styles={
    btn1:{
        height:`${rem(40)}`,
        color:'#fff'
    }
}