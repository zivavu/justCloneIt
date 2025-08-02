import { styled, Switch, SwitchProps } from '@mui/material';

export const StyledThemeSwitch = styled((props: SwitchProps) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 56,
	height: 32,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 5,
		'&.Mui-checked': {
			transform: 'translateX(24px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				backgroundColor: theme?.vars?.palette.background.default,
				opacity: 1,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
		'&.Mui-focusVisible .MuiSwitch-thumb': {
			color: '#8a8a8aff',
			border: '6px solid #fff',
		},
		'&.Mui-disabled .MuiSwitch-thumb': {
			color: theme.vars?.palette.grey[100],
			...theme.applyStyles('dark', {
				color: theme.vars?.palette.grey[600],
			}),
		},
		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: 0.7,
		},
	},
	'& .MuiSwitch-thumb': {
		width: 22,
		height: 22,
		boxShadow: 'none',
		backgroundColor: theme.vars?.palette.common.white,
		...theme.applyStyles('dark', {
			backgroundColor: theme.vars?.palette.grey[500],
		}),
	},
	'& .MuiSwitch-track': {
		border: `1px solid ${theme.vars?.palette.divider}`,
		borderRadius: '26px',
		backgroundColor: theme.vars?.palette.background.default,
		opacity: 1,
	},
}));
