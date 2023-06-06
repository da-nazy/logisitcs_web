import React,{ReactNode} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '..';
   type props={
   children:ReactNode
   }
const MuiThemeProvider=({children}:props)=>{
    return(
		<ThemeProvider theme={theme(true)}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
	);
};

export default MuiThemeProvider;