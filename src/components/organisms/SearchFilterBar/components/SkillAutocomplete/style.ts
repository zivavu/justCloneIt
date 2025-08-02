import { Chip, styled } from '@mui/material';

interface StyledPopperListItemProps {
	selected: boolean;
}

export const StyledPopperListItem = styled('li', {
	shouldForwardProp: (prop) => prop !== 'selected',
})<StyledPopperListItemProps>(({ theme, selected }) => ({
	paddingLeft: '0.25rem',
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	borderRadius: theme.spacing(1),
	'&:hover': {
		backgroundColor: theme.vars?.palette.neutral.dark,
	},
	...(selected && {
		color: theme.vars?.palette.primary.main,
	}),
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
	backgroundColor: theme.vars?.palette.neutral.dark,
	color: theme.vars?.palette.neutral.light,
	height: '28px',
	maxWidth: '130px !important',

	'& .MuiChip-deleteIcon': {
		fill: theme.vars?.palette.neutral.light,
	},
	...theme.applyStyles('dark', {
		backgroundColor: theme.vars?.palette.neutral.light,
		color: theme.vars?.palette.neutral.dark,

		'& .MuiChip-deleteIcon': {
			fill: theme.vars?.palette.neutral.dark,
		},
	}),
}));
