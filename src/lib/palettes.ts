import {
	PaletteColor,
	PaletteColorOptions,
	PaletteOptions,
} from '@mui/material';

declare module '@mui/material/styles' {
	interface Palette {
		neutral: PaletteColor;
	}
	interface PaletteOptions {
		neutral?: PaletteColorOptions;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		neutral: true;
	}
}

export const lightPalette: PaletteOptions = {
	primary: {
		main: '#f23d7b',
	},
	secondary: {
		main: '#f06292',
	},
	background: {
		default: '#f3f6f8',
		paper: '#ffffff',
	},
	text: {
		primary: '#000000',
		secondary: '#757575',
	},
	divider: '#e5e5e5',
	neutral: {
		main: '#f3f6f8',
		dark: '#282a3a',
		light: '#fdfeffff',
		contrastText: '#000000',
	},
};
export const darkPalette: PaletteOptions = {
	primary: {
		main: '#f06292',
	},
	secondary: {
		main: '#f23d7b',
	},
	background: {
		default: '#202020',
		paper: '#2c2c2c',
	},
	text: {
		primary: 'rgb(224, 224, 224)',
		secondary: 'rgb(189, 189, 189)',
	},
	divider: '#393939',
	neutral: {
		main: '#454545',
		dark: '#0e0e0e',
		light: '#bdbdbd',
		contrastText: '#ffffff',
	},
};
