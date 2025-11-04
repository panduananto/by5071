import type { Metadata, Viewport } from 'next'

import '@/styles/index.css'

import { env } from '@/env'

import { sans } from '@/config/font'
import { siteConfig } from '@/config/site'
import { absoluteUrl } from '@/lib/utils'

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	width: 'device-width',
	initialScale: 1,
}

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ['blog', 'personal', 'by5071'],
	authors: [
		{
			name: 'panduananto',
			url: 'https://github.com/panduananto',
		},
	],
	creator: 'panduananto',
	openGraph: {
		type: 'website',
		locale: 'in_ID',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	manifest: absoluteUrl('/site.webmanifest'),
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${sans.className} h-full scroll-smooth`}>
			<body className="h-full overscroll-none bg-background text-secondary-foreground antialiased">{children}</body>
		</html>
	)
}

