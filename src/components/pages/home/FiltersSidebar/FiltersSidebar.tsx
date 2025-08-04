'use client';

import { Checkbox } from '@/components/atoms/Checkbox/Checkbox';
import { PrimarySwitch } from '@/components/atoms/PrimarySwitch/PrimarySwitch';
import { AttachMoney, KeyboardArrowDown } from '@mui/icons-material';
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
import { TOP_OFFSET } from '../const';
import { sidebarFilters } from './filterCategories';

export function FiltersSidebar() {
	const theme = useTheme();

	return (
		<Stack
			minWidth={320}
			spacing={3}
			position={'sticky'}
			height={`calc(100vh - ${TOP_OFFSET}px)`}
			py={1.5}
			sx={{ overflowY: 'auto' }}>
			<Accordion
				square
				component={Stack}
				disableGutters
				defaultExpanded
				sx={{ ...theme.applyStyles('dark', { border: `1px solid #111111` }) }}>
				<AccordionSummary
					expandIcon={
						<KeyboardArrowDown
							sx={{ color: theme.vars?.palette.text.disabled }}
						/>
					}>
					<Typography variant="body2" color="textSecondary">
						Earnings
					</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 3,
					}}>
					<Divider sx={{ marginTop: -0.5 }} />
					<Stack direction="row" spacing={2} alignItems="center">
						<PrimarySwitch
							slots={{ thumb: AttachMoney }}
							slotProps={{ thumb: { sx: { borderRadius: '50%', p: 0.25 } } }}
						/>
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
					defaultExpanded
					key={filter.value}
					component={Stack}
					sx={{
						'&::before': {
							content: 'none',
						},
						...theme.applyStyles('dark', { border: `1px solid #111111` }),
					}}>
					<AccordionSummary
						expandIcon={
							<KeyboardArrowDown
								sx={{ color: theme.vars?.palette.text.disabled }}
							/>
						}>
						<Typography variant="body2" color="textSecondary">
							{filter.label}
						</Typography>
					</AccordionSummary>

					<AccordionDetails
						sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<Divider sx={{ marginTop: -0.5, marginBottom: 1 }} />
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
