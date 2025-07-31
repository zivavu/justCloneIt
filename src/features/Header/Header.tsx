'use client';

import { Typography } from '@mui/material';
import { Logo } from './components/Logo/Logo';
import { StyledHeader } from './styles';

export function Header() {
	return (
		<StyledHeader>
			<Logo />
			<Typography variant="caption" fontWeight={400}>
				#1 Job Board for tech industry in Europe
			</Typography>
		</StyledHeader>
	);
}
