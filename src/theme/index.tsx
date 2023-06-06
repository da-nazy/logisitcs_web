import { createTheme, ThemeOptions } from '@mui/material';
import { grey } from '@mui/material/colors';
import { colors } from '@/asset';

const theme = (dark: boolean): ThemeOptions =>
	createTheme({
		palette: {
			primary: {
				main: colors.primary,
				dark: '#141110'
			},
			secondary: {
				main: colors.secondary,
				
			},
			text: {
				primary: grey['900'],
			},
			background: {
				paper: '#fff',
				default:grey['100']
			},
			
			
		},
		
		typography: {
			fontFamily: ['"Poppins"', 'Roboto', 'Arial', 'sans-serif'].join(','),

			body1: {
				fontSize: '16px',
			},
			body2: {
				fontSize: '12px',
			},
			button: {
				textTransform: 'initial',
				fontSize: '14px',
			},
		},

		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
		spacing: [0, 4, 8, 16, 32, 64],
	}) as any;

export default theme;
