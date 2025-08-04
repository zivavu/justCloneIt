import { HeaderHeight } from '@/components/organisms/Header/Header';
import { Stack, styled } from '@mui/material';

export const FilterBarHeight = 88;

export const StyledRoot = styled(Stack)(({ theme }) => ({
	position: 'sticky',
	top: HeaderHeight,
	minWidth: '100vh',
	height: FilterBarHeight,
	flexDirection: 'row',
	gap: theme.spacing(1.5),
	zIndex: 100,
	padding: theme.spacing(2.5, 2),
	paddingBottom: 0,
	backgroundColor: theme.vars?.palette.background.paper,
}));
