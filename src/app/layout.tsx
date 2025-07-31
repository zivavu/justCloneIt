import { Header } from '@/features/Header/Header';
import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import theme from '../lib/theme';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
	const { children } = props;
	return (
		<html lang="en" className={roboto.variable}>
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<Header />
						{children}
						<CssBaseline />
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
