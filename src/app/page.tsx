import { FiltersSidebar } from '@/components/organisms/FiltersSidebar/FiltersSidebar';
import { SearchFilterBar } from '@/components/organisms/SearchFilterBar/SearchFilterBar';
import { Box, Stack } from '@mui/material';

export default function Home() {
	return (
		<Box>
			<SearchFilterBar />
			<Stack direction="row" p={2}>
				<FiltersSidebar />
			</Stack>
		</Box>
	);
}
