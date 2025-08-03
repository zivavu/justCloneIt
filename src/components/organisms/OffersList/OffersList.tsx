'use client';

import { Stack, useTheme } from '@mui/material';
import Link from 'next/link';
import { OffersListHeader } from './components/OffersListHeader';

export function OffersList() {
	const theme = useTheme();

	return (
		<Stack width="100%" maxWidth="1096px">
			<OffersListHeader />
			<Stack gap={1.5}>
				<Link href={'/offer'}></Link>
			</Stack>
		</Stack>
	);
}
