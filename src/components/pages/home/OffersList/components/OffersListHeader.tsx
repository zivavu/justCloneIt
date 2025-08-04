'use client';

import { PrimarySwitch } from '@/components/atoms/PrimarySwitch/PrimarySwitch';
import {
	KeyboardArrowDown,
	MapOutlined,
	NotificationsOutlined,
} from '@mui/icons-material';
import {
	Button,
	Menu,
	MenuItem,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { useState } from 'react';
import { valueLabel } from '../../HomePageFilterBar/mockOptions';

const MENU_OPTIONS: valueLabel[] = [
	{
		value: 'default',
		label: 'Default',
	},
	{
		value: 'latest',
		label: 'Latest',
	},
	{
		value: 'highest-salary',
		label: 'Highest salary',
	},
	{
		value: 'lowest-salary',
		label: 'Lowest salary',
	},
] as const;

export function OffersListHeader() {
	const theme = useTheme();

	const [selectedOption, setSelectedOption] = useState<valueLabel>(
		MENU_OPTIONS[0]
	);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	function handleClose() {
		setAnchorEl(null);
	}
	function handleSelect(value: valueLabel) {
		handleClose();
		setSelectedOption(value);
	}

	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			position={'sticky'}
			top={0}
			pt={1.5}
			zIndex={100}
			bgcolor={theme.vars?.palette.background.default}>
			<Typography variant="subtitle2" color="textSecondary">
				Job offers
			</Typography>
			<Stack direction="row" gap={1.5} alignItems="center">
				<Button color="neutral" sx={{ gap: 1, px: 2 }}>
					<NotificationsOutlined
						sx={{ color: theme.vars?.palette.text.secondary }}
					/>
					<Typography variant="body2" color="textSecondary" fontSize="13px">
						Subscribe
					</Typography>
				</Button>
				<PrimarySwitch
					slots={{ thumb: MapOutlined }}
					slotProps={{ thumb: { sx: { borderRadius: '50%', p: 0.25 } } }}
				/>

				<Stack direction="row" alignItems="center" gap={0.5}>
					<Typography fontSize="13px">Sort by:</Typography>

					<Button
						color="neutral"
						sx={{
							px: 2,
							gap: 1,
							color: theme.vars?.palette.text.secondary,
							fontSize: '13px',
						}}
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}>
						{selectedOption.label}
						<KeyboardArrowDown
							sx={{
								fontSize: '20px',
								rotate: open ? `180deg` : 0,
								transition: 'rotate 0.1s ease-in-out',
							}}
						/>
					</Button>
				</Stack>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					slotProps={{
						list: {
							'aria-labelledby': 'basic-button',
						},
					}}>
					{MENU_OPTIONS.map((option) => (
						<MenuItem key={option.value}>
							<Typography onClick={() => handleSelect(option)}>
								{option.label}
							</Typography>
						</MenuItem>
					))}
				</Menu>
			</Stack>
		</Stack>
	);
}
