'use client';

import { MoreHoriz } from '@mui/icons-material';
import {
	ButtonBase,
	darken,
	IconButton,
	lighten,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { muiTechnologies, svgTechnologies } from './technologies';

const BUTTON_WIDTH = 52;

export function TechnologiesFilterBar() {
	const theme = useTheme();

	const rootEl = useRef<HTMLDivElement>(null);
	const [maxTechnologies, setMaxTechnologies] = useState(20);

	function handleResize() {
		if (!rootEl?.current) return;

		setMaxTechnologies(
			Math.floor((rootEl?.current?.offsetWidth - 100) / BUTTON_WIDTH)
		);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
	}, []);

	return (
		<Stack
			direction="row"
			overflow="hidden"
			alignItems="flex-start"
			ref={rootEl}
			width="100%">
			{[...svgTechnologies, ...muiTechnologies]
				.slice(0, maxTechnologies)
				.map((technology, i) => {
					const secondGradientColor =
						i % 2 === 0
							? darken(technology.color, 0.3)
							: lighten(technology.color, 0.2);
					const gradient = `linear-gradient(to right, ${technology.color}, ${secondGradientColor})`;

					return (
						<ButtonBase
							disableRipple
							sx={{
								p: 0,
								flex: 1,
								alignItems: 'start',
								maxWidth: BUTTON_WIDTH,
								height: 'min-content',
							}}
							key={technology.value}>
							<Stack
								sx={{ alignItems: 'center', gap: 0.25 }}
								key={technology.value}>
								<Stack
									sx={{
										width: 36,
										height: 36,
										borderRadius: '50%',
										alignItems: 'center',
										justifyContent: 'center',
										backgroundImage: gradient,
										'& svg': {
											width: 20,
											height: 20,
										},
									}}>
									{typeof technology.icon === 'string' ? (
										<Image
											src={`/technologies/${technology.icon}`}
											alt={technology.label}
											width={20}
											height={20}
										/>
									) : (
										<technology.icon
											sx={{ color: theme.palette.common.white }}
										/>
									)}
								</Stack>

								<Typography
									variant="caption"
									color="textSecondary"
									sx={{
										textOverflow: 'ellipsis',
										overflow: 'hidden',
										whiteSpace: 'nowrap',
										fontWeight: 600,
									}}>
									{technology.label}
								</Typography>
							</Stack>
						</ButtonBase>
					);
				})}
			<IconButton>
				<MoreHoriz sx={{ color: theme.vars?.palette.text.secondary }} />
			</IconButton>
		</Stack>
	);
}
