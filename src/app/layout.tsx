import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import Providers from './providers'
const satoshi = localFont({
	src: [
		{
			path: './fonts/Satoshi-LightItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: './fonts/Satoshi-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-Italic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: './fonts/Satoshi-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: './fonts/Satoshi-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: './fonts/Satoshi-Black.woff2',
			weight: '900',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-BlackItalic.woff2',
			weight: '900',
			style: 'italic',
		},
		{
			path: './fonts/Satoshi-Variable.woff2',
			weight: '300 900',
			style: 'normal',
		},
		{
			path: './fonts/Satoshi-VariableItalic.woff2',
			weight: '300 900',
			style: 'italic',
		},
	],
	variable: '--font-satoshi',
	display: 'swap',
	fallback: ['sans-serif'],
})

const integralCF = localFont({
	src: [
		{
			path: './fonts/IntegralCF-ExtraBold.woff2',
			weight: '800',
			style: 'bold',
		},
	],
	variable: '--font-integral',
	display: 'swap',
	fallback: ['sans-serif'],
})

export const metadata: Metadata = {
	title: 'SHOP.CO',
	description:
		'The best E-COMMERCE shop only the most popular brends VERSACE GUCCI PRADA',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${satoshi.variable} ${integralCF.variable} `}>
				<Providers>
					<div className='app'>
						<Header />
						{children}
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	)
}
