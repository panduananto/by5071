import React from 'react'
import { Metadata } from 'next'

import { env } from '@/env'

import { serif } from '@/config/font'

import { PageHeader, PageHeaderHeading } from '@/components/page-header'

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'about by5071',
	description: 'a blog of by5071',
}

export default async function CompanyPage() {
	return (
		<React.Fragment>
			<section className="my-10 md:my-20">
				<div className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 px-4 py-8 sm:px-6 md:gap-y-12 lg:px-8">
					<PageHeader as={'div'}>
						<PageHeaderHeading className={`${serif.className}`} size={'lg'}>
							by5071
						</PageHeaderHeading>
					</PageHeader>
				</div>
			</section>
		</React.Fragment>
	)
}
