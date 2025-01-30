import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seek An AI | Find The Right AI For You',
  description: 'Seek An AI will find the right AI tool for you that you can use to streamline your work and tasks. Get specialized AI to perform the task for you',
  icons: {
    icon: '/favicon.png', // Specify your favicon file here
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
