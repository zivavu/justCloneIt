'use client';

import { Stack, useTheme } from '@mui/material';
import { JobOfferComponentProps } from '../types';

export function OfferHeader({ offer }: JobOfferComponentProps) {
	const theme = useTheme();

	return (
		<Stack
			direction="row"
			sx={{
				backgroundImage: `linear-gradient(to right, ${theme.vars?.palette.primary.main}, ${theme.vars?.palette.primary.dark}`,
			}}></Stack>
	);
}
