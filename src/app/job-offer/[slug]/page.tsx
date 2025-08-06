import { MOCK_OFFERS } from '@/components/pages/home/OffersList/mockOffers';
import { ApplyForJob } from '@/components/pages/job-offer/ApplyForJob/ApplyForJob';
import { OfferDescription } from '@/components/pages/job-offer/OfferDescription/OfferDescription';
import { OfferHeader } from '@/components/pages/job-offer/OfferHeader/OfferHeader';
import { OfferTechStack } from '@/components/pages/job-offer/OfferTechStack/OfferTechStack';
import { TopBar } from '@/components/pages/job-offer/TopBar/TopBar';
import { Stack, Typography } from '@mui/material';

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
				<Stack flex={5} pl={1} pr={2} pb={2} gap={3}>
					<OfferHeader offer={offer} />
					<OfferTechStack offer={offer} />
					<OfferDescription offer={offer} />
					<ApplyForJob offer={offer} />
				</Stack>
				<Stack style={{ flex: 4 }}>
					<Typography>MAP MPA MPA</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
}
