'use client';

import { Switch, Typography, useColorScheme } from '@mui/material';
import { Logo } from './components/Logo/Logo';
import { StyledHeader } from './styles';

export function Header() {
	const { mode, setMode } = useColorScheme();

	return (
		<StyledHeader>
			<Logo />
			<Typography variant="caption" fontWeight={400} letterSpacing={`0.15px`}>
				#1 Job Board for tech industry in Europe
			</Typography>
			<Switch
				checked={mode === 'dark'}
				onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
			/>
		</StyledHeader>
	);
}
