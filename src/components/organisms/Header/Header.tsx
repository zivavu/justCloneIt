'use client';

import { Typography } from '@mui/material';
import { Logo } from './components/Logo/Logo';
import { Nav } from './components/Nav/Nav';
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';
import { StyledHeader } from './styles';

export const HeaderHeight = 64;

export function Header() {
	return (
		<StyledHeader>
			<Logo />
			<Typography
				variant="caption"
				fontWeight={400}
				letterSpacing={`0.15px`}
				color="textSecondary">
				#1 Job Board for tech industry in Europe
			</Typography>
			<ThemeSwitch />
			<Nav />
		</StyledHeader>
	);
}
