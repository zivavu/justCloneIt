import {
	Avatar,
	ButtonBase,
	darken,
	lighten,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { muiTechnologies, svgTechnologies } from './technologies';

export function TechnologiesFilterBar() {
	const theme = useTheme();

	return (
		<Stack direction="row" spacing={0.5} overflow="hidden">
			{[...svgTechnologies, ...muiTechnologies].map((technology, i) => {
				const secondGradientColor =
					i % 2 === 0
						? darken(technology.color, 0.3)
						: lighten(technology.color, 0.2);
				const gradient = `linear-gradient(to right, ${technology.color}, ${secondGradientColor})`;

				return (
					<ButtonBase
						disableRipple
						sx={{ p: 0, flex: 1, alignItems: 'start', height: 'min-content' }}
						key={technology.value}>
						<Stack
							sx={{ width: 52, alignItems: 'center', gap: 0.25 }}
							key={technology.value}>
							{typeof technology.icon === 'string' ? (
								<Avatar
									src={`/technologies/${technology.icon}`}
									sx={{
										width: 36,
										height: 36,
										backgroundImage: gradient,
										'& .MuiAvatar-img': {
											width: 20,
											height: 20,
										},
									}}
								/>
							) : (
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
									<technology.icon />
								</Stack>
							)}

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
		</Stack>
	);
}
