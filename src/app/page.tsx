import { FiltersSidebar } from '@/components/pages/home/FiltersSidebar/FiltersSidebar';
import { HomePageFilterBar } from '@/components/pages/home/HomePageFilterBar/HomePageFilterBar';
import { OffersList } from '@/components/pages/home/OffersList/OffersList';
import { Stack } from '@mui/material';

export default function HomePage() {
	return (
		<Stack>
			<HomePageFilterBar />
			<Stack direction="row" p={1} gap={3} justifyContent="center">
				<FiltersSidebar />
				<OffersList />
			</Stack>
		</Stack>
	);
}
