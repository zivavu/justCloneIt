'use client';

import { GreyIconSwitch } from '@/components/atoms/IconSwitch/GreyIconSwitch';
import { DarkMode, Sunny } from '@mui/icons-material';
import { useColorScheme, useTheme } from '@mui/material';

export function ThemeSwitch() {
	const theme = useTheme();
	const { mode, setMode } = useColorScheme();

	if (!mode) return null;
	return (
		<GreyIconSwitch
			checked={mode === 'dark'}
			onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
			icon={
				<Sunny
					sx={{
						color: theme.vars?.palette.text.secondary,
						fontSize: '17px',
						position: 'relative',
						top: '-1px',
						backgroundColor: 'white',
						borderRadius: '100%',
						padding: '3px',
						boxSizing: 'content-box',
					}}
				/>
			}
			checkedIcon={
				<DarkMode
					color="disabled"
					sx={{
						color: theme.vars?.palette.grey[500],
						fontSize: '17px',
						position: 'relative',
						top: '-1px',
						backgroundColor: theme.palette.grey[600],
						borderRadius: '100%',
						rotate: '-90deg',
						padding: '3px',
						boxSizing: 'content-box',
					}}
				/>
			}
		/>
	);
}
