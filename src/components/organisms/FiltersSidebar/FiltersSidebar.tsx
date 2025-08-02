'use client';

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

export function FiltersSidebar() {
	const theme = useTheme();

	return (
		<Stack width={320} spacing={4}>
			<Accordion square component={Stack}>
				<AccordionSummary expandIcon={<KeyboardArrowDown />}>
					<Typography variant="body2" color="textSecondary">
						Earnings
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Divider sx={{ marginBottom: 2.5, marginTop: -2.5 }} />
					<Stack direction="row" spacing={2} alignItems="center">
						<PrimarySwitch />
						<Typography variant="body2">
							Show only offers with salary
						</Typography>
					</Stack>
					<OutlinedInput size="small" />
				</AccordionDetails>
			</Accordion>

			<Accordion square component={Stack}>
				<AccordionSummary expandIcon={<KeyboardArrowDown />}>
					<Typography variant="body2" color="textSecondary">
						Work mode
					</Typography>
				</AccordionSummary>
				<AccordionDetails>Details</AccordionDetails>
			</Accordion>
		</Stack>
	);
}
