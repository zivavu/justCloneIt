'use client';

import { ArrowBack, KeyboardArrowRight } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import Link from 'next/link';
import { JobOfferComponentProps } from '../types';
import { StyledLink, StyledRoot } from './styles';

export function TopBar({ offer }: JobOfferComponentProps) {
	const theme = useTheme();

	return (
		<StyledRoot>
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
		</StyledRoot>
	);
}
