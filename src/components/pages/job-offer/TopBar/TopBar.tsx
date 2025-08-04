'use client';

import { ArrowBack, KeyboardArrowRight } from '@mui/icons-material';
import { Stack, useTheme } from '@mui/material';
import Link from 'next/link';
import { JobOffeer } from '../../home/OffersList/mockOffers';
import { StyledLink } from './style';

interface TopBarProps {
	offer: JobOffeer | undefined;
}

export function TopBar({ offer }: TopBarProps) {
	const theme = useTheme();

	return (
		<Stack
			direction="row"
			gap={1}
			height={88}
			bgcolor={theme.vars?.palette.background.paper}
			alignItems={'center'}
			px={4}
			color={theme.vars?.palette.text.secondary}>
			<Link
				href={'/job-offers'}
				style={{ height: '24px', marginRight: theme.spacing(2) }}>
				<ArrowBack />
			</Link>
			<StyledLink href={'/'}>All offers</StyledLink>
			<KeyboardArrowRight />
			<StyledLink href={'/job-offers'}>{offer?.location.city}</StyledLink>
			<KeyboardArrowRight />
			<StyledLink href={'/job-offers'}>
				{offer?.technologies[0].name}
			</StyledLink>
			<KeyboardArrowRight />
			<StyledLink href={'/job-offers'}>{offer?.title}</StyledLink>
		</Stack>
	);
}
