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
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <div className="bg-grid"></div>
        <Navigation />
        <main className="container page">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
