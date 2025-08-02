import { CheckOutlined } from '@mui/icons-material';
import {
	Box,
	CheckboxProps,
	Checkbox as MuiCheckbox,
	Stack,
	useTheme,
} from '@mui/material';

export function Checkbox(props: CheckboxProps) {
	const theme = useTheme();

	return (
		<MuiCheckbox
			icon={
				<Box
					sx={{
						width: 24,
						height: 24,
						borderRadius: '8px',
						border: `2px solid #9496a1`,

						...theme.applyStyles('dark', {
							border: `2px solid #7b7b7b`,
						}),
					}}
				/>
			}
			checkedIcon={
				<Stack
					sx={{
						alignItems: 'center',
						justifyContent: 'center',
						width: 24,
						height: 24,
						borderRadius: '8px',
						backgroundColor: theme.vars?.palette.primary.main,
					}}>
					<CheckOutlined
						sx={{
							fontSize: 20,
							color: theme.vars?.palette.background.paper,
						}}
					/>
				</Stack>
			}
			{...props}
		/>
	);
}
