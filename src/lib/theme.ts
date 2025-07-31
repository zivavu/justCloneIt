'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: 'var(--font-roboto)',
	},
	colorSchemes: {
		dark: {
			palette: {
				background: {
					default: 'rgb(44, 44, 44)',
					paper: 'rgb(44, 44, 44)',
				},
				text: {
					primary: '#ffffff',
					secondary: '#b0bec5',
				},
			},
		},
	},
	palette: {
		mode: 'dark',
	},
});

export default theme;
