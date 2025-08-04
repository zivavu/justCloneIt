'use client';

import {
	Apartment,
	PlaceOutlined,
	ShareLocationOutlined,
} from '@mui/icons-material';
import { Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { OffersListHeader } from './components/OffersListHeader';
import { MOCK_OFFERS } from './mockOffers';

export function OffersList() {
	const theme = useTheme();

	const offer = MOCK_OFFERS[0];
	return (
		<Stack width="100%" maxWidth="1096px">
			<OffersListHeader />

			<Stack gap={1.5} py={1}>
				<Link href={`job-offer/${offer.slug}`}>
					<Stack
						direction="row"
						gap={3}
						px={3}
						py={0.75}
						bgcolor={theme.vars?.palette.background.paper}
						borderRadius={1.5}>
						<Image
							src={'/TBS-Logo.png'}
							alt={offer.company}
							width={84}
							height={64}
							style={{
								backgroundColor: 'white',
								borderRadius: 8,
								padding: theme.spacing(0.5),
							}}
						/>
						<Stack
							justifyContent="space-between"
							py={0.5}
							color={theme.vars?.palette.text.secondary}>
							<Typography variant="h6" fontSize={16} color="textPrimary">
								{offer.title}
							</Typography>
							<Stack direction="row" gap={2}>
								<Stack direction="row" gap={1}>
									<Apartment fontSize="small" />
									<Typography variant="caption" fontWeight={400}>
										{offer.company}
									</Typography>
								</Stack>
								<Stack direction="row" gap={1}>
									<PlaceOutlined fontSize="small" />
									<Typography variant="caption" fontWeight={400}>
										{offer.location.city}
									</Typography>
								</Stack>
								{offer.operatingMode === 'Remote' && (
									<Stack
										direction="row"
										sx={{
											backgroundColor: theme.vars?.palette.background.dark,
											borderRadius: '50px',
											px: 1,
											py: 0.25,
											gap: 0.5,
											alignItems: 'center',
										}}>
										<ShareLocationOutlined sx={{ fontSize: 16 }} />
										<Typography variant="caption">Fully Remote</Typography>
									</Stack>
								)}
							</Stack>
						</Stack>
						<Stack ml={'auto'}></Stack>
					</Stack>
				</Link>
			</Stack>
		</Stack>
	);
}
