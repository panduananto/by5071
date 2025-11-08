import React from 'react'
import { Metadata } from 'next'

import { env } from '@/env'

import { serif } from '@/config/font'

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Blog',
	description: 'Explore the latest news and updates from by5071',
}

export default async function BlogPage() {
	return (
		<React.Fragment>
			<div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
				<div className="py-8">
					<PageHeader as={'div'}>
						<PageHeaderHeading className={`${serif.className}`}>Blog</PageHeaderHeading>
						<PageHeaderDescription>Explore the latest news and updates from by5071</PageHeaderDescription>
					</PageHeader>
				</div>
			</div>
		</React.Fragment>
	)
}
