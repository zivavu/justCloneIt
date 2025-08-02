import { AutoAwesome, Close, Search } from '@mui/icons-material';
import {
	Autocomplete,
	AutocompletePaperSlotPropsOverrides,
	Paper,
	PaperOwnProps,
	Stack,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import { mockOptions, valueLabel } from '../../mockOptions';
import { StyledChip, StyledPopperListItem } from './style';

export type SkillAutocompleteProps = PaperOwnProps &
	CommonProps &
	Omit<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		keyof DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> &
	AutocompletePaperSlotPropsOverrides;

export function SkillAutocomplete() {
	const theme = useTheme();
	const [selected, setSelected] = useState<valueLabel[]>([]);

	function PopperPaper(props: SkillAutocompleteProps) {
		const { children, className } = props;
		const theme = useTheme();
		return (
			<Paper
				className={className}
				sx={{
					mt: theme.spacing(1),
					padding: theme.spacing(2),
					borderRadius: theme.spacing(1),
					backgroundColor: theme.vars?.palette.background.default,
					border: `1px solid ${theme.vars?.palette.neutral.main}`,
					width: 'min(320px, 90vw)',
				}}>
				<Stack direction="row" flexWrap="wrap" gap={1}>
					{selected.map((option) => (
						<StyledChip
							key={option.value}
							label={option.label}
							variant="filled"
							size="small"
							color="default"
							onDelete={() =>
								setSelected(selected.filter((o) => o.value !== option.value))
							}
							deleteIcon={<Close />}
						/>
					))}
				</Stack>
				{children}
			</Paper>
		);
	}

	return (
		<Autocomplete
			sx={{
				borderRadius: '50px',
				maxHeight: '40px',
				'& .MuiInputBase-root': {
					flexWrap: 'nowrap',
					width: '210px',
					overflow: 'hidden',
					'&.Mui-focused': {
						'& .MuiChip-root': {
							display: 'none',
						},
					},
				},
			}}
			value={selected}
			onChange={(event, value) => setSelected(value)}
			options={mockOptions}
			getOptionKey={(option) => option.value}
			getOptionLabel={(option) => option.label}
			multiple
			blurOnSelect
			disableCloseOnSelect
			disablePortal
			slots={{ paper: PopperPaper }}
			renderInput={(params) => (
				<TextField
					{...params}
					size="small"
					slotProps={{
						input: {
							...params.InputProps,
							sx: {
								height: '40px',
								borderRadius: '50px',
								backgroundColor: theme.vars?.palette.background.default,
								fontSize: '0.875rem',
								color: theme.vars?.palette.text.secondary,
							},
							placeholder: 'Search',
							startAdornment: (
								<>
									<Search sx={{ ml: 0.5 }} />
									{params.InputProps.startAdornment}
								</>
							),
							endAdornment: null,
						},
					}}
				/>
			)}
			renderOption={(props, option, { selected }) => {
				const { key, className, ...optionProps } = props;
				return (
					<StyledPopperListItem key={key} {...optionProps} selected={selected}>
						<Stack direction="row" gap={1}>
							<AutoAwesome />
							<Typography fontWeight={400}>{option.label}</Typography>
						</Stack>
					</StyledPopperListItem>
				);
			}}
			renderValue={(value: readonly valueLabel[], getItemProps) => (
				<Stack sx={{ flexDirection: 'row' }}>
					{value.map((option: valueLabel, index: number, array) => {
						const { key, onDelete, ...itemProps } = getItemProps({ index });

						if (index > 1) return null;
						return (
							<StyledChip
								key={key}
								variant="filled"
								size="small"
								color="default"
								deleteIcon={<Close />}
								label={index >= 1 ? `+${array.length - 1}` : option.label}
								onDelete={index >= 1 ? undefined : onDelete}
								{...itemProps}
							/>
						);
					})}
				</Stack>
			)}></Autocomplete>
	);
}
