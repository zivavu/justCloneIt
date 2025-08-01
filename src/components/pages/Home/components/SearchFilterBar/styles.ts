import { Stack, styled } from '@mui/material';

export const StyledRoot = styled(Stack)(({ theme }) => ({
	minWidth: '100vh',
	height: '88px',
	flexDirection: 'row',
	alignItems: 'center',
	gap: theme.spacing(2),
	padding: theme.spacing(2),
	backgroundColor: theme.vars?.palette.background.paper,
}));
