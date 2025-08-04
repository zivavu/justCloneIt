import { MOCK_OFFERS } from '@/components/pages/home/OffersList/mockOffers';
import { TopBar } from '@/components/pages/job-offer/TopBar/TopBar';
import { Stack } from '@mui/material';

export default async function JobOfferPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const offer = MOCK_OFFERS.find((offer) => offer.slug === slug);

	return (
		<Stack>
			<TopBar offer={offer} />
			<Stack direction={'row'}></Stack>
		</Stack>
	);
}
