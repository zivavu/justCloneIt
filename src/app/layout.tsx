import { Header } from '@/features/Header/Header';
import { CssBaseline, InitColorSchemeScript } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Open_Sans } from 'next/font/google';
import theme from '../lib/theme';

const openSans = Open_Sans({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-open-sans',
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
	const { children } = props;
	return (
		<html lang="en" className={openSans.variable} suppressHydrationWarning>
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<InitColorSchemeScript attribute="class" />
						<Header />
						{children}
						<CssBaseline />
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
