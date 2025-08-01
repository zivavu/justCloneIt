import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: theme.spacing(1.5),
	padding: theme.spacing(1.25, 2),

	':hover': {
		backgroundColor: theme.vars?.palette.background.default,
	},
}));
