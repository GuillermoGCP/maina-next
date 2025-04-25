import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})
export const metadata = {
  title: 'Maina Gastronomía',
  description: 'Restaurante de comida mediterránea, española y contemporánea',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`antialiased ${inter.variable} ${roboto.variable}`}
    >
      <body>
        <Header />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  )
}
