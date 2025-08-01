import { Autocomplete, Chip, Stack, TextField, useTheme } from '@mui/material';
import { mockOptions, valueLabel } from '../../mockOptions';
import { Search } from '@mui/icons-material';

export function SkillAutocomplete() {
	const theme = useTheme();

	return (
		<Autocomplete
			sx={{
				width: '210px',
				borderRadius: '50%',
				'& .MuiInputBase-root': {
					flexWrap: 'nowrap',
				},
			}}
			options={mockOptions}
			getOptionKey={(option) => option.value}
			getOptionLabel={(option) => option.label}
			multiple
			disableClearable
			renderInput={(params) => (
				<TextField
					{...params}
					size="small"
					slotProps={{
						input: {
							...params.InputProps,
							sx: {
								maxHeight: '40px',
								borderRadius: '50px',
								backgroundColor: theme.vars?.palette.background.default,
							},
							placeholder: 'Search',
							startAdornment: (
								<>
									<Search sx={{ ml: 0.5 }} />
									{params.InputProps.startAdornment}
								</>
							),
						},
					}}
				/>
			)}
			renderValue={(value: readonly valueLabel[], getItemProps) => (
				<Stack sx={{ flexDirection: 'row', overflow: 'hidden' }}>
					{value.map((option: valueLabel, index: number) => {
						const { key, ...itemProps } = getItemProps({ index });
						return (
							<Chip
								variant="filled"
								size="small"
								sx={{
									backgroundColor: theme.vars?.palette.grey[500],
									text: theme.vars?.palette.background.default,
								}}
								label={option.label}
								key={key}
								{...itemProps}
							/>
						);
					})}
				</Stack>
			)}
		/>
	);
}
