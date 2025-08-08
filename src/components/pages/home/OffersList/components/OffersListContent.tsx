'use client';

import {
	ApartmentRounded,
	BookmarkBorderOutlined,
	PlaceOutlined,
	ShareLocationOutlined,
} from '@mui/icons-material';
import { Box, ButtonBase, Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { JobOffeer } from '../mockOffers';

interface OffersListContentProps {
	offers: JobOffeer[];
}

export function OffersListContent({ offers }: OffersListContentProps) {
	const theme = useTheme();

	const currentDate = dayjs(new Date());
	return (
		<Stack gap={1.5}>
			{offers.map((offer) => (
				<Link href={`job-offer/${offer.slug}`} key={offer.slug}>
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
									<ApartmentRounded fontSize="small" />
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
						<Stack ml="auto" py={0.25}>
							<Stack direction="row" ml="auto" gap={1}>
								<Typography
									variant="subtitle1"
									fontSize="1rem"
									fontWeight={600}
									color="success">
									{offer.salary.min} - {offer.salary.max}/month
								</Typography>
								{currentDate.diff(offer.dateOfPublication, 'd') < 3 ? (
									<Box
										sx={{
											backgroundColor: theme.vars?.palette.background.dark,
											borderRadius: '50px',
											px: 1,
											py: 0.25,
										}}>
										<Typography>New</Typography>
									</Box>
								) : (
									<Stack
										sx={{
											border: `1px solid ${theme.vars?.palette.divider}`,
											borderRadius: '50px',
											p: 0.5,
											alignItems: 'center',
										}}>
										<Typography
											variant="caption"
											fontSize="11px"
											color="textSecondary">
											{`${dayjs(currentDate).diff(
												offer.dateOfPublication,
												'day'
											)} d ago`}
										</Typography>
									</Stack>
								)}
							</Stack>
							<Stack mt="auto" direction="row" gap={1} ml="auto">
								{offer.technologies.slice(0, 3).map((tech) => (
									<Stack
										key={tech.name}
										sx={{
											border: `1px solid ${theme.vars?.palette.divider}`,
											borderRadius: '50px',
											px: 0.5,
											py: 0.25,
											alignItems: 'center',
										}}>
										<Typography
											variant="caption"
											fontSize={11}
											color="textSecondary">
											{tech.name}
										</Typography>
									</Stack>
								))}
							</Stack>
						</Stack>
						<Stack justifyContent="center">
							<ButtonBase>
								<BookmarkBorderOutlined />
							</ButtonBase>
						</Stack>
					</Stack>
				</Link>
			))}
		</Stack>
	);
}
