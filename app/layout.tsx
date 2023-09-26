import './globals.css'
import type { Metadata } from 'next'
import { sdsMonotone } from '../lib/fonts/fonts'
import Terminal from './components/Terminal/Terminal'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        </Terminal>
      </body>
    </html>
  )
}
