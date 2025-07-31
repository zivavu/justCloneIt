import { styled } from '@mui/material';

export const StyledHeader = styled('header')(({ theme }) => ({
	display: 'flex',
	height: '64px',
	padding: theme.spacing(0, 3),
	backgroundColor: theme.vars?.palette.background.paper,
	alignItems: 'center',
	gap: theme.spacing(2),
	borderBottom: `1px solid ${theme.palette.divider}`,
	boxShadow: `rgb(57, 57, 57) 0px 1px 0px 0px`,
}));
