import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
import { Inter } from 'next/font/google'
import './scss/main.scss'

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata = {
  title: 'Next JS Example',
  description: 'Dark modern Next.ls demo',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    siteName: 'Tutorial',
    description: 'Some text…',
    images: ['/og-image.jpg'],
  },
}

export const viewport = {
  themeColor: '#070f14',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="ru" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://jsonplaceholder.typicode.com" />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="bg-grid"></div>
        <Navigation />
        <main className="container page" id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
