import { Stack, styled } from '@mui/material';

export const StyledRoot = styled(Stack)(({ theme }) => ({
	minWidth: '100vh',
	height: '88px',
	flexDirection: 'row',
	gap: theme.spacing(1.5),
	padding: theme.spacing(2.5, 2),
	paddingBottom: 0,
	backgroundColor: theme.vars?.palette.background.paper,
}));
