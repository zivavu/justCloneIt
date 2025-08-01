import { Typography } from '@mui/material';
import Link from 'next/link';
import { StyledButton } from './styles';

interface NavButtonLinkProps {
	text: string;
	href: string;
}

export function NavButtonLink({ text, href }: NavButtonLinkProps) {
	return (
		<StyledButton LinkComponent={Link} href={href} variant="text">
			<Typography fontSize={13} color="textSecondary" fontWeight="600">
				{text}
			</Typography>
		</StyledButton>
	);
}
