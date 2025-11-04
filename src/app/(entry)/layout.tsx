import React from 'react'

type EntryLayoutProps = {
	children: React.ReactNode
}

export default async function EntryLayout({ children }: EntryLayoutProps) {
	return (
		<div className="flex min-h-full flex-col">
			<main className="flex flex-1 flex-col">{children}</main>
		</div>
	)
}
