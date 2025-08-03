import { styled, Switch, SwitchProps } from '@mui/material';

export const PrimarySwitch = styled((props: SwitchProps) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 48,
	height: 28,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 4,
		'&.Mui-checked': {
			transform: 'translateX(20px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				backgroundColor: theme?.vars?.palette.primary.main,
				opacity: 1,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
			'&:hover + .MuiSwitch-track': {
				backgroundColor: theme?.vars?.palette.primary.dark,
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
		boxSizing: 'border-box',
		width: 20,
		height: 20,
		boxShadow: 'none',
		backgroundColor: theme.vars?.palette.common.white,
		...theme.applyStyles('dark', {
			backgroundColor: theme.vars?.palette.grey[900],
		}),
	},
	'& .MuiSwitch-track': {
		borderRadius: '26px',
		backgroundColor: theme.vars?.palette.neutral.main,
		opacity: 1,
		...theme.applyStyles('dark', {
			backgroundColor: '#525252',
		}),
	},
}));
