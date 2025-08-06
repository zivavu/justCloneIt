'use client';

import { Checkbox } from '@/components/atoms/Checkbox/Checkbox';
import { UploadFileOutlined } from '@mui/icons-material';
import {
	Button,
	FormControl,
	FormLabel,
	OutlinedInput,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { JobOfferComponentProps } from '../types';

export function ApplyForJob({ offer }: JobOfferComponentProps) {
	const theme = useTheme();

	return (
		<Stack
			sx={{
				bgcolor: theme.vars?.palette.background.paper,
				p: theme.spacing(3),
				maxWidth: '1000px',
				borderRadius: theme.spacing(0.75),
				gap: 1.5,
			}}>
			<Typography variant="h5">Apply for this job</Typography>

			<Stack direction="row" gap={4}>
				<FormControl sx={{ width: '50%' }}>
					<FormLabel sx={{ fontSize: '0.875rem' }}>
						First and last name
					</FormLabel>
					<OutlinedInput placeholder="Enter your first and last name" />
				</FormControl>

				<FormControl sx={{ width: '50%' }}>
					<FormLabel sx={{ fontSize: '0.875rem' }}>Email</FormLabel>
					<OutlinedInput placeholder="Enter your email" />
				</FormControl>
			</Stack>

			<FormControl>
				<FormLabel sx={{ fontSize: '0.875rem' }}>
					Introduce yourself(Linkedin/Github links)
				</FormLabel>
				<OutlinedInput
					multiline
					rows={6}
					placeholder="Type something about you or paste links to your Linkedin, Github"
				/>
			</FormControl>

			<FormLabel sx={{ fontSize: '0.875rem' }}>File upload</FormLabel>
			<Stack
				sx={{
					height: '86px',
					flexDirection: 'row',
					alignItems: 'center',
					gap: 3,
					px: 3,
					border: `2px dashed ${theme.vars?.palette.neutral.main}`,
					borderRadius: '16px',
				}}>
				<UploadFileOutlined
					sx={{ fontSize: '52px', color: theme.vars?.palette.text.secondary }}
				/>
				<Typography variant="body1" color="textSecondary">
					Add document
				</Typography>
			</Stack>
			<Typography variant="caption" color="textSecondary">
				Format: PDF, DOCX, JPEG, PNG. Max size 5 MB
			</Typography>

			<Stack direction="row" gap={1} alignItems="center">
				<Checkbox />
				<FormLabel sx={{ fontSize: '0.875rem' }}>
					I consent to the processing of my personal data for future recruitment
					purposes.
				</FormLabel>
			</Stack>

			<Button
				sx={{ width: 'fit-content', px: 16, py: 1.5, mx: 'auto', mt: 4 }}
				size="large"
				variant="contained">
				Apply
			</Button>
		</Stack>
	);
}
