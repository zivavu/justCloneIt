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
import Link from 'next/link';
import { useState } from 'react';
import { valueLabel } from '../SearchFilterBar/mockOptions';

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

export function OffersList() {
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
		<Stack width="100%" maxWidth="1096px">
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="subtitle2" color="textSecondary">
					Job offers
				</Typography>
				<Stack direction="row" spacing={3} alignItems="center">
					<Button color="neutral" sx={{ gap: 1 }}>
						<NotificationsOutlined
							sx={{ color: theme.palette.text.secondary }}
						/>
						<Typography variant="body2" color="textSecondary" fontSize="13px">
							Subscribe
						</Typography>
					</Button>
					<PrimarySwitch
						slots={{ thumb: MapOutlined }}
						slotProps={{ thumb: { sx: { borderRadius: '50%', p: 0.25 } } }}
					/>

					<Stack direction="row" alignItems="center">
						<Typography fontSize="13px">Sort by:</Typography>

						<Button
							color="neutral"
							sx={{
								px: 2,
								color: theme.vars?.palette.text.primary,
								fontSize: '13px',
							}}
							aria-controls={open ? 'basic-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}>
							{selectedOption.label}
							<KeyboardArrowDown
								sx={{
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
			<Stack>
				<Button LinkComponent={Link} href={'/offer'} sx={{ width: '100%' }}>
					<li>Stmh</li>
				</Button>
			</Stack>
		</Stack>
	);
}
