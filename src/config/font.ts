import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'

const sans = IBM_Plex_Sans({ subsets: ['latin'] })
const serif = IBM_Plex_Serif({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] })

export { sans, serif }
