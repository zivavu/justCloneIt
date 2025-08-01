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
				outlined: ({ theme }) => ({
					borderColor: theme.vars.palette.neutral.main,
					'&:hover': {
						borderColor: theme.vars.palette.neutral.light,
					},
				}),
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.vars.palette.neutral.main,
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.vars.palette.neutral.light,
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.vars.palette.neutral.light,
					},
				}),
			},
		},
	},
});
