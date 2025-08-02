'use client';

import { Checkbox } from '@/components/atoms/Checkbox/Checkbox';
import { PrimarySwitch } from '@/components/atoms/PrimarySwitch/PrimarySwitch';
import { KeyboardArrowDown } from '@mui/icons-material';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Divider,
	OutlinedInput,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { sidebarFilters } from './filterCategories';

export function FiltersSidebar() {
	const theme = useTheme();

	return (
		<Stack width={320} spacing={3}>
			<Accordion square component={Stack}>
				<AccordionSummary expandIcon={<KeyboardArrowDown />}>
					<Typography variant="body2" color="textSecondary">
						Earnings
					</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: theme.spacing(2),
					}}>
					<Divider sx={{ marginTop: -2 }} />
					<Stack direction="row" spacing={2} alignItems="center">
						<PrimarySwitch />
						<Typography variant="body2">
							Show only offers with salary
						</Typography>
					</Stack>
					<OutlinedInput size="medium" placeholder="Minimum monthly earnings" />
				</AccordionDetails>
			</Accordion>

			{sidebarFilters.map((filter) => (
				<Accordion
					square
					disableGutters
					key={filter.value}
					component={Stack}
					sx={{ '&::before': { content: 'none' } }}>
					<AccordionSummary expandIcon={<KeyboardArrowDown />}>
						<Typography variant="body2" color="textSecondary">
							{filter.label}
						</Typography>
					</AccordionSummary>

					<AccordionDetails
						sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<Divider sx={{ marginTop: -2, marginBottom: 1 }} />
						{filter.options.map((option) => (
							<Stack
								key={option.value}
								direction="row"
								spacing={1}
								alignItems="center">
								<Checkbox />
								<Typography variant="caption">{option.label}</Typography>
							</Stack>
						))}
					</AccordionDetails>
				</Accordion>
			))}
		</Stack>
	);
}
