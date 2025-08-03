import { FiltersSidebar } from '@/components/organisms/FiltersSidebar/FiltersSidebar';
import { OffersList } from '@/components/organisms/OffersList/OffersList';
import { SearchFilterBar } from '@/components/organisms/SearchFilterBar/SearchFilterBar';
import { Stack } from '@mui/material';

export default function Home() {
	return (
		<Stack>
			<SearchFilterBar />
			<Stack direction="row" p={1.5} gap={3} justifyContent="center">
				<FiltersSidebar />
				<OffersList />
			</Stack>
		</Stack>
	);
}
