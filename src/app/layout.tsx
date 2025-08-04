import { Header } from '@/components/organisms/Header/Header';
import { theme } from '@/lib/theme';
import { CssBaseline, InitColorSchemeScript } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Open_Sans } from 'next/font/google';

import './globals.css';

const openSans = Open_Sans({
	weight: ['300', '400', '500', '600', '700'],
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
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>
						<InitColorSchemeScript attribute="class" />
						<CssBaseline enableColorScheme />
						<Header />
						{children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
