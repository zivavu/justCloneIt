'use client';

import { Stack } from '@mui/material';
import { TOP_OFFSET } from '../const';
import { OffersListContent } from './components/OffersListContent';
import { OffersListHeader } from './components/OffersListHeader';

export function OffersList() {
	return (
		<Stack
			width="100%"
			maxWidth="1096px"
			position={'sticky'}
			height={`calc(100vh - ${TOP_OFFSET}px)`}
			sx={{ overflowY: 'auto' }}>
			<OffersListHeader />

			<OffersListContent />
		</Stack>
	);
}
