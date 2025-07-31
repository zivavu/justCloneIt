'use client';

import { createTheme } from '@mui/material';
import { darkPalette, lightPalette } from './palettes';

export const theme = createTheme({
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
	components: {
		MuiButtonBase: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
	},
});
