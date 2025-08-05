'use client';

import { addSpaceSeparator } from '@/utils/addSpaceSeparator';
import {
	AccountBalanceWalletOutlined,
	ApartmentRounded,
	PlaceOutlined,
} from '@mui/icons-material';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { JobOfferComponentProps } from '../types';

export function OfferHeader({ offer }: JobOfferComponentProps) {
	const theme = useTheme();

	if (!offer) return null;

	return (
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
	);
}
