import { env } from '@/env'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
	return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function formatDate(date: Date | string | number, opts: Intl.DateTimeFormatOptions = {}) {
	return new Intl.DateTimeFormat('en-US', {
		month: opts.month ?? 'long',
		day: opts.day ?? 'numeric',
		year: opts.year ?? 'numeric',
		...opts,
	}).format(new Date(date))
}
