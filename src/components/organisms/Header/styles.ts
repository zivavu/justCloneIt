import { styled } from '@mui/material';
import { HeaderHeight } from './Header';

export const StyledHeader = styled('header')(({ theme }) => ({
	display: 'flex',
	position: 'sticky',
	top: 0,
	height: HeaderHeight,
	minHeight: HeaderHeight,
	padding: theme.spacing(0, 3),
	zIndex: 100,
	backgroundColor: theme.vars?.palette.background.paper,
	alignItems: 'center',
	gap: theme.spacing(1.5),
	borderBottom: `1px solid ${theme.vars?.palette.divider}`,
}));
