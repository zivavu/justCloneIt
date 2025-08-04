import { MOCK_OFFERS } from '@/components/pages/home/OffersList/mockOffers';
import { OfferHeader } from '@/components/pages/job-offer/OfferHeader/OfferHeader';
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
			<Stack direction={'row'} pr={0.5} pl={1} width="100%">
				<Stack flex={5}>
					<OfferHeader offer={offer} />
				</Stack>
				<Stack flex={4}></Stack>
			</Stack>
		</Stack>
	);
}
