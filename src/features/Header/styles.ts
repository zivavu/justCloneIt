import { styled } from '@mui/material';

export const StyledHeader = styled('header')(({ theme }) => ({
	display: 'flex',
	height: '64px',
	padding: theme.spacing(0, 3),
	backgroundColor: theme.vars?.palette.background.paper,
	alignItems: 'center',
	gap: theme.spacing(1.5),
	borderBottom: `1px solid ${theme.vars?.palette.divider}`,
}));
