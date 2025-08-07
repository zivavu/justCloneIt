import { HeaderHeight } from '@/components/organisms/Header/styles';
import { Stack, styled } from '@mui/material';
import Link from 'next/link';

export const StyledRoot = styled(Stack)(({ theme }) => ({
	position: 'sticky',
	top: HeaderHeight,
	flexDirection: 'row',
	gap: theme.spacing(1),
	height: 88,
	backgroundColor: theme.vars?.palette.background.paper,
	alignItems: 'center',
	paddingLeft: theme.spacing(4),
	color: theme.vars?.palette.text.secondary,
	zIndex: 100,
}));

export const StyledLink = styled(Link)(({ theme }) => ({
	fontSize: '14px',
}));
