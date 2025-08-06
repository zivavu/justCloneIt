'use client';

import { createTheme } from '@mui/material';
import { darkPalette, lightPalette } from './palettes';

export const theme = createTheme({
	typography: {
		fontFamily: 'var(--font-open-sans)',
		fontWeightRegular: 600,
		fontWeightMedium: 600,
		fontWeightBold: 700,
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
					borderRadius: '100px',
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
		MuiCheckbox: {
			defaultProps: { disableRipple: true },
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: '8px',
					padding: '0',
				}),
			},
		},
		MuiOutlinedInput: {
			defaultProps: { size: 'small' },
			styleOverrides: {
				root: ({ theme }) => ({
					minHeight: '48px',
					fontSize: '14px',
					borderColor: theme.vars.palette.neutral.main,
					transition: 'border-color 0.2s ease-in-out',
					borderRadius: '12px',

					'&:hover ': {
						borderColor: theme.vars.palette.neutral.dark,
					},
					'&.Mui-focused .MuiOutlinedInput': {
						borderColor: theme.vars.palette.neutral.dark,
					},
					...theme.applyStyles('dark', {
						'& .MuiOutlinedInput': {
							borderColor: theme.vars.palette.neutral.main,
						},
						'&:hover .MuiOutlinedInput': {
							borderColor: theme.vars.palette.neutral.light,
						},
						'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
							borderColor: theme.vars.palette.neutral.light,
						},
					}),
				}),
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					'.MuiChip-labelSmall': {
						fontSize: '0.75rem',
					},
				},
			},
		},
		MuiAccordion: {
			defaultProps: { elevation: 0 },
			styleOverrides: {
				root: {
					borderRadius: '1.25rem',
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: ({ theme }) => ({
					fontSize: '0.875rem',
					marginBottom: '4px',
					color: theme.vars.palette.text.primary,
					'&.Mui-focused': {
						color: theme.vars.palette.text.primary,
					},
				}),
			},
		},
	},
});
