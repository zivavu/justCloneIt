import { PaletteOptions } from '@mui/material';

export const lightPalette: PaletteOptions = {
	mode: 'light',
	background: {
		default: '#ffffff',
		paper: '#f5f5f5',
	},
	text: {
		primary: '#000000',
		secondary: '#757575',
	},
	primary: {
		main: '#1976d2',
	},
	secondary: {
		main: '#dc004e',
	},
	divider: '#e0e0e0',
	action: {
		active: '#000000',
		hover: 'rgba(0, 0, 0, 0.08)',
		selected: 'rgba(0, 0, 0, 0.14)',
		disabled: 'rgba(0, 0, 0, 0.26)',
		disabledBackground: 'rgba(0, 0, 0, 0.12)',
	},
};
export const darkPalette: PaletteOptions = {
	mode: 'dark',
	background: {
		default: 'rgb(44, 44, 44)',
		paper: 'rgb(44, 44, 44)',
	},
};
