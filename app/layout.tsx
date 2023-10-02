import './globals.css'
import type { Metadata } from 'next'
import { sdsMonotone } from '../lib/fonts/fonts'
import Terminal from './components/Terminal/Terminal'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Mason Turner | Software Engineer',
  description: 'Mason Turner is a software engineer located in Southern Virginia. This is his portfolio site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sdsMonotone.className}>
        <Terminal>
          {children}
          <Analytics/>
        </Terminal>
      </body>
    </html>
  )
}