'use client';

import { addSpaceSeparator } from '@/utils/addSpaceSeparator';
import {
	AccountBalanceWalletOutlined,
	ApartmentRounded,
	DescriptionOutlined,
	PlaceOutlined,
	ShareLocationOutlined,
	StarOutlineRounded,
	TimerOutlined,
} from '@mui/icons-material';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { JSX } from 'react';
import { JobOfferComponentProps } from '../types';

interface JobDetails {
	label: string;
	icon: JSX.Element;
	value: string;
	backgroundColor: string;
	color: string;
}

export function OfferHeader({ offer }: JobOfferComponentProps) {
	const theme = useTheme();

	if (!offer) return null;

	const jobDetails: JobDetails[] = [
		{
			label: 'Type of work',
			icon: <TimerOutlined />,
			value: offer.typeOfWork,
			backgroundColor: 'rgba(174, 122, 0, 0.2)',
			color: 'rgb(255, 138, 41)',
		},
		{
			label: 'Experience',
			icon: <StarOutlineRounded />,
			value: offer.experienceLevel,
			backgroundColor: 'rgba(97, 13, 110, 0.3)',
			color: 'rgb(171, 71, 188)',
		},
		{
			label: 'Employment Type',
			icon: <DescriptionOutlined />,
			value: offer.contractType,
			backgroundColor: 'rgba(0, 91, 23, 0.2)',
			color: 'rgb(72, 187, 120)',
		},
		{
			label: 'Operating mode',
			value: offer.operatingMode,
			icon: <ShareLocationOutlined />,
			backgroundColor: 'rgba(0, 91, 134, 0.2)',
			color: 'rgb(66, 153, 225)',
		},
	] as const;

	return (
		<Stack>
			<Stack
				direction="row"
				sx={{
					p: theme.spacing(4, 3),
					gap: 3,
					backgroundImage: `linear-gradient(to right, ${theme.vars?.palette.primary.main}, ${theme.vars?.palette.primary.dark})`,
					borderRadius: theme.spacing(0.75),
					borderBottomLeftRadius: 0,
					borderBottomRightRadius: 0,
				}}>
				<Stack
					sx={{
						height: 164,
						width: 164,
						borderRadius: '50%',
						p: theme.spacing(2),
						position: 'relative',
						backgroundColor: theme.vars?.palette.common.white,
					}}>
					<Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
						<Image
							src={'/TBS-Logo.png'}
							alt={offer.company}
							fill
							style={{ objectFit: 'contain' }}
						/>
					</Box>
				</Stack>
				<Stack gap={2.5} sx={{ color: theme.vars?.palette.common.white }}>
					<Typography variant="h6">{offer.title}</Typography>

					<Stack direction="row" gap={1}>
						<ApartmentRounded />
						<Typography variant="body1" mr={1}>
							{offer.company}
						</Typography>

						<PlaceOutlined />
						<Typography variant="body1">{offer.location.city}</Typography>
					</Stack>

					<Stack
						sx={{
							flexDirection: 'row',
							p: theme.spacing(1, 2),
							gap: theme.spacing(2),
							borderRadius: theme.spacing(2),
							backgroundColor: 'rgba(255, 255, 255, 0.24)',
							alignItems: 'center',
						}}>
						<AccountBalanceWalletOutlined />
						<Stack spacing={0.5}>
							<Typography variant="h6" letterSpacing={0.15}>
								{addSpaceSeparator(offer.salary.min)} -{' '}
								{addSpaceSeparator(offer.salary.max)} PLN/month
							</Typography>
							<Typography variant="caption">
								Net per month - {offer.contractType}
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
			<Stack
				direction="row"
				sx={{
					p: theme.spacing(4, 2),
					backgroundColor: theme.vars?.palette.background.paper,
					borderBottomRightRadius: theme.spacing(0.75),
					borderBottomLeftRadius: theme.spacing(0.75),
				}}>
				{jobDetails.map(({ label, icon, value, backgroundColor, color }) => {
					return (
						<Stack
							direction="row"
							width="25%"
							alignItems="center"
							gap={1}
							key={label}>
							<Stack
								sx={{
									p: 1.5,
									backgroundColor,
									color,
									borderRadius: theme.spacing(2),
									'& svg': { fontSize: 28 },
								}}>
								{icon}
							</Stack>
							<Stack gap={0.5}>
								<Typography color="textSecondary" variant="caption">
									{label}
								</Typography>
								<Typography variant="body2">{value}</Typography>
							</Stack>
						</Stack>
					);
				})}
			</Stack>
		</Stack>
	);
}
