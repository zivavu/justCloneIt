'use client';
import {
	Box,
	List,
	ListItem,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import Markdown from 'react-markdown';
import { JobOfferComponentProps } from '../types';

export function OfferDescription({ offer }: JobOfferComponentProps) {
	const theme = useTheme();

	const cleanMarkdown = (content: string) => {
		if (!content) return '';

		return content
			.split('\n')
			.map((line) => line.trimStart())
			.join('\n')
			.trim();
	};

	return (
		<Stack
			sx={{
				bgcolor: theme.vars?.palette.background.paper,
				p: theme.spacing(3),
				maxWidth: '1000px',
				borderRadius: theme.spacing(0.75),
				gap: 1.5,
			}}>
			<Typography variant="h5">Job description</Typography>

			<Box sx={{ fontWeight: 400 }}>
				<Markdown
					components={{
						p: ({ node, ...props }) => (
							<Typography variant="body1" component="p" {...props} />
						),
						ul: ({ node, ...props }) => (
							<List sx={{ listStyleType: 'disc', pl: 2 }} {...props} />
						),
						li: ({ node, ...props }) => (
							<ListItem sx={{ display: 'list-item', p: 0 }} {...props} />
						),
					}}>
					{cleanMarkdown(offer?.jobDescription || '')}
				</Markdown>
			</Box>
		</Stack>
	);
}
