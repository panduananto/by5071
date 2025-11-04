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

