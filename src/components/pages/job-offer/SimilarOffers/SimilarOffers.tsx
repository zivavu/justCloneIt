import { Stack, Typography } from '@mui/material';
import { OffersListContent } from '../../home/OffersList/components/OffersListContent';
import { MOCK_OFFERS } from '../../home/OffersList/mockOffers';

export function SimilarOffers() {
	return (
		<Stack spacing={1}>
			<Typography variant="h6">Check similar offers</Typography>
			<OffersListContent offers={MOCK_OFFERS.slice(0, 5)} />
		</Stack>
	);
}
