'use client';

import { Box, Stack, Typography, useTheme } from '@mui/material';
import { JobOfferComponentProps } from '../types';

const SKILL_LABEL = [
	'Nice To Have',
	'Junior',
	'Regular',
	'Advanced',
	'Expert',
] as const;

export function OfferTechStack({ offer }: JobOfferComponentProps) {
	const theme = useTheme();

	if (!offer) return null;
	return (
		<Stack
			sx={{
				bgcolor: theme.vars?.palette.background.paper,
				borderRadius: theme.spacing(0.75),
				p: theme.spacing(3),
				gap: 3,
			}}>
			<Typography variant="h5">Tech stack</Typography>
			<Stack direction="row" flexWrap="wrap" gap={1}>
				{offer.technologies.map((tech) => (
					<Stack width={200} gap={0.25} key={tech.name}>
						<Typography variant="subtitle1" fontSize={'1.125rem'}>
							{tech.name}
						</Typography>
						<Stack direction="row" gap={1}>
							{new Array(5).fill(0).map((v, i) => {
								return (
									<Box
										key={i}
										sx={{
											width: '10px',
											height: '10px',
											borderRadius: '50%',
											backgroundColor:
												tech.level >= i
													? theme.vars?.palette.primary.main
													: theme.vars?.palette.grey[500],
										}}
									/>
								);
							})}
						</Stack>
						<Typography variant="caption" color="textSecondary">
							{SKILL_LABEL[tech.level]}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
}
