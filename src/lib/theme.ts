'use client';

import { createTheme } from '@mui/material';
import { darkPalette, lightPalette } from './palettes';

const theme = createTheme({
	typography: {
		fontFamily: 'var(--font-open-sans)',
	},
	cssVariables: {
		colorSchemeSelector: 'class',
	},
	colorSchemes: {
		dark: {
			palette: darkPalette,
		},
		light: {
			palette: lightPalette,
		},
	},
	palette: {
		mode: 'dark',
	},
});

export default theme;
