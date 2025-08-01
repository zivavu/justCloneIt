import { ExpandMore, LocationOnOutlined } from '@mui/icons-material';
import { Button, Stack, Typography, useTheme } from '@mui/material';

export function LocationInput() {
	const theme = useTheme();
	return (
		<Button
			variant="outlined"
			color="neutral"
			sx={{ borderRadius: '50px', height: '40px', px: 3 }}>
			<Stack
				direction="row"
				spacing={1}
				sx={{ '& > *': { color: theme.vars?.palette.text.secondary } }}>
				<LocationOnOutlined />
				<Typography variant="subtitle2">Location</Typography>
				<ExpandMore />
			</Stack>
		</Button>
	);
}
