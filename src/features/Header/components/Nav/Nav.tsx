import {
	BookmarkBorderOutlined,
	KeyboardArrowDown,
	Menu,
	NotificationsOutlined,
} from '@mui/icons-material';
import {
	Avatar,
	Button,
	IconButton,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import Link from 'next/link';
import { NavButtonLink } from './components/NavButtonLink/NavButtonLink';

export function Nav() {
	const theme = useTheme();

	return (
		<Stack
			sx={{
				flexDirection: 'row',
				alignItems: 'center',
				ml: 'auto',
				gap: theme.spacing(2),
			}}>
			<NavButtonLink href={'/'} text={'Job offers'} />
			<NavButtonLink href={'/salary-calculator'} text={'Salary calculator'} />
			<NavButtonLink href={'/brands'} text={'Top Companies'} />
			<NavButtonLink href={'/blog'} text={'Geek'} />

			<Stack
				sx={{
					flexDirection: 'row',
					gap: theme.spacing(2),
				}}>
				<Button sx={{ display: 'flex', gap: theme.spacing(1) }}>
					<Avatar src="/avatar.png" sx={{ width: 24, height: 24 }} />
					<Typography>My Profile</Typography>
					<KeyboardArrowDown />
				</Button>

				<IconButton LinkComponent={Link} href={'/favorite-offers'}>
					<BookmarkBorderOutlined />
				</IconButton>

				<IconButton LinkComponent={Link} href={'/favorite-offers'}>
					<NotificationsOutlined />
				</IconButton>

				<IconButton>
					<Typography variant="caption" color="textSecondary" fontWeight="600">
						PLN
					</Typography>
				</IconButton>

				<IconButton>
					<Menu />
				</IconButton>
			</Stack>
		</Stack>
	);
}
