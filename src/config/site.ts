import type { MainNavigationItem } from '@/types'

export const siteConfig = {
	name: 'by5071',
	description: 'self blog',
	url: 'https://by5071.com',
	ogImage: 'https://by5071.com/opengraph-image.png',
	links: {
		github: 'https://github.com/panduananto/by5071',
	},
	mainNavigation: [
		{
			title: 'Lobby',
			items: [
				{
					title: 'blog',
					href: '/blog',
					items: [],
				},
				{
					title: 'about',
					href: '/about',
					items: [],
				},
			],
		},
	] satisfies MainNavigationItem[],
}

export type SiteConfig = typeof siteConfig
