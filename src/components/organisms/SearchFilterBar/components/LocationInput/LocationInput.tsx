'use client';

import {
	ExpandMore,
	KeyboardArrowDown,
	LocationOnOutlined,
	Search,
} from '@mui/icons-material';
import {
	Autocomplete,
	Button,
	ButtonBase,
	Chip,
	Popover,
	Stack,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import { valueLabel } from '../../mockOptions';
import { mockLocations } from './mockLocations';

export function LocationInput() {
	const theme = useTheme();

	const [isPoperOpen, setIsPopoverOpen] = useState(false);
	const [choosenLocation, setChoosenLocation] = useState<valueLabel | null>(
		null
	);
	const anchorEl = useRef<HTMLButtonElement | null>(null);

	function handleSetLocation(location: valueLabel) {
		setChoosenLocation(location);
	}
	return (
		<>
			<Button
				ref={anchorEl}
				onClick={() => setIsPopoverOpen(!isPoperOpen)}
				variant={!!choosenLocation ? 'contained' : 'outlined'}
				color={!!choosenLocation ? 'primary' : 'neutral'}
				sx={{ borderRadius: '50px', height: '40px', px: 3.5 }}>
				<Stack
					direction="row"
					spacing={1}
					sx={{
						'& > *': {
							color: choosenLocation
								? theme.vars?.palette.text.primary
								: theme.vars?.palette.text.secondary,
						},
					}}>
					<LocationOnOutlined />
					<Typography variant="subtitle2">
						{choosenLocation?.label || 'Location'}
					</Typography>
					<ExpandMore />
				</Stack>
			</Button>

			<Popover
				open={isPoperOpen}
				anchorEl={anchorEl.current}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				slotProps={{
					paper: {
						elevation: 3,
						sx: {
							marginTop: theme.spacing(1),
							border: `1px solid ${theme.vars?.palette.neutral.main}`,
							borderRadius: '20px',
							backgroundColor: theme.vars?.palette.background.paper,
							backgroundImage: 'none',
						},
					},
				}}
				onClose={() => setIsPopoverOpen(false)}>
				<Stack spacing={3} padding={theme.spacing(3, 4)} maxWidth="714px">
					<Stack
						direction="row"
						width={'100%'}
						justifyContent="space-between"
						alignItems="center">
						<Typography fontWeight={600} variant="h6" color="textSecondary">
							Location
						</Typography>
						<Typography>
							<Button
								onClick={() => {
									setChoosenLocation(null);
								}}>
								<Typography variant="subtitle2" color="textSecondary">
									Clear filters
								</Typography>
							</Button>
						</Typography>
					</Stack>

					<Autocomplete
						options={mockLocations}
						onChange={(event, newValue) => {
							setChoosenLocation(newValue);
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								slotProps={{
									input: {
										...params.InputProps,
										sx: {
											borderRadius: theme.spacing(1.5),
											fontSize: '14px',
										},
										placeholder: 'Where do you want to work?',
										startAdornment: (
											<>
												<Search sx={{ ml: 0.5 }} />
												{params.InputProps.startAdornment}
											</>
										),
										endAdornment: <KeyboardArrowDown />,
									},
								}}
							/>
						)}
					/>
					<Typography variant="h6">Top Poland</Typography>
					<Stack flexDirection="row" gap={1} flexWrap="wrap">
						{mockLocations.slice(0, 6).map((location) => (
							<ButtonBase
								key={location.value}
								sx={{ borderRadius: '50px' }}
								onClick={() => handleSetLocation(location)}>
								<Chip
									variant={
										choosenLocation?.value === location.value
											? 'filled'
											: 'outlined'
									}
									color={
										choosenLocation?.value === location.value
											? 'primary'
											: 'default'
									}
									label={location.label}
									sx={{ padding: theme.spacing(2, 1) }}
								/>
							</ButtonBase>
						))}
					</Stack>

					<Typography variant="h6">Top World</Typography>
					<Stack flexDirection="row" gap={1} flexWrap="wrap">
						{mockLocations.slice(90, 96).map((location) => (
							<ButtonBase
								key={location.value}
								sx={{ borderRadius: '50px' }}
								onClick={() => handleSetLocation(location)}>
								<Chip
									variant={
										choosenLocation?.value === location.value
											? 'filled'
											: 'outlined'
									}
									color={
										choosenLocation?.value === location.value
											? 'primary'
											: 'default'
									}
									label={location.label}
									sx={{ padding: theme.spacing(2, 1) }}
								/>
							</ButtonBase>
						))}
					</Stack>

					<Typography variant="h6">Other Locations</Typography>
					<Stack flexDirection="row" gap={1} flexWrap="wrap">
						{mockLocations.slice(30, 45).map((location) => (
							<ButtonBase
								key={location.value}
								sx={{ borderRadius: '50px' }}
								onClick={() => handleSetLocation(location)}>
								<Chip
									variant={
										choosenLocation?.value === location.value
											? 'filled'
											: 'outlined'
									}
									color={
										choosenLocation?.value === location.value
											? 'primary'
											: 'default'
									}
									label={location.label}
									sx={{ padding: theme.spacing(2, 1) }}
								/>
							</ButtonBase>
						))}
					</Stack>
				</Stack>
				<Stack
					width="full"
					p={theme.spacing(3)}
					sx={[
						(theme) => ({
							backgroundColor: theme.vars?.palette.neutral.main,
						}),
						(theme) =>
							theme.applyStyles('dark', {
								backgroundColor: theme.vars?.palette.neutral.dark,
							}),
					]}>
					<Button
						variant="contained"
						size="large"
						color="primary"
						sx={{ borderRadius: '50px', ml: 'auto', px: 4 }}>
						<Typography variant="subtitle2">Show offers</Typography>
					</Button>
				</Stack>
			</Popover>
		</>
	);
}
