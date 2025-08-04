'use client';

import { Stack } from '@mui/material';
import { OffersListContent } from './components/OffersListContent';
import { OffersListHeader } from './components/OffersListHeader';

export function OffersList() {
	return (
		<Stack width="100%" maxWidth="1096px">
			<OffersListHeader />

			<OffersListContent />
		</Stack>
	);
}
